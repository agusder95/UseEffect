import React, { useEffect, useState } from 'react';


/*function App() {

  const [tipodata, setTipodata] = useState('posts')

  useEffect(() => {
    console.log('data change')
    
    return ()=> {
      console.log('data Return')
    }
  }, [tipodata])

  return (
    <div className="App">
      <div>
        <button  onClick={() => setTipodata('posts') }> Posts </button>
        <button  onClick={() => setTipodata('users') }> Users </button>
        <button  onClick={() => setTipodata('comments') }> Comments </button>
      </div>
      <h3>{ tipodata }</h3>
      
    </div>
  );
}*/

function App(){
  const [ancho, setAncho] = useState(window.innerWidth);

  const cambtamanio = () => {
    setAncho(window.innerWidth);
  };
  

  useEffect(() => {
    window.addEventListener("resize", cambtamanio);
  },[ancho]);

  return(
    <div>
      <h1> {ancho} </h1>
    </div>
  ) 
}

export default App;
