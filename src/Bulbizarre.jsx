import React, { Component } from 'react';
import './Bulbizarre.css';

class Bulbizarre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            couleur: "",
            phrase: ""
        }
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.vie > 0) {
            this.setState({couleur: "vert", phrase:"Alive"})
        } else {
            this.setState({couleur: "rouge", phrase:"Dead"})
        }
    }

    render() { 
        return ( 
            <div className={`bulbi ${this.state.couleur}`}>
                <h1>{this.props.nom}</h1>
                <p>{this.props.vie}</p>
                <p>{this.props.type}</p>
                <p>{this.state.phrase}</p>
                <button onClick={this.handleClick}>Mort</button>
                <button onClick={this.props.methode}>Masquer</button>
            </div>
         );
    }
}
 
export default Bulbizarre;