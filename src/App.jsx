import Header  from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Products from "./components/Products/Products";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    
    
    <div className="App">
      <div>
        <div className="white-gradient"/>
        
          <Header>
          
          </Header>        
        
         <Hero/> 

      </div>
        <Companies/>
        <Products/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
   
    </div>
    
  );
}

export default App;
