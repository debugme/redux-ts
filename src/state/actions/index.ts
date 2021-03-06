import { ActionType } from '../actionTypes'

export interface SearchRepositoriesRequest {
  type: ActionType.SearchRepositoriesRequest
}

export interface SearchRepositoriesSuccess {
  type: ActionType.SearchRepositoriesSuccess
  payload: string[]
}

export interface SearchRepositoriesFailure {
  type: ActionType.SearchRepositoriesFailure
  payload: string
}

export type RepositoriesAction =
  | SearchRepositoriesRequest
  | SearchRepositoriesSuccess
  | SearchRepositoriesFailure
