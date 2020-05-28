import 'https://deno.land/x/dotenv/load.ts'
import app from './src/server/index.ts'

const PORT = Deno.env.get('PORT') || 3000
const ENV = Deno.env.get('NODE_ENV')

// console.log(Deno.env.get('PORT'))
// console.log(app)

// await app.listen(Number(PORT))
await app.listen({ port: Number(PORT) })
console.log(`[App] Listening on http://localhost:${PORT} in ${ENV} environment`)
// await app.listen(Number(PORT), () => {
// })

// if (!Deno.env.get('NODE_ENV')) {
//   console.log('[App] .env value must be set')
//   return
// }