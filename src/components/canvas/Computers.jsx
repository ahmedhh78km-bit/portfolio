import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isLandscape, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Hide on mobile phones in landscape mode (width < 768px in landscape)
  if (isLandscape && isMobile && !isTablet) return null;

  // Adjust scale for different devices and orientations
  let scale = 0.75; // Desktop default
  let position = [0, -3.25, -1.5];

  if (isTablet && !isLandscape) {
    // iPad in portrait mode - smaller
    scale = 0.45;
    position = [0, -2.2, -1.5];
  } else if (isMobile) {
    // Mobile in portrait mode
    scale = 0.70;
    position = [0, -2, -1.5];
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Detect orientation
      setIsLandscape(width > height);
      
      // Detect device type based on both width and height
      // Mobile: smaller dimension < 768px
      const smallerDimension = Math.min(width, height);
      const largerDimension = Math.max(width, height);
      
      if (smallerDimension < 768) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (largerDimension >= 768 && largerDimension <= 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return (
    <div className='w-full h-full overflow-hidden'>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: isMobile ? 60 : 25 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping
            dampingFactor={0.05}
          />
          <Computers isMobile={isMobile} isLandscape={isLandscape} isTablet={isTablet} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
