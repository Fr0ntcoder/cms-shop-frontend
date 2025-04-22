import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableRow.module.scss'

export const TableRow = forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr ref={ref} className={cn(styles.row, className)} {...props} />
))
