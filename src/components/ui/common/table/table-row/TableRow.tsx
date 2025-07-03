import { PropsWithChildren } from 'react'

import styles from './TableRow.module.scss'

export function TableRow({ children }: PropsWithChildren<unknown>) {
	return <tr className={styles.root}>{children}</tr>
}
