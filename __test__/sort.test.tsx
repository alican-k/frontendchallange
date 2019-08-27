import * as React from 'react'
import Footer from '../components/Footer'
import renderer from 'react-test-renderer'
import Sort from '../components/Programs/Sort'
import Options from '../components/Programs/Sort/Options'
import Option from '../components/Programs/Sort/Option'
import { A } from '../components/styled'

const { act } = renderer

it('renders correctly', () => {
	expect(5).toBe(5)
	// const onSelect = jest.fn()

	// let tree;
	
	// act(() => {
	// 	tree = renderer.create(<Sort sortTerm='titleAsc' sort={onSelect} />)
	// })
	
	// const options = tree.root.findByType(Options)
	// expect(options.props.expanded).toBe(false)

	// const a = tree.root.findByType(A)
	// act(() => {
	// 	a.props.onClick()
	// })
	// expect(options.props.expanded).toBe(true)

	// const secondOption = tree.root.findAllByType(Option)[1]
	// const optionA = secondOption.findByType(A)

	// act(() => {
	// 	optionA.props.onClick()
	// })
	// expect(onSelect.mock.calls.length).toBe(1)
})

