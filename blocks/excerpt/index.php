<?php
/**
 * Server-side rendering of the `dwb/excerpt` block.
 *
 * @package DigiWatts
 */

/**
 * Renders the `dwb/excerpt` block on the server.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 * @return string Returns the filtered post excerpt for the current post wrapped inside "p" tags.
 */
function render_block_dwb_excerpt( $attributes, $content, $block ) { 
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$excerpt = dwb_post_excerpt($block->context['postId'], $attributes['excerptLength']);

	if ( empty( $excerpt ) ) {
		return '';
	}

	$more_text           = ! empty( $attributes['moreText'] ) ? '<a class="dwb-block--excerpt__more-link" href="' . esc_url( get_the_permalink( $block->context['postId'] ) ) . '">' . wp_kses_post( $attributes['moreText'] ) . '</a>' : '';
	$filter_excerpt_more = function( $more ) use ( $more_text ) {
		return empty( $more_text ) ? $more : '';
	};

	$classes = '';
	if ( isset( $attributes['textAlign'] ) ) {
		$classes .= "has-text-align-{$attributes['textAlign']}";
	}
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes ) );

	$content               = '<p class="dwb-block-excerpt__excerpt">' . $excerpt;
	$show_more_on_new_line = ! isset( $attributes['showMoreOnNewLine'] ) || $attributes['showMoreOnNewLine'];
	if ( $show_more_on_new_line && ! empty( $more_text ) ) {
		$content .= '</p><p class="dwb-block-excerpt__more-text">' . $more_text . '</p>';
	} else {
		$content .= " $more_text</p>";
	}

	return sprintf( '<div %1$s>%2$s</div>', $wrapper_attributes, $content );
}

/**
 * Registers the `dwb/excerpt` block on the server.
 */
function register_block_dwb_excerpt() {
	register_block_type(
        dirname(__FILE__) . '/',
		array(
			'render_callback' => 'render_block_dwb_excerpt',
		)
	);
}
add_action( 'init', 'register_block_dwb_excerpt' );