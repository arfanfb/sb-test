import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './action';
import Home from './Home';

const mapStateToProps = (state) => {
  const { loading, moviesData, moviesMeta } = state.home;

  return {
    loading,
    moviesData,
    moviesMeta
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
)(Home);
