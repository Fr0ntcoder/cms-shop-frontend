import { useEffect, useRef, useState } from 'react'

export const useClickPortalOutside = <T extends HTMLElement>(
	callback: () => void,
	isActive: boolean = true
) => {
	const [root, setRoot] = useState<HTMLElement | null>(null)
	const ref = useRef<T>(null)

	useEffect(() => {
		if (isActive && !root) {
			const root = document.createElement('div')
			root.id = 'portal-root'
			document.body.appendChild(root)
			setRoot(root)
		}
	}, [isActive, setRoot])

	const handleExitComplete = () => {
		if (root) {
			document.body.removeChild(root)
			setRoot(null)
		}
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback()
			}
		}

		if (isActive) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [ref, callback, isActive])

	return {
		ref,
		root,
		handleExitComplete
	}
}
