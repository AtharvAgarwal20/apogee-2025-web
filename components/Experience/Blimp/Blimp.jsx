/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Blimp({ scale = 1, position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/models/AirshipOptimised1-v1.glb");
  return (
    <group {...props} dispose={null} scale={scale} position={position}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["air Ship"]}
        position={[0, 0.24, -2.103]}
      />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.glass} />
    </group>
  );
}

useGLTF.preload("/models/AirshipOptimised1-v1.glb");
