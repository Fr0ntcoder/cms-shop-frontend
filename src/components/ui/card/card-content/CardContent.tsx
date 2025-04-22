import cn from 'clsx'

import styles from './CardContent.module.scss'

interface Props {
	className?: string
}

export function CardContent({ className }: Props) {
	return <div className={cn(styles.root, className)}>CardContent</div>
}
