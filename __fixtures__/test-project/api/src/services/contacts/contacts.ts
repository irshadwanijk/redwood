import { db } from 'src/lib/db'

export const contacts = () => {
  return db.contact.findMany()
}