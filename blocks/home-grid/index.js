//import { registerBlockType } from '@wordpress/blocks';
//import edit from './edit';

/*
const name = 'dwb/home-grid';

registerBlockType( name, {
	title: 'Home Grid',
	icon: 'editor-table',
	category: 'common',
	attributes: {},
	edit,
} );
*/



/**
 * WordPress dependencies
 */
//import { postList as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
/*
import edit from './edit';
import metadata from './block.json';

const { name } = metadata;
export { metadata, name };

export const settings = {
	icon: 'editor-table',
	example: {},
	edit,
};
*/


import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import metadata from './block.json';
 
registerBlockType( metadata, {
    icon: 'editor-table',
    edit: edit,
} );