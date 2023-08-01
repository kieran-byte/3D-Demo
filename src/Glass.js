import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxGeometry } from "three";

const Glass = ({ position }) => {
  const glassRef = useRef();

  // Animation logic inside the Glass component using useFrame
  useFrame((state, delta) => {
    // Move the glass along the X-axis (slide into the wall)
    glassRef.current.position.x -= delta * 1.5;
  });

  return (
    <mesh ref={glassRef} position={position}>
      <BoxGeometry args={[1, 2, 0.1]} />
      <meshPhysicalMaterial color="blue" transparent opacity={0.7} />
    </mesh>
  );
};

export default Glass;