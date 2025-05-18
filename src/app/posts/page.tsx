import prisma from '@/lib/db'
import React from 'react'

const PostsPage = async () => {

    const posts = await prisma.post.findMany()

  return (
    <div className='container m-auto p-4'>
        <h1 className='text-2xl font-bold'>Posts</h1>
        <p>This is the posts page</p>
        {posts.map(post => (
            <div key={post.id}>
                <p>{post.content} {post.title}</p>
            </div>
        ))}
    </div>
  )
}

export default PostsPage