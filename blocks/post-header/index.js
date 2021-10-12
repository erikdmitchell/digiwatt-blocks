import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/post-header';

registerBlockType( name, {
	title: 'Post Header',
	icon: 'layout',
	category: 'common',
	attributes: {
		readTimeText: {
			type: 'string',
			default: 'Minute Read',
		},
		timePosition: {
			type: 'string',
			default: 'after',
		},
	},
	edit,
} );
