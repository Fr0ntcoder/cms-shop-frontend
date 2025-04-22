import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './Table.module.scss'

export const Table = forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className={styles.table}>
		<table
			ref={ref}
			className={cn(styles.table__block, className)}
			{...props}
		/>
	</div>
))
