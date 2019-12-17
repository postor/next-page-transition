import { wh100, containerProps } from './consts'

export const zoom = (duration = 600) => {
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        transform: 'scale(0)',
        ...wh100
      }
    },
    transitionStyles: {
      inital: { transform: 'scale(0)' },
      entering: { transform: 'scale(1)' },
      entered: { transform: 'scale(1)' },
      exiting: { transform: 'scale(0)' },
      exited: { transform: 'scale(0)' },
    },
  }
}