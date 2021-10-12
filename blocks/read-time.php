<?php
/**
 * Register Read Time block
 *
 * @package dwb
 * @since 0.2.0
 */

/**
 * Register Read Time block.
 *
 * @access public
 * @return void
 */
function dwb_read_time_block_init() {
    // Skip block registration if Gutenberg is not enabled/merged.
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php' );
    $block_slug = 'read-time';

    wp_register_script(
        'dwb-block-script',
        DWB_ABSURL . 'build/index.js',
        $asset_file['dependencies'],
        $asset_file['version']
    );

    $editor_css = 'editor.css';
    wp_register_style(
        "dwb-{$block_slug}-block-editor",
        DWB_ABSURL . "blocks/{$block_slug}/{$editor_css}",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$editor_css}" )
    );

    $style_css = 'style.css';
    wp_register_style(
        "dwb-{$block_slug}-block-style",
        DWB_ABSURL . "blocks/{$block_slug}/{$style_css}",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$style_css}" )
    );

    register_block_type(
        "dwb/{$block_slug}-block",
        array(
            'attributes' => array(
                'postsToShow' => array(
                    'type' => 'number',
                    'default' => 3,
                ),
                'excerptLength' => array(
                    'type' => 'number',
                    'default' => 35,
                ),
                'columns' => array(
                    'type' => 'number',
                    'default' => 2,
                ),
                'order' => array(
                    'type' => 'string',
                    'default' => 'desc',
                ),
                'orderBy' => array(
                    'type' => 'string',
                    'default' => 'date',
                ),
                'featuredImageSizeSlug' => array(
                    'type' => 'string',
                    'default' => 'digiwatt-home-grid',
                ),
                'featuredImageSizeWidth' => array(
                    'type' => 'number',
                    'default' => null,
                ),
                'featuredImageSizeHeight' => array(
                    'type' => 'number',
                    'default' => null,
                ),
                'featuredImageLargeSizeSlug' => array(
                    'type' => 'string',
                    'default' => 'digiwatt-home-grid-large',
                ),
                'featuredPostExcerptLength' => array(
                    'type' => 'number',
                    'default' => 95,
                ),
            ),
            'render_callback' => 'render_block_digiwatt_read_time',            
            'editor_script' => 'dwb-block-script',
            'editor_style' => "dwb-{$block_slug}-block-editor",
            'style' => "dwb-{$block_slug}-block-style",
        )
    );
}
add_action( 'init', 'dwb_read_time_block_init' );

function render_block_digiwatt_read_time( $attributes ) { }



function dwb_reading_time() {
    global $post;
    
    $content = get_post_field( 'post_content', $post->ID );
    $word_count = str_word_count( strip_tags( $content ) );
    $readingtime = ceil( $word_count / 200 );
    
    if ( $readingtime == 1 ) {
        $timer = ' minute';
    } else {
        $timer = ' minutes';
    }
    
    $totalreadingtime = $readingtime . $timer;
    
    return $totalreadingtime;
}
