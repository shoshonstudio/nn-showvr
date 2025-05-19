import MainNavigation from "@/components/MainNavigation";
import { Card, CardContent } from "@/components/ui/card";
import UserMenu from "@/components/UserMenu";
import { auth } from "@/lib/auth";
import { ArrowBigUpDash } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
      const session = await auth.api.getSession({
          headers: await headers() // you need to pass the headers object.
      })

  return (

    <main className="h-screen font-[family-name:var(--font-audiowide)] p-4 flex flex-col justify-between">
      <main className="h-full grid place-content-center">
        <div className="group relative">
          <Card className="bg-white/30 backdrop-blur-sm border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all p-0">
            <CardContent>
              <MainNavigation />
            </CardContent>
          </Card>
          <div className="group-hover:opacity-0 absolute -bottom-30 font-[family-name:var(--font-audiowide)] animate-bounce flex flex-col justify-center items-center w-auto left-[50%] -translate-1/2 text-background drop-shadow-md pt-10"><ArrowBigUpDash /><p>start</p></div>
        </div>
      </main>
      <footer className="row-start-4 flex gap-[1px] flex-wrap items-center justify-center text-background/70 text-sm tracking-widest drop-shadow-md">
        <Link href="http://www.shoshonstudio.com">&copy; 2020 SHOSHONstudio</Link>
      </footer>

        {session?.user && <div className='fixed top-2 right-2 border-2 rounded-full bg-background'>
            <UserMenu session={session} tenant={''} />
        </div>} 
    </main>
  )
}
