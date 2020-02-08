import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../../redux/thunks/movies";

import Container from "../../components/Container";

const Movies = ({ data, getData }) => {
  console.log(data);

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <h1>movies</h1>
    </Container>
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
