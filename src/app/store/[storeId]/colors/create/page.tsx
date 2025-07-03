import { Metadata } from 'next'

import { ColorCreate } from '@/components/features/store/colors'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Создание Цвета',
	...NO_INDEX_PAGE
}

export default function ColorCreatePage() {
	return <ColorCreate />
}
