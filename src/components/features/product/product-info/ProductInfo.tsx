import cn from 'clsx'

import styles from './ProductInfo.module.scss'

interface Props {
	className?: string
}

export function ProductInfo({ className }: Props) {
	return <div className={cn(styles.root, className)}>ProductInfo</div>
}
