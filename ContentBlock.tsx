import * as React from 'react';

import './ContentBlock.scss';

import {Heading, RichText, Tag} from 'components/editable';
import {Align, HeadingSize} from 'components/types';

import {getModifiers} from 'components/libs';

type ContentBlockProps = {
	children?: React.ReactNode;
	title?: string;
	titleSize?: HeadingSize;
	content?: string;
	overline?: string;
	align?: Align;
	href?: string;
};

export const ContentBlock = (props: ContentBlockProps) => {
	const base: string = 'content-block';

	const {title, content, overline, align = 'left', children, href, titleSize = 3} = props;

	const atts = {
		className: getModifiers(base, {
			align: align,
		}),
	};

	return (
		<div {...atts}>
			<Tag label={overline} />
			<Heading title={title} href={href} size={titleSize} />
			{content ? <RichText content={content} className={`${base}__body`} /> : children}
		</div>
	);
};
