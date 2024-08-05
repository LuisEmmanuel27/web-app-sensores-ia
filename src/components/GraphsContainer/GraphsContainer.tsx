import './style/GraphsContainer.css'
import Graph from '../Graph/Graph'

const GraphsContainer = ({ data }: SensorCardsContPropsIn) => {
  return (
    <section className='graphs-container'>
      {data.sensores.map((sensor, index) => (
        <Graph key={index} sensor={sensor} />
      ))}
    </section>
  )
}

export default GraphsContainer
