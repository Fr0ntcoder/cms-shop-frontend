import { z } from 'zod'

export const formAuthSchema = z.object({
	name: z.string().optional(),
	email: z.string().email({ message: 'Введите корректный email' }),
	password: z
		.string()
		.min(6, { message: 'Пароль должен быть не менее 6 символов' })
})

export type TFormAuthValues = z.infer<typeof formAuthSchema>
