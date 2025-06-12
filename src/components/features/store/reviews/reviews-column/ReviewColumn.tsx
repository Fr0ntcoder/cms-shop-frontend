import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import styles from './ReviewColumn.module.scss'

export interface IReviewColumn {
	id: string
	createdAt: string
	rating: string
	username: string
}

export const reviewColumns: ColumnDef<IReviewColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата создания
					<ArrowUpDown size={18} />
				</div>
			)
		}
	},
	{
		accessorKey: 'rating',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Рейтинг
					<ArrowUpDown size={18} />
				</div>
			)
		}
	},
	{
		accessorKey: 'username',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Пользователь
					<ArrowUpDown size={18} />
				</div>
			)
		}
	}
]
