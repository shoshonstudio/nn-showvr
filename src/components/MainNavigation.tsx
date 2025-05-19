import React from 'react'
import { Button } from './ui/button'
import { Library, LogIn, Plug } from 'lucide-react'
import Link from 'next/link'
import UniDialog from './uniComponents/UniDialog'
// import SessionList from './SessionList'
import EmailSignInForm from './auth/EmailSignInForm'
// import SocialSignInForm from './auth/SocialSignInForm'
import { prisma } from '@/lib/db'

const MainNavigation = async () => {
    const result = await prisma.post.findFirst()

    console.log(result)

  return (
    <div className='flex flex-col justify-center gap-2 blur-xs group-hover:blur-none h-24 group-hover:h-58 overflow-hidden transition-all'>
        <h1 className={`py-4 font-[family-name:var(--font-audiowide)] text-5xl delay-400 tracking-tight group-hover:tracking-widest transition-all select-none text-center`}><span className="text-background">show</span>VR</h1>
        <div className='pt-2 hidden opacity-0 group-hover:opacity-100 group-hover:flex delay-500 flex-col gap-2'>
        <Link href={result?.content ?? '/'} className='bg-foreground rounded-md text-background h-14 hover:text-xl w-full flex items-center justify-center gap-4 transition-all'><Plug />DOŁĄCZ</Link>
            {/* <UniDialog trigger={<div className='group bg-foreground rounded-md text-background h-14 hover:text-xl w-full flex items-center justify-center gap-4 transition-all'><Plug />DOŁĄCZ</div>} title='Join session' description='Show available sessions'>
                <SessionList />
            </UniDialog> */}
            <div className="gap-2 w-full flex items-center justify-between transition-all [&>button]:flex-1">
            <Link href="/projects"><Button className=""><Library />BIBLIOTEKA</Button></Link>
            <UniDialog trigger={<div className='bg-foreground rounded-md text-background text-sm p-2 h-9 w-full flex items-center justify-center gap-2 transition-all'>
                <LogIn size={18} />ZALOGUJ</div>
            } title='Podaj email aby się zalogować' description='Na podany adres e-mail zostanie wysłany link do logowania lub jednorazowy kod do wpisania na kolejnym ekranie'>
                <EmailSignInForm />
                {/* <p className='text-background text-sm text-center'>Albo uzyj mediów społecznościowych</p>
                <SocialSignInForm /> */}
            </UniDialog>
            </div>
        </div>
    </div>
  )
}

export default MainNavigation