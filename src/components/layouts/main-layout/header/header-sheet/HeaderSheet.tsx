import { Sheet } from '@/components/ui/common'

import { useToggle } from '@/hooks/useToggle'

import { HeaderCart } from '../header-cart'

import styles from './HeaderSheet.module.scss'

interface Props {
	className?: string
}

export function HeaderSheet({ className }: Props) {
	const { isOpen, onClose, onOpen } = useToggle()
	return (
		<>
			<button onClick={onOpen} className={styles.link}>
				Корзина
			</button>
			<Sheet isOpen={isOpen} onClose={onClose}>
				<HeaderCart />
			</Sheet>
		</>
	)
}
