import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth/auth.service'

export const useLogout = () => {
	const router = useRouter()
	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	return { logout }
}
