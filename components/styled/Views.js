import styled from '@emotion/styled'
import { viewStyles, miscStyles } from '../../commonStyles'
import constants from '../../commonStyles/constants'

const { row, column, rowStartCenter, rowCenterCenter, rowBetweenCenter, columnStartStretch } = viewStyles
const { shadow } = miscStyles

/* GENERIC */

export const View_RowStartCenter = styled.div`${rowStartCenter}`

/* HEADER */

export const View_SiteTitle = styled.div`
	${rowStartCenter};
	flex: 1;
`

/* Programs */

export const View_InputBar = styled.div`
	${rowBetweenCenter};
	margin-top: 30px;
	margin-bottom: 10px;
`
export const View_SearchBox = styled.div`
	${row};
	${shadow};
	height: 37px; 
	width: 433px;
`

export const View_SortBox__Options = styled.div`
	position: absolute;
	${columnStartStretch};
	${shadow};
	top: 37px;
	right: 0;
	left: 0;
	z-index: 2;
	background-color: white;
`

/* Card */

export const View_CardList = styled.div`
	${row};
	flex-wrap: wrap;
	margin-top: 20px;
`
export const View_Card__Normal = styled.div`
	${column};
	position: relative;
	width: 137px;
	height: 234px;
	margin: 0 20px 20px 0;
`

export const View_Card__Link = styled(View_Card__Normal.withComponent('a'))`
	text-decoration: none;
`
export const View_Card_Image = styled.img`
	flex: 1;
	align-self: stretch;
	background-color: ${constants.darkest};
	object-fit: contain;
	margin-bottom: 10px;
	overflow: hidden;
`

// export const View_Card_Thumb = styled.div`
// 	${rowCenterCenter};
// 	flex: 1;
// 	align-self: stretch;
// 	background-color: ${constants.darkest};
// 	margin-bottom: 10px;
// `
export const View_Card_Label = styled.div`
	position: absolute;
	top: 100px;
	left: 0;
	right: 0;
	text-align: center;
`

/* Footer */

export const View_Seperator = styled.div`
	height: 13px;
	width: 1px;
	background-color: ${constants.greyLight};
	margin: 0 12px 0 12px;
	border-radius: 0.2px;
`

/* LAYOUT */

export const L_Root = styled.div`
	${column}; 
	height: 100vh;
`
export const L_Header = styled.div`
	${rowStartCenter};
	background-color: ${constants.blue};
	height: 63px;
	min-height: 63px;
	padding: 0 130px 0 130px;
`
export const L_SubHeader = styled.div`
	${rowStartCenter};
	background-color: ${constants.darker};
	height: 59px;
	min-height: 59px;
	padding: 0 130px 0 130px;
`
export const L_Content = styled.div`
	${column};
	flex-grow: 1;
	padding: 0 130px 0 130px;
`
export const L_Footer = styled.div`
	${column};
	background-color: ${constants.darkest};
	padding: 20px 130px 20px 130px;
`