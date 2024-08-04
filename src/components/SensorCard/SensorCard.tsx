'use client'

import './style/SensorCard.css'
import { webp } from '@/constants/imageLinks'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const SensorCard = ({ sensor }: SensorCardPropsIn) => {
  const [medidaActualIndex, setMedidaActualIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMedidaActualIndex(
        (prevIndex) => (prevIndex + 1) % sensor.medidas.length
      )
    }, 3000)

    return () => clearInterval(intervalId)
  }, [sensor.medidas.length])

  const medidaActual = sensor.medidas[medidaActualIndex]

  return (
    <div className='card-item'>
      <div className='lado-izquierdo'>
        <div className='datos'>
          <h1>{sensor.nombre}</h1>
          <p>
            <strong>ID:</strong> {sensor.id}
          </p>
          <p>
            <strong>Ubicación:</strong> {sensor.posicion.latitud},{' '}
            {sensor.posicion.longitud}
          </p>
        </div>

        <hr />

        <div className='temperatura'>
          <h1>Temperatura</h1>
          <h2>{medidaActual.temperatura}°C</h2>
        </div>

        <hr />

        <div className='humedad'>
          <h1>Humedad</h1>
          <h2>{medidaActual.humedad}%</h2>
        </div>

        <hr />
      </div>

      <div className='lado-derecho'>
        <ul>
          {sensor.conectado_corriente ? (
            <li>
              <Image src={webp.bateria} alt='bateria' width={30}></Image>
            </li>
          ) : (
            <li>
              <Image src={webp.sinBateria} alt='bateria' width={30}></Image>
            </li>
          )}
          {sensor.conectado_red ? (
            <li>
              <Image src={webp.wifi} alt='wifi' width={30}></Image>
            </li>
          ) : (
            <li>
              <Image src={webp.sinWifi} alt='wifi' width={30}></Image>
            </li>
          )}
          <li>
            <Image
              src={webp.grafico}
              alt='grafico'
              width={30}
              className='selectable'
            ></Image>
          </li>
          <li>
            <Image
              src={webp.notificacion}
              alt='notificacion'
              width={30}
              className='selectable'
            ></Image>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SensorCard
