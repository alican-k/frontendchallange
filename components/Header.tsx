import React, { FunctionComponent } from 'react'
import { Flex, H1, A } from './styled'

const Header: FunctionComponent = () => 
	<Flex jCenter className='layout_header'>
		<Flex full iCenter className='layout_header_inner max-width'>
			<Flex full>
				<H1 className='font--hugeWhiteDarker'>
					DEMO Streaming
				</H1>
			</Flex>
			<A 
				href='login' 
				className='link link--big link--login'
			>
				Login
			</A>
			<A 
				href='/start-free-trial' 
				className='link link--big link--startTrial'
			>
				Start your free trial
			</A>
		</Flex>
	</Flex>

export default Header