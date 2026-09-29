import { Hono } from 'hono'
import { inertia } from '@hono/inertia'
import { db } from './db'
import { notes } from './db/schema'
import { rootView } from './root-view'

const app = new Hono()

app.use(inertia({ version: '1', rootView }))

const routes = app.get('/', async (c) =>
  c.render('Home', {
    message: 'Hello, Inertia',
    notes: await db.select().from(notes),
  }),
)

export default routes
