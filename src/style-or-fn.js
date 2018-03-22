import isFn from 'lodash.isfunction'

export default (styleOrFn) => {
  if (!styleOrFn) {
    return {}
  }

  if (isFn(styleOrFn)) {
    return styleOrFn()
  }

  return styleOrFn
}