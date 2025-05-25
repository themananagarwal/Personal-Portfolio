import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleName = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center text-center group">
      <h1 className="absolute text-4xl md:text-6xl font-bold z-10 text-white transition-transform duration-300 group-hover:scale-110">
        Manan Agarwal
      </h1>
      <Particles
        id="tsparticles"
        particlesLoaded={particlesInit}
        className="absolute w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: {
              value: 120,
              density: { enable: true },
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: {
                min: 0.1,
                max: 0.5,
              },
              animation: {
                enable: false
              },
            },
            size: {
              value: { min: 1, max: 3 }
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: { enable: true },
            },
            modes: {
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticleName;
