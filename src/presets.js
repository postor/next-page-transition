export const fade = (duration = 600) => {
  return {
    duration,
    containerProps: {
      style: {
        position: 'relative'
      }
    },
    frameProps: {
      style: {
        position: 'absolute',
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
      }
    },
    transitionStyles: {
      entering: { opacity: 1, },
      entered: { opacity: 1 },
      exiting: { opacity: 0, },
      exited: { opacity: 0 },
    },
  }
}

export const zoom = (duration = 600) => {
  return {
    duration,
    containerProps: {
      style: {
        position: 'relative'
      }
    },
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        transform: 'scale(0)',
      }
    },
    transitionStyles: {
      entering: { transform: 'scale(1)' },
      entered: { transform: 'scale(1)' },
      exiting: { transform: 'scale(0)' },
      exited: { transform: 'scale(0)' },
    },
  }
}


export const zoomfade = (duration = 600) => {
  const entered = { transform: 'scale(1)', opacity: 1 }
  const exited = { transform: 'scale(0)', opacity: 0 }
  return {
    duration,
    containerProps: {
      style: {
        position: 'relative'
      }
    },
    frameProps: {
      style: {
        position: 'absolute',
        transition: `${duration}ms ease-in-out`,
        ...exited,
      }
    },
    transitionStyles: {
      entering: entered,
      entered,
      exiting: exited,
      exited,
    },
  }
}