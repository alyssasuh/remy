import { Button } from "@/components/ui/button";
// logo removed per request
export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background">
      {/* Top-left horizontal button group */}
      <div className="absolute top-10 right-10 z-10 flex items-left gap-2">
        <Button size="lg" variant="ghost" asChild>
          <a href="#model-viewer" aria-label="Jump to model viewer">Our Device</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#features" aria-label="Jump to features">See Features</a>
        </Button>
      </div>

      {/* Top-right text logo (sanserif wordmark) */}
      <div className="absolute top-8 left-9 z-10">
        <span className="font-sans text-lg sm:text-2xl md:text-5xl font-semibold">Remy</span>
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* logo removed — keeping layout intact */}

          {/* Main heading (increased for accessibility) */}
          <h1 className="text-foreground text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">
            Give your eyes a rest.
          </h1>

          {/* Sub-headline (larger) */}
          <p className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mb-8">
            An audio-based alternative platform to screen-based devices.
          </p>

          {/* Description (increased for readability) */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
            Remy is creating an audio-only platform that reduces visual fatigue and improves accessibility
            through sound-driven technology. We're empowering visually impaired individuals and anyone
            experiencing eye strain to achieve independence, productivity, and inclusion.
          </p>

          {/* CTA moved to the Model Viewer section */}
        </div>
      </div>
    </section>
  );
};
