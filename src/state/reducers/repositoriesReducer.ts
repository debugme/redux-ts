import { RepositoriesAction } from '../actions'
import { ActionType } from '../actionTypes'

interface RepositoriesState {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error: null,
  data: [],
}

export const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: RepositoriesAction
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SearchRepositoriesRequest:
      return { ...state, loading: true, error: null, data: [] }
    case ActionType.SearchRepositoriesSuccess:
      return { ...state, loading: false, error: null, data: action.payload }
    case ActionType.SearchRepositoriesFailure:
      return { ...state, loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}
