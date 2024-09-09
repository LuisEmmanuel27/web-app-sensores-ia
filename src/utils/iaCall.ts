import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
import { prompt } from '@/constants/prompt'

export const IaCall = async () => {
  const { text } = await generateText({
    model: google('models/gemini-pro'),
    frequencyPenalty: 1,
    temperature: 0.2,
    maxTokens: 1000,
    prompt,
  })

  return text
}
