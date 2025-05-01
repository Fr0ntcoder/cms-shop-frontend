'use client'

import { useState } from 'react'

import { Table } from '@/components/ui/table'

import styles from './Home.module.scss'

const columns = [
	{ key: 'name', label: 'Name' },
	{ key: 'age', label: 'Age' },
	{ key: 'email', label: 'Email' }
]

const data = [
	{ name: 'Alice', age: 25, email: 'alice@example.com' },
	{ name: 'Bob', age: 30, email: 'bob@example.com' }
]
interface Props {
	className?: string
}

export function Home({ className }: Props) {
	const [isOpen, setIsOpen] = useState(false)
	const onHandler = () => {
		setIsOpen(false)
	}
	return (
		<div className={styles.wrap}>
			<Table columns={columns} data={data} />
		</div>
	)
}
