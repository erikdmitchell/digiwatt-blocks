import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'dwb/read-time', {
	title: __( 'Read Time', 'dwb' ),
	icon: 'visibility',
	category: 'text',
	edit: ( props ) => {
		const {
			className,
			attributes: {},
			setAttributes,
		} = props;

		return (
			<div className={ className }>
                Read Time
            </div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props; 
		   	
		return (
			<div className={ className }>
                Read Time
            </div>
		);
	},
} );
