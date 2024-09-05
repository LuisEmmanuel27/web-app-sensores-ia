import Graph from '@/components/Graph/Graph'
import ItemsContainer from '@/components/ItemsContainer/ItemsContainer'
import jsonData from '@/json/exampleDataSensor.json'

const data: SensorIn = jsonData

const page = () => {
  return (
    <div className='main-content'>
      <h1>Gráficos</h1>
      <hr style={{ margin: '1rem 0' }} />
      <ItemsContainer
        data={data}
        Component={Graph}
        containerClass='graphs-container'
      />
    </div>
  )
}

export default page
