'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
	children: React.ReactNode
	isActive: boolean
}

export function Portal({ children, isActive }: Props) {
	const [container, setContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		// Создаём контейнер, если его нет
		let root = document.getElementById('portal-root')
		if (!root) {
			root = document.createElement('div')
			root.setAttribute('id', 'portal-root')
			document.body.appendChild(root)
		}
		setContainer(root)
	}, [])

	if (!container) return null

	return createPortal(children, container)
}
