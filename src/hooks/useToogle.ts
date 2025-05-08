import { useCallback, useState } from 'react'

export const useToogle = (initial = false) => {
	const [isOpen, setIsOpen] = useState(initial)

	const onOpen = useCallback(() => setIsOpen(true), [])
	const onClose = useCallback(() => setIsOpen(false), [])
	const onToogle = useCallback(() => setIsOpen(prev => !prev), [])

	return { isOpen, onOpen, onClose, onToogle }
}
