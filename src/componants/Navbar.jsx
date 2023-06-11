import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import SearchList from './SearchList'
import '../stlyes/custom.css'

const Navbar = () => {

    return (
        <div className="nav-bar">

            <button className="nav-bar-item">
                <Link to="/">
                    
                    <img width="48" height="48" src="https://img.icons8.com/color/48/pokeball--v1.png" alt="pokeball--v1" />
                    <label>POKEMON</label>
                    
                </Link>
            </button>
        </div>
    )
}

export default Navbar
