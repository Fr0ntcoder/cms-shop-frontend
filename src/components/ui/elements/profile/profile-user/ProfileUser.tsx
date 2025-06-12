import { LoaderCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@/config/routes'

import { IUser } from '@/shared/types'

import styles from './ProfileUser.module.scss'

interface Props {
	data?: IUser
	isLoading: boolean
}

export function ProfileUser({ data, isLoading }: Props) {
	if (isLoading || !data) {
		return (
			<div className={styles.skeleton}>
				<LoaderCircle className={styles.loader} width={40} height={40} />
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<Link href={ROUTES.DASHBOARD.INDEX} className={styles.link}>
				<Image src={data.picture} width={40} height={40} alt={data.name} />
			</Link>
		</div>
	)
}
