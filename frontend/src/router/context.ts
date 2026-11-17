import { createContext } from 'react'
import { createBrowserRouter } from 'react-router-dom'

type RouterInstance = ReturnType<typeof createBrowserRouter>

// Provider（router/index.tsx）恒在组件树中包裹本 Context，null 仅作惰性初始值
export const RouterContext = createContext<RouterInstance>(
  null as unknown as RouterInstance,
)
