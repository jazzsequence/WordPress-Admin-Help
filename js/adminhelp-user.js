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
			slug: 'userlogin',
			selector: [
				'.user-new-php .form-table input#user_login'
			],
			content: adminhelp_content.userlogin
		},
		{
			slug: 'useremail',
			selector: [
				'.user-new-php .form-table input#email'
			],
			content: adminhelp_content.useremail
		},
		{
			slug: 'userfirstname',
			selector: [
				'.user-new-php .form-table input#first_name'
			],
			content: adminhelp_content.userfirstname
		},
		{
			slug: 'userlastname',
			selector: [
				'.user-new-php .form-table input#last_name'
			],
			content: adminhelp_content.userlastname
		},
		{
			slug: 'userurl',
			selector: [
				'.user-new-php .form-table input#url'
			],
			content: adminhelp_content.userurl
		},
		{
			slug: 'userpass1',
			selector: [
				'.user-new-php .form-table input#pass1'
			],
			content: adminhelp_content.userpass1
		},
		{
			slug: 'userpass2',
			selector: [
				'.user-new-php .form-table input#pass2'
			],
			content: adminhelp_content.userpass2
		},
		{
			slug: 'usersendpassword',
			selector: [
				'.user-new-php .form-table input#send_password'
			],
			content: adminhelp_content.usersendpassword
		},
		{
			slug: 'userrole',
			selector: [
				'.user-new-php .form-table select#role'
			],
			content: adminhelp_content.userrole
		},
		{
			slug: 'strongpassword',
			selector: [
				'.user-new-php div#pass-strength-result.strong'
			],
			content: adminhelp_content.strongpassword
		},
		{
			slug: 'goodpassword',
			selector: [
				'.user-new-php div#pass-strength-result.good'
			],
			content: adminhelp_content.goodpassword
		},
		{
			slug: 'badpassword',
			selector: [
				'.user-new-php div#pass-strength-result.bad'
			],
			content: adminhelp_content.badpassword
		},
		{
			slug: 'usercreate',
			selector: [
				'.user-new-php .submit input#createusersub'
			],
			content: adminhelp_content.usercreate
		}
	]);
});