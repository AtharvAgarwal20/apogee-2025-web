/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function EventsBoard({ scale = 1, position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/models/EventsBoard.glb");
  return (
    <group {...props} dispose={null} position={position} scale={scale}>
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-0.23, -0.943, -0.657]}
        scale={[1.032, 1, 1]}
      />
      <mesh
        geometry={nodes.Text250.geometry}
        material={materials.Material}
        position={[-0.253, -0.942, -0.628]}
      />
    </group>
  );
}

useGLTF.preload("/models/EventsBoard.glb");
