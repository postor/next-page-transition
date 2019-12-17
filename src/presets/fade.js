import { wh100, containerProps } from './consts'

export const fade = (duration = 600) => {
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
        ...wh100
      }
    },
    transitionStyles: {
      inital: { opacity: 0 },
      entering: { opacity: 1, },
      entered: { opacity: 1 },
      exiting: { opacity: 0, },
      exited: { opacity: 0 },
    },
  }
}