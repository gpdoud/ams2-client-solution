import { Directive } from '@angular/core';
import { ElementRef } from "@angular/core";
import { Event as NavigationEvent } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { Router } from "@angular/router";
import { RouterOutlet } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { DomUtils } from "./dom-utils";

@Directive({
  selector: 'router-outlet'
})
export class RouterOutletDirective {
  private activateEventsSubscription: Subscription;
  private deactivateEventsSubscription: Subscription;
  private domUtils: DomUtils;
  private elementRef: ElementRef;
  private offsets: number[];
  private router: Router;
  private routerEventsSubscription: Subscription;
  private routerOutlet: RouterOutlet;

  constructor(domUtils: DomUtils,
    elementRef: ElementRef,
    router: Router,
    routerOutlet: RouterOutlet) { 
      this.domUtils = domUtils;
      this.elementRef = elementRef;
      this.router = router;
      this.routerOutlet = routerOutlet;

      this.activateEventsSubscription = null;
      this.deactivateEventsSubscription = null;
      this.offsets = [];
      this.routerEventsSubscription = null;
    }

    public ngOnDestroy() : void {

      ( this.activateEventsSubscription ) && this.activateEventsSubscription.unsubscribe();
      ( this.deactivateEventsSubscription ) && this.deactivateEventsSubscription.unsubscribe();
      ( this.routerEventsSubscription ) && this.routerEventsSubscription.unsubscribe();

  }

  public ngOnInit() : void {
    this.activateEventsSubscription = this.routerOutlet.activateEvents.subscribe(
        ( event: any ) : void => {
            this.handleActivateEvent();
        }
    );
    this.deactivateEventsSubscription = this.routerOutlet.deactivateEvents.subscribe(
        ( event: any ) : void => {
            this.handleDectivateEvent();
        }
    );
    this.routerEventsSubscription = this.router.events.subscribe(
        ( event: NavigationEvent ) : void => {
            this.handleNavigationEvent( event );
        }
    );

}

private handleActivateEvent() : void {

    if ( ! this.offsets.length ) {
        return;
    }

    var node = this.elementRef.nativeElement.parentNode;

    while ( node ) {
        if ( node.nodeType === 1 ) {
            this.domUtils.scrollTo( node, this.offsets.shift() );
        }
        node = node.parentNode;

    }
    this.domUtils.scrollTo( window, this.offsets.shift() );

}

private handleDectivateEvent() : void {
    var node = this.elementRef.nativeElement.parentNode;

    while ( node ) {

        if ( node.nodeType === 1 ) {
            this.offsets.push( this.domUtils.getScrollTop( node ) );
        }
        node = node.parentNode;

    }
    this.offsets.push( this.domUtils.getScrollTop( window ) );
}

private handleNavigationEvent( event: NavigationEvent ) : void {
    if ( event instanceof NavigationEnd ) {
        this.offsets.splice( 0, this.offsets.length );
    }
  }
}
