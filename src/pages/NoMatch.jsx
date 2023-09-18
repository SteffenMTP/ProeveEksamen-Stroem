import React from 'react'
import { NavLink } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className='bg-dark text-white'>
        
        <p>OBS! Der er desværre ingen match på den side, De forsøger at få adgang til.
          Tjek evt. om De har skrevet forkert URL i toppen af websiden ellers benyt linket herunder, som fører Dem videre til forsiden.
        </p>


        <NavLink end className="nav-link" aria-current="page" to="/"><img src='./logo.png' alt="Stroem logo"/></NavLink>


    </div>
  )
}

export default NoMatch;