
import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Store from './Components/Store/Store';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="app__background">
        <img className="app__background__image" src="http://file.hstatic.net/1000075078/file/1120-tch-p1_1920x768_b2b736f503654e41ae04b686dea893bc_master.jpg" alt="background"/>
        <div className="app__text">
          <h1>KÉO XUỐNG</h1>
          <div className="mouse-run"/>
        </div>
      </div>
      <Menu/>
      <Blog/>
      <Store/>
      <Footer/>
      <div className="order"><MotorcycleIcon/></div>
    </div>
  );
}

export default App;
