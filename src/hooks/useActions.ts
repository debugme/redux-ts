import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

export const useActions = () => {
  const dispatch = useDispatch()
  const boundActionCreators = bindActionCreators(actionCreators, dispatch)
  return boundActionCreators
}
