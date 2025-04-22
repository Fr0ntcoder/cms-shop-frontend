import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './AlertDialogContent.module.scss'

export const AlertDialogContent = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.AlertDialogPortal>
		<AlertDialogPrimitive.AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={cn(styles.content, className)}
			{...props}
		/>
	</AlertDialogPrimitive.AlertDialogPortal>
))
