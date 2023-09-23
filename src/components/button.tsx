import { ReactNode } from 'react'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  value?: string;
  children?: ReactNode | string;
}

const Button = ({ type = "button", children }: ButtonProps) => {
  return <button
      type={type}
      className="rounded-md bg-indigo-600 mx-1 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
    {children}
  </button>
}
export default Button