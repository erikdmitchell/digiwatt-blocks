import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/read-time';

registerBlockType( name, {
	title: 'Read Time',
	icon: 'editor-table',
	category: 'common',
	attributes: {
        "readTimeText": {
            "type": "string",
            "default": 'minute',
        },
        "timePosition": {
            "type": "string",
            "default": "before"
        },                    
	},
	edit,
} );