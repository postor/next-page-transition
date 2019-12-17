import { wh100, containerProps } from './consts'

const VERTICAL = "vertical"

export const flip = (duration = 600, direction = VERTICAL) => {
  const flipout = direction === VERTICAL ? 'scale(1,0)' : 'scale(0,1)'
  const stay = 'scale(1,1)'
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        transform: flipout,
        ...wh100
      }
    },
    transitionStyles: {
      inital: { transform: flipout, },
      entering: { transform: stay, },
      entered: { transform: stay, },
      exiting: { transform: stay, },
      exited: { transform: flipout, },
    },
  }
}

export const flipVertical = (duration) => flip(duration, VERTICAL)
export const flipHorizontal = (duration) => flip(duration, 'horizontal')