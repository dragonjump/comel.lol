# GLTF Previewer with Advanced Audio Controls

A powerful 3D model viewer for GLB/GLTF files with advanced audio features and professional controls.

## Features

### 3D Viewing
- **Model Loading**: Drag & drop GLB/GLTF files or use hotkeys 1-6 for preset plane models
- **Camera Controls**: 
  - WASD keys for camera movement
  - Mouse for orbit controls
  - Auto-rotation enabled by default
  - 55% more zoom on model load
- **Lighting**: Professional lighting setup with ambient, directional, hemisphere, and fill lights
- **Skybox**: Animated cloud background with procedural generation

### Audio System
- **Background Music**: Synth background music (loads `synth.wav` or generates procedural music)
- **Sound Effects**: 
  - Wind sounds on WASD camera movement
  - Engine sounds on Q/E up/down movement
  - Ambient background sounds
- **Volume Controls**: 
  - Master volume control
  - Individual volume controls for each sound type
  - Lowered default volumes for better balance

### Control Panel
- **Display Settings**: Grid toggle, background color, auto-rotate
- **Lighting Controls**: Ambient intensity, exposure, light colors
- **Performance Monitoring**: FPS, memory usage, triangle/vertex counts

## Hotkeys

| Key | Action |
|-----|--------|
| 1-6 | Switch between plane models |
| WASD | Move camera + wind sounds |
| Q/E | Up/Down + engine sounds |
| R | Reset camera |
| O | Toggle orbit controls |
| F | Toggle fullscreen |
| G | Toggle grid |

## Audio Setup

### Using Your Own Music
1. Place a `synth.wav` file in the same directory as `previewer.html`
2. The previewer will automatically load and loop your music
3. If no file is found, it generates procedural synth background music

### Audio Controls
- **Master Volume**: Controls overall audio level
- **Wind Sound**: Volume for WASD movement sounds (default: 15%)
- **Engine Sound**: Volume for Q/E movement sounds (default: 20%)
- **Ambient Sound**: Volume for background ambient (default: 15%)
- **Synth Music**: Volume for background music (default: 20%)

### Default Settings
- Audio is disabled by default (click "Enable Audio" to start)
- All sound effect volumes are lowered for better balance
- Background music loops continuously when enabled

## File Structure

```
flying-cars/
├── previewer.html      # Main previewer application
├── plane1.glb         # Preset plane models
├── plane2.glb
├── plane3.glb
├── plane4.glb
├── plane5.glb
├── plane6.glb
├── synth.wav          # Optional background music (place here)
└── README.md          # This file
```

## Browser Compatibility

- Modern browsers with WebGL support
- Web Audio API support required for audio features
- ES6 modules support required

## Usage

1. Open `previewer.html` in a web browser
2. Use hotkeys 1-6 to load different plane models
3. Navigate with WASD keys and mouse
4. Enable audio from the right-side audio panel
5. Adjust volumes and settings as needed
6. Drag & drop your own GLB/GLTF files to view them

## Technical Details

- Built with Three.js for 3D rendering
- Procedural audio generation using Web Audio API
- Responsive design with professional UI controls
- Optimized for performance with shadow mapping and tone mapping
