'use client'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'

import { useTagActions } from '@/store/tag'

import { PROJECT_LIST } from '../_post'

export const ProjectDetailClient = () => {
  const { id } = useParams()
  const { setActiveTag } = useTagActions()

  const project = PROJECT_LIST.find((item) => item.id === Number(id))

  useEffect(() => {
    if (project?.tag) {
      setActiveTag(project.tag)
    }
  }, [project, setActiveTag])

  if (!project) return null

  const ComponentToRender = project.page

  return <ComponentToRender />
}
