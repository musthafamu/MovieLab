import React from 'react'
import BannerProvider from '../context/Banner.context'
import Banner from '../pages/Banner'
import Trending from '../pages/Trending'

function Home() {
  return (
    <div className=''>
      <BannerProvider>

        <Banner/>
      </BannerProvider>
        <Trending/>
    </div>
  )
}

export default Home