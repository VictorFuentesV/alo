import '../css/Home.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useRef } from 'react'

//originalmente planeaba convertir el boton de darkmode en su propio componente, pero no supe como hacerlo funcionar correctamente

export function Navbar() {
    const ref = useRef();

    const handleClick = () => {
      const nav = ref.current;
      nav.classList.toggle('navdark');
    };

    return (
        <nav ref={ref} className="nav">
          <ul>
            <Link to="/" className="site-title">
              The Bois
            </Link> 
            <button onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sun" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d946ef" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg></button>
          </ul>
          <ul>
            <CustomLink to="/eduardo">Eduardo</CustomLink>
            <CustomLink to="/victor">Victor</CustomLink>
            <CustomLink to="/benjamin">Benjamin</CustomLink>
          </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}