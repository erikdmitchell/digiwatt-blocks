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
import { date } from '@wordpress/date';
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
            const title = currentPost.title.rendered;
            const authorID = currentPost.author;
            const author = getUser( authorID );
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
console.log(author);
			return {
    			post: currentPost,
				postID: currentPostID,
				postTitle: title,
				postAuthor: author,
				postImage: featuredImage,
			};
		},
	);

    const postedOn = (
        <div className="entry-date">
            <a 
                href={ post.link }
                rel="bookmark"
            >
                <time datetime={date('c', post.date)} className="entry-date">{date('F j, Y', post.date)}</time>
            </a>
        </div>
    );
//console.log(postAuthor);
//console.log(postAuthor.link);
    const byline = (
        <div className="byline">
            <span className="author vcard">
                <a className="url fn n" href={postAuthor.link} rel="author">
                    By {postAuthor.name}
                </a>
            </span>
        </div>
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
                            { postedOn }
                        </div>
                    </div>              
                </div>
                swap some classes if we have a post thumbnail
                { postImage }
            </div>
        </header> 
    );  


    
/*

            <?php if (has_post_thumbnail()) : ?>
                <div class="featured-column">
                    <?php emdotbike_theme_post_thumbnail( 'single' ); ?>
            <?php else : ?>
                <div class="featured-column no-thumb">
            <?php endif; ?>
                
            </div>
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



					