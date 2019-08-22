import React from 'react'
import Layout from '../components/Layout'
import Programs from '../components/Programs'

const Movies = () => 
	<Layout pageTitle='Popular Movies'>
		<Programs programType='movie' />
	</Layout>

export default Movies