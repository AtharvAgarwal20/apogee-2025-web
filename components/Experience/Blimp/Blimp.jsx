/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Blimp({ scale = 1, position = [0, 0, 0], ...props }) {
  const { nodes, materials } = useGLTF("/models/AirshipFinal.glb");

  const blimpRef = useRef();

  useEffect(() => {
    blimpRef.current.rotation.y = Math.PI / 2;
  }, []);

  useFrame((state, delta) => {
    const rotSpeedFactor = 10;
    blimpRef.current.position.x =
      Math.sin(state.clock.elapsedTime / rotSpeedFactor) * 3;
    blimpRef.current.position.z =
      -Math.cos(state.clock.elapsedTime / rotSpeedFactor) * 3;
    blimpRef.current.rotation.y -= delta / rotSpeedFactor;
    // console.log(blimpRef.current.rotation.y);
    // console.log(state.camera.position);
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={scale}
      position={position}
      ref={blimpRef}
    >
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["air Ship"]}
        position={[0, 0.24, -2.103]}
      />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials.glass} />
    </group>
  );
}

useGLTF.preload("/models/AirshipFinal.glb");
