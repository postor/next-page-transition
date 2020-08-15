import React, { Component } from 'react'
import routerEvents from 'next-router-events'
import Steps from './Steps'
import styleOrFn from './style-or-fn'

const isBrowserSide = (typeof window != 'undefined')

const w = (config = {}) => {
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
    Container = (props) => (<div {...props} />)
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

      // componentWillMount() {
      //   const { page } = this.props
      //   this.onNewPage(page)
      // }

      // componentWillReceiveProps(props) {
      //   const { page } = props
      //   this.onNewPage(page)
      // }

      static getDerivedStateFromProps(props, state) {
        const { page } = props
        const { Last, Current } = state
        if (Current === page) {
          return null
        }

        if (!Current) {
          return {
            Current: page,
            showCurrent: false,
            needChange: true,
          }
        }

        return {
          Last: Current,
          showLast: true,
          Current: page,
          showCurrent: false,
          needChange: true,
        }
      }


      render() {
        lastState = this.state
        const { Last, showLast = false, Current = () => ([]), showCurrent = false } = this.state
        const { pageProps } = this.props
        const { style = {} } = pageFrameProps

        const fromConfig = Last && Last.getTransitionConfig && Last.getTransitionConfig(Last, Current) || {}
        const toConfig = Current && Current.getTransitionConfig && Current.getTransitionConfig(Last, Current) || {}

        return (<Container {...containerProps}>
          {Last && showLast && <Steps initial={'entered'} steps={[
            {
              timeout: 0,
              val: 'exiting',
            }, {
              timeout: (typeof toConfig.duration === 'number' && toConfig.duration) || pageDuration,
              val: 'exited',
            },
          ]} onEnd={() => {
            this.setState({ showLast: false })
          }}>
            {(state) => {
              const fromStyle = fromConfig.frameProps && fromConfig.frameProps.style || {}
              // console.log(state, fromStyle)
              return (
                <div {...(fromConfig.frameProps || pageFrameProps)}
                  style={{
                    ...styleOrFn(style),
                    ...styleOrFn(fromStyle),
                    ...styleOrFn((fromConfig.transitionStyles || pageTransitionStyles)[state]),
                  }}
                  dangerouslySetInnerHTML={{
                    __html: lastHtml,
                  }}
                />
              )
            }}
          </Steps>}
          <Steps initial={Last ? 'inital' : 'entered'} steps={[
            {
              timeout: 0,
              val: Last ? 'entering' : 'entered',
            }, {
              timeout: (typeof toConfig.duration === 'number' && toConfig.duration) || pageDuration,
              val: 'entered',
            },
          ]}>
            {(state) => {
              const toStyle = toConfig.frameProps && toConfig.frameProps.style || {}
              // console.log(state, styleOrFn(style), styleOrFn(toStyle), {
              //   ...styleOrFn(style),
              //   ...styleOrFn(toStyle),
              //   ...styleOrFn((toConfig.transitionStyles || pageTransitionStyles)[state]),
              // })
              return (
                <div {...(toConfig.frameProps || pageFrameProps)}
                  ref={dom => currentDom = dom}
                  style={{
                    ...styleOrFn(style),
                    ...styleOrFn(toStyle),
                    ...styleOrFn((toConfig.transitionStyles || pageTransitionStyles)[state]),
                  }}>
                  <Current {...pageProps} />
                </div>
              )
            }}
          </Steps>
        </Container>)
      }
    }

    return ({ pageProps }) => (<Trans page={Page} pageProps={pageProps} />)
  }

  wrapper.destory = () => isBrowserSide && routerEvents.off('routeChangeStart', routeChangeStart)

  return wrapper
}

export default w