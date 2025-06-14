import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import styles from './Thanks.module.scss'

interface Props {
	className?: string
}

export function Thanks({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<h1 className={styles.title}>Спасибо за покупку!</h1>
			<p className={styles.description}>Ваш заказ принят!</p>
			<Link href={ROUTES.HOME}>
				<Button variant='primary' className={styles.btn}>
					На главную <ArrowRight size={18} />
				</Button>
			</Link>
		</div>
	)
}
