interface InputProps {
  type?: string;
  placeholder?: string;
}

export const Input = ({ type = 'text', placeholder = '입력' }: InputProps) => {
  return <div className="relative rounded-md shadow-sm">
    <input
      className="block w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      type={type}
      placeholder={placeholder}/>
  </div>
}