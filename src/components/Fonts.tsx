import { PropsWithChildren } from 'react'

type TextComponentProps = PropsWithChildren<{
  className?: string
}>

export const Title = ({ children, className = '' }: TextComponentProps) => {
  return <h2 className={`mb-10 text-4xl font-bold text-black-700 ${className}`}>{children}</h2>
}

export const SubTitle = ({ children, className = '' }: TextComponentProps) => {
  return <h3 className={`mb-8 text-3xl font-bold text-black-700 ${className}`}>{children}</h3>
}

export const H1 = ({ children, className = '' }: TextComponentProps) => {
  return <h3 className={`mb-7 text-2xl font-bold text-black-700 ${className}`}>{children}</h3>
}

export const H2 = ({ children, className = '' }: TextComponentProps) => {
  return <h4 className={`mb-6 text-xl font-bold text-black-700 ${className}`}>{children}</h4>
}

export const H3 = ({ children, className = '' }: TextComponentProps) => {
  return <h5 className={`mb-5 text-lg font-bold text-black-700 ${className}`}>{children}</h5>
}

export const P1 = ({ children, className = '' }: TextComponentProps) => {
  return <p className={`mb-5 text-lg font-medium text-black-500 ${className}`}>{children}</p>
}

export const P2 = ({ children, className = '' }: TextComponentProps) => {
  return <p className={`mb-4 text-md font-medium text-black-500 ${className}`}>{children}</p>
}

export const P3 = ({ children, className = '' }: TextComponentProps) => {
  return <p className={`mb-3 text-sm font-medium text-black-500 ${className}`}>{children}</p>
}
