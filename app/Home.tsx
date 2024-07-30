import { Stack } from 'expo-router'
import { FC } from 'react'
import { Text } from 'react-native'

export const Home: FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Text>Text</Text>
    </>
  )
}
