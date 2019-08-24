import React, { FunctionComponent } from 'react'

interface Text {
	className?: string
}

export const H1:FunctionComponent<Text> = 
	({children, ...props}) => <h1 {...props}>{children}</h1>

export const H2:FunctionComponent<Text> = 
	({children, ...props}) => <h2 {...props}>{children}</h2>

export const Span:FunctionComponent<Text> = 
	({children, ...props}) => <span {...props}>{children}</span>

export const P:FunctionComponent<Text> = 
	({children, ...props}) => <p {...props}>{children}</p>

