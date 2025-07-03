import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import styles from './OrderColumn.module.scss'

export interface IOrderColumn {
	createdAt: string
	status: string
	total: string
}

export const orderColumns: ColumnDef<IOrderColumn>[] = [
	{
		accessorKey: 'createdAt',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Дата оплаты
					<ArrowUpDown />
				</div>
			)
		}
	},
	{
		accessorKey: 'status',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Статус
					<ArrowUpDown />
				</div>
			)
		}
	},
	{
		accessorKey: 'total',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Сумма
					<ArrowUpDown />
				</div>
			)
		}
	}
]
