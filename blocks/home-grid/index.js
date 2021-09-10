import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';

const name = 'dwb/home-grid';

registerBlockType( name, {
	title: 'Home Grid',
	icon: 'smiley',
	category: 'common',
	attributes: {},
	edit,
} );
