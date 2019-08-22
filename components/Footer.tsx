import React, { FunctionComponent } from 'react'
import { L_Footer, View_RowStartCenter, View_Seperator } from './styled/Views'
import { Text_TinyGreyLight } from './styled/Texts'
import { Link_Footer } from './styled/Links'

const Header: FunctionComponent = () => 
	<L_Footer>
		<View_RowStartCenter>
			<Link_Footer href='/home'>Home</Link_Footer>
			<View_Seperator />
			<Link_Footer href='/home'>Terms and Conditions</Link_Footer>
			<View_Seperator />
			<Link_Footer href='/home'>Privacy Policy</Link_Footer>
			<View_Seperator />
			<Link_Footer href='/home'>Collection Statement</Link_Footer>
			<View_Seperator />
			<Link_Footer href='/home'>Help</Link_Footer>
			<View_Seperator />
			<Link_Footer href='/home'>Manage Account</Link_Footer>
		</View_RowStartCenter>
		<View_RowStartCenter>
			<Text_TinyGreyLight>
				Copyright @ 2016 Demo Streaming. All Rights Reserved.
			</Text_TinyGreyLight>
		</View_RowStartCenter>
	</L_Footer>

export default Header