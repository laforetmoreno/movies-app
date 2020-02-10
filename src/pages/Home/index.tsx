import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { History } from 'history';

import { getData } from '../../redux/thunks/movies';

import { City, Movie } from '../../types';

import Container from '../../components/Container';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';

interface StateProps {
  data?: Movie[];
  city?: City;
  loading?: boolean;
}

interface DispatchProps {
  getData?: (city: string) => void;
  changeCity?: (city: object) => void;
}

interface OwnProps {
  history?: History;
}

type Props = StateProps & DispatchProps & OwnProps;

const Home = ({ data, getData, history, loading }: Props) => {
  const [state, setstate] = useState<City>({
    path: 'rio-de-janeiro',
    value: 1,
    label: 'Rio de Janeiro',
  });

  useEffect(() => {
    history.push(`/${state?.path}`);
    getData(state?.value);
  }, [getData, history, state]);

  const handleCity = cityInfos => {
    history.push(`/${cityInfos?.path}`);
    setstate(cityInfos);
  };

  return (
    <Container>
      <Header history={history} city={state} onChange={handleCity} movies={data} />
      {loading ? <Loader minHeight /> : <MoviesList movies={data} />}
    </Container>
  );
};

const mapStateToProps = state => ({
  data: state.movies.data,
  loading: state.movies.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: bindActionCreators(getData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
