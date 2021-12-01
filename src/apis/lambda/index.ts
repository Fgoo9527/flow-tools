import { useContext } from '@midwayjs/hooks'
import { Context } from '@midwayjs/koa'

function useKoaContext() {
  return useContext<Context>()
}

export default async () => {
  return {
    message: 'Hello World',
    method: useKoaContext().method
  }
}

export const post = async (name: string): Promise<Object> => {
  return { method: 'POST', name }
}

export const getUser = async () => {
  return {
    user: 'admin',
    ava: 'xxx'
  }
}
