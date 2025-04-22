import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'clsx'
import { ChevronRight } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DropdownMenuSubTrigger.module.scss'

export const DropdownMenuSubTrigger = forwardRef<
	ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		className={cn(styles.trigger, inset && styles.trigger_inset, className)}
		{...props}
	>
		{children}
		<ChevronRight />
	</DropdownMenuPrimitive.SubTrigger>
))
