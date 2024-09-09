import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
// import jsonData from '@/json/exampleTinyDataSensor.json'
import { prompt } from '@/constants/prompt'

const IaDemo = async () => {
  const { text } = await generateText({
    model: google('models/gemini-pro'),
    frequencyPenalty: 1,
    temperature: 0.2,
    maxTokens: 1000,
    prompt,
  })

  return (
    <div>
      <h1>Reporte del Sensor</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{text}</pre>
    </div>
  )
}

export default IaDemo
