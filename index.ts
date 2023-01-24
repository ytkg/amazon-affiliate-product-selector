import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { validator } from 'hono/validator'
import pickAdTags from './lib/pick_ad_tags'

const app = new Hono()

app.use('/', cors())
app.get(
  '/',
  validator((v) => ({
    tags: v.query('tags').isRequired().message('tags is a required parameter.'),
    count: v.query('count').isOptional().isNumeric().message('count must be numeric.'),
  })),
  async (c) => {
    const params = c.req.valid()
    const tags = params.tags.split(',')
    const count = parseInt(params.count)
    const adTags = pickAdTags(tags, count)

    return c.json(adTags)
  }
)

export default app
