import Link from 'next/link'
import wrapper from '../components/wrapper'
import { getStyles } from '../components/custom-zoom-fade'

import { zoomfade } from '../src/presets'

const transitionConfig = zoomfade(600)
//transitionConfig.frameProps.style.transform = 'none'
const newEnterConfig = {
  ...transitionConfig,
  transitionStyles: getStyles(),
}

const About = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(158, 50%, 80%)',
}} className="page-root">
  <p>about page</p>
  <Link href="/"><a>home</a></Link>
</div>)

About.pageName = 'about'
About.getTransitionConfig = (Last, Current) => {
  if (Current.pageName == About.pageName) {
    return newEnterConfig
  }
  return transitionConfig
}

export default wrapper(About)