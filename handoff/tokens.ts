/** Pulso de captura 0.9.0. Valores de diseño para React Native / Expo. */
export const color = {
  ink: '#232321',
  inkSoft: '#5E625E',
  coral: '#F47E63',
  coralPressed: '#DC6A50',
  paper: '#F5F4F1',
  white: '#FFFFFF',
  line: '#DEDFDA',
  field: '#FAFAF9',
  fieldLine: '#D6D8D4',
  error: '#AD3D35',
} as const;

export const space = { none: 0, x1: 4, x2: 8, x3: 12, x4: 16, x5: 20, x6: 24, x8: 32 } as const;
export const radius = { field: 11, card: 13, hero: 26, pill: 999 } as const;
export const touch = { minimum: 44, primaryHeight: 50, adjacentGap: 8 } as const;

/** Font family after loading assets/fonts/Archivo-Latin-Variable.ttf with expo-font. */
export const typography = {
  family: 'ArchivoCapturer',
  fallback: 'System',
  display: { fontSize: 38, lineHeight: 40, fontWeight: '700', letterSpacing: -1.5 },
  title: { fontSize: 28, lineHeight: 30, fontWeight: '700', letterSpacing: -1.2 },
  section: { fontSize: 17, lineHeight: 22, fontWeight: '700', letterSpacing: -0.3 },
  body: { fontSize: 15, lineHeight: 22, fontWeight: '400', letterSpacing: 0 },
  label: { fontSize: 15, lineHeight: 20, fontWeight: '600', letterSpacing: -0.1 },
  meta: { fontSize: 12, lineHeight: 17, fontWeight: '500', letterSpacing: 0 },
  button: { fontSize: 15, lineHeight: 20, fontWeight: '700', letterSpacing: -0.1 },
} as const;

export const motion = {
  pressMs: 120,
  viewMs: 220,
  viewOffset: 8,
  completeMs: 350,
  toastVisibleMs: 3000,
  reducedMs: 0,
} as const;

export const capturerTheme = { color, space, radius, touch, typography, motion } as const;
export type CapturerTheme = typeof capturerTheme;
