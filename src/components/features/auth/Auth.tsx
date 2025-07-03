import cn from 'clsx'

import { LogoIcon } from '@/shared/icons'

import { AuthForm } from './auth-form'

import styles from './Auth.module.scss'

interface Props {
	className?: string
}

export function Auth({ className }: Props) {
	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.left}>
				<LogoIcon />
			</div>
			<div className={styles.right}>
				<AuthForm />
			</div>
		</div>
	)
}
