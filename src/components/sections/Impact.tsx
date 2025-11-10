import { Eye, TrendingUp, Users } from "lucide-react";

export const Impact = () => {
  const metrics = [
    {
      icon: Eye,
      value: "83%",
      label: "Report screen fatigue",
      description: "Users experiencing daily visual strain from device use"
    },
    {
      icon: TrendingUp,
      value: "75%",
      label: "Experience eye strain",
      description: "Individuals suffering from regular discomfort"
    },
    {
      icon: Users,
      value: "60%+",
      label: "Would consider audio-based solutions",
      description: "Open to alternatives to screen-based devices"
    }
  ];

  return (
    <section className="min-h-screen flex items-center bg-muted border-y border-border" id="impact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">By the Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our survey reveals the urgent need for screen alternatives
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 text-center space-y-4 border border-border"
              >
                <div className="flex justify-center">
                  <div className="p-4 bg-muted rounded-full">
                    <Icon className="w-10 h-10 text-foreground" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-accent" aria-label={`${metric.value} ${metric.label}`}>
                  {metric.value}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  {metric.label}
                </h3>
                <p className="text-muted-foreground text-base">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
            These statistics highlight a growing need for accessible, screen-free technology 
            that prioritizes user wellbeing and independence.
          </p>
        </div>
      </div>
    </section>
  );
};
