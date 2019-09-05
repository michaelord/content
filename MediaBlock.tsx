import * as React from 'react';

import './MediaBlock.scss';

import {Media, MediaProps} from 'components/editable';
import {getModifiers} from 'components/libs';

type MediaBlockProps = {
	children?: React.ReactNode;
	media?: MediaProps;
	size?: string;
	align?: string;
	isReverse?: boolean;
};

export const MediaBlock = (props: MediaBlockProps) => {
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
				<div className={`${base}__media`}>{media && <Media {...media} />}</div>
				<div className={`${base}__content`}>{children}</div>
			</div>
		</div>
	);
};
