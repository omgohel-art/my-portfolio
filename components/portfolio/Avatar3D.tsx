"use client";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Character() {
  const { scene } = useGLTF("/avatar.glb");
  const ref = useRef<THREE.Group>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const clock = useRef(0);

  // Fix materials
  useEffect(() => {
    scene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.emissive = new THREE.Color(0x000000);
        child.material.emissiveIntensity = 0;
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5);
      mouseY.current = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    clock.current = state.clock.elapsedTime;
    const t = clock.current;

    // Smooth mouse follow
    ref.current.rotation.y +=
      (mouseX.current * 0.5 - ref.current.rotation.y) * 0.04;
    ref.current.rotation.x +=
      (-mouseY.current * 0.2 - ref.current.rotation.x) * 0.04;

    // Breathing
    ref.current.position.y =
      -1.0 + Math.sin(t * 0.6) * 0.01;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={1.5}
      position={[0, -1.0, 0]}
    />
  );
}

export default function Avatar3D() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 2.5], fov: 32 }}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[-3, 3, 2]} color="#FF6EB4" intensity={8} />
      <pointLight position={[0, 1, -3]} color="#7C3AED" intensity={10} />
      <pointLight position={[2, 2, 3]} color="#ffffff" intensity={3} />
      <spotLight
        position={[0, 4, 3]}
        angle={0.3}
        intensity={6}
        color="#ffffff"
        penumbra={1}
      />
      <Suspense fallback={null}>
        <Character />
      </Suspense>
    </Canvas>
  );
}
