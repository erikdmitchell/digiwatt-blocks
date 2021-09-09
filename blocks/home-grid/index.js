import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';import {
    SelectControl,
    Spinner
} from '@wordpress/components';

// This is the component markup.
// The parameters must match what is returned from calls to withSelect and withDispatch in the compose method below.
const RenderPosts = ( { posts } ) => {

    if ( null === posts ) return <Spinner />;
console.log(posts);
    const termOptions = posts.map( ( post ) => {
        return {
            label: post.title.raw,
            value: post.id
        }
    });

    return (
        <SelectControl
            label={ __(
                'Posts',
                'dwb'
            ) }
            value={ 2 }
            onChange={ ( value ) => console.log( value ) }
            options={ termOptions }
        />
    );
};

// This is the "actual" component, 
// together with the markup and data.
// You can add withDispatch as another argument to the compose function and return an object of methods to access in Render.
const Posts = compose(
    withSelect( ( scopedSelect ) => {
        const {
            getEntityRecords
        } = scopedSelect( 'core' );

        return {
            posts: getEntityRecords( 'postType', 'post', { per_page: 3 } ),
        };
    } )
)( RenderPosts );

// Export this component to use as JSX elsewhere 
// i.e. <Posts />
export default Posts;




/*
const PostList = ( props ) => {
console.log('PostList');
console.log(props);

  return(<>Post Info will be displayed here</>
    // Post Info will be displayed here
  )
}


const applyWithSelect = withSelect((select, props) => {
    console.log(select('core').getEntityRecords('postType', 'post', {per_page: 2}));
    
    return {foo: 'bar', posts: []}
});
*/

/**
* Use compose to return the result of withSelect to Edit({...})
* @see https://developer.wordpress.org/block-editor/packages/packages-compose/
*/
/*
export default compose(
    applyWithSelect,
)(PostList);
*/
/*
export default withSelect( (select, ownProps ) => {
console.log('foo');    
    const { getEntityRecords } = select( 'core ');
    const postQuery = {
        per_page: 3
    }
console.log(getEntityRecords('postType', 'post', postQuery ));  
    return {
        postList: getEntityRecords('postType', 'post', postQuery ),
    }
})(PostList)
*/

/*
const getPosts = (props) => {
    let postList = [];
    
console.log('getposts');
withSelect( (select, ownProps ) => {
console.log('withSelect');    
    const { getEntityRecords } = select( 'core ');
    const postQuery = {
        per_page: 10
    }
    
    postList = getEntityRecords('postType', 'post', postQuery );
})
    
    return {postList}
}


const PostList = (props) => {
console.log(props);    
    const posts = getPosts();
console.log(posts);    
    return (
        <div>PostList</div>
    )
}
*/ 
		

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
    		<Posts />
    		<p>blockType</p>
    		</>
        );
    },
	save: ( props ) => {
		const {
			className,
			attributes: {},
		} = props;

		return (
			<p>
				{ __( 'DigiWatt Plugin – Nothing to see here.', 'dwb' ) }
			</p>
		);
	},
} );
