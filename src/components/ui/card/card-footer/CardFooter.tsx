import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './CardFooter.module.scss'

export const CardFooter = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn(styles.footer, className)} {...props} />
))
