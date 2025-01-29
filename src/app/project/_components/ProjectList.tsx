'use client'

import Link from 'next/link'

import { Tag } from '@/components/Tag'
import { ITEMS_PER_PAGE, useCurrentPage, useProjects } from '@/store/project'

export const ProjectList = () => {
  const projects = useProjects()
  const currentPage = useCurrentPage()

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div className="grow border-t border-t-black-200">
      {currentItems.map((post) => (
        <Link
          key={post.id}
          href={`/project/detail/${post.id}`}
          className="block border-b border-b-black-200 px-4 py-5"
        >
          <div className="flex-between-align mb-3">
            <h6 className="text-2xl font-bold text-black-700">{post.title}</h6>
            <Tag disabled>{post.tag}</Tag>
          </div>
          <p className="text-sm text-black-500">{post.date}</p>
        </Link>
      ))}
    </div>
  )
}
