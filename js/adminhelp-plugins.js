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
			slug: 'addplugin',
			selector: [
				'.plugins-php .add-new-h2'
			],
			content: adminhelp_content.addplugin
		},
		{
			slug: 'namecolumn',
			selector: [
				'.manage-column.column-name'
			],
			content: adminhelp_content.namecolumn
		},
		{
			slug: 'descriptioncolumn',
			selector: [
				'.manage-column.column-description'
			],
			content: adminhelp_content.descriptioncolumn
		},
		{
			slug: 'activatebutton',
			selector: [
				'span.activate a'
			],
			content: adminhelp_content.activatebutton
		},
		{
			slug: 'deactivatebutton',
			selector: [
				'span.deactivate a'
			],
			content: adminhelp_content.deactivatebutton
		},
		{
			slug: 'editbutton',
			selector: [
				'span.edit a'
			],
			content: adminhelp_content.editbutton
		},
		{
			slug: 'settingsbutton',
			selector: [
				'span.settings a'
			],
			content: adminhelp_content.settingsbutton
		},
		{
			slug: 'deletebutton',
			selector: [
				'span.delete a'
			],
			content: adminhelp_content.deletebutton
		},
		{
			slug: 'pluginsalltab',
			selector: [
				'.plugins-php .subsubsub .all'
			],
			content: adminhelp_content.pluginsalltab
		},
		{
			slug: 'activetab',
			selector: [
				'.subsubsub .active'
			],
			content: adminhelp_content.activetab
		},
		{
			slug: 'inactivetab',
			selector: [
				'.subsubsub .inactive'
			],
			content: adminhelp_content.inactivetab
		},
		{
			slug: 'updatetab',
			selector: [
				'.subsubsub .upgrade'
			],
			content: adminhelp_content.updatetab
		},
		{
			slug: 'mustusetab',
			selector: [
				'.subsubsub .mustuse'
			],
			content: adminhelp_content.mustusetab
		},
		{
			slug: 'dropinstab',
			selector: [
				'.subsubsub .dropins'
			],
			content: adminhelp_content.dropinstab
		},
		{
			slug: 'recentlyactivatedtab',
			selector: [
				'.subsubsub .recently_activated'
			],
			content: adminhelp_content.recentlyactivatedtab
		}
	]);
});