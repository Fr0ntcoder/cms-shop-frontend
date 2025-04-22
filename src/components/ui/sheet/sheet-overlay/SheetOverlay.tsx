import * as SheetPrimitive from '@radix-ui/react-dialog'
import cn from 'clsx'
import * as React from 'react'

import styles from './SheetOverlay.module.scss'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
	React.ComponentRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(styles.overlay, className)}
		{...props}
		ref={ref}
	/>
))

export { Sheet, SheetClose, SheetOverlay, SheetPortal, SheetTrigger }
