'use client'

import cn from 'clsx'

import { ProfileUser } from '@/components/common/profile'

import { useProfile } from '@/hooks/profile/useProfile'

import { StoreSwitch } from '../../../common/store/store-switch'

import styles from './Header.module.scss'

interface Props {
	className?: string
}

export function Header({ className }: Props) {
	const { user, isLoading } = useProfile()
	return (
		<div className={cn(styles.wrapper, className)}>
			<StoreSwitch stores={user?.stores} isLoading={isLoading} />
			<ProfileUser data={user} isLoading={isLoading} />
		</div>
	)
}
