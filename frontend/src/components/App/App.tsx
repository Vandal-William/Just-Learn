import { useState } from 'react';
import Character from '../Character/Character';
import NavBar from '../NavBar/Navbar';
import VisitorMessage from '../Message/VisitorMessage';

function App() {

  const [isConnected, setConnection] = useState(false);

  return (
    <>
      <NavBar />
      <Character />
      {isConnected ? console.log('connected !') : <VisitorMessage/>}
    </>
  );
}

export default App;
