import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, CheckboxControl, SelectControl, ColorPicker } from '@wordpress/components';

export default function ReadTimeEdit( { attributes, setAttributes } ) {
	const {
    	className,
    	text,
    	pluralText,
    	position,
	} = attributes;

    const {
		post,
	} = useSelect(
		( select ) => {
			const { getEntityRecord } = select( coreStore );
            const currentPostId = select('core/editor').getCurrentPostId();
	
            return {
                post: getEntityRecord('postType', 'post', currentPostId )
	        }						
		}
	);

// setup reading timer.
    const postWordCount = count( post.content.raw, 'words', {} );
    
    let readingTime = Math.ceil( postWordCount / 200 );
    let timer = pluralText;
    
    if (1 == readingTime) {
        timer = text;
    }

// position

    readingTime = readingTime + ' ' + timer;
// END setup reading timer.


	const getReadingTime = () => {
		return 'readig time holder';
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={ __( 'Read Table', 'dwb' ) }
				icon="editor-table"
			>
			    <PanelRow>
					<SelectControl
						label="What's your favorite animal?"
						value={attributes.favoriteAnimal}
						options={[
							{label: "Dogs", value: 'dogs'},
							{label: "Cats", value: 'cats'},
							{label: "Something else", value: 'weird_one'},
						]}
						onChange={(newval) => setAttributes({ favoriteAnimal: newval })}
					/>
                </PanelRow>
			</PanelBody>
		</InspectorControls>    	
    );    

	return (
    	<div>
        	{ inspectorControls }
            <div className={ className }>
                Read Time: getReadingTime()
            </div>
        </div>
	);
}
				