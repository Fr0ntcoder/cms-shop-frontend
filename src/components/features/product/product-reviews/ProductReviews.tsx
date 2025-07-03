import cn from 'clsx'

import styles from './ProductReviews.module.scss'

interface Props {
	className?: string
}

export function ProductReviews({ className }: Props) {
	return <div className={cn(styles.root, className)}>ProductReviews</div>
}
