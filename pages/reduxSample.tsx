import React from 'react'
import { connect } from 'react-redux'
import { tick } from '../store/actions'
import Examples from '../components/examples'
import { NextPage } from 'next'

interface IndexProps {
	tick: typeof tick
}

let timer

class Index extends React.Component<IndexProps> {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
    reduxStore.dispatch(tick({isServer}))

    return {}
  }

  componentDidMount () {
    // DISPATCH ACTIONS HERE FROM `mapDispatchToProps`
    // TO TICK THE CLOCK
		// this.timer = setInterval(() => this.props.tick({isServer: false}), 1000)
		timer = setInterval(() => this.props.tick({isServer: false}), 1000)
  }

  componentWillUnmount () {
		// clearInterval(this.timer)
		clearInterval(timer)
  }

  render () {
    return <Examples />
  }
}

export default connect(
  null,
  { tick }
)(Index)
