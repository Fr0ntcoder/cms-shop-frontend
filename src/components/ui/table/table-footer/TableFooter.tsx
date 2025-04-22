import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableFooter.module.scss'

export const TableFooter = forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot ref={ref} className={cn(styles.footer, className)} {...props} />
))
