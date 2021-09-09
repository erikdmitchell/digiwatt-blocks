import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { SelectControl, Spinner } from '@wordpress/components';

// This is the component markup.
// The parameters must match what is returned from calls to withSelect and withDispatch in the compose method below.
const RenderPosts = ( { posts } ) => {
	if ( null === posts ) return <Spinner />;
	console.log( posts );
	return (
		<div className="posts-wrapper">
			{ posts.map( ( post ) => {
				return (
					<div className="flex-item post-ID}" key={ post.id }>
					    Thumbnail
						<div className="post-title">{ post.title.raw }</div>
                        <div className="title"><h3>{ post.title.raw }</h3></div>
                        <div className="excerpt">Exvcerpt</div>						
					</div> 					
				);
			} ) }
		</div>
	);
};

// This is the "actual" component,
// together with the markup and data.
// You can add withDispatch as another argument to the compose function and return an object of methods to access in Render.
const Posts = compose(
	withSelect( ( scopedSelect ) => {
		const { getEntityRecords } = scopedSelect( 'core' );

		return {
			posts: getEntityRecords( 'postType', 'post', { per_page: 3 } ),
		};
	} )
)( RenderPosts );

// Export this component to use as JSX elsewhere
// i.e. <Posts />
export default Posts;

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
			<>
				<h2>Posts</h2>
				<Posts />
			</>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;

		return <p>{ __( 'DigiWatt Plugin – Nothing to see here.', 'dwb' ) }</p>;
	},
} );
