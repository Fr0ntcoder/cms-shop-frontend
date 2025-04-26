export const APP_URL = process.env.APP_URL as string

export const PUBLIC_URL = {
	root: (url = '') => `${url ? url : ''}`,
	home: () => PUBLIC_URL.root('/'),
	auth: () => PUBLIC_URL.root('/auth'),
	explorer: (query = '') => PUBLIC_URL.root(`/explorer${query}`),
	products: (id = '') => PUBLIC_URL.root(`/products${id}`),
	category: (id = '') => PUBLIC_URL.root(`/category${id}`)
}

export const DASHBOARD_URL = {
	root: (url = '') => `/dashboard${url ? url : ''}`,

	home: () => DASHBOARD_URL.root('/'),

	favorites: () => DASHBOARD_URL.root('/favorites')
}

export const STORE_URL = {
	root: (url = '') => `/store${url ? url : ''}`,
	home: (storeId = '') => STORE_URL.root(`/${storeId}`),
	products: (storeId = '') => STORE_URL.root(`/${storeId}/products`),
	productCreatate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/products/create`),
	productEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/products/${id}`),
	catregories: (storeId = '') => STORE_URL.root(`/${storeId}/catregories`),
	categoryCreate: (storeId = '') =>
		STORE_URL.root(`/${storeId}/catregories/create`),
	categoryEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/catregories/${id}`),
	colors: (storeId = '') => STORE_URL.root(`/${storeId}/colors`),
	colorCreate: (storeId = '') => STORE_URL.root(`/${storeId}/colors/create`),
	colorEdit: (storeId = '', id = '') =>
		STORE_URL.root(`/${storeId}/colors/${id}`),
	reviews: (storeId = '') => STORE_URL.root(`/${storeId}/reviews`),
	settings: (storeId = '') => STORE_URL.root(`/${storeId}/settings`)
}
