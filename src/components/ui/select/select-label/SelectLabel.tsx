import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './SelectLabel.module.scss'

export const SelectLabel = forwardRef<
	ComponentRef<typeof SelectPrimitive.Label>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn(styles.label, className)}
		{...props}
	/>
))
