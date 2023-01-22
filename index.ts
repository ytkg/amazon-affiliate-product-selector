import { Hono } from 'hono'
import { cors } from 'hono/cors'
import pickAdTags from './lib/pick_ad_tags'

const app = new Hono()

app.use('/', cors())
app.get('/', async (c) => {
  if (c.req.query('tags') === undefined) {
    return c.text('tags is a required parameter.')
  }

  const tags = c.req.query('tags').split(',')
  const count = parseInt(c.req.query('count'))
  const adTags = pickAdTags(tags, count)

  return c.json(adTags)
})

export default app
