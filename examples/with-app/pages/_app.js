import React from 'react'
import App from 'next/app'
import wrapper from '../wrapper'

const transMap = new Map()

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    if (!transMap[Component]) transMap[Component] = wrapper(Component)
    const Trans = transMap[Component]
    return <Trans {...pageProps} />
  }
}

export default MyApp