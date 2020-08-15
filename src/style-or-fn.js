import isFn from 'lodash.isfunction'

const sof = (styleOrFn) => {
  if (!styleOrFn) {
    return {}
  }

  if (isFn(styleOrFn)) {
    return styleOrFn()
  }

  return styleOrFn
}

export default sof