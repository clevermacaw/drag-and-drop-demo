export type TextBlockItem = {
  id: string
  type: 'text'
  text: string
}

export type ImageBlockItem = {
  id: string
  type: 'image'
  url: string
}

export type BlockItem = TextBlockItem | ImageBlockItem
