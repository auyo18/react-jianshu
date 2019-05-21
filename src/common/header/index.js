import React, {Component} from 'react'
import axios from 'axios'
import {connect} from "react-redux"
import './index.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryList: [],
      hotQuery: [],
      index: 0,
      count: 10
    }
  }

  async componentDidMount() {
    let {data: {code, data}} = await axios.get('./api/hotQuery.json')
    if (code === 0) {
      this.setState(() => ({queryList: data}), () => {
        this.setHotQuery()
      })
    }
  }

  render() {
    return (
        <nav>
          <div className="container">
            <a className="logo" href="/">
              <img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt=""/>
            </a>
            <div className="menu">
              <p>首页</p>
              <p>下载App</p>
            </div>
            <div className="search">
              <input type="text" placeholder="搜索"/>
              <div className="hot-search-box" ref="hotSearchBox">
                <p className="title">
                  <span className="left">热门搜索</span>
                  <span className="right" onClick={this.changeHotQuery}>换一批</span>
                </p>
                <p className="content">
                  {
                    this.getHotQueryDom()
                  }
                </p>
              </div>
            </div>
          </div>
        </nav>
    )
  }

  getHotQueryDom = () => {
    return this.state.hotQuery.map(item => <span className="item" key={item}>{item}</span>)
  }
  setHotQuery = () => {
    let hotQuery = this.state.queryList.slice(this.state.count * this.state.index, this.state.count * (this.state.index + 1))
    this.setState(() => ({hotQuery}))
  }
  changeHotQuery = () => {
    let index = (this.state.index + 1) % 4
    this.setState(() => ({index}), () => {
      this.setHotQuery()
    })
  }
}

const mapStateToProps = state => {
  return {
    focus: state.header.focus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      const action = {
        type: 'CHANGE_FOCUS'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
