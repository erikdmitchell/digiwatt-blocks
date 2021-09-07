import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
/*
    <div class="front-page-tagline">
        <div class="wrapper">
            <div class="image-wrap">
                <img src="<?php the_field( 'tagline_image' ); ?>" alt="emdotbike logo white" />
            </div>
            <div class="title-wrap">
                <h1><?php the_field( 'tagline_text' ); ?></h1>
            </div>
        </div>
    </div>    
*/

registerBlockType( 'dwb/tagline-block', {
	title: __( 'Tagline', 'dwb' ),
	icon: 'index-card',
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
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: { title, mediaURL },
		} = props;
		return (
			<div className={ className }>
				{ mediaURL && (
					<img
						className="tagline-image"
						src={ mediaURL }
						alt={ __( 'tagline image', 'dwb' ) }
					/>
				) }
                <RichText.Content tagName="h1" value={ title } />				
			</div>
		);
	},
} );