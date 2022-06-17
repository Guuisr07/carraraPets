import React, { useState } from 'react'
import { Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { credentials } from '../../utils/credentials'

interface SearchProps {
  handleSetDestination: (data: any,details: any) => void
  handleSetOrigin?: (data: any,details: any) => void
}

export const Search: React.FC<SearchProps> = ({
  handleSetDestination
}) => {

  return (
    <GooglePlacesAutocomplete
      placeholder="Para onde vamos?"
      query={{
        key: credentials.googleApi,
        language: 'pt-br',
      }}
      onPress={(data, details) => handleSetDestination(data, details)}
      
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      fetchDetails
      styles={{
        container: {
          width: "100%",
          flex: 0,
        },
        textInputContainer: {
          marginHorizontal: 20,
        },
        textInput: {
          height: 48,
          paddingLeft: 20,
          paddingRight: 20,
          backgroundColor: 'white',
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: "#DDD",
          fontSize: 16
        },
        listView: {
          borderWidth: 1,
          borderColor: "#DDD",
          backgroundColor: "#FFF",
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
        },
        description: {
          fontSize: 16
        },
        row: {
          padding: 20,
          height: 58
        }
      }}
    />
  )
}
