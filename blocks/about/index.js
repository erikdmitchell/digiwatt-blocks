import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, ResponsiveWrapper } from '@wordpress/components';

registerBlockType( 'dwb/about-block', {
	title: __( 'About', 'dwb' ),
	icon: 'quote',
	category: 'text',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h1',
		},
		mediaID: {
			type: 'number',
			default: 0,
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
			default: '',
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, media },
			setAttributes,
		} = props;
		
		const onChangeTitle = ( value ) => {
			setAttributes( { title: value } );
		};

		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};
		
        const removeMedia = () => {
        	setAttributes({
        		mediaID: 0,
        		mediaURL: ''
        	});
        }
        
        const blockStyle = {
		    backgroundImage: mediaURL != 0 ? 'url("' + mediaURL + '")' : 'none'
        };
        		

		return (
    		<>
    		<InspectorControls key="setting">
				<PanelBody
					title={__('Select block background image', 'awp')}
					initialOpen={ true }
				>
					<div className="dwb-quote-background-image">					
                    	<MediaUploadCheck>
                    	    <MediaUpload
                        	    onSelect={ onSelectImage }
                    	        allowedTypes={ ['image'] }
                    	        value={ mediaID }
                    	        render={({open}) => (
                    	            <Button 
                    	            	className={mediaID == 0 ? 'dwb-quote-background-image__toggle button button-large' : 'dwb-quote-background-image__preview image-button'}
                    	            	onClick={open}
                    	            >
                    	            	{mediaID == 0 && __('Choose an image', 'dwb')}
                    	            	
                    	            	{media != undefined && 
                                            <ResponsiveWrapper
                                                naturalWidth={ media.media_details.width }
                                                naturalHeight={ media.media_details.height }
                                            >
                                                <img src={media.source_url} />
                                            </ResponsiveWrapper>
                                        }
                    	            </Button>
                    	        )}
                    	    />
                    	</MediaUploadCheck>

                        {mediaID != 0 && 
                        	<MediaUploadCheck>
                        		<MediaUpload
                        			title={__('Replace image', 'awp')}
                        			value={mediaID}
                        			onSelect={onSelectImage}
                        			allowedTypes={['image']}
                        			render={({open}) => (
                        				<Button onClick={open} isDefault>{__('Replace image', 'dwb')}</Button>
                        			)}
                        		/>
                        	</MediaUploadCheck>
                        }
		
                		{mediaID != 0 && 
                			<MediaUploadCheck>
                				<Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'dwb')}</Button>
                			</MediaUploadCheck>
                		}
		                    	
					</div>
				</PanelBody>
            </InspectorControls>
    		
			<div className={ className } style={ blockStyle }>
				<RichText
					tagName="h1"
					placeholder={ __(
						'Tagline',
						'dwb'
					) }
					value={ title }
					onChange={ onChangeTitle }
				/>				
			</div>
			</>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { title, mediaURL },
		} = props;
		return (
			<div className={ className } style={ blockStyle }>
                <div class="tagline-wrapper">
    				<div class="title-wrap">
                        <RichText.Content tagName="h1" value={ title } />				
                    </div>
                </div>
			</div>
		);
	},
} );