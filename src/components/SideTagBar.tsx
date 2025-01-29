'use client'

import { useActiveTag, useTagActions, useTagList } from '@/store/tag'

import { Tag } from './Tag'

export const SideTagBar = () => {
  const tagList = useTagList()
  const activeTag = useActiveTag()
  const { setActiveTag } = useTagActions()

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag)
  }
  return (
    <div className="flex-column col-span-1 h-fit rounded-xl bg-black-600  p-4">
      {tagList.map((tag) => (
        <Tag key={tag} secondary={activeTag === tag} onClick={() => handleTagClick(tag)}>
          {tag}
        </Tag>
      ))}
    </div>
  )
}
