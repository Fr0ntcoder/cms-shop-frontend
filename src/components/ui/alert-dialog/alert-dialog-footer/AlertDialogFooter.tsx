import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './AlertDialogFooter.module.scss'

export const AlertDialogFooter = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.footer, className)} {...props} />
)
