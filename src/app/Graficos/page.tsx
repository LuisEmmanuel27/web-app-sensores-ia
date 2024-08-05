import GraphsContainer from '@/components/GraphsContainer/GraphsContainer'
import jsonData from '@/json/exampleDataSensor.json'

const data: SensorIn = jsonData

const page = () => {
  return (
    <div className='main-content'>
      <h1>Gráficos</h1>
      <hr style={{ margin: '1rem 0' }} />
      <GraphsContainer data={data} />
    </div>
  )
}

export default page
