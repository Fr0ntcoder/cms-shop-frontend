import cn from 'clsx'

import { Logo } from '@/components/ui'

import { Menu } from './menu'

import styles from './Sidebar.module.scss'

interface Props {
	className?: string
}

export function Sidebar({ className }: Props) {
	return (
		<aside className={cn(styles.aside, className)}>
			<div className={styles.aside__top}>
				<Logo size='sm' />
			</div>
			<div className={styles.aside__navigation}>
				<Menu />
			</div>
		</aside>
	)
}
