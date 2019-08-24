import React, { FunctionComponent } from 'react'
import { Flex, H2 } from './styled'

interface SubHeaderProps {
	pageTitle: string
}

const SubHeader: FunctionComponent<SubHeaderProps> = ({ pageTitle }) => 
	<Flex iCenter className='layout_subheader'>
		<H2 className='font--bigWhiteDarker'>
			{pageTitle}
		</H2>
	</Flex>

export default SubHeader