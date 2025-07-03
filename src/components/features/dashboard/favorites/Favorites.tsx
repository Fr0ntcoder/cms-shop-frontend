'use client'

import { Catalog } from '@/components/ui/elements/catalog'

import { useProfile } from '@/hooks/profile/useProfile'

interface Props {
	className?: string
}

export function Favorites({ className }: Props) {
	const { user, isLoading } = useProfile()

	if (!user) return null

	return (
		<Catalog
			title='Избранное'
			products={user.favorites}
			isLoading={isLoading}
		/>
	)
}
