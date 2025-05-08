import cn from 'clsx'

import styles from './DropdownMenu.module.scss'

interface Props {
	className?: string
}

export function DropdownMenu({ className }: Props) {
	return <div className={cn(styles.root, className)}>DropdownMenu</div>
}
