import ItemsContainer from '@/components/ItemsContainer/ItemsContainer'
import SensorCard from '@/components/SensorCard/SensorCard'
import jsonData from '@/json/exampleDataSensor.json'

const data: SensorIn = jsonData

export default function Home() {
  return (
    <main className='main-content'>
      <h1>Dispositivos de {data.usuario}</h1>
      <hr style={{ margin: '1rem 0' }} />
      <ItemsContainer
        data={data}
        Component={SensorCard}
        containerClass='container-cards'
      />
    </main>
  )
}
