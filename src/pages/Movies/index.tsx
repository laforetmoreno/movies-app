import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../../redux/thunks/movies";

import Container from "../../components/Container";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";

const Movies = ({ data, getData }) => {
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Header />
      <MoviesList movies={data} />
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
