import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {
	RichText,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { select, withSelect } from '@wordpress/data';

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
		
		const getPosts = withSelect( select, ownProps ) => {
    		const posts = select( 'core' ).getEntityRecords( 'postType', 'post', { 'per_page': 2 } );
    		let media = {};
    		
    		posts.forEach( post => {
    			media[ post.id ] = select('core').getMedia( post.featured_media );
    		});
    		
    		return {
    			posts,
    			media
    		};
		};
/*
    
   import { withSelect } from '@wordpress/data';
 
function PriceDisplay( { price, currency } ) {
    return new Intl.NumberFormat( 'en-US', {
        style: 'currency',
        currency,
    } ).format( price );
}
 
const HammerPriceDisplay = withSelect( ( select, ownProps ) => {
    const { getPrice } = select( 'my-shop' );
    const { currency } = ownProps;
 
    return {
        price: getPrice( 'hammer', currency ),
    };
} )( PriceDisplay ); 


// Rendered in the application:
//
//  <HammerPriceDisplay currency="USD" />
*/

/*

	 props => {

		const { media, posts } = props;

		if ( ! posts || ! media ) {
			return (
				<p>{ __( 'Loading...', 'wholesomecode' ) }</p>
			);
		}

		return (
			<ul>
			{ posts.map(
				( post ) => {
					if ( media[ post.id ] ) {
						const imageThumbnailSrc = media[ post.id ].media_details.sizes.thumbnail.source_url;
					return (
						<li>
							<img src={ imageThumbnailSrc } />
							<a href={ post.link }>
								{ post.title.raw }
							</a>
						</li>
					)
					}
				}
			) }
			</ul>
		);
*/
	} ),

	save() {
		return (
			<p>
				{ __( 'Wholesome Plugin – Nothing to see here.', 'wholesomecode' ) }
			</p>
		);
	},

		

/*
		const onChangeText = ( value ) => {
			setAttributes( { text: value } );
		};

		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};

		const removeMedia = () => {
			setAttributes( {
				mediaID: 0,
				mediaURL: '',
			} );
		};

		const blockStyle = {
			background:
				mediaURL != 0
					? 'url("' + mediaURL + '") no-repeat center center fixed'
					: 'none',
		};
*/

		return (
            <div className="emdotbike-home-grid grid-wrapper">
            
                if has posts
                    <div className="flex-grid front-page-grid">
                        <div className="flex-col"> 
                            while : post   
                            
                            col check based on post num
                       
                                <div className="flex-item post-POSTID">
                                    thumbnail
                                    <div className="title"><h3>title</h3></div>
                                    <div className="excerpt">excerpt</div>
                                </div>          
                            endwhile
                        </div>
                    </div>
                    if more posts
                        <div className="more-articles"><a href="#">More Articles</a></div>        
                    endif
                endif
            
            </div>
		);
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
