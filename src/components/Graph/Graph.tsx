'use client'

import './style/Graph.css'
import { formatDate } from '@/helpers/formatDate'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const Graph = ({ sensor }: SensorCardPropsIn) => {
  const data = sensor.medidas.map((entry) => ({
    ...entry,
    date_time: formatDate(entry['date_time']),
  }))

  return (
    <div className='graph-element'>
      <h1>{sensor.nombre}</h1>
      <LineChart width={820} height={400} data={data} className='chart'>
        <CartesianGrid />
        <XAxis dataKey='date_time' />
        <YAxis />
        <Tooltip contentStyle={{ color: 'black' }} />
        <Legend />
        {sensor.max_limit_temperatura !== null && (
          <ReferenceLine
            y={sensor.max_limit_temperatura}
            label={{
              value: 'Max Temp',
              fill: 'white',
            }}
            stroke='#24810A'
          />
        )}
        {sensor.max_limit_humedad !== null && (
          <ReferenceLine
            y={sensor.max_limit_humedad}
            label={{ value: 'Max Hum', fill: 'white' }}
            stroke='#327dd2'
          />
        )}
        <Line type='monotone' dataKey='temperatura' stroke='#10c042' />
        <Line type='monotone' dataKey='humedad' stroke='#3c73a7' />
      </LineChart>
    </div>
  )
}

export default Graph
