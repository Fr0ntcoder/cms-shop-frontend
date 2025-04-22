import * as SelectPrimitive from '@radix-ui/react-select'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './SelectContent.module.scss'

export const SelectContent = forwardRef<
	ComponentRef<typeof SelectPrimitive.Content>,
	ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				styles.content,
				position === 'popper' && styles.content_popper,
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.SelectScrollUpButton />
			<SelectPrimitive.Viewport
				className={cn(
					styles.content__viewport,
					position === 'popper' && styles.content__viewport_popper
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectPrimitive.SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))
