import logo from './logo.svg';
import './App.css';
import Biblioteca from './Component/Biblioteca';
import Pie from './Component/Pie';
import Pie2 from './Component/Pie2'
import Bars from './Component/Bars'
import Bars2 from './Component/Bars2'
import StatsGames from './Component/StatsGames';
import StatsGerais from './Component/StatsGerais';
import Navbar from './Component/Navbar';
import Searchbar from './Component/Searchbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='Titulo-setor'>ESTATISTICAS</h1>
      <div className='Stats-titulos'>
          <h3>Episodios por canal</h3> <h3>Episodios com ou sem tema</h3> <h3>Quantidade de episodios por ano</h3> <h3>Minutagens mais comuns dos programas</h3>
      </div>
      <div className='Stats'>
          <Pie></Pie> <Pie2></Pie2> <Bars></Bars> <Bars2></Bars2>
      </div>
      <div className='Stats2'>
          <StatsGames></StatsGames> <StatsGerais></StatsGerais>
      </div>
      <h1 className='Titulo-setor'>BIBLIOTECA DE EPISODIOS</h1> 
      <Biblioteca></Biblioteca> 
      <Footer></Footer>
    </div>
  );
}

export default App;