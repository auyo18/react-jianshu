import React, {Component} from 'react'

class TodoItem extends Component {
  deleteTodo = index => {
    console.log(index)
    this.props.deleteTodo(index)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.item !== this.props.item || nextProps.index !== this.props.index
  }

  render() {
    let {item, index} = this.props
    return (
        <p onClick={() => {
          this.deleteTodo(index)
        }}>{item}</p>
    )
  }
}

export default TodoItem
