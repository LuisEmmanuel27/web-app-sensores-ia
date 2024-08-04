import SensorCardsContainer from '@/components/SensorCardsContainer/SensorCardsContainer'
import jsonData from '@/json/exampleDataSensor.json'

const data: SensorIn = jsonData

export default function Home() {
  return (
    <main className='main-content'>
      <h1>Dispositivos de {data.usuario}</h1>
      <hr style={{ margin: '1rem 0' }} />
      <SensorCardsContainer data={data} />
    </main>
  )
}
