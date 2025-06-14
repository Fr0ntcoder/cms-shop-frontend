'use client'

import { IProduct } from '@/shared/types'

import styles from './Home.module.scss'

interface Props {
	products: IProduct[]
	className?: string
}

export function Home({ className, products }: Props) {
	return <div className={styles.wrap}></div>
}
