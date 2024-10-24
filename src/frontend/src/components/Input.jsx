const Input = ({icon:Icon,...props}) => {
  return (
    <div className="relative mb-6">
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="size-5 text-red-500" />
    </div>
    <input
     {...props}
     className="w-full py-2 pl-10 pr-3 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-red-400 focus:ring-2 focus:ring-red-400 text-white placeholder-gray-400
     transition duration-200 ease-in-out"
    />
    </div>
  )
}

export default Input