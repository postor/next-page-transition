import w from '../src/wrapper'
import { zoomfade } from '../src/presets'

const wrapper = w(zoomfade())

export default (Page) => {
  const Wrapper = () => (<div className="page-root">
    <Page />
    <style jsx global>{`
      .page-root {        
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    
      body,html {
        width: 100vw;
        height: 100vh;
        position: absolute;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>)
  Wrapper.getTransitionConfig = () => {
    if (Page.getTransitionConfig) {
      return Page.getTransitionConfig()
    }
  }
  return wrapper(Wrapper)
} 