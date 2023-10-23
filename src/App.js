import { useState, useEffect } from 'react';

function App(){
 
const [nutri, setNutri] = useState([]);


  useEffect(() =>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      });
    }
    loadApi();
  }, []);



  return(
    <div className='container'>
      <header>teste</header>

      {nutri.map((item) => 
        <article key = {item.id} className='post'>
          <strong className='titulo'>{item.titulo}</strong>
          <p>
            {item.subtitulo}
          </p>

          <a className='botao'>Acessar</a>
        </article>
      )}

     
    </div>
  );
}

export default App;

