import { z } from 'zod'

export const storeCreateModalShemas = z.object({
	title: z.string().min(1, { message: 'Это поле обязательно!' })
})
