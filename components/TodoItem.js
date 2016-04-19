import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      // editing: false
    }
  }

  render() {
    const { todo, deleteTodo } = this.props

    let element = (
        <div className="view">
          <label >
            {todo.text}
          </label>
          <button className="destroy"
              onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    
    return (
      <li>
        {element}
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItem
