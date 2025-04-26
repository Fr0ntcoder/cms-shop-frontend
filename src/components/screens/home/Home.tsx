import cn from 'clsx'

import styles from './Home.module.scss'

interface Props {
	className?: string
}

export function Home({ className }: Props) {
	return <div className={cn(styles.root, className)}>Home</div>
}
