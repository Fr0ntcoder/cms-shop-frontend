const BASE_AUTH = '/auth'
const BASE_USER = '/users'
const BASE_REVIEW = '/reviews'
const BASE_STORE = '/stores'
const BASE_DASHBOARD = '/dashboard'
const BASE_CATEGORY = '/categories'
const BASE_PRODUCT = '/products'
const BASE_COLOR = '/colors'
const BASE_ORDER = '/orders'
const BASE_FILES = '/files'
const BASE_STATISCTICS = '/statistics'

export const API_URL = {
	HOME: '/',
	DASHBOARD: {
		INDEX: BASE_DASHBOARD
	},
	AUTH: {
		INDEX: BASE_AUTH,
		LOGIN: `${BASE_AUTH}/login`,
		REGISTER: `${BASE_AUTH}/register`,
		TOKEN: `${BASE_AUTH}/login/access-token`,
		LOGOUT: `${BASE_AUTH}/logout`
	},
	USER: {
		PROFILE: `${BASE_USER}/profile`,
		FAVORITES: (productId: string) =>
			`${BASE_USER}/profile/favorites/${productId}`
	},
	REVIEW: {
		STORE: (storeId: string) => `${BASE_REVIEW}/by-storeId/${storeId}`,
		CREATE: (productId: string, storeId: string) =>
			`${BASE_REVIEW}/${productId}/${storeId}`,
		DELETE: (reviewId: string) => `${BASE_REVIEW}/${reviewId}`
	},
	STORE: {
		INDEX: BASE_STORE,
		ID: (storeId: string) => `${BASE_STORE}/by-id/${storeId}`,
		CREATE: BASE_STORE,
		UPDATE: (storeId: string) => `${BASE_STORE}/${storeId}`,
		DELETE: (storeId: string) => `${BASE_STORE}/${storeId}`
	},
	CATEGORY: {
		ID: (categoryId: string) => `${BASE_CATEGORY}/by-id/${categoryId}`,
		STORE: (storeId: string) => `${BASE_CATEGORY}/by-storeId/${storeId}`,
		CREATE: (storeId: string) => `${BASE_CATEGORY}/${storeId}`,
		UPDATE: (categoryId: string) => `${BASE_CATEGORY}/${categoryId}`,
		DELETE: (categoryId: string) => `${BASE_CATEGORY}/${categoryId}`
	},
	PRODUCT: {
		ALL: BASE_PRODUCT,
		ID: (productId: string) => `${BASE_PRODUCT}/by-id/${productId}`,
		STORE: (storeId: string) => `${BASE_PRODUCT}/by-storeId/${storeId}`,
		CATEGORY: (categoryId: string) =>
			`${BASE_PRODUCT}/by-category/${categoryId}`,
		POPULAR: `${BASE_PRODUCT}/most-popular`,
		SIMILAR: (productId: string) => `${BASE_PRODUCT}/similar/${productId}`,
		CREATE: (storeId: string) => `${BASE_PRODUCT}/${storeId}`,
		UPDATE: (productId: string) => `${BASE_PRODUCT}/${productId}`,
		DELETE: (productId: string) => `${BASE_PRODUCT}/${productId}`
	},
	COLOR: {
		ID: (colorId: string) => `${BASE_COLOR}/by-id/${colorId}`,
		STORE: (storeId: string) => `${BASE_COLOR}/by-storeId/${storeId}`,
		CREATE: (storeId: string) => `${BASE_COLOR}/${storeId}`,
		UPDATE: (colorId: string) => `${BASE_COLOR}/${colorId}`,
		DELETE: (colorId: string) => `${BASE_COLOR}/${colorId}`
	},
	ORDER: {
		PAYMENT: `${BASE_ORDER}/place`
	},
	FILE: {
		UPLOAD: BASE_FILES
	},
	STATISTIC: {
		MAIN: (storeId: string) => `${BASE_STATISCTICS}/main/${storeId}`,
		MIDDLE: (storeId: string) => `${BASE_STATISCTICS}/middle/${storeId}`
	}
}
