import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/read-time';

registerBlockType( name, {
	title: 'Read Time',
	icon: 'clock',
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
