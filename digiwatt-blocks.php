<?php
/**
 * Plugin Name:     DigiWatt Blocks
 * Plugin URI:
 * Description:
 * Author:          Erik Mitchell
 * Author URI:      https://erikmitchell.net
 * Text Domain:     dwb
 * Domain Path:     /languages
 * Version:         0.1.1
 *
 * @package         dwb
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

if ( ! defined( 'DWB_PLUGIN_FILE' ) ) {
    define( 'DWB_PLUGIN_FILE', __FILE__ );
}

// Include the main DWB class.
if ( ! class_exists( 'STWATT' ) ) {
    include_once dirname( __FILE__ ) . '/includes/class-dwb.php';
}
