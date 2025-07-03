import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

import '../styles/globals.scss'

import { Providers } from './providers'

const nunito = Roboto({
	subsets: ['cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={nunito.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
