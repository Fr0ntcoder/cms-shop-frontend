import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableBody.module.scss'

export const TableBody = forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody ref={ref} className={cn(styles.body, className)} {...props} />
))
