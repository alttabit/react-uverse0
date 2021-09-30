import React, { useRef, Suspense } from "react";

import {
  Canvas,
  useLoader,
  extend,
  useFrame,
  useThree,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";

import "../styles.css";

extend({ EffectComposer });

const Fightr = () => {
  const { nodes } = useLoader(GLTFLoader, "/fightr1.glb");

  return (
    <group>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshPhongMaterial
          attach="material"
          color="orange"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

function Fightr1() {
  return (
    <group>
      <Fightr />
    </group>
  );
}
export default Fightr1;
