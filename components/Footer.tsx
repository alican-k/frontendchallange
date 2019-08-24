import React, { FunctionComponent } from 'react'
import {Flex, A, P, } from './styled'
import { withProps } from 'recompose'

const Seperator = withProps({ className: 'seperator'})(Flex)
const FooterLink = withProps({ className: 'link link--small'})(A)

const Footer: FunctionComponent = () => 
	<Flex jCenter className='layout_footer'>
		<Flex column full className='max-width'>
			<Flex iCenter className='layout_footer_links'>
				<FooterLink href='/home'>Home</FooterLink>

				<Seperator />
				<FooterLink href='/home'>Terms and Conditions</FooterLink>
				
				<Seperator />
				<FooterLink href='/home'>Privacy Policy</FooterLink>
				
				<Seperator />
				<FooterLink href='/home'>Collection Statement</FooterLink>
				
				<Seperator />
				<FooterLink href='/home'>Help</FooterLink>
				
				<Seperator />
				<FooterLink href='/home'>Manage Account</FooterLink>
			</Flex>
			
			<Flex iCenter className='layout_footer_copyright'>
				<P className='font--tinyGreyLight'>
					Copyright @ 2016 Demo Streaming. All Rights Reserved.
				</P>
			</Flex>
		</Flex>
	</Flex>

export default Footer