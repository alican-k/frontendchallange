import css from '@emotion/css'

export const row = css`
	display: flex;
`
export const column = css`
	display: flex;
	flex-direction: column;
`
export const rowStartCenter = css`
	display: flex;
	align-items: center;
`
export const rowCenterCenter = css`
	display: flex;
	justify-content: center;
	align-items: center;
`
export const rowBetweenCenter = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const columnStartStretch = css`
	display: flex;
	flex-direction: column;
	align-items: stretch;
`
export const link = css`
	${rowCenterCenter};
	text-decoration: none;
`
export const linkStartCenter = css`
	${rowStartCenter};
	text-decoration: none;
`
