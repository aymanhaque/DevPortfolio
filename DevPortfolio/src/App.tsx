import About from './components/custom/about'
import Navbar from './components/custom/navbar'
import Skills from './components/custom/skills'




function App() {
  return (
    <>
      <Navbar/>
      <div className='max-w-screen-2xl mx-auto mt-55'>
        <About/>
        <Skills/>
      </div>
      
    </>
  )
}

export default App
