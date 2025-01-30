import { ProjectList } from './_components/ProjectList'
import { ProjectPagination } from './_components/ProjectPagination'
import { ProjectSearchBar } from './_components/ProjectSearchBar'
import { ProjectStoreInitializer } from './_components/ProjectStoreInitializer'

const page = () => {
  return (
    <ProjectStoreInitializer>
      <main className="flex-column h-full">
        <ProjectSearchBar />
        <ProjectList />
        <ProjectPagination />
      </main>
    </ProjectStoreInitializer>
  )
}

export default page
