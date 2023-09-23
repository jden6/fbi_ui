function List<T> (list: T[]) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {list.map((item, index) => {
        return <ListItem key={index}/>
      })}
    </ul>
  )
}

export const ListItem = () => {
  return <li className="flex justify-between gap-x-6 py-5">

  </li>
}