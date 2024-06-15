# Semantic Search

A hybrid search engine using Postgres full-text search and semantic querying for fast & pretty accurate search results

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joschan21/magicsearch.git
   cd magicsearch
   ```

2. **Install dependencies:**

   ```bash
   pnpm i # yarn or npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the project root directory based on the provided `.env.example` file by simply using command `mv .env.example .env`.

   ```dotenv
   DATABASE_URL=             # Database URL
   OPENAI_API_KEY=           # OpenAI API Key (Optional)
   UPSTASH_VECTOR_REST_URL=  # Upstash Vector REST API URL
   UPSTASH_VECTOR_REST_TOKEN= # Upstash Vector REST API Token
   ```

4. **Database Setup:**

   - Create a Postgres db using [Neon](https://neon.tech)
   - get the connection string and add it to env variables

5. **Run the application:**

   ```bash
   pnpm dev
   ```


> [!IMPORTANT]
>If you want to use a free embedding model instead of openai follow this steps

1. create a [Hugging Face](https://huggingface.co/) account
2. get the HF key from settings > keys
3. add env variable `HF_API_KEY=your-key`
4. install @huggingface/inference `pnpm add @huggingface/inference`
5. udpate the [vectorize file](./src/lib/vectorize.ts) by un commentint the hugging face vectorize function and comment openai vectorize function 

