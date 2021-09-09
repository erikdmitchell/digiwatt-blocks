import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { select, withSelect } from '@wordpress/data';

const PostList = ( props ) => {
  return(<></>
    // Post Info will be displayed here
  )
}

export default withSelect( (select, ownProps ) => {
  const { getEntityRecords } = select( 'core ');
  const postQuery = {
    per_page: 10,
    page: 2
  }
  return {
    postList: getEntityRecords('postType', 'post', postQuery ),
  }
})(PostList)

registerBlockType( 'dwb/home-grid-block', {
	title: __( 'Home Grid', 'dwb' ),
	icon: 'smiley',
	category: 'common',
	attributes: {},
	edit: ( props ) => {
	

    		return (<p>Das posts</p>);
	    },
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;

/*
		const blockStyle = {
			background:
				mediaURL != 0
					? 'url("' + mediaURL + '") no-repeat center center fixed'
					: 'none',
		};
*/

		return (
			<p>
				{ __( 'DigiWatt Plugin – Nothing to see here.', 'dwb' ) }
			</p>
		);
	},
} );
