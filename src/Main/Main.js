import React from 'react'
import Search from './Search'
import Card from './Card'
import './Main.css'

export default function Main() {
  return (
    <div className='mainArea'>
        <div className='mainBOX'>
          <Search/>
          <Card/>
        </div>
    </div>
  )
}
