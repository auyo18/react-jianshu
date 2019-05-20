import React, {Component} from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: '',
      list: []
    }
  }

  changeInput = (e) => {
    this.setState({
      todo: e.target.value
    })
  }
  handleClick = () => {
    this.setState({
      todo: '',
      list: [this.state.todo, ...this.state.list]
    })
  }

  render() {
    return (
        <div>
          <input type="text" value={this.state.todo} onChange={this.changeInput}/>
          <button onClick={this.handleClick}>提交</button>
          <div className="list">
            {
              this.state.list.map((item, index) => <p key={index}>{item}</p>)
            }
          </div>
        </div>
    )
  }
}

export default TodoList
