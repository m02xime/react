import React from "react";
import {Link} from "react-router-dom";


function Footer(){

    return(
        <footer>
        <ul class="footer">
            <Link to="/"><li class="active">Acceuil</li></Link>
            <Link to="/News"><li>News</li></Link>
            <Link to="/Contact"><li>Contact</li></Link>
        </ul>
        </footer>
    )

}

export default Footer;