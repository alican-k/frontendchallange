import styled from '@emotion/styled'
import { constants, textStyles } from '../../commonStyles'

const { smallerGreyDark, smallerDarker } = textStyles

export const Search__Input = styled.input`
	flex: 1;
	box-sizing: border-box;
	border: none;
	padding-left: 8px;
	${smallerDarker};
	::placeholder {
		${smallerGreyDark};
	}
`
export const Search__Button = styled.button`
	position: relative;
	top: 0;
	bottom: 0;
	right: 0;
	width: 64px;
	background-color: ${constants.blue};
	box-sizing: border-box;
	border: none;
	color: white;
`