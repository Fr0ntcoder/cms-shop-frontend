import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { X } from 'lucide-react'
import React, { ComponentPropsWithoutRef, ComponentRef } from 'react'

import { DialogOverlay } from '../dialog-overlay'

import styles from './DialogContent.module.scss'

export const DialogContent = React.forwardRef<
	ComponentRef<typeof DialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPrimitive.DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cn(styles.content, className)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className={styles.close}>
				<X />
				<span>Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPrimitive.DialogPortal>
))
