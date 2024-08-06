import { tamaguiConfig } from '../tamagui-config'
import { render, RenderOptions } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'
import { ReactElement, ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
}

const customRender = (component: ReactElement, options?: RenderOptions) => {
  return render(component, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
