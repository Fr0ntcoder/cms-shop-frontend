'use client'

import cn from 'clsx'
import { useState } from 'react'
import { FormProvider } from 'react-hook-form'

import { Button, Title } from '@/components/ui/common'
import { FieldInput } from '@/components/ui/elements'

import { useAuthForm } from '@/hooks/auth/useAuthForm'

import { AuthFormSocial } from './auth-form-social'

import styles from './AuthForm.module.scss'

interface Props {
	className?: string
}

export function AuthForm({ className }: Props) {
	const [isReg, setIsReg] = useState(true)
	const { form, isPending, onSubmit } = useAuthForm(isReg)
	return (
		<div className={cn(styles.wrapper, className)}>
			<Title className={styles.title} size='xl'>
				{isReg ? 'Войти в аккаунт' : 'Создать аккаунт'}
			</Title>
			<div className={styles.text}>
				Войдите или создайте учетную запись,
				<br />
				чтобы оформлять покупки!
			</div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
					{!isReg && (
						<FieldInput name='name' required className={styles.form__input} />
					)}
					<FieldInput name='email' required className={styles.form__input} />
					<FieldInput name='password' required className={styles.form__input} />
					<Button type='submit' variant='primary' size='sm'>
						{isReg ? 'Войти' : 'Зарегистрироваться'}
					</Button>
				</form>
			</FormProvider>
			<div className={styles.footer}>
				<AuthFormSocial />
				<div className={styles.footer__text}>
					{!isReg ? 'Уже есть аккаунт?' : 'Ещё нет аккаунта?'}
					<span onClick={() => setIsReg(prev => !prev)}>
						{!isReg ? 'Войти' : 'Создать'}
					</span>
				</div>
			</div>
		</div>
	)
}
