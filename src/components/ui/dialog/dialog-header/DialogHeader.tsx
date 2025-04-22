import cn from 'clsx'

import styles from './DialogHeader.module.scss'

export const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.header, className)} {...props} />
)
