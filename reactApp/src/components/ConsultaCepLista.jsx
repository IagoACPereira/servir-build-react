import { useState } from "react";

export default function ConsultaCepLista(props) {
  const [endereco, setEndereco] = useState(props.endereco);
  
  if (endereco) {
    return (
      <div>
        <ul style={ul}>
          <li><strong>Bairro: </strong>{ endereco ? endereco.bairro : '' }</li>
          <li><strong>Cep: </strong>{ endereco ? endereco.cep : '' }</li>
          <li><strong>Complemento: </strong>{ endereco ? endereco.complemento : '' }</li>
          <li><strong>Ddd: </strong>{ endereco ? endereco.ddd : '' }</li>
          <li><strong>Estado: </strong>{ endereco ? endereco.estado : '' }</li>
          <li><strong>Gia: </strong>{ endereco ? endereco.gia  : '' }</li>
          <li><strong>Ibge: </strong>{ endereco ? endereco.ibge : '' }</li>
          <li><strong>Localidade: </strong>{ endereco ? endereco.localidade : '' }</li>
          <li><strong>Logradouro: </strong>{ endereco ? endereco.logradouro : '' }</li>
          <li><strong>Regiao: </strong>{ endereco ? endereco.regiao : '' }</li>
          <li><strong>Siafi: </strong>{ endereco ? endereco.siafi : '' }</li>
          <li><strong>Uf: </strong>{ endereco ? endereco.uf : '' }</li>
          <li><strong>Unidade: </strong>{ endereco ? endereco.unidade : '' }</li>
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}

const ul = {
  listStyle: 'none',
  padding: '0'
  
}