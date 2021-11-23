import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/elements/Button';
import * as actions from './action';
import { initialState, propTypes } from './reducer';

const mapStateToProps = (state) => {
  const { loading } = state.home;

  return {
    loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

const Home = (props) => {
  const { actions, loading } = props;

  useEffect(() => {
    actions.setLoading(true);
  }, []);

  return (
    <>
      <div>Home</div>
      { loading && (<Button />) }
    </>
  );
};

Home.defaultProps = {
  ...initialState,
};

Home.propTypes = {
  ...propTypes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
