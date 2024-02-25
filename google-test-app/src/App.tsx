import { useState } from 'react'
import "./sass/main.scss"
import Menu from './components/Menu'
import Search from './components/Search';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='main'>
        <Menu />
        <Search />
      </main>
    </>
  )
}

export default App
