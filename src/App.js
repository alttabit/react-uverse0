import React, { Suspense, useRef } from "react";

import { Canvas, extend, useFrame, useThree } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./styles.css";
import { Stars } from "drei";
import System1 from "./3d/System1";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement, target },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement, target]} />;
};

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 100000], near: 0.01, far: 100000000000 }}
    >
      <CameraControls />
      <group position={[0, 0, 0]}>
        <Suspense fallback={null}></Suspense>
        <System1 />
        <Stars
          radius={2000} // Radius of the inner sphere (default=100)
          depth={200} // Depth of area where stars should fit (default=50)
          count={200} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade="true" // Faded dots (default=false)
        />
      </group>
      <group position={[100000, 0, 0]}>
        <Suspense fallback={null}></Suspense>
        <System1 />
        <Stars
          radius={2000} // Radius of the inner sphere (default=100)
          depth={200} // Depth of area where stars should fit (default=50)
          count={200} // Amount of stars (default=5000)
          factor={2} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade="true" // Faded dots (default=false)
        />
      </group>
      <Stars
        radius={100000000} // Radius of the inner sphere (default=100)
        depth={2000000000} // Depth of area where stars should fit (default=50)
        count={1000} // Amount of stars (default=5000)
        factor={2} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade="true" // Faded dots (default=false)
      />
    </Canvas>
  );
}

export default App;
