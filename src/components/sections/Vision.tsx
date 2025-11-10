import { Building2, Lightbulb } from "lucide-react";

export const Vision = () => {
  const partners = [
    "Mass Eye and Ear",
    "Harvard Accessibility",
    "Perkins School for the Blind",
    "FAO Innovation"
  ];

  return (
    <section className="py-20 bg-card border-t border-border" id="vision">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Lightbulb className="w-10 h-10 text-accent" aria-hidden="true" />
              <h2 className="text-foreground">Future Vision</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Redefining how we interact with information through sound
            </p>
          </div>

          {/* Vision statement */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border mb-12">
            <p className="text-lg sm:text-xl text-card-foreground leading-relaxed mb-6">
              Our long-term vision extends beyond accessibility — we're pioneering a new paradigm 
              for human-technology interaction. By eliminating screen dependency, we're creating 
              a world where information is more accessible, eye health is prioritized, and technology 
              adapts to people, not the other way around.
            </p>
            <p className="text-lg sm:text-xl text-card-foreground leading-relaxed">
              Remy represents the future of inclusive design, where sound becomes a primary interface 
              for productivity, communication, and connection.
            </p>
          </div>

          {/* Partnerships */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-8 h-8 text-accent" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-card-foreground">In Partnership With</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center p-6 bg-secondary rounded-lg border border-border"
                >
                  <span className="text-lg font-semibold text-foreground text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center mt-8 italic">
              Collaborating with leading organizations to advance accessibility innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
