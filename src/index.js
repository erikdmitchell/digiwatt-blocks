import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

registerBlockType( 'dwb/tagline-block', {
	title: __( 'Tagline', 'dwb' ),
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
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		bg_color: {
    		type: 'string',
    		default: '#8ed2fc',
		}
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL, bg_color },
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
		
        const onChangeBGColor = ( hexColor ) => {
            setAttributes( { bg_color: hexColor } );
        };

		return (
    		<>
    		<InspectorControls key="setting">
                <div id="gutenpride-controls">
                    <fieldset>
                        <legend className="blocks-base-control__label">
                            { __( 'Background color', 'gutenpride' ) }
                        </legend>
                        <ColorPalette // Element Tag for Gutenberg standard colour selector
                            onChange={ onChangeBGColor }
                        />
                    </fieldset>
                </div>
            </InspectorControls>
    		
			<div className={ className } style={ { backgroundColor: bg_color } }>
				<div className="tagline-image">
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
											'tagline-image',
											'dwb'
										) }
									/>
								) }
							</Button>
						) }
					/>
				</div>
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
			<div className={ className }>
                <div class="tagline-wrapper">
    				{ mediaURL && (
        				<div class="image-wrapper">
        					<img
        						className="tagline-image"
        						src={ mediaURL }
        						alt={ __( 'tagline image', 'dwb' ) }
        					/>
    					</div>
    				) }
    				<div class="title-wrap">
                        <RichText.Content tagName="h1" value={ title } />				
                    </div>
                </div>
			</div>
		);
	},
} );