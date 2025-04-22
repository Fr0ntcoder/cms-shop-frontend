import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './AlertDialogTitle.module.scss'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

export const AlertDialogTitle = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cn(styles.title, className)}
		{...props}
	/>
))

export { AlertDialog, AlertDialogPortal, AlertDialogTrigger }
