import { ProjectList } from './_components/ProjectList'
import { ProjectPagination } from './_components/ProjectPagination'
import { ProjectSearchBar } from './_components/ProjectSearchBar'

const page = () => {
  return (
    <main className="flex-column h-full">
      <ProjectSearchBar />
      <ProjectList />
      <ProjectPagination />
    </main>
  )
}

export default page
