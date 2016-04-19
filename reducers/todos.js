import { ADD_TODO, DELETE_TODO} from '../constants/ActionTypes'

const initialState = [
  {
    text: '默认文字',
    id: 0
  }
]

// Action 只是描述了有事情发生了这一事实，并没有指明应用如何更新 state。这是 reducer 要做的事情。

// Action就像leader，告诉我们应该做哪些事，并且给我们提供‘资源（就是上面说的数据）’，真正干活的是苦逼的Reducer。。


// Reducer 是一个普通的回调函数。

// 当它被Redux调用的时候会为他传递两个参数State 和 Action。

// Reducer会根据 Action 的type来对旧的 State 进行操作。返回新的State。


//reduce() 遍历数组，在每一项元素后面触发一个回调函数，经过计算返回一个累加的值。
export default function todos(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,  //每次添加，就增加一个最大的id
          text: action.text
        }, 
        ...state     //展开state数组的每一项到当前的数组,否则你只能看到一个数据
      ]

// filter()
// 遍历数组，在每一项元素后面触发一个回调函数，通过判断，保留或移除当前项，最后返回一个新数组。
// state是个任务数组，filter()里面只有一个参数，就是个箭头函数，该函数只有一个参数是todo，
// 也就是数组的每一项元素，箭头后面那个判断语句，如果返回true则保留当前项，反之移除当前项。

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )
   
    default:
      return state
  }
}

// Reducer很简单，但有三点需要注意

// 不要修改 state。都是从action那里拿过来的
// 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
// 如果没有旧的State，就返回一个initialState，这很重要！！！
