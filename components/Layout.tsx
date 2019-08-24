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
			<Flex column iStretch full className='layout_content'>
				<Flex row full jCenter>
					<Flex row full className='max-width'>
						{ children }
					</Flex>
				</Flex>
			</Flex>
			<Footer />
		</Flex>

export default Layout