import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../../redux/thunks/movies";
import { changeCity } from "../../redux/thunks/city";

import Container from "../../components/Container";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";

const Home = ({ data, getData, history, changeCity, city }) => {
  useEffect(() => {
    getData(city.value);
  }, [getData, city.value]);

  const handleCity = city => {
    history.push(`/${city.path}`);
    changeCity(city);
  };

  return (
    <Container>
      <Header history={history} city={city} onChange={handleCity} movies={data} />
      <MoviesList movies={data} />
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.movies.data,
  loading: state.movies.loading,
  error: state.movies.error,
  city: state.city.data
});

const mapDispatchToProps = dispatch => {
  return {
    getData: bindActionCreators(getData, dispatch),
    changeCity: bindActionCreators(changeCity, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
