import {createBrowserRouter} from 'react-router-dom'
import './estilo/App.css'
import Navegacion from './componentes/Navegacion'
import Proyecto from './componentes/Proyecto'
import proyectos from '../public/contenido.json'


function App() {
  return (
    <>
      <Navegacion/>
      <section>
        {proyectos.map(({titulo,subtitulo,tags,portada,link}) => <Proyecto titulo={titulo} subtitulo={subtitulo} tags={tags} portada={portada} link={link}/>)}
      </section>
    </>
  )
}

export default App
