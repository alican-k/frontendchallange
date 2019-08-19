import { Global, css } from '@emotion/core'

const BaseStyles = () => 
	<Global
		styles={css`
			html, body, h1, h2, a {
				margin: 0;
				padding: 0;
			}
		`}
	/>

export default BaseStyles