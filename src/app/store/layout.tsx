import { StoreLayout } from '@/components/layouts/store-layout'

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <StoreLayout>{children}</StoreLayout>
}
