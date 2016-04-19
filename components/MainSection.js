import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'



class MainSection extends Component {

  componentDidMount(){
    const { todos, actions } = this.props;
    console.log(todos);
  }

  render() {
    // todos就是我们的所有数据
    const { todos, actions } = this.props
    const filteredTodos = todos
    
    return (
      <section className="main">
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
