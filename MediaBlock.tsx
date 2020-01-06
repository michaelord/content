import {Media, MediaProps} from 'components/editable';
import {getModifiers} from 'components/libs';

import React, {memo} from 'react';
import './MediaBlock.scss';

import * as Types from 'components/types';

type Align = 'default' | 'middle';

type MediaBlockProps = {
	children?: Types.Children;
	media?: MediaProps;
	size?: Types.Size;
	align?: Align;
	isReverse?: boolean;
};

export const MediaBlock = memo((props: MediaBlockProps) => {
	const base: string = 'media-block';

	const {media, size = 'default', isReverse, children, align = 'default'} = props;

	const atts = {
		className: getModifiers(base, {
			size,
			align: `align-${align}`,
			reverse: isReverse,
		}),
	};

	return (
		<div {...atts}>
			<div className={`${base}__main`}>
				{media && media.src && (
					<div className={`${base}__media`}>
						<Media {...media} />
					</div>
				)}
				<div className={`${base}__content`}>{children}</div>
			</div>
		</div>
	);
});
