import React, { Component } from 'react'
import routerEvents from 'next-router-events'
import Steps from './Steps'

const isBrowserSide = (typeof window != 'undefined')

export default (config = {}) => {
  const {
    duration = 600,
    containerProps = {
      style: {
        position: 'relative'
      }
    },
    frameProps = {
      style: {
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transition: `${duration}ms ease-in-out`,
      }
    },
    transitionStyles = {
      exited: { opacity: 0 },
      entering: { opacity: 1, },
      entered: { opacity: 1 },
      exiting: { opacity: 0, },
    },
  } = config

  let lastState = {}, lastHtml, currentDom

  const routeChangeStart = () => {
    if (!currentDom) return
    lastHtml = currentDom.innerHTML
  }
  isBrowserSide && routerEvents.on('routeChangeStart', routeChangeStart)

  const wrapper = (Page, pageConfig = {}) => {
    const pageDuration = pageConfig.duration || duration
    const pageFrameProps = pageConfig.frameProps || frameProps
    const pageTransitionStyles = pageConfig.transitionStyles || transitionStyles

    class Trans extends Component {
      constructor(props) {
        super(props)
        this.state = lastState
      }

      componentWillMount() {
        const { page } = this.props
        this.onNewPage(page)
      }

      componentWillReceiveProps(props) {
        const { page } = props
        this.onNewPage(page)
      }

      onNewPage(page) {
        const { Last, Current } = this.state
        if (Current === page) {
          return
        }

        if (!Current) {
          this.setState({
            Current: page,
            showCurrent: false,
            needChange: true,
          })
        } else {
          this.setState({
            Last: Current,
            showLast: true,
            Current: page,
            showCurrent: false,
            needChange: true,
          })
        }
      }

      render() {
        lastState = this.state
        const { Last, showLast = false, Current, showCurrent = false } = this.state
        const { pageProps } = this.props
        const { style = {} } = pageFrameProps

        return (<div {...containerProps}>
          {Last && showLast && <Steps initial={'entered'} steps={[
            {
              timeout: 0,
              val: 'exiting',
            }, {
              timeout: pageDuration,
              val: 'exited',
            },
          ]} onEnd={() => {
            this.setState({ showLast: false })
          }}>
            {(state) => {
              return (
                <div {...pageFrameProps}
                  style={{
                    ...style,
                    ...pageTransitionStyles[state],
                  }}
                  dangerouslySetInnerHTML={{
                    __html: lastHtml,
                  }}
                />
              )
            }}
          </Steps>}
          <Steps initial={Last ? 'exited' : 'entered'} steps={[
            {
              timeout: 0,
              val: Last ? 'entering' : 'entered',
            }, {
              timeout: pageDuration,
              val: 'entered',
            },
          ]}>
            {(state) => {
              return (
                <div {...pageFrameProps}
                  ref={dom => currentDom = dom}
                  style={{
                    ...style,
                    ...pageTransitionStyles[state],
                  }
                  }>
                  <Current {...pageProps} />
                </div>
              )
            }}
          </Steps>
        </div>)
      }
    }

    return ({ pageProps }) => (<Trans page={Page} pageProps={pageProps} />)
  }

  wrapper.destory = () => isBrowserSide&&routerEvents.off('routeChangeStart', routeChangeStart)

  return wrapper
}