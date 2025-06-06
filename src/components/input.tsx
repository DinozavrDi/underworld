export default function Input({ label, className = "", ...props }: any) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-white/80 font-medium">{label}</label>
      <input
        {...props}
        className={`rounded-lg p-2 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-[#16C9E2] ${className}`}
      />
    </div>
  )
}
