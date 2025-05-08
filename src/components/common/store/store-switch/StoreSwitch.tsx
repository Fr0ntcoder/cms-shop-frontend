'use client'

import cn from 'clsx'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { StoreCreateForm } from '@/components/common/store/store-create-form'
import { Modal } from '@/components/ui'

import { useToogle } from '@/hooks/useToogle'

import { IStore } from '@/shared/types'

import { StorePopover } from '../store-popover'

import styles from './StoreSwitch.module.scss'

interface Props {
	stores?: IStore[]
	isLoading: boolean
	className?: string
}

export function StoreSwitch({ stores, className, isLoading }: Props) {
	const { isOpen, onOpen, onClose } = useToogle()

	if (isLoading || !stores) {
		return <Skeleton count={1} height={40} width={200} />
	}

	if (stores.length === 0) {
		return <div className={styles.empty}>Ничего не найдено</div>
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
