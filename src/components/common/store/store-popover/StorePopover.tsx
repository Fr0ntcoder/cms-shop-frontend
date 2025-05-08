import cn from 'clsx'

import { Popover } from '@/components/ui'

import { useToogle } from '@/hooks/useToogle'

import { IStore } from '@/shared/types'

import { StorePopoverContent } from './store-popover-content'
import { StorePopoverTrigger } from './store-popover-trigger'

import styles from './StorePopover.module.scss'

interface Props {
	stores?: IStore[]
	onClick: () => void
	className?: string
}

export function StorePopover({ onClick, stores, className }: Props) {
	const { isOpen, onOpen, onClose, onToogle } = useToogle()
	return (
		<div className={cn(styles.root, className)}>
			<Popover
				trigger={<StorePopoverTrigger />}
				isOpen={isOpen}
				onToogle={onToogle}
				onClose={onClose}
			>
				<StorePopoverContent stores={stores} onClick={onClick} />
			</Popover>
		</div>
	)
}
