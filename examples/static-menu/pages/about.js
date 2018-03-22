import Link from 'next/link'
import TestPrisistList from '../components/TestPrisistList'
import wrapper from '../components/wrapper'

const About = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(158, 50%, 80%)',
}} className="page-root">
  <p>about page</p>
  <TestPrisistList />
  <Link href="/"><a>home</a></Link>
  <Link href="/fade"><a>fade</a></Link>
</div>)

About.pageName = 'about'

export default wrapper(About)