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
    return (<Trans {...pageProps} />)
  }
}

export default MyApp