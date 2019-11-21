declare global {
  interface Window {
    BMapLib: typeof BMapLib;
  }
}

declare namespace BMapLib {
  type Callback = (...args: any[]) => void;
  /**
   * 弧线
   */
  class CurveLine {
    constructor(points: BMap.Point[], opts?: CurveLineOptions);
  }
  interface CurveLineOptions extends BMap.PolylineOptions {}
  interface CurveLine extends BMap.Polyline {}

}