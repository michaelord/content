import {Link, LinkItem} from 'components/editable';
import {getModifiers} from 'components/libs';
import * as Types from 'components/types';
import React, {memo} from 'react';
import './CtaGroup.scss';

export type LinkGroup = LinkItem | Array<LinkItem>;

type Props = {
	items?: LinkGroup;
	className?: string;
	align?: Types.Align;
};

export const CtaGroup = memo((props: Props) => {
	const base: string = 'cta-group';

	const {items, className, align} = props;

	if (!items) {
		return null;
	}

	const atts = {
		className:
			getModifiers(base, {
				align: align,
			}) + `${className ? ` ${className}` : ``}`,
	};

	return (
		<div {...atts}>
			{Array.isArray(items) ? (
				<div className={`${base}__inner`}>
					{items.map((item, index) => (
						<Link {...item} key={`link-${index}`} />
					))}
				</div>
			) : (
				<Link {...items} />
			)}
		</div>
	);
});
