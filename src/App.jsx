import Card from "./components/card/Card";
import './App.css';
import Img1 from "./green.png";
import SpaceCube from  "./components/image/Space-cube.png";
import Button from './components/Button/Button';



function App() {
  return (
   <section className="app">


<div className="image-container">
<h1 className="titre">Le christ est notre sauveur</h1>
<img src={Img1} alt="" />
<img src={SpaceCube} alt="cube de lespace" className="centered-image" />;

    <Card />
    </div>  
    <Button label="Envoyer" onClick={() => console.log("Bouton cliqué")} /> 
   </section>
   

  
  );
}




export default App;
