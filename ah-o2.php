<?php
/**
 *
 * @package   AH_O2
 * @author    Chris Reynolds <me@chrisreynolds.io>
 * @license   GPLv3
 * @link      http://jazzsequence.github.io/WordPress-Admin-Help
 * @copyright 2013 Admin Help Team
 *
 * @wordpress-plugin
 * Plugin Name:       AH-O&#8322;
 * Plugin URI:        http://jazzsequence.github.io/WordPress-Admin-Help
 * Description:       Breathing new life into help in the WordPress admin. A feature plugin intended for WordPress 4.0
 * Version:           0.6.1
 * Author:            The AH-O&#8322; Team
 * Author URI:        http://make.wordpress.org/docs/tag/admin-help/
 * Text Domain:       ah-o2
 * License:           GPLv3
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/jazzsequence/WordPress-Admin-Help
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . 'class-screen-admin.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-ah-o2.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-ah-o2-admin.php' );

/*
 * Register hooks that are fired when the plugin is activated or deactivated.
 * When the plugin is deleted, the uninstall.php file is loaded.
 */
register_activation_hook( __FILE__, array( 'AH_O2', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'AH_O2', 'deactivate' ) );

add_action( 'plugins_loaded', array( 'AH_O2', 'get_instance' ) );
add_action( 'plugins_loaded', array( 'AH_O2_Admin', 'get_instance' ) );