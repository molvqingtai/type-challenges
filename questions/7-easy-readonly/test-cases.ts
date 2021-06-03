import { Equal, Expect } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
}

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]
