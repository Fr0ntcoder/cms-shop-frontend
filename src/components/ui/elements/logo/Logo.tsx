import cn from 'clsx'

import { LogoIcon } from '@/shared/icons'

import styles from './Logo.module.scss'

interface Props {
	size: 'sm' | 'md' | 'lg'
}

export function Logo({ size = 'sm' }: Props) {
	return (
		<div className={cn(styles.root, styles[`size--${size}`])}>
			<LogoIcon />
			CMS-SHOP
		</div>
	)
}
