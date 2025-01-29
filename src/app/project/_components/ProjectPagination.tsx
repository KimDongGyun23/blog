'use client'

import { CaretLeftIcon, CaretRightIcon } from '@/components/Icons'
import { useCanGoNextGroup, useCanGoPrevGroup, usePageNumbers } from '@/hooks/usePagenation'
import { useCurrentPage, useProjectActions, useTotalPages } from '@/store/project'

export const ProjectPagination = () => {
  const currentPage = useCurrentPage()
  const totalPages = useTotalPages()
  const pageNumbers = usePageNumbers()
  const { canGoPrevGroup, handlePrevGroup } = useCanGoPrevGroup()
  const { canGoNextGroup, handleNextGroup } = useCanGoNextGroup()
  const { setCurrentPage } = useProjectActions()

  if (totalPages <= 1) return null

  return (
    <div className="mt-4 flex justify-center">
      {canGoPrevGroup && (
        <button
          onClick={handlePrevGroup}
          className="mx-1 rounded bg-black-200 px-0.5 py-1 text-black-600"
        >
          <CaretLeftIcon />
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`mx-1 rounded px-3 py-1 ${
            currentPage === page ? 'bg-black-600 text-white' : 'bg-black-200 text-black-600'
          }`}
        >
          {page}
        </button>
      ))}

      {canGoNextGroup && (
        <button
          onClick={handleNextGroup}
          className="mx-1 rounded bg-black-200 px-0.5 py-1 text-black-600"
        >
          <CaretRightIcon />
        </button>
      )}
    </div>
  )
}
