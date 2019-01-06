var WINDOW_SELECTOR = "__window__";
var NG_ENCAPSULATION_PATTERN = /^_ng(host|content)\b/i;

export type Target = Window | Element;

export class DomUtils {

	
	public exists( selector: string ) : boolean {

		return( !! this.select( selector ) );

	}

	public getScrollTop( target: Target ) : number {

		if ( target instanceof Window ) {

			return( window.scrollY );

		} else {

			return( target.scrollTop );

		}

	}

	public getSelector( target: Target ) : string {

		if ( target instanceof Window ) {

			return( WINDOW_SELECTOR );

		} else {

			return( this.getSelectorForElement( target ) );

		}

	}

	public getTargetFromScrollEvent( event: Event ) : Target | null {

		var node = event.target;

		if ( node instanceof HTMLDocument ) {

			return( window );

		} else if ( node instanceof Element ) {

			return( node );

		}

		return( null );

	}

	public scrollTo( target: Target, scrollTop: number ) : number {

		if ( target instanceof Window ) {

			target.scrollTo( 0, scrollTop );

			return( target.scrollY );

		} else if ( target instanceof Element ) {

			target.scrollTop = scrollTop;

			return( target.scrollTop );

		}

	}

	public select( selector: string ) : Target | null {

		if ( selector === WINDOW_SELECTOR ) {

			return( window );

		} else {

			return( document.querySelector( selector ) );

		}

	}

	private getSelectorForElement( target: Element ) : string {

		var selectors: string[] = [];

		var current = <Element>target;

		while ( current && ( current.nodeName !== "BODY" ) ) {

			var selector = current.nodeName.toLowerCase();

			for ( var attribute of Array.from( current.attributes ) ) {

				if ( attribute.name.search( NG_ENCAPSULATION_PATTERN ) === 0 ) {

					selector += `[${ attribute.name }]`;

				}

			}

			selectors.unshift( selector );

			current = current.parentElement;

		}

		return( selectors.join( " > " ) );

	}

	private isRootScrollableNode( node: Node ) : boolean {

		return( node instanceof HTMLDocument );

	}

}