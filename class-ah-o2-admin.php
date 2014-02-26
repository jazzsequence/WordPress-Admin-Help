<?php
/**
 * Plugin Name.
 *
 * @package   AH_O2_Admin
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
 * functionality, then refer to `class-ah-o2.php`
 *
 * @package AH_O2_Admin
 * @author  Chris Reynolds <me@chrisreynolds.io>
 */
class AH_O2_Admin {

	/**
	 * Instance of this class.
	 *
	 * @since    0.1.0
	 *
	 * @var      object
	 */
	protected static $instance = null;

	/**
	 * Slug of the plugin screen.
	 *
	 * @since    0.1.0
	 *
	 * @var      string
	 */
	protected $plugin_screen_hook_suffix = 'adminhelp';

	/**
	 * Help content dispalyed in tooltips. Has to remain empty because if
	 * you try to localize text here it will throw an error.
	 *
	 * @since 0.1.0
	 *
	 * @var array
	 */
	protected $tooltip_help_content = array();

	/**
	 * Whether or not to show tooltips
	 *
	 * @since  0.1.0
	 * @var boolean
	 */
	protected $show_tooltips = true;

	/**
	 * Whether or not to show overviews
	 *
	 * @since  0.1.0
	 * @var boolean
	 */
	protected $show_overview = true;

	/**
	 * Initialize the plugin by loading admin scripts & styles and adding a
	 * settings page and menu.
	 *
	 * @since     0.1.0
	 */
	private function __construct() {

		/*
		 * Call $plugin_slug from public plugin class.
		 *
		 */
		$plugin = AH_O2::get_instance();
		$this->plugin_slug = $plugin->get_plugin_slug();

		load_plugin_textdomain( 'adminhelp', false, dirname( plugin_basename( __FILE__ ) ) . 'languages/' );

		add_action( 'admin_init', array( $this, 'init' ) );

		// Load admin style sheet and JavaScript.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		// user profile stuff, added by trishasalas & cleaned up by jazzs3quence
		add_action( 'personal_options', array( $this, 'AH_O2_show_profile_fields' ) );
		add_action( 'personal_options_update', array( $this, 'AH_O2_save_profile_fields' ) );
		add_action( 'edit_user_profile_update', array( $this, 'AH_O2_save_profile_fields' ) );

		// hook into in_admin_header action to overwrite wp_screen object
		add_action( 'in_admin_header', array( $this, 'modify_wp_screen' ) );
	}

	/**
	 * Overwrite the WP_Screen object and also allow for modification of content.
	 *
	 */
	function modify_wp_screen(  ) {
		global $current_screen;
		$current_screen = new WP_Screen_Admin( $current_screen );

		//include Overview content for current page
		//supress the error if file doesn't exist
		@include( plugin_dir_path(__FILE__) . '/docs/' . $current_screen->id . '.php' );
	}

	/**
	 * Return an instance of this class.
	 *
	 * @since     0.1.0
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
	 * @since  0.1.0
	 * @return void
	 */
	public function init() {
		$user = wp_get_current_user();
		$this->show_tooltips = $user->has_prop( 'AH_O2_tooltips' ) ? $user->get( 'AH_O2_tooltips' ) : true;
		$this->show_overview = $user->has_prop( 'AH_O2_overview' ) ? $user->get( 'AH_O2_overview' ) : false;
	}

	/**
	 * Register and enqueue admin-specific style sheet.
	 *
	 * @since     0.1.0
	 *
	 * @return    null    Return early if no settings page is registered.
	 */
	public function enqueue_admin_styles() {

		$screen = get_current_screen();
		wp_enqueue_style( $this->plugin_slug .'-admin-styles', plugins_url( 'css/admin.css', __FILE__ ), array(), AH_O2::VERSION );
		wp_register_script( 'adminhelp-base', plugins_url( '/js/admin-help.js', __FILE__ ), array( 'jquery', 'jquery-ui-tooltip' ), '0.6.1' );
		if ( $this->show_tooltips ) {
			$this->initialize_help_content();
			wp_enqueue_script( 'adminhelp-global', plugins_url( '/js/adminhelp-global.js', __FILE__ ), array( 'jquery', 'adminhelp-base' ), '0.6.1' );
			wp_localize_script( 'adminhelp-global', 'adminhelp_content', $this->localize_page_plugins( array_keys( $this->tooltip_help_content ) ) );
			$js_path = '/js/adminhelp-' . $screen->id . '.js';
			if( file_exists( plugin_dir_path(__FILE__) . $js_path ) ) {
				if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
					wp_enqueue_script( 'adminhelp-' . $screen->id, plugins_url( $js_path, __FILE__ ), array( 'jquery', 'adminhelp-base' ), '0.6.1' );
				} else {
					wp_enqueue_script( 'adminhelp-' . $screen->id, plugins_url( $js_path, __FILE__ ), array( 'jquery', 'adminhelp-base' ), '0.6.1' );
				}
				wp_localize_script( 'adminhelp-' . $screen->id, 'adminhelp_content', $this->localize_page_plugins( array_keys( $this->tooltip_help_content ) ) );
			}
		}

	}

	/**
	 * Register and enqueue admin-specific JavaScript.
	 *
	 * @since     0.1.0
	 *
	 * @return    null    Return early if no settings page is registered.
	 */
	public function enqueue_admin_scripts() {

		if ( ! isset( $this->plugin_screen_hook_suffix ) ) {
			return;
		}

		wp_enqueue_script( $this->plugin_slug . '-admin-script', plugins_url( 'js/admin.js', __FILE__ ), array( 'jquery' ), AH_O2::VERSION );
	}

	/**
	 * Add settings action link to the plugins page.
	 *
	 * @since    0.1.0
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
	public function AH_O2_show_profile_fields( $user ) {
		$AH_O2_tooltips = $user->has_prop( 'AH_O2_tooltips' ) ? $user->get( 'AH_O2_tooltips' ) : true;
		$AH_O2_overview = $user->has_prop( 'AH_O2_overview' ) ? $user->get( 'AH_O2_overview' ) : false;

	?>
		        <tr id="Admin-Help">
					<th><label for="show_help"><?php _e( 'Help Settings', 'ah-o2' ); ?></label></th>
					<td>
						<label for="help_tooltips">
							<input type="checkbox" id="help_tooltips" name="AH_O2_tooltips" value="1" <?php checked( $AH_O2_tooltips ); ?> />
								<?php _e( 'Display help tooltips.', 'ah-o2' ); ?><br />
						</label>

						<label for="help_overview">
							<input type="checkbox" id="help_overview" name="AH_O2_overview" value="1" <?php checked( $AH_O2_overview ); ?> />
								<?php _e( 'Always show help overviews.', 'ah-o2' ); ?>
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
	public function AH_O2_save_profile_fields( $user_id ) {
		if ( !current_user_can( 'edit_user', $user_id ) )
			return false;
		if ( isset( $_POST['AH_O2_tooltips'] ) ) {
			update_user_meta( $user_id, 'AH_O2_tooltips', 1 );
		} else {
			update_user_meta( $user_id, 'AH_O2_tooltips', 0 );
		}
		if ( isset( $_POST['AH_O2_overview'] ) ) {
			update_user_meta( $user_id, 'AH_O2_overview', 1 );
		} else {
			update_user_meta( $user_id, 'AH_O2_overview', 0 );
		}

	}

	/**
	 * Setup content in `$tooltip_help_content` since we need to be able
	 * to localize our help strings.
	 *
	 * @since 0.1.0
	 *
	 * @return void
	 */
	protected function initialize_help_content() {
		global $current_screen;
		//include tooltip content for current page
		//supress the error if file doesn't exist
		@include( plugin_dir_path(__FILE__) . '/docs/' . $current_screen->id . '-tips.php' );
		@include( plugin_dir_path(__FILE__) . '/docs/global-tips.php' );
	}

	protected function localize_page_plugins( $parts = array() ) {
		$strings = array();
		foreach( $parts as $part ) {
			$strings[ $part ] = $this->tooltip_help_content[ $part ];
		}

		return $strings;
	}
}
