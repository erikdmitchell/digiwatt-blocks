<?php

/**
 * Register tagline block.
 * 
 * @access public
 * @return void
 */
function digiwatts_register_block_tagline() {
    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php');
 
    wp_register_script(
        'dwb-tagline-block-script',
        DWB_ABSURL . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );
    
    wp_register_style(
        'dwb-tagline-block-style-editor',
        DWB_ABSURL . 'editor.css',
        array( ),
        filemtime( DWB_ABSPATH . 'editor.css' )
    );

    wp_register_style(
        'dwb-tagline-block-style',
        DWB_ABSURL . 'style.css',
        array( ),
        filemtime( DWB_ABSPATH . 'style.css' )
    );    
 
    register_block_type( 'dwb/dwb-tagline-block', array(
        'editor_script' => 'dwb-tagline-block-script',
        'editor_style' => 'dwb-tagline-block-style-editor',
        'style' => 'dwb-tagline-block-style',
    ) );
 
}
add_action( 'init', 'digiwatts_register_block_tagline' );


