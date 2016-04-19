import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

// connect 会把State和dispatch转换成props传递给子组件。它看起来是下面这样的：


// 它会让我们传递一些参数：mapStateToProps，mapDispatchToProps，mergeProps（可不填）和React组件。

// 之后这个方法会进行一系列的黑魔法，把state，dispatch转换成props传到React组件上，返回给我们使用。

// mapStateToProps：

// mapStateToProps 是一个普通的函数。

// 当它被connect调用的时候会为它传递一个参数State。

// mapStateToProps需要负责的事情就是 返回需要传递给子组件的State，返回需要传递给子组件的State，
// 返回需要传递给子组件的State，（重要的事情说三遍。。。。）然后connect会拿到返回的数据写入到react组件中，然后组件中就可以通过props读取数据啦~~~~


class App extends Component {
  render() {
     // todos就是我们的所有数据,这些数据时从哪里来的呢，在index.js里面的store注入进来的
    const { todos, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

// 但如果我有很多个Action，总不能手动一个一个加。Redux提供了一个方法叫 bindActionCreators。

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

// 就是通过mapDispatchToProps这个方法，把actionCreator变成方法赋值到props，每当调用这个方法，就会更新State。
// 之前说过，store有一个store.dispatch方法，就是用这个来将数据返回给view滴


