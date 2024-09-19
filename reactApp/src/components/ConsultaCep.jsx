import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ConsultaCep() {
  const [endereco, setEndereco] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function consultaApi() {
    try {
      setLoading(true);
      const cep = document.querySelector('#cep').value.trim();    
      setEndereco(await axios.get(`https://viacep.com.br/ws/${cep}/json/`));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    } 
  }  

  if (loading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error}</p>
  
  return (
    <div>
      <h1>Consultar CEP</h1>

      <form onSubmit={() => consultaApi()} method="dialog">
        <label htmlFor="cep">Digite o CEP:</label>
        &nbsp;
        <input type="text" name="cep" id="cep" />
        &nbsp;
        <button type="submit">Buscar</button>
      </form>

      <hr />

      <div>
        <ul style={ul}>
          <li><strong>Bairro: </strong>{ endereco.data ? endereco.data.bairro : '' }</li>
          <li><strong>Cep: </strong>{ endereco.data ? endereco.data.cep : '' }</li>
          <li><strong>Complemento: </strong>{ endereco.data ? endereco.data.complemento : '' }</li>
          <li><strong>Ddd: </strong>{ endereco.data ? endereco.data.ddd : '' }</li>
          <li><strong>Estado: </strong>{ endereco.data ? endereco.data.estado : '' }</li>
          <li><strong>Gia: </strong>{ endereco.data ? endereco.data.gia  : '' }</li>
          <li><strong>Ibge: </strong>{ endereco.data ? endereco.data.ibge : '' }</li>
          <li><strong>Localidade: </strong>{ endereco.data ? endereco.data.localidade : '' }</li>
          <li><strong>Logradouro: </strong>{ endereco.data ? endereco.data.logradouro : '' }</li>
          <li><strong>Regiao: </strong>{ endereco.data ? endereco.data.regiao : '' }</li>
          <li><strong>Siafi: </strong>{ endereco.data ? endereco.data.siafi : '' }</li>
          <li><strong>Uf: </strong>{ endereco.data ? endereco.data.uf : '' }</li>
          <li><strong>Unidade: </strong>{ endereco.data ? endereco.data.unidade : '' }</li>
        </ul>
      </div>
    </div>
  )
}

const ul = {
  listStyle: 'none',
  padding: '0'
}