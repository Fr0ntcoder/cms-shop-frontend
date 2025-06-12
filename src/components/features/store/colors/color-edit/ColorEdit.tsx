'use client'

import { ErrorLoadData, Loader } from '@/components/ui/elements'

import { useGetColor } from '@/hooks/colors/useGetColor'

import { ColorForm } from '../color-form'

export function ColorEdit() {
	const { data, isLoading, error } = useGetColor()

	if (isLoading) {
		return <Loader />
	}

	if (!data || error) {
		return <ErrorLoadData />
	}

	return <ColorForm color={data} />
}
