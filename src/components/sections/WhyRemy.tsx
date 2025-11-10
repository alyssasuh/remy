import { Heart, Users, Ear } from "lucide-react";

export const WhyRemy = () => {
  return (
    <section className="min-h-screen flex items-center bg-card border-t border-border" id="why-remy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header - left aligned */}
          <div className="mb-16 text-center md:text-left">
            <div className="inline-flex items-center gap-3 mb-6 md:inline-flex">
              <Ear className="w-10 h-10 text-accent" aria-hidden="true" />
              <h2 className="text-foreground">Features</h2>
            </div>
          </div>

          {/* Story content - left aligned text */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <p className="text-lg sm:text-xl text-card-foreground leading-relaxed mb-8 text-center md:text-left">
              Inspired by Remy, the rat chef from Ratatouille who followed his passion despite limitations, our technology 
              empowers users to navigate the world through sound. Just as Remy discovered his 
              unique path, we believe in unlocking new possibilities through audio innovation.
            </p>

            {/* Values grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center md:text-left space-y-4">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Heart className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Human Connection</h3>
                <p className="text-muted-foreground">
                  Building technology with empathy at its core, designed to enhance dignity and independence.
                </p>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Users className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Dignity</h3>
                <p className="text-muted-foreground">
                  Respecting every user's autonomy while providing powerful tools for daily life.
                </p>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="flex justify-center md:justify-start">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Ear className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Empowerment</h3>
                <p className="text-muted-foreground">
                  Enabling users to achieve productivity and inclusion through innovative sound-based interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
