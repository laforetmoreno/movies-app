import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../../redux/thunks/movies";

import splitUrl from "../../utils/splitUrl";

import { citiesInfos } from "../../constants";

import Container from "../../components/Container";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";

const Home = ({ data, getData, history }) => {
  const cityParam = citiesInfos[splitUrl(history.location.pathname, 1)].value;

  useEffect(() => {
    getData(cityParam && cityParam);
  }, [getData, cityParam]);

  const handleCity = city => {
    history.push(`/${city.path}`);
  };

  return (
    <Container>
      <Header history={history} onChange={handleCity} movies={data} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
