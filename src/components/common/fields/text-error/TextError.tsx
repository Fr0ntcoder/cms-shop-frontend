import cn from 'clsx'

import styles from './TextError.module.scss'

interface Props {
	text: string
	className?: string
}

export function TextError({ text, className }: Props) {
	return <div className={cn(styles.root, className)}>{text}</div>
}
