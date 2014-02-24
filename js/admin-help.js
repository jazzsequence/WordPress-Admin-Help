function AdminHelp( helpitem ) {
	var parent = this, $ = jQuery, doc = $( document );

	/**
	 * Associative array of all help tooltips on the page
	 * @type Array
	 */
	this.items = [];

	/**
	 * Do all initial setup like setting up events.
	 */
	this.init = function() {
		doc.tooltip({
			items: '.tip-adminhelp',
			content: function() {
				var $this = $( this );
				if ( typeof $this.attr( 'data-slug' ) == 'string' ){
					var item = $this.attr( 'data-slug' );
					return parent.items[ item ].content;
				} else {
					return '';
				}
			},
			 position: {
				using: function( position, feedback ) {
				$( this ).css( position );
				$( "<div>" )
					.addClass( "arrow" )
					.addClass( feedback.vertical )
					.addClass( feedback.horizontal )
					.appendTo( this );
				}
			},
			show: {
				delay: 500
			}
		});
	};

	/**
	 * Take a single help object or an array of help objects and
	 * add them to the page.
	 *
	 * @param object|array item Single help object or array of help objects
	 */
	this.add = function( item ) {
		if ( undefined === item ) {
			return;
		}

		// add single help item
		if ( typeof item === 'object' && typeof item.slug === 'string' ) {
			parent.items[ item.slug ] = item;

			// setup help icon
			for ( var i in item.selector ) {
				$( item.selector[ i ] ).attr( 'data-slug', item.slug );
				$( item.selector[ i ] ).addClass( 'tip-adminhelp' );
			}
		}

		// if slug isn't defined assume the item is an array
		// of help objects and add them one by one
		if ( typeof item === 'object' && typeof item.slug !== 'string' ) {
			for ( var j in item ) {
				parent.add( item[ j ] );
			}
		}
	};

	/**
	 * Remove a help tooltip/object from the page
	 *
	 * @param  string|array itemSlug Slug or array of slugs of the
	 * item(s) to Remove
	 */
	this.remove = function( itemSlug ) {
		var i;
		if ( typeof itemSlug === 'object' ) {
			for ( i in itemSlug ) {
				parent.remove( itemSlug[ i ] );
			}
		} else {
			var item = parent.items[ itemSlug ];
			$( '.tip-adminhelp[data-slug="' + item.slug + '"]' ).remove();
		}
	};

	/**
	 * Get tooltip content for item
	 *
	 * @param  string itemSlug Slug for current help item probably pulled from the `data-slug` attribute
	 * @return string          HTML content to be displayed in help tooltip
	 */
	this.getHelpContent = function( itemSlug ) {
		if ( parent.items[ itemSlug ] === undefined ) {
			return false;
		}

		return parent.items[ itemSlug ].content;
	};

	this.init();

	// handle setup of initial help item(s)
	this.add( helpitem );
}

var adminHelp = new AdminHelp();
