import React from 'react'
import BannerProvider from '../context/Banner.context'
import TrendingProvider from '../context/Trending.context'
import Banner from '../pages/Banner'
import Trending from '../pages/Trending'

function Home() {
  return (
    <div className=''>
      <BannerProvider>
<Banner/>
</BannerProvider>
      <TrendingProvider>
        <Trending/>
      </TrendingProvider>
    </div>
  )
}

export default Home