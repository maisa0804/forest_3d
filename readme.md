# Forest 3D Scene

## 📁 Project Structure
```
forest-3d/
├── public/
│   ├── models/	        # GLTF 3D models (e.g., tree.glb)
│   ├── textures/	    # HDRI & textures (e.g., forest_hdri.hdr)
│   └── index.html	    # Main HTML file
│
├── src/
│   ├── components/
│   │   ├── Tree.js	    # GLTF tree model loader
│   │   ├── Ground.js	    # Terrain with Perlin noise
│   │   ├── Scene.js	    # Scene & environment setup
│   │   ├── Lighting.js	    # HDRI & directional light
│   │   ├── Fog.js	        # Fog effect
│   │   ├── leafShader.js  # Shader for animated leaves
│   │   └── Controls.js	    # OrbitControls for camera
│   │
│   ├── main.js	        # Entry point
│   ├── renderer.js	    # WebGL renderer setup
│   └── utils/
│       ├── loader.js	    # Asset loader functions
│       └── constants.js	 # Constants & settings
│
├── package.json	    # Project dependencies
├── vite.config.js	    # Vite configuration
└── README.md	        # Project documentation
```

## 🚀 Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## 📜 Features
- 🌳 **Realistic Forest Scene** with **GLTF 3D Models**
- 🌄 **Procedural Terrain** using **Perlin Noise**
- 🍃 **Wind-Animated Leaves** with **Custom Shaders**
- ☀️ **Realistic Lighting** with **HDRI & Shadows**
- 🌫️ **Fog Effect** for Depth & Atmosphere


Made with ❤️ using **Three.js** & **Vite**.

