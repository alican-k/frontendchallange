import React from 'react'
import { View_Card__Normal, View_Card__Link, View_Card_Thumb, View_Card_Label, View_Card_Image } from './styled/Views'
import { Text_SmallerDarkest, Text_BiggerWhiteDarker } from './styled/Texts'
import { imageUrls } from '../assets'

const Card = ({ imgSource=imageUrls.placeholder, title, href, label }) => {
	const Container = href ? View_Card__Link : View_Card__Normal
	const containerProps = href ? { href } : {}
	return (
		<Container {...containerProps}>
			<View_Card_Image src={imgSource} />
			<Text_SmallerDarkest>{title}</Text_SmallerDarkest>
			{label && (
				<View_Card_Label>
					<Text_BiggerWhiteDarker>{label}</Text_BiggerWhiteDarker>
				</View_Card_Label>
			)}
		</Container>
	)
	
}
export default Card