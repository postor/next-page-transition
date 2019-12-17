import { wh100, containerProps } from './consts'

export const zoomfade = (duration = 600) => {
  const entered = { transform: 'scale(1)', opacity: 1 }
  const exited = { transform: 'scale(0)', opacity: 0 }
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        ...exited,
        ...wh100
      }
    },
    transitionStyles: {
      inital: exited,
      entering: entered,
      entered,
      exiting: exited,
      exited,
    },
  }
}