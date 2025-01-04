export default function Error({  children } : { children: React.ReactNode}) {
  return (
    <p className="text-center my-4 bg-red-600 p-3 font-bold text-sm text-white uppercase">
        {children}
    </p>
  )
}
