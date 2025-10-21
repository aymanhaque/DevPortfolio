import About from './components/custom/about'
import Navbar from './components/custom/navbar'
import Skills from './components/custom/skills'
import Projects from './components/custom/projects'
import Contact from './components/custom/contact'



function App() {
  return (
    <>
      <Navbar/>
      <div className='w-full mt-110'>
        <div id="about" className='max-w-screen-2xl mx-auto'>
          <About/>
        </div>
        <div className='w-full' id="skills">
          <Skills/>
        </div>
        <div id="projects" className='max-w-screen-2xl mx-auto'>
          <Projects/>
        </div>
        <div id="contact" className='max-w-screen-2xl mx-auto my-10'>
          <Contact/>
        </div>
      </div>
    </>
  )
}

export default App
