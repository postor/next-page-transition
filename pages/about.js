import Link from 'next/link'
import TestPrisistList from '../components/TestPrisistList'
import wrapper from '../components/wrapper'

import { fade } from '../src/presets'

const transitionConfig = fade(1000)
transitionConfig.frameProps.style.transform = 'none'

const About = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(158, 50%, 80%)',
}} className="page-root">
  <p>about page</p>
  <TestPrisistList />
  <Link href="/"><a>home</a></Link>
</div>)


About.getTransitionConfig = () => transitionConfig

export default wrapper(About)