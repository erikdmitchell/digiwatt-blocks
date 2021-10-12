import { __ } from '@wordpress/i18n';
import { count } from '@wordpress/wordcount';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';

export default function ReadTimeEdit( { attributes, setAttributes } ) {
	const { className, readTimeText, timePosition } = attributes;

    const postID = useSelect(select =>
        select("core/editor").getCurrentPostId()
    );

	const inspectorControls = (
		<InspectorControls>
			<PanelBody>
				<PanelRow>
					<SelectControl
						label="Time Position"
						labelPosition="side"
						value={ attributes.timePosition }
						options={ [
							{ label: 'Before', value: 'before' },
							{ label: 'After', value: 'after' },
						] }
						onChange={ ( newval ) =>
							setAttributes( { timePosition: newval } )
						}
					/>
				</PanelRow>
				<PanelRow>
					<InputControl
						label="Text"
						labelPosition="side"
						value={ attributes.readTimeText }
						onChange={ ( newval ) =>
							setAttributes( { readTimeText: newval } )
						}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<div>
			{ inspectorControls }
			<div className={ className }>{ postID }</div>
		</div>
	);
}
