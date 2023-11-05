import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'nuro ─ developer';
	const description = "Hey 👋 I'm Vik, a developer";

	return {
		title,
		description,
		canonical: `https://airbauer.ch/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'airbauer',
			url: `https://airbauer.ch/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://airbauer.ch/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
