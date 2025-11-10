import { useEffect, useRef, useState } from "react";
import remyVideo from "@/assets/Remy Features.mov?url";

export const Features = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showUnmuteCTA, setShowUnmuteCTA] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    // Start muted to satisfy autoplay policies, attempt to unmute when section becomes visible
    el.muted = true;

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // play muted first
          const playPromise = el.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {});
          }

          // Try to unmute shortly after the scroll (user gesture). If browser blocks, show CTA.
          setTimeout(async () => {
            try {
              el.muted = false;
              await el.play();
              setShowUnmuteCTA(false);
            } catch (err) {
              // Unmute blocked by browser autoplay policy
              el.muted = true;
              setShowUnmuteCTA(true);
            }
          }, 200);
        } else {
          // pause when the section is out of view
          el.pause();
        }
      });
    };

    const obs = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
    obs.observe(el);

    return () => obs.disconnect();
  }, []);

  const onManualUnmute = async () => {
    const el = videoRef.current;
    if (!el) return;
    try {
      el.muted = false;
      await el.play();
      setShowUnmuteCTA(false);
    } catch {
      // ignore
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-center text-left w-full">
          <div className="mb-8">
            <h2 className="text-8xl text-foreground mb-4">Features</h2>
          </div>

          <div className="max-w-4xl w-full relative flex items-center justify-center">
            {/* Responsive video player. Note: .mov playback may be limited in some browsers; consider adding an MP4 fallback if needed. */}
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-lg bg-black"
              src={remyVideo}
              autoPlay
              loop
              muted
              playsInline
              controls
              aria-label="Remy feature video"
            />

            {/* Fallback CTA if the browser blocks unmuting on autoplay */}
            {showUnmuteCTA && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <button
                  onClick={onManualUnmute}
                  className="pointer-events-auto bg-foreground text-background px-4 py-2 rounded-full shadow-md"
                  aria-label="Unmute video"
                >
                  Unmute
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
