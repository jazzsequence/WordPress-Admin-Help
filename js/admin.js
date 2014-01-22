(function ( $ ) {
	"use strict";

	$(function () {

		jQuery( ".show-settings" ).click( function() {
			var show_meta_id = jQuery(this).attr('aria-controls');
			if( jQuery( "#" + show_meta_id ).hasClass('hidden') ) {
				jQuery( ".screen-meta-block-overview").addClass('hidden');
				jQuery( "#" + show_meta_id ).removeClass('hidden');
			} else {
				jQuery( ".screen-meta-block-overview").addClass('hidden');
			}
		});
	});

}(jQuery));

