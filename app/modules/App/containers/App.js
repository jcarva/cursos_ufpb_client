import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { app_title } from '../index';

class App extends Component {
  componentWillMount() {
    this.props.app_title();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({title: state.title});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({app_title}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
