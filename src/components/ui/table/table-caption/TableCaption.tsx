import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TableCaption.module.scss'

export const TableCaption = forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption ref={ref} className={cn(styles.caption, className)} {...props} />
))
