import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './MainStatisticsSkeleton.module.scss'

export function MainStatisticsSkeleton() {
	const items = Array(4)
		.fill(null)
		.map((_, i) => <Skeleton className={styles.item} count={1} key={i} />)
	return <div className={styles.root}>{items}</div>
}
