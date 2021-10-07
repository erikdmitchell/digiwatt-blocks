import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import metadata from './block.json';
 
registerBlockType( metadata, {
    icon: 'editor-table',
    edit: edit,
} );