'use client'

import cn from 'clsx'

import { Logo } from '@/components/ui/elements'

import { HeaderMenu } from './header-menu'
import { HeaderSearch } from './header-search'

import styles from './Header.module.scss'

interface Props {
	className?: string
}

export function Header({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<Logo size='sm' />
			<HeaderSearch />
			<HeaderMenu />
		</div>
	)
}
