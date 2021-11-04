/**
 * External dependencies
 *
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';

import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { date } from '@wordpress/date';
import {
    ColorPicker,
    ColorPalette,
    Spinner,
    Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import {
    InspectorControls, 
    PanelColorSettings,
    useBlockProps,
	__experimentalImageSizeControl as ImageSizeControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { compose } from '@wordpress/compose';

export default function PostHeaderEdit( { attributes, setAttributes } ) {   
	const { className, featuredImageSizeSlug, featuredImageSizeWidth, featuredImageSizeHeight, align, backgroundColor, textColor } = attributes;

	const {
    	post,
		postID,
		postTitle,
        postAuthorDetails,
		postImage,
	} = useSelect(
		( select ) => {
			const { getUser, getMedia, getEditedEntityRecord } = select( coreStore );
			const { getSettings } = select( blockEditorStore );
			const { imageSizes, imageDimensions } = getSettings();
			
            const currentPostID = select("core/editor").getCurrentPostId();
            const currentPost = getEditedEntityRecord( 'postType', 'post', currentPostID );
            const title = currentPost.title;

			const authorID = getEditedEntityRecord(
				'postType',
				'post',
				currentPostID
			)?.author;

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
				postAuthorDetails: authorID ? getUser( authorID ) : null,
				postImage: featuredImageUrl ? featuredImage : null,
			};
		},
	);
	
	// convert post object to array - lazy, but easier.
	const postArr = Object.keys(post);
	
	const hasPost = !! postArr?.length;

    const onChangeTextColor = ( hexColor ) => {
        setAttributes( { textColor: hexColor } );
    };
        
    const onChangeBGColor = ( hexColor ) => {
        setAttributes( { backgroundColor: hexColor } );
    };
	
	const inspectorControls = (
		<InspectorControls>
			<Panel>                
                <PanelColorSettings 
                    title={ __( 'Color Settings', 'dwb' ) }
                	colorSettings={[
                		{
                			value: textColor,
                			onChange: onChangeTextColor,
                			label: __('Text Color')
                		},
                		{
                			value: backgroundColor,
                			onChange: onChangeBGColor,
                			label: __('Background Color')
                		},                		
                	]}
                />
                
                
			</Panel>
		</InspectorControls>
	);

	if ( ! hasPost ) {
		return (
			<div>
				{ ! Array.isArray( post ) ? (
					<Spinner />
				) : (
					__( 'No post found.' )
				) }
			</div>
		);
	}  
		
	// get block properties and add custom ones.
    const blockProps = useBlockProps( {
        className: 'entry-header',
        style: {
            color: textColor != undefined ? textColor : '',
            backgroundColor: backgroundColor != undefined ? backgroundColor : '',
		},
    } );	

	return (
    	<>
        	{ inspectorControls }
            <header { ...blockProps }>
                <div className="featured-columns">
                    <div className="featured-column"> 
                        <div className="header-content"> 
                            <div className="title">
                                <h1 className="entry-title">{postTitle}</h1>
                            </div>
                            <div className="meta">
                                <div className="entry-date">
                                    <a 
                                        href={ post.link }
                                        rel="bookmark"
                                    >
                                        <time dateTime={date('c', post.date)} className="entry-date">{date('F j, Y', post.date)}</time>
                                    </a>
                                </div>
                                
                                <div className="byline">
                                    <span className="author vcard">
                                        <a className="url fn n" href={postAuthorDetails ? postAuthorDetails.link : '#'} rel="author">
                                            By {postAuthorDetails ? postAuthorDetails.name : ''}
                                        </a>
                                    </span>
                                </div>        
                            </div>
                        </div>              
                    </div>
                    {postImage ? <div className="featured-column">{ postImage }</div> : <div className="featured-column no-thumb"></div>}
                </div>
            </header> 
        </>			
	);
}