import { z } from 'zod'

export interface ICategory {
	id: string
	title: string
	description: string
	storeId: string
	createdAt: string
}

export const categoryFormShemas = z.object({
	title: z.string().min(1, { message: 'Это поле обязательно!' }),
	description: z.string().min(1, { message: 'Это поле обязательно!' })
})

export type TCategoryFormData = z.infer<typeof categoryFormShemas>
