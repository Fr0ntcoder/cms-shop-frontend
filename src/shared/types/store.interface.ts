import { z } from 'zod'

export interface IStore {
	id: string
	title: string
	description: string
}

export const storeCreateShemas = z.object({
	title: z.string().min(1, { message: 'Это поле обязательно!' })
})

export const storeUpdateShemas = z.object({
	title: z.string().min(1, { message: 'Это поле обязательно!' }),
	description: z.string().optional()
})

export type TStoreCreateData = z.infer<typeof storeCreateShemas>

export type TStoreUpdateData = z.infer<typeof storeUpdateShemas>
