import React, { FunctionComponent } from 'react'
import Header from './Header'
import Footer from './Footer'
import SubHeader from './SubHeader'
import { Flex } from './styled'

interface LayoutProps {
	pageTitle: string
}

const Layout: FunctionComponent<LayoutProps> = ({ pageTitle, children }) => 
	
		<Flex column className='layout'>
			<Header />
			<SubHeader pageTitle={pageTitle} />
			<Flex column full className='layout_content'>
				{ children }
			</Flex>
			<Footer />
		</Flex>

export default Layout