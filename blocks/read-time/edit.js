import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

export default function ReadTimeEdit( { attributes, setAttributes } ) {
	const {
    	className,
	} = attributes;

    const {
		post,
	} = useSelect(
		( select ) => {
			const { getEntityRecord } = select( coreStore );
            const currentPostId = select('core/editor').getCurrentPostId();
	
            return {
                post: getEntityRecord('postType', 'post', 2020 )
	        }						
		}
	);

    const postWordCount = count( post.content.raw, 'words', {} );
    
    let readingTime = Math.ceil( postWordCount / 200 );
    let timer = ' minutes';
    
    if (1 == readingTime) {
        timer = ' minute';
    }

    readingTime = readingTime + timer;

	return (
		<div className={ className }>
            Read Time: { readingTime }
        </div>
	);
}
