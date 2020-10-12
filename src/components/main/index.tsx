import React,{ useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FilmesResults } from '../../store/ducks/filmes/types';
import { ApplicationState } from '../../store';
import * as FilmesActions from '../../store/ducks/filmes/actions';

import { Container } from './styles';
import Card from '../card';

interface StateProps {
  filmesResults: FilmesResults
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

const Main = (props: Props) => {

  useEffect(() => {
    const { loadRequest } = props;

    loadRequest();
  }, [])

  const { filmesResults } = props;

  return (
    <Container>
      <Card filmes={filmesResults?.results} />
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  filmesResults: state.filmes.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(FilmesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
