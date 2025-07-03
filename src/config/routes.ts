const BASE_AUTH = '/auth'
const BASE_STORE = '/store'
const BASE_DASHBOARD = '/dashboard'
const BASE_CATEGORY = '/category'
const BASE_PRODUCT = '/product'
const BASE_ORDER = '/order'
const BASE_FILES = '/file'

export const ROUTES = {
	HOME: '/',
	EXPLORER: (query = '') => `/explorer${query}`,
	HERO: '/hero',
	THANKS: '/thanks',
	DASHBOARD: {
		INDEX: BASE_DASHBOARD,
		FAVORITES: `${BASE_DASHBOARD}/favorites`
	},
	AUTH: {
		INDEX: BASE_AUTH,
		LOGIN: `${BASE_AUTH}/login`,
		REGISTER: `${BASE_AUTH}/register`,
		TOKEN: `${BASE_AUTH}/login/access-token`,
		LOGOUT: `${BASE_AUTH}/logout`
	},
	STORE: {
		HOME: (storeId = '') => `${BASE_STORE}/${storeId}`,
		CATEGORIES: (storeId = '') => `${BASE_STORE}/${storeId}/categories`,
		CATEGORIES_EDIT: (storeId = '', categoryId = '') =>
			`${BASE_STORE}/${storeId}/categories/${categoryId}`,
		CATEGORIES_CREATE: (storeId = '') =>
			`${BASE_STORE}/${storeId}/categories/create`,
		COLORS: (storeId = '') => `${BASE_STORE}/${storeId}/colors`,
		COLORS_EDIT: (storeId = '', colorId = '') =>
			`${BASE_STORE}/${storeId}/colors/${colorId}`,
		COLORS_CREATE: (storeId = '') => `${BASE_STORE}/${storeId}/colors/create`,
		PRODUCTS: (storeId = '') => `${BASE_STORE}/${storeId}/products`,
		PRODUCTS_EDIT: (storeId = '', productId = '') =>
			`${BASE_STORE}/${storeId}/products/${productId}`,
		PRODUCTS_CREATE: (storeId = '') =>
			`${BASE_STORE}/${storeId}/products/create`,
		REVIEWS: (storeId = '') => `${BASE_STORE}/${storeId}/reviews`,
		SETTINGS: (storeId = '') => `${BASE_STORE}/${storeId}/settings`,
		STATISTICS: (storeId = '') => `${BASE_STORE}/${storeId}/statistics`
	},
	CATEGORY: {
		ID: (categoryId: string) => `${BASE_CATEGORY}/${categoryId}`
	},
	PRODUCT: {
		ID: (productId: string) => `${BASE_PRODUCT}/${productId}`,
		GALLERY: (productId: string) =>
			`${BASE_PRODUCT}/${productId}/product-gallery`,
		INFO: (productId: string) => `${BASE_PRODUCT}/${productId}/product-info`,
		REVIEWS: (productId: string) =>
			`${BASE_PRODUCT}/${productId}/product-reviews`
	},
	ORDER: {
		PAYMENT: `${BASE_ORDER}/orders/place`
	},
	FILE: {
		UPLOAD: BASE_FILES
	}
}
