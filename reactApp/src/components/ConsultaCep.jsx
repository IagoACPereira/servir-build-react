import axios from 'axios';
import { useEffect, useState } from 'react';
import ConsultaCepLista from './ConsultaCepLista';

export default function ConsultaCep() {
  document.title = 'Consulta CEP'
  
  const [endereco, setEndereco] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function consultaApi() {
    try {
      setLoading(true);
      const cep = document.querySelector('#cep').value.trim();    
      setEndereco(await axios.get(`https://viacep.com.br/ws/${cep}/json/`));
      setLoading(false);
      //console.log(endereco.data);
      
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

      <ConsultaCepLista endereco={endereco.data} />
    </div>
  )
}
