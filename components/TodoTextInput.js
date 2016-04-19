import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  // 上面的写法getInitialState的写法是一样一样滴
  // getInitialState() {
  //     return {
  //       text: this.props.text || ''
  //     };
  // }

  handleSubmit(e) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
    }
  }

  handleChange(e) {
    
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <input className={classnames('edit','new-todo')}
        type="text"
        placeholder="请输入您的内容"
        autoFocus="true"
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    )
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput
