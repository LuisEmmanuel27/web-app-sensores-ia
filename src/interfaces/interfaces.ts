interface pathsIn {
  href: string
  label: string
  icon: string
}

interface socialMedIn {
  href: string
  icon: string
}

interface svgIn {
  [key: string]: string
}

interface webpIn {
  [key: string]: any
}

interface MedidaSenIn {
  date_time: string
  temperatura: number
  humedad: number
}

interface PosicionSenIn {
  latitud: number
  longitud: number
}

interface SensorDatIn {
  id: string
  nombre: string
  conectado_corriente: boolean
  conectado_red: boolean
  bateria: number
  max_limit_temperatura: number | null
  max_limit_humedad: number | null
  min_limit_temperatura: number | null
  min_limit_humedad: number | null
  posicion: PosicionSenIn
  medidas: MedidaSenIn[]
}

interface SensorIn {
  usuario: string
  sensores: SensorDatIn[]
}

interface SensorCardsContPropsIn {
  data: SensorIn
}

interface SensorCardPropsIn {
  sensor: SensorDatIn
}

interface ItemsContainerProps {
  data: SensorIn
  Component: React.FC<SensorCardPropsIn>
  containerClass: string
}
