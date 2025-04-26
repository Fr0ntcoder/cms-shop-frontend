import cn from 'clsx'

import styles from './Auth.module.scss'

interface Props {
	className?: string
}

export function Auth({ className }: Props) {
	return <div className={cn(styles.root, className)}>Auth</div>
}
