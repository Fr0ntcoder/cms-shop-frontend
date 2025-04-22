import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableHeader.module.scss'

export const TableHeader = forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead ref={ref} className={cn(styles.header, className)} {...props} />
))
