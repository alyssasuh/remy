import { Hero } from "@/components/sections/Hero";
// WhyRemy removed per user request
import { Features } from "@/components/sections/Features";
import { Impact } from "@/components/sections/Impact";
import { Vision } from "@/components/sections/Vision";
import { JoinBeta } from "@/components/sections/JoinBeta";
import { ModelViewer } from "@/components/ModelViewer";


const Index = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <section className="snap-start min-h-screen">
        <Hero />
      </section>
      <section id="model-viewer" className="snap-start min-h-screen py-20 bg-[#ffffff]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ModelViewer />
        </div>
      </section>
      {/* WhyRemy removed */}
      <section className="snap-start min-h-screen">
        <Features />
      </section>
      <section className="snap-start min-h-screen">
        <Impact />
      </section>
      <section className="snap-start min-h-screen">
        <Vision />
      </section>
      <section className="snap-start min-h-screen">
        <JoinBeta />
      </section>
      
    </div>
  );
};

export default Index;
