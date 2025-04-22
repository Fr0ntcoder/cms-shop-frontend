import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './AlexDialogOverlay.module.scss'

export const AlexDialogOverlay = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Overlay>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		className={cn(styles.overlay, className)}
		{...props}
		ref={ref}
	/>
))
