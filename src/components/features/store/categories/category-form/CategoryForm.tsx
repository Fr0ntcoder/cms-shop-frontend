'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button, Dialog, Title } from '@/components/ui/common'
import { FieldInput, FieldTextarea } from '@/components/ui/elements'

import { useCreateCategory } from '@/hooks/categories/useCreateCategory'
import { useDeleteCategory } from '@/hooks/categories/useDeleteCategory'
import { useUpdateCategory } from '@/hooks/categories/useUpdateCategory'

import {
	ICategory,
	TCategoryFormData,
	categoryFormShemas
} from '@/shared/types'

import styles from './CategoryForm.module.scss'

interface Props {
	category?: ICategory
}

export function CategoryForm({ category }: Props) {
	const { createCategory, isLoadingCreate } = useCreateCategory()
	const { updateCategory, isLoadingUpdate } = useUpdateCategory()
	const { deleteCategory, isLoadingDelete } = useDeleteCategory()

	const [isOpen, setIsOpen] = useState(false)

	const title = category ? 'Изменить данные' : 'Создать категорию'
	const description = category
		? 'Изменить данные о категории'
		: 'Добавить новый категорию в магазин'
	const action = category ? 'Сохранить' : 'Создать'

	const form = useForm<TCategoryFormData>({
		resolver: zodResolver(categoryFormShemas),
		mode: 'onChange',
		values: {
			title: category?.title || '',
			description: category?.description || ''
		}
	})

	const onSubmit = (data: TCategoryFormData) => {
		if (category) {
			updateCategory(data)
		} else {
			createCategory(data)
		}
	}

	const handler = () => {
		deleteCategory()
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

				{category && (
					<>
						<Dialog
							isOpen={isOpen}
							onClose={() => setIsOpen(false)}
							onConfirm={handler}
							cancelText='Нет'
							confirmText='Да'
							className={styles.modal}
						>
							<Title size='sm'>Вы уверены,что хотите удалить товар?</Title>
						</Dialog>
						<Button variant='primary' onClick={() => setIsOpen(true)}>
							<Trash size={18} />
						</Button>
					</>
				)}
			</div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
					<div className={styles.header}>
						<FieldInput
							name='title'
							label='Название'
							placeholder='Название категории'
							required
							className={styles.form__input}
						/>
					</div>
					<div className={styles.bottom}>
						<FieldTextarea
							name='description'
							label='Описание'
							required
							placeholder='Описание категории'
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
