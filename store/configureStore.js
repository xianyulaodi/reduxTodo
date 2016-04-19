import { createStore } from 'redux'
import rootReducer from '../reducers'


// 一个应用只有一个Store。一个应用只有一个Store。一个应用只有一个Store。

// 重要的事情放在前面说，而且说三遍。。

// 上面章节中，我们学会了使用 action 来描述“发生了什么”，和使用 reducers 来根据 action 更新 state 的用法。

// Store 就是把它们联系到一起的对象。Store 有以下职责：

// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器。


// Store提供了一些方法。让我们很方便的操作数据。

// 我们不用关心Reducer和Action是怎么关联在一起的，Store已经帮我们做了这些事。。

// store有四个方法。
// getState： 获取应用当前State。
// subscribe：添加一个变化监听器。
// dispatch：分发 action。修改State。
// replaceReducer：替换 store 当前用来处理 state 的 reducer。
// 常用的是dispatch，这是修改State的唯一途径，使用起来也非常简单，他看起来是这样的~

export default function configureStore(initialState) {
// 创建Store非常简单。createStore 有两个参数，Reducer 和 initialState。  将reducer的数据更新拿过来，然后如果没有更新的话就传一个默认值
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
