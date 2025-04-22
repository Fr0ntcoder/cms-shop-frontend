import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import cn from 'clsx'
import { Circle } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './DropdownMenuRadioItem.module.scss'

interface Props {
	className?: string
}

export const DropdownMenuRadioItem = forwardRef<
	ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
	ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		className={cn(styles.item, className)}
		{...props}
	>
		<span className={styles.item__indicator}>
			<DropdownMenuPrimitive.ItemIndicator>
				<Circle />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
))
