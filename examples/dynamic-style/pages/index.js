import Link from 'next/link'
import Router from 'next/router'
import TestPrisist from '../components/TestPrisist'
import { wrapper, fullPageStyle } from '../components/wrapper'
import { updateEnterCenter } from '../components/custom-zoom-fade'

const Index = () => (<div style={{
  ...fullPageStyle,
  position: 'relative',
  backgroundColor: 'hsl(269, 50%, 80%)',
}} className="page-root">
  <p>home page</p>
  <TestPrisist testProp={true} />
  <a
    onClick={(e) => {
      updateEnterCenter(e)
      Router.push('/about')
    }}
    style={{
      textDecoration: 'underline',
      color: 'red',
    }}
  >About from here</a>
  <br />
  <Link href="/fade"><a>fade</a></Link>
</div>)

Index.pageName = 'index'

export default wrapper(Index)