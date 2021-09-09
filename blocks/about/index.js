import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'dwb/about-block', {
	title: __( 'About', 'dwb' ),
	icon: 'quote',
	category: 'text',
	attributes: {
		text: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			//source: 'attribute',
			//selector: 'img',
			//attribute: 'src',
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { text, mediaID, mediaURL },
			setAttributes,
		} = props;
		
		const onChangeText = ( value ) => {
			setAttributes( { text: value } );
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
		    background: mediaURL != 0 ? 'url("' + mediaURL + '") no-repeat center center fixed' : 'none'
        };

		return (
    		<>
			<div className={ className }>
			
            	<div className="image-wrap" style={ blockStyle }>
            	    <MediaUploadCheck>
                		<MediaUpload
                			onSelect={ onSelectImage }
                			allowedTypes="image"
                			value={ mediaID }
                			render={ ( { open } ) => (
                				<Button
                					className={
                						mediaID
                							? 'image-button'
                							: 'button button-large'
                					}
                					onClick={ open }
                				>
                					{ ! mediaID ? (
                						__( 'Upload Image', 'dwb' )
                					) : (
                						<img
                							src={ mediaURL }
                							alt={ __(
                								'quote image',
                								'dwb'
                							) }
                						/>
                					) }
                				</Button>
                			) }
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
                    				<Button onClick={open}>{__('Replace image', 'dwb')}</Button>
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
            	
    			<div className='about-text-wrap'>
                    <div className='text-inner'>
        				<RichText
        					tagName="p"
        					placeholder={ __(
        						'Sample text',
        						'dwb'
        					) }
        					value={ text }
        					onChange={ onChangeText }
        				/>	
                    </div>
                </div>
			</div>
			</>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { text, mediaURL },
		} = props;
		
        const blockStyle = {
		    background: mediaURL != 0 ? 'url("' + mediaURL + '") no-repeat center center fixed' : 'none'
        };
        
		return (
			<div className={ className }>
			    <div className='image-wrap' style={ blockStyle }></div>
    			<div className='about-text-wrap'>
                    <div className='text-inner'>
                        <RichText.Content tagName="p" value={ text } />				
                    </div>
                </div>
			</div>
		);
	},
} );