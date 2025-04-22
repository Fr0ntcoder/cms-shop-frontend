import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import cn from 'clsx'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import styles from './AlertDialogDescription.module.scss'

interface Props {
	className?: string
}

export const AlertDialogDescription = forwardRef<
	ComponentRef<typeof AlertDialogPrimitive.Description>,
	ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cn(styles.description, className)}
		{...props}
	/>
))
