import cn from 'clsx'

import styles from './Heading.module.scss'

interface Props {
	title: string
	description?: string
	className?: string
}

export function Heading({ title, description, className }: Props) {
	return (
		<div className={cn(styles.heading, className)}>
			<h2 className={styles.heading__title}>{title}</h2>
			{description && (
				<p className={styles.heading__description}>{description}</p>
			)}
		</div>
	)
}
