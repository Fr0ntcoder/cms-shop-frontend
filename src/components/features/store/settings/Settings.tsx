'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'clsx'
import { TrashIcon } from 'lucide-react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

import { FieldInput, FieldTextarea } from '@/components/common/fields'
import { Button, Dialog, Title } from '@/components/ui'

import { useDeleteStore } from '@/hooks/stores/useDeleteStore'
import { useStore } from '@/hooks/stores/useStore'
import { useUpdateStore } from '@/hooks/stores/useUpdateStore'
import { useToggle } from '@/hooks/useToggle'

import { TStoreUpdateData, storeUpdateShemas } from '@/shared/types'

import styles from './Settings.module.scss'

interface Props {
	className?: string
}

export function Settings({ className }: Props) {
	const { isOpen, onClose, onOpen } = useToggle()
	const { data } = useStore()
	const { updateStore } = useUpdateStore()
	const { deleteStore } = useDeleteStore()

	const form = useForm<TStoreUpdateData>({
		resolver: zodResolver(storeUpdateShemas),
		mode: 'onChange',
		values: {
			title: data?.title || '',
			description: data?.description || ''
		}
	})

	const onSubmit: SubmitHandler<TStoreUpdateData> = data => {
		updateStore(data)
	}

	const onDelete = () => {
		deleteStore()
		onClose()
	}

	return (
		<div className={cn(styles.root, className)}>
			<Title className={styles.title} size='lg'>
				Настройки
			</Title>
			<div className={styles.description}>Управление настройками магазина</div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
					<FieldInput name='title' label='Название' />
					<FieldTextarea name='description' label='Описание' />
					<div className={styles.form__footer}>
						<Button type='submit' variant='primary'>
							Сохранить
						</Button>
						<Button
							type='button'
							variant='default'
							className={styles.form__remove}
							onClick={onOpen}
						>
							<TrashIcon size={15} />
						</Button>
					</div>
				</form>
			</FormProvider>
			<Dialog
				isOpen={isOpen}
				onClose={onClose}
				onConfirm={onDelete}
				cancelText='Нет'
				confirmText='Да'
				className={styles.dialog}
			>
				<Title>Вы уверены,что хотите удалить магазин?</Title>
			</Dialog>
		</div>
	)
}
