import './App.css';
import { InfoUser } from './components/infoUser';

import { Menu } from './components/menu';
import { Search } from './components/search';

function App() {
  return (
    <div className="App overflow-hidden">

      {/* Barra de pesquisa, submit, chamar a api, mostrar o perfil e dados, mostrar 5 seguidores e seus perfis
      Rotas >  Detalhes do perfil consegue ver os detalhes de todo mundo.*/}

      <Menu/>

      <Search/>


    </div>
  );
}

export default App;
