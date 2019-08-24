import React, { FunctionComponent } from 'react'
import { Flex, H1, A } from './styled'

const Header: FunctionComponent = () => 
	<Flex iCenter className='layout_header'>
		<Flex iCenter full>
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

export default Header