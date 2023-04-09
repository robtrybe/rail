import './App.css';
import axios from 'axios';
import { useState } from 'react';

// Oi

function App() {

  const [user, setUser] = useState(null)

  const getUser = async () => {
    const api = axios.create({baseURL: process.env.SERVER_HOST});
    const { data } = await api.post('/user');
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
