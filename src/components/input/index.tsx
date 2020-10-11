import React, { useState, useContext } from 'react';

import FilmeContext from '../../contexts/filme'

import { Container } from './styles';

const input: React.FC = () => {
  const [ search, setSearch ] = useState(null)
  const { getFilmes } = useContext(FilmeContext)

  //subimit form
  const SubmitForm = async () => {
    try{
      const response = await getFilmes(search)

      console.log(response)
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

export default input;
