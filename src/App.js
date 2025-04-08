
import './App.css';
import Body from './Component/Body';
import Demo from './Component/Demo';
import Footer from './Component/Footer';
import Header from './Component/Header';
import About from './Component/About';
import { createBrowserRouter } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Body/>
      </main>
      <footer className="App-footer">
        <Footer />
        
      </footer>
    
    </div>
  );
}




export default App;
