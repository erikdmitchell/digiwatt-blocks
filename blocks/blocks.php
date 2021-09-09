<?php

/**
 * Register blocks.
 * 
 * @access public
 * @return void
 */
function digiwatts_register_blocks() {
    // Fail if block editor is not supported
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	    
    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php');
    $blocks = array('tagline', 'about');
    
    // register blocks.
    foreach ($blocks as $block) {
        digiwatt_register_block_type($block);
        digitwatt_register_block_script($block, $asset_file);
        digitwatt_register_block_style($block, 'style', $asset_file);
        digitwatt_register_block_style($block, 'editor', $asset_file);        
    }
}
add_action( 'init', 'digiwatts_register_blocks' );

/**
 * Register blok type.
 * 
 * @access public
 * @param string $block_slug (default: '')
 * @return void
 */
function digiwatt_register_block_type($block_slug = '') {
    if (empty($block_slug))
        return;
        
    register_block_type( "dwb/dwb-{$block_slug}-block", array(
        'editor_script' => "dwb-{$block_slug}-block-script",
        'editor_style' => "dwb-{$block_slug}-block-editor",
        'style' => "dwb-{$block_slug}-block-style",
    ) );     
}

/**
 * Register block script.
 * 
 * @access public
 * @param string $block_slug (default: '')
 * @param array $asset_file (default: array())
 * @return void
 */
function digitwatt_register_block_script($block_slug = '', $asset_file = array()) {
    if (empty($block_slug) || empty($asset_file))
        return;

    wp_register_script(
        "dwb-{$block_slug}-block-script",
        DWB_ABSURL . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );    
}

/**
 * Register block style.
 * 
 * @access public
 * @param string $block_slug (default: '')
 * @param string $filename (default: 'style')
 * @param array $asset_file (default: array())
 * @return void
 */
function digitwatt_register_block_style($block_slug = '', $filename = 'style', $asset_file = array()) {
    if (empty($block_slug) || empty($asset_file))
        return;

    wp_register_style(
        "dwb-{$block_slug}-block-{$filename}",
        DWB_ABSURL . "blocks/{$block_slug}/{$filename}.css",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$filename}.css" )
    );    
}