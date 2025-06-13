import { PropsWithChildren } from 'react'

import { Footer } from '@/components/layouts/main-layout/footer'

import { Header } from './header'

import styles from './MainLayout.module.scss'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={styles.root}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
