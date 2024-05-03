import React from 'react'
import Post from './components/Post'
import { posts } from './../../api/posts-api'; // Importing the posts array


function Home() {
  return (
    <div>
      {
        posts.map(post => (
          <Post post={post} />
        ))
      }
    </div>
  )
}

export default Home