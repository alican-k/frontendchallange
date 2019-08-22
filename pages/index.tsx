import React from 'react'
import Layout from '../components/Layout'
import { L_Content, View_CardList } from '../components/styled/Views'
import Card from '../components/Card'

const Index = () => 
	<Layout pageTitle='Popular Titles'>
		<View_CardList>
			<Card title='Popular Series' label='SERIES' href='/series' />
			<Card title='Popular Movies' label='MOVIES' href='/movies' />
		</View_CardList>
	</Layout>

export default Index