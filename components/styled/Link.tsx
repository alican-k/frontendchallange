import React, { FunctionComponent, MouseEvent } from 'react'
import Link from 'next/link'

interface LinkProps {
	className?: string
	href?: string 
	onClick?: any
}

const A:FunctionComponent<LinkProps> = ({children, href, ...props}) => 
	href
		? (
			<Link href={href}>
				<a {...props}>{children}</a>
			</Link>
		)
		: (
			<a {...props}>{children}</a>
		)

export default A