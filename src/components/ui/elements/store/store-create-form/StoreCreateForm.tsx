'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Title } from '@/components/ui/common'
import { FieldInput } from '@/components/ui/elements'

import { useCreateStore } from '@/hooks/stores/useCreateStore'

import { TStoreCreateData, storeCreateShemas } from '@/shared/types'

import styles from './StoreCreateForm.module.scss'

interface Props {
	onClose: () => void
	className?: string
}

export function StoreCreateForm({ onClose, className }: Props) {
	const { createStore } = useCreateStore()
	const form = useForm<TStoreCreateData>({
		resolver: zodResolver(storeCreateShemas),
		mode: 'onChange',
		defaultValues: {
			title: ''
		}
	})

	const onSubmit: SubmitHandler<TStoreCreateData> = data => {
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
				<Button type='submit' variant='primary'>
					Добавить
				</Button>
			</form>
		</FormProvider>
	)
}
