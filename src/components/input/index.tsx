import React, { useState } from 'react';


import { Container } from './styles';

const input: React.FC = () => {
  const [ search, setSearch ] = useState<string>(null)

  //subimit form
  const SubmitForm = async () => {
    try{

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
