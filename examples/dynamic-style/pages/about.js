import Link from 'next/link'
import { zoomfade } from 'next-page-transition/dist/presets'

import TestPrisistList from '../components/TestPrisistList'
import { wrapper, fullPageStyle } from '../components/wrapper'
import { getStyles } from '../components/custom-zoom-fade'

const transitionConfig = zoomfade(3000)
//transitionConfig.frameProps.style.transform = 'none'
const newEnterConfig = {
  ...transitionConfig,
  transitionStyles: getStyles(),
}

const About = () => (<div style={{
  ...fullPageStyle,
  position: 'relative',
  backgroundColor: 'hsl(158, 50%, 80%)',
}} className="page-root">
  <p>about page</p>
  <TestPrisistList />
  <Link href="/"><a>home</a></Link>
  <Link href="/fade"><a>fade</a></Link>
</div>)

About.pageName = 'about'
About.getTransitionConfig = (Last, Current) => {
  if (Current.pageName == About.pageName) {
    return newEnterConfig
  }
  return transitionConfig
}

export default wrapper(About)