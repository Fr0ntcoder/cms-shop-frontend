import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DialogTitle.module.scss'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

export const DialogTitle = forwardRef<
	ComponentRef<typeof DialogPrimitive.Title>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn(styles.title, className)}
		{...props}
	/>
))

export { Dialog, DialogClose, DialogPortal, DialogTrigger }
