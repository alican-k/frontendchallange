import React, { FunctionComponent } from 'react'
import classnames from 'classnames'
import styles from '../../styles'

interface TextProps {
	huge?: boolean
	bigger?: boolean
	big?: boolean
	normal?: boolean
	small?: boolean
	smaller?: boolean
	tiny?: boolean
	className?: string
}

const prepare = (props: TextProps): string => {
	const { 
		huge, bigger, big, normal, small, smaller, tiny,
		className='' 
	} = props
	return classnames({
		[styles['font']]: true,
		[styles['font--huge']]: huge,
		[styles['font--bigger']]: bigger,
		[styles['font--big']]: big,
		[styles['font--normal']]: normal,
		[styles['font--small']]: small,
		[styles['font--smaller']]: smaller,
		[styles['font--tiny']]: tiny,
		[className]: true
	})
}

export const H1: FunctionComponent<TextProps> = ({children, ...props}) => {
	const cs = prepare(props)
	return <h1>{children}</h1>
}
export const H2: FunctionComponent<TextProps> = ({children, ...props}) => {
	const cs = prepare(props)
	return <h2>{children}</h2>
}
export const P: FunctionComponent<TextProps> = ({children, ...props}) => {
	const cs = prepare(props)
	return <p>{children}</p>
}
export const Span: FunctionComponent<TextProps> = ({children, ...props}) => {
	const cs = prepare(props)
	return <span>{children}</span>
}