import React, {Component} from 'react'

class TodoItem extends Component {
  deleteTodo = index => {
    this.props.deleteTodo(index)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.item !== this.props.item
  }

  render() {
    console.log('child render')
    let {item, index} = this.props
    return (
        <p onClick={() => {
          this.deleteTodo(index)
        }}>{item}</p>
    )
  }
}

export default TodoItem
