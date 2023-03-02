import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthProviderProps {
  children: ReactNode
}

interface User {
  id: string
  name: string
  fullName: string
  email: string
  photo?: string
}

interface AuthContextData {
  user: User
  signInWithGoogle(): Promise<void>
  signOut(): Promise<void>
  userStorageLoading: boolean
}

interface AuthorizationResponse {
  params: {
    access_token: string
  }
  type: string
}

export const userStorageKey = '@carraraPets:user'

export const AuthContext = createContext({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User)
  const [userStorageLoading, setUserStorageLoading] = useState(true)

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        '982913523664-0ni3vicmadah2ip8b5l8gtqdciojqjnl.apps.googleusercontent.com'
      const REDIRECT_URI = `https://auth.expo.io/@guuisr07/carraraPets`
      const RESPONSE_TYPE = 'token'
      const SCOPE = encodeURI('profile email')

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )
        const userInfo = await response.json()

        const userLogged = {
          id: userInfo.id,
          email: userInfo.email,
          name: userInfo.given_name,
          fullName: userInfo.name,
          photo: userInfo.picture,
        }

        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged))
      }
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const signOut = async () => {
    setUser({} as User)
    await AsyncStorage.removeItem(userStorageKey)
  }

  useEffect(() => {
    const loadStorageUserData = async () => {
      const userStorage = await AsyncStorage.getItem(userStorageKey)

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User
        setUser(userLogged)
      }
      setUserStorageLoading(false)
    }

    loadStorageUserData()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signOut, userStorageLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
