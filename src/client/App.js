import React from 'react';
import "./app.css"
import axios from 'axios'

export default function App() {

  const onClick = async () => {
    const response = await axios.post(`/publish`)
    console.log(response);
  }

  return (
    <div style={{ display: "flex", weight: "100%", height: "100vh", background: "linear-gradient(142deg, rgba(21,24,25,1) 0%, rgba(16,32,38,1) 48%, rgba(6,69,119,1) 100%)", justifyContent:"center", alignItems:"center" }}>
      <button style={{ width: "200px", height: "50px", cursor:"pointer" }} onClick={onClick}>
        Publicar Mensagem
      </button>
    </div>
  );
}

