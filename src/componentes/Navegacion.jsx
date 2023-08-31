import logo from '../recursos/logo.svg'
import linkedin from '../recursos/linkedin.svg'
import github from '../recursos/github.svg'
import proyectos from '../recursos/proyectos.svg'

export default function Navegacion(){
    return (
        <nav>
            <div className="nav-content">
                <ul className="nav-list">
                    <li className="nav-item-li"><a className="nav-item-a" href="/">proyectos</a></li>
                    <li className="nav-item-li"><a className="nav-item-a" href="https://www.linkedin.com/in/daianasmaranda/">linkedin</a></li>
                    <li className="nav-item-li"><a className="nav-item-a" href="https://github.com/daiasmar">github</a></li>
                </ul> 
                <div className="nav-item-logo">
                    <img src={logo} alt="Daiana Roxana Smaranda"/>
                </div>
            </div>

            <div className="nav-content-mobile">
                <ul className="nav-list">
                    <li className="nav-item-li"><a href="/"><div className="nav-item-icon"><img src={proyectos} alt="proyectos"/></div></a></li>
                    <li className="nav-item-li"><a href="https://www.linkedin.com/in/daianasmaranda/"><div className="nav-item-icon"><img src={linkedin} alt="linkedin"/></div></a></li>
                    <li className="nav-item-li"><a href="https://github.com/daiasmar"><div className="nav-item-icon"><img src={github} alt="github"/></div></a></li>
                </ul>
                <div className="nav-item-logo-small">
                    <img src={logo} alt="Daiana Roxana Smaranda"/>
                </div>
            </div>
        </nav>
    )
}