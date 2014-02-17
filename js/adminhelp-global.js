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
			slug: 'dashboardnav',
			selector: [
				'#adminmenu #menu-dashboard .wp-menu-name',
				'#adminmenu #menu-dashboard .wp-menu-image'
			],
			content: adminhelp_content.dashboardnav
		},
		{
			slug: 'postsnav',
			selector: [
				'#adminmenu #menu-posts .wp-menu-name',
				'#adminmenu #menu-posts .wp-menu-image'
			],
			content: adminhelp_content.postsnav
		},
		{
			slug: 'medianav',
			selector: [
				'#adminmenu #menu-media .wp-menu-name',
				'#adminmenu #menu-media .wp-menu-image'
			],
			content: adminhelp_content.medianav
		},
		{
			slug: 'pagesnav',
			selector: [
				'#adminmenu #menu-pages .wp-menu-name',
				'#adminmenu #menu-pages .wp-menu-image'

			],
			content: adminhelp_content.pagesnav
		},
		{
			slug: 'commentsnav',
			selector: [
				'#adminmenu #menu-comments .wp-menu-name',
				'#adminmenu #menu-comments .wp-menu-image'
			],
			content: adminhelp_content.commentsnav
		},
		{
			slug: 'appearancenav',
			selector: [
				'#adminmenu #menu-appearance .wp-menu-name',
				'#adminmenu #menu-appearance .wp-menu-image'
			],
			content: adminhelp_content.appearancenav
		},
		{
			slug: 'pluginsnav',
			selector: [
				'#adminmenu #menu-plugins .wp-menu-name',
				'#adminmenu #menu-plugins .wp-menu-image'
			],
			content: adminhelp_content.pluginsnav
		},
		{
			slug: 'usersnav',
			selector: [
				'#adminmenu #menu-users .wp-menu-name',
				'#adminmenu #menu-users .wp-menu-image'
			],
			content: adminhelp_content.usersnav
		},
		{
			slug: 'toolsnav',
			selector: [
				'#adminmenu #menu-tools .wp-menu-name',
				'#adminmenu #menu-tools .wp-menu-image'
			],
			content: adminhelp_content.toolsnav
		},
		{
			slug: 'settingsnav',
			selector: [
				'#adminmenu #menu-settings .wp-menu-name',
				'#adminmenu #menu-settings .wp-menu-image'
			],
			content: adminhelp_content.settingsnav
		},
		{
			slug: 'collapsenav',
			selector: [
				'#adminmenu #collapse-menu span',
				'#adminmenu #collapse-menu #collapse-button'
			],
			content: adminhelp_content.collapsenav
		},
		{
			slug: 'linksnav',
			selector: [
				'#adminmenu #menu-links .wp-menu-name',
				'#adminmenu #menu-links .wp-menu-image'
			],
			content: adminhelp_content.linksnav
		}
	]);
});