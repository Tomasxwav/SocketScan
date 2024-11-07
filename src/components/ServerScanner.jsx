// ServerScanner.js
import React, { useState } from 'react'
import { useEffect } from 'react'

function ServerScanner() {
  const [servers, setServers] = useState([])
  const [status, setStatus] = useState('...')

  const foundServers = []

  const findServersAndSendData = async () => {
    setStatus('Buscando servidores...')
    try {
      // Llama al proceso principal para escanear la red
      const scanFetch = await window.electron
        .scanNetwork()
        .then((result) => {
          foundServers.push(result)
          setStatus('Servidores encontrados: ')
        })
        .catch((err) => {
          setStatus('Error escaneando servidores: ' + err)
          console.log('Error al escanear la red:', err)
        })
      console.log(foundServers)
      setServers(foundServers)

      if (foundServers.length > 0) {
        setStatus('Servidores encontrados: ')
        // Enviar mensaje a cada servidor encontrado
        /* foundServers.forEach(async (server) => {
          await sendMessageToServer(server, {
            message: 'Hola desde Electron + React',
          })
        }) 
        setStatus('Mensajes enviados a todos los servidores.')*/
      } else {
        setStatus('No se encontraron servidores.')
      }
    } catch (error) {
      console.error('Error buscando servidores:', error)
      setStatus('Error durante la búsqueda.')
    }
  }

  return (
    <div>
      <button onClick={findServersAndSendData}>Buscar Servidores</button>
      <p>{status}</p>
      {servers.length > 0 && (
        <div>
          {servers.map((server, index) => (
            <li key={index}>{server}</li>
          ))}
        </div>
      )}
    </div>
  )
}

export default ServerScanner
