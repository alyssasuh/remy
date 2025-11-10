import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import modelPath from "@/assets/eardeviceblend-1-2.glb?url";
import { Button } from "@/components/ui/button";

function Model() {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.25} />;
}

export const ModelViewer = () => {
  return (
    <section className="py-16">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left: Model (1/2 width on md+) */}
        <div className="md:col-span-1">
          <div className="w-full h-[600px] rounded-xl overflow-hidden bg-muted/50">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 40, 0]} />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              <OrbitControls
                enableZoom={true}
                enablePan={false}
                minDistance={14}
                maxDistance={35}
              />
            </Canvas>
          </div>
        </div>

        {/* Right: Description + Join Beta (1/2 width on md+) */}
        <aside className="md:col-span-1 flex flex-col gap-6 items-start text-left">
          <div>
            <h3 className="text-6xl font-semibold mb-6">About the product</h3>
            <p className="text-2xl text-muted-foreground mb-20">
              A lightweight, wearable audio companion designed to free users from screens. Built for accessibility and turns everyday tasks into sound-based experiences.
            </p>
            <ul className="text-2xl list-disc pl-5 space-y-2 text-foreground mb-10">
              <li>Lightweight and ergonomic</li>
              <li>Navigate, communicate, and manage tasks entirely through sound</li>
              <li>Delivers clear, directional audio that keeps you connected to your surroundings</li>
            </ul>
          </div>
          <div className="w-full flex justify-left mt-2">
            <Button size="xl" variant="default" asChild className="min-w-[180px]">
              <a
                href="https://forms.gle/NkqAf1G8mGvQZxsj7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our beta program"
              >
                Join the Waitlist
              </a>
            </Button>
          </div>
        </aside>
      </div>
    </section>
  );
};
