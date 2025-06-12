'use client'

import cn from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Button, Title } from '@/components/ui/common'
import { ErrorLoadData, Loader } from '@/components/ui/elements'
import { DataTable } from '@/components/ui/elements/data-table'

import { ROUTES } from '@/config/routes'

import { useGetColors } from '@/hooks/colors/useGetColors'

import { IColor } from '@/shared/types'

import { formatDate } from '@/utils/date/formate-date'

import { colorColumns } from './color-column'

import styles from './Colors.module.scss'

interface Props {
	className?: string
}

export function Colors({ className }: Props) {
	const params = useParams<{ storeId: string }>()
	const { colors, isLoading, error } = useGetColors()

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		return <ErrorLoadData />
	}

	const formatedColors: IColor[] = colors.map(color => ({
		id: color.id,
		createdAt: formatDate(color.createdAt),
		name: color.name,
		value: color.value,
		storeId: color.storeId
	}))

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.block}>
					<Title className={styles.title} size='lg'>
						Цвета ({colors?.length})
					</Title>
					<div className={styles.description}>Все товары вашего магазина</div>
				</div>
				<Link href={ROUTES.STORE.COLORS_CREATE(params.storeId)}>
					<Button variant='primary' className={styles.btn}>
						<Plus />
						Создать
					</Button>
				</Link>
			</div>
			<DataTable
				columns={colorColumns}
				data={formatedColors}
				filterKey='name'
			/>
		</div>
	)
}
