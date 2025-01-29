import { create } from 'zustand'

type Tag = string

type Actions = {
  setTagList: (tags: Tag[]) => void
  setActiveTag: (tag: Tag | null) => void
}

type TagStore = {
  tagList: Tag[]
  activeTag: Tag | null
  actions: Actions
}

export const useTagStore = create<TagStore>((set) => ({
  tagList: ['전체', 'BROOM', '돈두댓', '알콩달콩'],
  activeTag: '전체',
  actions: {
    setTagList: (tags) => set({ tagList: ['전체', ...tags] }),
    setActiveTag: (tag) => set({ activeTag: tag }),
  },
}))

export const useTagList = () => useTagStore((state) => state.tagList)
export const useActiveTag = () => useTagStore((state) => state.activeTag)
export const useTagActions = () => useTagStore((state) => state.actions)
