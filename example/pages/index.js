import Link from 'next/link'
import TestPrisist from '../components/TestPrisist'
import wrapper from '../components/wrapper'

const Index = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(269, 50%, 80%)',
}} className="page-root">
  <p>home page</p>
  <TestPrisist testProp={true} />
  <Link href="/about"><a>about</a></Link>
  <Link href="/fade"><a>fade</a></Link>
</div>)

Index.pageName = 'index'

export default wrapper(Index)