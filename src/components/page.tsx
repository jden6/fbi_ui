import { ReactNode } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'

interface PageProps {
  title?: string
  children: ReactNode
}

export default function Page ({ children, title }: PageProps) {
  return <div className="pl-1">
    <div className="h-12 border-b-2 flex justify-between items-center">
      <div className="h-10 flex items-center pl-2"><h3>{title ? title : ''}</h3></div>
      <div className="mr-3">
        <HiOutlineUserCircle size={25}/>
      </div>
    </div>
    <div className="px-2">
      {children}
    </div>
  </div>
}