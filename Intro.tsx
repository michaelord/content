import {CtaGroup} from 'components/content';
import {Heading, RichText} from 'components/editable';
import {Container} from 'components/layout';
import {getModifiers} from 'components/libs';
import {Size} from 'components/types';
import React, {memo} from 'react';
import {ContentProps} from './ContentBlock';
import './Intro.scss';

import * as Types from 'components/types';

type Props = ContentProps & {
	width?: Size;
};

export const Intro = memo((props: Props) => {
	const base: string = 'intro-block';

	const {title, content, titlePriority = 2, href, children, cta, width} = props;

	const atts = {
		className: getModifiers(base, {}),
	};

	return (
		<div {...atts}>
			<Container width={width}>
				<div className={`${base}__main`}>
					<div className={`${base}__title`}>
						<Heading title={title} href={href} priority={titlePriority} />
						<CtaGroup items={cta} />
					</div>
					<div className={`${base}__content`}>
						{content ? <RichText content={content} className={`${base}__body`} /> : children}
					</div>
				</div>
			</Container>
		</div>
	);
});
