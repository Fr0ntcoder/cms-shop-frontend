import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DropdownMenuSubContent.module.scss'

export const DropdownMenuSubContent = forwardRef<
	ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		className={cn(styles.content, className)}
		{...props}
	/>
))
