import cn from 'clsx'

import styles from './HeaderCart.module.scss'

interface Props {
	className?: string
}

export function HeaderCart({ className }: Props) {
	return <div className={cn(styles.root, className)}>HeaderCart</div>
}
