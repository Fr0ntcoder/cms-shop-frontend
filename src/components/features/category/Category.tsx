import cn from 'clsx'

import styles from './Category.module.scss'

interface Props {
	className?: string
}

export function Category({ className }: Props) {
	return <div className={cn(styles.root, className)}>Category</div>
}
