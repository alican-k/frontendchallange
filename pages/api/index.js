import getPrograms from '../../server/getPrograms'
import sampleData from '../../server/sampleData'

export default (req, res) => {
	res.setHeader('Content-Type', 'application/json')
	const entries = getPrograms(req.query.type)(sampleData.entries)
  res.statusCode = 200
  res.end(JSON.stringify({ data: entries }))
}

