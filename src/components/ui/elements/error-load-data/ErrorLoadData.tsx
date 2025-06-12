import cn from 'clsx'

import styles from './ErrorLoadData.module.scss'

interface Props {
	text?: string
	className?: string
}

export function ErrorLoadData({
	className,
	text = 'Ошибка загрузки данных....'
}: Props) {
	return <div className={cn(styles.root, className)}>{text}</div>
}
