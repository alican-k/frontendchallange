import React from 'react'
import { L_SubHeader } from './styled/Views'
import { Text_BigWhiteDarker } from './styled/Texts'

const SubHeader = ({ pageTitle }) => 
	<L_SubHeader>
		<Text_BigWhiteDarker>
			{pageTitle}
		</Text_BigWhiteDarker>
	</L_SubHeader>

export default SubHeader