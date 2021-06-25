const Header = () => {
  return (
    <div className="max-w-5xl mx-auto pt-8 pb-5 border-b">
      <div className="flex justify-between">
        <div className="flex space-x-5">
          <a href="#" className="text-gray-600  hover:text-gray-300">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            Contact
          </a>
        </div>
        <div>
          <a href="#" className="text-gray-600 font-bold text-xl">
            Camping.
          </a>
        </div>
        <div className="flex space-x-5">
          <a href="#" className="text-gray-600 hover:text-gray-300">
            SignIn
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-300">
            SignUp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
