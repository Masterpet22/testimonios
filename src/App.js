import './App.css';
import {Testimonio} from './componentes/testimonios'
import { dato1, dato2, dato3 } from './componentes/datos';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros estudiantes</h1>
        <Testimonio 
          nombre= {dato1.nombre}
          pais= {dato1.pais}
          imagen= {dato1.imagen}
          cargo= {dato1.cargo}
          empresa= {dato1.empresa}
          testimonio= {dato1.testimonio} />
        
        <Testimonio 
          nombre= {dato2.nombre}
          pais= {dato2.pais}
          imagen= {dato2.imagen}
          cargo= {dato2.cargo}
          empresa= {dato2.empresa}
          testimonio= {dato2.testimonio} />
        
        <Testimonio 
          nombre= {dato3.nombre}
          pais= {dato3.pais}
          imagen= {dato3.imagen}
          cargo= {dato3.cargo}
          empresa= {dato3.empresa}
          testimonio= {dato3.testimonio} />
        
      </div>
    </div>
  );
}

export default App;
