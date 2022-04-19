
import { useState } from 'react'

export const useEntityName = path => {
  const [name, setName] = useState('')
  fetch(path).then(res => res.json()).then(res => setName(res.name))
  return name
}
