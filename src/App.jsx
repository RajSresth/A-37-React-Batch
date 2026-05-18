import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Topic-14 React Routing/components/Header'


const App = () => {

  const user={username: "chombu", job: "Fullstack Dev"}

  return (
    <div id="app">
      <Header />

      <Outlet context={user} />
    </div>
  )
}

export default App
