'use client'

import cn from 'clsx'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { saveTokenStorage } from '@/services/auth/auth-token.service'

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
	return <div className={cn(styles.root, className)}>Dashboard</div>
}
