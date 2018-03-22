import w from 'next-page-transition'
import { zoomfade } from 'next-page-transition/dist/presets'

export const fullPageStyle = {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
}

export const wrapper = w({
  ...zoomfade(),
  Container: (props) => {
    const { children } = props
    return (<div style={fullPageStyle}>
      <style jsx global>{`body,html{margin:0;padding:0}`}</style>
      {children}
    </div>)
  },
})
