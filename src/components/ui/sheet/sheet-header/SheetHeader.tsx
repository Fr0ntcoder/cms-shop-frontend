import cn from 'clsx'

import styles from './SheetHeader.module.scss'

export const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.header, className)} {...props} />
)
