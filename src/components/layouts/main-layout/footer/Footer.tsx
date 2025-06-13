import cn from 'clsx'

import styles from './Footer.module.scss'

interface Props {
	className?: string
}

export function Footer({ className }: Props) {
	return <div className={cn(styles.root, className)}>Footer</div>
}
