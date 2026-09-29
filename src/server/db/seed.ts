import { db } from './index'
import { notes } from './schema'

await db.delete(notes)
await db.insert(notes).values([
  { title: 'Inertia とは', body: 'サーバー主導の SPA を作るためのプロトコル。' },
  { title: 'Hono メモ', body: '軽量な Web フレームワーク。' },
  { title: 'Drizzle メモ', body: '型安全な SQL クエリビルダー。' },
])
console.log('seeded', (await db.select().from(notes)).length, 'notes')
