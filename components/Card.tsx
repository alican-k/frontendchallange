import React, { FunctionComponent } from 'react'
import { Flex, A, Span } from './styled'
import { imageUrls } from '../assets'

interface CardProps {
	imgSource?: string
	title: string
	href?: string
	label?: string
}

const Card: FunctionComponent<CardProps> = 
	({ imgSource=imageUrls.placeholder, title, href, label }) => {
		const Container = href ? A : 'div'
		const containerProps = href ? { href } : {}

		return (
			<Container {...containerProps}>
				<Flex column className='card'>
					<img src={imgSource} className='card_image' />
					<Span className='font--smallerDarkest'>{title}</Span>
					{label && (
						<Flex jCenter className='card_label'>
							<Span className='font--biggerWhiteDarker'>{label}</Span>							
						</Flex>
					)}
				</Flex>
			</Container>
		)
	}

export default Card