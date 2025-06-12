import { z } from 'zod'

export interface IColor {
	id: string
	name: string
	value: string
	storeId: string
	createdAt: string
}

export const colorFormShemas = z.object({
	name: z.string().min(1, { message: 'Это поле обязательно!' }),
	value: z.string().min(1, { message: 'Это поле обязательно!' })
})

export type TColorFormData = z.infer<typeof colorFormShemas>
