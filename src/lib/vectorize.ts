import { openai } from './openai'

export const vectorize = async (input: string): Promise<number[]> => {
  const embeddingResponse = await openai.embeddings.create({
    input,
    model: 'text-embedding-ada-002',
  })

  const vector = embeddingResponse.data[0].embedding

  return vector
}


import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HF_API_KEY);

export async function vectorize(text: string): Promise<number[]> {
  const model = 'sentence-transformers/all-mpnet-base-v2';
  const response = await hf.featureExtraction({
    model,
    inputs: text,
  });
  return response as number[];
}