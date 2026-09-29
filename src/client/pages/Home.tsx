import type { Note } from '../../server/db/schema'

type Props = { message: string; notes: Note[] }

export default function Home({ message, notes }: Props) {
  return (
    <main>
      <h1>{message}</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.body}
          </li>
        ))}
      </ul>
    </main>
  )
}
