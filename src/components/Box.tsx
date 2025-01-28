import type { PropsWithChildren } from 'react'

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="flex-column mb-10">{children}</section>
}

export const GridContainer2 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2  gap-4 ">{children}</div>
}

export const GridContainer3 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>
}

export const Code = ({ children }: PropsWithChildren) => {
  return (
    <span className="mx-0.5 rounded-md border border-black-200 bg-black-100 px-1.5 py-0.5 font-bold text-error">
      {children}
    </span>
  )
}

export const CodeSection = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-0.5 mb-10 whitespace-pre rounded-md border border-black-200 bg-black-100 px-1.5 py-0.5 font-bold text-black-500">
      {children}
    </div>
  )
}
