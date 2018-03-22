import $ from 'jquery'

let translate = {
  x: 0,
  y: 0,
}

export const updateEnterCenter = (event) => {
  console.log(event.pageX, event.pageY)
  const center_x = $(window).width() / 2
  const center_y = $(window).height() / 2
  translate.x = event.pageX - center_x
  translate.y = event.pageY - center_y
}

export const getStyles = () => {
  const entered = () => ({
    transform: `translate(0px,0px) scale(1)`,
    opacity: 1,
  })
  const exited = () => ({
    transform: `translate(${translate.x}px,${translate.y}px) scale(0)`,
    opacity: 0,
  })
  return {
    entering: entered,
    entered,
    exiting: exited,
    exited,
  }
}