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
