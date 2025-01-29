import {
  MAX_PAGE_BUTTONS,
  useCurrentGroup,
  useProjectActions,
  useTotalPages,
} from '@/store/project'

export const usePageNumbers = () => {
  const currentGroup = useCurrentGroup()
  const totalPages = useTotalPages()

  const startPage = currentGroup * MAX_PAGE_BUTTONS + 1
  const endPage = Math.min(startPage + MAX_PAGE_BUTTONS - 1, totalPages)

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
}

export const useCanGoPrevGroup = () => {
  const currentGroup = useCurrentGroup()
  const canGoPrevGroup = currentGroup > 0
  const { setCurrentGroup, setCurrentPage } = useProjectActions()

  const handlePrevGroup = () => {
    if (canGoPrevGroup) {
      setCurrentGroup(currentGroup - 1)
      setCurrentPage(currentGroup * MAX_PAGE_BUTTONS)
    }
  }

  return { canGoPrevGroup, handlePrevGroup }
}

export const useCanGoNextGroup = () => {
  const currentGroup = useCurrentGroup()
  const totalPages = useTotalPages()
  const canGoNextGroup = (currentGroup + 1) * MAX_PAGE_BUTTONS < totalPages
  const { setCurrentPage, setCurrentGroup } = useProjectActions()

  const handleNextGroup = () => {
    if (canGoNextGroup) {
      setCurrentGroup(currentGroup + 1)
      setCurrentPage(currentGroup * MAX_PAGE_BUTTONS + MAX_PAGE_BUTTONS + 1)
    }
  }

  return { canGoNextGroup, handleNextGroup }
}
