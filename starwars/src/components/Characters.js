import React from "react";
import Films from "./Film"

class Characters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            films: props.charProfile.films
        };
    }
    render(){
        return (
            <div className = "character-card">
                <h1 className = "card-header">Seek Me You Must? Find Me You Shall:</h1>
                <ul>
               <li>Name: {this.props.charProfile.name}</li>
               <li>Born: {this.props.charProfile.birth_year}</li>
               <li>Eye Color: {this.props.charProfile.eye_color}</li>
               <li>Hair Color:{this.props.charProfile.hair_color}</li>
               <li>Height: {this.props.charProfile.height} </li>
               <li>Home World: {this.props.charProfile.homeworld}</li>
               <li>Movies: {this.state.films.map(film => (
                    <Films charSet={film} key={film} />
                ))} </li>
                </ul>
            </div>
        )
    }

}

export default Characters;