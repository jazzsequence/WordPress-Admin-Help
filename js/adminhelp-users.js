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
			content: adminhelp_content.usersaddnew
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
		{
			slug: 'usersselectall',
			selector: [
				'.users-php #cb-select-all-1'
			],
			content: adminhelp_content.usersselectall
		},
		{
			slug: 'usernamecolumn',
			selector: [
				'.users-php th.column-username a span:nth-of-type(1)'
			],
			content: adminhelp_content.usernamecolumn
		},
		{
			slug: 'namecolumn',
			selector: [
				'.users-php th.column-name a span:nth-of-type(1)'
			],
			content: adminhelp_content.namecolumn
		},
		{
			slug: 'emailcolumn',
			selector: [
				'.users-php th.column-email a span:nth-of-type(1)'
			],
			content: adminhelp_content.emailcolumn
		},
		{
			slug: 'rolecolumn',
			selector: [
				'.users-php th.column-role'
			],
			content: adminhelp_content.rolecolumn
		},
		{
			slug: 'postscolumn',
			selector: [
				'.users-php th.column-posts'
			],
			content: adminhelp_content.postscolumn
		},
		{
			slug: 'usersearch',
			selector: [
				'.users-php .search-box input#user-search-input'
			],
			content: adminhelp_content.usersearch
		},
		{
			slug: 'usersbulkactions',
			selector: [
				'.users-php .bulkactions select'
			],
			content: adminhelp_content.usersbulkactions
		},
		{
			slug: 'usersdobulkaction',
			selector: [
				'.users-php .bulkactions input#doaction'
			],
			content: adminhelp_content.usersdobulkaction
		},
		{
			slug: 'usersnewrole',
			selector: [
				'.users-php .actions select#new_role'
			],
			content: adminhelp_content.usersnewrole
		},
		{
			slug: 'userschangerole',
			selector: [
				'.users-php .actions input#changeit'
			],
			content: adminhelp_content.userschangerole
		},
		{
			slug: 'usersnumber',
			selector: [
				'.users-php .tablenav-pages .displaying-num'
			],
			content: adminhelp_content.usersnumber
		},
		{
			slug: 'usergravatar',
			selector: [
				'.users-php .wp-list-table.users td.username img'
			],
			content: adminhelp_content.usergravatar
		},
		{
			slug: 'userusername',
			selector: [
				'.users-php .wp-list-table.users td.username strong a'
			],
			content: adminhelp_content.userusername
		},
		{
			slug: 'useredit',
			selector: [
				'.users-php .wp-list-table.users td.username .row-actions .edit a'
			],
			content: adminhelp_content.useredit
		},
		{
			slug: 'userdelete',
			selector: [
				'.users-php .wp-list-table.users td.username .row-actions .delete a'
			],
			content: adminhelp_content.userdelete
		},
		{
			slug: 'userfullname',
			selector: [
				'.users-php .wp-list-table.users td.name'
			],
			content: adminhelp_content.userfullname
		},
		{
			slug: 'useremail',
			selector: [
				'.users-php .wp-list-table.users td.email a'
			],
			content: adminhelp_content.useremail
		},
		{
			slug: 'userrole',
			selector: [
				'.users-php .wp-list-table.users td.role'
			],
			content: adminhelp_content.userrole
		},
		{
			slug: 'userposts',
			selector: [
				'.users-php .wp-list-table.users td.posts a'
			],
			content: adminhelp_content.postscolumn
		}
	]);
});