import type { PropsWithChildren } from 'react'

import { Date, SubTitle, Title } from './Fonts'

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="flex-column mb-10">{children}</section>
}

type TitleSectionProps = {
  title: string
  subTitle?: string
  date: string
}

export const TitleSection = ({ title, subTitle, date }: TitleSectionProps) => {
  return (
    <div className="flex-column mb-10 gap-3">
      <Title>{title}</Title>

      <div className="flex-between-align mb-2">
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Date>{date}</Date>
      </div>
    </div>
  )
}

export const GridContainer2 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-2  gap-10">{children}</div>
}

export const GridContainer3 = ({ children }: PropsWithChildren) => {
  return <div className="grid grid-cols-3 gap-6">{children}</div>
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
