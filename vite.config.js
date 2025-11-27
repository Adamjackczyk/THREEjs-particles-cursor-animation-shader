import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

export default {
  root: 'src/',
  publicDir: '../static/',

  base: '/THREEjs-particles-cursor-animation-shader/',

  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
  },

  build: {
    outDir: '../docs', 
    emptyOutDir: true,
    sourcemap: false
  },

  plugins: [
    restart({ restart: ['../static/**'] }),
    glsl()
  ]
}
