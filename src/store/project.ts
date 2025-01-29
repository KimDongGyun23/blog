import { create } from 'zustand'

export const ITEMS_PER_PAGE = 5
export const MAX_PAGE_BUTTONS = 5

type Actions = {
  searchProjects: (query: string) => void
  setCurrentPage: (page: number) => void
  setCurrentGroup: (group: number) => void
}

type Project = {
  id: number
  title: string
  date: string
  tag: string
}

type ProjectStore = {
  projects: Project[]
  currentPage: number
  currentGroup: number
  totalPages: number
  actions: Actions
}

const initialProjects = Array.from({ length: 48 }, (_, i) => ({
  id: i,
  title: `부름 2차 리팩토링 ${i}`,
  date: '2024.01.20',
  tag: 'BROOM',
}))

const calculateTotalPages = (projects: Project[]) => Math.ceil(projects.length / ITEMS_PER_PAGE)

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: initialProjects,
  currentPage: 1,
  currentGroup: 0,
  totalPages: calculateTotalPages(initialProjects),
  actions: {
    setCurrentPage: (page) => set({ currentPage: page }),
    searchProjects: (query) => {
      const { projects } = get()
      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query.toLowerCase()) ||
          project.tag.toLowerCase().includes(query.toLowerCase()),
      )
      set({ projects: filtered })
    },
    setCurrentGroup: (group) => set({ currentGroup: group }),
  },
}))

export const useProjects = () => useProjectStore((state) => state.projects)
export const useCurrentPage = () => useProjectStore((state) => state.currentPage)
export const useCurrentGroup = () => useProjectStore((state) => state.currentGroup)
export const useTotalPages = () => useProjectStore((state) => state.totalPages)
export const useProjectActions = () => useProjectStore((state) => state.actions)
