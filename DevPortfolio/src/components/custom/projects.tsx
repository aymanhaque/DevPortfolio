import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Card } from "../ui/Card"

const Projects = () => {
  return (
    <div className='mt-30 w-full'>
            <h1 className='text-7xl text-neutral-200 flex justify-center mb-5'>Projects</h1>
            <div className='flex justify-center m-20'>
                <Card/>
            </div>
        </div>
  )
}

export default Projects