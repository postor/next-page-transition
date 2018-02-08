import { Component } from 'react'
import c from 'next-prisist-state'

const connect = c({
  defaultState: { test: '' }
})

class TestPrisist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    }
  }

  render() {
    const { testProp, setPrisist, prisisted } = this.props
    const { val } = this.state
    return (<div>
      <p>testProp:{JSON.stringify(testProp)}</p>
      <p>prisisted.test:<input value={prisisted.test} onChange={(e) => {
        setPrisist({ test: e.target.value })
      }} /></p>
      <p>prisisted.test:{JSON.stringify(prisisted.test)}</p>
      <p>not prisisted:<input value={val} onChange={(e) => {
        this.setState({ val: e.target.value })
      }} /></p>
    </div>)
  }
}

export default connect(TestPrisist, 'TestPrisist')