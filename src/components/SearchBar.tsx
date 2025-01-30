import type { ChangeEvent, FormEvent } from 'react'

import { useProjectActions } from '@/store/project'
import { useSearchActions, useSearchQuery } from '@/store/search'

import { SearchBrushIcon, SearchIcon } from './Icons'

type SearchBarProps = {
  onSubmit: (formData: FormData) => void
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const query = useSearchQuery()
  const { setQuery } = useSearchActions()
  const { resetProjects } = useProjectActions()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleCancel = () => {
    setQuery('')
    resetProjects()
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-align mb-4 ml-auto w-1/2 rounded-md bg-black-100 py-2 pl-4 pr-3"
    >
      <input
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="검색어를 입력해주세요."
        className="flex-1 bg-transparent text-black-600 outline-none placeholder:text-black-400 focus:outline-none"
      />
      <div className="flex-align gap-2">
        <button onClick={handleCancel}>
          <SearchBrushIcon />
        </button>
        <button type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  )
}
