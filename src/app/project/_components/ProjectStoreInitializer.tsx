'use client'

import { type PropsWithChildren, useEffect } from 'react'

import { useProjectActions } from '@/store/project'
import { useSearchActions } from '@/store/search'
import { useTagActions } from '@/store/tag'

export const ProjectStoreInitializer = ({ children }: PropsWithChildren) => {
  const { resetProjects } = useProjectActions()
  const { setActiveTag } = useTagActions()
  const { resetQuery } = useSearchActions()

  useEffect(() => {
    resetProjects()
    setActiveTag('전체')
    resetQuery()
  }, [resetProjects, resetQuery, setActiveTag])

  return <>{children}</>
}
