import React from 'react'
import { Text } from 'react-native'

type Welcome = { 
  title: string
}

export const Welcome: React.FC<Welcome> = ({ title }) => {
  return (
    <Text>{title}</Text>
  )
}