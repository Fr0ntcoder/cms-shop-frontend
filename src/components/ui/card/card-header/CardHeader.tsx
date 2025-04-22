import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './CardHeader.module.scss'

export const CardHeader = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(styles.header, className)} {...props} />
))
