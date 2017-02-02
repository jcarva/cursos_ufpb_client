import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurriculas } from '../index';

class SearchBar extends Component {
  componentWillMount() {
    this.props.fetchCurriculas()
  }

  render() {
    //console.log(this.props)
    return(
      <div>
        <input placeholder="course"/>
        <button>search</button>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    curriculas: state.curriculas
  }
}

export default connect( mapStatetoProps, { fetchCurriculas })(SearchBar);
