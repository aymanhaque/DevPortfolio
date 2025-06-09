import About from './components/custom/about'
import Navbar from './components/custom/navbar'
import Skills from './components/custom/skills'
import Projects from './components/custom/projects'



function App() {
  return (
    <>
      <Navbar/>
      <div className='w-full mt-110'>
        <div className='max-w-screen-2xl mx-auto'>
        <About/>
        </div>
          <Skills/>
          <div className='max-w-screen-2xl mx-auto'>
            <Projects/>
          </div>
      </div>
      
    </>
  )
}

export default App
