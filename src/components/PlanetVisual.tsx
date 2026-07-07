import { motion, AnimatePresence } from 'motion/react';
import { Planet } from '../types';

interface PlanetVisualProps {
  planet: Planet;
}

export default function PlanetVisual({ planet }: PlanetVisualProps) {
  
  // Custom renderer for each planet to make them look 90% more realistic
  const renderRealisticPlanetBody = () => {
    switch (planet.id) {
      case 'mercury':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Crater overlays */}
            <div className="absolute top-[15%] left-[20%] w-6 h-6 rounded-full bg-black/25 border-l border-white/5 shadow-inner" />
            <div className="absolute top-[50%] left-[65%] w-8 h-8 rounded-full bg-black/30 border-l border-white/5 shadow-inner" />
            <div className="absolute top-[70%] left-[30%] w-5 h-5 rounded-full bg-black/20 border-l border-white/5 shadow-inner" />
            <div className="absolute top-[35%] left-[45%] w-4 h-4 rounded-full bg-black/25 border-l border-white/5 shadow-inner" />
            <div className="absolute top-[80%] left-[60%] w-3 h-3 rounded-full bg-black/35 border-l border-white/5 shadow-inner" />
            <div className="absolute top-[20%] left-[75%] w-5 h-5 rounded-full bg-black/15 border-l border-white/5 shadow-inner" />
            {/* Fine dust/noise texture simulation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.05)_0%,transparent_70%)] mix-blend-overlay" />
          </div>
        );

      case 'venus':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden animate-medium-spin" style={{ background: planet.gradient }}>
            {/* Thick moving sulfuric clouds layers */}
            <div className="absolute inset-0 opacity-40 mix-blend-color-dodge bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(253,224,71,0.2)_10px,rgba(253,224,71,0.2)_20px)] filter blur-[1px]" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.6)_0%,transparent_60%)]" />
            <div className="absolute inset-0 opacity-25 mix-blend-color-burn bg-[repeating-linear-gradient(-30deg,transparent,transparent_8px,rgba(0,0,0,0.3)_8px,rgba(0,0,0,0.3)_16px)]" />
          </div>
        );

      case 'earth':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Continents: North/South America style layout with green/brown gradients */}
            <div className="absolute top-[10%] left-[15%] w-16 h-12 bg-emerald-800/80 rounded-[40%] blur-[2px] transform rotate-12" style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 60%, #854d0e 100%)' }} />
            <div className="absolute top-[25%] left-[20%] w-12 h-20 bg-emerald-800/85 rounded-[30%_50%_40%_60%] blur-[2px]" style={{ background: 'linear-gradient(to bottom, #166534 0%, #064e3b 70%, #78350f 100%)' }} />
            <div className="absolute top-[40%] left-[55%] w-14 h-16 bg-emerald-800/80 rounded-[50%_30%_60%_40%] blur-[2px]" style={{ background: 'linear-gradient(120deg, #15803d 0%, #1e3a8a 100%)' }} />
            
            {/* Sahara desert golden region */}
            <div className="absolute top-[30%] left-[45%] w-10 h-8 bg-amber-800/70 rounded-full blur-[3px]" />

            {/* Northern Polar Ice Cap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-white/90 rounded-full filter blur-[1px] shadow-[0_1px_8px_rgba(255,255,255,0.8)]" />
            
            {/* Southern Polar Ice Cap */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/95 rounded-full filter blur-[1px] shadow-[0_-1px_8px_rgba(255,255,255,0.8)]" />

            {/* Swirling active cloud system layer rotating slowly */}
            <div className="absolute inset-0 mix-blend-screen animate-slow-spin opacity-45">
              <div className="absolute top-[20%] left-[10%] w-20 h-8 bg-white/60 rounded-[100%_40%_100%_40%] filter blur-[2px] transform -rotate-12" />
              <div className="absolute top-[55%] left-[35%] w-24 h-10 bg-white/50 rounded-[40%_100%_40%_100%] filter blur-[3px] transform rotate-45" />
              <div className="absolute top-[40%] left-[60%] w-14 h-14 bg-white/45 rounded-full filter blur-[2.5px]" />
              <div className="absolute top-[15%] left-[50%] w-16 h-7 bg-white/55 rounded-full filter blur-[2px] transform rotate-12" />
            </div>
          </div>
        );

      case 'mars':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Darker basaltic iron silicate planes (e.g. Syrtis Major) */}
            <div className="absolute top-[35%] left-[15%] w-16 h-10 bg-[#3f150b]/80 rounded-[60%_40%_50%_30%] blur-[3px] transform rotate-[25deg]" />
            <div className="absolute top-[50%] left-[45%] w-20 h-14 bg-[#321008]/85 rounded-[40%_60%_30%_70%] blur-[4px] transform -rotate-[15deg]" />
            <div className="absolute bottom-[20%] left-[25%] w-14 h-10 bg-[#290c05]/90 rounded-full blur-[3px]" />

            {/* Bright, distinct Northern polar ice cap */}
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-7 h-2.5 bg-white/95 rounded-full filter blur-[0.5px] shadow-[0_1px_5px_rgba(255,255,255,0.9)]" />
            
            {/* Small southern polar cap */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-2 bg-white/90 rounded-full filter blur-[0.5px]" />
          </div>
        );

      case 'jupiter':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden flex flex-col justify-between" style={{ background: planet.gradient }}>
            {/* Concentric, highly detailed horizontal gas bands */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-90">
              <div className="w-full h-[8%] bg-[#441d08]" />
              <div className="w-full h-[12%] bg-[#dca06c]/80" />
              <div className="w-full h-[6%] bg-[#8c4c23]" />
              <div className="w-full h-[14%] bg-[#ffdeb4]/60" />
              {/* Band containing the Great Red Spot */}
              <div className="w-full h-[18%] bg-[#8c4c23]/90 relative">
                {/* The Great Red Spot (El Gran Punto Rojo) */}
                <div className="absolute bottom-[5%] right-[25%] w-9 h-6 rounded-[50%] bg-[#a72613] border border-[#ff7c60]/30 shadow-[0_0_12px_rgba(167,38,19,0.85)] flex items-center justify-center">
                  {/* Internal storm core spiral effect */}
                  <div className="w-5 h-3 rounded-[50%] bg-[#5d1005] opacity-60 filter blur-[0.5px]" />
                </div>
              </div>
              <div className="w-full h-[10%] bg-[#ffdeb4]/50" />
              <div className="w-full h-[12%] bg-[#dca06c]/70" />
              <div className="w-full h-[8%] bg-[#8c4c23]" />
              <div className="w-full h-[12%] bg-[#441d08]" />
            </div>

            {/* Whirlpool/turbulent wave overlay textures */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,rgba(255,255,255,0.25)_15px,rgba(255,255,255,0.25)_30px)]" />
          </div>
        );

      case 'saturn':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden flex flex-col justify-between" style={{ background: planet.gradient }}>
            {/* Gas bands of Saturn */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-85">
              <div className="w-full h-[10%] bg-[#4b3111]" />
              <div className="w-full h-[15%] bg-[#ffe6a3]/30" />
              <div className="w-full h-[8%] bg-[#9b7238]" />
              <div className="w-full h-[20%] bg-[#e4be75]/50" />
              <div className="w-full h-[12%] bg-[#9b7238]" />
              <div className="w-full h-[15%] bg-[#ffe6a3]/40" />
              <div className="w-full h-[10%] bg-[#4b3111]" />
            </div>
            {/* Shade contrast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
          </div>
        );

      case 'uranus':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Subtle uniform cloud layers and methane rings reflection */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),transparent_40%,rgba(0,0,0,0.45))]" />
            <div className="absolute top-[20%] inset-x-0 h-[2px] bg-white/10" />
            <div className="absolute top-[45%] inset-x-0 h-[3px] bg-white/5" />
            <div className="absolute top-[70%] inset-x-0 h-[2px] bg-black/15" />
          </div>
        );

      case 'neptune':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Deep dark storms and Great Dark Spot */}
            <div className="absolute top-[45%] left-[25%] w-10 h-7 rounded-full bg-[#0a1840] border border-[#2563eb]/20 shadow-[0_0_12px_rgba(37,99,235,0.45)] flex items-center justify-center">
              <div className="w-6 h-4 rounded-full bg-[#04091a] opacity-70 filter blur-[0.5px]" />
            </div>
            
            {/* Secondary minor dark spot */}
            <div className="absolute bottom-[25%] left-[65%] w-6 h-4 rounded-full bg-[#0a1840] opacity-80" />

            {/* High-altitude white methane clouds (Scooter clouds) */}
            <div className="absolute top-[35%] left-[20%] w-8 h-1 bg-cyan-200/55 rounded-full filter blur-[0.5px]" />
            <div className="absolute top-[48%] left-[45%] w-12 h-1 bg-cyan-200/40 rounded-full filter blur-[0.5px]" />
            <div className="absolute top-[72%] left-[30%] w-6 h-1 bg-cyan-100/50 rounded-full filter blur-[1px]" />
          </div>
        );

      case 'pluto':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* The famous bright heart shape glacier (Tombaugh Regio) */}
            <div className="absolute bottom-[10%] left-[25%] w-14 h-14 bg-[#ebd3bd]/80 rounded-[50%_50%_40%_40%] rotate-[15deg] blur-[1px] shadow-[0_0_15px_rgba(235,211,189,0.35)] flex items-center justify-center">
              {/* Core lobes of the heart */}
              <div className="absolute top-1 left-1 w-7 h-8 bg-[#f5e3d3] rounded-full opacity-90 transform -rotate-[30deg]" />
              <div className="absolute top-1 right-1 w-7 h-8 bg-[#f5e3d3] rounded-full opacity-90 transform rotate-[30deg]" />
            </div>
            
            {/* Dark red/brown tholin deposits along the equator */}
            <div className="absolute bottom-[5%] left-0 w-8 h-8 bg-[#3a2012]/90 rounded-full blur-[2px]" />
            <div className="absolute bottom-[12%] right-2 w-10 h-6 bg-[#2f1a0e]/95 rounded-full blur-[2px]" />
          </div>
        );

      case 'sun_orbit':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden animate-fast-spin" style={{ background: planet.gradient }}>
            {/* Solar flares, granulation, and coronal convection cells */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#ff3c00_70%,#e60000_100%)] opacity-85" />
            
            {/* Hot solar spots */}
            <div className="absolute top-[25%] left-[30%] w-10 h-10 rounded-full bg-white opacity-40 blur-[4px]" />
            <div className="absolute top-[60%] left-[55%] w-12 h-12 rounded-full bg-white opacity-30 blur-[5px]" />
            <div className="absolute top-[40%] left-[65%] w-8 h-8 rounded-full bg-amber-200 opacity-50 blur-[3px]" />

            {/* Swirling turbulent convection current lines */}
            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,#ff8b00_0deg,#ff8b00_10deg,transparent_10deg,transparent_20deg)] mix-blend-overlay opacity-30" />
          </div>
        );

      case 'spaceship_path':
        // Custom 3D metal model layout for Voyager 1 satellite!
        return (
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-slate-950 border border-slate-800 shadow-inner">
            {/* Starfield background within circle */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            {/* Highly detailed CSS Voyager 1 structure */}
            <div className="relative w-20 h-20 flex items-center justify-center animate-slow-spin">
              {/* Main Golden/Metallic Antenna Dish */}
              <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 border border-slate-100 shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center justify-center z-10">
                {/* Center Sub-reflector Feed Horn */}
                <div className="w-2.5 h-2.5 bg-yellow-600 rounded-full border border-yellow-500" />
                <div className="absolute w-1 h-4 bg-slate-400 bottom-1/2 transform translate-y-1/2" />
              </div>

              {/* Gold Decagonal Equipment Bus behind dish */}
              <div className="absolute w-7 h-7 bg-amber-500 border-2 border-amber-600 rounded-lg transform rotate-45 z-0" />

              {/* Magnetometer Boom (Long thin rod pointing up-right) */}
              <div className="absolute w-1 h-20 bg-slate-400 origin-center transform rotate-[55deg] z-0" />

              {/* Radioisotope Thermoelectric Generators (RTG) boom pointing down-left */}
              <div className="absolute w-3 h-10 bg-slate-700 border border-slate-600 bottom-2 left-2 origin-center transform -rotate-[35deg] z-0 flex flex-col justify-between p-0.5">
                <div className="h-1.5 bg-slate-900 rounded-sm" />
                <div className="h-1.5 bg-slate-900 rounded-sm" />
                <div className="h-1.5 bg-slate-900 rounded-sm" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="absolute inset-0 rounded-full animate-medium-spin" style={{ background: planet.gradient }} />
        );
    }
  };

  return (
    <div className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center overflow-hidden select-none">
      {/* Background massive faded typography */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-text-${planet.id}`}
          initial={{ opacity: 0, scale: 0.8, letterSpacing: '0.1em' }}
          animate={{ opacity: 0.05, scale: 1, letterSpacing: '0.25em' }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 flex items-center justify-center font-serif text-[70px] sm:text-[90px] md:text-[110px] font-bold text-white text-center select-none pointer-events-none z-0"
        >
          {planet.name}
        </motion.div>
      </AnimatePresence>

      {/* Main active celestial system wrapper */}
      <div className="relative flex items-center justify-center w-full h-full z-10">
        
        {/* Orbit Lines for Moons (Static Background Circles) */}
        <AnimatePresence>
          {planet.moons.map((moon, index) => (
            <motion.div
              key={`orbit-line-${planet.id}-${moon.name}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="absolute border border-dashed border-white rounded-full pointer-events-none"
              style={{
                width: `${moon.distance * 2}px`,
                height: `${moon.distance * 2}px`,
              }}
            />
          ))}
        </AnimatePresence>

        {/* Orbiting Moon Satellites (Animated rotating wrapper) */}
        {planet.moons.map((moon) => {
          const startAngle = Math.random() * 360;
          return (
            <div
              key={`moon-orbit-${planet.id}-${moon.name}`}
              className="absolute pointer-events-none animate-slow-spin"
              style={{
                width: `${moon.distance * 2}px`,
                height: `${moon.distance * 2}px`,
                animationDuration: `${moon.speed}s`,
                transform: `rotate(${startAngle}deg)`,
              }}
            >
              {/* Moon Sphere and Label */}
              <div
                className="absolute flex flex-col items-center justify-center animate-medium-spin"
                style={{
                  top: '0px',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Visual Circle */}
                <div
                  className="rounded-full shadow-lg"
                  style={{
                    width: `${moon.size}px`,
                    height: `${moon.size}px`,
                    backgroundColor: moon.color,
                    boxShadow: `0 0 10px ${moon.color}`,
                  }}
                />
                
                {/* Floating Tiny Moon Label */}
                <span 
                  className="mt-1 text-[7px] text-white/50 tracking-wider font-mono font-medium scale-90 whitespace-nowrap"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
                >
                  {moon.name}
                </span>
              </div>
            </div>
          );
        })}

        {/* Ring system that goes behind the planet */}
        {planet.showRings && (
          <motion.div
            key={`rings-behind-${planet.id}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${planet.size * 1.9}px`,
              height: `${planet.size * 0.5}px`,
              border: `6px double ${planet.ringColor || 'rgba(255,255,255,0.15)'}`,
              borderColor: `${planet.ringColor || 'rgba(255,255,255,0.15)'} transparent transparent transparent`,
              transform: `rotate(${planet.ringAngle || 15}deg) translateY(-2px)`,
              zIndex: 8, // Behind planet sphere
            }}
          />
        )}

        {/* Planet Sphere with Atmospheric Glow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`planet-sphere-${planet.id}`}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.1, opacity: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 100, 
              damping: 18,
              mass: 0.8
            }}
            className="relative flex items-center justify-center z-10"
          >
            {/* Outer Atmosphere Glow */}
            <div
              className="absolute rounded-full transition-all duration-700 pointer-events-none"
              style={{
                width: `${planet.size + 30}px`,
                height: `${planet.size + 30}px`,
                background: `radial-gradient(circle, ${planet.atmosphereGlow || planet.glowColor} 0%, transparent 70%)`,
                filter: 'blur(10px)',
              }}
            />

            {/* Realistic Planet Sphere Body */}
            <div
              className="rounded-full shadow-2xl relative overflow-hidden flex items-center justify-center"
              style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                boxShadow: `0 0 45px ${planet.glowColor}, inset -15px -15px 40px rgba(0,0,0,0.9), inset 15px 15px 25px rgba(255,255,255,0.15)`,
              }}
            >
              {renderRealisticPlanetBody()}

              {/* Global shadow over layer to unify lighting direction from top-left */}
              <div 
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, transparent 20%, rgba(0,0,0,0.85) 100%)',
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ring system that goes in front of the planet (for correct overlay illusion) */}
        {planet.showRings && (
          <motion.div
            key={`rings-front-${planet.id}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${planet.size * 1.9}px`,
              height: `${planet.size * 0.5}px`,
              border: `6px double ${planet.ringColor || 'rgba(255,255,255,0.15)'}`,
              borderColor: `transparent ${planet.ringColor || 'rgba(255,255,255,0.15)'} ${planet.ringColor || 'rgba(255,255,255,0.15)'} ${planet.ringColor || 'rgba(255,255,255,0.15)'}`,
              transform: `rotate(${planet.ringAngle || 15}deg) translateY(-2px)`,
              zIndex: 12, // In front of planet sphere
            }}
          />
        )}
      </div>
    </div>
  );
}
