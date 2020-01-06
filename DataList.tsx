import {Heading, RichText} from 'components/editable';
import {getModifiers, Placeholder} from 'components/libs';
import React, {memo} from 'react';
import './DataList.scss';

import * as Types from 'components/types';

type Props = {};

export const DataList = memo((props: Props) => {
	const base: string = 'data-list';

	const items = [
		{
			title: 'Text Point 1',
			content: Placeholder.p(),
		},
		{
			title: 'Text Point 2',
			content: Placeholder.p(),
		},
		{
			title: 'Text Point 3',
			content: Placeholder.p(),
		},
		{
			title: 'Text Point 4',
			content: Placeholder.p(),
		},
		{
			title: 'Text Point 5',
			content: Placeholder.p(),
		},
		{
			title: 'Text Point 6',
			content: Placeholder.p(),
		},
	];

	const atts = {
		className: getModifiers(base, {}),
	};

	return (
		<div {...atts}>
			{items.map((item: any, index) => {
				const {title, content} = item;
				return (
					<div key={`t-${index}`} className={`${base}-item`}>
						<div className={`${base}-item__header`}>
							<span className={`${base}-item__icon`}>1</span>
							<Heading priority={3} title={title} />
						</div>
						<RichText content={content} />
					</div>
				);
			})}
		</div>
	);
});
