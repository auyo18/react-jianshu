import React, {Component} from 'react'
import {connect} from "react-redux"
import {getHotQueryAction, getChangePageAction} from "./store/actionCreators"
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

  render() {
    return (
        <nav>
          <div className="container">
            <a className="logo" href="/">
              <img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="" />
            </a>
            <div className="menu">
              <p>首页</p>
              <p>下载App</p>
            </div>
            <div className="search">
              <input type="text" placeholder="搜索" onFocus={() => {
                this.props.setHotQuery(this.props.hotQueryList)
              }} />
              <div className="hot-search-box" ref="hotSearchBox">
                <p className="title">
                  <span className="left">热门搜索</span>
                  <span className="right" onClick={this.props.changeHotQuery}>换一批</span>
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
    let list = this.props.hotQueryList.slice(this.props.page * this.props.count, (this.props.page + 1) * this.props.count)
    return list.map(item => <span className="item" key={item}>{item}</span>)
  }
}

const mapStateToProps = state => {
  return {
    hotQueryList: state.header.hotQueryList,
    count: state.header.count,
    page: state.header.page
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setHotQuery(list) {
      if (!list.length) {
        dispatch(getHotQueryAction())
      }
    },
    changeHotQuery() {
      dispatch(getChangePageAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
