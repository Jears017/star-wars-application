import { useSelector } from 'react-redux'

export const useAuth = () => {
  const { id, token, email } = useSelector(state => state.user)
  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
