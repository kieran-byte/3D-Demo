import React from "react";

const Wall = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[5, 3, 0.2]} />
      <meshPhysicalMaterial color="gray" />
    </mesh>
  );
};

export default Wall;