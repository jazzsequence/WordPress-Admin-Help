<?php
/**
 * Plugin Name.
 *
 * @package   Admin_Help_Admin
 * @author    Chris Reynolds <me@chrisreynolds.io>
 * @license   GPLv3
 * @link      http://make.wordpress.org/docs/tag/admin-help/
 * @copyright 2013 Admin Help Team
 */

/**
 * Plugin class. This class should ideally be used to work with the
 * administrative side of the WordPress site.
 *
 * If you're interested in introducing public-facing
 * functionality, then refer to `class-admin-help.php`
 *
 * @package Admin_Help_Admin
 * @author  Chris Reynolds <me@chrisreynolds.io>
 */
class Admin_Help_Admin {

	/**
	 * Instance of this class.
	 *
	 * @since    1.0.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Slug of the plugin screen.
	 *
	 * @since    1.0.0
	 *
	 * @var      string
	 */
	protected $plugin_screen_hook_suffix = 'adminhelp';

	/**
	 * Help content dispalyed in tooltips. Has to remain empty because if
	 * you try to localize text here it will throw an error.
	 *
	 * @since 1.0.0
	 *
	 * @var array
	 */
	protected $tooltip_help_content = array();

	/**
	 * Whether or not to show tooltips
	 *
	 * @since  1.0.0
	 * @var boolean
	 */
	protected $show_tooltips = true;

	/**
	 * Whether or not to show overviews
	 *
	 * @since  1.0.0
	 * @var boolean
	 */
	protected $show_overview = true;

	/**
	 * Initialize the plugin by loading admin scripts & styles and adding a
	 * settings page and menu.
	 *
	 * @since     1.0.0
	 */
	private function __construct() {

		/*
		 * Call $plugin_slug from public plugin class.
		 *
		 */
		$plugin = Admin_Help::get_instance();
		$this->plugin_slug = $plugin->get_plugin_slug();

		load_plugin_textdomain( 'adminhelp', false, dirname( plugin_basename( __FILE__ ) ) . 'languages/' );

		add_action( 'admin_init', array( $this, 'init' ) );

		// Load admin style sheet and JavaScript.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		// user profile stuff, added by trishasalas & cleaned up by jazzs3quence
		add_action( 'personal_options', array( $this, 'admin_help_show_profile_fields' ) );
		add_action( 'personal_options_update', array( $this, 'admin_help_save_profile_fields' ) );
		add_action( 'edit_user_profile_update', array( $this, 'admin_help_save_profile_fields' ) );

		// hook into in_admin_header action to overwrite wp_screen object
		add_action( 'in_admin_header', array( $this, 'modify_wp_screen' ) );
		
		$this->initialize_help_content();
	}
	
	/**
	 * Overwrite the WP_Screen object and also allow for modification of content.
	 * 
	 */
	function modify_wp_screen(  ) {
		global $current_screen;
		$current_screen = new WP_Screen_Admin( $current_screen );
		
		// Modify Help Content
		if ( $current_screen->id == 'plugins' ) {
			$current_screen->add_help_tab( array(
				'id'      => 'New Help',
				'title'   => __('New Help'),
				'content' => '<p>Random Help Text</p><p>More Content</p>',
			) );
		}
	}

	/**
	 * Return an instance of this class.
	 *
	 * @since     1.0.0
	 *
	 * @return    object    A single instance of this class.
	 */
	public static function get_instance() {

		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Initialize variables that can't be initialized until init.
	 *
	 * @since  1.0.0
	 * @return void
	 */
	public function init() {
		$user = wp_get_current_user();
		$this->show_tooltips = $user->has_prop( 'admin_help_tooltips' ) ? $user->get( 'admin_help_tooltips' ) : true;
		$this->show_overview = $user->has_prop( 'admin_help_overview' ) ? $user->get( 'admin_help_overview' ) : true;

	}

	/**
	 * Register and enqueue admin-specific style sheet.
	 *
	 * @since     1.0.0
	 *
	 * @return    null    Return early if no settings page is registered.
	 */
	public function enqueue_admin_styles() {

		if ( ! isset( $this->plugin_screen_hook_suffix ) ) {
			return;
		}

		wp_register_script( 'adminhelp-base', plugins_url( '/js/admin-help.js', __FILE__ ), array( 'jquery', 'jquery-ui-tooltip' ), '1.0.0' );
		if ( $this->show_tooltips ) {
			if ( 'plugins' == $screen->id ) {
				if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
					wp_enqueue_script( 'adminhelp-plugins', plugins_url( '/js/adminhelp-plugins.js', __FILE__ ), array( 'jquery', 'adminhelp-base' ), '1.0.0' );
				} else {
					wp_enqueue_script( 'adminhelp-plugins', plugins_url( '/js/adminhelp-plugins.min.js', __FILE__ ), array( 'jquery', 'adminhelp-base' ), '1.0.0' );
				}
				wp_localize_script( 'adminhelp-plugins', 'adminhelp_content', $this->localize_page_plugins( array( 'addplugin' ) ) );
			}
		}

	}

	/**
	 * Register and enqueue admin-specific JavaScript.
	 *
	 * @since     1.0.0
	 *
	 * @return    null    Return early if no settings page is registered.
	 */
	public function enqueue_admin_scripts() {

		if ( ! isset( $this->plugin_screen_hook_suffix ) ) {
			return;
		}

		$screen = get_current_screen();
		if ( $this->plugin_screen_hook_suffix == $screen->id ) {
			wp_enqueue_script( $this->plugin_slug . '-admin-script', plugins_url( 'js/admin.js', __FILE__ ), array( 'jquery' ), Admin_Help::VERSION );
		}

	}

	/**
	 * Add settings action link to the plugins page.
	 *
	 * @since    1.0.0
	 */
	public function add_action_links( $links ) {

		return array_merge(
			array(
				'settings' => '<a href="' . admin_url( 'options-general.php?page=' . $this->plugin_slug ) . '">' . __( 'Settings', $this->plugin_slug ) . '</a>'
			),
			$links
		);

	}

	/**
	 * Add the new user profile settings
	 *
	 * @since 11082013
	 * @author Trisha Salas
	 */
	public function admin_help_show_profile_fields( $user ) {
		$admin_help_tooltips = $user->has_prop( 'admin_help_tooltips' ) ? $user->get( 'admin_help_tooltips' ) : true;
		$admin_help_overview = $user->has_prop( 'admin_help_overview' ) ? $user->get( 'admin_help_overview' ) : true;

	?>
		        <tr>
					<th><label for="show_tooltips"><?php _e( 'Help Settings', 'admin-help' ); ?></label></th>
					<td>
						<label for="help_tooltips">
							<input type="checkbox" id="help_tooltips" name="admin_help_tooltips" value="1" <?php checked( $admin_help_tooltips ); ?> />
								<?php _e( 'Enable help tooltips.', 'admin-help' ); ?><br />
						</label>
						<label for="help_overview">
							<input type="checkbox" id="help_overview" name="admin_help_overview" value="1" <?php checked( $admin_help_overview ); ?> />
								<?php _e( 'Enable help overviews.', 'admin-help' ); ?>
						</label>
					</td>
		        </tr>
	<?php }

	/**
	 * Update the user meta
	 *
	 * @since 11082013
	 * @author Trisha Salas
	 */
	public function admin_help_save_profile_fields( $user_id ) {
		if ( !current_user_can( 'edit_user', $user_id ) )
			return false;
		if ( isset( $_POST['admin_help_tooltips'] ) ) {
			update_user_meta( $user_id, 'admin_help_tooltips', 1 );
		} else {
			update_user_meta( $user_id, 'admin_help_tooltips', 0 );
		}
		if ( isset( $_POST['admin_help_overview'] ) ) {
			update_user_meta( $user_id, 'admin_help_overview', 1 );
		} else {
			update_user_meta( $user_id, 'admin_help_overview', 0 );
		}

	}

	/**
	 * Setup content in `$tooltip_help_content` since we need to be able
	 * to localize our help strings.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	protected function initialize_help_content() {
		$this->tooltip_help_content['addplugin'] = '<p>' . __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nibh et libero feugiat rhoncus at id arcu. Etiam mollis turpis sed elit tincidunt posuere. Fusce nibh velit, luctus pretium dolor et, suscipit facilisis quam. Morbi id pretium lectus. Maecenas mollis quam eget blandit bibendum. Nam in posuere sem. Nullam pretium ante sit amet mi imperdiet, a placerat nisi vestibulum. Ut vel sodales libero. Nam dictum mollis felis condimentum auctor. Sed eleifend dolor urna, vitae aliquet quam accumsan in. Suspendisse feugiat, diam non gravida gravida, nisl justo suscipit nisi, id imperdiet ante tellus in velit. Fusce hendrerit porttitor sollicitudin. Sed eget lectus id elit condimentum varius.', 'adminhelp' ) . '</p>';
	}

	protected function localize_page_plugins( $parts = array() ) {
		$strings = array();
		foreach( $parts as $part ) {
			$strings[ $part ] = $this->tooltip_help_content[ $part ];
		}

		return $strings;
	}
}
