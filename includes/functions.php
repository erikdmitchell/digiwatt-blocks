<?php
    
    
function fancy_custom_block_block_init() {

    // automatically load dependencies and version
    $asset_file = include( DWB_PATH . 'build/index.asset.php');

    wp_register_script(
        'fancy-custom-block-block-editor',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    wp_register_style(
        'fancy-custom-block-block-editor',
        plugins_url( 'editor.css', __FILE__ ),
        array( ),
        filemtime( plugin_dir_path( __FILE__ ) . 'editor.css' )
    );

    wp_register_style(
        'fancy-custom-block-block',
        plugins_url( 'style.css', __FILE__ ),
        array( ),
        filemtime( DWB_PATH . 'style.css' )
    );

    register_block_type( 'fancy-block-plugin/fancy-custom-block', array(
        'editor_script' => 'fancy-custom-block-block-editor',
        'editor_style'  => 'fancy-custom-block-block-editor',
        'style'         => 'fancy-custom-block-block',
    ) );
}

add_action( 'init', 'fancy_custom_block_block_init' );


