import cn from 'clsx'

import styles from './Store.module.scss'

interface Props {
	className?: string
}

export function Store({ className }: Props) {
	return <div className={cn(styles.root, className)}>Store</div>
}
