import { useRouter } from 'next/navigation'
import { FaYandex } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui'

import { SERVER_URL } from '@/config/api.config'

export function AuthFormSocial() {
	const router = useRouter()
	return (
		<>
			<Button
				variant='outline'
				size='sm'
				onClick={() => router.push(`${SERVER_URL}/auth/google`)}
			>
				<FcGoogle />
				Продолжить через Google
			</Button>
			<Button
				variant='outline'
				size='sm'
				onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}
			>
				<FaYandex color='#FC3F1D' />
				Продолжить через Яндекс
			</Button>
		</>
	)
}
