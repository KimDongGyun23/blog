import { PropsWithChildren } from 'react'

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="flex-column mb-10">{children}</section>
}

export const GridContainer2 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>
}

export const GridContainer3 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>
}

export const Code = ({ children }: PropsWithChildren) => {
  return (
    <span className="bg-black-100 border border-black-200 rounded-md px-1.5 py-0.5 text-error mx-0.5 font-bold">
      {children}
    </span>
  )
}

export const CodeSection = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-black-100 border border-black-200 rounded-md px-1.5 py-0.5 mb-10 text-black-500 mx-0.5 font-bold whitespace-pre">
      {children}
    </div>
  )
}
