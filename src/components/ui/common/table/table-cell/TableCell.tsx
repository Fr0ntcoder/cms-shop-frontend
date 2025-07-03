import { PropsWithChildren } from 'react'

import styles from './TableCell.module.scss'

interface Props {
	colSpan?: number
	className?: string
}
export function TableCell({
	children,
	colSpan,
	className
}: PropsWithChildren<Props>) {
	return <td className={styles.root}>{children}</td>
}
