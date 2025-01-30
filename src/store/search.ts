import { create } from 'zustand'

type Actions = {
  setQuery: (query: string) => void
  resetQuery: VoidFunction
}

type QueryStore = {
  query: string
  actions: Actions
}

export const useSearchStore = create<QueryStore>((set) => ({
  query: '',
  actions: {
    setQuery: (query) => set({ query }),
    resetQuery: () => set({ query: '' }),
  },
}))

export const useSearchQuery = () => useSearchStore((state) => state.query)
export const useSearchActions = () => useSearchStore((state) => state.actions)
