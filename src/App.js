//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cardpage from './components/Cardpage';
import Footer from './components/Footer';

function App() {
  return (
    <>
          
          <Navbar/>
          <div className='container'>
          <Jumbotron/>
          <div className='row'>
					<div className="col-3 auto">
						<Cardpage />
					</div>
					<div className="col-3 auto">
						<Cardpage />
					</div>
					<div className="col-3 auto">
						<Cardpage />
					</div>
					<div className="col-3 auto">
						<Cardpage />
					</div>
          </div>
          </div>
          <Footer/>
				
     
    </>
  );
}

export default App;
