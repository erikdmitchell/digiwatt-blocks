import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/home-grid';

registerBlockType( name, {
	title: 'Home Grid',
	icon: 'editor-table',
	category: 'common',
	attributes: {
        "postsToShow": {
            "type": "number",
            "default": 3
        },
        "excerptLength": {
            "type": "number",
            "default": 35
        },
        "columns": {
            "type": "number",
            "default": 2
        },
        "order": {
            "type": "string",
            "default": "desc"
        },
        "orderBy": {
            "type": "string",
            "default": "date"
        },
        "featuredImageSizeSlug": {
            "type": "string",
            "default": "digiwatt-home-grid"
        },
        "featuredImageSizeWidth": {
            "type": "number",
            "default": null
        },
        "featuredImageSizeHeight": {
            "type": "number",
            "default": null
        },
        "featuredImageLargeSizeSlug": {
            "type": "string",
            "default": "digiwatt-home-grid-large"
        },
        "featuredPostExcerptLength": {
            "type": "number",
            "default": 95
        }    	
	},
	edit,
} );