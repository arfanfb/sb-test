import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import Movie from './Movie';

const mapStateToProps = (state) => {
  const { loading, movie } = state.movie;

  return {
    loading, movie
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
