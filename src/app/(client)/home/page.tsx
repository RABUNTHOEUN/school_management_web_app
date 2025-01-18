import { BannerHomePage } from '@/components/client/banner'
import HeaderHome from '@/components/client/header/page'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='mx-auto max-w-screen-2xl'>
        <nav>
          <HeaderHome />
        </nav>

        <main>
          <BannerHomePage />
        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default HomePage
