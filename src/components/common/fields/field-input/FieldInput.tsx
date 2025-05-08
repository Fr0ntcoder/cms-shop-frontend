import cn from 'clsx'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@/components/ui'

import { TextError } from '../text-error'

import styles from './FieldInput.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	label?: string
	required?: boolean
	className?: string
}

export function FieldInput({
	name,
	label,
	required,
	className,
	...props
}: Props) {
	const {
		register,
		formState: { errors }
	} = useFormContext()
	const errorText = errors[name]?.message as string

	return (
		<div className={cn(styles.root, className)}>
			{label && (
				<div className={styles.label}>
					{label} {required && <span>*</span>}
				</div>
			)}
			<div className={styles.relative}>
				<Input {...props} {...register(name)} />
			</div>
			{errorText && <TextError text={errorText} />}
		</div>
	)
}
