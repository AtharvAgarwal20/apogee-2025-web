/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function TestComp2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/ActualWebsiteModel-v1.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    for (const name of names) {
      actions[name].play();
    }
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Circle001"
          geometry={nodes.Circle001.geometry}
          material={materials["Material__188.001"]}
          position={[4.356, -0.058, 28.076]}
        />
        <mesh
          name="Plane261"
          geometry={nodes.Plane261.geometry}
          material={materials["Material__188.001"]}
          position={[8.031, 7.672, 0.014]}
          rotation={[Math.PI, Math.PI / 2, 0]}
        />
        <mesh
          name="Gear1006"
          geometry={nodes.Gear1006.geometry}
          material={materials["Material__188.001"]}
          position={[42.007, 7.304, -9.353]}
          rotation={[Math.PI / 2, 0.262, 0]}
        />
        <group
          name="Empy"
          position={[34.106, 6.633, -9.511]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="Gear1002"
            geometry={nodes.Gear1002.geometry}
            material={materials["Material__188.001"]}
            position={[-7.901, 0.67, 1.889]}
            rotation={[Math.PI / 2, 1.017, 0]}
            scale={[2.114, 2.195, 2.114]}
          />
          <mesh
            name="Gear1003"
            geometry={nodes.Gear1003.geometry}
            material={materials["Material__188.001"]}
            position={[-16.739, 0.67, 1.201]}
            rotation={[Math.PI / 2, -1.017, -Math.PI]}
            scale={[2.114, 2.195, 2.114]}
          />
          <mesh
            name="Gear1004"
            geometry={nodes.Gear1004.geometry}
            material={materials["Material__188.001"]}
            position={[-7.901, 0.67, -0.138]}
            rotation={[Math.PI / 2, 1.017, 0]}
            scale={[2.114, 2.195, 2.114]}
          />
          <mesh
            name="Gear1007"
            geometry={nodes.Gear1007.geometry}
            material={materials["Material__188.001"]}
            position={[-16.739, 0.67, -0.826]}
            rotation={[Math.PI / 2, -1.017, -Math.PI]}
            scale={[2.114, 2.195, 2.114]}
          />
          <mesh
            name="Gear1016"
            geometry={nodes.Gear1016.geometry}
            material={materials["Material__188.001"]}
            rotation={[2.587, 0, -Math.PI / 2]}
            scale={[1.742, 1.808, 1.742]}
          />
        </group>
        <group
          name="Empty123"
          position={[50.845, 7.304, -10.711]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={3.018}
        >
          <mesh
            name="Gear1005"
            geometry={nodes.Gear1005.geometry}
            material={materials["Material__188.001"]}
            rotation={[Math.PI / 2, 0.262, 0]}
            scale={0.331}
          />
        </group>
        <group
          name="Empty121"
          position={[46.426, 12.805, -10]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <mesh
            name="BrassPipe1406"
            geometry={nodes.BrassPipe1406.geometry}
            material={materials["Material__188.001"]}
            position={[0, -9.639, 0]}
            rotation={[0, -1.571, 0]}
            scale={[2.1, 3.036, 2.1]}
          />
        </group>
        <group
          name="Empy001"
          position={[59.252, 6.634, -9.511]}
          rotation={[0, 0, -Math.PI]}
          scale={-1}
        >
          <mesh
            name="Gear1001"
            geometry={nodes.Gear1001.geometry}
            material={materials["Material__188.001"]}
            rotation={[2.587, 0, -Math.PI / 2]}
            scale={[1.742, 1.808, 1.742]}
          />
          <mesh
            name="Gear1008"
            geometry={nodes.Gear1008.geometry}
            material={materials["Material__188.001"]}
            position={[-53.133, 21.048, -9.526]}
            rotation={[2.587, 0, -Math.PI / 2]}
            scale={[1.742, 1.808, 1.742]}
          />
        </group>
        <mesh
          name="Gear1015"
          geometry={nodes.Gear1015.geometry}
          material={materials["Material__188.001"]}
          position={[36.642, 7.547, -3.181]}
          rotation={[Math.PI / 2, -1.017, Math.PI]}
          scale={[1.564, 1.624, 1.564]}
        />
        <mesh
          name="Gear1017"
          geometry={nodes.Gear1017.geometry}
          material={materials["Material__188.001"]}
          position={[36.642, 7.547, -2.609]}
          rotation={[Math.PI / 2, -1.017, Math.PI]}
          scale={[0.972, 1.009, 0.972]}
        />
        <mesh
          name="Gear1025"
          geometry={nodes.Gear1025.geometry}
          material={materials["Material__188.001"]}
          position={[35.667, 5.58, -2.609]}
          rotation={[-Math.PI / 2, -1.017, 0]}
          scale={[0.972, 1.009, 0.972]}
        />
        <mesh
          name="Gear1026"
          geometry={nodes.Gear1026.geometry}
          material={materials["Material__188.001"]}
          position={[34.447, 3.788, -3.625]}
          rotation={[-Math.PI / 2, -1.017, 0]}
          scale={[1.664, 1.727, 1.664]}
        />
        <mesh
          name="Gear1027"
          geometry={nodes.Gear1027.geometry}
          material={materials["Material__188.001"]}
          position={[32.415, 4.123, -5.168]}
          rotation={[-0.554, 0, Math.PI / 2]}
          scale={[1.664, 1.727, 1.664]}
        />
        <group
          name="Empy002"
          position={[-6.034, 6.634, -39.016]}
          rotation={[Math.PI, 1.571, 0]}
          scale={-1}
        >
          <mesh
            name="Gear1028"
            geometry={nodes.Gear1028.geometry}
            material={materials["Material__188.001"]}
            rotation={[2.587, 0, -Math.PI / 2]}
            scale={[1.742, 1.808, 1.742]}
          />
        </group>
        <mesh
          name="Gear1019"
          geometry={nodes.Gear1019.geometry}
          material={materials["Material__188.001"]}
          position={[34.447, 3.788, -2.361]}
          rotation={[-Math.PI / 2, 1.017, -Math.PI]}
          scale={[0.972, 1.009, 0.972]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/ActualWebsiteModel-v1.glb");
