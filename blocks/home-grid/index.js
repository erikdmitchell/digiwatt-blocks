import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
/*
import { withSelect, useSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Spinner } from '@wordpress/components';
*/

import edit from './edit';

const name = "dwb/home-grid";
/*
registerBlockType(name, {
    title: "Home Grid",
	icon: 'smiley',
	category: 'common',  
    attributes: {},
    edit,
    save
});
*/
registerBlockType(name, {
    title: "Home Grid",
	icon: 'smiley',
	category: 'common',  
    attributes: {},
    edit,
});