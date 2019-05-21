import React, {Component} from 'react'
import TodoItem from './TodoItem'
import store from './store'
import actions from './store/actions'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleChangeStore)
  }

  async componentDidMount() {
    store.dispatch(actions.initList())
  }

  render() {
    return (
        <div>
          <input
              type="text"
              value={this.state.inputValue}
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
    let ret = []
    for (let i = this.state.list.length - 1; i >= 0; i--) {
      ret.push(<TodoItem
          key={this.state.list[i]}
          item={this.state.list[i]}
          index={i}
          deleteTodo={this.deleteTodo}/>)
    }
    return ret
  }

  changeInput = e => {
    let inputValue = e.target.value
    if (!inputValue) return
    store.dispatch(actions.changeInputValue(inputValue))
  }
  handleKeyDown = e => {
    if (e.nativeEvent.keyCode !== 13) return
    this.setList()
  }
  handleClick = () => {
    this.setList()
  }
  setList = () => {
    if (!this.state.inputValue) return
    store.dispatch(actions.changeList())
  }
  deleteTodo = index => {
    store.dispatch(actions.deleteTodo(index))
  }
  handleChangeStore = () => {
    this.setState(store.getState())
  }
}

export default TodoList
