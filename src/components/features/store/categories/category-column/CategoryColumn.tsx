import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, ExternalLink, MoreHorizontal, Pencil } from 'lucide-react'

import { DropdownMenu } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import styles from './CategoryColumn.module.scss'

export interface ICategoryColumn {
	id: string
	title: string
	createdAt: string
	storeId: string
}

export const categoryColumns: ColumnDef<ICategoryColumn>[] = [
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
						variants='sm'
						trigger={<MoreHorizontal />}
						items={[
							{
								label: 'Страница с категорией',
								link: ROUTES.CATEGORY.ID(row.original.id),
								icon: <ExternalLink size={18} />
							},
							{
								label: 'Изменить',
								link: ROUTES.STORE.CATEGORIES_EDIT(
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
