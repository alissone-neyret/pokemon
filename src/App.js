import React, { Component } from 'react';
import './App.css';
import Bulbizarre from './Bulbizarre';

const pokemon = [
  {id: 1, nom : "Bulbizarre", vie: 150, type: "Gentil" },
  {id: 2, nom : "Salamech", vie: 100, type: "Chaud" },
  {id: 3, nom : "Pikachu", vie: 0, type: "Electrique" },
  {id: 4, nom : "Bulbizarre", vie: 150, type: "Gentil" },
  {id: 5, nom : "Salamech", vie: -3, type: "Chaud" },
]

class App extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        poke : pokemon
      }
    }
   
  elimine(param) {
    const kill = this.state.poke.filter((element) => param !== element.id );
    this.setState({poke: kill})
  }

  render() {
    return (
      <div className="App">
        <h2>Pokémon vivant</h2>
        
        {this.state.poke.filter((element) => element.vie > 0).map((element) => (
          <Bulbizarre
          key = {element.id}
          nom= {element.nom}
          vie= {element.vie}
          type= {element.type} 
          methode = {() => this.elimine(element.id)}/>
          )          
        )}

        <h2>Pokémon décédé</h2>
        {this.state.poke.filter((element) => element.vie < 0).map((element) => (
          <Bulbizarre
          key = {element.id}
          nom= {element.nom}
          vie= {element.vie}
          type= {element.type}
          methode = {() => this.elimine(element.id)} />
        )          
        )}
      </div>
    );
  }
}

export default App;
