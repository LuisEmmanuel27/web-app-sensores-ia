import './style/ItemsContainer.css'

const ItemsContainer = ({
  data,
  Component,
  containerClass,
}: ItemsContainerProps) => {
  return (
    <section className={containerClass}>
      {data.sensores.map((sensor, index) => (
        <Component key={index} sensor={sensor} />
      ))}
    </section>
  )
}

export default ItemsContainer
