import React from 'react'
import BaseCss from '../commonStyles/base'
import { L_Root, L_Content } from './styled/Views'
import Header from './Header'
import Footer from './Footer'
import SubHeader from './SubHeader'

const Layout = ({ pageTitle, children }) => 
	<L_Root>
		<BaseCss />
		<Header />
		<SubHeader pageTitle={pageTitle} />
		<L_Content>
			{ children }
		</L_Content>
		<Footer />
	</L_Root>

export default Layout