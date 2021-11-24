import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/elements/Button';
import * as actions from './action';
import { initialState, propTypes } from './reducer';
import styles from './Home.module.scss';

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
  console.log('tes husky')
  useEffect(() => {
    actions.setLoading(true);
    actions.getTest();
  }, []);

  return (
    <div className={styles.home}>
      <div>Home</div>
      <img src="/assets/logo.png" />
      { loading && (<Button />) }
    </div>
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
