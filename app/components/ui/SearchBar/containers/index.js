import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurriculas } from '../../../../modules/index';
import Autocomplete from 'react-autocomplete';

const styles = {
  item: {
    padding: '2px 6px',
    cursor: 'default'
  },

  highlightedItem: {
    color: 'white',
    background: 'hsl(200, 50%, 50%)',
    padding: '2px 6px',
    cursor: 'pointer'
  }
}

class SearchBar extends Component {

  static contextTypes = {
    router: React.PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      term: ''
    }
  }

  componentWillMount() {
    this.props.fetchCurriculas()
  }

  handleSelectCourse = (value, course) => {
    this.setState({term: value})
    this.context.router.push('/curriculum/'+ course.id);
  }

  render() {
    return(
        <Autocomplete
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          onSelect={this.handleSelectCourse}
          items={this.props.curriculas}
          getItemValue={(course) => course.name}
          shouldItemRender={(course, value) =>  course.name.toLowerCase().indexOf(value.toLowerCase()) !== -1}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.id}
            >{item.name}</div>
          )}
        />
    )
  }
}

const mapStatetoProps = (state) => {
  return{
    curriculas: state.curriculas.all
  }
}

export default connect( mapStatetoProps, { fetchCurriculas })(SearchBar);
