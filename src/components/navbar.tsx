import Link from 'next/link'

export default function Navbar () {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light h-full">
    <div className="h-12 flex justify-center items-center bg-blue-500">
      <Link className="navbar-brand" href="#">FBI</Link>
    </div>
    <div className="flex flex-col space-y-3 p-5 bg-blue-300 h-full">
      <Link className="navbar-brand" href="/menu1">메뉴1</Link>
      <Link className="navbar-brand" href="/menu2">메뉴2</Link>
      <Link className="navbar-brand" href="#">메뉴3</Link>
      <Link className="navbar-brand" href="#">메뉴4</Link>
    </div>
  </nav>
}