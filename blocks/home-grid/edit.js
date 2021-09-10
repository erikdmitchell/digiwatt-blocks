/**
 * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';

/**
 * WordPress dependencies
 */
import { RawHTML } from '@wordpress/element';
import {
	Spinner,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import {
	__experimentalImageSizeControl as ImageSizeControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Module Constants
 * note - these were attributes, but we currently don't use any settings
 *
 */
const POSTSTOSHOW = 3; // postsToShow
const EXCERPT_LENGTH = 35; // excerptLength

export default function HomeGridEdit( { attributes, setAttributes } ) {
	const {
		featuredImageSizeSlug,
		featuredImageSizeWidth,
		featuredImageSizeHeight,
	} = attributes;
	
	const {
		imageSizeOptions,
		latestPosts,
		defaultImageWidth,
		defaultImageHeight,
	} = useSelect(
		( select ) => {
			const { getEntityRecords, getMedia } = select(
				coreStore
			);
			const { getSettings } = select( blockEditorStore );
			const { imageSizes, imageDimensions } = getSettings();
			
			const latestPostsQuery = pickBy(
				{
					per_page: POSTSTOSHOW,
				},
				( value ) => ! isUndefined( value )
			);

			const posts = getEntityRecords(
				'postType',
				'post',
				latestPostsQuery
			);

			return {
				defaultImageWidth: get(
					imageDimensions,
					[ featuredImageSizeSlug, 'width' ],
					0
				),
				defaultImageHeight: get(
					imageDimensions,
					[ featuredImageSizeSlug, 'height' ],
					0
				),
				imageSizeOptions: imageSizes
					.filter( ( { slug } ) => slug !== 'full' )
					.map( ( { name, slug } ) => ( {
						value: slug,
						label: name,
					} ) ),
				latestPosts: ! Array.isArray( posts )
					? posts
					: posts.map( ( post ) => {
							if ( ! post.featured_media ) return post;

							const image = getMedia( post.featured_media );
							let url = get(
								image,
								[
									'media_details',
									'sizes',
									featuredImageSizeSlug,
									'source_url',
								],
								null
							);
							if ( ! url ) {
								url = get( image, 'source_url', null );
							}
							const featuredImageInfo = {
								url,
								alt: image?.alt_text,
							};
							return { ...post, featuredImageInfo };
					  } ),
			};
		},
		[
			featuredImageSizeSlug,
			POSTSTOSHOW,
		]
	);

	const hasPosts = !! latestPosts?.length;

	if ( ! hasPosts ) {
		return (
			<div>
				{ ! Array.isArray( latestPosts ) ? (
					<Spinner />
				) : (
					__( 'No posts found.' )
				) }
			</div>
		);
	}

	// Removing posts from display should be instant.
	const displayPosts =
		latestPosts.length > POSTSTOSHOW
			? latestPosts.slice( 0, POSTSTOSHOW )
			: latestPosts;

    // setup our excerpt.
    const getPostExcerpt = (post) => {
		let excerpt = post.excerpt.rendered;

					const excerptElement = document.createElement( 'div' );
					excerptElement.innerHTML = excerpt;

					excerpt =
						excerptElement.textContent ||
						excerptElement.innerText ||
						'';

		const needsReadMore =
			EXCERPT_LENGTH < excerpt.trim().split( ' ' ).length &&
			post.excerpt.raw === '';

		const postExcerpt = needsReadMore ? (
                <>
                {excerpt
					.trim()
					.split( ' ', EXCERPT_LENGTH )
					.join( ' ' )}
					

								<a
									href={ post.link }
									rel="noreferrer noopener"
								>
									read more...
								</a>
								</>
		) : (
			excerpt
		);

        return postExcerpt;
    }
    
	return (
		<div className="posts-wrapper">
            <div className="front-page-grid">
				{ displayPosts.map( ( post, i ) => {
					const titleTrimmed = invoke( post, [
						'title',
						'rendered',
						'trim',
					] );

					const {
						featuredImageInfo: {
							url: imageSourceUrl,
							alt: featuredImageAlt,
						} = {},
					} = post;
					
					const imageClasses = 'img-responsive';
									
					const featuredImage = (
						<img
							src={ imageSourceUrl }
							alt={ featuredImageAlt }
							style={ {
								maxWidth: featuredImageSizeWidth,
								maxHeight: featuredImageSizeHeight,
							} }
						/>
					);
					
					return (
						<div className="front-page-post" key={ i }>
                            <div className={ imageClasses }>
								<a
									href={ post.link }
									rel="noreferrer noopener"
								>
									{ featuredImage }
								</a>
							</div>

                            <div className="title"><h3>
								<RawHTML>{ titleTrimmed }</RawHTML>
                            </h3></div>

                            <div className="excerpt">
								{getPostExcerpt(post)}
                            </div>
                        </div>
					);
				} ) }
			</div>
		</div>
	);
}
