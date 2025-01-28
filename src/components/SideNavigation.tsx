'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LIST = [
  { label: '홈', url: '/' },
  { label: '프로젝트', url: '/project' },
  { label: '공부', url: '/study' },
  { label: '용어', url: '/term' },
] as const

type NavItemProps = {
  item: (typeof NAV_LIST)[number]
}

const NavItem = React.memo(({ item }: NavItemProps) => {
  const pathname = usePathname()
  const isActive = item.url === '/' ? pathname === '/' : pathname.startsWith(item.url)
  const itemStyle = isActive ? 'bg-black-100 text-black-600' : 'bg-black-600 text-black-100'

  return (
    <Link href={item.url} className={`flex gap-4 rounded-xl px-4 py-3 ${itemStyle}`}>
      <span className="text-xl">{item.label}</span>
    </Link>
  )
})

NavItem.displayName = 'NavItem'

export const SideNavigation = () => (
  <nav className="col-span-1 flex h-fit flex-col justify-center gap-4 rounded-xl bg-black-600 p-4 drop-shadow-sm">
    {NAV_LIST.map((item) => (
      <NavItem key={item.url} item={item} />
    ))}
  </nav>
)
