'use client'

import cn from 'clsx'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import {
	IReviewColumn,
	reviewColumns
} from '@/components/features/store/reviews/reviews-column'
import { Button, Title } from '@/components/ui/common'
import { ErrorLoadData, Loader } from '@/components/ui/elements'
import { DataTable } from '@/components/ui/elements/data-table'

import { ROUTES } from '@/config/routes'

import { useGetReviews } from '@/hooks/reviews/useGetReviews'

import { formatDate } from '@/utils/date/formate-date'

import styles from './Reviews.module.scss'

interface Props {
	className?: string
}

export function Reviews({ className }: Props) {
	const params = useParams<{ storeId: string }>()
	const { reviews, isLoading, error } = useGetReviews()

	if (isLoading) {
		return <Loader />
	}

	if (error) {
		return <ErrorLoadData />
	}

	const formattedReviews: IReviewColumn[] = reviews.map(review => ({
		id: review.id,
		createdAt: formatDate(review.createdAt),
		rating: Array.from({ length: review.rating })
			.map(() => '⭐️')
			.join(' '),
		username: review.user.name
	}))

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<div className={styles.block}>
					<Title className={styles.title} size='lg'>
						Отзывы ({reviews.length})
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
			<DataTable columns={reviewColumns} data={formattedReviews} />
		</div>
	)
}
