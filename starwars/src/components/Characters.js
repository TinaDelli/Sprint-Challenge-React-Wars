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
            <div>
                <h1>Seek Me You Must? Find Me You Shall:</h1>
               <p>Name: {this.props.charProfile.name}</p>
               <p>Born: {this.props.charProfile.birth_year}</p>
               <p>Eye Color: {this.props.charProfile.eye_color}</p>
               <p>Hair Color:{this.props.charProfile.hair_color}</p>
               <p>Height: {this.props.charProfile.height} </p>
               <p>Home World: {this.props.charProfile.homeworld}</p>
               <p>Movies: {this.state.films.map(film => (
                    <Films charSet={film} key={film} />
                ))} </p>

            </div>
        )
    }

}

export default Characters;