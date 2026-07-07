import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Orbit, Zap, Info } from 'lucide-react';
import { PLANETS } from './data';
import { Planet } from './types';
import PlanetVisual from './components/PlanetVisual';

type Category = 'todos' | 'rocosos' | 'gigantes' | 'otros';

const PLANET_TRIVIA: Record<string, string> = {
  mercury: "¡Un año en Mercurio dura solo 88 días terrestres, pero un solo día completo de rotación dura 176 días terrestres debido a su lentitud!",
  venus: "¡Venus rota en sentido contrario a la Tierra! El Sol sale por el oeste y se pone por el este de manera extremadamente lenta.",
  earth: "¡La Tierra no es una esfera perfecta! Está ligeramente achatada en los polos debido a la fuerza centrífuga de su rotación.",
  mars: "¡Alberga el Monte Olimpo, el volcán más gigante del sistema solar! Mide tres veces la altura del Monte Everest.",
  jupiter: "¡Júpiter es un protector cósmico! Su inmenso campo de gravedad atrae y desvía la mayoría de los cometas peligrosos.",
  saturn: "¡Los anillos de Saturno son extremadamente delgados! Tienen miles de kilómetros de extensión pero solo unos 10 metros de espesor promedio.",
  uranus: "¡Gira de costado! Urano tiene una inclinación axial extrema de 98 grados, rodando literalmente sobre su órbita alrededor del Sol.",
  neptune: "¡El viento más rápido del sistema solar está aquí! Sopla tormentas heladas de metano a más de 2,100 km/h en su atmósfera.",
  pluto: "¡Tiene un glaciar de nitrógeno con forma de corazón gigante llamado Sputnik Planitia que cambia de forma dinámicamente!",
  sun_orbit: "¡Es inmenso! El Sol contiene el 99.86% de toda la masa de nuestro sistema solar y cabrían 1.3 millones de Tierras dentro de él.",
  spaceship_path: "¡Viaja a través de la interestelaridad! Lleva a bordo un Disco de Oro con sonidos e imágenes de la Tierra para el futuro cósmico."
};

export default function App() {
  const [activePlanet, setActivePlanet] = useState<Planet>(
    PLANETS.find((p) => p.id === 'earth') || PLANETS[2] // Tierra como default amigable
  );
  
  // Categoría de filtro activa
  const [category, setCategory] = useState<Category>('todos');
  
  // Multiplicador de velocidad de las órbitas (0.5 es el más lento, que se mostrará como 1x en la interfaz)
  const [orbitSpeed, setOrbitSpeed] = useState<number>(0.5);
  
  // Mostrar cuadro de sugerencias de exploración interactiva
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  // Filtrado de la lista planetaria
  const filteredPlanets = PLANETS.filter(p => {
    if (category === 'todos') return true;
    if (category === 'rocosos') {
      return ['mercury', 'venus', 'earth', 'mars'].includes(p.id);
    }
    if (category === 'gigantes') {
      return ['jupiter', 'saturn', 'uranus', 'neptune'].includes(p.id);
    }
    if (category === 'otros') {
      return ['pluto', 'sun_orbit', 'spaceship_path'].includes(p.id);
    }
    return true;
  });

  return (
    <div className="bg-grid-pattern min-h-screen text-white font-sans flex flex-col items-center justify-start px-4 py-8 md:py-12 overflow-y-auto selection:bg-white/20">
      
      {/* 1. Encabezado de la Marca */}
      <header className="flex flex-col items-center mb-8 text-center select-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block border-2 border-white rounded-[24px] px-10 py-3.5 bg-black/50 backdrop-blur-md shadow-2xl shadow-black/80 relative group overflow-hidden"
        >
          {/* Brillo interno dinámico */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <h1 className="font-sans font-extrabold text-2xl md:text-3xl tracking-[0.3em] text-white">
            QUINTANILLA
          </h1>
        </motion.div>
        
        <p className="text-[10px] text-white/35 font-mono uppercase mt-3 tracking-[0.25em]">
          SISTEMA METRIC SOLAR INTERACTIVO
        </p>
      </header>

      {/* 2. Área de Sugerencias Rápidas / Controladores en tiempo real (Interacciones Inteligentes) */}
      <div className="w-full max-w-[580px] mb-4 flex flex-wrap gap-2.5 justify-center items-center">
        {/* Selector de categoría */}
        <div className="bg-[#0c0d10]/90 border border-white/10 rounded-full px-3 py-1 flex items-center space-x-1">
          {(['todos', 'rocosos', 'gigantes', 'otros'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                // Si el planeta activo actual no pertenece al filtro, seleccionar el primero disponible
                const tempFiltered = PLANETS.filter(p => {
                  if (cat === 'todos') return true;
                  if (cat === 'rocosos') return ['mercury', 'venus', 'earth', 'mars'].includes(p.id);
                  if (cat === 'gigantes') return ['jupiter', 'saturn', 'uranus', 'neptune'].includes(p.id);
                  return ['pluto', 'sun_orbit', 'spaceship_path'].includes(p.id);
                });
                if (tempFiltered.length > 0 && !tempFiltered.some(p => p.id === activePlanet.id)) {
                  setActivePlanet(tempFiltered[0]);
                }
              }}
              className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-semibold transition-all duration-300 ${
                category === cat
                  ? 'bg-white text-black'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {cat === 'todos' ? 'Todos' : cat === 'rocosos' ? 'Rocosos' : cat === 'gigantes' ? 'Gigantes' : 'Otros'}
            </button>
          ))}
        </div>

        {/* Regulador de velocidad orbital */}
        <div className="bg-[#0c0d10]/90 border border-white/10 rounded-full px-3 py-1.5 flex items-center space-x-2 text-[9px] font-mono">
          <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: `${6 / orbitSpeed}s` }} />
          <span className="text-white/40 uppercase tracking-wider">Órbita:</span>
          <div className="flex items-center space-x-1 bg-black/40 rounded-full p-0.5 border border-white/5">
            {[
              { val: 0.5, label: '1x' },
              { val: 1.0, label: '2x' },
              { val: 2.0, label: '4x' }
            ].map((sp) => (
              <button
                key={sp.val}
                onClick={() => setOrbitSpeed(sp.val)}
                className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold transition-all ${
                  orbitSpeed === sp.val ? 'bg-cyan-500 text-white shadow-md' : 'text-white/30 hover:text-white/60'
                }`}
              >
                {sp.label}
              </button>
            ))}
          </div>
        </div>

        {/* Botón de ideas y sugerencias interactivas */}
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}
          className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-[9px] font-mono uppercase tracking-wider font-semibold border transition-all duration-300 ${
            showSuggestions
              ? 'bg-amber-400/20 border-amber-300 text-amber-200'
              : 'bg-[#0c0d10]/90 border-white/10 text-white/50 hover:text-white hover:border-white/30'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sugerencias</span>
        </button>
      </div>

      {/* Cuadro desplegable de sugerencias didácticas y visuales */}
      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="w-full max-w-[580px] bg-amber-500/5 border border-amber-400/20 rounded-2xl p-4 mb-4 overflow-hidden"
          >
            <div className="flex items-start space-x-3 text-amber-200/90 text-[11px] leading-relaxed">
              <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
              <div>
                <span className="font-bold uppercase tracking-wider block mb-1">¡Sugerencias de Exploración del Cosmos!</span>
                <ul className="list-disc list-inside space-y-1.5 text-white/75 font-sans mt-1">
                  <li><strong>Filtrar Cuerpos:</strong> Utiliza el menú superior para aislar los planetas rocosos de los colosales gigantes gaseosos.</li>
                  <li><strong>Ajustar Órbita:</strong> Alterna entre velocidades (<code className="bg-white/10 px-1 py-0.5 rounded font-mono text-[9px]">1x</code>, <code className="bg-white/10 px-1 py-0.5 rounded font-mono text-[9px]">2x</code>, <code className="bg-white/10 px-1 py-0.5 rounded font-mono text-[9px]">4x</code>) para ver la diferencia gravitatoria.</li>
                  <li><strong>Interacción Rápida:</strong> Presiona el botón <code className="text-cyan-300 font-mono text-[9px]">Explorar Siguiente</code> o haz clic directamente sobre la lista en la barra izquierda para un viaje sin interrupciones.</li>
                  <li><strong>Efectos Visuales Tridimensionales:</strong> Al seleccionar <code className="text-cyan-300 font-mono text-[9px]">Urano</code> o <code className="text-cyan-300 font-mono text-[9px]">Saturno</code>, observa la alineación angular física en perspectiva de sus majestuosos anillos de polvo estelar.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Panel de Visualización del Explorador Solar */}
      <main className="w-full max-w-[580px] flex justify-center mt-1">
        
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full h-[550px] md:h-[630px] bg-[#0c0d10]/95 border border-white/10 rounded-[32px] shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col p-6 md:p-8 relative overflow-hidden"
        >
          {/* Encabezado interno */}
          <div className="text-center z-10 mb-2">
            <span className="text-white/40 tracking-[0.35em] text-[10px] uppercase font-bold block">
              SISTEMA EXPLORADOR DE PLANETAS
            </span>
            <span className="text-white/20 tracking-[0.25em] text-[8.5px] uppercase font-semibold block mt-1">
              PROYECCIÓN ORBITAL
            </span>
          </div>

          {/* Cuerpo interactivo del widget */}
          <div className="flex flex-1 min-h-0 relative mt-2">
            
            {/* Lista izquierda de navegación celeste */}
            <div className="w-[110px] sm:w-[130px] h-full relative pr-1.5">
              <div className="absolute right-0 top-3 bottom-3 border-r border-dashed border-white/10" />
              
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#0c0d10] to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0c0d10] to-transparent pointer-events-none z-20" />

              <div className="h-full overflow-y-auto no-scrollbar py-2">
                <div className="flex flex-col space-y-1.5 pr-1.5">
                  {filteredPlanets.map((p) => {
                    const isActive = p.id === activePlanet.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setActivePlanet(p)}
                        className={`group flex items-center justify-end space-x-3 py-2 pl-1 pr-4 text-right transition-all duration-300 w-full relative ${
                          isActive 
                            ? 'text-white' 
                            : 'text-white/35 hover:text-white/65'
                        }`}
                      >
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase truncate select-none">
                          {p.name}
                        </span>
                        
                        {/* Indicadores en la línea de guía de órbita */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center translate-x-[4.5px] z-10">
                          <div
                            className={`rounded-full transition-all duration-500 ${
                              isActive
                                ? 'w-2 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,0.95)] border border-white scale-125'
                                : 'w-1 h-1 bg-white/10 group-hover:bg-white/30 border border-white/15 group-hover:scale-110'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                  
                  {filteredPlanets.length === 0 && (
                    <div className="text-center text-white/20 text-[8.5px] py-8 leading-normal font-mono select-none">
                      NINGÚN ELEMENTO EN ESTA CATEGORÍA
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Panel de detalles del planeta seleccionado */}
            <div className="flex-1 h-full flex flex-col justify-between pl-5 relative z-10">
              
              {/* Visualizador 3D del Planeta y sus lunas */}
              <div className="flex-1 flex items-center justify-center min-h-0 relative">
                {/* Pasamos un factor que acelere o desacelere la velocidad usando CSS directamente */}
                <div style={{ transform: `scale(1)` }} className="relative w-full h-full flex items-center justify-center">
                  <PlanetVisual planet={{
                    ...activePlanet,
                    moons: activePlanet.moons.map(m => ({
                      ...m,
                      speed: m.speed / orbitSpeed // Ajusta la duración basándose en el slider de velocidad
                    }))
                  }} />
                </div>
              </div>

              {/* Información interactiva del planeta */}
              <div className="pb-2 text-center flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`facts-${activePlanet.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center px-1"
                  >
                    <span className="text-white/45 tracking-[0.2em] text-[8.5px] sm:text-[9.5px] uppercase font-bold">
                      {activePlanet.subtitle}
                    </span>
                    <h2 className="text-white font-serif font-light tracking-[0.12em] text-2xl sm:text-3xl mt-1 select-none">
                      {activePlanet.name}
                    </h2>
                    
                    {/* Distancia astronómica en unidades UA */}
                    <div className="flex items-center space-x-1.5 mt-1.5 text-[8.5px] font-mono text-white/20 uppercase tracking-widest bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                      <span>DISTANCIA AL SOL:</span>
                      <span className="font-semibold text-white/45">{activePlanet.distance}</span>
                    </div>

                    <p className="text-white/60 tracking-wider text-[9.5px] sm:text-[10.5px] leading-relaxed max-w-[280px] text-center mt-3 select-none">
                      {activePlanet.description}
                    </p>

                    {/* Dato Curioso Dinámico */}
                    <div className="mt-4 p-2.5 bg-cyan-500/5 border border-cyan-500/10 rounded-xl text-left flex items-start space-x-2 max-w-[280px]">
                      <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-[8px] sm:text-[8.5px] text-cyan-300/80 leading-normal font-sans font-medium">
                        {PLANET_TRIVIA[activePlanet.id] || "Este cuerpo interactúa perfectamente bajo las leyes de la física cósmica."}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const currentIndex = PLANETS.findIndex((p) => p.id === activePlanet.id);
                        const nextIndex = (currentIndex + 1) % PLANETS.length;
                        setActivePlanet(PLANETS[nextIndex]);
                      }}
                      className="text-cyan-400/80 hover:text-cyan-300 tracking-widest text-[9px] uppercase font-mono font-semibold block text-center mt-5 border-b border-cyan-400/20 pb-0.5 hover:border-cyan-300 transition-all duration-300 group cursor-pointer"
                    >
                      EXPLORAR SIGUIENTE CUERPO CELESTE →
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </motion.section>

      </main>

      {/* 4. Pie de página minimalista */}
      <footer className="mt-12 text-center text-white/20 text-[9px] tracking-[0.15em] font-mono uppercase select-none">
        Haz clic en cualquier cuerpo celeste de la izquierda para explorar.
      </footer>

    </div>
  );
}
