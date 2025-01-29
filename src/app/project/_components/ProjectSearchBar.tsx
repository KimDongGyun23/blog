'use client'

import { SearchBar } from '@/components/SearchBar'
import { useProjectActions } from '@/store/project'

export const ProjectSearchBar = () => {
  const { searchProjects } = useProjectActions()
  const handleChange = (formData: FormData) => {
    const query = formData.get('search') as string
    console.log(query)
    searchProjects(query)
  }

  return (
    <>
      <SearchBar onSubmit={handleChange} />
    </>
  )
}
