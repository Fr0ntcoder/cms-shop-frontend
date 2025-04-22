import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './CardDescription.module.scss'

export const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn(styles.description, className)} {...props} />
))
