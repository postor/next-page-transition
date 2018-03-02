import w from 'next-page-transition'
import { zoomfade } from 'next-page-transition/dist/presets'
import SideBar from './SideBar'

const wrapper = w(zoomfade())

export default (Page) => {
  const Wrapper = () => (<div>
    <div className="page-root">
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
    </div>
    <SideBar />
  </div>)
  return wrapper(Wrapper)
} 