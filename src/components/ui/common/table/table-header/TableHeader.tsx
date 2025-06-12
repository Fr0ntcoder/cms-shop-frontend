import { PropsWithChildren } from 'react'

import styles from './TableHeader.module.scss'

export function TableHeader({ children }: PropsWithChildren<unknown>) {
	return <thead className={styles.root}>{children}</thead>
}
