function AdminHelp( helpitem ) {
	var parent = this, $ = jQuery, iconHTML = $( '<i class="icon-adminhelp">Help</i>' );

	/**
	 * Associative array of all help tooltips on the page
	 * @type Array
	 */
	this.items = [];

	/**
	 * Take a single help object or an array of help objects and
	 * add them to the page.
	 *
	 * @param object|array item Single help object or array of help objects
	 */
	this.add = function( item ) {
		var tmpIcon;
		if ( undefined === item ) {
			return;
		}

		// add single help item
		if ( typeof item === 'object' && typeof item.slug === 'string' ) {
			parent.items[ item.slug ] = item;

			// setup help icon
			for ( var selector in item.selector ) {
				tmpIcon = iconHTML.clone();
				tmpIcon.attr( 'data-slug', item.slug );
				if ( 'right' == item.selector[ selector ] ) {
					$( selector ).after( tmpIcon );
				} else {
					$( selector ).before( tmpIcon );
				}
			}
		}

		// if slug isn't defined assume the item is an array
		// of help objects and add them one by one
		if ( typeof item === 'object' && typeof item.slug !== 'string' ) {
			for ( var i in item ) {
				parent.add( item[ i ] );
			}
		}
	};

	/**
	 * Remove a help tooltip/object from the page
	 *
	 * @param  string itemSlug Slug of the item to Remove
	 * @todo This function needs to find and remove the help icon for any
	 * selectors in the item and remove help item from `parent.items`
	 */
	this.remove = function( itemSlug ) {

	};

	/**
	 * Setup and open the help tooltip for a clicked help icon
	 *
	 * @param  object event Object for the click event oppening the tooltip
	 * @todo Needs to intelligently add tooltip near current help item
	 * accounting for position on page and potential overflows
	 */
	this.openTooltip = function( event ) {

	};

	/**
	 * Close any tooltip that is currently open
	 *
	 * @param  object event Object of the event triggering the close of the popup
	 * @todo Needs to remove content from and hide the tooltip
	 */
	this.closeTooltip = function( event ) {

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

	// handle setup of initial help item(s)
	this.add( helpitem );
}

var adminHelp = new AdminHelp();