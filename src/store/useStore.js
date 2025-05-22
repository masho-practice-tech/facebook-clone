      import React from 'react';
import {create} from 'zustand';
const useStore = create(set => ({
  posts: [
    {
      id: 1,
      user: {
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/40?img=1',
      },
      timestamp: '2 hrs ago',
      content: 'Had a great day at the beach!',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      liked: false,
      likesCount: 12,
      commentsCount: 4,
    },
    {
      id: 2,
      user: {
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/40?img=2',
      },
      timestamp: '5 hrs ago',
      content: 'Check out this amazing recipe I just tried!',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
      liked: true,
      likesCount: 45,
      commentsCount: 10,
    },
  ],
  toggleLike: (id) =>
    set(state => ({
      posts: state.posts.map(post =>
        post.id === id
          ? {
              ...post,
              liked: !post.liked,
              likesCount: post.liked ? post.likesCount - 1 : post.likesCount + 1,
            }
          : post
      ),
    })),
}));

export default useStore;