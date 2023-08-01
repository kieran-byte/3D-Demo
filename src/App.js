import React, { useRef } from "react";
import {Canvas, useFrame} from 'react-three-fiber'
import { MapControls, Stats } from "@react-three/drei";
import { extend } from '@react-three/fiber'
import Helvetica from './helvetica.json'
import {  OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";




const CustomSphere = (props) =>{
  const sphereRef = useRef();

  useFrame(() => {
    sphereRef.current.rotation.x += 0.05;
    
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[props.x, props.y, props.z]} position={[props.xPos, props.yPos, props.zPos]}/>
      <meshLambertMaterial color={"white"} />
    </mesh>
  );
}



const Torus = () => {
  const torusRef = useRef();

  useFrame(() => {
    torusRef.current.rotation.x += 0.03;
    torusRef.current.rotation.y += 0.03;
  });

  return (
    <mesh ref={torusRef}>
      <torusGeometry args={[1, 0.2, 12, 36]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};


const Wall = () => {
  const wallRef = useRef();

  return (
    <mesh ref={wallRef} position={[3,10,3]}>
      <boxGeometry args={[3, 20, 20]} />
      <meshLambertMaterial color={"white"} />
    </mesh>
  );
}



const Glass = () => {
  const glassRef = useRef();


  // useFrame(() => {
  //    glassRef.current.position.x += 0.8;
  // });

  return (
    <mesh ref={glassRef} position={[0.81,9.5,2.5]}>
      <boxGeometry args={[1, 18, 20]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};




function App() {
  return (
    <Canvas
      style={{ height: 1080, width: 1920 }}
      camera={{ position: [20, 20, 20], zoom: 1, up: [0, 0, 1], far: 1000, }}
    > 
    <color attach="background" args={["Black"]} />


 
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[0, 10, 5]} />


      <Text
        position={[4,-10,10]}
        scale={[10, 10, 10]}
        color="white" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        Glass doesn't fit?
        </Text>

      <Wall></Wall>

      <OrbitControls makeDefault/>
      <Glass></Glass>

      <MapControls />
      <Stats />

    </Canvas>
  );
}

export default App;