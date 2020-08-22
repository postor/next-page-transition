import Link from 'next/link'
import wrapper from '../components/wrapper'

const Index = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(269, 50%, 80%)',
}} className="page-root">
  <p>home page</p>
  <Link href="/about"><a>about</a></Link>
  <Link href="/fade"><a>fade</a></Link>
</div>)

Index.pageName = 'index'

export default wrapper(Index)