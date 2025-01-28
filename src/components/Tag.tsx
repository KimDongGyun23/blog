import type { PropsWithChildren } from 'react'

type TagProps = {
  secondary?: boolean
  disabled?: boolean
  onClick?: VoidFunction
}

export const Tag = ({
  secondary = false,
  disabled = false,
  onClick,
  children,
}: PropsWithChildren<TagProps>) => {
  const tagStyle = secondary ? 'bg-black-100 text-black-600' : 'bg-black-600 text-black-100'
  return (
    <button
      type="button"
      className={`w-fit shrink-0 rounded-2xl px-4 py-1.5 ${tagStyle}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="font-bold"># {children}</span>
    </button>
  )
}
