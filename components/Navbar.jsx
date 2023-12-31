const Navbar =() => {
    return (
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
                  <span className="font-bold">MyApp</span>
                </a>
              </div>
  
              {/* Primary Nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-300 hover:text-gray-900">Home</a>
                <a href="#" className="py-5 px-3 text-gray-300 hover:text-gray-900">About</a>
                <a href="#" className="py-5 px-3 text-gray-300 hover:text-gray-900">Contact</a>
                <a href="#" className="py-5 px-3 text-gray-300 hover:text-gray-900">FAQ</a>
              </div>
            </div>
  
            {/* Secondary Nav */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#" className="py-2 px-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar