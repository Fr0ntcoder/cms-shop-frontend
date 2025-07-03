import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { IMenuItem } from '../menu.inteface'

import styles from './MenuItem.module.scss'

interface Props {
	item: IMenuItem
}

export function MenuItem({ item }: Props) {
	const pathname = usePathname()
	return (
		<li className={styles.item}>
			<Link
				href={item.link}
				className={cn(
					styles.link,
					pathname === item.link && styles.link_active
				)}
			>
				<item.icon />
				{item.text}
			</Link>
		</li>
	)
}
