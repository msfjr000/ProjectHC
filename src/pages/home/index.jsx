import './style.css'
import Perfil from '../../components/Perfil'
import Ticket from '../../components/ticket'
import Clock from '../../components/clock';
function App() {
  return (  
      <main>
      <h1 id='pageTitle'>Controle de Tarefas</h1>
        <div id='containerClock'>
          <Perfil day='morning'/>
          <Clock/>
          <Perfil day='afternoon'/>
        </div>
        <section id="container">
          <Ticket 
          title="Teste"
          message="lorem ipslum amjoasodod dfsdfsdfsdf ewfwefwersdf wefwetwerwerw sdfsdfdsfwerwe ewfsdfdsfsdfsdf wefewfwfewfwe fwefwefwefwe fwefwefwe fwefwefwe fwefwefwe fwfwefwe fwfwefwef fwefwefwefwe fwefwefe"
          contact="teste teste"
          />
        </section>
      </main>
  )
}

export default App
