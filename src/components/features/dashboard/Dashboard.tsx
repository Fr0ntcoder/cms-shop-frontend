'use client'

import cn from 'clsx'
import { LogOut } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import {
	IOrderColumn,
	orderColumns
} from '@/components/features/dashboard/order-column'
import { Button, Title } from '@/components/ui/common'
import { DataTable } from '@/components/ui/elements/data-table'

import { useLogout } from '@/hooks/auth/useLogout'
import { useProfile } from '@/hooks/profile/useProfile'

import { saveTokenStorage } from '@/services/auth/auth-token.service'

import { EnumOrderStatus } from '@/shared/types'

import { formatDate } from '@/utils/date/formate-date'
import { formatPrice } from '@/utils/string/format-price'

import styles from './Dashboard.module.scss'

interface Props {
	className?: string
}

export function Dashboard({ className }: Props) {
	const searchParams = useSearchParams()

	useEffect(() => {
		const accessToken = searchParams.get('accessToken')

		if (accessToken) saveTokenStorage(accessToken)
	}, [searchParams])

	const { user } = useProfile()
	const { logout } = useLogout()

	if (!user) return null

	const formattedOrders: IOrderColumn[] = user.orders.map(order => ({
		createdAt: formatDate(order.createdAt),
		status: order.status === EnumOrderStatus.PENDING ? 'В ожидании' : 'Оплачен',
		total: formatPrice(order.total)
	}))

	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.header}>
				<Title size='lg' className={styles.title}>
					Ваши заказы
				</Title>
				<Button variant='ghost' onClick={() => logout()}>
					<LogOut />
					Выйти
				</Button>
			</div>
			<DataTable columns={orderColumns} data={formattedOrders} />
		</div>
	)
}
