import React from "react";
import PropTypes from "prop-types"
//Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imageUrl}) => (
    <Wrapper>
        <Image src ={imageUrl} alt='actor-thumb'/>
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
)

// Handy way of validating props when developing
Actor.propTypes = {
    name: PropTypes.string, 
    character: PropTypes.string,
    imameUrl: PropTypes.string,
}

export default Actor;