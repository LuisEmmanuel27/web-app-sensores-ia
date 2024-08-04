import './style/SensorCardsContainer.css'
import SensorCard from '../SensorCard/SensorCard'

const SensorCardsContainer = ({ data }: SensorCardsContPropsIn) => {
  return (
    <section className='container-cards'>
      {data.sensores.map((sensor, key) => (
        <SensorCard key={key} sensor={sensor} />
      ))}
    </section>
  )
}

export default SensorCardsContainer
