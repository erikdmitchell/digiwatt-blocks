<?php

/**
 * Register tagline block.
 * 
 * @access public
 * @return void
 */
function digiwatts_register_block_tagline() {
    // Fail if block editor is not supported
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	    
    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php');
    $block_path = '/build/index.js';
    $tagline_path = DWB_ABSPATH . 'blocks/tagline/';
    $tagline_url = DWB_ABSURL . 'blocks/tagline/';
        
    wp_register_script(
        'dwb-tagline-block-script',
        DWB_ABSURL . $block_path,
        $asset_file['dependencies'],
        $asset_file['version']
    );
    
    wp_register_style(
        'dwb-tagline-block-style-editor',
        $tagline_url . 'editor.css',
        array( ),
        filemtime( $tagline_path . 'editor.css' )
    );

    wp_register_style(
        'dwb-tagline-block-style',
        $tagline_url . 'style.css',
        array( ),
        filemtime( $tagline_path . 'style.css' )
    );    

/*
    // List all of the blocks for your plugin
    $blocks = [
        "jsforwpadvgb/shoutout",
    ];
    // Register each block with same CSS and JS
    foreach( $blocks as $block ) {

        register_block_type( $block, [
            'editor_script' => 'jsforwp-blocks-js',
         ] );
    }
*/
 
    register_block_type( 'dwb/dwb-tagline-block', array(
        'editor_script' => 'dwb-tagline-block-script',
        'editor_style' => 'dwb-tagline-block-style-editor',
        'style' => 'dwb-tagline-block-style',
    ) );
 
}
add_action( 'init', 'digiwatts_register_block_tagline' );