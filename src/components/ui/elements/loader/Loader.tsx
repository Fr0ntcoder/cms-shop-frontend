import { Loader2 } from 'lucide-react'

import styles from './Loader.module.scss'

export function Loader() {
	return (
		<div className={styles.root}>
			<Loader2 size={100} className={styles.icon} />
		</div>
	)
}
