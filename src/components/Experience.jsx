import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import Lights from "./Lights";

// Rest of your Experience component remains unchanged
export default function Experience() {
  const { scene } = useGLTF("models/treasure.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
      }
    });
  }, [scene]);

  return (
    <>
      <Lights />

      {/* Load and display the 3D model */}
      <primitive position={[0, -1, 0]} object={scene} scale={0.025} />

      <mesh castShadow receiveShadow position={[-1, -0.55, 1]} scale={1.5}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
