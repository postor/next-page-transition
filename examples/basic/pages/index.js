import Link from 'next/link'
import TestPrisist from '../components/TestPrisist'
import wrapper from '../components/wrapper'

const Index = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(269, 50%, 80%)',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}} className="page-root">
  <p>home page</p>
  <TestPrisist testProp={true} />
  <Link href="/about"><a>about</a></Link>
  <style jsx global>{`html,body{margin:0;padding:0;}`}</style>
</div>)

export default wrapper(Index)