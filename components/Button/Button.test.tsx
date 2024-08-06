import { Button, ButtonProps } from './Button'
import { render, screen, fireEvent } from '@/helpers'

const defaultProps: ButtonProps = {
  label: 'Label',
  onPress: jest.fn(),
}

describe('Button', () => {
  it('renders label', () => {
    const label = 'My custom label'
    render(<Button {...defaultProps} label={label} />)
    expect(screen.getByText(label)).toBeOnTheScreen()
  })

  it('calls onPress', () => {
    const onPress = jest.fn()
    render(<Button {...defaultProps} onPress={onPress} />)

    fireEvent.press(screen.getByTestId('ButtonID'))
    expect(onPress).toHaveBeenCalled()
  })
})
