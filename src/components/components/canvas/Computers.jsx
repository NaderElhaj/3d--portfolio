
import { Canvas } from "@react-three/fiber"
import { OrbitControls , Preload , useGLTF } from "@react-three/drei"
import  CanvasLoader from  '../Loader'
import { Suspense, useEffect, useState } from "react"
const Computers = ({isMobile}) => {
  const  computer=useGLTF("./desktop_pc/scene.gltf")
  return (
    <mesh >
      <hemisphereLight  intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={isMobile ? 0.5 : 0.75} position = {isMobile ? [0,-3,-1.5] :  [0,-3.25,-1.05]} rotation = {[-0.01,-0.2,-0.1]} />
    </mesh>
  )
}
const ComputerCanvas = () => {
   const [isMobile,setIsMobile]=useState("")
   useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width : 500px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQuieryChange = (event) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener("change",handleMediaQuieryChange)
    return ()=> {
      mediaQuery.removeEventListener("change",handleMediaQuieryChange)
    }
   })
  return (
    <Suspense fallback={<CanvasLoader/>} >
    <Canvas frameloop="demand"
      shadows
      camera={{position : [20,3,5],fov : 25}}
      gl={{preserveDrawingBuffer:true}}
    >
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2} 
        minPolarAngle={Math.PI/2} 
        
        />
        <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
      </Suspense>
  )
}

export default ComputerCanvas