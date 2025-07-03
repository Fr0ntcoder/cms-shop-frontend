import { Metadata } from 'next'

import { Thanks } from '@/components/features/thanks'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Спасибо за покупку!',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return <Thanks />
}
