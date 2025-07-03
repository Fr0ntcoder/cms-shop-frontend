import { PropsWithChildren } from 'react'

import styles from './TableFooter.module.scss'

export function TableFooter({ children }: PropsWithChildren<unknown>) {
	return <tfoot className={styles.root}>{children}</tfoot>
}
