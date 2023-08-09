import './App.css';
import {Testimonio} from './componentes/testimonios'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros estudiantes</h1>
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Hola, me encanta tu curso y como enseñas, se logra aprender muy bien. Quería además recomendarte que hicieras una actualización al uso de "create-react-app" ya que en la nueva documentación este ya no es recomendado por react y ha desaparecido de allí, dice que se debería de usar con algún framework pero creo que para aprender también es excelente'/>
        
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de software'
          empresa='Chackdesk'
          testimonio='Hola, me encanta tu curso y como enseñas, se logra aprender muy bien. Quería además recomendarte que hicieras una actualización al uso de "create-react-app" ya que en la nueva documentación este ya no es recomendado por react y ha desaparecido de allí, dice que se debería de usar con algún framework pero creo que para aprender también es excelente'/>
        
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Hola, me encanta tu curso y como enseñas, se logra aprender muy bien. Quería además recomendarte que hicieras una actualización al uso de "create-react-app" ya que en la nueva documentación este ya no es recomendado por react y ha desaparecido de allí, dice que se debería de usar con algún framework pero creo que para aprender también es excelente'/>
        
      </div>
    </div>
  );
}

export default App;
