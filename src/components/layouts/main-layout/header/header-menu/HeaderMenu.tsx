import cn from 'clsx'
import Link from 'next/link'

import { ProfileUser } from '@/components/ui/elements'

import { ROUTES } from '@/config/routes'

import { useProfile } from '@/hooks/profile/useProfile'

import { HeaderCreateStore } from '../header-create-store'
import { HeaderSheet } from '../header-sheet'

import styles from './HeaderMenu.module.scss'

interface Props {
	className?: string
}

export function HeaderMenu({ className }: Props) {
	const { user, isLoading } = useProfile()

	return (
		<div className={cn(styles.root, className)}>
			<HeaderSheet />
			<Link href={ROUTES.EXPLORER()} className={styles.link}>
				Каталог
			</Link>
			{user ? (
				<>
					<Link href={ROUTES.DASHBOARD.FAVORITES} className={styles.link}>
						Избранное
					</Link>
					{user?.stores.length ? (
						<Link
							href={ROUTES.STORE.HOME(user.stores[0].id)}
							className={styles.link}
						>
							Мои магазины
						</Link>
					) : (
						<HeaderCreateStore />
					)}
				</>
			) : (
				<div></div>
			)}
			<ProfileUser data={user} isLoading={isLoading} />
		</div>
	)
}
