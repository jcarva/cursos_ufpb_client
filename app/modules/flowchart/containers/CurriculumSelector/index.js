import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  getFilteredCurricula,
  getCurriculumTerm,
  setCurriculumTerm
} from 'modules/flowchart';
import { fetchCurricula } from 'modules/curricula';
import SearchBar from 'components/ui/SearchBar';

export default compose(
  withRouter,
  connect(
    (state) => ({
      value: getCurriculumTerm(state),
      items: getFilteredCurricula(state).toJS(),
      itemKey: 'id',
      itemLabel: 'name'
    }),
    (dispatch, { history }) => ({
      onChange: (value) => dispatch(setCurriculumTerm(value)),
      onSelect: (curriculum) => {
        dispatch(setCurriculumTerm(''));
        history.push(`/flowchart/${curriculum.id}`);
      },
      onLoad: () => dispatch(fetchCurricula())
    })
  ),
  lifecycle({
    componentWillMount() { this.props.onLoad(); }
  })
)(SearchBar);
