import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { IProduct } from '@/shared/types'

import styles from './ProductGallery.module.scss'

interface Props {
	product: IProduct
	className?: string
}

export function ProductGallery({ className, product }: Props) {
	const [currentImage, setCurrentImage] = useState(0)
	const list = product.images.map((image, i) => (
		<div className={styles.item} key={i} onClick={() => setCurrentImage(i)}>
			<div className={styles.item__wrapper}>
				<Image
					src={image}
					fill
					objectFit='cover'
					objectPosition='top center'
					alt='фото'
				/>
			</div>
		</div>
	))
	return (
		<div className={cn(styles.root, className)}>
			<div className={styles.wrapper}>
				<div className={styles.image}>
					<Image
						src={product.images[currentImage]}
						fill
						objectFit='cover'
						objectPosition='top center'
						alt='фото'
					/>
				</div>
			</div>
			<div className={styles.list}>{list}</div>
		</div>
	)
}
