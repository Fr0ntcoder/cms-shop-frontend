import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react'

import { DropdownMenu } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import styles from './ColorColumn.module.scss'

export interface IColor {
	id: string
	createdAt: string
	name: string
	value: string
	storeId: string
}

export const colorColumns: ColumnDef<IColor>[] = [
	{
		accessorKey: 'name',
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
		accessorKey: 'value',
		header: ({ column }) => {
			return (
				<div
					className={styles.btn}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Значение
					<ArrowUpDown size={18} />
				</div>
			)
		},
		cell: ({ row }) => {
			return (
				<div className={styles.color}>
					{row.original.value}
					<span
						className={styles.color__value}
						style={{ backgroundColor: row.original.value }}
					></span>
				</div>
			)
		}
	},
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
								label: 'Изменить',
								link: ROUTES.STORE.COLORS_EDIT(
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
