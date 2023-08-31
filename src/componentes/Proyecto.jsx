import {Link} from 'react-router-dom'
import Angurria from '../paginas/Angurria'

export default function Proyecto({titulo,subtitulo,tags,portada,link}){
    return(
        <>
            <div className="unit">
                <div className="unit-deco"></div>
                <div className="unit-img"><img src={portada} alt="Portada"/></div>
            </div>
            <div className="unit unit-desc">
                <div>
                    <p>{tags}</p>
                    <h2>{titulo}</h2>
                    <p className="unit-desc-p">{subtitulo}</p>
                </div>
                <div>
                    {link ? (<button className="unit-desc-btn"><a className="unit-desc-a" href={link}>link al proyecto</a></button>) : null}
                    <button className="unit-desc-btn"><Link state={subtitulo} to='/Angurria'>saber más</Link></button>
                </div>
            </div>
        </>
    )
}