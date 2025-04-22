import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DropdownMenuItem.module.scss'

export const DropdownMenuItem = forwardRef<
	ComponentRef<typeof DropdownMenuPrimitive.Item>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cn(styles.item, inset && styles.item_inset, className)}
		{...props}
	/>
))
