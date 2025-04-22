import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { Check } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './SelectItem.module.scss'

export const SelectItem = forwardRef<
	ComponentRef<typeof SelectPrimitive.Item>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(styles.item, className)}
		{...props}
	>
		<span className={styles.item__indicator}>
			<SelectPrimitive.ItemIndicator>
				<Check />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))
