
import './App.css';
import Teams from './components/team'; 

let teams = {
  title: "Notre équipe",
  heading: "Présentation de notre formidable équipe",
  description: "Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène.",
  users: [
    { name: "Edouard Jérémie", profession: "CEO", image: "./edouard.jpg" },
    { name: "Amélie Christelle", profession: "Directeur des recherches", image: "./amelie.avif" }, 
    { name: "Gilles Damien", profession: "Directeur commercial", image: "./gilles.jpg" }
]
};




function App() {
  return (
    <div className="App">
      <Teams {...teams} /> 
    </div>
  );
}

export default App;
