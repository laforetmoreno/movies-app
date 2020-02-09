import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { getData } from "../../redux/thunks/movies";
import { changeCity } from "../../redux/thunks/city";

import { City, Movie } from "../../types";

import Container from "../../components/Container";
import Header from "../../components/Header";
import MoviesList from "../../components/MoviesList";

interface StateProps {
  data?: Movie[];
  city?: City;
}

interface DispatchProps {
  getData?: (city: string) => void;
  changeCity?: (city: object) => void;
}

interface OwnProps {
  history?: any;
}

type Props = StateProps & DispatchProps & OwnProps;

const Home = ({ data, getData, history, changeCity, city }: Props) => {
  console.log(data);
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
  city: state.city.data
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getData: bindActionCreators(getData, dispatch),
    changeCity: bindActionCreators(changeCity, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
