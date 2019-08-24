import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/withReduxStore'
import { Provider } from 'react-redux'

import '../styles/flex.css'
import '../styles/font.css'
import '../styles/layout.css'
import '../styles/link.css'
import '../styles/card.css'
import '../styles/font.css'
import '../styles/misc.css'
import '../styles/inputBar.css'
import styles from '../styles'

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
			<div style={styles.constants}>
				<Container>
					<Provider store={reduxStore}>
						<Component {...pageProps} />
					</Provider>
				</Container>
			</div>
    )
  }
}

export default withReduxStore(MyApp)
