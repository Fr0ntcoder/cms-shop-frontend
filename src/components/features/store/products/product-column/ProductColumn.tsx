import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'

import { DropdownMenu } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import styles from './ProductColumn.module.scss'

export interface IProductColumn {
	id: string
	title: string
	price: string
	category: string
	color: string
	storeId: string
}

export const productColumns: ColumnDef<IProductColumn>[] = [
	{
		accessorKey: 'title',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Название
					<ArrowUpDown size={18} />
				</div>
			)
		}
	},
	{
		accessorKey: 'price',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Цена
					<ArrowUpDown size={18} />
				</div>
			)
		}
	},
	{
		accessorKey: 'category',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Категория
					<ArrowUpDown size={18} />
				</div>
			)
		}
	},
	{
		accessorKey: 'color',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Цвет
					<ArrowUpDown size={18} />
				</div>
			)
		},
		cell: ({ row }) => {
			return (
				<div className={styles.color}>
					{row.original.color}
					<span
						className={styles.color__value}
						style={{ backgroundColor: row.original.color }}
					></span>
				</div>
			)
		}
	},
	{
		accessorKey: 'actions',
		header: 'Действия',
		cell: ({ row }) => {
			return (
				<div className={styles.actions}>
					<DropdownMenu
						variants='lg'
						trigger={<MoreHorizontal />}
						items={[
							{
								label: 'Страница с продуктами',
								link: ROUTES.PRODUCT.ID(row.original.id),
								icon: <ExternalLink size={18} />
							},
							{
								label: 'Изменить',
								link: ROUTES.STORE.PRODUCTS_EDIT(
									row.original.storeId,
									row.original.id
								),
								icon: <Pencil size={18} />
							}
						]}
					/>
				</div>
			)
		}
	}
]
