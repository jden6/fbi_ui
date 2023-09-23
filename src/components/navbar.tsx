import Link from 'next/link'

export default function Navbar () {
  return <nav className="navbar navbar-expand-lg navbar-light bg-light h-full">
    <div className="h-12 flex justify-center items-center border-b-2">
      <Link className="navbar-brand" href="#">FBI</Link>
    </div>
    <div className="flex flex-col space-y-3 p-5 h-full">
      <ul className="space-y-2">
        <li>
          <Link className="navbar-brand" href="/pages/corporation">기업 정보 검색</Link>
          <ul className="ml-3">
            <li>
              <Link className="navbar-brand" href="/corporation/search">기업 검색</Link>
            </li>
            <li>
              <Link className="navbar-brand" href="/corporation/detail">기업 지표 조회</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="navbar-brand" href="/setting">관리</Link>
          <ul>
            <li>
              <ul className="ml-3">
                <li>
                  <Link className="navbar-brand" href="/setting/user">사용자 관리</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      {/*<Link className="navbar-brand" href="#">메뉴3</Link>*/}
      {/*<Link className="navbar-brand" href="#">메뉴4</Link>*/}
    </div>
  </nav>
}