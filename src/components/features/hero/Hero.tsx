import cn from 'clsx'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/common'

import { ROUTES } from '@/config/routes'

import styles from './Hero.module.scss'

interface Props {
	className?: string
}

export function Hero({ className }: Props) {
	return (
		<div className={cn(styles.root, className)}>
			<h1 className={styles.title}>Появилось желание что-то купить?</h1>
			<h2 className={styles.subtitle}>У нас есть всё!</h2>
			<div className={styles.description}>
				Добро пожаловать в наш интернет магазин - здесь вы найдете всё.
				<br />
				Это уникальная платформа,для покупок.{' '}
			</div>
			<Link href={ROUTES.EXPLORER()}>
				<Button variant='primary' className={styles.btn}>
					Перейти в каталог
					<ArrowRight size={18} />
				</Button>
			</Link>
		</div>
	)
}
