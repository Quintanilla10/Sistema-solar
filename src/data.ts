import { Planet } from './types';

export const PLANETS: Planet[] = [
  {
    id: 'mercury',
    name: 'MERCURIO',
    subtitle: 'PLANETA',
    description: 'El planeta más cercano al Sol, Mercurio es el más pequeño de nuestro sistema solar. Al no tener una atmósfera protectora que retenga el calor, experimenta variaciones extremas de temperatura entre el día y la noche.',
    distance: '0.39 UA',
    size: 105,
    gradient: 'radial-gradient(circle at 30% 30%, #e6a875 0%, #b87333 40%, #5c3512 80%, #1c0f05 100%)',
    glowColor: 'rgba(230, 168, 117, 0.3)',
    atmosphereGlow: 'rgba(230, 168, 117, 0.15)',
    moons: []
  },
  {
    id: 'venus',
    name: 'VENUS',
    subtitle: 'PLANETA',
    description: 'Cubierto por una densa y tóxica atmósfera de dióxido de carbono y nubes de ácido sulfúrico que atrapan el calor en un efecto invernadero desbocado, Venus es el planeta más caliente de nuestro sistema solar.',
    distance: '0.72 UA',
    size: 120,
    gradient: 'radial-gradient(circle at 30% 30%, #ffd494 0%, #f4a261 40%, #9c4c16 80%, #301402 100%)',
    glowColor: 'rgba(244, 162, 97, 0.35)',
    atmosphereGlow: 'rgba(244, 162, 97, 0.25)',
    hasClouds: true,
    cloudColor: 'rgba(253, 224, 71, 0.15)',
    moons: []
  },
  {
    id: 'earth',
    name: 'TIERRA',
    subtitle: 'PLANETA',
    description: 'Nuestro oasis azul es el único mundo conocido que alberga vida de manera activa. Sus océanos de agua líquida, escudo magnético y atmósfera rica en oxígeno sustentan una biosfera increíblemente diversa.',
    distance: '1.00 UA',
    size: 125,
    gradient: 'radial-gradient(circle at 30% 30%, #4da3ff 0%, #0052cc 40%, #002266 80%, #00081a 100%)',
    glowColor: 'rgba(77, 163, 255, 0.45)',
    atmosphereGlow: 'rgba(77, 163, 255, 0.25)',
    hasClouds: true,
    cloudColor: 'rgba(255, 255, 255, 0.4)',
    moons: [
      { name: 'LUNA', distance: 95, color: '#e2e8f0', speed: 12, size: 7 }
    ]
  },
  {
    id: 'mars',
    name: 'MARTE',
    subtitle: 'PLANETA',
    description: 'Un desierto frío y oxidado conocido como el planeta rojo. Posee el volcán más grande del sistema solar (Monte Olimpo) y profundos cañones, con fuerte evidencia de agua líquida en su remoto pasado.',
    distance: '1.52 UA',
    size: 115,
    gradient: 'radial-gradient(circle at 30% 30%, #ff7c60 0%, #e73f27 40%, #7d1c0e 80%, #260501 100%)',
    glowColor: 'rgba(231, 63, 39, 0.4)',
    atmosphereGlow: 'rgba(231, 63, 39, 0.2)',
    moons: [
      { name: 'FOBOS', distance: 75, color: '#a1a1aa', speed: 8, size: 4 },
      { name: 'DEIMOS', distance: 95, color: '#71717a', speed: 14, size: 3 }
    ]
  },
  {
    id: 'jupiter',
    name: 'JÚPITER',
    subtitle: 'PLANETA GIGANTE',
    description: 'El planeta más grande de nuestro sistema solar, este gigante gaseoso destaca por sus bandas de tormentas de colores y la icónica Gran Mancha Roja, un huracán colosal activo durante siglos.',
    distance: '5.20 UA',
    size: 150,
    gradient: 'radial-gradient(circle at 30% 30%, #ffdeb4 0%, #dca06c 35%, #8c4c23 70%, #441d08 95%, #180700 100%)',
    glowColor: 'rgba(220, 160, 108, 0.3)',
    atmosphereGlow: 'rgba(220, 160, 108, 0.15)',
    moons: [
      { name: 'ÍO', distance: 90, color: '#facc15', speed: 7, size: 5 },
      { name: 'EUROPA', distance: 110, color: '#93c5fd', speed: 11, size: 5 },
      { name: 'GANÍMEDES', distance: 130, color: '#94a3b8', speed: 15, size: 7 },
      { name: 'CALISTO', distance: 150, color: '#64748b', speed: 20, size: 6 }
    ]
  },
  {
    id: 'saturn',
    name: 'SATURNO',
    subtitle: 'PLANETA ANILLADO',
    description: 'Famoso por su espectacular e intrincado sistema de anillos de hielo y polvo cósmico, Saturno es un gigante de gas ligero con una densidad tan baja que flotaría en un océano gigantesco.',
    distance: '9.58 UA',
    size: 135,
    gradient: 'radial-gradient(circle at 30% 30%, #ffe6a3 0%, #e4be75 40%, #9b7238 75%, #4b3111 95%, #170a01 100%)',
    glowColor: 'rgba(228, 190, 117, 0.35)',
    atmosphereGlow: 'rgba(228, 190, 117, 0.15)',
    showRings: true,
    ringColor: 'rgba(228, 190, 117, 0.45)',
    ringAngle: 18,
    moons: [
      { name: 'TITÁN', distance: 110, color: '#fb923c', speed: 16, size: 8 }
    ]
  },
  {
    id: 'uranus',
    name: 'URANO',
    subtitle: 'PLANETA',
    description: 'Un gigante de hielo inclinado con un característico color cian debido al gas metano en su atmósfera. Es el único planeta del sistema solar que gira sobre su costado de manera casi horizontal.',
    distance: '19.2 UA',
    size: 125,
    gradient: 'radial-gradient(circle at 30% 30%, #bbf7f7 0%, #2dd4bf 40%, #0f766e 80%, #042f2e 100%)',
    glowColor: 'rgba(94, 234, 212, 0.3)',
    atmosphereGlow: 'rgba(94, 234, 212, 0.15)',
    showRings: true,
    ringColor: 'rgba(94, 234, 212, 0.25)',
    ringAngle: 75,
    moons: [
      { name: 'MIRANDA', distance: 75, color: '#99f6e4', speed: 8, size: 4 },
      { name: 'TITANIA', distance: 100, color: '#2dd4bf', speed: 16, size: 6 }
    ]
  },
  {
    id: 'neptune',
    name: 'NEPTUNO',
    subtitle: 'PLANET',
    description: 'El mundo más distante y frío de nuestro sistema solar, Neptuno es un gigante gaseoso azul cobalto azotado por los vientos más feroces registrados, superando los 2,100 km/h.',
    distance: '30.1 UA',
    size: 130,
    gradient: 'radial-gradient(circle at 30% 30%, #5fa9ff 0%, #2563eb 45%, #1e3a8a 80%, #090d16 100%)',
    glowColor: 'rgba(37, 99, 235, 0.4)',
    atmosphereGlow: 'rgba(37, 99, 235, 0.3)',
    moons: [
      { name: 'PROTEO', distance: 80, color: '#818cf8', speed: 9, size: 5 },
      { name: 'TRITÓN', distance: 105, color: '#a5f3fc', speed: 14, size: 8 }
    ]
  },
  {
    id: 'pluto',
    name: 'PLUTÓN',
    subtitle: 'PLANETA ENANO',
    description: 'Alguna vez el noveno planeta, Plutón es ahora un fascinante planeta enano de hielo y roca en el Cinturón de Kuiper, con un característico glaciar de nitrógeno con forma de corazón.',
    distance: '39.5 UA',
    size: 100,
    gradient: 'radial-gradient(circle at 30% 30%, #ebd3bd 0%, #b09174 45%, #664d3c 80%, #21150e 100%)',
    glowColor: 'rgba(176, 145, 116, 0.25)',
    atmosphereGlow: 'rgba(235, 211, 189, 0.15)',
    moons: [
      { name: 'CARONTE', distance: 75, color: '#a8a29e', speed: 14, size: 7 }
    ]
  },
  {
    id: 'sun_orbit',
    name: 'SOL',
    subtitle: 'ESTRELLA CENTRAL',
    description: 'Nuestra estrella madre, una enana amarilla que concentra el 99.8% de toda la masa del sistema solar. Su inmensa gravedad mantiene unidos en órbita a todos los planetas y cuerpos celestes.',
    distance: '0.00 UA',
    size: 160,
    gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #ffea70 20%, #ff8b00 55%, #e63900 85%, #300000 100%)',
    glowColor: 'rgba(255, 139, 0, 0.6)',
    atmosphereGlow: 'rgba(255, 80, 0, 0.35)',
    moons: [
      { name: 'MERCURIO', distance: 95, color: '#b87333', speed: 5, size: 5 },
      { name: 'VENUS', distance: 115, color: '#f4a261', speed: 9, size: 6 },
      { name: 'TIERRA', distance: 135, color: '#0052cc', speed: 14, size: 7 },
      { name: 'MARTE', distance: 155, color: '#e73f27', speed: 18, size: 6 }
    ]
  },
  {
    id: 'spaceship_path',
    name: 'VOYAGER 1',
    subtitle: 'SONDA ESPACIAL',
    description: 'El objeto creado por el ser humano que ha viajado más lejos de la Tierra, superando los límites de nuestro sistema solar para adentrarse en el misterioso espacio interestelar.',
    distance: '163 UA',
    size: 110,
    gradient: 'radial-gradient(circle at 30% 30%, #e2e8f0 0%, #94a3b8 35%, #475569 75%, #0f172a 100%)',
    glowColor: 'rgba(148, 163, 184, 0.35)',
    atmosphereGlow: 'rgba(148, 163, 184, 0.15)',
    moons: [
      { name: 'SONDA', distance: 80, color: '#38bdf8', speed: 10, size: 6 }
    ]
  }
];
