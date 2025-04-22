import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DropdownMenuSeparator.module.scss'

export const DropdownMenuSeparator = forwardRef<
	ComponentRef<typeof DropdownMenuPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cn(styles.separator, className)}
		{...props}
	/>
))
