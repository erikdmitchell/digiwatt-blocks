import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/home-grid';

registerBlockType( name, {
	title: 'Home Grid',
	icon: 'editor-table',
	category: 'common',
	attributes: {},
	edit,
} );
