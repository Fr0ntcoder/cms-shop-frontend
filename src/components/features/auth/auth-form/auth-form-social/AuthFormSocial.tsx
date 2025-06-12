import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/common'

import { SERVER_URL } from '@/config/api.config'

import styles from './AuthFormSocial.module.scss'

export function AuthFormSocial() {
	const router = useRouter()
	return (
		<>
			<Button
				variant='outline'
				size='sm'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
				className={styles.root}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>
			<Button
				variant='outline'
				size='sm'
				onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
				className={styles.root}
			>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</>
	)
}
