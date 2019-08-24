import React from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { Flex } from '../components/styled'

const Index = () => 
	<Layout pageTitle='Popular Titles'>
		<Flex wrap className='cards'>
			<Card title='Popular Series' label='SERIES' href='/series' />
			<Card title='Popular Movies' label='MOVIES' href='/movies' />
		</Flex>
	</Layout>

export default Index