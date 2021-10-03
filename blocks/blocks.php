<?php

/**
 * Register blocks.
 *
 * @access public
 * @return void
 */
function digiwatt_register_blocks() {
    // Fail if block editor is not supported
    if ( ! function_exists( 'register_block_type' ) ) {
        return;
    }

    // automatically load dependencies and version
    $asset_file = include( DWB_ABSPATH . 'build/index.asset.php' );
    $blocks = array( 'tagline', 'about' );

    // register blocks.
    foreach ( $blocks as $block ) {
        digiwatt_register_block_type( $block );
        digiwatt_register_block_script( $block, $asset_file );
        digiwatt_register_block_style( $block, 'style', $asset_file );
        digiwatt_register_block_style( $block, 'editor', $asset_file );
    }

    $block_slug = 'home-grid';
    register_block_type(
        'dwb/' . $block_slug,
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
            'render_callback' => 'render_block_digiwatt_home_grid',
            'editor_script' => "dwb-{$block_slug}-block-script",
            'editor_style' => "dwb-{$block_slug}-block-editor",
            'style' => "dwb-{$block_slug}-block-style",
        )
    );

    add_image_size( 'digiwatt-home-grid', 650, 300, true );
    add_image_size( 'digiwatt-home-grid-large', 765, 550, true );    

    $filename = 'style';
    wp_register_style(
        "dwb-{$block_slug}-block-{$filename}",
        DWB_ABSURL . "blocks/{$block_slug}/{$filename}.css",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$filename}.css" )
    );

    $filename = 'editor';
    wp_register_style(
        "dwb-{$block_slug}-block-{$filename}",
        DWB_ABSURL . "blocks/{$block_slug}/{$filename}.css",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$filename}.css" )
    );
}
add_action( 'init', 'digiwatt_register_blocks' );

/**
 * Register blok type.
 *
 * @access public
 * @param string $block_slug (default: '')
 * @return void
 */
function digiwatt_register_block_type( $block_slug = '' ) {
    if ( empty( $block_slug ) ) {
        return;
    }

    register_block_type(
        "dwb/dwb-{$block_slug}-block",
        array(
            'editor_script' => "dwb-{$block_slug}-block-script",
            'editor_style' => "dwb-{$block_slug}-block-editor",
            'style' => "dwb-{$block_slug}-block-style",
        )
    );
}

/**
 * Register block script.
 *
 * @access public
 * @param string $block_slug (default: '')
 * @param array  $asset_file (default: array())
 * @return void
 */
function digiwatt_register_block_script( $block_slug = '', $asset_file = array() ) {
    if ( empty( $block_slug ) || empty( $asset_file ) ) {
        return;
    }

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
 * @param array  $asset_file (default: array())
 * @return void
 */
function digiwatt_register_block_style( $block_slug = '', $filename = 'style', $asset_file = array() ) {
    if ( empty( $block_slug ) || empty( $asset_file ) ) {
        return;
    }

    wp_register_style(
        "dwb-{$block_slug}-block-{$filename}",
        DWB_ABSURL . "blocks/{$block_slug}/{$filename}.css",
        array(),
        filemtime( DWB_ABSPATH . "blocks/{$block_slug}/{$filename}.css" )
    );
}

function render_block_digiwatt_home_grid( $attributes ) {
    global $post;

    $args = array(
        'posts_per_page'   => $attributes['postsToShow'],
        'post_status'      => 'publish',
        'order'            => $attributes['order'],
        'orderby'          => $attributes['orderBy'],
        'suppress_filters' => false,
    );

    $recent_posts = get_posts( $args );
    $last_post_key = count($recent_posts) - 1;
    $col_counter = 1;
    $posts_markup = '';

    foreach ( $recent_posts as $key => $post ) {
        $post_link = esc_url( get_permalink( $post ) );

        // first post gets its own col, then the second post begins the second col.
        if (0 == $key || 1 == $key) {
            $posts_markup  .= '<div class="wp-block-column home-grid-col hgc-'.$col_counter.'">';
        }

        $posts_markup .= '<div class="home-grid-post">';

        if ( has_post_thumbnail( $post ) ) {
            $image_style = '';
            if ( isset( $attributes['featuredImageSizeWidth'] ) ) {
                $image_style .= sprintf( 'max-width:%spx;', $attributes['featuredImageSizeWidth'] );
            }
            if ( isset( $attributes['featuredImageSizeHeight'] ) ) {
                $image_style .= sprintf( 'max-height:%spx;', $attributes['featuredImageSizeHeight'] );
            }

            $image_classes = 'img-responsive';
            
            // first post gets larger thumb.
            if (0 == $key) {
                $image_size_slug = $attributes['featuredImageLargeSizeSlug'];
            } else {
                $image_size_slug = $attributes['featuredImageSizeSlug'];   
            }

            $featured_image = get_the_post_thumbnail(
                $post,
                $image_size_slug,
                array(
                    'style' => $image_style,
                )
            );

            $featured_image = digiwatt_get_post_thumbnail_custom( $post, $image_size_slug );

            $posts_markup .= sprintf(
                '<div class="%1$s">%2$s</div>',
                $image_classes,
                $featured_image
            );
        }

        $title = get_the_title( $post );
        if ( ! $title ) {
            $title = __( '(no title)' );
        }

        $posts_markup .= sprintf(
            '<div class="title"><h3>%1$s</h3></div>',
            $title
        );

        // begin excerpt
        $extra = ' <a href="' . get_permalink( $post ) . '" rel="noreferrer noopener">read more...</a>';

        if ( post_password_required( $post ) ) {
            $trimmed_excerpt = __( 'This content is password protected.' );
        }

        if ( has_excerpt( $post->ID ) ) {
            $the_excerpt = $post->post_excerpt;
            return apply_filters( 'the_content', $the_excerpt );
        } else {
            $the_excerpt = $post->post_content;
        }
        
        // first post gets longer excerpt.
        if (0 == $key) {
            $excerpt_length = $attributes['featuredPostExcerptLength'];  
        } else {
            $excerpt_length = $attributes['excerptLength'];  
        }

        $the_excerpt = strip_shortcodes( strip_tags( $the_excerpt ) );
        $the_excerpt = preg_split( '/\b/', $the_excerpt, $excerpt_length * 2 + 1 );
        $excerpt_waste = array_pop( $the_excerpt );
        $the_excerpt = implode( $the_excerpt );
        $the_excerpt .= $extra;

        // fix
        $trimmed_excerpt = $the_excerpt;

        $posts_markup .= sprintf(
            '<div class="excerpt">%1$s</div>',
            $trimmed_excerpt
        );
        // end excertp

        $posts_markup .= '</div>';

        // first post gets its own col, then the last post closes the second col.
        if (0 == $key || $last_post_key == $key) {
            $posts_markup .= '</div>';
            $col_counter++;
        }        
    }

    $posts_markup .= '<div class="more-articles"><a href="' . get_permalink( get_option( 'page_for_posts' ) ) . '">More Articles</a></div>';

    $class = 'wp-block-dwb-home-grid-block wp-block-columns';

    $wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

    return sprintf(
        '<div %1$s>%2$s</div>',
        $wrapper_attributes,
        $posts_markup
    );
}


/*
<div class="wp-block-columns">
    <div class="wp-block-column" style="flex-basis:33.34%"></div>
    <div class="wp-block-column" style="flex-basis:33.33%"></div>
</div>
*/

/**
 * Get custom post thumbnail.
 *
 * Used in home grid block.
 *
 * @access public
 * @param string $post (default: '').
 * @param string $size (default: 'full').
 * @param bool   $link (default: true).
 * @return image
 */
function digiwatt_get_post_thumbnail_custom( $post = '', $size = 'full', $link = true ) {
    if ( is_int( $post ) ) {
        // get the post object of the passed ID.
        $post = get_post( $post );
    } elseif ( ! is_object( $post ) ) {
        return false;
    }

    $html = null;

    $image_id = get_post_thumbnail_id( $post->ID );
    $image_src = wp_get_attachment_image_url( $image_id, $size );
    $image_meta = wp_get_attachment_metadata( $image_id );
    $image_base = '<img src="' . $image_src . '" class="img-responsive" />';
    $image = wp_image_add_srcset_and_sizes( $image_base, $image_meta, $image_id );

    if ( post_password_required( $post ) || ! has_post_thumbnail( $post ) ) {
        return;
    }

    if ( $link ) :
        $html .= '<a class="post-thumbnail" href="' . get_permalink( $post->ID ) . '">';
            $html .= $image;
        $html .= '</a>';
    else :
        $html .= '<div class="post-thumbnail">';
            $html .= $image;
        $html .= '</div>';
    endif;

    $image = apply_filters( 'edigiwatt_post_thumbnail_custom', $html, $size, $image );

    return $image;
}
