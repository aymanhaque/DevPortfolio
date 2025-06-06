import About from './components/custom/about'
import Navbar from './components/custom/navbar'
import Skills from './components/custom/skills'
import Projects from './components/custom/projects'



function App() {
  return (
    <>
      <Navbar/>
      <div className='max-w-screen-2xl mx-auto mt-110'>
        <About/>
        <Skills/>
        <Projects/>
      </div>
      
    </>
  )
}

export default App
