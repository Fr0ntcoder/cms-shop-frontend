'use client'

import cn from 'clsx'
import { TextareaHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Textarea } from '@/components/ui/common'

import { TextError } from '../text-error'

import styles from './FieldTextarea.module.scss'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export function FieldTextarea({
	name,
	label,
	required,
	className,
	...props
}: Props) {
	const {
		register,
		formState: { errors },
		watch,
		setValue
	} = useFormContext()
	const value = watch(name)
	const errorText = errors[name]?.message as string

	const onClear = () => {
		setValue(name, '', { shouldValidate: true })
	}

	return (
		<div className={cn(styles.textarea, className)}>
			{label && (
				<span className={styles.label}>
					{label}
					{required && <span className={styles.required}>*</span>}
				</span>
			)}
			<Textarea {...props} {...register(name)} className={styles.block} />
			{errorText && <TextError text={errorText} />}
		</div>
	)
}
