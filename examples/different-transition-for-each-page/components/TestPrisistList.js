import c from 'next-prisist-state'
const connect = c({
  defaultState: { test: '' }
})

const InputItem = ({ testProp, setPrisist, prisisted }) => {
  return (<div>
    <p>prisisted.test:<input value={prisisted.test} onChange={(e) => {
      setPrisist({ test: e.target.value })
    }} /></p>
  </div>)
}

const TestPrisistList = ({ testProp, setPrisist, prisisted }) => {
  return (<div>
    {[1, 2, 3, 4].map((i) => {
      const InputItemK = connect(InputItem, `InputItem-${i}`)
      return (<InputItemK key={i} />)
    })}
  </div>)
}

export default TestPrisistList