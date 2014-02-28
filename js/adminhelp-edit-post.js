jQuery(function( $ ) {
	/**
	 * Setup tooltips as objects in an array.
	 * @param string slug How the AdminHelp class identifies the tooltip
	 * @param array selector Array of css selectors for the items the tooltip
	 * should be attached to
	 * @param string content Content to be displayed in the tooltip
	 */
	adminHelp.add([
		{
			slug: 'filtercategory'
			,selector: [
				'#post-query-submit'
			],
			content: adminhelp_content.filtercategory
		},
		{
			slug: 'publishfilter'
			,selector: [
				'.publish'
			],
			content: adminhelp_content.publishfilter
		},
		{
			slug: 'allfilter'
			,selector: [
				'.all'
			],
			content: adminhelp_content.allfilter
		},
		{
			slug: 'draftfilter'
			,selector: [
				'.draft'
			],
			content: adminhelp_content.draftfilter
		},
		{
			slug: 'trashfilter'
			,selector: [
				'li.trash'
			],
			content: adminhelp_content.trashfilter
		}
	]);
});