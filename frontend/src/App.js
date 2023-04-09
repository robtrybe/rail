import './App.css';
import axios from 'axios';
import { useState } from 'react';

// Oi

function App() {

  const [user, setUser] = useState(null)

  const PROTOCOL = process.env.REACT_APP_API_PROTOCOL;
  const HOST = process.env.REACT_APP_API_HOST;

  const getUser = async () => {
    const api = axios.create({baseURL: `${PROTOCOL}://${HOST}`});
    const response = await api.post('/user');
    const {data} = response;
    setUser(data);
  }


  return (
    <>
      <h1>Clique no botao</h1>
      <button
        onClick={ getUser }>Clique Aqui</button>

        { user && `${user.name} ${user.sobrenome}`}
    </>
  );
}

export default App;
