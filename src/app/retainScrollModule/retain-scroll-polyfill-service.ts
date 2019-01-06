import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { InjectionToken } from "@angular/core";
import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { NavigationStart } from "@angular/router";
import { NgZone } from "@angular/core";
import { Router } from "@angular/router";

import { DomUtils } from "./dom-utils";
import { Target } from "./dom-utils";

export var OPTIONS_TOKEN = new InjectionToken<Options>( "RetainScrollPolyfillService.Options" );

export interface Options {
	pollDuration: number;
	pollCadence: number;
}

interface RenderStates {
	[ key: string ]: Page;
}

interface Page {
	url: string;
	pageStates: PageState[];
}

interface PageState {
	historyID: string;
	elementStates: ElementStates;
}

interface ElementStates {
	[ key: string ]: ElementState;
}

interface ElementState {
	selector: string;
	scrollTop: number;
}

@Injectable()
export class RetainScrollPolyfillService {

	private applyStateToDomTimer: any;
	private currentHistoryID: string;
	private domUtils: DomUtils;
	private historyCounter: number;
	private lastNavigationStartAt: number;
	private pendingElements: Set<Target>;
	private pendingElementsTimer: any;
	private pollCadence: number;
	private pollDuration: number;
	private poppedHistoryID: string;
	private previousPageState: PageState;
	private renderStates: RenderStates;
	private router: Router;
	private scrolledElements: Map<Target, number>;
	private zone: NgZone;

	constructor(
		domUtils: DomUtils,
		router: Router,
		zone: NgZone,

		@Inject( OPTIONS_TOKEN ) options: Options
		) {

		this.domUtils = domUtils;
		this.router = router;
		this.zone = zone;

		if ( ! this.supportsPushState() ) {
			return;
		}

		this.applyStateToDomTimer = 0;
		this.historyCounter = 0;
		this.lastNavigationStartAt = 0;
		this.pendingElements = new Set();
		this.pendingElementsTimer = 0;
		this.pollCadence = options.pollCadence;
		this.pollDuration = options.pollDuration;
		this.poppedHistoryID = null;
		this.previousPageState = null;
		this.renderStates = Object.create( null );
		this.scrolledElements = new Map();

		this.currentHistoryID = this.getNextHistoryID();

		this.setupPushStateMonkeyPatch();
		this.setupScrollBinding();
		this.setupPopstateBinding();
		this.setupRouterBinding();

  }
  
	private applyPageStateToDom( pageState: PageState ) : void {
		var elementStates = Object.keys( pageState.elementStates ).map(
			( selector: string ) : ElementState => {
				return( pageState.elementStates[ selector ] );
			}
		);

		if ( ! elementStates.length ) {
			return;
		}
		this.zone.runOutsideAngular(
			() : void => {

        var startedAt = Date.now();
        
				this.applyStateToDomTimer = setInterval(
					() => {
						for ( var i = ( elementStates.length - 1 ) ; i >= 0 ; i-- ) {

							var elementState = elementStates[ i ];
							var target = this.domUtils.select( elementState.selector );

							if ( target ) {
								if ( this.scrolledElements.has( target ) ) {
									elementStates.splice( i, 1 );
								} else {
									var resultantScrollTop = this.domUtils.scrollTo( target, elementState.scrollTop );
									if ( resultantScrollTop === elementState.scrollTop ) {
										elementStates.splice( i, 1 );
									}
								}
							}
						}
						if ( ! elementStates.length || ( ( Date.now() - startedAt ) >= this.pollDuration ) ) {
							clearTimeout( this.applyStateToDomTimer );
						}
					},
					this.pollCadence
				);

			}
		);

	}

	private commitPendingElements() : void {
		this.pendingElements.forEach(
			( target: Target ) => {
				this.scrolledElements.set( target, this.domUtils.getScrollTop( target ) );
			}
		);
		this.pendingElements.clear();
	}

	private ensurePageState( historyID: string, useMostRecentAsDefault: boolean = false ) : PageState {
		var renderedUrl = this.router.url;
		if ( ! this.renderStates[ renderedUrl ] ) {
			this.renderStates[ renderedUrl ] = {
				url: renderedUrl,
				pageStates: []
			};
		}

    var pageStates = this.renderStates[ renderedUrl ].pageStates;
    
		for ( var pageState of pageStates ) {

			if ( pageState.historyID === historyID ) {

				return( pageState );

			}

		}

		var pageState: PageState = {
			historyID: historyID,
			elementStates: Object.create( null )
		};

		if ( useMostRecentAsDefault && pageStates.length ) {
			console.warn( "No PageState associated with popState - using recent values as fallback." );
			Object.assign( pageState.elementStates, pageStates[ 0 ].elementStates );
		}

		pageStates.unshift( pageState );
		if ( pageStates.length > 15 ) {
			pageStates.pop();
		}
		return( pageState );
	}

	private getElementStatesFromNodes( nodes: Map<Target, number> ) : ElementStates {

		var elementStates: ElementStates = Object.create( null );

		nodes.forEach(
			( scrollTop: number, target: Target ) => {
				var selector = this.domUtils.getSelector( target );
				elementStates[ selector ] = { selector, scrollTop };
			}
		);
		return( elementStates );
	}

	private getNextHistoryID() : string {
		return( `retain-scroll-${ ++this.historyCounter }-${ Date.now() }` );
  }
  
	private setupPopstateBinding() : void {
		this.zone.runOutsideAngular(
			() : void => {

				window.addEventListener(
					"popstate",
					( event: PopStateEvent ) : void => {
						try {
              this.poppedHistoryID = event.state.id || event.state.navigationId;
              
						} catch ( error ) {
							this.poppedHistoryID = this.getNextHistoryID();
						}

					}
				);

			}
		);

	}

	private setupPushStateMonkeyPatch() : void {

		var corePushState = window.history.pushState;
		this.zone.runOutsideAngular(
			() : void => {

				window.history.pushState = ( state: any, title: string, url: string ) : void => {
					console.warn( "Intercepting .pushState()" );
					corePushState.call(
						window.history,
						{
							id: ( this.currentHistoryID = this.getNextHistoryID() ),
							originalState: state
						},
						title,
						url
					);

				};

			}
		);

	}

	private setupRouterBinding() : void {

		this.router.events.subscribe(
			( event: NavigationEvent ) : void => {
				if ( event instanceof NavigationStart ) {

					this.lastNavigationStartAt = Date.now();
					clearTimeout( this.applyStateToDomTimer );
					clearTimeout( this.pendingElementsTimer );
					this.pendingElements.clear();

					var currentPageState = this.ensurePageState( this.currentHistoryID );
					if ( this.scrolledElements.size ) {
						Object.assign(
							currentPageState.elementStates,
							this.getElementStatesFromNodes( this.scrolledElements )
						);
						this.scrolledElements.clear();
					}
					if ( this.previousPageState && ! this.poppedHistoryID ) {

						for ( var selector in this.previousPageState.elementStates ) {
							if ( currentPageState.elementStates[ selector ] ) {
								continue;
							}

							var target = this.domUtils.select( selector )

							if ( ! target ) {

								continue;

							}

							if ( this.domUtils.getScrollTop( target ) !== this.previousPageState.elementStates[ selector ].scrollTop ) {

								continue;

							}

							currentPageState.elementStates[ selector ] = {
								selector: selector,
								scrollTop: this.previousPageState.elementStates[ selector ].scrollTop
							};

						}

					}

          this.previousPageState = currentPageState;
          
				} else if ( event instanceof NavigationEnd ) {

					if ( this.poppedHistoryID ) {

						this.currentHistoryID = this.poppedHistoryID;
						this.poppedHistoryID = null;

						var currentPageState = this.ensurePageState( this.currentHistoryID, true );

						this.applyPageStateToDom( currentPageState );

					}

				}

			}
		);

	}

	private setupScrollBinding() : void {

		this.zone.runOutsideAngular(
			() : void => {

				var scrollBufferWindow = 100;

				window.addEventListener(
					"scroll",
					( event: Event ) : void => {

						if ( ( Date.now() - this.lastNavigationStartAt ) < scrollBufferWindow ) {

							return;

						}

						var target = this.domUtils.getTargetFromScrollEvent( event );

						if ( target ) {

              this.pendingElements.add( target );
              
              clearTimeout( this.pendingElementsTimer );
              
							this.pendingElementsTimer = setTimeout(
								() => {

									this.commitPendingElements();

								},
								scrollBufferWindow
							);

						}

					},
					true
				);

			}
		);

	}
	private supportsPushState() : boolean {

		return( !! ( window && window.history && window.history.pushState ) );

	}

}