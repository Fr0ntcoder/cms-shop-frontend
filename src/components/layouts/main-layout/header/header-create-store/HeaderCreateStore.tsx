import { Button, Modal } from '@/components/ui/common'
import { StoreCreateForm } from '@/components/ui/elements'

import { useToggle } from '@/hooks/useToggle'

interface Props {
	className?: string
}

export function HeaderCreateStore({ className }: Props) {
	const { isOpen, onClose, onOpen } = useToggle()
	return (
		<>
			<Button variant='ghost' onClick={onOpen}>
				Создать магазин
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<StoreCreateForm onClose={onClose} />
			</Modal>
		</>
	)
}
