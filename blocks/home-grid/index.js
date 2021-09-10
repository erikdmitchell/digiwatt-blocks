import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { withSelect, useSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Spinner } from '@wordpress/components';

import Posts from './Posts';
import PostsX from './PostsX';

export const PostTest = (props) => {
    return (<div>POST txt</div>);
}

/**
 * Save callback for block
 */
export const save = props => {
  const { attributes, className } = props;
  //const { defaultValue, blockId } = attributes;
  return (
        <div className={className}>
        		<PostsX />
            </div>
  );
};

/**
 * Edit callback for block
 */		
export const edit = ({ attributes, setAttributes, className }) => {
  //const { defaultValue, blockId } = attributes;
  //const setDefaultValue = defaultValue => setAttributes({ defaultValue });
  //const setBlockId = blockId => setAttributes({ blockId });
/*
  if (clientId !== blockId) {
    setBlockId(clientId);
  }
*/

  return (
    		<div>
			x
			</div>
  );
};

const name = "dwb/home-grid-block";
registerBlockType(name, {
    title: "Home Grid",
	icon: 'smiley',
	category: 'common',  
    attributes: {},
    edit,
    save
});


/*
registerBlockType( 'dwb/home-grid-block', {
	title: __( 'Home Grid', 'dwb' ),
	icon: 'smiley',
	category: 'common',
	attributes: {},
	edit: ( props ) => {
		const {
			className,
			attributes: {},
			setAttributes,
		} = props;

		return (
    		<div>
			<Posts />
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;

		return (
    		<div className={className}>
        		<Posts />
            </div>
        );
	},
} );
*/
