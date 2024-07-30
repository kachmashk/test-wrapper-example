import { tamaguiConfig } from '@/tamagui-config'
import { Button, ButtonProps } from './Button'
import { render, screen, fireEvent } from '@testing-library/react-native'
import { TamaguiProvider } from 'tamagui'

const defaultProps: ButtonProps = {
  label: 'Label',
  onPress: jest.fn(),
}

describe('Button', () => {
  it('renders label', () => {
    const label = 'My custom label'
    render(
      <TamaguiProvider config={tamaguiConfig}>
        <Button {...defaultProps} label={label} />
      </TamaguiProvider>
    )
    expect(screen.getByText(label)).toBeOnTheScreen()
  })

  it('calls onPress', () => {
    const onPress = jest.fn()
    render(
      <TamaguiProvider config={tamaguiConfig}>
        <Button {...defaultProps} onPress={onPress} />
      </TamaguiProvider>
    )

    fireEvent.press(screen.getByTestId('ButtonID'))
    expect(onPress).toHaveBeenCalled()
  })
})
