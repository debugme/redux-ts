import { FunctionComponent } from 'react'
import { Provider } from 'react-redux'

import { store } from '../state'

import { RepositoriesList } from './RepositoriesList'

export const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <h3>Search Packages</h3>
      <RepositoriesList />
    </Provider>
  )
}
