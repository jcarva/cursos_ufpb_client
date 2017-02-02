import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurricula } from '../../index';

class Flowchart extends Component {
  componentWillMount() {
    this.props.fetchCurricula(this.props.curricula_id)
  }

  render() {
    console.log(this.props)

    if(!this.props.curricula) return <div>LOADING</div>

    const renderCourses = () => {
      return this.props.curricula.courses.map(course => {
        return <li key={course.id}>{course.name}</li>
      })
    }

    return(
      <div>
        <h3>Courses:</h3>
        {renderCourses()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {curricula: state.curriculas.selected}
}

export default connect(mapStateToProps, { fetchCurricula })(Flowchart);
