import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import './index.scss'

class Home extends Component {
  render() {
    return (
        <div className="container">
          <div className="home clear">
            <div className="main">
              <div className="banner">
                <img
                    src="https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    alt=""/>
              </div>
              <Topic/>
              <List/>
            </div>
            <div className="aside">
              <Recommend/>
              <Writer/>
            </div>
          </div>
        </div>
    )
  }
}

export default Home
