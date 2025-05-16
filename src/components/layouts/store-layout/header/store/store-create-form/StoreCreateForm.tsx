'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { FieldInput } from '@/components/common/fields'
import { Button, Title } from '@/components/ui'

import { useCreateStore } from '@/hooks/stores/useCreateStore'

import { storeCreateModalShemas } from '@/shared/schemes/store/store-create-modal.schemas'
import { IStoreCreate } from '@/shared/types'

import styles from './StoreCreateForm.module.scss'

interface Props {
	onClose: () => void
	className?: string
}

export function StoreCreateForm({ onClose, className }: Props) {
	const { createStore } = useCreateStore()
	const form = useForm<IStoreCreate>({
		resolver: zodResolver(storeCreateModalShemas),
		mode: 'onChange',
		defaultValues: {
			title: ''
		}
	})

	const onSubmit: SubmitHandler<IStoreCreate> = data => {
		createStore(data)
		onClose()
	}
	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={styles.root}>
				<Title className={styles.title}>Название магазина</Title>
				<FieldInput
					name='title'
					placeholder='Введите название магазина...'
					required
					className={styles.input}
				/>
				<Button type='submit' variant='default'>
					Добавить
				</Button>
			</form>
		</FormProvider>
	)
}
