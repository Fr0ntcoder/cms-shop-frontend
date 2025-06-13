import cn from 'clsx'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { ROUTES } from '@/config/routes'

import styles from './HeaderSearch.module.scss'

interface Props {
	className?: string
}

export function HeaderSearch({ className }: Props) {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const router = useRouter()
	return (
		<div className={cn(styles.root, className)}>
			<input
				type='search'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				className={styles.search}
			/>
			<button
				className={styles.btn}
				onClick={() =>
					router.push(ROUTES.EXPLORER(`?searchTerm=${searchTerm}`))
				}
			>
				<Search size={18} />
			</button>
		</div>
	)
}
