import React, { Suspense, useRef, useState } from "react";
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
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import "../styles.css";
import { Stars, Cloud } from "drei";
import Effects from "../effects/Effects";

const Sun = () => {
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.0001;
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]} onClick={(e) => setActive(!active)}>
      <sphereBufferGeometry attach="geometry" args={[60, 33, 32]} />
      <meshBasicMaterial
        attach="material"
        color={active ? "yellow" : "orange"}
        roughness={1}
        metalness={0}
        intensity={1.2}
      />
      <Effects />
      <pointLight
        distance={4000}
        decay={1}
        position={[0, 0, 0]}
        color="#ffffff"
        skyColor="#ffffbb"
        groundColor="#080820"
        intensity={1.0}
      />
    </mesh>
  );
};

const Planet1 = () => {
  const [active, setActive] = useState(false);
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.00015;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.0001;
  });
  return (
    <group ref={group}>
      <mesh
        ref={mesh}
        position={[600, 0, 0]}
        onClick={(e) => setActive(!active)}
      >
        <sphereBufferGeometry attach="geometry" args={[10, 33, 32]} />
        <meshPhongMaterial
          attach="material"
          color={active ? "yellow" : "orange"}
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Effects />
      </mesh>
    </group>
  );
};

const Planet2 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.00009;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.00025;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[900, 20, 0]}>
        <sphereBufferGeometry attach="geometry" args={[10, 33, 32]} />
        <meshPhongMaterial
          attach="material"
          color="blue"
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Effects />
      </mesh>
    </group>
  );
};

const Planet3 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.00025;
    group.current.rotation.z += 0.00005;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.00012;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[1400, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[20, 33, 32]} />
        <meshPhongMaterial
          attach="material"
          color="beige"
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Effects />
      </mesh>
    </group>
  );
};

const Planet4 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.000065;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.00025;
  });
  return (
    <group ref={group}>
      <mesh ref={mesh} position={[1700, 0, 0]}>
        <sphereBufferGeometry attach="geometry" args={[20, 33, 32]} />
        <meshPhongMaterial
          attach="material"
          color="red"
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Effects />
      </mesh>
    </group>
  );
};

const Planet5 = () => {
  const group = useRef();
  useFrame(() => {
    group.current.rotation.y += 0.000065;
  });

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.00025;
  });

  const ring = useRef();

  return (
    <group ref={group}>
      <mesh ref={mesh} position={[2000, 0, 1000]}>
        <sphereBufferGeometry attach="geometry" args={[30, 33, 30]} />
        <meshPhongMaterial
          attach="material"
          color="white"
          opacity={1}
          roughness={1}
          metalness={0}
        />
        <Effects />
      </mesh>
      <mesh ref={ring} position={[1995, -1, 1000]} rotation={[1, 10, 15]}>
        <torusBufferGeometry args={[40, 2, 3, 50]} />
        <meshPhongMaterial
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

const AsteroidBelt = () => {
  const group = useRef();
  const mesh = useRef();
  return (
    <group ref={group}>
      <Suspense fallback={null}>
        <mesh ref={mesh} position={[3000, 0, 0]}>
          <sphereBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
          <meshPhongMaterial
            attach="material"
            color="white"
            opacity={1}
            roughness={1}
            metalness={0}
          />
        </mesh>
      </Suspense>
    </group>
  );
};
function System1() {
  return (
    <group>
      <Sun />
      <Planet1 />
      <Planet2 />
      <Planet3 />
      <Planet4 />
      <Planet5 />
      <AsteroidBelt />
    </group>
  );
}
export default System1;
