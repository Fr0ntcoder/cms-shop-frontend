import cn from 'clsx'

import styles from './DialogFooter.module.scss'

interface Props {
	className?: string
}

export const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.footer, className)} {...props} />
)
