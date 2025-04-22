import cn from 'clsx'

import styles from './SheetFooter.module.scss'

export const SheetFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.footer, className)} {...props} />
)
