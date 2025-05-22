import React from 'react'
import useStore from '../store/useStore';
const Feed = () => {
     const { posts, toggleLike } = useStore();
  return (
    <section className="flex-1 max-w-2xl space-y-6">
          {/* Create Post placeholder */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex space-x-3 mb-3">
              <img
                src="https://i.pravatar.cc/40?img=54"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex justify-between text-gray-600 text-sm select-none">
              <button className="hover:bg-gray-100 rounded-md px-3 py-1 flex items-center space-x-1">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41 1 4.5 2.09C13.09 4 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>Live Video</span>
                 </button>
              <button className="hover:bg-gray-100 rounded-md px-3 py-1 flex items-center space-x-1">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 10h-3.17l-1.79-1.79a2.5 2.5 0 00-3.54 0L9 10H6v11h12z" />
                </svg>
                <span>Photo/Video</span>
              </button>
              <button className="hover:bg-gray-100 rounded-md px-3 py-1 flex items-center space-x-1">
                <svg
                  className="h-5 w-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12m-9 0a9 9 0 1118 0 9 9 0 01-18 0z" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <span>Feeling/Activity</span>
              </button>
                </div>
          </div>
          {/* Posts */}
          {posts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col gap-3"
            >
              <header className="flex items-center gap-3">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{post.user.name}</p>
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
              </header>
              <p className="text-gray-800">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="Post visual content"
                  className="rounded-lg max-h-96 object-cover w-full"
                />
              )}
              <section className="flex justify-between text-gray-600 text-sm select-none border-t pt-2">
                <button
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center space-x-2 hover:text-blue-600 focus:outline-none"
                  aria-pressed={post.liked}
                >
                  <svg
                    className={`w-5 h-5 fill-current ${
                      post.liked ? 'text-blue-600' : 'text-gray-600'
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41 1 4.5 2.09C13.09 4 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span>{post.likesCount}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-gray-700 focus:outline-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H7a2 2 0 01-2-2v-2" />
                  </svg>
                  <span>{post.commentsCount}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-gray-700 focus:outline-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <span>Share</span>
                </button>
              </section>
            </article>
          ))}
        </section>
  )
}

export default Feed