import { Metadata } from 'next'

import { Auth } from '@/components/screens/auth'

export const metadata: Metadata = { title: 'Авторизация' }
export function AuthPage() {
	return <Auth />
}
