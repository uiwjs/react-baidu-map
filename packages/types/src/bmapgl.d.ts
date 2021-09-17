declare global {
  interface Window {
    BMapGL: typeof BMapGL;
  }
}

declare namespace BMapGL {
  class Map extends BMap.Map {}
}
