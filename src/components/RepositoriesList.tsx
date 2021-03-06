import {
  ChangeEventHandler,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react'
import { useActions, useTypedSelector } from '../hooks'

export const RepositoriesList: FunctionComponent = () => {
  const [text, setText] = useState('')
  const repositories = useTypedSelector((state) => state.repositories)
  const { loading, error, data } = repositories
  const { searchRepositories } = useActions()
  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    setText('')
    searchRepositories(text)
  }
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value.trim())
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={text} />
        <button>Search</button>
      </form>
      {loading && <h3>loading...</h3>}
      {error && <h3>{error}</h3>}
      {!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}
