import { wh100, containerProps } from './consts'

export const zoomrotate = (duration = 600) => {
  const inside = { transform: 'scale(1) rotate(0)' }
  const outside = { transform: 'scale(0) rotate(360deg)' }
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        ...outside,
        ...wh100
      }
    },
    transitionStyles: {
      inital: outside,
      entering: inside,
      entered: inside,
      exiting: inside,
      exited: inside,
    },
  }
}