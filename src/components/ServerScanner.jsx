// ServerScanner.js
import React, { useState } from 'react'
import { useEffect } from 'react'

function ServerScanner() {
  const [servers, setServers] = useState([])
  const [status, setStatus] = useState('...')

  const findServersAndSendData = async () => {
    console.log('hola1')
    const foundServers = await window.electron
      .scanNetwork()
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {})
    console.log('hola2')
  }
  /* const findServersAndSendData = async () => {
    setStatus('Buscando servidores...')
    try {
      // Llama al proceso principal para escanear la red
      const foundServers = await window.electron.scanNetwork.invoke(
        'scan-network'
      )
      setServers(foundServers)

      if (foundServers.length > 0) {
        setStatus('Servidores encontrados, enviando mensajes...')
        // Enviar mensaje a cada servidor encontrado
        foundServers.forEach(async (server) => {
          await sendMessageToServer(server, {
            message: 'Hola desde Electron + React',
          })
        })
        setStatus('Mensajes enviados a todos los servidores.')
      } else {
        setStatus('No se encontraron servidores.')
      }
    } catch (error) {
      console.error('Error buscando servidores:', error)
      setStatus('Error durante la búsqueda.')
    }
  }

  const sendMessageToServer = async (server, data) => {
    try {
      const response = await fetch(`http://${server}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        console.log(`Mensaje enviado a ${server}`)
      }
    } catch (error) {
      console.error(`Error enviando mensaje a ${server}:`, error)
    }
  }
*/
  return (
    <div>
      <h1>Hola mundo 1</h1>
      <button onClick={findServersAndSendData}>Buscar y Enviar Mensaje</button>
      <p>{status}</p>
      <p>{servers}</p>
    </div>
  )

  /* <div>
      <h2>Escáner de Servidores</h2>
      <button onClick={findServersAndSendData}>Buscar y Enviar Mensaje</button>
      <p>{status}</p>
      {servers.length > 0 && (
        <ul>
          {servers.map((server, index) => (
            <li key={index}>{server}</li>
          ))}
        </ul>
      )}
    </div> */
}

export default ServerScanner
