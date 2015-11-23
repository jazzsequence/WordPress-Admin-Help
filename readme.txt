=== AH-O&#8322; ===
Contributors: jazzs3quence, ninnypants, brainfork, mdbitz, jdgrimes, trishasalas, ubernaut, clorith
Tags: Admin Help, WordPress Help, WordPress 4.0, help
Requires at least: 3.6
Tested up to: 4.0
Stable tag: 0.6.2

Breathing new life into WordPress admin help. An experimental feature plugin intended for WordPress 4.0.

== Description ==

This plugin is no longer in development. It is here for historic/archival purposes. If you would like to fork the code for your own use in a new plugin, you can find the source at the [GitHub Repository](https://github.com/jazzsequence/WordPress-Admin-Help).

========

Rethinking how WordPress handles help in the admin. Be sure and check the Changelog and FAQ for what's been added and where.

This plugin is currently a work-in-progress. For the latest, bleeding-edge updates, check out the Github repo: https://github.com/jazzsequence/WordPress-Admin-Help

== Installation ==

1. Upload the plugin to the `/wp-content/plugins/` directory or use the WordPress plugin installer
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Enable help tooltips from your Your Profile page.
1. Go back to the Plugins page. You should have a tooltip when you hover over the Add New button.
1. Report any issues or feature requests [here](https://github.com/jazzsequence/WordPress-Admin-Help/issues)

== Frequently Asked Questions ==

= It's not doing anything. =

Most of what this plugin does (currently) is behind the scenes. We're working on adding new areas for tooltips to appear on hover and new help overviews that will appear at the top of every page.

= How do I use it? =

Enable help tooltips from your Edit Profile page. The only page that currently has any tooltips activated is Plugins; you should have a tooltip when you hover over the Add New button.

== Screenshots ==

There are some screenshots on the GitHub project page: https://github.com/jazzsequence/WordPress-Admin-Help

== Upgrade Notice ==

= 0.6.2 =

This plugin is no longer in development. It is only here for historic/archival purposes.

== Changelog ==

= 0.6.2 =
* update readme.txt

= 0.6.1 =
* fixes icon alignment in overviews
* increases tooltip delay

= 0.6 =
* Corrected update tab selector on the plugins page
* Removed support for title attributes
* Changed "configure help" to "help settings"
* added tooltips to Users pages
* adds global tooltips (tooltips that exist on all pages, like the sidebars)
* some minor tweaks to the arrow
* adds tooltip hook for links menu
* tweaks label text for settings a bit

= 0.5 =
* some tooltips added to Users page
* resolved tooltip positioning issue
* made tooltipp selectors more specific to remove default browser tooltips
* configured tooltips to use title attribute, if available (note: this is a preliminary feature, may be removed, see https://github.com/jazzsequence/WordPress-Admin-Help/issues/41)
* fixed undefined variable notice
* fixed defaults for help overview settings

= 0.4 =
* new styling and javascript for tooltips
* help overview css and js added to general admin.css and admin.js files
* responsive styling of overviews
* help footer added to overviews (hide/configure)
* tooltips added to plugins pages

= 0.3 =
* updated banners
* fixes help overview styling
* allows overviews to be controlled by the profile setting
* Remove concat action and setup all tooltip content in the adminhelp-{page}.js file
* Remove unused actions
* new tooltips added to Posts page
* separated tooltip content into individual files by slug

= 0.2 =
* Move script enqueueing into the actual enqueue_script function
* Fix tooltip selectors
* adds banners for WordPress.org

= 0.1 =
* Initial release on WordPress.org. Adds a tooltip on hover for the "Add New" button on the Plugins page

== Upgrade Notice ==

= 0.1 =
This release *only* adds a tooltip on hover for the "Add New" button on the Plugins page.