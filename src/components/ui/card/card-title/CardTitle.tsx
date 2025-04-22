import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './CardTitle.module.scss'

export const CardTitle = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3 ref={ref} className={cn(styles.title, className)} {...props} />
))
