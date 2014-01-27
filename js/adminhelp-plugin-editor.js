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
			slug: 'pluginselector',
			selector: [
				'#plugin'
			],
			content: adminhelp_content.pluginselector
		},
		{
			slug: 'editor',
			selector: [
				'#newcontent'
			],
			content: adminhelp_content.editor
		},
		{
			slug: 'pluginfiles',
			selector: [
				'#templateside'
			],
			content: adminhelp_content.pluginfiles
		},
		{
			slug: 'docreference',
			selector: [
				'#docs-list'
			],
			content: adminhelp_content.docreference
		}
	]);
});