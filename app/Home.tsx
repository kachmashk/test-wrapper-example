import { Button } from '@/components'
import { Stack } from 'expo-router'
import { FC } from 'react'
import { YStack } from 'tamagui'

export const Home: FC = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'test wrapper example' }} />
      <YStack flex={1} justifyContent='center' alignItems='center'>
        <Button label='Label' onPress={() => console.log('test')} />
      </YStack>
    </>
  )
}
