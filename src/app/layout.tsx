import type { Metadata } from "next";
import { Audiowide, Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import UserMenu from "@/components/UserMenu";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Lock } from "lucide-react";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const audiowide = Audiowide({
  variable: '--font-audiowide',
  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'], // if single subset, otherwise you use array like ['latin', 'latin-ext']
})

export const metadata: Metadata = {
  title: "SHOWVR - nn",
  description: "Interactive 3D worlds",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

      const session = await auth.api.getSession({
          headers: await headers() // you need to pass the headers object.
      })

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
        {!session?.user 
          // ? <Link href<Lock /> 
          && <div className="fixed top-2 right-2 border-2 rounded-full bg-background">
          <UserMenu session={session} tenant={''} />  
          <Toaster />
        </div>}
      </body>
    </html>
  );
}
