import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload, InspectorControls, ColorPalette } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/*
    image
    text  
*/

registerBlockType( 'dwb/about-block', {
	title: __( 'About', 'dwb' ),
	icon: 'format-quote',
	category: 'text',
	attributes: {
		text: {
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
	},
	edit: ( props ) => {
		const {
			className,
			attributes: { title, mediaID, mediaURL },
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

		return (
    		<>    		
			<div className={ className }>
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
			attributes: { title, mediaURL, bg_color },
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