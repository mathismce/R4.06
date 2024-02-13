import './App.css';
import Card from './components/card';

let offer = {
  name:"Débutant",
  price:"29 999",
  adv: [
    { isChecked:true, name: "Edouard Jérémie" },
    { isChecked:true, name: "Amélie Christelle"}, 
    { isChecked:false, name: "Gilles Damien"}
],
  direction:"dejdefd",
  btn: "Get Started"


};

function App() {
  return (
    <div className="App">
      <Card {...offer}/>
    </div>
  );
}

export default App;
