import React from 'react'
import Chat from '../components/Chat'
import Chatlist from '../components/Chatlist'
import SidebarC from '../components/SidebarC'

const HomeC = () => {
  return (
      <div className="Chatcontainer">
        <SidebarC/>
        <Chatlist/>
      </div>
  )
}

export default HomeC