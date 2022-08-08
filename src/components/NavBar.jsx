import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function NavBar (){
    return (
        <nav className="navbar">
            <Logo/>
            <SearchBar placeholder = "Búsqueda"/>
        </nav>
    )
}


export default NavBar