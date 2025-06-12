'use client'

import cn from 'clsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Modal } from '@/components/ui/common'

import { useToggle } from '@/hooks/useToggle'

import { IStore } from '@/shared/types'

import { StoreCreateForm } from '../store-create-form'
import { StorePopover } from '../store-popover'

import styles from './StoreSwitch.module.scss'

interface Props {
	stores?: IStore[]
	isLoading: boolean
	className?: string
}

export function StoreSwitch({ stores, className, isLoading }: Props) {
	const { isOpen, onOpen, onClose } = useToggle()

	const loading = isLoading || !stores
	const empty = !loading && stores.length === 0

	if (loading) {
		return <Skeleton className={className} count={1} height={40} width={200} />
	}

	if (empty) {
		return <div className={cn(styles.empty, className)}>Ничего не найдено</div>
	}

	return (
		<div className={cn(styles.root, className)}>
			<StorePopover stores={stores} onClick={onOpen} />
			<Modal isOpen={isOpen} onClose={onClose}>
				<StoreCreateForm onClose={onClose} />
			</Modal>
		</div>
	)
}
