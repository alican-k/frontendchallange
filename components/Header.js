import React from 'react'
import { L_Header, View_SiteTitle } from './styled/Views'
import { Text_HugeWhiteDarker } from './styled/Texts'
import { Link_Login, Link_StartTrial } from './styled/Links'

const Header = () => 
	<L_Header>
		<View_SiteTitle>
			<Text_HugeWhiteDarker>
				DEMO Streaming
			</Text_HugeWhiteDarker>
		</View_SiteTitle>
		<Link_Login href='/login'>
			Login
		</Link_Login>
		<Link_StartTrial href='/start-free-trial'>
			Start your free trial
		</Link_StartTrial>
	</L_Header>

export default Header