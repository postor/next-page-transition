import React from 'react'
import App from 'next/app'
import w from 'next-page-transition'
import { zoomfade } from 'next-page-transition/dist/presets'

const wrapper = w(zoomfade())

const transMap = new Map()

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    if (!transMap[Component]) transMap[Component] = wrapper(Component)
    const Trans = transMap[Component]
    return (<div>
      <Trans {...pageProps} />
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
  }
}

export default MyApp