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
			slug: 'namecolumn',
			selector: [
				'.column-name'
			],
			content: adminhelp_content.namecolumn
		},
		{
			slug: 'descriptioncolumn',
			selector: [
				'.column-description'
			],
			content: adminhelp_content.descriptioncolumn
		},
		{
			slug: 'activatebutton',
			selector: [
				'.activate'
			],
			content: adminhelp_content.activatebutton
		},
		{
			slug: 'deactivatebutton',
			selector: [
				'.deactivate'
			],
			content: adminhelp_content.deactivatebutton
		},
		{
			slug: 'editbutton',
			selector: [
				'.edit'
			],
			content: adminhelp_content.editbutton
		},
		{
			slug: 'settingsbutton',
			selector: [
				'.settings'
			],
			content: adminhelp_content.settingsbutton
		},
		{
			slug: 'deletebutton',
			selector: [
				'.delete'
			],
			content: adminhelp_content.deletebutton
		},
		{
			slug: 'alltab',
			selector: [
				'.all'
			],
			content: adminhelp_content.alltab
		},
		{
			slug: 'activetab',
			selector: [
				'.active'
			],
			content: adminhelp_content.activetab
		},
		{
			slug: 'inactivetab',
			selector: [
				'.inactive'
			],
			content: adminhelp_content.inactivetab
		},
		{
			slug: 'updatetab',
			selector: [
				'.update'
			],
			content: adminhelp_content.updatetab
		},
		{
			slug: 'mustusetab',
			selector: [
				'.mustuse'
			],
			content: adminhelp_content.mustusetab
		},
		{
			slug: 'dropinstab',
			selector: [
				'.dropins'
			],
			content: adminhelp_content.dropinstab
		}
	]);
});