import { Button } from "@/components/ui/button";
import { FileText, UserPlus } from "lucide-react";

export const JoinBeta = () => {
  return (
    <section className="py-20 bg-background" id="join-beta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-foreground mb-6">Join Our Waitlist</h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Help us build the future of sound-based accessibility by sharing your feedback. 
            Be among the first to experience Remy and shape its development.
          </p>

          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-sm border border-border">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="xl"
                  variant="default"
                  asChild
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <a 
                    href="https://forms.gle/NkqAf1G8mGvQZxsj7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <UserPlus className="w-5 h-5" aria-hidden="true" />
                    Join the Waitlist
                  </a>
                </Button>

                <Button 
                  size="xl"
                  variant="outline"
                  asChild
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  <a 
                    href="https://forms.gle/aumtPGNVnwpdYFWZA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FileText className="w-5 h-5" aria-hidden="true" />
                    Take Our Survey
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground italic pt-4">
                Your input is invaluable in creating technology that truly serves its users. 
                All feedback is welcome and will directly influence our development roadmap.
              </p>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Early Access</h4>
              <p className="text-sm text-muted-foreground">
                Waitlist participants get priority access to new features and updates
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Shape the Future</h4>
              <p className="text-sm text-muted-foreground">
                Your feedback directly influences product development and design
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Community</h4>
              <p className="text-sm text-muted-foreground">
                Join a community of innovators building accessible technology
              </p>
            </div>
          </div>

          {/* Copyright moved here from Footer */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Remy © {new Date().getFullYear()} | Designed with accessibility in mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};
