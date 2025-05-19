import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

const DashboardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
        {/* {session 
            ? <pre className='text-xs'>{JSON.stringify(session, null, 2)}</pre>
            : <p className='text-xs'>No session found</p>} */}
        <div className='flex gap-2'>
          <Link href="/connections"><Button>Connections</Button></Link>
          <Link href="/posts"><Button>Posts</Button></Link>
        </div>
    </div>
  )
}

export default DashboardPage