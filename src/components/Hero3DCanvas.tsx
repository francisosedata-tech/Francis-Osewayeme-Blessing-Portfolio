import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DCanvasProps {
  mode: 'wireframe' | 'globe';
  colorTheme: 'cyan' | 'amber' | 'green';
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ mode, colorTheme }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    containerRef.current.appendChild(renderer.domElement);

    // Color resolution
    let primaryHex = 0x00f0ff;
    let secondaryHex = 0xb026ff;
    if (colorTheme === 'amber') {
      primaryHex = 0xffb347;
      secondaryHex = 0xff007f;
    } else if (colorTheme === 'green') {
      primaryHex = 0x00ff66;
      secondaryHex = 0x0099ff;
    }

    const group = new THREE.Group();
    scene.add(group);

    let meshObject: THREE.Object3D;

    if (mode === 'wireframe') {
      // Geometric Icosahedron with Wireframe + Inner Core
      const geometry = new THREE.IcosahedronGeometry(1.8, 2);
      const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: primaryHex,
        wireframe: true,
        transparent: true,
        opacity: 0.65
      });
      meshObject = new THREE.Mesh(geometry, wireframeMaterial);
      group.add(meshObject);

      // Inner Glowing Core
      const innerGeom = new THREE.OctahedronGeometry(1.0, 1);
      const innerMat = new THREE.MeshBasicMaterial({
        color: secondaryHex,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      const innerMesh = new THREE.Mesh(innerGeom, innerMat);
      group.add(innerMesh);
    } else {
      // 3D Cyber Globe with Data Nodes
      const globeRadius = 1.6;
      const sphereGeom = new THREE.SphereGeometry(globeRadius, 24, 24);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: primaryHex,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      });
      meshObject = new THREE.Mesh(sphereGeom, sphereMat);
      group.add(meshObject);

      // Data Node Points around the globe
      const particleCount = 180;
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;
        positions[i * 3] = globeRadius * 1.05 * Math.cos(theta) * Math.sin(phi);
        positions[i * 3 + 1] = globeRadius * 1.05 * Math.sin(theta) * Math.sin(phi);
        positions[i * 3 + 2] = globeRadius * 1.05 * Math.cos(phi);
      }

      const pointGeom = new THREE.BufferGeometry();
      pointGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const pointMat = new THREE.PointsMaterial({
        color: secondaryHex,
        size: 0.08,
        transparent: true,
        opacity: 0.9
      });
      const pointsMesh = new THREE.Points(pointGeom, pointMat);
      group.add(pointsMesh);
    }

    // Outer Ambient Particles Matrix
    const particlesCount = 200;
    const pPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pPositions[i] = (Math.random() - 0.5) * 12;
    }
    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMaterial = new THREE.PointsMaterial({
      color: primaryHex,
      size: 0.04,
      transparent: true,
      opacity: 0.4
    });
    const particleSystem = new THREE.Points(pGeometry, pMaterial);
    scene.add(particleSystem);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      group.rotation.x += 0.003;
      group.rotation.y += 0.005;

      particleSystem.rotation.y -= 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [mode, colorTheme]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] md:min-h-[450px] relative pointer-events-none"
    />
  );
};
