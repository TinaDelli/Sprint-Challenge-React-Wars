import React from "react";
import Characters from './Characters';


const CharacterList = props => {
    return <div>
        {props.charProp.map(c => <Characters charProfile ={c} key={c.name} /> )}
    </div>
  
}

export default CharacterList;