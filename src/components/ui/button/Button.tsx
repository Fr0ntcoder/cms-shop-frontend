'use client'

import cn from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import styles from './Button.module.scss'

type ButtonVariants = 'default' | 'outline' | 'ghost' | 'link'

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon'

export interface IButtonVariants
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant: ButtonVariants
	size?: ButtonSize
	asChild?: boolean
	loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, IButtonVariants>(
	(
		{
			className,
			variant = 'default',
			size = 'default',
			asChild = false,
			children,
			disabled,
			loading,
			...props
		},
		ref
	) => {
		return (
			<button
				disabled={disabled || loading}
				className={cn(
					styles.button,
					className,
					styles[`button__variant_${variant}`],
					styles[`button__size_${size}`]
				)}
				ref={ref}
				{...props}
			>
				{children}
			</button>
		)
	}
)
