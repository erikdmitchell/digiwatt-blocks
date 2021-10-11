import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/read-time';

registerBlockType( name, {
	title: 'Home Grid',
	icon: 'editor-table',
	category: 'common',
	attributes: {},
	edit,
} );