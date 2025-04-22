import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DialogDescription.module.scss'

export const DialogDescription = forwardRef<
	ComponentRef<typeof DialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn(styles.description, className)}
		{...props}
	/>
))
