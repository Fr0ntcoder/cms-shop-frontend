import { Metadata } from 'next'

import { Hero } from '@/components/features/hero'

export const metadata: Metadata = { title: 'Главная страница' }

export default async function HomePage() {
	return <Hero />
}
