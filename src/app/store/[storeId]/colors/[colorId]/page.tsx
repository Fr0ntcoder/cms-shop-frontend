import { Metadata } from 'next'

import { ColorEdit } from '@/components/features/store/colors/color-edit'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Изменение цвета',
	...NO_INDEX_PAGE
}

export default function ColorEditPage() {
	return <ColorEdit />
}
