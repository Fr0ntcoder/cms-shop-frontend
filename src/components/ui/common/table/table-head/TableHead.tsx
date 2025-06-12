import { PropsWithChildren } from 'react'

import styles from './TableHead.module.scss'

export function TableHead({ children }: PropsWithChildren<unknown>) {
	return <th className={styles.root}>{children}</th>
}
