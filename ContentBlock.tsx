import {CtaGroup} from 'components/content';
import {Heading, HeadingProps, LinkItem, RichText, Tag} from 'components/editable';
import {getModifiers} from 'components/libs';

import React, {memo} from 'react';
import './ContentBlock.scss';

import * as Types from 'components/types';

type LinkGroup = LinkItem | Array<LinkItem>;

export type ContentProps = {
	children?: Types.Children;
	title?: Types.Text | HeadingProps;
	titlePriority?: Types.Heading;
	content?: string | any;
	href?: Types.Url;
	cta?: LinkGroup;
};

export type ContentBlockProps = ContentProps & {
	overline?: Types.Text;
	align?: Types.Align;
};

export const ContentBlock = memo((props: ContentBlockProps) => {
	const base: string = 'content-block';

	const {title, content, overline, align = '', children, href, titlePriority = 3, cta} = props;

	const atts = {
		className: getModifiers(base, {
			align: align,
		}),
	};

	return (
		<div {...atts}>
			<Tag label={overline} />
			{title && typeof title === 'object' ? (
				<Heading {...title} />
			) : (
				<Heading title={title} href={href} priority={titlePriority} />
			)}
			{content ? (
				typeof content === 'function' ? (
					content()
				) : (
					<RichText content={content} className={`${base}__body`} />
				)
			) : (
				children
			)}
			<CtaGroup items={cta} className={`${base}__links`} />
		</div>
	);
});
