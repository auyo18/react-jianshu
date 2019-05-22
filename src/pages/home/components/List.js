import React, {PureComponent} from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {getMoreArticle} from "../store/actions"

class List extends PureComponent {
  render() {
    return (
        <div className="article-list">
          {
            this.props.articleList.map(item => (
                <div className="item" key={item.get('_id')}>
                  <div className="content">
                    <Link to='/detail'>
                      <p className="title">{item.get('title')}</p>
                    </Link>
                    <p className="description">{item.get('description')}</p>
                    <p className="meta">
                      <span className="dot">{item.getIn(['category', 'name'])}</span>
                    </p>
                  </div>
                  <div className="img">
                    <Link to='/detail'>
                      <img src={`${item.get('thumbnail')}?imageView2/1/w/150/h/100/q/75|imageslim`} alt=""/>
                    </Link>
                  </div>
                </div>
            ))
          }
          <div className="more">
            <p onClick={this.props.getMoreArticle}>阅读更多</p>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articleList: state.getIn(['home', 'list'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMoreArticle() {
      dispatch(getMoreArticle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
