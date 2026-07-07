export interface Moon {
  name: string;
  distance: number; // orbit radius in pixels
  color: string;
  speed: number; // duration of orbital rotation in seconds
  size: number; // visual size in pixels
}

export interface Planet {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  distance: string; // distance from Sun or telemetry info
  size: number; // size in px
  gradient: string; // CSS background style for 3D sphere gradient
  glowColor: string; // CSS shadow glow color
  moons: Moon[];
  showRings?: boolean;
  ringColor?: string;
  ringAngle?: number;
  hasClouds?: boolean;
  cloudColor?: string;
  atmosphereGlow?: string; // Outer glow color
}

export type CodeTab = 'html' | 'css';
