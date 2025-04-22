import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './AlertDialogAction.module.scss'

export const AlertDialogAction = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Action>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={cn(styles.root, className)}
		{...props}
	/>
))
