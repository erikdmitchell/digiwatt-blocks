/**
 * External dependencies
 *
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';

import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import {
	__experimentalImageSizeControl as ImageSizeControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';

export default function ReadTimeEdit( { attributes, setAttributes } ) {
	const { className, readTimeText, timePosition, featuredImageSizeSlug, featuredImageSizeWidth, featuredImageSizeHeight } = attributes;

	const {
    	post,
		postID,
		postTitle,
		postAuthor,
		postImage,
	} = useSelect(
		( select ) => {
			const { getUser, getMedia, getEntityRecord } = select( coreStore );
			const { getSettings } = select( blockEditorStore );
			const { imageSizes, imageDimensions } = getSettings();
			
            const currentPostID = select("core/editor").getCurrentPostId();
            const currentPost = getEntityRecord( 'postType', 'post', currentPostID );
            const title = select('core/editor').getEditedPostAttribute( 'title' );
            const authorID = select('core/editor').getEditedPostAttribute( 'author' );
            const image = getMedia( currentPost.featured_media );          
        	const featuredImageUrl = get(
    			image,
    			[
    				'media_details',
    				'sizes',
    				featuredImageSizeSlug,
    				'source_url',
    			],
    			null
    		); 
    		const featuredImageAlt = image?.alt_text;	

            const featuredImage = (
				<img
					src={ featuredImageUrl }
					alt={ featuredImageAlt }
					style={ {
						maxWidth: featuredImageSizeWidth,
						maxHeight: featuredImageSizeHeight,
					} }
				/>
			);

			return {
    			post: currentPost,
				postID: currentPostID,
				postTitle: title,
				postAuthor: authorID ? getUser( authorID ) : null,
				postImage: featuredImage,
			};
		},
	);



    const headerContent = (
        <header className="entry-header">  
            <div className="featured-columns">
                <div className="featured-column"> 
                    <div className="header-content"> 
                        <div className="title">
                            <h1 className="entry-title">{postTitle}</h1>
                        </div>
                        <div className="meta">
                            check post type = post
                            emdotbike_theme_posted_on func
                            
                        </div>
                    </div>              
                </div>
                swap some classes if we have a post thumbnail
                { postImage }
            </div>
        </header> 
    );  


    
/*
    <header class="entry-header">  
        <div class="featured-columns">
            <div class="featured-column"> 
                <div class="header-content"> 
                    <div class="title">
                        <?php
                        if ( is_single() ) :
                            the_title( '<h1 class="entry-title">', '</h1>' );
                        else :
                            the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
                        endif;
                        ?>
                            
                    </div>
                    <div class="meta">
                        <?php
                        if ( 'post' == get_post_type() ) {
                            emdotbike_theme_posted_on();
                        }
                        ?>
                    </div>
                </div>              
            </div>
            <?php if (has_post_thumbnail()) : ?>
                <div class="featured-column">
                    <?php emdotbike_theme_post_thumbnail( 'single' ); ?>
            <?php else : ?>
                <div class="featured-column no-thumb">
            <?php endif; ?>
                
            </div>
        </div>
    </header>
*/
        


	const inspectorControls = (
		<InspectorControls>
			<PanelBody>
				<PanelRow>
					<SelectControl
						label="Time Position"
						labelPosition="side"
						value={ attributes.timePosition }
						options={ [
							{ label: 'Before', value: 'before' },
							{ label: 'After', value: 'after' },
						] }
						onChange={ ( newval ) =>
							setAttributes( { timePosition: newval } )
						}
					/>
				</PanelRow>
				<PanelRow>
					<InputControl
						label="Text"
						labelPosition="side"
						value={ attributes.readTimeText }
						onChange={ ( newval ) =>
							setAttributes( { readTimeText: newval } )
						}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<div>
			{ inspectorControls }
			<div className={ className }>{ headerContent }</div>
		</div>
	);
}



					