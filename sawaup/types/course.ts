import type { Tag } from './tag'

export type Course = {
  name: string
  url: string
  tags: Tag[]
  thumbnail: string
  favorite: boolean
}
