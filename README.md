# Next.js 3D Car Configurator

A high-end car configurator demo built with Next.js App Router and Three.js, featuring 3D visualization, customization, saving, sharing, and gallery functionality.

## Features

- 3D Visualization: Interactive 3D car model with orbit controls
- Customization: Paint colors, wheels, environment presets, and camera angles
- Save & Share: Save configurations to gallery with thumbnail generation and share via URL
- Gallery: Browse, restore, and manage saved configurations
- Specs & Comparison: Detailed specifications and preset comparisons

## Tech Stack

- Framework: Next.js (App Router)
- 3D Rendering: Three.js / @react-three/fiber / @react-three/drei
- Styling: Tailwind CSS
- State Management: URL query parameters + localStorage (Zustand if needed)
- Deployment: Docker for local development

## Requirements

- **Node.js**: >= 18.18.0 (recommended: v20.x or v24.x)
- npm or yarn

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Docker

```bash
docker build -t car-configurator .
docker run -p 3000:3000 car-configurator
```

## Pages

- / - Home page with introduction and call-to-action
- /configurator - Main 3D customization interface with save/share functionality
- /gallery - Browse and manage saved configurations
- /specs - Specifications, comparisons, and FAQ

## Usage

1. View: Explore the 3D car model with interactive controls
2. Customize: Adjust paint, wheels, environment, and camera settings
3. Save: Add your configuration to the gallery with auto-generated thumbnail
4. Share: Copy URL with embedded configuration state
5. Gallery: Review saved builds and restore for further editing

## Documentation

- PRODUCT_SPEC.md - Product overview and goals
- DATA_MODEL.md - Data structure and state management
- ROUTES.md - Routing and page specifications
- TASKS.md - Implementation checklist
