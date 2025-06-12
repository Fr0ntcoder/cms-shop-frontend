'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Button, Dialog, Select, Title } from '@/components/ui/common'
import { FieldInput, FieldTextarea } from '@/components/ui/elements'
import { FieldUpload } from '@/components/ui/elements/fields/field-upload'

import { useGetCategories } from '@/hooks/categories/useGetCategories'
import { useGetColors } from '@/hooks/colors/useGetColors'
import { useCreateProduct } from '@/hooks/products/useCreateProduct'
import { useDeleteProduct } from '@/hooks/products/useDeleteProduct'
import { useUpdateProduct } from '@/hooks/products/useUpdateProduct'

import { IProduct, TProductFormData, productFormShemas } from '@/shared/types'

import styles from './ProductForm.module.scss'

interface Props {
	product?: IProduct
}

export function ProductForm({ product }: Props) {
	const { createProduct, isLoadingCreate } = useCreateProduct()
	const { updateProduct, isLoadingUpdate } = useUpdateProduct()
	const { deleteProduct, isLoadingDelete } = useDeleteProduct()
	const { categories } = useGetCategories()
	const { colors } = useGetColors()
	const [isOpen, setIsOpen] = useState(false)

	const formatedCategories = categories
		? categories?.map(item => ({
				label: item.title,
				value: item.id
			}))
		: []

	const formatedColors = colors
		? colors?.map(item => ({
				label: item.name,
				value: item.id
			}))
		: []

	const title = product ? 'Изменить данные' : 'Создать товар'
	const description = product
		? 'Изменить данные о товаре'
		: 'Добавить новый товар в магазин'
	const action = product ? 'Сохранить' : 'Создать'

	const form = useForm<TProductFormData>({
		resolver: zodResolver(productFormShemas),
		mode: 'onChange',
		values: {
			title: product?.title || '',
			description: product?.description || '',
			images: product?.images || [],
			price: Number(product?.price) || 0,
			categoryId: product?.category.id || '',
			colorId: product?.color.id || ''
		}
	})

	const onSubmit = (data: TProductFormData) => {
		console.log(data)
		data.price = Number(data.price)

		if (product) {
			updateProduct(data)
		} else {
			createProduct(data)
		}
	}

	const handler = () => {
		deleteProduct()
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
				{product && (
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
					<div className={styles.uploads}>
						<Controller
							name='images'
							control={form.control}
							rules={{
								required: 'Обязательно'
							}}
							render={({ field }) => (
								<FieldUpload
									isDisabled={isLoadingCreate || isLoadingUpdate}
									onChange={field.onChange}
									value={field.value}
								/>
							)}
						/>
					</div>
					<div className={styles.top}>
						<FieldInput
							name='title'
							label='Название'
							placeholder='Название товара'
							required
							className={styles.form__input}
						/>
						<FieldInput
							type='number'
							name='price'
							label='Цена(руб.)'
							required
							className={styles.form__input}
						/>
						<Controller
							name='categoryId'
							control={form.control}
							render={({ field, fieldState }) => (
								<Select
									label='Категория'
									options={formatedCategories}
									value={field.value}
									onChange={field.onChange}
									error={fieldState.error?.message}
									placeholder='Выберите категорию'
								/>
							)}
						/>
					</div>
					<div className={styles.middle}>
						<Controller
							name='colorId'
							control={form.control}
							render={({ field, fieldState }) => (
								<Select
									label='Цвет'
									options={formatedColors}
									value={field.value}
									onChange={field.onChange}
									error={fieldState.error?.message}
									placeholder='Выберите цвет'
								/>
							)}
						/>
					</div>
					<div className={styles.bottom}>
						<FieldTextarea
							name='description'
							label='Описание'
							required
							placeholder='Описание товара'
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
