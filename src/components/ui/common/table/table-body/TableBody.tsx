import { PropsWithChildren } from 'react'

import styles from './TableBody.module.scss'

export function TableBody({ children }: PropsWithChildren<unknown>) {
	return <tbody className={styles.root}>{children}</tbody>
}
