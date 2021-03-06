import axios from 'axios'
import { Dispatch } from 'redux'

import { ActionType } from '../actionTypes'
import {
  RepositoriesAction,
  SearchRepositoriesFailure,
  SearchRepositoriesRequest,
  SearchRepositoriesSuccess,
} from '../actions'

const searchRepositoriesRequest = (): SearchRepositoriesRequest => ({
  type: ActionType.SearchRepositoriesRequest,
})

const searchRepositoriesSuccess = (data: any): SearchRepositoriesSuccess => ({
  type: ActionType.SearchRepositoriesSuccess,
  payload: data.objects.map((item: any) => item.package.name),
})

const searchRepositoriesFailure = (
  error: Error
): SearchRepositoriesFailure => ({
  type: ActionType.SearchRepositoriesFailure,
  payload: error.message,
})

export const searchRepositories = (text: string) => {
  const thunk = async (dispatch: Dispatch<RepositoriesAction>) => {
    try {
      dispatch(searchRepositoriesRequest())
      const endpoint = 'https://registry.npmjs.org/-/v1/search'
      const options = { params: { text } }
      const response = await axios.get(endpoint, options)
      dispatch(searchRepositoriesSuccess(response.data))
    } catch (error) {
      dispatch(searchRepositoriesFailure(error))
    }
  }
  return thunk
}
