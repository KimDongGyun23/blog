import { create } from 'zustand'

import { PROJECT_LIST } from '@/app/project/detail/[id]/_post'

export const ITEMS_PER_PAGE = 5
export const MAX_PAGE_BUTTONS = 5

type Actions = {
  searchProjects: (query: string) => void
  setCurrentPage: (page: number) => void
  setCurrentGroup: (group: number) => void
  resetProjects: () => void
  filterProjectsByTag: (tag: string | null) => void
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

const initialProjects = PROJECT_LIST

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
      set({
        projects: filtered,
        currentPage: 1,
        currentGroup: 0,
        totalPages: calculateTotalPages(filtered),
      })
    },
    setCurrentGroup: (group) => set({ currentGroup: group }),
    resetProjects: () =>
      set({
        projects: initialProjects,
        currentPage: 1,
        currentGroup: 0,
        totalPages: calculateTotalPages(initialProjects),
      }),
    filterProjectsByTag: (tag) => {
      const filtered =
        tag === '전체' || tag === null
          ? initialProjects
          : initialProjects.filter((project) => project.tag === tag)
      set({
        projects: filtered,
        currentPage: 1,
        currentGroup: 0,
        totalPages: calculateTotalPages(filtered),
      })
    },
  },
}))

export const useProjects = () => useProjectStore((state) => state.projects)
export const useCurrentPage = () => useProjectStore((state) => state.currentPage)
export const useCurrentGroup = () => useProjectStore((state) => state.currentGroup)
export const useTotalPages = () => useProjectStore((state) => state.totalPages)
export const useProjectActions = () => useProjectStore((state) => state.actions)
