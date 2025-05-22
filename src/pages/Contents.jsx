import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'

const Contents = () => {
  return (
    <main className="flex flex-1 pt-4 px-2 md:px-6 bg-gray-100 max-w-7xl mx-auto w-full space-x-4">
        <LeftSidebar />
        <Feed/>
        <RightSidebar />
    </main>
  )
}

export default Contents