import { NavLink } from "react-router-dom"

export default function NavbarLinks() {
    return (
        <>
            {[
                ['Home', '/'],
                ['About', '/about'],
                ['Feature', '/feature'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
            ].map(([title, url], index) => (
                <NavLink  
                    key={index} 
                    to={url} 
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    {title}
                </NavLink>
            ))}
        </>
    )
}