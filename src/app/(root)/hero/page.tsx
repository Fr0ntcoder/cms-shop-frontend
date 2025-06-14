import { Metadata } from 'next'

import { Hero } from '@/components/features/hero'

export const metadata: Metadata = { title: 'Приветствие' }

export default function HeroPage() {
	return <Hero />
}
