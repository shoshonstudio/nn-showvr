import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='grid place-items-center h-screen'>
        {children}
    </main>
  )
}

export default AuthLayout