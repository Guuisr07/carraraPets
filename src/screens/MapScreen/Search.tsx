import React, { useState } from 'react'
import { Platform } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { credentials } from '../../utils/credentials'

interface SearchProps {
  handleSetDestination: () => {}
}

export const Search: React.FC<SearchProps> = ({
  handleSetDestination
}) => {

  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      query={{
        key: credentials.googleApi,
        language: 'pt-br',
      }}
      onPress={handleSetDestination}
      textInputProps={{
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      enablePoweredByContainer={false}
      fetchDetails
      styles={{
        container: {
          position: "absolute",
          width: "100%"
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: "transparent",
          height: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0
        },
        textInput: {
          height: 54,
          paddingLeft: 20,
          paddingRight: 20,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: "#DDD",
          fontSize: 18
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
          marginTop: 10
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
