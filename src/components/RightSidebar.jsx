import React from 'react'

const RightSidebar = () => {
  return (
    <aside className="hidden xl:block w-80 sticky top-20 self-start h-fit space-y-4">
          <div className="bg-white rounded-lg shadow p-4 text-gray-700">
            <h3 className="font-semibold mb-3">Contacts</h3>
            <ul className="space-y-3">
              {[
                { name: 'Emily', avatar: 'https://i.pravatar.cc/40?img=11' },
                { name: 'Michael', avatar: 'https://i.pravatar.cc/40?img=12' },
                { name: 'Sarah', avatar: 'https://i.pravatar.cc/40?img=13' },
                { name: 'David', avatar: 'https://i.pravatar.cc/40?img=14' },
                { name: 'Laura', avatar: 'https://i.pravatar.cc/40?img=15' },
              ].map(contact => (
                <li
                  key={contact.name}
                  className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2 cursor-pointer"
                >
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{contact.name}</span>
                </li>
                ))}
            </ul>
          </div>
        </aside>
     
 
  )
}

export default RightSidebar