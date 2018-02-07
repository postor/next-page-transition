import React, { Component, Children } from 'react'

class Steps extends Component {
  constructor(props) {
    super(props)
    this._toClean = []
    const { initial } = props
    this.state = {
      val: initial,
    }

  }

  componentDidMount() {
    const { steps = [], onEnd = () => { } } = this.props
    let t = 0
    steps.forEach(({ timeout, val }, i) => {
      t += timeout
      const h = setTimeout(() => {
        this.setState({ val })
        if (i === steps.length - 1) {
          onEnd()
        }
      }, t)
      this._toClean.push(() => clearTimeout(h))
    })
  }

  componentWillUnmount() {
    this._toClean.forEach(x => x())
  }

  render() {
    const { val } = this.state
    const { children } = this.props
    return children(val) || ''
  }
}

export default Steps
