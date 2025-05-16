import cn from 'clsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './MiddleStatisticsSkeleton.module.scss'

interface Props {
	className?: string
}

export function MiddleStatisticsSkeleton({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<Skeleton className={styles.left} count={1} />
			<Skeleton className={styles.right} count={1} />
		</div>
	)
}
