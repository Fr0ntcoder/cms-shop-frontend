export const formatDate = (date: string) => {
	const dateInit = new Date(date)
	const day = String(dateInit.getDate()).padStart(2, '0')
	const month = String(dateInit.getMonth() + 1).padStart(2, '0')
	const year = dateInit.getFullYear()

	return `${day}.${month}.${year}`
}
