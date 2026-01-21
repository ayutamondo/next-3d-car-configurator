# Copilot Instructions for Next.js 3D Car Configurator

## Project Overview

A Next.js 15 + Three.js (@react-three/fiber) car configurator demo with URL-based state persistence, localStorage gallery, and interactive 3D visualization using Tailwind CSS.

## Architecture Essentials

### State Management Pattern

- **URL Query Parameters** (primary): Paint, wheels, environment, camera position are stored as URL params (`?paint=red&wheels=sport&env=studio&cam=default`)
- **localStorage** (gallery only): Build history in `car-configurator-builds` key; each Build object has id, name, config, createdAt, and optional thumbnail
- **React Hooks** (UI-only): Toast messages use simple useState; no global state manager (Zustand mentioned as optional future)

### Data Model (lib/types.ts)

- `CarConfig`: 4 required fields (paint, wheels, env, cam); stored in URL query and within Build objects
- `Build`: localStorage entity with id, name, config, createdAt, optional thumbnail
- Options are defined as const arrays (PAINT_OPTIONS, WHEEL_OPTIONS, etc.) with value/label pairs

### Component Architecture

#### Three.js Integration (components/CarViewer.tsx)

- Uses Canvas from @react-three/fiber with Suspense fallback
- CarModel renders a simple box mesh (placeholder) with color based on `config.paint`
- Maps camera positions via `getCameraPosition()` switch; environment presets via `getEnvironmentPreset()`
- Always includes OrbitControls with constraints: pan disabled, zoom range 2-10
- Canvas is full-width/height container; parent must provide dimensions

#### Page Structure (app/{route}/page.tsx)

- All pages are `'use client'` (client components)
- Configurator page: 2-column grid (3/1 ratio on desktop, stacked mobile) — 3D viewer left, controls right
- Gallery page: listens to `getBuilds()` on mount, rebuilds on delete (no real-time sync)
- Header/footer/nav in root layout.tsx; no nested layout wrappers

## Critical Development Patterns

### URL ↔ Config Mapping (useConfigState.ts)

- `useSearchParams()` reads query params; `updateConfig()` rebuilds URL with `URLSearchParams`
- `router.replace()` updates URL without navigation delay (important: **replace**, not push)
- Query params are lowercase keys; if missing, falls back to DEFAULT_CONFIG

### Build Persistence (useBuilds.ts)

- `getBuilds()` returns empty array during SSR (`typeof window === 'undefined'`)
- `saveBuild()` creates new Build with `Date.now().toString()` as id and auto-generated name
- `deleteBuild()` filters array and re-stringifies; no partial updates
- **Key naming convention**: "car-configurator-builds" (must match for gallery to work)

### Gallery → Configurator Flow

- Gallery's `handleOpen()` converts Build.config to URL params, then `router.push()` to `/configurator?...`
- This ensures shareable URLs; no buildId lookup from localStorage

## Build & Dev Commands

- `npm run dev`: Start Next.js dev server on http://localhost:3000
- `npm run build && npm run start`: Production build
- `npm run lint`: ESLint check (enforces strict TypeScript)
- Docker: `docker build -t car-configurator . && docker run -p 3000:3000 car-configurator`

## Common Tasks & Patterns

### Adding a New Customization Option (e.g., interior color)

1. Add new field to `CarConfig` interface in lib/types.ts
2. Add option array (e.g., `INTERIOR_OPTIONS`) in types.ts
3. Add URL param read/write in `useConfigState.ts`
4. Pass config to CarViewer; update 3D logic (lighting, material)
5. Add UI control in configurator/page.tsx (select dropdown pattern exists)

### Modifying 3D Rendering (CarViewer.tsx)

- Color map: check `config.paint` in CarModel's meshStandardMaterial
- Camera: update `getCameraPosition()` for new cam values
- Lighting/environment: update `getEnvironmentPreset()` or add new lights
- **Important**: Wrap heavy geometry in Suspense and test performance (canvas is full-height)

### Styling

- Tailwind only; no CSS modules or styled-components
- Container-based layout: `.container.mx-auto.px-4`
- Responsive grid: `grid-cols-1 lg:grid-cols-3` (1 column mobile, 3 on desktop)
- Header/footer always in root layout

## Troubleshooting Notes

- Toast messages auto-hide after 3s; no manual dismiss needed
- Canvas 404 or black screen: check Environment preset exists (drei provides 'studio', 'sunset', 'night')
- URL persists but build doesn't load: verify Gallery calls `getBuilds()` correctly in useEffect
- Gallery empty after reload: localStorage is read on mount in Gallery page; ensure Build objects have correct schema

## Files to Reference When...

- Adding options/defaults → [lib/types.ts](lib/types.ts)
- Changing state flow → [lib/useConfigState.ts](lib/useConfigState.ts)
- Modifying 3D visuals → [components/CarViewer.tsx](components/CarViewer.tsx)
- Adjusting gallery logic → [app/gallery/page.tsx](app/gallery/page.tsx)
- Styling structure → [app/layout.tsx](app/layout.tsx) and [app/configurator/page.tsx](app/configurator/page.tsx)
