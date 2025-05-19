import DeleteButton from '@/components/DeleteButton'
import NewPostForm from '@/components/NewPostForm'
import { Card, CardContent } from '@/components/ui/card'
import { prisma } from '@/lib/db'
import React from 'react'
import UpdateDialog from '@/components/UpdateDialog'

const PostsPage = async () => {

    const posts = await prisma.post.findMany()

  return (
    <div className='container m-auto p-4'>
        <h1 className='text-2xl font-bold'>Posts</h1>
        <p>This is the posts page</p>
        <Card className='max-w-md m-auto'>
            <CardContent>
                <NewPostForm />
            </CardContent>
        </Card>
        <Card className='max-w-md m-auto mt-4'>
            <CardContent>
                {posts.map(post => (
                    <div key={post.id} className='flex justify-between'>
                        <span className='font-bold'>{post.content}</span> 
                        {post.title}
                        <span className='flex justify-between'>
                        <UpdateDialog record={post} />
                        <DeleteButton id={post.id}/>
                        </span>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
  )
}

export default PostsPage