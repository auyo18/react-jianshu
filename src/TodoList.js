import React, {Component} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      list: []
    }
  }

  render() {
    return (
        <div>
          <input
              type="text"
              value={this.state.todo}
              onChange={this.changeInput}
              onKeyDown={this.handleKeyDown}/>
          <button onClick={this.handleClick}>提交</button>
          <div className="list">
            {
              this.getTodoItem()
            }
          </div>
        </div>
    )
  }

  getTodoItem = () => {
    return this.state.list.map(item => <TodoItem key={item} item={item} deleteTodo={this.deleteTodo}/>)
  }

  changeInput = e => {
    let todo = e.target.value
    if (!todo) return
    this.setState(() => ({
      todo
    }))
  }
  handleKeyDown = e => {
    if (e.nativeEvent.keyCode !== 13) return
    this.setList()
  }
  handleClick = () => {
    this.setList()
  }
  setList = () => {
    if (!this.state.todo) return
    this.setState(state => ({
      todo: '',
      list: [state.todo, ...state.list]
    }))
  }
  deleteTodo = index => {
    let list = this.state.list.slice()
    list.splice(index, 1)
    this.setState(() => ({
      list
    }))
  }
}

export default TodoList
