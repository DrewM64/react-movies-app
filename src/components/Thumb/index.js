import React from "react";
import { Link } from "react-router-dom";

//Styles 
import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {/* If image is clickable, present image wrapped in link component; otherwise, just show the unclickable thumbnail */}
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='movie-thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='movie-thumb'/>
        )}
        
    </div>
)

export default Thumb;