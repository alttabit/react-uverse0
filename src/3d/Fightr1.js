import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useLoader,
  useFrame,
  useThree,
} from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import "../styles.css";
import { Stars } from "drei";
import Effects from "../effects/Effects";

extend({ EffectComposer });

function Camera(props) {
  const ref = useRef();
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system

  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
}

const Fightr = () => {
  const group = useRef();
  const mesh = useRef();

  return (
    <group ref={group}>
      <mesh ref={mesh} position={[800, 100, 0]}>
        <boxBufferGeometry attach="geometry" args={[4, 4, 4]} />
        <meshPhongMaterial
          attach="material"
          color="orange"
          opacity={1}
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
      <Camera position={[0, 20, 45]} near={1} far={1000} />
      <Fightr />
    </group>
  );
}
export default Fightr1;
