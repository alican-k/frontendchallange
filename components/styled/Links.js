import styled from '@emotion/styled'
import { viewStyles, textStyles, miscStyles, constants } from '../../commonStyles'

const { link, linkStartCenter } = viewStyles
const { smallWhiteDarker, smallerGreyLight, smallerDarker } = textStyles
const { shadow } = miscStyles

export const Link_Login = styled.a`
	${link};
	${smallWhiteDarker};
	padding: 0 8px 0 8px;
	height: 38px;
	margin-right: 10px;
`
export const Link_StartTrial = styled.a`
	${link};
	${smallWhiteDarker};
	padding: 0 8px 0 8px;
	height: 38px;
	background-color: ${constants.darker};
`

export const Link_Footer = styled.a`
	${link};
	${smallerGreyLight};
	padding: 5px 0 5px 0;
`

export const Link_SortBox = styled.a`
	position: relative;
	${linkStartCenter};
	${shadow};
	height: 37px; 	 
	width: 286px;
	padding-left: 8px;
`
export const Link_SortBox__Option = styled.a`
	${linkStartCenter};
	${smallerDarker}
	height: 37px;
	padding-left: 8px;
`