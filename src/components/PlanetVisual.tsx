import { motion, AnimatePresence } from 'motion/react';
import { Planet } from '../types';

interface PlanetVisualProps {
  planet: Planet;
}

export default function PlanetVisual({ planet }: PlanetVisualProps) {
  
  // Custom renderer for each planet to make them look 180% more realistic
  const renderRealisticPlanetBody = () => {
    switch (planet.id) {
      case 'mercury':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden bg-stone-700" style={{ background: planet.gradient }}>
            {/* Crater overlays with realistic 3D shadows (light from top-left) */}
            <div className="absolute top-[18%] left-[22%] w-7 h-7 rounded-full bg-black/40 border-b border-r border-white/20 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.8),_1px_1px_1px_rgba(255,255,255,0.15)]" />
            <div className="absolute top-[52%] left-[68%] w-9 h-9 rounded-full bg-black/45 border-b border-r border-white/20 shadow-[inset_3px_3px_5px_rgba(0,0,0,0.8),_1px_1px_1px_rgba(255,255,255,0.15)]" />
            <div className="absolute top-[72%] left-[32%] w-6 h-6 rounded-full bg-black/35 border-b border-r border-white/20 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.8),_1px_1px_1px_rgba(255,255,255,0.15)]" />
            <div className="absolute top-[38%] left-[48%] w-4 h-4 rounded-full bg-black/40 border-b border-r border-white/20 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8),_1px_1px_1px_rgba(255,255,255,0.15)]" />
            <div className="absolute top-[82%] left-[62%] w-3 h-3 rounded-full bg-black/50 border-b border-r border-white/20 shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]" />
            <div className="absolute top-[22%] left-[78%] w-5 h-5 rounded-full bg-black/30 border-b border-r border-white/15 shadow-[inset_2px_2px_3px_rgba(0,0,0,0.8)]" />
            
            {/* Bright Ejecta Rays (Debussy Crater simulation) */}
            <div className="absolute top-[52%] left-[68%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 origin-left -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-[52%] left-[68%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45 origin-left -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-[52%] left-[68%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-[75deg] origin-left -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-[52%] left-[68%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent -rotate-[115deg] origin-left -translate-x-1/2 -translate-y-1/2" />
            
            {/* Center bright crater core */}
            <div className="absolute top-[54%] left-[70%] w-2 h-2 rounded-full bg-white/60 blur-[0.5px]" />

            {/* Cooling Wrinkles / Lobate Scarps */}
            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100">
              <path d="M 20 40 Q 25 55 15 70" fill="none" stroke="black" strokeWidth="0.7" strokeDasharray="1 1" />
              <path d="M 60 15 Q 70 30 65 45" fill="none" stroke="#ffffff" strokeWidth="0.4" opacity="0.5" />
              <path d="M 40 75 Q 50 82 45 92" fill="none" stroke="black" strokeWidth="0.6" />
            </svg>

            {/* Fine mineral dust / noise overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.08)_0%,transparent_75%)] mix-blend-overlay" />
          </div>
        );

      case 'venus':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Three distinct layers of hyper-dense, toxic sulfuric acid clouds */}
            {/* Layer 1: Rapid retrograde wind shear (spinning fast-ish) */}
            <div className="absolute inset-0 opacity-40 mix-blend-color-dodge animate-fast-spin" style={{ animationDirection: 'reverse', animationDuration: '14s' }}>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgba(253,224,71,0.25)_12px,rgba(253,224,71,0.25)_24px)] filter blur-[2px]" />
            </div>

            {/* Layer 2: Medium slow cloud bands (spinning medium-ish) */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay animate-medium-spin" style={{ animationDuration: '24s' }}>
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-25deg,transparent,transparent_15px,rgba(255,255,255,0.3)_15px,rgba(255,255,255,0.3)_30px)] filter blur-[1.5px]" />
            </div>

            {/* Layer 3: Hot atmospheric turbulence and greenhouse convection waves */}
            <div className="absolute inset-0 opacity-25 mix-blend-color-burn">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.7)_0%,transparent_70%)]" />
              <div className="absolute inset-0 bg-[repeating-radial-gradient(circle_at_70%_80%,transparent,transparent_10px,rgba(0,0,0,0.35)_10px,rgba(0,0,0,0.35)_20px)] filter blur-[3px]" />
            </div>

            {/* Venusian volcanic sulfur glow ring */}
            <div className="absolute inset-0 border border-amber-500/20 rounded-full animate-pulse" />
          </div>
        );

      case 'earth':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden bg-sky-950" style={{ background: planet.gradient }}>
            {/* High-fidelity Ocean Shelf Deepening Glow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_25px_rgba(6,182,212,0.65)]" />

            {/* CONTINENTS with realistic 3D elevation shadows (drop-shadow) and custom high-fidelity styling */}
            <div className="absolute inset-0 filter drop-shadow-[1.5px_2px_2px_rgba(0,0,0,0.6)]">
              {/* North America & Greenland */}
              <div 
                className="absolute top-[8%] left-[12%] w-20 h-16 rounded-[40%_60%_30%_75%] transform -rotate-12" 
                style={{ background: 'linear-gradient(135deg, #15803d 0%, #166534 50%, #854d0e 80%, #f8fafc 100%)' }} 
              />
              {/* Central America connection */}
              <div className="absolute top-[22%] left-[24%] w-3 h-12 bg-emerald-800 rounded-full transform -rotate-45" />
              
              {/* South America */}
              <div 
                className="absolute top-[32%] left-[23%] w-14 h-24 rounded-[30%_65%_25%_60%] transform rotate-12" 
                style={{ background: 'linear-gradient(to bottom, #166534 0%, #15803d 40%, #064e3b 80%, #78350f 100%)' }} 
              />

              {/* Africa & Europe */}
              <div 
                className="absolute top-[18%] left-[54%] w-18 h-20 rounded-[45%_55%_65%_35%] transform -rotate-12" 
                style={{ background: 'linear-gradient(120deg, #166534 0%, #a16207 30%, #854d0e 70%, #15803d 100%)' }} 
              />
              {/* Golden Sahara Desert core within Africa */}
              <div className="absolute top-[24%] left-[56%] w-11 h-8 bg-amber-600/90 rounded-full blur-[2.5px] transform rotate-12" />

              {/* Great Britain / Scandinavia */}
              <div className="absolute top-[10%] left-[52%] w-6 h-5 bg-emerald-800 rounded-full blur-[0.5px]" />
              <div className="absolute top-[6%] left-[58%] w-10 h-4 bg-emerald-900 rounded-full blur-[0.5px]" />

              {/* Australia */}
              <div 
                className="absolute bottom-[20%] left-[72%] w-12 h-8 rounded-[40%_50%_60%_40%]" 
                style={{ background: 'linear-gradient(135deg, #a16207 0%, #854d0e 50%, #166534 100%)' }} 
              />
            </div>

            {/* Northern Polar Ice Cap with detailed glacier border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-white rounded-full filter blur-[1px] shadow-[0_1.5px_8px_rgba(255,255,255,0.95)] border-b border-sky-100" />
            
            {/* Southern Polar Ice Cap */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-18 h-4.5 bg-white rounded-full filter blur-[1px] shadow-[0_-1.5px_8px_rgba(255,255,255,0.95)] border-t border-sky-100" />

            {/* CLOUD SYSTEM WITH REALISTIC 3D SHADOWS */}
            {/* Cloud Shadow Layer (drawn first, offset bottom-right, blurred black) */}
            <div className="absolute inset-0 mix-blend-multiply animate-slow-spin opacity-40 pointer-events-none filter brightness-0 blur-[1.5px] translate-x-[2.5px] translate-y-[2.5px]">
              <div className="absolute top-[16%] left-[10%] w-22 h-9 bg-black rounded-[100%_40%_100%_40%] transform -rotate-12" />
              <div className="absolute top-[52%] left-[30%] w-26 h-11 bg-black rounded-[40%_100%_40%_100%] transform rotate-45" />
              <div className="absolute top-[38%] left-[62%] w-16 h-16 bg-black rounded-full" />
              <div className="absolute top-[12%] left-[48%] w-18 h-8 bg-black rounded-full transform rotate-12" />
              <div className="absolute bottom-[15%] left-[55%] w-24 h-7 bg-black rounded-full transform -rotate-12" />
            </div>

            {/* Active Rotating Clouds Layer */}
            <div className="absolute inset-0 mix-blend-screen animate-slow-spin opacity-65 pointer-events-none">
              <div className="absolute top-[16%] left-[10%] w-22 h-9 bg-white/85 rounded-[100%_40%_100%_40%] filter blur-[1.5px] transform -rotate-12" />
              <div className="absolute top-[52%] left-[30%] w-26 h-11 bg-white/75 rounded-[40%_100%_40%_100%] filter blur-[2px] transform rotate-45" />
              <div className="absolute top-[38%] left-[62%] w-16 h-16 bg-white/80 rounded-full filter blur-[1.8px]" />
              <div className="absolute top-[12%] left-[48%] w-18 h-8 bg-white/90 rounded-full filter blur-[1.2px] transform rotate-12" />
              <div className="absolute bottom-[15%] left-[55%] w-24 h-7 bg-white/75 rounded-full filter blur-[2px] transform -rotate-12" />
            </div>
          </div>
        );

      case 'mars':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Syrtis Major (dark basaltic triangular plain) */}
            <div 
              className="absolute top-[30%] left-[22%] w-18 h-12 bg-[#2d0f07]/90 rounded-[50%_30%_65%_25%] blur-[2.5px] transform rotate-[35deg]" 
              style={{ background: 'linear-gradient(135deg, #220b05 0%, #3a150c 100%)' }}
            />
            {/* Acidalia Planitia (Northern dark plains) */}
            <div className="absolute top-[18%] left-[35%] w-22 h-9 bg-[#260a04]/85 rounded-full blur-[3px]" />
            
            {/* Hellas Planitia (Huge bright impact basin) */}
            <div className="absolute bottom-[22%] left-[48%] w-12 h-10 bg-[#e77a56]/70 border border-[#ff7c60]/10 rounded-full blur-[2px] shadow-inner" />

            {/* Valles Marineris (Canyon system - massive dark jagged trench) */}
            <div className="absolute top-[48%] left-[15%] w-28 h-[2.5px] bg-[#1a0501] rounded-full filter blur-[0.3px] opacity-90 transform -rotate-[8deg] shadow-[0_1px_1px_rgba(255,255,255,0.05)]">
              {/* Branching canyon structures */}
              <div className="absolute top-0 left-8 w-12 h-[1px] bg-[#1a0501] rotate-[15deg] origin-left" />
              <div className="absolute bottom-0 left-16 w-10 h-[1.2px] bg-[#1a0501] -rotate-[12deg] origin-left" />
            </div>

            {/* Olympus Mons (Colossal elevated volcano) */}
            <div className="absolute top-[32%] left-[62%] w-8 h-8 rounded-full bg-[#f06e4a] border border-[#ff9175]/30 shadow-[1px_1px_3px_rgba(0,0,0,0.5),_inset_1px_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
              {/* Volcano caldera (central crater) */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#180300] shadow-inner" />
            </div>

            {/* Glacial Northern Polar Cap (Carbon dioxide & water ice) */}
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-8 h-3.5 bg-white rounded-full filter blur-[0.5px] shadow-[0_1px_6px_rgba(255,255,255,0.95)]" />
            {/* Dark sublimation collar surrounding north cap */}
            <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-9 h-[1.5px] bg-[#1a0501]/40 rounded-full blur-[0.5px]" />
            
            {/* Southern Polar Cap */}
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-2 bg-white/95 rounded-full filter blur-[0.5px]" />
          </div>
        );

      case 'jupiter':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden flex flex-col justify-between" style={{ background: planet.gradient }}>
            {/* Multi-layered, highly detailed convective horizontal gas bands with shear wave turbulence */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-95">
              {/* North Polar Region */}
              <div className="w-full h-[10%] bg-[#361505] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.4)]" />
              {/* North Temperate Belt */}
              <div className="w-full h-[11%] bg-[#aa6b42]/85 border-y border-orange-950/20" />
              {/* North Tropical Zone */}
              <div className="w-full h-[8%] bg-[#ebd7c1]/60 relative">
                {/* Minor white storms */}
                <div className="absolute top-1/4 left-[15%] w-3 h-1.5 rounded-full bg-white/70 blur-[0.3px]" />
                <div className="absolute top-1/3 left-[75%] w-4 h-2 rounded-full bg-white/60 blur-[0.3px]" />
              </div>
              {/* North Equatorial Belt */}
              <div className="w-full h-[13%] bg-[#823d18] relative overflow-hidden">
                {/* Shear waves */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_20px)] transform skew-x-12" />
              </div>
              {/* Equatorial Zone */}
              <div className="w-full h-[12%] bg-[#ffe4cc]/50" />
              {/* South Equatorial Belt (Containing the Great Red Spot) */}
              <div className="w-full h-[18%] bg-[#8c3c13] relative shadow-inner">
                {/* Waves & turbulence */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-90deg,transparent,transparent_12px,rgba(0,0,0,0.1)_12px,rgba(0,0,0,0.1)_24px)] transform -skew-x-12" />
                
                {/* THE GREAT RED SPOT (El Gran Punto Rojo) - 3D swirl */}
                <div className="absolute bottom-[-15%] right-[22%] w-11 h-7 rounded-[50%] bg-[#9e1f0e] border border-orange-400/25 shadow-[0_0_12px_rgba(158,31,14,0.9),_inset_-2px_-2px_4px_rgba(0,0,0,0.6),_inset_2px_2px_3px_rgba(255,255,255,0.25)] flex items-center justify-center z-10">
                  {/* Swirling storm core */}
                  <div className="w-6 h-3 rounded-[50%] bg-[#4f0601] opacity-75 filter blur-[0.5px] flex items-center justify-center">
                    <div className="w-2 h-1 bg-[#ff7c60]/40 rounded-full" />
                  </div>
                </div>
                {/* Turbulent white cloud wake behind Red Spot */}
                <div className="absolute bottom-[-5%] right-[38%] w-7 h-3 rounded-full bg-white/50 blur-[1px] transform -rotate-12" />
              </div>
              {/* South Tropical Zone */}
              <div className="w-full h-[10%] bg-[#f7e3ce]/50 relative">
                {/* White Oval Storm BA */}
                <div className="absolute top-1/4 left-[45%] w-3.5 h-2 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
              </div>
              {/* South Temperate Belt */}
              <div className="w-full h-[10%] bg-[#6a2d0b] border-y border-black/20" />
              {/* South Polar Region */}
              <div className="w-full h-[8%] bg-[#2d1104]" />
            </div>

            {/* Cloud cyclone swirling texture overlay */}
            <div className="absolute inset-0 opacity-25 mix-blend-overlay bg-[repeating-linear-gradient(90deg,transparent,transparent_14px,rgba(255,255,255,0.3)_14px,rgba(255,255,255,0.3)_28px)]" />
          </div>
        );

      case 'saturn':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden flex flex-col justify-between" style={{ background: planet.gradient }}>
            {/* High-definition, subtle pastel golden gas bands */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-90 pointer-events-none">
              <div className="w-full h-[12%] bg-[#3d2910]" />
              <div className="w-full h-[18%] bg-[#ffe6a3]/20" />
              <div className="w-full h-[8%] bg-[#805e2e]" />
              <div className="w-full h-[22%] bg-[#e4be75]/40" />
              <div className="w-full h-[10%] bg-[#805e2e]" />
              <div className="w-full h-[18%] bg-[#ffe6a3]/25" />
              <div className="w-full h-[12%] bg-[#3d2910]" />
            </div>

            {/* RING SHADOW CAST ONTO THE PLANET SPHERE */}
            {/* High-realism diagonal ring shadow band overlay */}
            <div 
              className="absolute top-[48%] left-[-10%] w-[120%] h-3.5 bg-black/85 filter blur-[0.8px] pointer-events-none mix-blend-multiply" 
              style={{ transform: `rotate(18deg) translateY(-2px)` }} 
            />

            {/* Contrast sphere lighting shadow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,transparent_35%,rgba(0,0,0,0.7) 100%)]" />
          </div>
        );

      case 'uranus':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: planet.gradient }}>
            {/* Uranus vertical atmospheric haze and fine cloud bands */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.2),transparent_45%,rgba(0,0,0,0.5))]" />
            
            {/* Tilted vertical pastel banding lines (98 degrees axial tilt) */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay">
              <div className="absolute left-[20%] inset-y-0 w-[2px] bg-white" />
              <div className="absolute left-[40%] inset-y-0 w-[4px] bg-white" />
              <div className="absolute left-[55%] inset-y-0 w-[2px] bg-black" />
              <div className="absolute left-[75%] inset-y-0 w-[3px] bg-white" />
            </div>
            
            {/* Pale sunlit polar haze center on the side */}
            <div className="absolute top-[35%] left-[15%] w-16 h-16 bg-white/20 rounded-full blur-[8px]" />
          </div>
        );

      case 'neptune':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden bg-blue-900" style={{ background: planet.gradient }}>
            {/* THE GREAT DARK SPOT (Gran Mancha Oscura) - colosal hyper-cyclone */}
            <div className="absolute top-[42%] left-[24%] w-11 h-7 rounded-full bg-[#071336] border border-[#2563eb]/25 shadow-[0_0_12px_rgba(37,99,235,0.5),_inset_1.5px_1.5px_3px_rgba(255,255,255,0.1)] flex items-center justify-center">
              {/* Inner dark eye */}
              <div className="w-6 h-3.5 rounded-full bg-[#020512] opacity-80 filter blur-[0.5px]" />
            </div>

            {/* Secondary Dark Spot (Dark Spot 2 / Wizard's Eye) */}
            <div className="absolute bottom-[28%] left-[62%] w-6 h-4 rounded-full bg-[#071336] opacity-85 shadow-md flex items-center justify-center">
              <div className="w-3.5 h-2 rounded-full bg-black/70 filter blur-[0.4px]" />
            </div>

            {/* Scooter/Cirrus clouds - fast moving methane ice wisps */}
            <div className="absolute top-[34%] left-[16%] w-10 h-[1.5px] bg-cyan-100/70 rounded-full filter blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-[46%] left-[48%] w-14 h-[1.5px] bg-cyan-100/50 rounded-full filter blur-[0.5px] shadow-[0_0_3px_rgba(255,255,255,0.7)]" />
            <div className="absolute top-[75%] left-[28%] w-8 h-[2px] bg-white/60 rounded-full filter blur-[0.7px]" />
            <div className="absolute bottom-[22%] left-[58%] w-9 h-[1px] bg-cyan-100/60 rounded-full filter blur-[0.4px] shadow-[0_0_2px_rgba(255,255,255,0.8)]" />

            {/* Subtle blue banding */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <div className="absolute top-[15%] inset-x-0 h-4 bg-black" />
              <div className="absolute top-[38%] inset-x-0 h-3 bg-white" />
              <div className="absolute top-[60%] inset-x-0 h-5 bg-black" />
            </div>
          </div>
        );

      case 'pluto':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden bg-[#2d1810]" style={{ background: planet.gradient }}>
            {/* The iconic bright heart glacier (Tombaugh Regio) */}
            <div className="absolute bottom-[8%] left-[22%] w-16 h-16 bg-[#ebd3bd]/80 rounded-[50%_50%_40%_40%] rotate-[18deg] blur-[0.8px] shadow-[0_0_15px_rgba(235,211,189,0.35)] flex items-center justify-center">
              {/* Left Lobe (Sputnik Planitia) - smooth, bright nitrogen ice */}
              <div className="absolute top-[1.5px] left-[1.5px] w-8 h-10 bg-[#f7ebe0] rounded-full opacity-95 transform -rotate-[28deg]" />
              {/* Right Lobe - older, cratered, rugged ice */}
              <div className="absolute top-[2px] right-[1.5px] w-8 h-10 bg-[#dfcbba] rounded-full opacity-85 transform rotate-[28deg]" />
            </div>
            
            {/* Dark Equatorial Tholin Deposits (Cthulhu Macula - dark carbon rust) */}
            <div 
              className="absolute bottom-[4%] left-[-5%] w-12 h-10 rounded-full blur-[2px]" 
              style={{ background: 'radial-gradient(circle, #200d04 0%, #3e1b09 80%, transparent 100%)' }} 
            />
            <div 
              className="absolute bottom-[10%] right-[2%] w-14 h-9 rounded-full blur-[2px]" 
              style={{ background: 'radial-gradient(circle, #1a0a03 0%, #341607 80%, transparent 100%)' }} 
            />

            {/* Pale methane polar frost cover */}
            <div className="absolute top-0 inset-x-2 h-4 bg-[#f2e7de]/40 rounded-full filter blur-[1.5px]" />
          </div>
        );

      case 'sun_orbit':
        return (
          <div className="absolute inset-0 rounded-full overflow-hidden animate-fast-spin" style={{ background: planet.gradient }}>
            {/* Solar flares, granulation, and dynamic nuclear fusion convection cells */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#ff3c00_65%,#cc0000_100%)] opacity-90" />
            
            {/* Searing convection hotspots */}
            <div className="absolute top-[20%] left-[25%] w-12 h-12 rounded-full bg-white opacity-45 blur-[5px]" />
            <div className="absolute top-[58%] left-[52%] w-14 h-14 rounded-full bg-white opacity-40 blur-[6px]" />
            <div className="absolute top-[38%] left-[68%] w-10 h-10 rounded-full bg-amber-200 opacity-60 blur-[4px]" />

            {/* Solar Magnetic Field Loops (Solar Flares / Prominencias inside the core) */}
            <div className="absolute inset-0 bg-[repeating-conic-gradient(from_0deg,#ffae00_0deg,#ffae00_8deg,transparent_8deg,transparent_16deg)] mix-blend-overlay opacity-35" />

            {/* Sunspots (Magnetic field cooling points) */}
            <div className="absolute top-[35%] left-[45%] w-2 h-1.5 rounded-full bg-[#180000] opacity-80 blur-[0.5px] border border-orange-500/25" />
            <div className="absolute top-[62%] left-[30%] w-3 h-2 rounded-full bg-[#200000] opacity-75 blur-[0.5px] border border-orange-500/25" />
          </div>
        );

      case 'spaceship_path':
        // Museum-grade 3D vector diagram layout of Voyager 1 probe
        return (
          <div className="absolute inset-0 rounded-full flex items-center justify-center bg-slate-950 border border-slate-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.95)]">
            {/* High-density starfield backdrop inside the viewport */}
            <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_25%_25%,#fff_0.8px,transparent_0.8px)] bg-[size:12px_12px]" />
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_75%_65%,#fff_0.5px,transparent_0.5px)] bg-[size:8px_8px]" />
            
            {/* Highly detailed vector Voyager 1 structure */}
            <div className="relative w-24 h-24 flex items-center justify-center animate-slow-spin" style={{ animationDuration: '45s' }}>
              
              {/* Gold Decagonal Equipment Bus behind the dish */}
              <div className="absolute w-8 h-8 bg-amber-500 border border-amber-600 rounded-lg transform rotate-12 z-0 shadow-md" />

              {/* Parabolic High-Gain Antenna Dish (Metallic, white-silver) */}
              <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 border border-slate-400 shadow-[0_0_15px_rgba(255,255,255,0.5),_inset_0_0_8px_rgba(0,0,0,0.15)] flex items-center justify-center z-10">
                {/* Antenna Concentric ribs */}
                <div className="absolute w-10 h-10 rounded-full border border-slate-300/40" />
                <div className="absolute w-6 h-6 rounded-full border border-slate-300/60" />
                
                {/* Center Sub-reflector Feed Horn struts */}
                <div className="w-3 h-3 bg-yellow-600 rounded-full border border-yellow-500 shadow-sm z-20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
                {/* Feed Horn Mast */}
                <div className="absolute w-1 h-5 bg-slate-400 bottom-[50%] transform translate-y-1/2 z-10" />
              </div>

              {/* Golden Record (Disc of Earth message) - Glistening circular golden disc */}
              <div className="absolute w-5 h-5 rounded-full bg-yellow-400 border border-yellow-600 top-2 left-[-1px] shadow-sm flex items-center justify-center z-20 animate-pulse">
                <div className="w-3 h-3 rounded-full border border-yellow-700/50 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full border border-yellow-800" />
                </div>
              </div>

              {/* Magnetometer Boom (Long thin graphite fiber mast pointing up-right) */}
              <div className="absolute w-[1px] h-24 bg-slate-500 origin-center transform rotate-[62deg] z-0" />
              {/* Fine sensor package at tip of magnetometer boom */}
              <div className="absolute w-2 h-1 bg-slate-700 border border-slate-600 top-[-6px] right-2 z-0 transform rotate-[62deg]" />

              {/* Radioisotope Thermoelectric Generators (RTG) power source boom pointing down-left */}
              <div className="absolute w-3 h-12 bg-slate-800 border border-slate-700 bottom-1 left-1 origin-center transform -rotate-[38deg] z-0 flex flex-col justify-around p-0.5 shadow-sm">
                <div className="h-2 bg-slate-950 rounded-[1px] border-y border-slate-700" />
                <div className="h-2 bg-slate-950 rounded-[1px] border-y border-slate-700" />
                <div className="h-2 bg-slate-950 rounded-[1px] border-y border-slate-700" />
              </div>

              {/* Planetary Radio Astronomy antenna whip wire */}
              <div className="absolute w-[0.5px] h-14 bg-amber-400 origin-center transform rotate-[130deg] z-0 translate-x-2" />
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
          animate={{ opacity: 0.04, scale: 1, letterSpacing: '0.25em' }}
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

        {/* HIGH-FIDELITY RINGS (BEHIND THE PLANET SPHERE) */}
        {/* We use an advanced radial gradient representing Cassini & Encke divisions, and clip top 50% */}
        {planet.showRings && (
          <motion.div
            key={`rings-behind-${planet.id}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.85, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${planet.size * 2.1}px`,
              height: `${planet.size * 0.58}px`,
              background: planet.id === 'uranus'
                ? `radial-gradient(ellipse at center, transparent 55%, rgba(94, 234, 212, 0.4) 56%, rgba(94, 234, 212, 0.7) 58%, transparent 59%, rgba(94, 234, 212, 0.55) 61%, rgba(94, 234, 212, 0.85) 63%, transparent 64%)`
                : `radial-gradient(ellipse at center, transparent 38%, rgba(240, 210, 160, 0.22) 39%, rgba(224, 190, 117, 0.85) 48%, rgba(20, 15, 10, 0.95) 50%, rgba(228, 190, 117, 0.9) 52%, rgba(245, 222, 179, 0.95) 62%, rgba(15, 12, 10, 0.95) 63%, rgba(228, 190, 117, 0.45) 65%, transparent 66%)`,
              transform: `rotate(${planet.ringAngle || 15}deg) translateY(-2px)`,
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)', // Keeps top half
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
            {/* Outer Atmosphere Glow Corona */}
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
                boxShadow: planet.id === 'sun_orbit'
                  ? `0 0 55px ${planet.glowColor}, inset 0 0 40px rgba(255,255,255,0.8)`
                  : `0 0 45px ${planet.glowColor}, inset -18px -18px 45px rgba(0,0,0,0.98), inset 15px 15px 25px rgba(255,255,255,0.18), inset 0 0 15px ${planet.atmosphereGlow || 'rgba(255,255,255,0.1)'}`,
              }}
            >
              {renderRealisticPlanetBody()}

              {/* Global shadow layer to unify lighting direction from top-left (disabled for Sun) */}
              {planet.id !== 'sun_orbit' && (
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, transparent 22%, rgba(0,0,0,0.85) 100%)',
                  }}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* HIGH-FIDELITY RINGS (IN FRONT OF THE PLANET SPHERE) */}
        {/* We use an advanced radial gradient representing Cassini & Encke divisions, and clip bottom 50% */}
        {planet.showRings && (
          <motion.div
            key={`rings-front-${planet.id}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: `${planet.size * 2.1}px`,
              height: `${planet.size * 0.58}px`,
              background: planet.id === 'uranus'
                ? `radial-gradient(ellipse at center, transparent 55%, rgba(94, 234, 212, 0.4) 56%, rgba(94, 234, 212, 0.7) 58%, transparent 59%, rgba(94, 234, 212, 0.55) 61%, rgba(94, 234, 212, 0.85) 63%, transparent 64%)`
                : `radial-gradient(ellipse at center, transparent 38%, rgba(240, 210, 160, 0.22) 39%, rgba(224, 190, 117, 0.85) 48%, rgba(20, 15, 10, 0.95) 50%, rgba(228, 190, 117, 0.9) 52%, rgba(245, 222, 179, 0.95) 62%, rgba(15, 12, 10, 0.95) 63%, rgba(228, 190, 117, 0.45) 65%, transparent 66%)`,
              transform: `rotate(${planet.ringAngle || 15}deg) translateY(-2px)`,
              clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)', // Keeps bottom half
              zIndex: 12, // In front of planet sphere
            }}
          />
        )}
      </div>
    </div>
  );
}
