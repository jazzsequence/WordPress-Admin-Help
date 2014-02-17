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
			slug: 'richediting',
			selector: [
				'.profile-php .form-table label[for="rich_editing"]',
				'.user-edit-php .form-table label[for="rich_editing"]'
			],
			content: adminhelp_content.richediting
		},
		{
			slug: 'coloroptions',
			selector: [
				'.profile-php .form-table fieldset#color-picker',
				'.user-edit-php .form-table fieldset#color-picker'
			],
			content: adminhelp_content.coloroptions
		},
		{
			slug: 'commentshortcuts',
			selector: [
				'.profile-php .form-table label[for="comment_shortcuts"]',
				'.user-edit-php .form-table label[for="comment_shortcuts"]'
			],
			content: adminhelp_content.commentshortcuts
		},
		{
			slug: 'showadminbar',
			selector: [
				'.profile-php .form-table label[for="admin_bar_front"]',
				'.user-edit-php .form-table label[for="admin_bar_front"]',
				'.profile-php .form-table .show-admin-bar th',
				'.user-edit-php .form-table .show-admin-bar th'
			],
			content: adminhelp_content.showadminbar
		},
		{
			slug: 'showhelp',
			selector: [
				'.profile-php .form-table label[for="show_help"]',
				'.user-edit-php .form-table label[for="show_help"]'
			],
			content: adminhelp_content.showhelp
		},
		{
			slug: 'helptooltips',
			selector: [
				'.profile-php .form-table label[for="help_tooltips"]',
				'.user-edit-php .form-table label[for="help_tooltips"]'
			],
			content: adminhelp_content.helptooltips
		},
		{
			slug: 'helpoverview',
			selector: [
				'.profile-php .form-table label[for="help_overview"]',
				'.user-edit-php .form-table label[for="help_overview"]'
			],
			content: adminhelp_content.helpoverview
		},
		{
			slug: 'username',
			selector: [
				'.profile-php .form-table label[for="user_login"]',
				'.user-edit-php .form-table label[for="user_login"]'
			],
			content: adminhelp_content.username
		},
		{
			slug: 'firstname',
			selector: [
				'.profile-php .form-table label[for="first_name"]',
				'.user-edit-php .form-table label[for="first_name"]',
				'.profile-php .form-table input#first_name',
				'.user-edit-php .form-table input#first_name'
			],
			content: adminhelp_content.firstname
		},
		{
			slug: 'lastname',
			selector: [
				'.profile-php .form-table label[for="last_name"]',
				'.user-edit-php .form-table label[for="last_name"]',
				'.profile-php .form-table input#last_name',
				'.user-edit-php .form-table input#last_name'
			],
			content: adminhelp_content.lastname
		},
		{
			slug: 'nickname',
			selector: [
				'.profile-php .form-table label[for="nickname"]',
				'.user-edit-php .form-table label[for="nickname"]',
				'.profile-php .form-table input#nickname',
				'.user-edit-php .form-table input#nickname'
			],
			content: adminhelp_content.nickname
		},
		{
			slug: 'nicename',
			selector: [
				'.profile-php .form-table label[for="display_name"]',
				'.user-edit-php .form-table label[for="display_name"]',
				'.profile-php .form-table select#display_name',
				'.user-edit-php .form-table select#display_name'
			],
			content: adminhelp_content.nicename
		},
		{
			slug: 'email',
			selector: [
				'.profile-php .form-table label[for="email"]',
				'.user-edit-php .form-table label[for="email"]',
				'.profile-php .form-table input#email',
				'.user-edit-php .form-table input#email'
			],
			content: adminhelp_content.email
		},
		{
			slug: 'website',
			selector: [
				'.profile-php .form-table label[for="url"]',
				'.user-edit-php .form-table label[for="url"]',
				'.profile-php .form-table input#url',
				'.user-edit-php .form-table input#url'
			],
			content: adminhelp_content.website
		},
		{
			slug: 'aim',
			selector: [
				'.profile-php .form-table label[for="aim"]',
				'.user-edit-php .form-table label[for="aim"]',
				'.profile-php .form-table input#aim',
				'.user-edit-php .form-table input#aim'
			],
			content: adminhelp_content.aim
		},
		{
			slug: 'yim',
			selector: [
				'.profile-php .form-table label[for="yim"]',
				'.user-edit-php .form-table label[for="yim"]',
				'.profile-php .form-table input#yim',
				'.user-edit-php .form-table input#yim'
			],
			content: adminhelp_content.yim
		},
		{
			slug: 'jabber',
			selector: [
				'.profile-php .form-table label[for="jabber"]',
				'.user-edit-php .form-table label[for="jabber"]',
				'.profile-php .form-table input#jabber',
				'.user-edit-php .form-table input#jabber'
			],
			content: adminhelp_content.jabber
		},
		{
			slug: 'bio',
			selector: [
				'.profile-php .form-table label[for="description"]',
				'.user-edit-php .form-table label[for="description"]',
				'.profile-php .form-table textarea#description',
				'.user-edit-php .form-table textarea#description'
			],
			content: adminhelp_content.bio
		},
		{
			slug: 'newpass1',
			selector: [
				'.profile-php .form-table label[for="pass1"]',
				'.user-edit-php .form-table label[for="pass1"]',
				'.profile-php .form-table input#pass1',
				'.user-edit-php .form-table input#pass1'
			],
			content: adminhelp_content.newpass1
		},
		{
			slug: 'newpass2',
			selector: [
				'.profile-php .form-table label[for="pass2"]',
				'.user-edit-php .form-table label[for="pass2"]',
				'.profile-php .form-table input#pass2',
				'.user-edit-php .form-table input#pass2'
			],
			content: adminhelp_content.newpass2
		},
		{
			slug: 'passwordstrength',
			selector: [
				'.profile-php div#pass-strength-result',
				'.user-edit-php div#pass-strength-result'
			],
			content: adminhelp_content.passwordstrength
		},
		{
			slug: 'update',
			selector: [
				'.profile-php input#submit',
				'.user-edit-php input#submit'
			],
			content: adminhelp_content.update
		},
	]);

});