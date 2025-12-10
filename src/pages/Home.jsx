import React from 'react'
import Main from '../components/Home/Main'
import About from '../components/Home/About'
import Skill from '../components/Home/Skill'
import RecentProject from '../components/Home/RecentProject'

export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <RecentProject/>
      {/* <Skill/> */}
    </div>
  )
}
