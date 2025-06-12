import { ImagePlus } from 'lucide-react'
import Image from 'next/image'

import { Button, Title } from '@/components/ui/common'

import { useUpload } from '@/hooks/file/useUpload'

import styles from './FieldUpload.module.scss'

interface Props {
	isDisabled: boolean
	onChange: (value: string[]) => void
	value: string[]
}

export function FieldUpload({ isDisabled, onChange, value }: Props) {
	const { ref, handleButtonClick, upload, isUploading, handleFileChange } =
		useUpload(onChange)
	const list = value.map(item => (
		<div key={item} className={styles.item}>
			<Image
				src={item}
				alt='Картинка'
				layout='fill'
				objectFit='cover'
				className={styles.image}
			/>
		</div>
	))
	return (
		<div className={styles.root}>
			<Title size='sm' className={styles.title}>
				Картинки
			</Title>
			<div className={styles.list}>{list}</div>
			<Button
				type='button'
				variant='primary'
				disabled={isDisabled || isUploading}
				onClick={handleButtonClick}
			>
				<ImagePlus />
				Загрузить картинки
			</Button>
			<input
				type='file'
				multiple
				className={styles.hidden}
				ref={ref}
				onChange={handleFileChange}
				disabled={isDisabled}
			/>
		</div>
	)
}
