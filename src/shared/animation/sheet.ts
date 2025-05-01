export const sheetOverlayAnimate = {
	initial: { opacity: 0 },
	animate: { opacity: 0.5 },
	exit: { opacity: 0 }
}

export const sheetAnimate = {
	initial: { x: '100%' },
	animate: { x: 0 },
	exit: { x: '100%' },
	transition: { type: 'tween' }
}
