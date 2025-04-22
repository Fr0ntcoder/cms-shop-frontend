import cn from 'clsx'

import styles from './DropdownMenuShortcut.module.scss'

export const DropdownMenuShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cn(styles.shortcut, className)} {...props} />
}
