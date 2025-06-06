import './style.css'

function Cadastros () {
    return (
        <main>
            <form id='form' action="">
                <h1 id='formTitle'>Cadastro de tarefas</h1>
                <div id='divTitle'>
                <label htmlFor="titulo">Título</label>
                <input id='titulo' name='titulo' type="text" placeholder='Título' />
                </div>
                <div id='divResp'>
                <label htmlFor="responsavel">Responsável</label>
                <input id='responsavel' name='responsavel' type="text" placeholder='Responsável'/>
                </div>
                <div id='divDate'>
                <label htmlFor="date">Data</label>
                <input type="date" id='date' name='date' placeholder=''/>
                </div>
                <div id='divTime'>
                <label htmlFor="time">Hora</label>
                <input name='time' id='time' type="time" />
                </div>
                <label id='labelDescription' htmlFor="description">Descrição</label>
                <textarea rows={15} cols={20} name="description" id="description"></textarea>
            </form>
        </main>
    )
}

export default Cadastros