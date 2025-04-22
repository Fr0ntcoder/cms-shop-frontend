import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ChevronUp } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './SelectScrollUpButton.module.scss'

export const SelectScrollUpButton = forwardRef<
	ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		ref={ref}
		className={cn(
			styles.button,
			'flex cursor-default items-center justify-center py-1',
			className
		)}
		{...props}
	>
		<ChevronUp />
	</SelectPrimitive.ScrollUpButton>
))
