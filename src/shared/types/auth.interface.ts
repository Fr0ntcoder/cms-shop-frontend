import { z } from 'zod'

import { IUser } from '@/shared/types'

export const authFormSchemas = z.object({
	name: z.string().optional(),
	email: z.string().email({ message: 'Введите корректный email' }),
	password: z
		.string()
		.min(6, { message: 'Пароль должен быть не менее 6 символов' })
})

export type TAuthData = z.infer<typeof authFormSchemas>

export interface IAuthResponse {
	user: IUser
	accessToken: string
}
