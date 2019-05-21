import React from 'react'
import {connect} from 'react-redux'
import actions from './store/actions'

const TodoList = props => {
  const {value, list, changeValue, setList, deleteTodo} = props
  return (
      <div>
        <input type="text" value={value} onChange={changeValue} />
        <button onClick={setList}>提交</button>
        <div>
          {
            list.map((item, index) => (<p key={item} onClick={() => {
              deleteTodo(index)
            }}>{item}</p>))
          }
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    value: state.value,
    list: state.list
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeValue(e) {
      const value = e.target.value
      dispatch(actions.changeValue(value))
    },
    setList() {
      dispatch(actions.setList())
    },
    deleteTodo(index) {
      dispatch(actions.deleteTodo(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
