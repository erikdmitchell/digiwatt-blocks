import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/post-header';

registerBlockType( name, {
	title: 'Post Header',
	icon: 'layout',
	category: 'common',
	attributes: {
		featuredImageSizeSlug: {
			type: 'string',
			default: 'digiwatt-home-grid',
		},   
		featuredImageSizeWidth: {
			type: 'number',
			default: null,
		},
		featuredImageSizeHeight: {
			type: 'number',
			default: null,
		},		 	
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
