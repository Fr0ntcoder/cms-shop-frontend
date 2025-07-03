import { PropsWithChildren } from 'react'

import styles from './Table.module.scss'

export function Table({ children }: PropsWithChildren<unknown>) {
	return <table className={styles.root}>{children}</table>
}
