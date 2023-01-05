import { Hono } from 'hono'
import { cors } from 'hono/cors'
import pickUrls from './lib/pick_urls'

const app = new Hono()

app.use('/', cors())
app.get('/', async (c) => {
  if (c.req.query('tags') === undefined) {
    return c.text('tags is a required parameter.')
  }

  const tags = c.req.query('tags').split(',')
  const urls = pickUrls(tags)

  return c.json(urls)
})

export default app
