import { useEffect, useState } from 'react';
import './App.css';

// Definição da interface para os dados de viaturas
interface Viatura {
  ID: number;
  Marca: string;
  Tipo: string;
  Nomenclatura: string;
  Imagem?: string; // Opcional
}

function App() {
  const [viaturas, setViaturas] = useState<Viatura[]>([]); // Estado para armazenar os dados das viaturas

  useEffect(() => {
    fetch('/api/viaturas') // Adicionado o prefixo '/api'
      .then((res) => res.json())
      .then((data) => {
       // console.log('Dados recebidos da API:', data); // Log dos dados
        setViaturas(data); // Atualiza o estado com os dados recebidos
      })
      .catch((error) => console.error('Erro ao buscar viaturas:', error));
  }, []);
  
  
  

  return (
    <div className="App">
      <h1>Listagem de Viaturas</h1>
      {/* Verifica se há dados */}
      {viaturas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Nomenclatura</th>
              <th>Imagem</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza cada viatura como uma linha da tabela */}
            {viaturas.map((viatura) => (
              <tr key={viatura.ID}>
                {/* <td>{viatura.ID}</td> */}
                <td>{viatura.Marca}</td>
                <td>{viatura.Tipo}</td>
                <td>{viatura.Nomenclatura}</td>
                <td>
                  {viatura.Imagem ? (
                    <img
                      src={viatura.Imagem}
                      alt={`Imagem de ${viatura.Marca}`}
                      width="100"
                    />
                  ) : (
                    'Sem imagem'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhuma viatura encontrada.</p>
      )}
    </div>
  );
}

export default App;
