'use client'

import { useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
	callback: () => void
) => {
	const ref = useRef<T>(null)

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				callback()
			}
		}

		document.addEventListener('mousedown', handleClick)

		return () => document.removeEventListener('mousedown', handleClick)
	}, [callback])

	return ref
}
