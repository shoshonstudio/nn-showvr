import React from 'react'

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='bg-[url(/vr.png)] bg-fixed bg-cover bg-center text-foreground'>{children}</div>
  )
}

export default MainLayout