import React from 'react'

const LeftSidebar = () => {
  return (
    <aside className="hidden md:block w-64 space-y-4 sticky top-20 self-start h-fit">
          <div className="bg-white rounded-lg shadow p-4 text-gray-700">
            <div className="flex items-center space-x-3 mb-4 cursor-pointer hover:bg-gray-100 rounded-md p-2">
              <img
                src="https://i.pravatar.cc/40?img=54"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">Your Name</p>
                <p className="text-xs text-gray-500">View Profile</p>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full text-left flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100">
                <svg
                  className="h-5 w-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                     <path d="M10 5a3 3 0 110 6 3 3 0 010-6zm0 8a6 6 0 00-6 6h12a6 6 0 00-6-6z" />
                </svg>
                Friends
              </button>
              <button className="w-full text-left flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 5h12v10H4z" />
                </svg>
                Groups
              </button>
              <button className="w-full text-left flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100">
                <svg
                  className="h-5 w-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10L14 10M10 6L10 14" />
                </svg>
                Marketplace
              </button>
               </div>
          </div>
        </aside>
  )
}

export default LeftSidebar