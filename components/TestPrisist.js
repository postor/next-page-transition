import c from 'next-prisist-state'

let i = 1
const connect = c({
  defaultState: { test: '', i: i++ }
})

const TestPrisist = ({ testProp, setPrisist, prisisted }) => {
  return (<div>
    <p>testProp:{JSON.stringify(testProp)}</p>
    <p>prisisted.test:<input value={prisisted.test} onChange={(e) => {
      setPrisist({ test: e.target.value })
    }} /></p>
    <p>prisisted.test:{JSON.stringify(prisisted.test)}</p>
  </div>)
}

export default connect(TestPrisist, 'TestPrisist')