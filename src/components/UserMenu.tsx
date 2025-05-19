"use client"

import React from 'react'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SignoutButton from '@/components/SignOutButton'
// import { authClient } from '@/lib/auth-client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Session } from '@/types/auth-types'

const UserMenu = ({session, tenant}:{session:Session | null; tenant?:string}) => {

  return (
  <DropdownMenu>
        <DropdownMenuTrigger>
            <div className='w-8 h-8 rounded-full grid place-items-center'>
                <div className='w-8 h-8 bg-foreground/30 rounded-full grid place-items-center'>
                  {session?.user?.image 
                    ? <Image src={session?.user?.image} alt="Avatar" width={30} height={30} className='w-full h-full rounded-full' /> 
                    : <span className='font-bold'>{session?.user?.email.slice(0,2).toUpperCase()}</span>}</div>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
          <DropdownMenuItem className='flex justify-center text-sm'>{session?.user?.role}</DropdownMenuItem>  
          <DropdownMenuSeparator />
            <DropdownMenuItem className='flex justify-between'><Link href={`/${tenant}/profile/${session?.user?.id}`}>Profile</Link></DropdownMenuItem>  
            {session?.user?.role !== 'user' && (<>
              <DropdownMenuItem className='flex justify-between'>Settings</DropdownMenuItem>  
              <DropdownMenuItem className='flex justify-between'><Link href={`/${tenant}/dashboard`}>Dashboard</Link></DropdownMenuItem>  
            </>
            )
            }
          <DropdownMenuSeparator />
            <DropdownMenuItem className='flex justify-between py-0'><SignoutButton tenant={tenant}/></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserMenu