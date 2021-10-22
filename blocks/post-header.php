<?php
/**
 * Register Post Header block
 *
 * @package dwb
 * @since 0.2.0
 */

/**
 * Register Post Header block.
 *
 * @access public
 * @return void
 */
function dwb_post_header_block_init() {
    // Skip block registration if Gutenberg is not enabled/merged.
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php' );
    $block_slug = 'post-header';

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
        "dwb/{$block_slug}",
        array(
            'attributes' => array(
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
                'postAuthorDetails' => array(
                    'type' => 'string',
                ),
            ),
            'render_callback' => 'render_block_digiwatt_post_header',
            'editor_script' => 'dwb-block-script',
            'editor_style' => "dwb-{$block_slug}-block-editor",
            'style' => "dwb-{$block_slug}-block-style",
        ),
    );
}
add_action( 'init', 'dwb_post_header_block_init' );

/**
 * Render the Post Header block.
 * 
 * @access public
 * @param mixed $attributes (array).
 * @return html
 */
function render_block_digiwatt_post_header( $attributes ) {
    global $post;
    
    $html = '';

    $html .= '<header class="entry-header">';
        $html .= '<div class="featured-columns">';
            $html .= '<div class="featured-column">';
                $html .= '<div class="header-content">';
                    $html .= '<div class="title">';
                        $html .= '<h1 class="entry-title">'.get_the_title( $post ).'</h1>';
                    $html .= '</div>';
                    $html .= '<div class="meta">';
                        $html .= get_dwb_post_header_posted_on();
                    $html .= '</div>';
                $html .= '</div>';        
            $html .= '</div>';
            
            if (has_post_thumbnail()) :
                $html .= '<div class="featured-column">';
                    $html .= get_dwb_post_header_post_thumbnail( $attributes['featuredImageSizeSlug'], $post->ID);
                $html .= '</div>';
            else :
                $html .= '<div class="featured-column no-thumb"></div>';
            endif;
        $html .= '</div>';
    $html .= '</header>';	   
    
    $class = 'wp-block-dwb-post-header-block';
    $wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

    return sprintf(
        '<div %1$s>%2$s</div>',
        $wrapper_attributes,
        $html,
    );
}

/**
 * Get post date and author.
 * 
 * @access public
 * @return void
 */
function get_dwb_post_header_posted_on() {
    $html = '';
    
    $html .= wp_kses_post( '<div class="entry-date"><a href="' . get_permalink() . '" rel="bookmark"><time class="entry-date" datetime="' . get_the_date( 'c' ) . '">' . get_the_date() . '</time></a></div>' );
    
    $html .= wp_kses_post( '<div class="byline"><span class="author vcard"><a class="url fn n" href="' . get_author_posts_url( get_the_author_meta( 'ID' ) ) . '" rel="author">By ' . get_the_author() . '</a></div></span>' );

    return $html;
}

/**
 * Get the thumbnail.
 * 
 * @access public
 * @param string $size (default: 'full')
 * @param int $post_id (default: 0)
 * @return void
 */
function get_dwb_post_header_post_thumbnail( $size = 'full', $post_id = 0 ) {
    $thumb = '';

    if (has_post_thumbnail( $post_id )) {
        $thumb_id = get_post_thumbnail_id( $post_id );
        $thumb_src_url = wp_get_attachment_image_url( $thumb_id, $size );
        $thumb_meta = wp_get_attachment_metadata( $thumb_id );
        $thumb_base = '<img src="' . $thumb_src_url . '" class="img-responsive" />';
        $thumb = wp_image_add_srcset_and_sizes( $thumb_base, $thumb_meta, $thumb_id );
    }

    return wp_kses_post( $thumb );
}