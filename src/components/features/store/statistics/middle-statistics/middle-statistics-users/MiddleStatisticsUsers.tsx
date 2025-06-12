import cn from 'clsx'
import Image from 'next/image'

import { Title } from '@/components/ui/common'
import { ErrorLoadData } from '@/components/ui/elements'

import { ILastUsers } from '@/shared/types'

import { formatPrice } from '@/utils/string/format-price'

import styles from './MiddleStatisticsUsers.module.scss'

interface Props {
	data: ILastUsers[]
	className?: string
}

export function MiddleStatisticsUsers({ data, className }: Props) {
	const items =
		data.length !== 0 ? (
			data.map(item => (
				<div className={styles.item} key={item.id}>
					<Image
						className={styles.item__img}
						src={item.picture}
						width={60}
						height={60}
						alt={item.name}
					/>
					<div className={styles.item__content}>
						<span className={styles.item__name}>{item.name}</span>
						<span className={styles.item__email}>{item.email}</span>
					</div>
					<div className={styles.item__price}>+{formatPrice(item.total)}</div>
				</div>
			))
		) : (
			<ErrorLoadData text='Нет покупателей...' />
		)
	return (
		<div className={cn(styles.root, className)}>
			<Title className={styles.title} size='md'>
				Покупатели
			</Title>
			<div className={styles.list}>{items}</div>
		</div>
	)
}
