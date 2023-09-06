import { ReactNode } from 'react'
import Navbar from '@/components/navbar'

export default function Layout ({ children }: { children: ReactNode }) {
  return <main className="grid grid-cols-6 h-full">
    <Navbar />
    <main>
      {children}
    </main>
  </main>
}