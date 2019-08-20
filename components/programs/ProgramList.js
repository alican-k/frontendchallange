import React from 'react'
import { connect } from 'react-redux'
import { View_CardList } from '../styled/Views'
import Card from '../Card'

const ProgramList = ({ programs, load, error }) => 
	load === 'error'
		? <p>error</p>
		: load === 'loading'
			? <p>loading</p>
			: load === 'loaded' && programs.length === 0 
				? <p>no result</p>
				: (
					<View_CardList>
						{programs.map(program => {
							const {title, images: {poster: { url }}} = program
							return <Card key={url} title={title} imgSource={url} />
						})}
					</View_CardList>
				)

export default connect(
	({ programs, load, error }) => ({ programs, load, error }),
	null
)(ProgramList)