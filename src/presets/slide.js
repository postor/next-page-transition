import { wh100, containerProps } from './consts'

export const DIRECTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

const translates = {
  UP: '0,-100%',
  DOWN: '0,100%',
  LEFT: '-100%,0',
  RIGHT: '100%,0',
}

const nexts = {
  UP: DIRECTIONS.DOWN,
  DOWN: DIRECTIONS.UP,
  LEFT: DIRECTIONS.RIGHT,
  RIGHT: DIRECTIONS.LEFT,
}

export const slide = (duration = 600, direction = DIRECTIONS.UP) => {
  const inital = `translate(${translates[direction]})`
  const inside = 'translate(0,0)'
  const outside = `translate(${translates[nexts[direction]]})`
  return {
    duration,
    containerProps,
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms linear`,
        transform: inital,
        ...wh100
      }
    },
    transitionStyles: {
      inital: { transform: inital },
      entering: { transform: inside },
      entered: { transform: inside },
      exiting: { transform: outside },
      exited: { transform: outside },
    },
  }
}

export const slideUp = (duration) => slide(duration, DIRECTIONS.UP)
export const slideDown = (duration) => slide(duration, DIRECTIONS.DOWN)
export const slideLeft = (duration) => slide(duration, DIRECTIONS.LEFT)
export const slideRight = (duration) => slide(duration, DIRECTIONS.RIGHT)