import { tamaguiConfig } from '@/tamagui-config'
import { Button, ButtonProps } from './Button'
import { render, screen, fireEvent } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'
import { FC } from 'react'

const defaultProps: ButtonProps = {
  label: 'Label',
  onPress: jest.fn(),
}

const Component: FC<ButtonProps> = (props) => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Button {...props} />
    </TamaguiProvider>
  )
}

describe('Button', () => {
  it('renders label', () => {
    const label = 'My custom label'
    render(<Component {...defaultProps} label={label} />)
    expect(screen.getByText(label)).toBeOnTheScreen()
  })

  it('calls onPress', () => {
    const onPress = jest.fn()
    render(<Component {...defaultProps} onPress={onPress} />)

    fireEvent.press(screen.getByTestId('ButtonID'))
    expect(onPress).toHaveBeenCalled()
  })
})
