import cn from 'clsx'

import styles from './Home.module.scss'

interface Props {
	className?: string
}

export function HomePage({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.block}></div>
		</div>
	)
}
