import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../../redux/thunks/movies";
import movies from "../../redux/reducers/movies";

const Movies = ({ data, getData }) => {
  console.log(data);
  return (
    <>
      <button onClick={() => getData()}>click</button>
      <h1>Movies</h1>
    </>
  );
};

const mapStateToProps = state => ({
  data: state.movies.data,
  loading: state.movies.loading,
  error: state.movies.error
});

const mapDispatchToProps = dispatch => {
  return {
    getData: bindActionCreators(getData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
