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
			slug: 'usersalltab',
			selector: [
				'.users-php .subsubsub .all'
			],
			content: adminhelp_content.usersalltab
		},
		{
			slug: 'usersaddnew',
			selector: [
				'.users-php .add-new-h2'
			],
		},
		{
			slug: 'administratortab',
			selector: [
				'.users-php .subsubsub .administrator'
			],
			content: adminhelp_content.administratortab
		},
		{
			slug: 'editortab',
			selector: [
				'.users-php .subsubsub .editor'
			],
			content: adminhelp_content.editortab
		},
		{
			slug: 'authortab',
			selector: [
				'.users-php .subsubsub .author'
			],
			content: adminhelp_content.authortab
		},
		{
			slug: 'contributortab',
			selector: [
				'.users-php .subsubsub .contributor'
			],
			content: adminhelp_content.contributortab
		},
		{
			slug: 'subscribertab',
			selector: [
				'.users-php .subsubsub .subscriber'
			],
			content: adminhelp_content.subscribertab
		},
	]);
});