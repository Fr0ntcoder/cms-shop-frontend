import { NextRequest, NextResponse } from 'next/server'

import { ROUTES } from '@/config/routes'

import { EnumTokens } from '@/services/auth/auth-token.service'

export async function middleware(request: NextRequest) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuth = request.url.includes(ROUTES.AUTH.INDEX)

	if (isAuth) {
		if (refreshToken) {
			return NextResponse.redirect(new URL(ROUTES.HOME, request.url))
		}

		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(ROUTES.AUTH.INDEX, request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/dashboard/:path*', '/store/:path*', '/auth']
}
