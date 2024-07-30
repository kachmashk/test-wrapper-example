import { FC } from 'react'
import { Button as TButton } from 'tamagui'

export type ButtonProps = {
  label: string
  onPress: () => void
}

export const Button: FC<ButtonProps> = ({ label, onPress }) => {
  return (
    <TButton testID='ButtonID' onPress={onPress}>
      {label}
    </TButton>
  )
}
