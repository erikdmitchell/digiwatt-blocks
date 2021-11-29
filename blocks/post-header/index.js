import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/post-header';

registerBlockType( name, {
	title: 'Post Header',
	icon: 'layout',
	apiVersion: 2,
	category: 'common',
	attributes: {
    	align: {
    		type: 'string',
    		default: 'full',
    	},    	
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
        backgroundColor: {
			type: 'string',
		}, 
        textColor: {
			type: 'string',
		}, 		    
	},
	supports: {
        align: [ 'wide', 'full' ], 	
	},
	edit,
} );
