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

**note** Do not use `Router.onRouteChangeStart=xxx` in your code, use `routerEvents.on('routeChangeStart', xxx)` refer [next-router-events](https://github.com/jaydenseric/next-router-events) | 不要在你的代码中使用 `Router.onRouteChangeStart=xxx` 这样的代码，如果需要绑定next.js的路由事件请使用`routerEvents.on('routeChangeStart', xxx)`，详情参考 [next-router-events](https://github.com/jaydenseric/next-router-events) 

**note** To clean the hook created by this package (most cases you do not need to), you can use `wrapper.destory()` to unregister | 要清理前面提到的router事件绑定（大部分时候应该是不需要清理的），你可以使用 `wrapper.destory()` 来清理


## test | 本地验证

```
git clone https://github.com/postor/next-page-transition.git
cd next-page-transition/example
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


## custom transition for single page | 不同页面使用不同的动画

use `getTransitionConfig` function | 给组件添加 `getTransitionConfig` 方法  

```
import wrapper from '../components/wrapper'
import { fade } from 'next-page-transition/dist/presets'

const transitionConfig = fade(1000)
transitionConfig.frameProps.style.transform = 'none'

const About = () => (<div>
  <p>about page</p>
</div>)

About.getTransitionConfig = () => transitionConfig

export default wrapper(About)
```

`getTransitionConfig` will get called with two params(from page component and to page component) when navigation happen

当导航发生时`getTransitionConfig` 会被调用并且传入两个参数（上一个页面组件和新的页面组件）

```
About.getTransitionConfig = (Last,Current) => {
  if(Last && Last === About){
    console.log('leaving about and entering',Current)
  }else if(Current === About){
    console.log('entering about and leaving',Last)
  }
}
```

## custom container | 自定义的容器

you may need something do not animate with page, or something like template, for example side-nav-bar

你可能会需要一些不跟着页面做动画的东西，或者像是类似模板概念的东西，比如说 侧边导航条

```
import w from 'next-page-transition'
import { zoomfade } from 'next-page-transition/dist/presets'
import SideBar from './SideBar'

const wrapper = w({
  ...zoomfade(),
  Container: (props) => {
    const { children } = props
    return (<div style={{
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}>
      {children}
      <SideBar />
    </div>)
  },
})
```

`Container` by default is a div, where `props` come from `containerProps` in config

```
(props) => (<div {...props} />)
```

you can refer [wrapper.js](./example/components/wrapper.js) and run example for real code and result