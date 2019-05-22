import React, {Component} from 'react'
import {connect} from "react-redux"
import {getArticle} from "../store/actions"

class List extends Component {
  componentDidMount() {
    this.props.getArticle()
  }

  render() {
    return (
        <div className="article-list">
          {
            this.props.articleList.map(item => (
                <div className="item" key={item.get('_id')}>
                  <div className="content">
                    <p className="title">{item.get('title')}</p>
                    <p className="description">{item.get('description')}</p>
                    <p className="meta">
                      <span className="dot">{item.getIn(['category', 'name'])}</span>
                    </p>
                  </div>
                  <div className="img">
                    <img src={`${item.get('thumbnail')}?imageView2/1/w/150/h/100/q/75|imageslim`} alt=""/>
                  </div>
                </div>
            ))
          }
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
    getArticle() {
      dispatch(getArticle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
