import React, { FunctionComponent } from 'react'
import { Flex, H2 } from './styled'

interface SubHeaderProps {
	pageTitle: string
}

const SubHeader: FunctionComponent<SubHeaderProps> = ({ pageTitle }) => 
	<Flex jCenter className='layout_subheader'>
		<Flex full className='max-width'>
			<H2 className='font--bigWhiteDarker'>
				{pageTitle}
			</H2>
		</Flex>
	</Flex>

export default SubHeader