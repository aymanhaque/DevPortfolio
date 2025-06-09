import About from './components/custom/about'
import Navbar from './components/custom/navbar'
import Skills from './components/custom/skills'
import Projects from './components/custom/projects'



function App() {
  return (
    <>
      <Navbar/>
      <div className='w-full mt-110'>
        <div id="about" className='max-w-screen-2xl mx-auto'>
          <About/>
        </div>
        <div id="skills">
          <Skills/>
        </div>
        <div id="projects" className='max-w-screen-2xl mx-auto'>
          <Projects/>
        </div>
        <div id="contact" className='max-w-screen-2xl mx-auto my-10'>
          <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Contact</h1>
          {/* ...insert contact details or form here... */}
        </div>
      </div>
    </>
  )
}

export default App
