import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import {
  Canvas,
  extend,
  useLoader,
  useFrame,
  useThree,
} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./styles.css";
import "./Planets";

const Sun = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" args={[60, 33, 32]} />
      <meshBasicMaterial
        attach="material"
        color="hotpink"
        opacity={1}
        position={[6, 6, 6]}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
};

const Planet1 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.0015;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.001;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[400, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[10, 33, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={1}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

const Planet2 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.001;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[500, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[10, 33, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={1}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

const Planet3 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.0012;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[700, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[20, 33, 32]} />
        <meshBasicMaterial
          attach="material"
          color="white"
          opacity={1}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
};

function Planets() {
  return (
    <Canvas>
      <Sun />
      <Planet1 />
      <Planet2 />
      <Planet3 />
    </Canvas>
  );
}

export default Planets;
