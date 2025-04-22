import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableCell.module.scss'

export const TableCell = forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td ref={ref} className={cn(styles.cell, className)} {...props} />
))
