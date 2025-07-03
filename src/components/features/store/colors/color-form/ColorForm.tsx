'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Dialog, Title } from '@/components/ui/common'
import { FieldInput } from '@/components/ui/elements'

import { useCreateColor } from '@/hooks/colors/useCreateColor'
import { useDeleteColor } from '@/hooks/colors/useDeleteColor'
import { useUpdateColor } from '@/hooks/colors/useUpdateColor'

import { IColor, TColorFormData, colorFormShemas } from '@/shared/types'

import styles from './ColorForm.module.scss'

interface Props {
	color?: IColor
}

export function ColorForm({ color }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const { createColor, isLoadingCreate } = useCreateColor()
	const { updateColor, isLoadingUpdate } = useUpdateColor()
	const { deleteColor, isLoadingDelete } = useDeleteColor()

	const title = color ? 'Изменить данные' : 'Добавить цвет'
	const description = color
		? 'Изменить данные о цвете'
		: 'Добавить новый цвет в магазин'
	const action = color ? 'Сохранить' : 'Создать'

	const form = useForm<TColorFormData>({
		resolver: zodResolver(colorFormShemas),
		mode: 'onChange',
		values: {
			name: color?.name || '',
			value: color?.value || ''
		}
	})

	const onSubmit = (data: TColorFormData) => {
		if (color) {
			updateColor(data)
		} else {
			createColor(data)
		}
	}

	const handler = () => {
		deleteColor()
	}

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<div className={styles.header__block}>
					<Title className={styles.title} size='lg'>
						{title}
					</Title>
					<p className={styles.description}>{description}</p>
				</div>
				{color && (
					<>
						<Dialog
							isOpen={isOpen}
							onClose={() => setIsOpen(false)}
							onConfirm={handler}
							cancelText='Нет'
							confirmText='Да'
							className={styles.modal}
						>
							<Title size='sm'>Вы уверены,что хотите удалить цвет?</Title>
						</Dialog>
						<Button variant='primary' onClick={() => setIsOpen(true)}>
							<Trash size={18} />
						</Button>
					</>
				)}
			</div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.wrapper}>
						<FieldInput
							name='name'
							label='Название цвета'
							placeholder='Название цвета'
							required
							className={styles.form__input}
						/>
						<FieldInput
							name='value'
							label='Значение цвета'
							required
							className={styles.form__input}
						/>
					</div>
					<Button type='submit' variant='primary' className={styles.btn}>
						{action}
					</Button>
				</form>
			</FormProvider>
		</div>
	)
}
