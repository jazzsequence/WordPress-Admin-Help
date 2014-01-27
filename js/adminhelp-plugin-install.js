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
			slug: 'searchtab',
			selector: [
				'.plugin-install-dashboard'
			],
			content: adminhelp_content.searchtab
		},
		{
			slug: 'uploadtab',
			selector: [
				'.plugin-install-upload'
			],
			content: adminhelp_content.uploadtab
		},
		{
			slug: 'featuredtab',
			selector: [
				'.plugin-install-featured'
			],
			content: adminhelp_content.featuredtab
		},
		{
			slug: 'populartab',
			selector: [
				'.plugin-install-popular'
			],
			content: adminhelp_content.populartab
		},
		{
			slug: 'newtab',
			selector: [
				'.plugin-install-new'
			],
			content: adminhelp_content.newtab
		},
		{
			slug: 'favoritestab',
			selector: [
				'.plugin-install-favorites'
			],
			content: adminhelp_content.favoritestab
		},
		{
			slug: 'namecolumn',
			selector: [
				'.column-name'
			],
			content: adminhelp_content.namecolumn
		},
		{
			slug: 'versioncolumn',
			selector: [
				'.column-version'
			],
			content: adminhelp_content.versioncolumn
		},
		{
			slug: 'ratingcolumn',
			selector: [
				'.column-rating'
			],
			content: adminhelp_content.ratingcolumn
		},
		{
			slug: 'descriptioncolumn',
			selector: [
				'.column-description'
			],
			content: adminhelp_content.descriptioncolumn
		}				
	]);
});