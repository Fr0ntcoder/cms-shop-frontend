import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './SelectSeparator.module.scss'

export const SelectSeparator = forwardRef<
	ComponentRef<typeof SelectPrimitive.Separator>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn(styles.separator, className)}
		{...props}
	/>
))
