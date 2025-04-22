import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableHead.module.scss'

export const TableHead = forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th ref={ref} className={cn(styles.head, className)} {...props} />
))
