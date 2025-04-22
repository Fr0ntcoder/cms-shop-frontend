import * as DialogPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import { ComponentRef, forwardRef } from 'react'

import styles from './DialogOverlay.module.scss'

export const DialogOverlay = forwardRef<
	ComponentRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(styles.overlay, className)}
		{...props}
	/>
))
