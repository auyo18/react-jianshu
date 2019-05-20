import React, {Component} from 'react'
import './index.scss'

class Header extends Component {
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
              <input type="text" placeholder="搜索" />
              <div className="hot-search-box">
                <p>
                  <span>热门搜索</span>
                  <span>换一批</span>
                </p>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Header
