export default function Button({ children, className = "", ...props }: any) {
  return (
    <button
      {...props}
      className={`rounded-lg p-2 text-white bg-[#EEBF00] hover:bg-[#13b5ce] transition ${className}`}
    >
      {children}
    </button>
  )
}
