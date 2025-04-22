import cn from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './AlertDialogHeader.module.scss'

interface Props {
	className?: string
}

export const AlertDialogHeader = ({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) => (
	<div className={cn(styles.header, className)} {...props} />
)
