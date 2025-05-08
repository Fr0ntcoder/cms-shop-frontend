import { StoreIcon } from 'lucide-react'

interface Props {
	className?: string
}

export function StorePopoverTrigger({ className }: Props) {
	return (
		<>
			<StoreIcon />
			Текущий магазин
		</>
	)
}
