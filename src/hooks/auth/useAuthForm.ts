import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ROUTES } from '@/config/routes'

import { authService } from '@/services/auth/auth.service'

import { TFormAuthValues, formAuthSchema } from '@/shared/schemes'
import { IAuthForm } from '@/shared/types'

export const useAuthForm = (isReg: boolean) => {
	const router = useRouter()
	const form = useForm<TFormAuthValues>({
		resolver: zodResolver(formAuthSchema),
		defaultValues: {
			name: '',
			email: '',
			password: ''
		}
	})

	const { mutate, isPending } = useMutation({
		mutationKey: ['auth reg'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isReg ? 'login' : 'register', data),
		onSuccess() {
			form.reset()
			toast.success(
				isReg ? 'Вы вошли в аккаунт!' : 'Вы успешно зарегистрировались!'
			)
			router.replace(ROUTES.HOME)
		},
		onError(error: unknown) {
			const apiError = error as {
				message?: string
				statusCode?: number
				response?: {
					data?: {
						message?: string
					}
				}
			}

			const errorMessage =
				apiError.response?.data?.message ||
				apiError.message ||
				'Ошибка при авторизации!'

			if (
				apiError.statusCode === 404 ||
				errorMessage.includes('Не найден') ||
				errorMessage.includes('Not Found')
			) {
				toast.error('Пользователь не найден')
			} else {
				toast.error(errorMessage)
			}
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return { form, onSubmit, isPending }
}
