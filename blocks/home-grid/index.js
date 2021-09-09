import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { withSelect, useSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Spinner } from '@wordpress/components';

import Posts from './Posts';

registerBlockType( 'dwb/home-grid-block', {
	title: __( 'Home Grid', 'dwb' ),
	icon: 'smiley',
	category: 'common',
	attributes: {},
	edit: ( props ) => {
		const {
			className,
			attributes: {},
			setAttributes,
		} = props;

		return (
    		<div>
			<Posts />
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;

		return (
    		<div className={className}>
        		<Posts />
            </div>
        );
	},
} );
