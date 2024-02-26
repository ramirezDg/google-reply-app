import { useState } from 'react'
import "./sass/main.scss"
import Menu from './components/Menu'
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='w-full h-screen font-roboto flex flex-col justify-between '>
        <Menu />
        <Search />
        <Footer />
      </main>
    </>
  )
}

export default App
