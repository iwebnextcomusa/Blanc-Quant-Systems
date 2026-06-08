import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Define dimensions using container bounding box
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Create Scene, Camera, and WebGLRenderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // Create interactive objects
    // 1. Quantum particle background grid
    const particlesCount = 800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount; i++) {
      // Shimmering data clouds
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Color variations: mix cyan (0.02, 0.7, 0.8) and dark blue (0.05, 0.14, 0.35)
      const ratio = Math.random();
      colors[i * 3] = 0.02 + ratio * 0.1;
      colors[i * 3 + 1] = 0.6 + ratio * 0.4;
      colors[i * 3 + 2] = 0.8 + ratio * 0.2;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Simple custom circular particle shape using Canvas
    const createParticleTexture = () => {
      const pCanvas = document.createElement("canvas");
      pCanvas.width = 16;
      pCanvas.height = 16;
      const ctx = pCanvas.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(6, 182, 212, 0.8)");
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      map: createParticleTexture(),
      depthWrite: false,
    });

    const pointsField = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(pointsField);

    // 2. Main rotating wireframe structure in Center representing "Quantitative core"
    // Let's make an Icosahedron wireframe
    const geometry = new THREE.IcosahedronGeometry(6, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0ea5e9, // Brand Sky Blue
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const mainCore = new THREE.Mesh(geometry, material);
    scene.add(mainCore);

    // Add bright glowing junction node spheres at every vertex of the Icosahedron.
    const vertexPositions = geometry.attributes.position;
    const nodesGroup = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 }); // Cyber Neon Cyan

    for (let i = 0; i < vertexPositions.count; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(
        vertexPositions.getX(i),
        vertexPositions.getY(i),
        vertexPositions.getZ(i)
      );
      nodesGroup.add(node);
    }
    mainCore.add(nodesGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Interactive Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollPercent = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollPercent = window.scrollY / scrollHeight;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handling through ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = Math.floor(entry.contentRect.width || entry.target.clientWidth);
        height = Math.floor(entry.contentRect.height || entry.target.clientHeight);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // Draw/Animation Loop
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow passive rotation
      mainCore.rotation.y = elapsedTime * 0.12;
      mainCore.rotation.x = elapsedTime * 0.08;

      // React to scrolling (dynamic 3D morph based on scrolling depth!)
      // Shift particles field and core based on scroll percentage
      pointsField.position.y = scrollPercent * 10 - 5;
      pointsField.rotation.y = scrollPercent * 1.5;
      
      // Move Core forward/backward to simulate scroll-triggered camera depth
      mainCore.position.z = scrollPercent * 8 - 3;
      mainCore.rotation.z = scrollPercent * 2;

      // Mouse interactive parallax interpolation
      targetX = mouseX * 8;
      targetY = mouseY * 8;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particlesGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full min-h-screen select-none pointer-events-none overflow-hidden"
      id="three-3d-bg"
    >
      <canvas ref={canvasRef} className="block w-full h-full outline-none pointer-events-none" />
    </div>
  );
}
