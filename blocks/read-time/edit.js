import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

export default function ReadTimeEdit( { attributes, setAttributes } ) {
	const {
    	className,
    	text,
    	pluralText,
    	timePosition,
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
	const getReadingTime = () => {
        const postWordCount = count( post.content.raw, 'words', {} );
        
        let readingTime = Math.ceil( postWordCount / 200 );
        let timer = pluralText;
        
        if (1 == readingTime) {
            timer = text;
        }
    
        // position
    
        readingTime = readingTime + ' ' + timer;
        
        return readingTime;
	};

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={ __( 'Read Table', 'dwb' ) }
				icon="editor-table"
			>
			    <PanelRow>
					<SelectControl
						label="Time Position"
						value={attributes.timePosition}
						options={[
							{label: "Before", value: 'before'},
							{label: "After", value: 'after'},
						]}
						onChange={(newval) => setAttributes({ timePosition: newval })}
					/>
                </PanelRow>
                <PanelRow>
                    <InputControl
                        label="Text"
                        labelPosition="side"
                        value={ attributes.text }
                        onChange={(newval) => setAttributes({ text: newval })}
                    />                
                </PanelRow>
                <PanelRow>
                    <InputControl
                        label="Plural Text"
                        labelPosition="side"
                        value={ attributes.pluralText }
                        onChange={(newval) => setAttributes({ pluralText: newval })}
                    />                
                </PanelRow>
                <PanelRow>
                    <InputControl
                        label="Before Text?"
                        labelPosition="side"
                        value={ attributes.pluralText }
                        onChange={(newval) => setAttributes({ pluralText: newval })}
                    />                
                </PanelRow>
			</PanelBody>
		</InspectorControls>    	
    );    

	return (
    	<div>
        	{ inspectorControls }
            <div className={ className }>
                Read Time: { getReadingTime() }
            </div>
        </div>
	);
}
				