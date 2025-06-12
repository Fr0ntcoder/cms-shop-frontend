import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useRef } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/services/file.service'

export const useUpload = (onChange: (value: string[]) => void) => {
	const ref = useRef<HTMLInputElement>(null)

	const { mutate: upload, isPending: isUploading } = useMutation({
		mutationKey: ['upload file'],
		mutationFn: (data: FormData) => fileService.upload(data),
		onSuccess(data) {
			onChange(data.map(file => file.url))
		},
		onError() {
			toast.error('Ошибка при загрузке файлов')
		}
	})

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = event.target.files

		if (selectedFiles) {
			const fileArray = Array.from(selectedFiles)
			const formData = new FormData()
			fileArray.forEach(file => formData.append('files', file))

			upload(formData)
		}
	}

	const handleButtonClick = () => {
		ref.current?.click()
	}

	return useMemo(
		() => ({ upload, handleFileChange, handleButtonClick, ref, isUploading }),
		[upload, handleFileChange, handleButtonClick, ref, isUploading]
	)
}
