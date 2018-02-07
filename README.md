# next-page-transition

make page transition easier for next.js | 让next.js的页面切换动画更简单

![screenshot.gif](./screenshot.gif)

## usage | 使用方法

components/wrapper.js

```
import w from 'next-page-transition'
import { zoomfade } from 'next-page-transition/dist/presets'

export const wrapper = w(zoomfade())
```

pages/index.js

```
import Link from 'next/link'
import wrapper from '../components/wrapper'

const Index = () => (<div>
  <p>home page</p>
  <Link href="/about"><a>about</a></Link>
</div>)

export default wrapper(Index)
```

**note** the former page is destoried by next.js so in transition the former page is a fake one without states, to prisist the states you can use [redux](https://github.com/nextjs-boilerplate/next.js-redux-helper), or [next-prisist-state](https://github.com/postor/next-prisist-state)


**note** 在next.js中页面切换时前页已经被next.js销毁，所以做动画的前页面其实是重新创建的，内容的state已经丢失，如果你需要保持state可以使用 [redux](https://github.com/nextjs-boilerplate/next.js-redux-helper), 或者 [next-prisist-state](https://github.com/postor/next-prisist-state)

## test | 本地验证

```
git clone https://github.com/postor/next-page-transition.git
cd next-page-transition
yarn && yarn test
```

then open http://localhost:3000


## params | 参数说明

```
import w from 'next-page-transition'
const wrapper = w({
    duration: 600,           //transition duration | 动画时长
    containerProps: {        //props for container | 容器元素的属性
      style: {                
        position: 'relative'  
      }
    },
    frameProps: {            //props for frame | 页面外框元素的属性
      style: {
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transition: `${duration}ms ease-in-out`,
      }
    },
    transitionStyles: {      //transition styles | 各个状态的style
      exited: { opacity: 0 },
      entering: { opacity: 1, },
      entered: { opacity: 1 },
      exiting: { opacity: 0, },
    },
  })
```
