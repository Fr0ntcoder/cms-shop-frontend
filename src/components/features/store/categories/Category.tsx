'use client'

import cn from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import {
	ICategoryColumn,
	categoryColumns
} from '@/components/features/store/categories/category-column'
import { Button, Title } from '@/components/ui/common'
import { ErrorLoadData, Loader } from '@/components/ui/elements'
import { DataTable } from '@/components/ui/elements/data-table'

import { ROUTES } from '@/config/routes'

import { useGetCategories } from '@/hooks/categories/useGetCategories'

import { formatDate } from '@/utils/date/formate-date'

import styles from './Category.module.scss'

interface Props {
	className?: string
}

export function Category({ className }: Props) {
	const params = useParams<{ storeId: string }>()
	const { categories, isLoading, error } = useGetCategories()

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		return <ErrorLoadData />
	}

	const formatedCategory: ICategoryColumn[] = categories.map(category => ({
		id: category.id,
		title: category.title,
		createdAt: formatDate(category.createdAt),
		storeId: category.storeId
	}))

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.block}>
					<Title className={styles.title} size='lg'>
						Категории ({categories?.length})
					</Title>
					<div className={styles.description}>Все товары вашего магазина</div>
				</div>
				<Link href={ROUTES.STORE.CATEGORIES_CREATE(params.storeId)}>
					<Button variant='primary' className={styles.btn}>
						<Plus />
						Создать
					</Button>
				</Link>
			</div>
			<DataTable
				columns={categoryColumns}
				data={formatedCategory}
				filterKey='title'
			/>
		</div>
	)
}
