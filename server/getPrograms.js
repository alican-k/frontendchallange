import { compose, filter, propEq, propSatisfies, lte } from 'ramda'

const getPrograms = programType => compose(
	filter(propEq('programType', programType)),
	filter(propSatisfies(lte(2010), 'releaseYear'))
)

export default getPrograms
