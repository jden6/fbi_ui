import { ReactNode } from 'react'

interface PageProps {
  title?: string
  children: ReactNode
}

export default function Page ({ children, title }: PageProps) {
  return <div className="pl-3">
    {title ? <div className="h-10 flex items-center"><h3>{title}</h3></div> : null}
    {children}
  </div>
}