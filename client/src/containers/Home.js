import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import ArticleList from '../components/ArticleList';

class Home extends Component {
  componentWillMount() {
    this.props.actions.fetchArticles();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <ArticleList />
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Home);
