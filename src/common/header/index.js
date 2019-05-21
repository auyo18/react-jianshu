import React from 'react'
import {connect} from "react-redux"
import {getHotQueryAction, getChangePageAction} from "./store/actionCreators"
import './index.scss'

const Header = props => {
  let {page, count, setHotQuery, hotQueryList, changeHotQuery} = props
  let list = hotQueryList.slice(page * count, (page + 1) * count) || []
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
              setHotQuery(hotQueryList)
            }} />
            <div className="hot-search-box">
              <p className="title">
                <span className="left">热门搜索</span>
                <span className="right" onClick={changeHotQuery}>换一批</span>
              </p>
              <p className="content">
                {
                  list.map(item => <span className="item" key={item}>{item}</span>)
                }
              </p>
            </div>
          </div>
        </div>
      </nav>
  )
}

const mapStateToProps = state => {
  return {
    hotQueryList: state.getIn(['header', 'hotQueryList']),
    count: state.getIn(['header', 'count']),
    page: state.getIn(['header', 'page'])
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
