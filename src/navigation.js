import React from "react";
import {Link} from "react-router-dom";


function Navigation(){

    return(
        <ul class="nav">
            <Link to="/"><li class="active">Acceuil</li></Link>
            <Link to="/News"><li>News</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
        </ul>
    )

}

export default Navigation;