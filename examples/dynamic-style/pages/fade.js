import Link from 'next/link'
import TestPrisistList from '../components/TestPrisistList'
import { wrapper, fullPageStyle } from '../components/wrapper'

import { fade } from 'next-page-transition/dist/presets'

const transitionConfig = fade(1000)
transitionConfig.frameProps.style.transform = 'none'

const Fade = () => (<div style={{
  ...fullPageStyle,
  position: 'relative',
  backgroundColor: 'hsl(72, 50%, 80%)',
}} className="page-root">
  <h1>Fade page</h1>
  <p>I fade only</p>
  <Link href="/"><a>home</a></Link>
  <Link href="/about"><a>about</a></Link>
</div>)

Fade.pageName = 'fade'

Fade.getTransitionConfig = () => transitionConfig

export default wrapper(Fade)