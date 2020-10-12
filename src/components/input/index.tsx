import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { FilmesResults } from '../../store/ducks/filmes/types';
import { ApplicationState } from '../../store';
import * as FilmesActions from '../../store/ducks/filmes/actions';
import { apiSearch } from '../../services/apiPopulares';
import { useAxios } from '../../hooks/useAxios';

import { Container } from './styles';

interface DispatchProps {
  loadSuccess(data: FilmesResults): object
}

type Props = DispatchProps;

const Input = (props: Props) => {
  const [ search, setSearch ] = useState<string>(null)
/*
  function buscar() {
    const response = useAxios<FilmesResults>(`https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&query=${search}&page=1&include_adult=false`)
    console.log(response)
    return response.data
  }
*/
  //subimit form
  const SubmitForm = async () => {
    try{
      const { loadSuccess } = props;

      //const response = await apiSearch.get(`https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&query=${search}&page=1&include_adult=false`)
      //const data: FilmesResults = await response.data
      const response = useAxios<FilmesResults>(`https://api.themoviedb.org/3/search/movie?api_key=e2e6c0526e3737f2381684d2fd63d354&language=pt-BR&query=${search}&page=1&include_adult=false`);
      console.log(response.data)
      loadSuccess(response.data);

    } catch(error){
      console.log(error)
    }

  };

  const handleChange = async({ target }) => {
    setSearch(target.value)
  }

  return (
    <Container>
      <div className="input-group">
        <input type="text" className="form-control" onChange={handleChange} placeholder="Pesquisar" aria-label="Pesquisar" />
      </div>

      <button onClick={SubmitForm} type="submit">pesquisar</button>
    </Container>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  filmesResults: state.filmes.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(FilmesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
