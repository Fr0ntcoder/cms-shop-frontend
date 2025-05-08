import { Metadata } from 'next'

import { Home } from '@/components/features/home'

export const metadata: Metadata = { title: 'Главная страница' }

export default function HomePage() {
	return <Home />
}
