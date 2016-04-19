import { combineReducers } from 'redux'
import todos from './todos'

// 真正开发项目的时候State会涉及很多功能，在一个Reducer处理所有逻辑会非常混乱，，
// 所以需要拆分成多个小Reducer，每个Reducer只处理它管理的那部分State数据。然后在由一个主rootReducers来专门管理这些小Reducer。
// Redux提供了一个方法 combineReducers 专门来管理这些小Reducer。

// 将多个reducers变为1个，比如我有 todos1，todos2，那么就这样写 const rootReducer = combineReducers({todos1,todos2});

const rootReducer = combineReducers({
  todos
})

export default rootReducer
