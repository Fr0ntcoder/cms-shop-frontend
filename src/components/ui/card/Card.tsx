import cn from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

import styles from './Card.module.scss'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn(styles.card, className)} {...props} />
	)
)
