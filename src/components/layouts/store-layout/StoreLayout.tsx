import cn from 'clsx'
import { PropsWithChildren } from 'react'

import { Header } from './header'
import { Sidebar } from './sidebar'

import styles from './StoreLayout.module.scss'

interface Props {
	className?: string
}

export function StoreLayout({ children }: PropsWithChildren) {
	return (
		<div className={cn(styles.root)}>
			<Sidebar />
			<div className={styles.container}>
				<Header />
				<main className={styles.content}>{children}</main>
			</div>
		</div>
	)
}
