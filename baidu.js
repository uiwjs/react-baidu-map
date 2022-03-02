(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-baidu-map"] = factory(require("react"), require("react-dom"));
	else
		root["@uiw/react-baidu-map"] = factory(root["React"], root["ReactDOM"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__787__, __WEBPACK_EXTERNAL_MODULE__156__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 382:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(382);var f=__webpack_require__(787),g=60103;__webpack_unused_export__=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");__webpack_unused_export__=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(858);
} else {}


/***/ }),

/***/ 787:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__787__;

/***/ }),

/***/ 156:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "APILoader": () => (/* reexport */ APILoader),
  "CanvasLayer": () => (/* reexport */ canvas_layer_esm),
  "Circle": () => (/* reexport */ circle_esm),
  "Context": () => (/* reexport */ Context),
  "Control": () => (/* reexport */ control_esm),
  "CopyrightControl": () => (/* reexport */ copyright_control_esm),
  "CopyrightControlItem": () => (/* reexport */ CopyrightControlItem),
  "CurveLine": () => (/* reexport */ curve_line_esm),
  "CustomOverlay": () => (/* reexport */ custom_overlay_esm),
  "DrawingManager": () => (/* reexport */ drawing_manager_esm),
  "GeolocationControl": () => (/* reexport */ geolocation_control_esm),
  "GroundOverlay": () => (/* reexport */ ground_overlay_esm),
  "InfoWindow": () => (/* reexport */ info_window_esm),
  "Label": () => (/* reexport */ label_esm),
  "Map": () => (/* reexport */ esm),
  "MapTypeControl": () => (/* reexport */ type_control_esm),
  "Marker": () => (/* reexport */ marker_esm),
  "NavigationControl": () => (/* reexport */ navigation_control_esm),
  "OverviewMapControl": () => (/* reexport */ overview_map_control_esm),
  "PanoramaControl": () => (/* reexport */ panorama_control_esm),
  "PointCollection": () => (/* reexport */ point_collection_esm),
  "Polygon": () => (/* reexport */ polygon_esm),
  "Polyline": () => (/* reexport */ polyline_esm),
  "Provider": () => (/* reexport */ Provider),
  "RequireScript": () => (/* reexport */ require_script_esm),
  "ScaleControl": () => (/* reexport */ scale_control_esm),
  "TileLayer": () => (/* reexport */ tile_layer_esm),
  "delay": () => (/* reexport */ delay),
  "initialState": () => (/* reexport */ initialState),
  "noop": () => (/* reexport */ noop),
  "reducer": () => (/* reexport */ reducer),
  "requireCss": () => (/* reexport */ requireCss),
  "requireScript": () => (/* reexport */ requireScript),
  "useCanvasLayer": () => (/* reexport */ useCanvasLayer),
  "useCircle": () => (/* reexport */ useCircle),
  "useControl": () => (/* reexport */ useControl),
  "useCopyrightControl": () => (/* reexport */ useCopyrightControl),
  "useCurveLine": () => (/* reexport */ useCurveLine),
  "useCustomOverlay": () => (/* reexport */ useCustomOverlay),
  "useDrawingManager": () => (/* reexport */ useDrawingManager),
  "useEnableProperties": () => (/* reexport */ useEnableProperties),
  "useEventProperties": () => (/* reexport */ useEventProperties),
  "useGeolocationControl": () => (/* reexport */ useGeolocationControl),
  "useGroundOverlay": () => (/* reexport */ useGroundOverlay),
  "useInfoWindow": () => (/* reexport */ useInfoWindow),
  "useLabel": () => (/* reexport */ useLabel),
  "useMap": () => (/* reexport */ useMap),
  "useMapContext": () => (/* reexport */ useMapContext),
  "useMapTypeControl": () => (/* reexport */ useMapTypeControl),
  "useMarker": () => (/* reexport */ useMarker),
  "useNavigationControl": () => (/* reexport */ useNavigationControl),
  "useOverviewMapControl": () => (/* reexport */ useOverviewMapControl),
  "usePanoramaControl": () => (/* reexport */ usePanoramaControl),
  "usePointCollection": () => (/* reexport */ usePointCollection),
  "usePolygon": () => (/* reexport */ usePolygon),
  "usePolyline": () => (/* reexport */ usePolyline),
  "usePrevious": () => (/* reexport */ usePrevious),
  "useProperties": () => (/* reexport */ useProperties),
  "useRenderDom": () => (/* reexport */ useRenderDom),
  "useScaleControl": () => (/* reexport */ useScaleControl),
  "useTileLayer": () => (/* reexport */ useTileLayer),
  "useVisiable": () => (/* reexport */ useVisiable),
  "withMap": () => (/* reexport */ withMap)
});

;// CONCATENATED MODULE: ../utils/esm/noop.js
function noop() {}

// EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ = __webpack_require__(156);
var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_);
// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(787);
var external_root_React_commonjs2_react_commonjs_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(664);
;// CONCATENATED MODULE: ../utils/esm/hooks.js
/// <reference types="@uiw/react-baidu-map-types" />


/**
 * 批量创建多个如下 State，监听并设置值，
 * 组件属性更改 <Componet enableDragging={true} >
 * 根据 enableDragging 的 Boolean 值，执行 `enable` 和 `disable` 开头的函数。
 * @example
 * ```js
 * const [enableDragging, setEnableDragging] = useState(props.enableDragging);
 * useEffect(() => {
 *   console.log('~~:enableDragging', enableDragging, props.enableDragging, polyline);
 *   setEnableDragging(props.enableDragging)
 * }, [polyline, enableDragging, props.enableDragging]);
 * ```
 * @param instance
 * @param props
 * @param propsName
 */


function useEnableProperties(instance, props, propsName) {
  if (props === void 0) {
    props = {};
  }

  if (propsName === void 0) {
    propsName = [];
  }

  propsName.forEach(name => {
    var eName = "enable" + name;
    var funName = props[eName] ? "enable" + name : "disable" + name;

    if (instance && props[eName] !== undefined) {
      instance[funName] && instance[funName]();
    }
  });
}
/**
 * 针对 Overlay 类型的组件，有公共的是否显示 对象处理
 * 通过参数 `visiable` 来控制执行 `show()` or `hide()`
 */

function useVisiable(instance, props) {
  if (props === void 0) {
    props = {};
  }

  var visiable = props.visiable;
  var [state, setState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(visiable);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (instance && visiable !== undefined) {
      if (visiable) {
        instance.show && instance.show();
      } else {
        instance.hide && instance.hide();
      }

      if (visiable !== state) {
        setState(visiable);
      }
    }
  }, [instance, state, visiable]);
}
/**
 * 批量创建多个如下 State，监听并设置值，
 * 执行 `set` 开头的函数。
 * @param instance
 * @param props
 * @param propsName
 */

function useProperties(instance, props, propsName) {
  if (propsName === void 0) {
    propsName = [];
  }

  propsName.forEach(name => {
    var eName = "" + name.charAt(0).toLowerCase() + name.slice(1); // eslint-disable-next-line react-hooks/rules-of-hooks

    var [state, setState] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props[eName]); // eslint-disable-next-line react-hooks/rules-of-hooks

    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
      if (instance && instance["set" + name] && props[eName] !== undefined) {
        /**
         * 坐标点的参数设置，比对, 坐标点的参数设置
         */
        var data = props[eName];

        if (data && data.lng && data.lat) {
          data = new BMap.Point(data.lng, data.lat);
          var preData = state;

          if (preData && preData.lng && preData.lat) {
            preData = new BMap.Point(preData.lng, preData.lat);

            if (data.equals(preData)) {
              return;
            }
          }
        }

        instance["set" + name](data); // 属性发生变化缓存

        if (state !== props[eName]) {
          if (eName === 'bounds') {
            if (state && props[eName] && !state.equals(props[eName])) {
              setState(props[eName]);
            }
          } else {
            setState(props[eName]);
          }
        }
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [instance, props[eName]]);
  });
}

/**
 * 绑定事件
 * @param instance 实例对象
 * @param props 传递进来的 props
 * @param eventName 事件的名字，如，我们使用 `onClick` 事件，最终被转换成，`click` 绑定到实例中，`onDblClick` => `dblclick`
 *
 * @example
 * ```js
 * useEventProperties<BMap.Marker, UseMarker>(marker!, props, [
 *   'Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver'
 * ]);
 * ```
 */
function useEventProperties(instance, props, eventName, type) {
  if (props === void 0) {
    props = {};
  }

  if (eventName === void 0) {
    eventName = [];
  }

  eventName.forEach(name => {
    var eventName = "on" + name;
    var eventHandle = props[eventName]; // eslint-disable-next-line react-hooks/rules-of-hooks

    (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
      if (!instance) return;

      if (eventHandle && name) {
        var eName = name;

        if (type === 'CamelCase') {
          eName = name.replace(name[0], name[0].toLowerCase());
        } else {
          eName = name.toLowerCase();
        }

        instance.addEventListener(eName, eventHandle);
        return () => {
          instance.removeEventListener(eName, eventHandle);
        };
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [instance, props[eventName]]);
  });
}
/**
 * 获取上一轮的 props 或 state
 * How to get the previous props or state?
 * https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 * @example
 * ```js
 * function Counter() {
 *   const [count, setCount] = useState(0);
 *   const prevCount = usePrevious(count);
 *   return <h1>Now: {count}, before: {prevCount}</h1>;
 * }
 * ```
 */

function usePrevious(value) {
  var ref = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
}
function useRenderDom(props) {
  var container = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(document.createElement('div'));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useLayoutEffect)(() => {
    (0,external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_.render)( /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
      children: props.children
    }), container.current);
  }, [props.children]);
  return {
    container: container.current
  };
}

;// CONCATENATED MODULE: ../utils/esm/requireScript.js
var _importedScript = {};
/**
 * load dependency by css tag
 */

function requireCss(src) {
  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }

    var script = document.createElement('link');
    script.type = 'text/css';
    script.rel = 'stylesheet';
    script.href = src;

    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError("The css " + src + " is no accessible."));
    };

    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };

    headElement.appendChild(script);
  });
}
/**
 * load dependency by script tag
 */

function requireScript(src) {
  var headElement = document && (document.head || document.getElementsByTagName('head')[0]);
  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = '_react_baidu_map';
    script.src = src;
    script.async = true;
    script.defer = true;

    script.onerror = err => {
      headElement.removeChild(script);
      reject(new URIError("The Script " + src + " is no accessible."));
    };

    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };

    headElement.appendChild(script);
  });
}

;// CONCATENATED MODULE: ../utils/esm/index.js




;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ../api-loader/esm/index.js


/**
 * 初始化和加载baidu地图
 */



function delay(time) {
  return new Promise((resolve, reject) => {
    window && window.setTimeout(resolve, time);
  });
}
var DEFAULT_RETRY_TIME = 3;
/**
 * APILoader 用于加载百度地图依赖
 */

class APILoader extends (external_root_React_commonjs2_react_commonjs_react_amd_react_default()).Component {
  /**
   * 全局可能存在多个Loader同时渲染, 但是只能由一个负责加载
   */

  /**
   * 等待BMap就绪
   */
  static ready() {
    return _asyncToGenerator(function* () {
      if (window && window.BMap.Map) {
        return;
      }

      if (window && window.BMapGL.Map) {
        return;
      }

      return new Promise((res, rej) => {
        APILoader.waitQueue.push([res, rej]);
      });
    })();
  }

  constructor(props) {
    super(props);
    this.isMountedOk = false;

    this.handleError = error => {
      if (this.isMountedOk) {
        this.setState({
          error
        });
      }
    };

    this.finish = () => {
      if (window && this.props.type === 'webgl') {
        window.BMap = window.BMapGL;
      }

      if (this.isMountedOk) {
        this.setState({
          loaded: true
        });
      }
    };

    this.state = {
      loaded: props.type === 'webgl' ? window && !!window.BMapGL && !!window.BMapGL.Map : window && !!window.BMap && !!window.BMap.Map
    };

    if (this.props.akay == null) {
      throw new TypeError('BaiDuMap: akay is required');
    }
  }

  componentDidMount() {
    this.isMountedOk = true;
    var {
      callbackName
    } = this.props;

    if (!window || !callbackName) {
      return;
    }

    if (this.props.type === 'webgl' && window && window.BMapGL && !window.BMapGL.Map || this.props.type === 'webgl' && window && !window.BMapGL || window && window.BMap && !window.BMap.Map || window && !window.BMap) {
      if (window && window[callbackName]) {
        APILoader.waitQueue.push([this.finish, this.handleError]);
        return;
      }

      this.loadMap();
    }
  }

  componentWillUnmount() {
    this.isMountedOk = false;
  }

  render() {
    return this.state.loaded ? this.props.children : this.props.fallback ? this.props.fallback(this.state.error) : this.state.error ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      style: {
        color: 'red'
      },
      children: this.state.error.message
    }) : null;
  }

  getScriptSrc() {
    var cfg = this.props;
    var protocol = cfg.protocol || window.location.protocol;

    if (protocol.indexOf(':') === -1) {
      protocol += ':';
    }

    var args = ["v=" + cfg.version, "ak=" + cfg.akay, "callback=" + cfg.callbackName];

    if (cfg.type) {
      args.push("type=" + cfg.type);
    }

    return protocol + "//" + cfg.hostAndPath + "?" + args.join('&');
  }
  /**
   * load BaiduMap in script tag
   */


  loadMap() {
    var _this = this;

    return _asyncToGenerator(function* () {
      var {
        callbackName
      } = _this.props;

      if (!window || !callbackName) {
        return;
      }

      var src = _this.getScriptSrc();

      window[callbackName] = () => {
        // flush queue
        var queue = APILoader.waitQueue;
        APILoader.waitQueue = [];
        queue.forEach(task => task[0]());

        _this.finish();
      };

      for (var i = 0; i < DEFAULT_RETRY_TIME; i++) {
        try {
          yield requireScript(src);
          break;
        } catch (error) {
          if (i === DEFAULT_RETRY_TIME - 1) {
            var _ret = function () {
              var err = new Error("Failed to load Baidu Map: " + error.message); // flush queue

              var queue = APILoader.waitQueue;
              APILoader.waitQueue = [];
              queue.forEach(task => task[1](err));

              _this.handleError(err);

              return {
                v: void 0
              };
            }();

            if (typeof _ret === "object") return _ret.v;
          }

          yield delay(i * 1000);
        }
      }
    })();
  }

}
APILoader.defaultProps = {
  akay: '',
  hostAndPath: 'api.map.baidu.com/api',
  version: '3.0',
  callbackName: 'load_bmap_sdk',
  type: ''
};
APILoader.waitQueue = [];

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ../map/esm/context.js



var initialState = {
  map: undefined,
  BMap: undefined,
  container: undefined
};
var reducer = (state, action) => {
  return _extends({}, state, action);
};
var Context = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().createContext({
  state: initialState,
  dispatch: () => null
});
function useMapContext() {
  var {
    state,
    dispatch
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(Context);
  return _extends({}, state, {
    state,
    dispatch
  });
}

;// CONCATENATED MODULE: ../map/esm/useMap.js



function useMap(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    widget,
    minZoom,
    maxZoom,
    mapType,
    enableHighResolution,
    enableAutoResize,
    enableMapClick
  } = props;
  var [map, setMap] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [zoom, setZoom] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.zoom || 15);
  var [container, setContainer] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.container);
  var {
    dispatch
  } = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useContext)(Context);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (container && !map && BMap) {
      var instance = new BMap.Map(container, {
        minZoom,
        maxZoom,
        mapType,
        enableHighResolution,
        enableAutoResize,
        enableMapClick
      });
      /**
       * 加载控件
       */

      widget && widget.forEach(item => {
        if (!BMap) {
          return;
        }

        if (typeof item === 'string') {
          instance.addControl(new BMap[item]());
        } else if (typeof item === 'object' && item.control && typeof item.control === 'function') {
          instance.addControl(item.control(BMap, instance));
        } else if (typeof item === 'object' && item.name) {
          var options = typeof item.options === 'function' ? item.options(BMap, instance) : item.options;
          instance.addControl(new BMap[item.name](options));
        }
      });
      setMap(instance);
    }

    return () => {
      if (map) {
        map.clearOverlays();
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container, map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && container) {
      dispatch({
        map,
        container,
        BMap
      });
    }

    return () => {
      dispatch({
        map: undefined,
        container: undefined,
        BMap: undefined
      });
    };
  }, [map, container]);
  var [center, setCenter] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.center || '上海');
  /**
   * 根据参数设置中心点
   */

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && center) {
      var cent = center;

      if (center && center.lng && center.lat) {
        cent = new BMap.Point(center.lng, center.lat);
        map.centerAndZoom(cent, zoom);
      }

      map.centerAndZoom(center, zoom);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [center, map]);
  var [autoLocalCity, setAutoLocalCity] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.autoLocalCity);
  /**
   * IP定位获取当前城市，进行自动定位
   */

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && autoLocalCity) {
      var myCity = new BMap.LocalCity();
      myCity.get(result => {
        setCenter(result.name);
        setZoom(result.level);
        setAutoLocalCity(false);
      });
    }
  }, [autoLocalCity, map]);
  useEventProperties(map, props, ['Click', 'DblClick', 'RightClick', 'RightdblClick', 'MapTypeChange', 'MouseMove', 'MouseOver', 'MouseOut', 'MoveStart', 'Moving', 'MoveEnd', 'ZoomStart', 'ZoomEnd', 'AddOverlay', 'AddControl', 'RemoveControl', 'RemoveOverlay', 'ClearOverlays', 'DragStart', 'Dragging', 'DragEnd', 'AddTileLayer', 'RemoveTileLayer', 'Load', 'ReSize', 'HotspotClick', 'HotspotOver', 'HotspotOut', 'TilesLoaded', 'TouchStart', 'TouchMove', 'TouchEnd', 'LongPress']); // 'Center',

  useProperties(map, props, ['DefaultCursor', 'DraggingCursor', 'MinZoom', 'MaxZoom', 'MapStyle', 'MapStyleV2', 'Panorama', 'CurrentCity', 'MapType', 'Viewport', 'Zoom']);
  useEnableProperties(map, props, ['Dragging', 'ScrollWheelZoom', 'DoubleClickZoom', 'Keyboard', 'InertialDragging', 'ContinuousZoom', 'PinchToZoom', 'AutoResize']);
  return {
    map,
    setMap,
    zoom,
    setZoom,
    container,
    setContainer,
    center,
    setCenter,
    autoLocalCity,
    setAutoLocalCity
  };
}

;// CONCATENATED MODULE: ../map/esm/index.js


var _excluded = ["className", "style", "children"];
/// <reference types="@uiw/react-baidu-map-types" />







function Provider(props) {
  var [state, dispatch] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: props.children
  });
}
/* harmony default export */ const esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((_ref, ref) => {
  var {
    className,
    style,
    children
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var [state, dispatch] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useReducer)(reducer, initialState);
  window.BMap = window.BMap || window.BMapGL;
  var elmRef = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);
  var {
    setContainer,
    container,
    setCenter,
    setAutoLocalCity,
    map
  } = useMap(_extends({
    container: elmRef.current
  }, props)); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setContainer(elmRef.current), [elmRef.current]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => props.center && setCenter(props.center), [props.center]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setAutoLocalCity(props.autoLocalCity), [props.autoLocalCity]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    map,
    BMap,
    container: elmRef.current
  }), [map]);
  var childs = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map) {
      dispatch({
        map,
        container: elmRef.current,
        BMap
      });
    }
  }, [map]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Context.Provider, {
    value: {
      state,
      dispatch
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: elmRef,
      className: className,
      style: _extends({
        fontSize: 1,
        height: '100%'
      }, style)
    }), BMap && map && typeof children === 'function' && children({
      BMap,
      map,
      container
    }), BMap && map && childs.map((child, key) => {
      if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return null;

      if (child.type && typeof child.type === 'string') {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
          key
        });
      }

      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, _extends({}, child.props, {
        BMap,
        map,
        container,
        key
      }));
    })]
  });
}));

;// CONCATENATED MODULE: ../circle/esm/useCircle.js



function useCircle(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    center,
    radius,
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking
  } = props;
  var {
    map
  } = useMapContext();
  var [circle, setCircle] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && !circle) {
      var point = center;

      if (center && center.lng && center.lat) {
        point = new BMap.Point(center.lng, center.lat);
      }

      var opts = {
        strokeColor,
        fillColor,
        strokeWeight,
        strokeOpacity,
        fillOpacity,
        strokeStyle,
        enableMassClear,
        enableEditing,
        enableClicking
      };
      var instance = new BMap.Circle(point, radius, opts);
      map.addOverlay(instance);
      setCircle(instance);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map, circle]);
  useVisiable(circle, props);
  useEventProperties(circle, props, ['Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'Remove', 'LineUpdate']);
  useEnableProperties(circle, props, ['Editing', 'MassClear']);
  useProperties(circle, props, ['Center', 'Radius', 'StrokeColor', 'FillColor', 'StrokeOpacity', 'FillOpacity', 'StrokeWeight', 'StrokeStyle']);
  return {
    circle,
    setCircle
  };
}

;// CONCATENATED MODULE: ../circle/esm/index.js




/* harmony default export */ const circle_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    circle
  } = useCircle(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    circle
  }));
  return null;
}));

;// CONCATENATED MODULE: ../canvas-layer/esm/useCanvasLayer.js




function useCanvasLayer(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    zIndex,
    paneName
  } = props;
  var {
    map
  } = useMapContext();
  var [canvasLayer, setCanvasLayer] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && BMap && !canvasLayer) {
      var update = function update() {
        var self = this;
        props.update && props.update(_extends({}, self, {
          BMap,
          map
        }));
      };

      var instance = new BMap.CanvasLayer({
        zIndex,
        paneName,
        update
      });
      map.addOverlay(instance);
      setCanvasLayer(instance);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map, canvasLayer]);
  useVisiable(canvasLayer, props);
  return {
    canvasLayer,
    setCanvasLayer
  };
}

;// CONCATENATED MODULE: ../canvas-layer/esm/index.js




/* harmony default export */ const canvas_layer_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    canvasLayer
  } = useCanvasLayer(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    canvasLayer
  }));
  return null;
}));

;// CONCATENATED MODULE: ../curve-line/esm/useCurveLine.js




function useCurveLine(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing = false,
    enableClicking,
    icons
  } = props;
  var {
    map
  } = useMapContext();
  var [curveLine, setCurveLine] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var libSDK = window.BMapLib;
  var [bMapLib, setBMapLib] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(libSDK);
  var [loadMapLib, setLoadBMapLib] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)( false || !!libSDK); // eslint-disable-next-line react-hooks/exhaustive-deps

  var opts = {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    // 如果第一次加载，会执行下面的
    if (map && bMapLib && !curveLine) {
      if (bMapLib.CurveLine) {
        var points = (props.path || []).map(item => new BMap.Point(item.lng, item.lat));
        var instance = new BMapLib.CurveLine(points, opts);
        map.addOverlay(instance);
        setCurveLine(instance);
      }
    } // 如果 bMapLib 已经加载过，会执行下面的


    if (map && bMapLib && !bMapLib.CurveLine) {
      requireScript('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js').then(() => {
        if (window.BMapLib) {
          var newMapLib = Object.assign(window.BMapLib, bMapLib);
          setBMapLib(newMapLib);

          var _points = (props.path || []).map(item => new BMap.Point(item.lng, item.lat));

          var _instance = new BMapLib.CurveLine(_points, opts);

          map.addOverlay(_instance);
          setCurveLine(_instance);
        }
      }).catch(() => {});
    } // 如果第一次加载，会执行下面的


    if (!bMapLib && !loadMapLib) {
      setLoadBMapLib(true);
      requireScript('//api.map.baidu.com/library/CurveLine/1.5/src/CurveLine.min.js').then(() => {
        if (window.BMapLib) {
          setBMapLib(window.BMapLib);
        }
      }).catch(() => {});
    }
  }, [map, bMapLib, curveLine, loadMapLib, props.path, opts]);
  var [path, setPath] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.path || []);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (curveLine && props.path && path && JSON.stringify(path) !== JSON.stringify(props.path)) {
      var points = path.map(item => new BMap.Point(item.lng, item.lat));
      curveLine.setPath(points);
    }
  }, [curveLine, path, props.path]);
  useVisiable(curveLine, props);
  useEventProperties(curveLine, props, ['Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'Remove', 'LineUpdate']);
  useEnableProperties(curveLine, props, ['Editing', 'MassClear']); // PositionAt

  useProperties(curveLine, props, ['StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle']);
  return {
    curveLine,
    setCurveLine,
    BMapLib: bMapLib,
    path,
    setPath
  };
}

;// CONCATENATED MODULE: ../curve-line/esm/index.js




/* harmony default export */ const curve_line_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    curveLine,
    BMapLib,
    setPath
  } = useCurveLine(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setPath(props.path), [props.path]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    curveLine,
    BMapLib
  }));
  return null;
}));

;// CONCATENATED MODULE: ../custom-overlay/esm/useCustomOverlay.js





function getCustomOverlay() {
  return class extends BMap.Overlay {
    constructor(elm, _position, paneName) {
      super();
      this.container = void 0;
      this.map = void 0;
      this.paneName = void 0;
      this.position = void 0;
      this.offset = void 0;

      this.initialize = map => {
        var panes = map.getPanes();
        this.container.style.position = 'absolute';
        this.map = map;
        panes[this.paneName].appendChild(this.container);
        return this.container;
      };

      this.draw = () => {
        if (this.position == null || this.map == null) {
          return;
        }

        var position = this.map.pointToOverlayPixel(this.position);
        var {
          width = 0,
          height = 0
        } = this.offset || {};
        this.container.style.left = position.x + width + "px";
        this.container.style.top = position.y + height + "px";
      };

      this.setOffset = offset => {
        this.offset = offset;
        this.draw();
      };

      this.setPosition = position => {
        this.position = position;
        this.draw();
      };

      this.setVisiable = visiable => {
        this.container.style.display = visiable ? 'block' : 'none';
      };

      this.getPosition = () => {
        return this.position;
      };

      this.setZIndex = index => {
        this.container.style.zIndex = index.toString();
      };

      this.container = elm;
      this.paneName = paneName || 'markerPane';
      this.position = _position;
    }

  };
}

function useCustomOverlay(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    children,
    paneName,
    position
  } = props;
  var {
    map
  } = useMapContext();
  var [customOverlay, setCustomOverlay] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [div, setDiv] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [portal, setPortal] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [count, setCount] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(0);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    return () => {
      if (map && customOverlay) {
        map.removeOverlay(customOverlay);
      }
    };
  }, [customOverlay, map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && !portal && document) {
      var elm = document.createElement('div');
      var CustomOverlay = getCustomOverlay();
      var portalInstance = /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal(children, elm);
      var CompOverlay = new CustomOverlay(elm, position, paneName);
      setCount(count + 1);
      setDiv(elm);
      map.addOverlay(CompOverlay);
      setPortal(portalInstance);
      setCustomOverlay(CompOverlay);
    }
  }, [children, count, map, paneName, portal, position]);
  var prevCount = usePrevious(count);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && div && children && count === prevCount) {
      var portalInstance = /*#__PURE__*/external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default().createPortal(children, div);
      setPortal(portalInstance);
      setCount(count + 1);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [children, customOverlay]);
  useProperties(customOverlay, props, ['ZIndex', 'Offset', 'Position', 'Visiable']);
  return {
    portal,
    setPortal,
    customOverlay,
    setCustomOverlay
  };
}

;// CONCATENATED MODULE: ../custom-overlay/esm/index.js




/* harmony default export */ const custom_overlay_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    customOverlay,
    portal
  } = useCustomOverlay(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    customOverlay
  }), [customOverlay]);

  if (portal) {
    return portal;
  }

  return null;
}));

;// CONCATENATED MODULE: ../marker/esm/markers.js
var defaultIconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAACxMAAAsTAQCanBgAAQWQSURBVHja7J0HnFXF9ccXKRokgkYSY0FdFixIrKxGUxTRNKOxRmNiil1jNCGxRTGKYIu9xI4FNWrECopCTBRR/wYVRVEUG9iQJrDLLuzu/OfszoXZ2bn3Tjkzd+7buXx+n13evvfumTlTvnfKmaq6PWurDPUVqmFUo6gepZpFtZCqmWkhe+1R9h5471ri9xBCrOTLzjQh2m9kp4f8c5qfDu136ndE+63s9Oh/J/npwH4vfkdQbD8R7I+K8qVB55JuVL+kGkf1KVUL1UKq/1INp1pX/IxJw7Az1RiqJVREU0vYZ3f20ECg2umwg0Cx00MH6yQ/Hfjfi99t7S/a7xr+d5qfiPZ79buFYvsZASuqfHD1baq3qEiGFlEdaQpYO1I9ZVDZ0gTftYODBsKJnQ462CDysyi/O+ggvPrd1P7Q6lFRfkf0fyF+N1BsPyNgRXUEl0KlaON+VA05cMXrIh3A6kl1FVUTYqVL1MS+uydCA+HFToQONqj8LKvffeenbQcRan4W5XeEB5RC/a6h2H4itp9REbCo1qTageowqnOoLqG6gekKqvOpjqMaStXHBrDoe75FVScDqaGXEDLh5VTIOkoFsAZSve6gwol6larGooHwaqdpAxFifpbV70XkpylghZyfRfrdtIMNwe+Kiu0nYvsZ1akBa0O2zunJNOBJUTPV/6gupNrWALCeln3vwdcQ8tEXhMycm3rfL6m+ntU41FLN91DpEsG9ag0aiELsNBjBCDI/o9/N/K7q/9DzM/rdzO8KivmJ2H5GdVrA2oNqPFWTBlRl6TVYJ0XVIw+w6N93lX3HsbcQMn8JIc+8kQlYoDOzFjgu9VjpEi3VWbhbtJ0aIxjB5mf0u5nfVTqIMuRn9LuZ3xUWssf8RGo/ozolYNVSTUGCKpk+pDqCqkuGbaPTpgZBp96dC1jPyRqH/lTzCqh0ieDe/RUah2gngp3R72Z25gFWzM/K9nuGYn4i2hnV6QCrF9V1bGqPeBCEWBiYYtuDWZ9VAKzFYuPQg2pagZUuEdjQI6NxiHYi2Rn9bm5nGmDF/Kx8v6co5ieinVGdDra2oZrpCax4LaU6RGLPJEvAWik2EBcHUOkSXZTRQEQ7keyMfje3MwOwYn5WuN9TFPMT0c6oTgVX+1At0wGjva8k5JixhIx4hJALnyBk9OOEnPUwIUfdScjQy41AaxQ/ZUh/H2sJWHP4xmFrqhUBVTywZStJ4xDtjHZGO6OdhdopgauYn4h2RnUquILo6CvzAGjweYQcT6Hm0dcIWbCM5F6fLyHkgZcJOfKOts8qQtZNVF2ZXWdaAtZjfAPxEFalqT/6l2TFww+0yvK7HpQ0EFZ2Npz311W2gRouu4jUH/yT4Oxc/uffk8a771htJ7UbwTfodnbwPc1LsBVkka9odkJZTOzJEuR3KPnZmoe0XCa+h3JgaB+qnWCDSl5a5Ct6foL/G2+6bnVe0t/hNdt6JAEsa787qPPW+anTlvNtq2aZfTCCRqeFq5/n7RDc7nxCzp9AyCeLifH1wQJC/voQId8aqQRZ1zHbtmTH4ZC03YQZcbBARyaNwyCqFqxOtnnW26sSZvldYNMgrnEwthMqfEt9faoDVk6aaAMEaHZCg8bnH3+B/dDxhpCfqb6fO2eVvRYdBJqdTa++rFQBIc9DyE/onNLKKdhoCFoodqaVS8R8xatHtC5n2YtR3zm4svJ7Zp1fMN+mzlvnp0pbDvZllVkFoG1nZ1SngSvYKdiYBTu/vZ2Q9+cTtGvmp4QcerMSZP2F2XiX4bquOVRfSRqIq7E62JVTp7RLEMJ3XsU1EFdj2JTaGVA4sGh0re2EhigLApPLcmTQ2s7UfKadFn9ZPoGj2AkdlEPAQs1PHk7TLigfhiMw1nZ6ACycegRwpZCXFj4nLDK5dfsJwKxS52HkzXf5VGnLwS6kMntVhI5OBVfrUn2QNR14/TO07BD8q6mZkMsmEbJNNiA1sUjwGzJY0oErmO7cI4nk3p3qc4xpDRnIIHTcYFs3Uzvh6UqEKBjNgs4fGgex07CAFys7xQ4MGiUAllV2Ch2GxTSHtZ0q+YwAWNZ2QpkUO9Q0QV4XmZ8inEJdgjyFPBTrlSEYWNsJNmblYSIeGKCuFWFnh7yEKUuan+KIpgW4oPhdrNer/E4l+t2wPmnbqdqWw/t4X8PDDORna5mV+EDFzggfnQawxqUByvbnEzJpJnF+jXsld23WXKp12LE88xThCkbkjuDPItzVunOlFSptpACpA9/V1E6+QYXf8xpkaDCKsBOeZPlLNhXEN8aWo1i7Yvg9b+QNYQ2JlZ1wf77xd7hQ18pOyL92nb4ESsSRAkPARvV7HmgrdKpO7MwDPKg7/ANXYeVTeCiRwR7vdwtble3UacvFfBRH//n6p1hmd43w0Sng6oCs9VZTZxNv1+MzciHrSmZzP6pHcuDqZapd+LQCYJ2Jtd4qARQHgHWmqZ2qFZy322JBsbGdfGOVBoLtGlu76Y0zbf2uMh2DAFhWdqrkadHlUwT8LL/y+Ww48oLm9zzQhk7aYrrdys689kcE2sL8zo0SZZVP/iHRsG1SslO3LW+33jJlnRifRoXRzDMjgFQ8XMERNe+lQcrD04n3a8zU3Om+QZz9g9kB0w9TvcDOKrySak+qNcT0AmDdZ9OoitNv4kgMUuN9r6md0MkmUxceFmcb28nvdkq7Pw9YlsBwr63f09Zp8I0yAmBZ2cl3TAg7Wp3ZqdJRJSMeq3a+mo1gofndYR2ytrPdQ5UE8hABy87vHNBk+Z2v9wZTrsp26rTl4vS7yiidwkPhvRFCKh6wfpcGM+c+ZgdKsKPvGLazDw5iVr1gndeJ92RC1j2m6QXAmm4LWMncu+oTpIGm29qpM0Vjsb7JmZ3iSJFhQ4tqpzhtlazRQQQsKztFcIE8A+gCG+En/B8hRIe1nbL6Ap0bYpgG5+WTHy20mBpE97vMFpVlA17sVKwr/FSb4YOCkp06bTlvUxY48W2rwvKL6RFCKhqu1qB6WwYxe1xGy1djOgTB4cqgtKuugX7Hxau/7/xxenC2sI6QXS7KXPBeYwpY82w7Wd0hesOFms7OzeIbXMu1Oqh2JnGHWkNMcOsiLHc7otgp7n5K1ocgA5aVnUpPL/ahL6zs5EcJkjAMaVOuilvevdejdlODsGPMHlqt7BTX/kB+JrDK1yOw1RJcrexUHsGi9d8SCJXs1GnLVQFLsz/4PIJIRQPWnmmjRONfT2+jYVQK3nPQNenvAaBqB2wX641iwXXnC5mjWBeaAtZy7AbXAWDVubBTNgpjsasI3U7ZtnjLtS0odoqjafw2bGTAMrZT7GTzLktbUewE3+Zt2bcI0+CsHvHTxEhTsdZ2ti7WzshLBLiytpPPt6xRP75OGa69NLYzrS1vN2KZswNXoz+oiyBS0YA1RgYvP72WluuMeAz3c2uknnlDPjXI/z0BMtCEl9X7gMYmQna/NBWwPpKtsVIBrKYSANYKF3aKcGW5owjdzsyRDDvIsrIza/s4MmAZ28k/9SdP/kmHCnkHvm83mmE3cmlspwwEW6dpWCgR2XZ9iw0O6PVInAJCmnK1sjMvyChfJoqsRyq7CHmQsfC9sZ0qgJUH1Rr9wYoIIhULV12pFsng5V85EATTf8l7/3JX+78BUCV/u3LC6vfzkAWfgSNtVK4bn80cxdrNBLAWlQCwFmLbKXbASJ0Dqp3JgvckroxsSs63nSKUio0rMmAZ25nEj8qKcSWGl7AYvbSyUyXYrZjvhnmLXo/4HZAWscRQ7RRHV5N4cjJYtVyDZZ2f4kMUP50pe8AyBCxjOz0D1sIIIxULWDvKoGWHUYQsbcgHH4Cn5DPJWiwZXKV9JplivPXfbbBVl3LPT7/MDNtwjglgvVcCwJqNaads5xvSIuLZLvIzbd2TBRAY2SnuKpI19siA5TQ/EQHB2E6dWEEIU3Go+SkGmkQ448/aTh5E0+q1WI4tyql1fqqc3qAazsGFnWltOf+AmrepQaM/mB1hpGIBa7gMWmD3nso17d02YErgiIcnWG8Ff4e/ieJHsvj312VA3WHpR+lMNAGsqSUArOcw7JRNHbSOGOB1DM+5yM9UIDDfrWVkpyzvsqJ4J3+3ABfn+am5jRzdTp3Fwghx0FDzEykIJqqdqqE52q1/Krh8pkVOT84h5GHGEKyN7fS8yP25CCMVC1jSM/1ue15vITosXOehid85mCYYtYJ1XMl7Zeu4+OvySemR3U0A65YSANYttnbKAmIirGVCtxOzQ8a20+QsuiLsLEt+imuY8u6PYCtqfvIwYxk2BM1O5dAHOGCNmp/QFiVLAviRN81gnah2KgFWBlzzo4UK6xxviTBSsYD1ogxaXvpAry+BkadkxyCMYgEswRorEPwfpgGT6cDkdR6o8uAKrolvZAJbL13AOroEgHWUjZ0yuEKI1YNqZ2sMKWajatBBi47ByM4CAAsnPzM6Wp3dUK7KJx/iwHGsqaMw67uj6UErO1UBq8h6xENKEgg5a7qf34xhuJTB2M6stjwvoKtBcOSjIoxULGB9LAOWL5am9xvJFF8CSqAkvlVaTCx4D3wvjFiZXrM+zwSsrXQBa2AJAKvaxk4RrixDMTixkx8NUN2ybbEl3sjOJC5XlsRgqOLTeGj5yXdeFuUC7ByAsSZQtaM1tLUaq747PucRx+8ZwIwUWsIqP9ud5ZcCefxIm0U+G9uZ1ZbzbVFaeWz3nvzRt+oIIxULWHUyYMm6ALBk033JSBSEYEhbc5Ws1+IF0KWymxCCjmYA1hBdwALNCBiwXkuMNbETOc5VoXaKJ9QbjhpY2Yk1guA7P2Wjgnwna3HIt3V+toMVCHwqyTfRVoOpbVS/6yxyDq0eIe3IfI21ncb5KS62F20VN7UYgqBVfma15XkbCjQPKH8tgkhFA1YHWNn5wmzQgVEqgCJQMvWXjEwlI1W6UhnZaliZ+R27mwDW8IABazjXQGjbmXYyfNZl2JBZ2Sndsk1hRRaB2nI6y9pOT4CFnp8wugF52RryQshPi2juvJ1/xljPlGdrUeXTcXBRd/UoI/SBRZiG4RxgDceoLwmstvpdjH1mfnqDVX5mteWtu0jFdonZ3yFd+e3V8AgiFQ1Y9SKs1F6g3ieLU3/wf1i0zk8fJq+Ja7BAyciWCmAtX5EJWN8xAaw+VEsDBCywqQ/XQGjZKT4hOgQsKzvbbdlWAEKLEQMUOz0AFoqd4ggAMlCj5qdqcExD36P7HTkcB249kqy5lK4NNIeWpcw26/ZTpYxCm2A4zW6dn3lteV7EfMV8bmdnVEUC1mLdKUKVtVWwq5Cf9hPfB39TWdjOXwuWZQLWDiaABRodIGCNFg3WsVP3uBSLDtfKTtmWbVmjJR7E6js/PXa86PmZ1vBbnkOInp/iuZNIvke30xFgofq9deRXVo/oa5ajbqO5dtO6/YQHK3EEc1WQVFp2LXY6W+enSlveen6m7FgvFuRVwf7REUIqHrDekwHLZ1/aAVbyOvyEHYb8+/g1XLJApKlrvz7NBKwBpoDVi2quyy3xmgJbekkaiE5jJ794HGGXVszPEuUnv6HAMghup/c7Yl6uslMCWNZ28mEaEKDVu98N7ZfaGVVxgDVVBiwvvGcOWPwZhOLarOT/fEBSVch6fEYmYK1tCligAwNqcA9MMzraiWdn9Lu5nZB3sXx2Tr+nKOYnop1RFQVYt8qA5aYpZoCVdkyODMR4yBLPMpRdF09Mhas5JoFGRV0TQKW7Ks/waCeOndHvZnYm+RbLZ+f0e4ZifiLaGVUxgHWKDFqOHqsPWDxcweJ1uJLdhskid3EqMYEslfVYB96QCljjMQCrB9XzBVY6uHcPhQYi2olgZ/S7mZ0KgBXzs4L9nqGYn4h2RlUMYO0kg5ZtR7bFndIBLAjfAMAEcJWcKSiGbZjQcUmj9DXx+nBB5vTgGRiABdqYak4BlQ7uuaGq8UXbmdXBhmRnjm3R7wZ+zwOs0P0u+D/6XdPvOYr5idh+RlUEYHWjWiADl7Ev5h+Pwx+BA3AFhzvLor5DpHfdXYP8dcVkvCCjWYAFGky12GOlg3sN1k1AUXaqdLAh2KnYwUa/a/pd1f+h52f0u5nfFRTzE7H9jKoIyLpdBi57X0lIU7MceCAMQwJXomA6EGALRrVkUd3htWTqECLA87GypCDXSMhu6YdHv0/VBROwQEOp6j1Uujq4l4nTirBTp4MVbA0uP8vq9yLyU5ZXZfV7iv+952dZ/a6o2H4itp9RpQesvdJGh/71shyukjVV8BNGpmDkCqBqj4vNIrmDkvMMxeuGZzI/d6FJmlUaiX2pmhxWOvjufS06Wa92mnSwgr1B5WdZ/e47P9Pyqax+z/C/1/wsq981FNtPxPYzqtSA1YXqDRnAwMjRovqOU4PJ2irxDEH4GwBXshZLFa7g+2RTiB8vJmTH0amfW0nVzxVggY6lanFQ6eA7j7LsYL3ZadPBCjYHk59F+h2jgS3K74YjmMHVo6L8jtHBFul3TcX2E7H9jCo1ZB2dBj9/uFc+smSzpkrlam4h5Ne3ZYLZP03Tq9NInO6g4p2O1ME6txOjgxXsDiI/i/I7VgNblN8tRjCDqkdF+R3R/4X43UCx/YyAFQHrXNKd6t00mFGNi4V5XfpUJlytoNrSB2CBrkOsdNchd7BO7XTRQGDbidzBeslPZP9787vlCGbhflf0v/P8RPK/d78bKrafEbAiZJ1L9ksDmm2oHpnuD65gB2POtOLfbdKq20B0pXoModI9xr7LVQOBbqcjwEK10yFgOctPZP9787slYBXud0X/O89PJP9797uhYvsZASuqDbLuT4OawecRct8093B147NtQJcBV3Oo1vEJWKDeVLMsKt0s9h1VDhsIdDtdNRBYdjrqYJ3npwP/e/E7whRxoX7X8L/T/ES036vfLRTbzwhYEbDOJb2pZmeNHo2aQEhjEz5YQTiG08bljlw1Ue1hm07TRmJ7qkaDSgef2dZxB+vETscdhJWdjjtYp/npyP/O/Y40gmltpwfAcpqfyPZ787ulYvsZAStC1rlkB6qGLNDZ/3pCXvkID66mzibkR1cr7Tg8FSONNo3EaQYV71RPHSy6nR46CCM7PXWwzvLTof1O/Y5ov5WdHv3vJD8d2O/F7wiK7WcErAhZ55Kj8mAHpgxPvo+QNz4xB6tpHxJy3F3K4RzGmgQVxQasblSva1S619hnfDcQKHZ66CCM7CwAsFDz06H9Tv2OaL+VnR797yQ/Hdjvxe8Iiu1nBKyoNsi6QDWO1cE3EnLrc22wBeEVskIvTJ9LyPXPELLPtVqBSCdToZ2RadtIfE+j4n3XcweLaqenDkLbzgIACzU/HdvvzO/I9hvb6dn/6PnpyH7nfkdSbD8jYETAagtAOlY3IvsOowg54Pq2kak/3d+mY+nvP/sHIdufbxTl/S1YG4aZNoxGYoLibpKqAhsIazs92q9lZ0GAhZafHux34ncH9hvZWYD/UfPTof1O/Y6o2H5GRcg6l/Rgo0ekIH1MVYOdLowGolah4u0UQANhZadH+7XsLBCwUPLTg/1O/O7AfiM7C/A/an46tN+p3xEV28+ozgxWvGBn4UsFwNViqsEu0ofVSEzNqHTPFdzBotjp2X5lOwsELJT89GQ/ut8d2a9tZ0H+R8tPx/Y78zuyYvsZFQGrTX2p3vEIV/VUQ12lD6uBOCKj4h0eUANhbKdn+5XtLBiwrPPTk/3ofndkv7adBfkfLT8d2+/M78iK7WdUBKzVqmFTdq7hCmJd7esyfVgNRC+qekmlq6NaO6AGwthOz/Yr21kwYFnnpyf70f3uyH5tOwvyP1p+Orbfmd+RFdvPqAhY7TWYTd25BKzjXacPs5F4QFLxHgikg7W2swD7lewsGLCs89Oj/ah+d2i/lp0F+h8lPz3Y78TvDhTbz6gIWO01lKrREVxBaIiqMgHWsZKKd2yADYSRnQXYr2RnAIBllZ8e7Uf1u0P7tews0P8o+enBfid+d6DYfkZFwOqoIxzA1VgWGqJUgLWFpOJtEWADYWRnAfYr2RkAYFnlp0f7Uf3u0H4tOwv0P0p+erDfid8dKLafURGw5LoCEa6mUfVMvrtMgAX6kqt0i1U+A1cBHYS2nZgNBH/Z2im7PAOWVX567iDQ/G5iv+yytdPU70j+t85Pq8arqqowvztSbD+jImB1FMTImooUjmEz/rvLBlj8Nt5nA24gtO0sCLBy7QwEsIzzs8Bt5s8GDFjKdhYMWNb56Qmw0P3uIVxDbD+jImCt1gCqZZaA9Rvxe4MFLHr1oOpN9Q2qTag2n/O9HVYtgPzwuzs8QF/rT7UZ1UZU61P1ourqs4HAstM1YNnY6ROwsPPTFWC59jsWYNna6QuwXOUnNmD58rutYvsZAStKC7BAx1nA1QOy7wwOsFhlg8o0UNRbu213Q1Lx6O//kL2HagDVhlRruWwgsO10BViYdroELFf5iQ1YvvyOAFiF+l2jg3Wan1iA5dvvFmAV288IWFFmgAUL0583gKulVBsFDVj06kK1cUplatXztduckVQ8+D3rvUy9sRsIV3Y6AKwg8rMov2MDlm+/WwBWUPWoKL9jAVZRfjcAq9h+RsCKsgMs0E5UzZqAdXra94UEWGvlVaRBvXoOfuc7290Kgt8VKt6mDhoIJ3Y6AKwg8rMovzsALK9+twCsoOpRUX5HBKxC/G4AWLH9jIAVZQ9YoLs04Gou1VplAKzcJxtNwRDyOkU8gZnYWcQIlo/8LMrvRYxgYfrd5QiWz3pUlN99jmC58LuLEazYfkZFwFLSVhqjWCdmfZdzwCIj8yVZO7KpZYWDufk1bdaOrJJPO2X5g7MGq7j8LNLvI6vsC3FRfjfwf5D1qCi/j7T3f6F+11BsP3Hbz6hOD1ig+xTgah7VmmUDrNTdT2w3yQBWwWpc7HrTaCDw7XQDWK3XDftV9X7lhKr93vxD1RVvnVw16e2Tq96fdUrVYqpm+jto8cw/VL0/46Sqya+eWHXVM0dVHXjMTq222uWnpt9R7XQDWH78bg9YYdSjIuq7G8Dy63dzwIrtZwSsKHvA2kMBsEbnfU+wgEVf/wrVMKpRVI9SzaJaSNXMtJC99ih7D7x3Ldu4TToNBKaNrgCLfsfOVGOollARTS1hn93ZNWA5sdMhYKGWT4eAVXg9KqK+OwQsb363ACz0dqmTtZ9REbDYjsKZGXAFU4iblgKwBKF0tGgVzIeNSB2sYPeOVE8Z2Jcm+K4dkPKPlxs73fnfn+/t/I9jp5v64y8/8ez36/eRAbSdnbn9jOrsgAU6JwOwpqh8R0iAFQYQZDcQbmEAo4EYWdWT6iqqJkQ7EzWx7+6J0MGGZWe+/f59b+b/sOpRUWCNBwjF+H1kAG0nPmCF335GRcBarUEZgHVKWQAr7I7Wp422DcTIqoFUrzuwUdSrVDUWHWx4dhYNrLYdRKj1qKj6bj8CWKzfR1ZA21m29jMqAlZHvZsCWNVlAKzwO1rfNpp3sLVU8z3YmWh+6z31O9gw7QzR96r+D7keFVnfRxqvGyve7yMroO0sU/sZFQFLrhskcPWR6ueLBKzwO9qibNTvYGE9wlKPdiZamrtOp+PaizDtDNH3Kv4PvR6VDaxD8fvIkredZWo/oyJgpetXEsAaGzpghd/RFm2jegfbn2peAXYmmtdqQ34HG7adIfo+z//lqEflAeuQ/D6yxG1nmdrPqAhY2RosAaw/hQxY4Xe0odiY38H2oJpWoJ2JprXakt7Bhm9niL7P8n9ZgDXaaeb3kSVtO8vUfkZFwMpXd6oVAmDtpfp51JAnCoBVBiAoEwxcHICdiS7KAKzw7QzR92kdRFnKaLTT3O8jS9h2lq39jIqA1RGIurFAtutS9aXaYOsRK97mAWuDH162E339m+zv8L6vUnUPAbDKAARlgYGtqVYEZCvYslVp7QzR9+mAVZYyGu009fvIEradZfJ5VASsNgDqyk4S2JCdGNDhWKatzlwyhQOslu69+22dcnxTDTttoA98r2/ACr+jLRcMPGT13WMOIuQ/1xHy/J1tuudYDHsfRLdT1KU1bbaC4Hc8OyOwRjvDsXNkydrOsrWfUZ0asNhI1QbckUyp2vK0Lx5MAGvrc5rma5yV+U12Hy+AhdfRXvf91WCACQS2NkKnn9gFeuh0GwjIgoFBVC3GeTd3BpFeDXVtNpvb2tJqG4adafri/dX2mkNhezttfA/5mQBflgBoQwFWKJPg56ScAmib2YdrJ9igkpfm+Yqfn+D/Jy5YnZfwO7xmW+dHIred+A9U9nmp047zbateeX0wgkYELAGuerLRJqWDxWtOfP1vCWBtecaiyZqHktewKUengIXb0fKAYPddqztaGxuhwgOcpF0vP2QDWjIYuNq4M8iyM7nswPUqazvTBPnIX3adxFUoIDj7BaJ0QZkNAVjBt2llAGw0Ay0cO9PAHy9f8fIT6nOWvRh1HqPtzHqgWjLP5oHKPi9V2nGwL6u85sNsx/YzqtMCFr26pE0FpqnHejWDak566+KBw+fctN7Ov99NE7ASyFrDJWDhdbRvTmpfyey/8yorGBDtSbtg5MW8weVhoDvV59ZgCo0WdAIAKfDUzY8MwWX+FA62dbOyM62hFS87wGqz0xYEoZNyB1i4wCr6OG0U08z39na6BywcO6Eeq+Sluc8Ji05u53OAZZUHKqj/vsumSjsOduGU16sibETAYoC1hsq0oAN1cwVYOB0tNGoymLHvvMG2rxjZKHb60OjCaFYCLWKHYT4yxMPArsaNLX/JRir4TsNuFGtXYzt1Rt7spzl2tSqfUCbFDjVNALNFAqs4+gd1Ccov5KFYr8zAwN5OsDErDxPxZQHqWxF2inkJ+Qj5KY5omsOLebuUBtSJz0Giz83qkn5eqrbj8D7ez/AgA3kJdsryX7X9jOq04q51PcPV+i6nCO07WqhUaSMFOJ34sdbTQ/B7XmMMDYYNDLQB1pnGU0N5tvJPjHZP32ca26kzWmAPWGdalU+4P98BuFusawesAKj8JYMScbTAbBQLF6zzHmryO1Y3duYBHl/XoOz6bpdkD38y0ON9bm6nel7qtONiHoqj/3zdUyuvu0bIiIDFXWtTbe4YrKpZCAeni9ztOlpxFEgcycBpuJ80+pxqBedtNl9MfCYDrPusF+OmgQnf4KZBmJruNbYzbyqBz0t7wLrXqnyqQCuO7ICVh/wscOZB1mzkBQ+s80YyoaM2n3K3szOv/RGB1ne7JNabrLLJPySatU1qeanbjvNlMW2dGJ/G/JHMMyNkRMCSXL3YbsL+SFDVn4V86MXWezkP02DX0YpTcOJUF07j/ZFxB5tMW7jf+XYvA6zpTjovcaRIf+qF13QUO8VRlWQKCQ+wpluVT75zst/R6g5YVTqrZNQj2f1qNoKFB9bu6pG9nfwlgzw8wPoI5cE0y+d8HTOr82p5qdOOi1PvKqN0+SPu90bIiICVc61JtQ6b0gNI2oSNcvXndh3WsP/D6FQ/9r6+LJbWmnk3cAFY060BK5l/V32C1Ndyp0/dOIvHpzPAwjuCItkWDw0rP3RvtyA/WfMwz9o2/ik3mcLABazPrcqnCC6QjwBdYCP8hP/bh+mwB1ZZfYH8xQvTgAvWeaOF5lODOHbyfpfZorJ0wHW7pFpP+Kk2s4cEtbzUacd5m7LAiW9b85dfTI+QEQGr6CtnQX43ql9SjaP6FIKaUi2k+i/VcKp1ZYA1z3oUQ3eIXl/NzgCLb2zt1ul8zgALDwZlu7bspl4S1VnZKY6m8TuFcAGrzqp8qlz2scXsgJUfKUjCMKStaVPb9u4WrPOmBuGnffm0s1Nc/wP5mcAq/6ACttqBa7PzESyAazsYVMtLnXZcFbD0+oLPI2REBbzb8dtUb0kOlua1iOpIEbDwR4fwAcuNxCku8x1FbTDQBlhNTqZcxI7WrhNbYWVn1g4nXMBaYVw+xU4277KztQ7FTuj887btm4dpsAdrlfKAMxVrbyfka1Ze2sMVXp5ljfjx9clsY4t5Xqa14/xoZd7uW/W+oC525DFMg28p2rgfVUMOXPG6iAespk4JWCJc2e0maoOBNsBahDrtkkTEhoZMNiVnpoXGdor5JnaouIC10Lh88k/+ydN/0qECnEI6+NEMu9FLc2CVgSDYkoQTkW3ZN99BugK9vovTQDhTrnZ25gUZ5csEjr1udhHyIGPud/O8VAGsPKBW7wtWROCIgKWoNal2oDqM6hyqS6huYLqC6nyq46iGUvWxASz6nm9R1WnAVaKjEsBaVALAwj3ORex8cTqGhQyw3nPWKIvrnsxH3GYb2SneX9bg4wLWbOPymcSPyopxJcbvMs/PhVZ2qgS8FcHWLG8Xotd3fgekeSwxXDvF6eskYK8MVu3WYLWgjlDzU5my0WszwDLPS7+AtTACRwSsDG3I1jk9qQk8zVT/o7qQalsDwHpa/M5jbyHkoy/aivT8JYRc9bj0vl9Sfd0NEOAD1kpnkebxpgpmM8Ca6vTJl+/QzBcTP2dkpzgqAJ1AVpDJ5O/mHe9zToEVDxBmG9upEy/IfipuNmp+isEm7c/4s7eTB9G0ui3ukDN/EFhpPfqXNyWsGs7BRV6mteP8A2peG6TeF8yOwBEBS6I9qMZTNRmMIsn0GqyTouqRB1j077vKvgOgaszTbb+fejchdQ2EHHyN9F5nugECfMBagtIZyAABr1N4jgHWLU6BQGeBabpuMbLT5KgUezunepuqMbfzOWM7dfxpH2j2OdT8xAmEiWunamgOHlzMwRqnXZJFTk/OIeRhxgyqzfPS7yL35yJwRMDiVEs1BQmqZPqQ6giqLhm2jZZ9Vhyxmjm3DbQk733ODRDgA9bb6NHG7ReKd4SBNsA62ngkJbFRNS6OORAcZWSnf8A6qqKBVVzDlHd/e1tvQc1PHmbs4rLh2ak6RY0D1m+jjgYm6y35UTe9YJ24eakCWFlgzY8U5q9xvCUCRwQsql5U17GpPeJBEGJhYIptD+Z9HqYLYQRr6CXSvy82BwK/gHU7KlzZx+mRw0AbYA207qxUdxWZ79iqNrIzicuVJTEYqthh6NtpD6xZHa3OjihsYBVPEsiLFWQfa+oo1PruZnrQzk5VwMJ5ULndCuyTQMhZa//4jRhm9cg8L7Pa8bxgrvonTxwVgaPTw9Y2VDM9gRWvpVSHSOyZlPU5gCpYizVqXOp7VpoDgV/A2hNtIaldKIZsGFh9cv0MJyEjxENUzTq116zsxOrgVO10Dax8B2ZeNgAEB6CsC1TtbM1srUar727PeaxG8XsWMOOEljBvl3hYTgM8fpTNPI/N8zKrHefreVpZ5N+TP/pWHSGjU8PVPlTLdMBo7ysJOWYsISMeIeTCJwgZ/TghZz1MyFG0ag293Ai0RvFThvT3sXkjVykL3BPNgQ4Mv6PFBazXnEILjl5rV2BGVg1HgUFooGQBEu1GW4Zb2+kHsIajAqts2pXvZM0P+rYHVh5WwA5Zvom26k9v44K1zkJnn3aq1HmcHZmvWbWd4kJ70U5xx64ZBNrlZVY7nreZQO9w8tciZHRquILo6CvzAGjweYQcfzchj9LSsmBZ/sqUz5cQ8sDLhBx5R9tnFSHrJqquzK4z0+AKFrrDz5zveiwBrOEBA9ZwYxhIOxk+6zJryIYLgNWHaqnRehwVm807tKWtttna6R6wRDtxgBVGN8C/AKdiPptHc+dB8M8o65nybLUtoxj1HT+4KJ6dOuEPzMM0DLduO8U1jZCnYKO46N38aCy7vMxqx8EesVwm9ovpyn8YHB5Bo9PC1c/zdghudz4h508g5JPFxPj6YAEhf6XF8FsjlSDrOmbbluw4nHbTgjByNe1dQu6fulopuwiPTAALt6PFA6zVHa2ujeITojvAag8Dqxu00Va7imTbt8WzwvQ1Gs1Ot4A1GgVYxVEAXKjGBVbV4JhmcI0P1rjxznDtlK27lF3m4LKU2WaXlyrlE+q82dor+7zMa8fzouWr5bG8/YzqDHAFOwUbs2Dnt7cT8v58gnbN/JSQQ29Wgqy/MBvv4l8HkOLBKgOw5lB9JQEs3I4WD7BGG8OA7lEp5p3taGkBGlnVi2qu9TqXRPaLiOe22uTCTlyl2WkHrGmNv905hPjAKh7sjQPX+Ha6AazRqH6HuiwDAHjNbtRtNNdu2uUl1Gtx9DKxEcqt+U5n+7xUaccB/mQPBkmA13z7R0fY6JRwtS7VB1nTgdc/Q0gLwb+amgm5jFatbbIBq4lFgt+QwZLOWi6Y7twjieSeKPyOtiwwsNreAwOy9cAUG8tiZ+cCVn7Hpl0g3LKDtb2deHm52s6RyG0nH6bBHlj9+9zM/uz2M6qSAWtcGqBsfz4hk2YS59e4V3LXZs2lWocdyzNPEa5gRO4Iwp1FyKsMHW34Nra395oA7Lwqw75EYdsZou8h38pcRqOd5n4fWcK2s4ztZ1QlwtUBWeutps4m3q7HZ+RC1pXM5n5Uj+TA1ctUu/BplTUUZehow7AxrYNtb2sPqucLtPP5VhvyAStsO0P0fZb/y1CPop3mfh9Z0razbO1nVKXBFRxR814apDw8nXi/xkzNne4bxNk/mB0w/TDVC+yswiup9qRaQ0yvrJEIv6MNxUbVBmJk1cZUcwqwE+65YY5tvMK1M0TfZwNWWYA12mni95ElbTvL2H5GVRJg/S4NZs59zA6UJrxMyDG3tP1MDmNWuWCd14n3ZELWPabpTWsoytDRFmtjXgfb0d7BVIs92rm49Z75dokK084QfZ/n/3LUo3LYGZrfR5a47Sxj+xlVCXC1BtXbMojZ4zJC6hrTIQjiToHSLgidsMfFq7/v/HF6cLawjpBdLspc8F6DCVhl6WiLsVG1g+1o71Cqeg921rXeS72DFRWenSH6Xm2KOOx6VKb6HpLfR5a87Sxj+xlVdsDaM22UaPzr6fBzDAvoedA16e85XziuBmBLZxQLrjtfyBzFuhAbsMrS0fq1UbeD7WjvvlRNDu1sar2HfgcrKiw7Q/S9+hRxuPWoyPpu2sGG4PeRFdB2lrH9jCozYI2RwctPryWkOSMew/3cGqln3pBPDfJ/P4aLsA5/U70amwjZ/dJUwPpItsbKFrDC72h92mjawXa0+ViqFgd2wnceZdHBinJrJ0YDW6Tv9aaIw6xHRdV32w62aL+PrIC2s6ztZ1QZ4aor1SIZvPwrB4Jg+i9571/uav83AKrkb1dOWP1+HrLgMzPnqkHWjc9mjmLt5gKwwgKC9A7CPQxgNhAjq053YOvpCB2sKDd2YjWwRfpef4o4vHpUFFhj+L9Iv4+sgLazzO1nVNkAa0cZtOwwipClDfngA/CUfCZZiyWDq7TPJFOMt/67DbbqUu756ZeZYRvOcQVY4QBBdgfhFgawG4iRVdch2nkdYgcrCtdOzAa2SN+bTRGHVY+KAms8/xfj95EBtJ249ad87WdUmQBruAxaYPeeygVn/wEwJXDEwxOst4K/w99EHSM5kBneX5cBdYelH6Uz0SVguelocRsItzCAD1hdqR5DsPOx1u9yB1i4droBLP++N58iLh6s1fzvPj9x/O/f7yMDaDs7e/sZVSbAuksGLbc9r7cQHRau89DE7xxME4xawTqu5L2ydVz8dfmk9MjurgELv6PFbyDcwYCbDqI31SwLO2e1foebDpYXjp1uOthifG8OWMWDtZr/3ecnjv/9+31kAG1nbD+jygNYL8qg5aUP9AALRp6SHYMwigWwBGusQPD/g65ZPR2YvM4DVR5cwTXxjUxg6+USsPA7WvwGwh0MuOsgtqdqNLATPrOtww5WlJ2d7vKvGN/brcErFqzV/e82P/Hs9+v3kQG0nbH9jCoPYH0sA5YvlqaDTjLFl4ASKIlvlRYTC94D3wsjVqbXrM8zAWsr14CF29G66yDwYcBtB3Gaga2neuhgRZnZ6T7//PveforY3k4//neXn7j2+/P7yADazth+RpUHsOpkwJJ1AWDJpvuSkSgIwZC25ipZr8ULoEtlNyEEHc0ArCE+AAuvo3XbQeDCgNsOohvV6xp2vtb6Gf+AZWanX8Dy43sc++3s9Od/N/mJb78fv48MoO2M7WdUeQCrA6zsfGE26MAoFUARKJn6S0amkpEqXamMbDWszPyO3X0BFk5H67aBwIUB9w3c9zRs/a7nDtbOTv+A5d73OPbb2enP/27yE99+P34fGUDbGdvPqPIAVr0IK7UXqE/biVN/8H9YtM5PHyaviWuwQMnIlgpgLV+RCVjf8QVYOB2t+w4CDwb82D9BcQFpVYGApW+nf8By73s8+83t9Ot//Px0Y797v48MoO2M7WdUeQBrse4UocraKthVyE/7ie+Dv6ksbOevBcsyAWsHn4Bl39H66SBwYMCP/bUKtu4UAGDp2Vmc/935Htd+Mzv9+x83P93Z79bvIwNoO2P7GVUewHpPBiyffWkHWMnr8BN2GPLv49dwyQKRpq79+jQTsAb4Biy7jtZPA4EDA/7sn5ph53MFd7Bmdhbnf3e+x7XfzE7//sfNT3f2u/X7yADazth+RpUHsKbKgOWF98wBiz+DUFyblfyfD0iqClmPz8gErLV9A5ZdR+uvg7CHAX/2H5Fh6+EBAZa6ncX6343v8e3Xt7MY/+Plp1v73fl9ZABtZ2w/o8oDWLfKgOWmKWaAlXZMjgzEeMgSzzKUXRdPTIWrOa4DjeJ3tP4aCHsY8Gd/r5QT7uFE+rUDAix1O4v1vxvf49uvb2cx/sfLT7f2u/P7yADazth+RpUHsE6RQcvRY/UBi4crWLwOV7LbMFnkLk4lJpClsh7rwBtSAWt8UYBl3tH6ayDsYcCv/Q9IbH0gkA5W385i/e/G9/j269tZjP/x8tOt/e78PjKAtjO2n1HlAaydZNCy7ci2uFM6gAXhGwCYAK6SMwXFsA0wfShestfE68MFmdODZxQFWOYdrd8Owg4G/Np/rMTWYwMELDU7i/c/vu/d2K9nZ3H+x8lP9/a78fvIANrO2H5GlQewulEtkIHL2Bfzj8fhj8ABuILDnWVR3yHSu+6uQf66YjJekFFswDLraP02EHYw4Nf+LSS2bhEgYKnZWbz/8X3vxn49O4vzP05+urffjd9HBtB2xvYzqlyQdbsMXPa+kpCmZjnwQBiGBK5EwXQgwBaMasmiusNrydQhRIDnY2VJQa6RkN3SD49+n6pLkYBl1tH6bSDsYADJfv7K+f4vOTsXy94juzwDlpKdAfgf3/du7NezszjAwslP9/a78fvIANrOTtp+RpUWsPZKGx3618tyuErWVMFPGJmCkSuAqj0uNovkDkrOMxSvG57J/NyFRn09ckOh3dFqA4F9B2EOA/4Bi9+582zAgJVrZyAdBK7vNe2X+srSTmO/4/jfPj8tfK9Qf9z5fWTxbWdBgF14+xlVWsDqQvWGDGBg5GhRfcepwWRtlXiGIPwNgCtZi6UKV/B9sinEjxcTsuPo1M+tpOoXAmBpd7QFAJY5DDgELHr1oOpN9Q2qTag2n3/G6jUP806veoC+1p9qM6qNqNan6kXV1Sdg2dgZQAeB63t3gKVsZ8GAZZ+ffgAL3+8ji287CwKswtvPqFJD1tFp8POHe+UjSzZrqlSu5hZCfn1bJpj907iNMq0YWB2tS8BChwEHgMXsg/sPFPXhn6tuSGylv/9D9h6qAVQbUq3lErAw7fTRQXjxPQJg2drpC7Cc5ScyYHnz+8ji207XgBVq+xlVasDqTvVuGsyoxsXCvC59KhOuVlBt6Q2wsDtaF4DlDAZwAasL1cYp92/VKydUnZHYCr9nvZepNzZgubLTVQfh1fd2gFUsWKv7321+IgGWd7+PLL7tdAVYobefUaWHrP3SgGYbqkem+4Mr2MGYM634d6s2SqNxCAMIMhoI5zCAC1hr5d178DeqBs/9S9WtIPhdwdZNHQCWEzuxO4hCfG8GWGHVo6LAGgmwCvP7yOLbTmzAKkv7GVURkHV/GtQMPo+Q+6a5h6sbn20Dugy4mkO1ji/ACgMIshsItzDgeQRLU/DUuE4RI1gmdjoALP++NwOssOpRUWCNB1jF+H1k8W2nA8AqRfsZVRGA1Ztqdtbo0agJhDQ24YMVhGM4bVzuyFUT1R626UR9CvMCBJZPYFYw4G4N1qaWNsJw/JpWU0VltbNI3zsawfJaj4oCa48jWE78PrL4trOIEawQ2s+oioGsHagaskBn/+sJeeUjPLiaOpuQH12ttOPwVJQ+lH5RrkLuaH3ZmJY3COCSutiZLSAdwGyqcbGLUMPv6Haa5p9of1G+17U/xHpURH23rT++8lOlbSxz21nW9jOqoiDrqDzYgSnDk+8j5I1PzMFq2oeEHHeXcjiHsSZBRbEAq/Xa8Kc39O5//Cv71fz+zStqTnpr0oA/vP3+gD/MWkzVTH8HLa45aeb7NSfOmNz/+Fev2vx3zxy47k7HrG8dVkCtgXACA44BC+1yDFholyPA8uZ7S8AqFKw1AMtpfiIClle/GwJWED4ve/sZVXGQdYFqHKuDbyTk1ufaYAvCK2SFXpg+l5DrnyFkn2u1ApFOpuqBNguk20jQ/+9MNYZqiUEU1SXsszt7Aiz421eohlGNonqUahbVQqpmpoXstUfZe+C9a/lqILjvMrIT8f6qMrLTZf659LtrwMK00yVgucpPbMDy5XdLwEKz0yVg+cjLCBhRLADpWF2e2GEUIQdc3zYy9af723Qs/f1n/yBk+/ONory/BWvDMNOm01jsSPWUaXh6ieC7dnAICCggmJcvCPaj2OkBsJzkpwP/e/G7rf1F+13D/07zE9F+r363EKqdjvzvLS8jYESxctiDjR6RgvQxVQ12ulQahJ5UV7FV9diJamLf3ROxgXACgg462CCAtSiwdtBBePW7qf2hPagU5XdE/xfidwOV4QHVe15GuOj0YMULdha+VABcLaYa7CJ9eY3CQKrXPSTwVVN69A2CCB1sUMBaVrD2nZ+2HUSo+VmU3xEeUAr1u4bK8IBaWF5GyIiAJagv1Tse4aqeaqir9GU1DLVU8z0mFO5Va+ggryBo2kCECKxlBesi8tO0gwg5P4v0u2kHG4LfFVWGB9RC8zJCRgQsiWrYlJ3rMgnwv6/L9GXNwS8tYKhuqe66kqJA0GAEI0hgLTFYF+p3Vf+Hnp/R72Z+V1Dw+RlCXkbIiICVosFs6s5leTzedfpkCetPNa/AxWZw7/4aC4ULA0GNEYxggbWMYB2C31U6iDLkZ/S7md8VFrKH7vcg8jJCRgSsDA2lanRUDi/wUf7EBMFK/mkFwlWiaXmxKMoCgqHbWTawDsXOvA4i5mdl+z1DwednSHkZISMCVo6OcFD+xrLQEN4B6+IA4CrRRTlbOoMHwTLYWSawDs3OtAoa87Py/Z6iMtT30jxER0XAYroCudz19DWCyidia6oVAQEW2LJVilPKAoLB21kysA7KzgzAivlZ4X5PURnqeyl8HhUBS3hwmYoUjmEzn2sA+UQ8hFVxDr6GkPuntsnyux6UOKQUIBjtjHZGOyvXTkknEHx+lukhOioClqABVMssy9tvfO9iTW40iKoFq+LMnLv6TCDL7wKbBgkOsQLBU+9eDX+gUeMIGXqJExC0svPYWwgZ8/RqO8FuBN+g2ykK8hJsBVnkK5qdAPuJPVmC/A4lPyHfoFwmvodyYGgfqp1gg0peWuQren6C/696fHVewu/wmm09knQA1n53UOcftMlLnQdlvl3VLK8PRtCIgKWo4yzqwgNFxGFLbnQ1Vgf7zBvtD11E+M6rOGcYgyBU+rqG9MMhJ7xsBQTtQNDGTmjUeEDlL7AfOl4sYMUGa9BHX6y216KDQLNz2rtqp61DnoeQn9BBpZVTsNEQtFDsTCuXiPmKlp9Ql7PsxajvXENt5fesOj9/iVWdX5WfJjaqPCiDbVnlVQFmOzxER0XAShEsTH/ecOfqRkUBVneqzzGeukW4QgIssK0bc8bVGNCXdgEcWDS6PAhebdrQZkFgcllOvVrbmSbotPjL8gkcxU7ooBwCFmp+8nCadkH5MByBsbbTA2Ch2Al1WCUvLXxOWHRy6wdUAGaVOg8jbzblU9dGlQdlsAmpvF4VYSMClqJ2GtR20LhOHTh9UEFHNcFNdrXtWKEjTevIkDrvXU1BEJ6wRIiC0SywGRoIsdOwgJdWELQBVt4WaJgAWBI7xQ7DYprD2k6VfEYALGs7oaMVO9Q0QV4XmZ8inEIHB3kKeSh2doZgYG0n2JiVh4l4YIC6VoSdYl5CPkJ+iiOaFuCC4nexXid+B4l+N6xPYNtXVG1UfVCG9/F+hvYf8hJslOW/6kN0VAQsBd2lUf7nUq1VJGCdibXeKgEDB4B1pikI8g0q/J7XIIP9liC4q+mTLH/JpoL4xthyFGtXDLDOG3lDWENiZSfcn+8AHC7WtbIT8o+/ZFAijhYYAjaq3/NAW6FjdWJnHuBB3eEfuIryu/hQIoM93u8Wth6L/aAs5qE48s/XPcXyumsEjghYitpKYxTrxEEFHjYON7nPpkEVR4dEUEBquO81BUHVSs43yhYLis80tZNvsNJAkG9sLac3zrQFa5XpGATAsrJTJU8RHwDOxBi9yvIrn8+GIy9ofs8DbeioLabbrezMa39EoC3K7/xIUVb55B8SDdumJ7EflPmymLZGjE+fwkjmmRE4ImBpSIVbIKDtmkUD1nRbwEqGh1UbOANNNwVB6GSTqQsPi7PvNbWT3+2Udn8esCyB4V5bsE5bq8E3zAiAZWUn3zEhhAxxZqdKZ5WMeCQ7Xw1HsND87rAOWdvJXzLIQwQsKzt5qMnyO1/vDaZcQR9hPiiLU+8qI3QKD4T3RuCIgKWhPRTK/ei87/EBWFZHJsiepB0A1ue2IKgzRWOxvmm6KzvFkSLDhhbVTnHaKlmjgwhYVnaK4AJ5BtAFNsJP+D9CiA5rO2X1BTo4xDANzssnP1poMTWI7neZLSrLBnzYqVpX+Ok2wweF5ZgPyrw9WeDEt6sKSy+mR+CIgKW5o3BmRnmCKcRNQwCs5diNrQPAqhvk8OwsvsG1XKvzOaadSdwh6GD5tRGWux1R7BR3PyXrQ5ABy8pOlQsh9IWVnfxIQRKGIW3KVXHbu7fyKZsahJ8I0Gplp7j+B/IzgVW+HoGtluBqZafqCBbUf0sgbMZ8UFYFLM2+4PMIHBGwNHVORnmaovIdPgCrqQSAtcIFCMpGYSx2FSUgiGanbFu85doWFDvF0TR+KzYyYBnbKXayeZelrSh2gm/ztuxbhGlAL5+yaWKkqVhrOyFfs/ISAa6s7eTzLWvUj69TlmsvUdpxfrQyb/etRl9QF4EjApamBmWUp1NCAaxFJQCshS5AUIQryx1FCQii2Zk1kmEJWVZ2Zm0fRwYsYzv5p/7kyT/pUCHvwPf8aIblyKWxnTIQBFuSUCKy7foWnewK7HokTgMhTbla2ZkXZJQvE0XWI5VdhDzMhAhYeUCt0ResiMARActA76aUp+pQAOu9EgDWbGwQFDtgpM5hIaadyYL3JLaMbErOt50ilIoNLDJgGduZxI/KinElhpewGL20slMl2K2Y74Z5uxC7HvE7IC1iiaHaKY6uJvHkZLBquQbLOj/Fhyh+OlP2gGVx4kDogLUwAkcELAPdkLKpoyoUwJpaAsB6DhMEZTvfkBYRz3YBrGnrniyAwMhOcWeRrLFHBiyn+YkICMZ26sQLQpiKQ81PMdgkwhl/1nbyIJpWr8VybFFOrfNT5fQG1XAOGVqJ2Y7zD6d5Gxo0+oLZETgiYBnoV5KyNDYkwLqlBIB1CwYIyqYO4CkRsWN4zgWwpgGBxW4tIztleZcVxTv5uwW4OM9Pza3k6HbqLBhGiIOGmp9IQTBR7VQNzcFDS9HlMy16enIOIQ80hmC9BLMdd7TI/bkIHBGwDDRYUpb+FBJgHV0CwDrKFgRlATER1jLJQPAWl0Cg07hh22lyFl0RdpYlP8U1THn3R7AVNT95mLEMG4Jmp+oIKhJYo+YntEXJkgB+5E0zYKdMb7sCrCyw5kcKFdY43hKBIwKWgbqztZB8WdpL9fPi5QKwBpYAsKptQFAGVwixetJA8GjTkanERtWggxYdg5GdBQAWSn5mdbQ6O6Jc2MmfIpAXKwgh1tRRmA9UjqYHrexUBawi6xEPKkkg5Kzpfn4zhuFShtux2/G8YK4GgZGPisARAUsBiLpR9aJal6ov1QZbj1jR7gFigx9ethN9/Zvs7/C+r1J1LwqwQDMCBqzXmCOMQVCEK8tQDHkgONB2NEB1y7bFlngjO5O4XFkSg6GKT+Oh5SffeVmUC7BzAMaaQNWO1tDWaqwHKsfnPKL4PQuYkUJLWOUnD8xpkMePtFnk857Y7TjfDqWVRf49CiNv1RE4ImBJAKgrVW+qDan6Uw0UtdWZS6bwGzq69+63tex9VDVUG1H1ge/1CVjDAwas4ZwztEEQOc5VLgi6tFM8pd5w1MDKTqwRBN/5KRsV5DtZi0O+rfOThxWwQ5Zvoq0GU9uoftdZ6BxaPULakfka1xEY5ae42F60VdzUYgiCr5nmZVY7nreZQPNw8tcibETAkoxUbUA1IAWWVmnL0754MClLW5/TND/v/UwD2ChXNx+A1YdqaYCABTb14ZyhDYJpp8NnXYYN2XAbO2UjbQArsgjUltNZ1nZ6Aiz0/ITRDchLyDsxPy2iufN2/hljPVOerUWVT8fBRZ35PSv0gUWYhuFchzAco74ksAp2ioveLU5vGG6al1ntONgilsvEdjFNCm3V8AgbEbA4uOrJRptUQGlgzYmv/y0pS1uesWiy6ue4Ua1ergELNDpAwBotOEMLBMUnRIeAJYKgEbDCU54KEFqMGKDY6QGwUOwURwCQgRo1P1WDYxr6Ht3vyOE4UO2UrbmUXRbQspTZZv2AqlJGoU0wnGZflZ8mNua143nR8hXzuJ3Pozo3YNGrS9pUYJp6rFczqOakty4eOHzOTevt/PvdNAErgaw1XANWL6q5vqIEKwhs6SVxyGiTqRfHgDXaxk7Zlm1ZwyUexmoLrDZ2Ou540fMzrfG3PIcQPT/FcyeRfI9upyPAQvU71GNZPYLXLEfdRkuevI3zEx6sxBHMxE4ouxY7nUfb5KXKgzKAn+zBIAnwqmD76AgaEbA4wFpDZVrQgbq5BizQgQEB1oEpDikLCFrbyS8eR9il5czOmJ/4+clvKLAMgtvp/Y6Yl6vslACWtZ18mAYEaO2Qny59bmi71OdRnVPcta5nuFrfxxRhomsCaGyvyqHe4EGwLHaWBaxDzM+0QHUxPyvf7ykqQ30vhc+jOjVgwbU21eaOwaqahXCo8glYPaieL7DSwb17KAwtBg+CZbCzTGAdUn7mRQKO+VnZfs9QGR5Qg8nLCBZRKYCVXL3YbsL+SFDVn4V86MXWe1X5BizQxlRzCqh0cM8NFeduywKCQdtZQrAOwk4FwIr5WcF+z1Dw+RlSXkawiMoBLP5ak2odNqUHkLQJG+Xqz+06rGH/h9Gpfux9fVksrTXzbuALsJIzfhZ7rHRwr8GaC+QKBUHVBiJkYC0bWIfid5WzrEryoBL9buD3HJXB70HkZQSLKA3Acn7l1JluVL+kGkf1KQQ1pVpI9V8WBmVdHcACDaWq91Dp6uBehrsQCgFB3QYiVGAtI1iH4HdV/4een9HvZn4fpHYIbegPqIXnZQSLqJLsdvw21Vs55XsR1ZE6gAXal6rJYaWD797XcpunVxA0bSBCBNaygnUR+TnI8DT2kPOzSL+bdrAh+F1RZXhALTQvY+cdwzQUKUUb96Nq0CjrF+kAFuhYNhyGXengO49CcpAXELRtIEID1rKCte/8tKmgIfo9w/9e87OsftdQGR5QC8vLCBkRsAy0JtUOVIdRnUN1CdUNTFdQnU91HAP6PjaARd/zLfZwoH0QvA5ggU53UPFOR3aQUxDEaiBCAtYiwRqjgS3K74YjmME9qBTld4wOtki/a6oMD6iF5GWEjAhYitqQrXN6UhN4mqn+R3Uh1bYGgPV0VnDdjFMWvqT6um5DcR1ixbsOsYN1DoLYDUQowFoUWGM1sEX53WIEM6gHlaL8juj/QvxuoDI8oHrPywgZEbBytAfVeMQRVjik/UiVXaz077umnWKRnAQBJ4EAZKXc60zdRqIr1WMIiXyMfZcrB6GDoIsGAttOh08QzvIT2f/e/G45glm43xX97zw/kfzv3e+GKsMDqte8jJARAStFtVRTHE5bf0h1BFWXDNukR0vxR5bBCQZwLFTKPZ4zaSR6U82ySNgs9h1VDgELHQQdARaqnQ4By1l+Ivvfm98tAatwvyv633l+Ivnfu98NVYYHVK95GSEjApbkyKnr2NSej52tEGJhYIptDw7KOTcWzrPNOCN2sWlDsT1Vo0FiGsV5UIcEjAqCrhoILDs9zIE7yU8H/vfid4Qp4kL9ruF/p/mJaL9Xv1uoDA+o3vIyQkYUVxa3oZpZQGy2pVSHSOyZlPU5mCaEA80BslIONV9p01CcZpCQUz10sE5A0HEHYWWnx10c6PnpyP/O/Y40gmltp6dFps7yE9l+b363VBkeUL3kZQSLKFYO96FaplPW9r6SkGPGEjLiEUIufIKQ0Y8TctbDhBx1JwWey41AaxQ/ZUh/H6vyOYAsGM2SBdW1aSQgqunrmovLunkGLDQQ9NBBGNlZwDZZ1Px0aL9TvyPab2WnR/87yU8H9nvxO4LK8IDqPC8jXESx6Ogr88rW4PMIOf5uQh59jZAFy0ju9fkSQh6g8HPkHW2fVSy/NyXLLmCRuuw9MGJ18DWr///MG6mA9ZhtI/E9jYr3Xc8dLCoIeuggjOwsALBQ89Oh/U79jmi/lZ0e/e8kPx3Y78XvCCrDA6rzvIyA0enh6ud5OwS3O5+Q8ycQ8sliYnx9sICQvz5EyLdGqm8coj+3lIUugalB2DkIPwGuMqYIj8RoKCYoLnisKgiwUEDQk/3adhYU6A0tPx3b78zvyPYb2+nZ/+j56ch+535HUhkeUJ3mZYSMTg1XtXnT0L+9nZD35xO0a+anhBx6s1JZ/guz8S7Z30+9uw2wYIF7ClzBmZtfwWgkahWM3algwLIGQY/2a9lZ4FEFKPnpwX4nfndgv5GdBfgfNT8d2u/U74gqwwOqs7yMoNFp4Wpdqg+ypgOvf4aQFoJ/NTUTctkkQrbJP31gKAtwqnsoOkx37qEbyT1LUzNu9lzBHSwKCHq0X8vOAgELJT892O/E7w7sN7KzAP+j5qfjODrO/I6oMjygOsvLCBudFrDGpZWl7c8nZNJM4vwa90ru2qy5VOuwY3nmaWzyOEL3LMI8HZFxw8MDASwrEPRsv7KdBR+2aZ2fnuxH97sj+7XtLMj/aPnp2H5nfkdWGR5QneRlhI1OCVcHZK23mjqbeLsen5ELWVcym/tRPZIDVy9T7cKnFauBgOBgshPZ4cygtQMCLGMQ9Gy/sp0FA5Z1fnqyH93vjuzXtrMg/6Plp2P7nfkdWWV4QHWSlxE4Oh1cwRE176WVpYenE+/XmKm5032DOPsHD2o7YPphqhfYWYVXUu1JtYaYXsxG4gGJcQ8E0sFag6Bn+5XtLBiwrPPTk/3ofndkv7adBfkfLT8d2+/M78gqwwOqk7yM0NHpAOt3aTBz7mN2oATxqI65ZXXwT9UL1nmdeE8mZN1jml7MRuJYiWHHBgZYxiBYgP1KdhYMWNb56dF+VL87tF/LzgL9j5KfHux34ncHKsMDKnpeRujoVHC1BtXbMojZ4zJC6hrTIQjCIoDSLjgPcI+LV3/f+eP04GxhHSG7XJS54L2maMDaQmLYFgEClhEIFmC/kp0BAJZVfnq0H9XvDu3XsrNA/6Pkpwf7nfjdgcrwgIqelxE8OhVg7Zk2SjT+9XT4gVEpeM9B16S/B4CqHbBdrDeKBdedL2SOYl1YNGCBvuQPOlT5DFyeOwgjECyggVOyMwDAsspPj/aj+t2h/Vp2Fuh/lPz0YL8TvztQGR5Q0fMygkenAqwxMnj56bWENGfEY7h/avuo6bKpQf7vCZAlx9ioXo1NhOx+aSpgfSRbY+UbsPidJs8GClhGIIjZQPCXrZ2yyzNgWeWn5w4Cze8m9ssuWztN/Y7kf+v8tPG9Qv1x5ndHKsMDKmpeRvDoNHDVlWqRDF7+lQNBMP2XvPcvd7X/GwBV8rcrJ6x+Pw9Z8JmZc9Ug68ZnM0exdvMGWPTqQdWb6htUm1BtvuVp81fN0W9x6rwH6Gv9qTaj2ohqfapeVF0DACxtECwIsHLtDASwjPOzwDAdzwYMWMp2FgxY1vnpCbDQ/e4hXEOoD6ioeRnho9MA1o4yaNlhFCFLG/LBB+Ap+UyyFksGV2mfSaYYb/13G2zVpdzz0y8zwzac4xywGFQBNA0UNfBPH96QGEN//4fsPVQDqDakWstHA4EFgq4By8ZOn4CFnZ+uAMu137EAy9ZOX4DlKj+xAcuX321VhgdUH3kZ4aPTANZwGbTA7j2Va9q7bcCUwBEPT7DeCv4OfxPFj2Tx76/LgLrD0o/SmegMsOjVhWrjFGhqVf/jXzkjMQZ+z3ovU29XDQQ2CLoCLEw7XQKWq/zEBixffkcArEL9rvGA4jQ/sQDLt98twCr4B1SfeRnho9MAlvRMv9ue11uIDgvXeWjidw6mCUatYB1X8l7ZOi7+unxSemR3l4C1Vh4wrfWNwYMHDp97Kwh+VwCsTbEbCFcg6ACwggDWosAaG7B8+90CsIJ6UCnK71iAVZTfDcAq+AfUIvIywkenAawXZdDy0gd6gAUjT8mOQRjFAliCNVYg+D9MAybTgcnrPFDlwRVcE9/IBLZehY1gaQqectZxAFhOQNABYAUBrEWBtQPA8up3C8AK6kGlKL8jAlYhfjcArOAfUIvIywgfnQawPpYByxdL00EnmeJLQAmUxLdKi4kF74HvhREr02vW55mAtZVWG2U4tbGpJVjB8PGaNlMbNiNYJiBYxAiWD2AtCqyLGMHC9LvLESyfDypF+d3nCJYLv7sYwSr6AbWIvIzw0WkAq04GLFkXAJZsui8ZiYIQDGlrrpL1WrwAulR2E0LQ0QzAGoI+gqW6OJcteBzAKleN6qJsrF0orkEQsbGNdrKOoSx2YmwSCPlBpSwPVKHV97LYWSllM0BwKFQlyqcOsLLzhdmgA6NUAEWgZOovGZlKRqp0pTKy1bAy8zt29wVYaJcjwAoKBMsCrD7tdARYTux0AFhe7dRc5OytfCICViH1qCx2VkqbFBqgRMBSzqcO51jWXqA+bSdO/cH/YdE6P32YvCauwQIlI1sqgLV8RSZgfaeoQKObUR1JdR3VZKr3qRZSNTMtZKdow9+uZe/dFLOAIcGe83R4AlbrdLi+FBsoo3Rg24nQwDpPh2PAcvJA5QCwvNZz13b6SkfID9ElAyyv/WCJAGux7hShytoq2FXIT/uJ74O/qSxs568FyzIBawefgAWF6by0AxwV9Tb7js0KrCCFpQO5gntPh6MnQG/pcPwE6zwdBTyBo3Ygnu1H90dBIyCFt7sOVPgDemfsPzwC1nuydH/2pR1gJa/DT9hhyL+PX8MlC0Sauvbr00w/DfABWNtQ3c8KPkESfNd97Lu9FLAQ0oFUwQtLB3IH4z0djjpIb+nw1ME760A82e/UHx4BK5h2FxGqSvuAXgn9h0fAmipL7wvvmQMWfwahuDYr+T8fkFQVsh6fkemftV0CVh/2hIFZoGQF7Fp2LycFLKR0WBbawtOB1EEWlg7kDt57OhwDivMOxLH9Xv3hELCCa3ctVeoH9ErpPzwD1q2ydN40xQyw0o7JkYEYD1niWYay6+KJqT6Z4/KonB9QfeKwQImCe+2NXUFCS4dFgQ0iHQgVr9B0IHbwhaTDEaAEDyYKgFIKf5S13TVU6R/QK6X/KACwTpGl7+ix+oDFwxUsXocr2W2YLHIXpxITyFJZj3XgDam+GO8CsLpQ/c1xpciqLCOYDVYFLNR0GBTUoNJhUeGCSAdCw1HqdJQVTDLsL5U/ytruGqjUD+iV0n8UCFg7ydK27ci2uFM6gAXhGwCYAK6SMwXFsA0wfShestfE68MFmX44Axuw4NDOOwooUKJuY7YYVZCQ06FZSINLh2FlCyodFo1G6dNRVjBJAZTS+aOs7a6GSv+AXin9R8GA1Y1qgSxdY1/MPx6HPwIH4AoOd5ZFfYdI77q7Bvnrisl4QUbzAAsc+UAAhSrRv2SVXbFyBJsOzc48uHQYQklMRzjpKDUoht5eGQBWKdpdRZX+Ab1S+o9AIOt2WZr2vpKQpub0w50TuBIF04EAWzCqJYvqDq8lU4cQAZ6PlSUFuUZCdks/PPp9kwfArMpxXUCFKtF1BhUk6HRoFM4g02FQyWI6wkpHqUEx9PbKALBK0e4qwlUlPKBXRP8RCGDtlZamf70sh6tkTRX8hJEpGLkCqNrjYvP8S84zFK8bnsn83IVGsfpSKscpARaqRKeoVpAypMNmgWAo6bBd6BjTUUw6KgEUy9BeaQBWadpdBZX+Ab1S+o+AAAumat+QpQdGjhbVd5waTNZWiWcIwt8AuJK1WKr5Bt8nm0L8eDEhO45O/dxKqn5YgLUjVWPABQts2yGvgpQlHQqFMqYjpgM9HZUCimX3R1nb3RyV/gG9kup5YJB1dFqa/nCvfGTJZk2VytXcQsivb8vM638anzYhVIw1qd4KuFAleovZmubEUqUjozDGdMR0oKejUjqQSvBHWdvdDJX+Ab2S6nmAgNWd6t20NKnGxcK8Ln0qM49XUG2JBVhnlaBQJToro4KUKh0ZhTGmI6bDRToqBXhL74+ytrspqpQH9Iqo5wFD1n5p6dmG6pHp/uAKdjDm5O/frc5L5SrH16mWYheAoZesXtV/1eOo3w229pU4Dy0dx97StgMBFtYlaYDhyjFPt6WrLOk4+JqO6YAdFqPGlcsfaYJ0JLtFDr4m7HQkdqoKOx0VBCZW/tD1gyiDcualfoBd0D5BO5XUdaj38BpC3ViVjhTAKv0Duqk/TPo5aLf43W+Gfkqt54FD1v1paRp8HiH3TXMPVzc+2wZ0GXk7h2odLMC60EVB5uNVWHYYSiv7MdIBYCUuqpNdiOlxkg6o9Hnz1xC07dS7w05Hnq/4CyktTtIBtuleDtKBDrwJ4PJbpOH/x97iFNyt/GF7GZYzp/VDJZAivAfh4fBCCVw5AUWHD4Wo5Uqnn4N6Ae1unp9sylUJAKs31ezMdmUCIY1N+GAF4RhOyy9HTVR72KYzqRxrUy3C7vzECu8AsMDmnpzTrNNxLBcdVuXiw/aHlA5oRGGbq+qFNLqIno68NIoNFRJgOUkHdBieAatdOrA7dMjrvI4COkaMDl1Ig7U/CgIsZ/VDDLyYdUG7YOmT1nQIgHUhVp3OA0XEh0KUcqXTz4kPhFkX+NS0npcEsmAtXENW2va/npBXPsKDq6mzCfnR1Up5eipGGpPKcQR25ycbOXEAWKBfcQ47ArvDTgp6EsxM9nfoOENKR1r+Q8Oalg6ASqQpBNR06HYqiKNx6Okw2Q2DnA60Dh2AXPmJsQGnQ8f0h9UTsF1dQS9X4rlrSV1PAi3KHrQ0R0ik6eDgCqVcFfBQaF2udPo5SJ/48J6EG0jzk0bf8quyARbL86Py0gZThiffR8gbn5jX2WkfEnLcXcp5OXYQwjFqPGA9jjmqkPY05QiwxnPOehxzhAEKvKwhFd8HlSSkdIDNon0y8BAbB6TROLR0mIwGIQIWejr4BhR+97TWZDx2hy57CgdgTzoK2fQ6vIYIio97yjtpDB7LMoZersROWwYeYLP4PssHqvEcYDl7AIFylYCirFwh1HejcmXSz4kgDOkVHzzEBxeNvmV8GQGL5fsFyn3bjYTc+lwbbEF4hazQC9Npebn+GUL2uVarPEym6oGVtuTpowHrqTZres0RYDWw4WrrdPAVOO8pVRwWRqjoaOkQbct60uNHsuD3kPxhMsyOCFjo6XAAs8rpcAWKaWmRdeiWa7LGc6NwDb7gSuwUEdow1HIlruvLsk/svC1HgBq4acLHsdORNnojLuFAaLO0y5VpP6fa1ooPj4p+aijjNCEXgHSsru92GEXIAde3jUz96f42HUt//9k/CNn+fOPdpb0x05YZvl5Hsqkz8TVHgEVYGvby2QGKo0RIaUNJhwiKOjAWkj90pnEdABZqOsQOBGlaWScdKB36qHHq60TEDt2yjiQd+l6+8k0EecRRR2flKqv8Q91BbrPQypU4eqWzjsly4btWuTLt50Sb8+o/D3Aaa7H2KvEoVg82elTUrtKPqWqw0wUJOxv76TwpFA4qdNaWW+t0JFtmoXCr2OogbWdh+QMaWujg8p5++IYNaaoTNR15667EJ0lkwEJLh/hUimynSjpQOnSxvOStreL9gzBNuJercqUyUoe0KxK9nqvChoOHwrNcPKCrjErx5RBhNFi5XJn2c2L9z5ueNWyXyxgTixfsLHypALhaTDXYRfogUXdhApa4w8MTYI3FSofpkzzSiITXdIiLLjWelApJh2x9gmNwQUuH+ISedHiQpiS2EpQpxPhqYjpQOnS+vKh0bAAl4BOkDRRn+aofYllDWBTupFyJnXvWKJtYBhGAcayLB3SVcsX7B2GaULlcmfZzsvqv80CmWH/GlhywqliMtXc89uX1VENdpQ8S9D+skQXZaIknwHoRKx2mIylIT7fe0gGduaMQB07SIQufAeVNZ4qkyHTwoyGQjrQ4a6qjpwbpsO7QxREQcbQkgSmHo3NjfdQPcRoaYRek0/ohTvND2eJ9A34R2yuE0US0cmXST4j13le5Mu3n+PqukveG7dqLFQBYoBo2Zee6H4RYV/u6TB8k5jOXifAEWJ+4TkfW6BXS4nDn6eCnQB3FwXKSDtn27eQp1zFgoaVD90KIVSSmw7pDF/MaOu4kbpGsTEFn5AB4nddzBwvbvdePvDhSSCOKn2CBom5+iyOMlumxLleBANYnFQJYoMFs6s5lXT/edfogIcsrALCWuU5H3khKGdKRFdAO+QkdNR3i8DoPH44BCyUdWRHckyjVloEGVdLxGTZ4qAblRaz3n/io545Hr5zVc5XTJ5DBfRkWKPLlSGUzgdgmWNZ763IVCGAtqyDAAg0d5O7gcAgNUeUDsEgFABYpCq6Qhtq9KO+pFnERr9N1V7ydjgHLWcwu2XmW8JpYvhCPBlmODVg6Jx4g1f1lvstbGdos3REseC9iXUcBRXEKM6sew2gV8uaWZa77Od0+w3TXcYUBlqtg1WNZaAgvgLWsAgBrqet0yOAKoAT56dZZOpIDn5M1MtCRiE+8iNHcUdIhy3OxoXEMWCjpAJugA0k6wawRTzE9SKNYKGfEySKGJ9O1fL4DFMpGU5DKltN6LoKKo00HqPVctBnqDEzbJnUd/Caut0Rqu5a6fJCS1WUoQzKYRKj3y0IGLMVZkqUVCFigKxDr3jQufpsXwFpcAYC1wGU6ZEETxZGUMqRDZagdKQDmQtt0yJ7KZbDhGLC8+0M21YOUjmUuACur4XdQtpa69Ie4iN9hMNiFWOkQwSRtClB28DtCe7zAJSjyx3uBss5btKz31uUqkCnCBRUKWBAjaypSOIbN+O/2AVjvVgBgveMqHbIz1xzBldN06Kw5CSEd4s6otCdux4BViD8chJ54B6NDlx314blsLXDpDzHfEadnnZUrMahw1qiUbHdkCOUqa+ov7UJeg2VdrgIBrHcqFLBAAxBg/jfi9/oArCkVAFjPuEiH7FT3tPMJQ06HbseCAI/W6cC4EMCkEH84gMZnMDp02SJ33c9Y1p13XPpDDKXh0Mdo5UoXeJH98Qw28II9WYv1wS9JAGXEUd53MNurAgHrmQoGLNBxFj56QPadPgDr5goArJux0yE7eBR5B47zdEBjpdKAOujQb7JNRyCAdbPr+qESBgQpHVOwQbwAWHzGlT88Tg+i1A+s+FGW/rjZFfCCXeCDZJctTA/yG0NEUEQA3ptd+kH3SDIxfYr9zs0VDliwMP15wyngjYoCrJMrALBOxkyHDK48Hc6Lkg7+aUk3KjJSh26djkAAC80fyeiISh0wbFzz0nEz9shaAYB1s6v2SqwDDqcHUdsr3fYVGd5PLuIBRGzjEM6IvBmzvZL5QSxfeaO//HozjTiLJ1c4YIF2omrW9M/pad/nA7BqKwCwhmClQ7al3uNWbZR08OsYVKY6HCyq3sk2HcnC1jzJFlInf0OYykX3h0pnoHsum2I6rDt08VgWlc4ZeUrqZFftlTjC4HikeiesdPBlxSR+lGU6h2CBIpQLKE/Q/ua1t2I5RHj4tS5Xef2FzjmQ4hFmGukb0gkAS/d4v7lUaxUJWF2p5pUYsOaxNFinQ6wEDiKce0mHzm4h8ckKISwAWjoKWq+Eng5x91PW6IgI+Ah1JkkHSofOr1NSafiR1zUNcVWukEdEvNUPsa5ntVcwaqJ6bqHvcqWzvs/BaKN1uVKps+IGg7SHDRH2FfugVn90EsDaSmMU68Ss7/IBWFVsTUBZAetGzlk3YTWy/FEfKkJYGI6WDlnkcFmgOtloHQKgoKWjYMBy5o/kkGrxqVUWyBNhJOVGlgaUDl1np53YEVqONKzqQFyUK4/LAVDrh6yuQzkSyw34AvkEihtZ34FSrsSpyzQfONgJiVKuVPo5WUgNvr1Kjp0yPIbtxrLBlQVgge5T9O2aIQDWsBID1jDOWcMwR690LoSI7ijpyFpHlhwynHYeIVTuUPwRAGChpkMWw4f3h+xCWgc0DLNDF6cv0uBdFjPLcnrwRlflSmf6JsT6IdvtzB/DJKvrGO0V11GhAK9KUGExVhaCr1DKlapNYsDXBLTS/KTRBgzrZIC1h0KejM77Hl+ABavz3yghYMH22jU4ZxmnQzaa4xGw0NKRB1lZcWUQ/AE2d8FORwGAhe4P3eNMkKamxXSgdOjiaIMKvCPU/WGuypVh1Oyg6odOXUfYDd1arriOCqVcyaAcgITfJII4xYlarlTLuur5nZoPvO3qeScBLPDVzIw8gSnETUMBLNDRJQSsEyQOOxqrcnsELLR0yMAxq0JDA4a4Y+poV+nwDFjO/AHlLMsfUI4QR+FOENKA1qHLAvA6hPcOHQhmufJ4nqXT+gE+kY2Q8BCM1AafIOnsvIIiUsgctHKl08+pxPrSbJNPKCNcWQIW6JyMPJmi8h0+AWtNF1GS+XVKyAE6Z4HNEocZpSPZxWIqizVYqOnI8gO/+w7ACzkavZd0yEaGeD8gNLqV7g+0Dh3szesoVA+pNQBeNH84KEOF1g9+N14iRGiclbKuBa1cZT3sJpCI5CO0cmXSz8H7AIot/SQtV50EsAZl5MspoQEW6GdFxDQx1M/SMqhs6cgofDEdMR2o6XDRoSN1FNodSIX4o5TtrkSo5QoACkZx+DIF/0eE34ouV50EsLKO+qsOEbBAT5SgUE3Iy6CypEOhAJYhHeMrJB0TOkM6KqkDKXv9KGu7m6KKeECvpPaqEwDWDZJ8+Uj180UA1jeoPg24UH1C9XUFwCpFOhQKYExHTIeLdFQK8JbaH2VtdzNUKQ/oFVHPOwFg/UqSN2NDBizQUKqmAAtVE9ueqZRBZUiHYiEMOh0alSmmI5B0VBAoltofZW13M1QRD+iV1H9UOGANluTPn0IHLNDpARas03UzKPR0aBTEINNhUKFiOgJJR4WAYtDtlUEHU4p2N0cV8YBeSf1HBQNWd6oVQv7spfp58fIJWKDbAipUt5gSaMjp0CyMwaXDsFIFlQ6LxqH06Sg7KIbcXll0MMG3uwqqiAf0Suo/KgGw6NWNqhfVulR9qTbYesSKt/k82uCHl+1EX/8m+zu876tU3UMErB5UkwMoVJOZLaaAFWw6NAtjcOkwrFRBpcOicSh9OsoKJikNdOn8UdZ2V1GV8oBeEf1HGQGLXl2pelNtSNWfaqCorc5cMoXLo5buvfttLXsfVQ3VRlR94HtDACxQb6oZBRaq15gNVnOooabDoEAGlQ6LihVEOhAaiFKno6xgktFAl8ofZW13FVURD+iV1H+UBbDYSNUGVANSYGmVtjztiweTfNr6nKb5ee9nGsBGuboVDVigjanmFFCo5rB7oyxSCzEdhoUymHRYVq7C04HUQBSaDqQGrpSgGGJ7hfgEH2y7q6GKeECvpP4jdMCiV0822qQCSgNrTnz9b0lebXnGosmqn+NGtXoVDVjJav3FHgvVYnZP1F0AoaXDomAGkQ6EClZoOhAbiELSgdzAlQ4UQ2uvHKxBCbLd1VRFPKBXUv8RKmDRq0vaVGCaeqxXM6jmpLcuHjh8zk3r7fz73TQBK4GsNYoGrGR3SKOHQtXI7uVkm2VI6bAsnIWnA6mCFZYO5AbCezocPEGWChRDaq8cLvINrt013E5f+gf0Suo/AgWsNVSmBR2oWwiABTocFpI5LFTw3Ye5jmMRSjoQCmih6UCsYIWkwwGgeE2HozUQwYOJBqB48YeHXVRBtbuGqogH9ErqP0ISd63rGa7WD2GK0NcWXK2YK5aNc+HpQOogC0sHcgfvPR2OAMVbOhzu4gkaTDQBxak/PG5TD6bdtVBFPKBXSv8RKGDBtTbV5o7BqpqFcKgKDbBA/3BQqK7TtQOhgS40HYgdTCHpcNBBek2Hww7eSzocA4rzDsRjHB0n/igg0GIQ7a6lKuIBvRL6j4ABK7l6sd2E/ZGgqj8L+dCLrfeqChWwYNvrFMRCNcUk5gpCBSk0HYgNdCHpcNDBeE2Hww7SSzo8dPBOOxCPgOLEHwUAVhDtLoIq5QG91P1HCQCLv9akWodN6QEkbcJGufpzuw5r2P9hdKofe19fFktrzbwbhARYoI2ovkAoVPOoNjSxAamBKywdyA2093Q46mC8pcNxB+k8HR46eKcdiGdAQfdHQUeFFN7uIqhSHtBL3X+UDLCcXzm+7kb1S6pxg9rO24Tp6IVU/6UaTrUuNmCBDkYoWAeZ3h+xgSskHQ4aaIx0HFig/V794aGDdJoOTx28sw6kAEBB9UeBZ7F5reeOVCkP6KXtP6KU/fxtqrdy/LeI6khswALdZVGo7rK5N3ID5z0djhpom3TcGYD93vzhqYN0lg6PHbyTDqQgQEHzR8GH3Xqr5w5VKQ/opew/KuCw5yrX/EDftx9Vg4YvL8IGrL6M3nQL1SL22VAAy3s6HBVQb+lwXMGcp8NTA+EsHZ4bOPQOpKAGGs0fBXcwhbW7yKqUB/TS9R8lBaw1qXZgu0XPobqE6gamK6jOpzqOheroY5N/9D3foqoz8OlRmIAF+oOBEX/wQaCaDvaaDocF1Es6PFQwp+nw2EA4SYfnBg69AykQUFD8EcATfCHtLrIq5QG9dP1HiQBrQ7bO6UlN4Gmm+h/VhVTbGgDW01nf/8wbhNw/Vfq3L6m+jllJYAHYuxoJf4d9JjTA8poOhwVUNx2zTNLhoYI59YfHBsJJOgro4FE7kAIBBcUfAQCWl3ruQZXygF6q/qMEgLUH1XiqJqTNEHA25ZHJhogc23bN+q5R40jrlQJYoDOxK8nvNBL6W19zqAYO9pYOxwXUeTo8dTDO0uG5g0RPRwEdPGoHUjCgWPsjkDUo3ttdB6qUB/RS9R8BA1Yt8i5TUR9SHUHVJcO20WmfP/gaQuYvyRzBAj2HXUm6M8NVEtctYMDylg7HDbTzdHjqYJylw3MHiZ6Ogjp4tA6kYECx9kcggOW93XWkSnlAL03/ESBg9WLxzJodwhUvCLEwMMW2B9M+99EXhFz1eBtcZQDWYheV5K8KiTrD5y4AwwbOSzo8NNBO0+Gxg3GSjgI6SNR0FNTBo3UgAQCKlT8C2kXltd11pEp5QC9N/xEYbG1DNdMTWPFaSnWIxJ5JsvcDUE17d/XvGYC10kUl+SbVikHZB3FuUALA8pIODw2003R47GCcpKOADhI1HQV28CgdSACAYuWPgADLa7vrUJXygF6K/iMguNqHapkOGO19JSHHjCVkxCOEXPgEIaMfJ+Sshwk56k5Chl5uBFqj+ClD+vtY8T3H3tK27mrCy21gNXNum069W/p9c1xVksczEjHedxwLiwbOeTo8NdDO0uG5g0FPR0EdJFo6CuzgUTqQQADF2B+BxQHy1u46VKU8oJei/wgEriA6+so8ABp8HiHHU5B59DVCFiwjudfnSwh5gILQkXe0fVYRsm6i6srsOlO29ioZtVIArMdcVZIjMxLwuxIBlvN0eGqgnaXDcweDno6COki0dBTcwVt3IIEAirE/AgMsb+2uY1XKA3rw/UcAcPXzvB2C251PyPkTCPlkMTG+PlhAyF8fIuRbI9UPcac/txzUdhxO6ntzpgiPdBnXpDklJsXXSlRBnKfDY6BLJ+koIA4TajoKDHSJko6CO3jrDiQQQDH2R2CA5a3ddaxKeUAPvv8oGK5q2YhkKsD89nZC3p9P0K6ZnxJy6M1KkPUXZmNmEFwYuUqbHqT6istK8j/JTV/Cvo+HBs5pOjw20E7SUUAHg5qOAjtIlHQEEEncqgMJCFCM/BHgUSFe2l0PgUcr4QE9+P6jQLhal+qDrOnA658hpIXgX03NhFw2iZBtsgGriUWC35DBks5aLpju3AM7kruoyyU3vrSEgOU0HR4baCfpKKCDQU1HgR0kSjoC6OCtOpCAAMXIHwEClpd214Mq5QE96P6jQMAalwYo259PyKSZxPk17pXctVlzqdYZ1HYszzxFuIIRuSOwzyKU6ReSm/+ihBXEaTo8NtBO0lFAB4OajgI7SJR0BNDBW3UgAQGKkT8CBCwv7a4HVcoDetD9R0FwdUDWequps4m36/EZuZB1JbO5H9UjOXD1MtUufFpdVpDtJAZsW8IK4jQdHhtoJ+kooINBTUeBHSRKOgLo4K06kIAAxcgfAQKWl3bXgyrlAT3o/qMAuIIjat5Lg5SHpxPv15ipudN9gzj7Bw9qO2D6YaoXBrWdVXgl1Z5Ua4jpdVlB1hLm0WFOc80iK4jsKjodpgVVw36n6Sigg0FNR4EdJEo6AujgrTqQgADFyB/8FQhgeWl3PSjIB/RK6T8KBKzUaP3nPmYHShCb6phb2n5CpHXVC9Z5nXhPJmTdY9xP2zqYXl2ovkLVh+obVBtRbUrVf+tzmr5IjKS/z4PXqDaj2pi9d1322S5FAxa91qTqTdWXakOqflTVKemoZn/fiL0fPrdmCIDl2x+uOkhf6XDdwbtORwCAYtWBmIKJqf3Y/igKsIpudz0ouAf0LMAqyh8lg6s1qN6WQcwelxFS15gOQXDuHyjtqmug33Hx6u87f5wenC2sI2SXizIXvNd4BSx6rc1ApIZqoExbn738jcTIrc6qm5H2PqoB7Lt6eQasnlQbsAI/ECEdNez71vYNWEX5A7uD950Oh4DoJR2+AMtVB+ILsFz5wzdghdLuYqlMD+gpfUih/igZYO2ZNko0/vV0+IFRKXjPQdekvweAqh2wXaw3igXXnS9kjmJd6AWw6NWDjd4MzNOWpy94IjGQ/v64ymdY5erhGLC6q6bBIh3w/d1dA1bR/sDq4ItKhwNA9JoODyNwTjsQ14Dlyx+uASu0dhcBrEr3gB5Su1tSwBojg5efXktIc0Y8Bj6Q5zNvyKcG+b8nQAaCv6lejU2E7H5pKmB9JFtj5QKwNlMFk01+fv+h9MljPgh+V/0c3MMxYG2mYYvTdCAAVqH+QASsQtLhALC8psPhCFzQYKIBWF784QGwgmp3LcCqtA/oIbW7ZQMsOH6GapEMXv6VA0Ew/Ze89y93tf8bAFXytysnrH4/D1nwGTjORuW68dnMUazdggIsCwUFWC7T4ROwXKSjCMDCTEeRgIWRDoeAFTSYuAAsG3+EBFg+2l0LwCrtA3pI7W4JAWtHGbTsMIqQpQ354APwlHwmWYslg6u0zyRTjLf+uw226lLu+emXmWEbzvE1Rbipw0LlY4qwh84Uoct0IE0RFuYP5ClC7+lwNEXoLR0hAFYRYKI5RejcH56mCINpd30AVmgP6CG1uyUErOEyaIHdeyrXtHfbgCmBIx6eYL0V/D05eJkXP5LFv78uA+oOSz9KZ6J2eanbs1ZJkuurbN57AEJhGsAWN35Vd9Goqv0paYB1AN/MWgegqRr2fWvzN8myCQGwvPlDJ6/LUq5s7S/aH46nCL2ASaWUK5vyE1I9d7xIv7QP6GXwR8CAJT3T77bn9Raiw8J1Hpr4nYNpglErWMeVvFe2jou/Lp+UHtndJ2All7gLZONkF4iwO69/yi6Qnuw7OlweAIu/+DANG/FhGrjKM4D9XxamYa20L/YEWM794akj9FquHAKWF3/YNnxlBZMQy5UnwAqi3U30u/FVSiqiXKnYVfZ2t0SA9aIMWl76QA+wYOQp2TEIo1gAS7DGCgT/h2nAZDoweZ0Hqjy4gmviG5nA1sspYNHfB1CdRHUv1atUC6mamBay1+5l7xlQZXEpdhDe7FG5dO1xAFhW9uR8F4YK95dN+TEArCDLjypgJfYsHVp777zdd3rt4+/vsOj9727fNOs72zW9seu2i6ftMvjNqbXbjB+33cCRf+i3wV4ewKTU9R0RsJxdngCrHZh8/89Vg/e9vOoP+19bNeaA66ueOfCGqg8Puqlq8YE3VhFQ6+/0tQP+UfUsvIe+9+Tv/anqW1nlyjNgJeVhU6rfUF1N9STVu6wcEKaF7LUn2Xt+C58xbXdLBFgfy4Dli6XpoJNM8SWgBEriW6XFxIL3wPfCiJXpNevzTMDaygVgdaU6nGoqV1BUBZ/5BfsOlAKCaQ9SB4ViD0YH6dpfhorlpyTlhzXoKPZoQEosPziADN85lGo01VNUH1ItZfddyv7/FPv7UNMygwVY9PX+VCOpZlERQ71DNQq+ywdgpeR/f6qRVLMMykMi+Owo9l1oI6ABAVadDFiyLgAs2XRfMhIFIRjS1lwl67V4AXSp7CaEoKMZgDUEG7CGUb1lUXASzWTfZVVAsO1BqGCF2uPbXwaK5SeWn1h+3JUfUB+qc6g+0bThE/a5Pq4BS9C2VPdTNVuAlSj4rgeottOxxTLvt6W6n6oZoTwkgu96gGq7CgOsDrCy84XZoAOjVABFoGTqLxmZSkaqdKUystWwMvM7dscCrLWobkAsOIngO9fULSCu7TGoXEHY49tfGorlJ5afWH4clR9m0xpUJ1AtsrRhEfueNRwDVl+q26laEMFKVAu7R19XgEXzqS/V7VQtDspDohZ2j74VAlj1IqzUXqA+bSdO/cH/YdE6P32YvCauwQIlI1sqgLV8RSZgfQcDsNajesFh4Xme3UO1QHuxR6OCBWOPb38pKpafWH5i+XFUfrhOfjKyHfB9fR0B1sFUCx2ClaiF7J6ogEXz52BhTZVrLWT3LDtgLdadIlRZWwW7CvlpP/F98DeVhe38tWBZJmDtYAtYvammeyg4cI/eCgW6T7QnHHsUOsfor2hPLD+O7OE2ZnzgyI4PdDZP5AELfa071dUewUoU3Lt7ms0aYNWdLUonBQnu3V18OCoRYL0nA5bPvrQDrOR1+Ak7DPn38Wu4ZIFIU9d+fZoJWANsAKuH4cJNUz0L98wo1D3Y050ve6ZGe/LtyegcY/5Ee2L5cWQPs6mG6lPHdsD319gCFv1/T6oJqjB0ylNfJ9e/cih54r2/k+nzxpMPFv+PfF73Dvl46Rtk9qIXyIsf30MefPtsctELu5NjHl9TB7LAhp6mgEXzoifVBNX8qz/wB6Th/L+SFfeNJU0vPEea355JWubOIc0fvEea35xBmv79JFkx5gbS8KfjSN0Pv6PjF7ChZ0kBa6oMWF54zxyw+DMIxbVZyf/5gKSqkPX4jEzAWtsGsC4tgMwvzSjY0Z4A7cnoIGP+RHti+XFnD4ymvePJjndURtTSAIvB1ZQ8+DlqQjdy06u/JG988RRpaWlWHmWoX7mYPDvnVnLulB1VIWtKAlk6gMXgakpufu39bdJ4wTmkadqLhGiko2XZUrLy8UfJ8uOPUPXLlASySgZYt8qA5aYpZoCVdkyODMR4yBLPMpRdF09Mhas5NoFGd3G8aC9rMd+3JQV71wLt2S3ak22PpHOM+RPtieXHkT3Mprs923K3CWDRn12pHs6DnhtfOZx8Ufcesb1emzeB/PW/W6lA1sPMNiXAYmEvHs7Lp8bRI0jLpx9bp6PpxefI8t8eouKXh7HCfHgErFNk0HL0WH3A4uEKFq/Dlew2TBa5i1OJCWSprMc68IZUwBpvClhdqKYVOL/8MtjAFewu7LVoT8D2cJ1jzJ9oTyw/juxhNv20IFv2MQCsy7JAZ/jkjVpHrDCvlc2N5KFZ55CjJnTNg6wrNQDrssypwJ//pG3ECjUhK8iK228kdXvtkueXK0sGWDvJoGXbkW1xp3QAC8I3ADABXCVnCophG2D6ULxkr4nXhwsypwfPMAWsfWwqYeNN15HmWW+TlZMmolRkXXvqj/4lWTl1CmlZML/9E8GrL5OG8/7q356Df0JWPPxAO3ta6utbbQRbfduT5TPQ8j//3sgeroPUtqfx7jtW3T9NmnZZ5Q+UEygv/NU8d06rH337i/eNinzkT1KmIU/a5RG9P9jru/w4qGPa+QPtXZIHOmVKMb94e7pZBrG0Edy3m8Yuwp9mhWG4YOp3yJLGecTV9eb8yeT3T66bB1kH5QEWA9rUEczlJx9NWhYvdJaOppdfIvU/2zPPNweVCLC6US2QgcvYF/OPx+GPwAG4gsOdZVHfIdK77q5B/rpiMl6QUR6wJppWQOgEoWHLamgUNZEr3BNN7p92QWfuyx5o+MVOqN2cO7XVEGiM7EnLs3aB1cwgdCLXQWrbA2UlN+Cbnl3G+QMdXtZlWK6N7QFw0Dqfy7E9eWW69cGbgo2v8uOojmnlD19mZOUjr0wp5Bdvz2EFjqaBfq4IWOtTfZEGNlf8349JY1M9cX3NWTKdnDLpG1mA9QWzNQ2u1qf6IvVh7MxTaOPU4DwdzbPfIfUH/TDLL2Dj+iWCrNtl4LL3lRQom9MPd07gShRMBwJswaiWLKo7vJZMHUIEeD5WlrQdbSRkt/TDo9+n6mICWBuwc7Os4AoBsJqYLd/UsYd/gk2eDhsuu6i1AbOEiCZmi5Y9yVNta0NPbUvs4YEC7DTMH217ZJ2TONJnCFhW9vCdIdIIlpE94Jt2HR/1H+SHCDkGozTG+aMygmVQlozt4etSa5mmDyyQR3xZby1HNC995A8/KgTlB3wl2gOva45kKdsjwpPY7sF9+XYR8k9WpnLyq9Ue1uE/WzBgPasIWDelQc0lLwxtncbzdc1Z8ho5cWLvLMi6KQOwbkptL/58Qus0nq+r+b13Sf2+Q7N8c1OJAGuvtNGhf70sh6tkTRX8hJEpGLkCqNrjYrNI7qDkPEPxuuGZzM9daHRmMHXQESaVDhoHceTIErAIs+UInWmdrHvzDZrBE7a2PSI4AMykwaDhKNYRpv6SdU6WgGVsDz+CBvYgdgTa9vA+ESGKhy9DKLb2VxbwGECEkT1JPZfdj4cNA19q2wP3zxqp4tsEgyULmfZAfRahUtb28O8Rp5jblan89hJs6Wey2H75735OVj45gZbvLxgYf9G2W42+brjwvl8OYG2RdvTNqU9vTupW5E+nPfXuna2a8sFDKHACoR6OHN8l62idLSVwtUXa0Tf1h/+MtCxZQnxfEOqhbtjOWUfrbFkSwOpC9YYMYGDkaFF9x6nBZG2VeIYg/A2AK1mLpQpX8H2yKcSPFxOy4+jUz62k6mcKWLdgTe8gANbNVLeaTKXIngahQbS0TcseaOyTqQsZ0LWz1wxqtOyRrXtCmIqztofvlC3WOKH4K698JADmo/zojrhpjhgZ25OXRxZ1TNsevuykAVTyEAG+w7SHf6DMGrnnpy/FhyyVvwv2HK1dvy48J32UZUUj/fvfTMrekTmANUYehqEreWfhc0ogccGUA1s/c8vLp6HByd1vnJw1ijVGAlhjpOnfaxfSPGN6fviIow5vWxuYsmwFymbee6TLXK69NMs3Y0o0inV0Gvz84V552m3WVCmNErYQ8uvbMsHsn6bprTIJLMo3MppPZHl6TtceeKIFQJA1VAiANRUz8CoPpoYLcY3tEddd8Y28BWAZ2cM/4cO9wTb4meZHV/bwwGkAK97LT+v0rt16RyN7+FE+sdy2GzHSHyXWtkflIYV/D6Y9fFvCj6SJvshrczQetMCW27QA/E/H0RvnxGGif19+yjG6eTMmA7A2olohg5g7Xz9euaO76sVjWj/z5ucvtHv9vYUzVo1upWnax5PkD49NS8nwyRunARbYvBEHVxtRrZC2FVdclD/SxI3gLj/3TDko3Xht7gOvnNzqSf2h+6T5BmzeqCSA1Z3q3TSYUY2LhXld+lQmXK2g2tIGsD43AQVoJJLOEBGwPjOxR6UxNtzhiGIPAAQ/NWeRT0b2iIuCIS8QRtOM7eFBU/YU17oTzAy0tOwRQa91Jyo/MqG+48tLeebXQhkCupE9fFnh12CJT+EG5UjbHl3A0rQp055krVcWSPEPMmnAyY/C5WzAAXte1Kpbb7+p9tT+5uva8JkBWGfIAOa4J3pq7RhMAAuASpw6zItxBZ9Nu/770Y1Znz2DA6wzpGn/8feUdgwCVLW2twf9SLoJA+rKqnIy/ET9CA7jH8zyzxklGsXaLw1otqF6ZLo/uIIdjDnTin+3SSsUqnrbhh8RsJZh2CNbgG/YIVnZwz/dt3v6NR+lMbKH75iTtURIgGVkj1IHQO00yCcte/JAz3L9Hmp5thwpsrYna2djMpLtwx6VKUKL0Vkte2TtHu+ntOlvlfdw9igDaP0RB2h1LvW/3F8nbz7PAKxXZPAC03Np16dL3m+FIl4nP9m/LZTDlANXvQYjUwBY4nsT/fXp7+YCFiyuh9hbKYD1KgdYr0jL3LWX5rdXXBlIW0LD+xoAC4BMFIxwZcXIgthbKf55tSyAxSDr/jSoGXweIfdNcw9XNz7bBnQZcDWHah1bwGoOCLBWYtgjwpVFfC4re9K2avu0h7eBX6SMBFja9ohTlZAXiU2tuy35kTZ9kNCyR2wIxR1yfBkyXCuGUp6RppeN7WmtT8LOU+naEn0g1raHn5qTld0OO/X0yraWPR4Aa6UO8DWce7pWB9Nw1nAt+EwBrI3SRofgDMG0C0apVI64AbjKWxifB1hwjXv7r1n32YhND8rr3gf50eZhXVVre8sACeoLQFTSnrW2vQf9yGgTUjtIu/UfWZ/fqESA1Ztqdtbo0agJhDQ24YMVhGM4bVzuyFUT1R626QTAWhwQYC20tadD6Aiz3V8o9kBnkOxy6gAPZpClZY+YF/woAxJgaecPdMJgR+t0S8rGBN5ml/aI4Q5EQOA7Qn5432d5FqHCctelkT08XLWCVBoQ65dpI3vEnXxgkywIqkHZ1rLHA2At1AE+x4C1MgWwfiGDlr89u33mvRfVz2tdawWglShZ5A67CPnXMQDrk6UzswDrcJq+X0jb0GN/lT91x8o9AFTSdvF+bQ3Gy629ai2rXMiVBM7S1m21Gyn76P0sHx1eslGsHagaskBn/+sJeeUjPLiaOpuQH12ttOPwVIw0AmB9FBBgvWdjjwyuLBdNv4eRP2nwYGCbsj2ydVfIOxrR80c2palpm5Y9PGCl3Yd/ojQIrYGSP+3Witktxte2J28TiyUQG+ePGOcOaQOHlj0eAAvsWaTcvvxyf70pwsP21YLPFMC6QgYt/3rrdO3OL20NFgZgwfXnf/dLA6wraPqukE6N33Rt7lKGDrtXudGqhssu7PBQBK9J4SxnlFjBb1eUCbAYZB2VBzswZXjyfYS88Yk5WE37kJDj7lIO5zDWJKhoGmD9JyDAetrUHnE6znDKQtS/MfIna2G1K3tk679yn2gd2oO9kBnDHh6eHNiClj9Jw2s4imZlT14oFEsgtsofqPPgw2QkIJluVvErhj2ydk9ltJHfPZaziQLseV9rKnmmGpw0vzlDN2/eTwGsiTJomf75Y6iAxY9o8brntdHKgHXDK79IA6yJadH7m17I3taWgBT8hLrSNjJ/4ap1Vq0jVOw9rRvD2GhVa7mFAQD2N1l8tdSQDaPOzo3+XzLIukA1jtXBNxJy63NtsAXhFbJCL0yfS8j1zxCyz7VagUgnU/XASltVGrkXBFiXM1nBlcUiYFGX6dgDjSvY0lqRUtbJWHbYyvZ4AqzLdP2lkkcWEKplD+8LB7YY5U/WmjWEcq1tj+Nde0b50zrNDCE9UnxmAaRa9uSGaUhZnqBRpsCe/2qVl1OOUQvT8IejdfPmPymANUsGLV/Uv589ovDxJKVF7gk4JfBlsoswuca/Ozrt87PSznps+fQTpZ2DaQ9wCUAluwYT6IbXE9jiR7RUrhV335Z6bmRJAasLGzXSisi+wyhCDri+bWTqT/e36Vj6+8/+Qcj25xtFeX8L1oZhpg0Aa/+AAGs/JqMpDIUnQl3tq2MP/2SqssPJYLGysj3w3ckTlUz89Bh03FnAg5U/qnnED5W7tEdlqqZdDCj9EVHt/LEY7SjMX3xZ0pxG1baH95lshMhyt6WWPWntXt6GBI3yDfZcqV1mRp3dGlBU3js3Zo2AZOmKFMBaKAsu2tLSrDS1pyIesGDXoO4uwuR64eO70+6xgK136xBclOSkIxk5XXW8FwOu5KEDXgOA4n2ejHAl4KUTcLS13E9OXeu4oIyAxSCrBxs9IgXpY6oa7HQBYK1NVRcAYMGW5J5My0zWNCHDlb49wg4nsbPhn/QN8krbHkfTcFb25B11wk83aXaQRvbwox1iPvC2GCwuR/EXP91lsXvQmb/a7VLVi5xunD98neftEdcdGoRo0LInrS7zUCquA9UoU4k9Bxut9zziALJywsOkZd5nrdv74SfEUYLXDcvPgSmA1SICy++f7JMLCTC9B6NY/HQfLG5PviN5LdlFmACWuKswGQmDqcK8C6Yt047NkR1HVL/fnlrgk5QDGJnKeo+4m1A3qjtMW6Ydm1NCsOIFOwtfKgCuFlMNdpG+5DT72wMArNu5eCS36z5dK23PdGyPbC49GR0SdzgZQI2RPQ4B63ZWdrTtEbciJ3nEP+UZnLNnlD/iCGjajjSDBe4o/uLtsPS5sT2qu/Y0F+Ablx/xUGcoP2KQWAMg1s6ftHZPfPCDci2OGiuUqduZLetQNTg4ZUBHcP+vpgBWh/MHIeaUyrV8ZV2rZKEb0tZn5YVtyLreWvCfNMBqku3WhJhTqldre8Wm/GRxsFpDwPBR3OnvMHolLn5vHQ2T7IZtB2nTp6UeEF5ywAL1pXrHI1zVUw11lb6kgds+AMDanmvglOxJC+iGBFja9iSNa1YsE4ugjEb2OASs7bkOUsue1pGGDN/JRkpc5k9avLLEFsORURR/IYUbsbYna9ee4eixXfnJ6IQMN7ho509WuyfuaDbIL96ecQUD1gNpHQiFk8UisJw4cR2l9pgHKgAn14CVMYK1WBaeo/6neyjDVTLtxz/0A1RBWeTBCkavsg4DV+nbMkawFlcAYIFq2JSda7iCWFf7ukxfFdfIPWgTBDGZi8aqwPS1+1Q6xqx1RqI07LnPxB5xLQh0Sny8E6h8hjsbre2R2Zfki8HU031cuUmkbQ+AJp9HrY2RWR5Z50+yZo33l2HeoPor8ZHl9DeKPUkAVoQ8Qik/HXYR0rJk+LBglD95voFyDOWZzy8+sK6qPfT/uxcMWLtnANbnMmiB6Ok6gAVxsfj/8wvf4fUswIJ4WvB3+I6s67k5t6UBVuoRSamHZvMjcdxIVOvI1LlnttsdyJ9PCNDVGsSYH60XRrfy4mGtnPhY6tFKFQJYoMFs6s4lYB3vOn18A7e57VosQ8E9N5c0cJsVZA+sfegX7cm2R9JBxvyJ9sTy486epwuCq6ezOhAKJ9N1o7iLC91h12BWdPc8wEpCNcCCd8No7tNpOqfbRnHvANhsLVbyECBOXQNI8SPDrdPdAnxpRnOfXkGABRpK1egIriA0RJVPwAIdWUAFPjLNOPq34wuw57hoT7Y9ks4xUcyfaE8sPw7soa9vx47O8WkL3G+7HMB6SAYt//fJvblg8vDMa1NHsPjYV7BOKwGsW14+LXVhfN5C96v/t18aYD1E0/mQdL3of57Kj0vF1lPBaCUPU2nT1/wuwgTE8qbg2611PPvPaf56qMIAC3SEA7gay0JDeAcs0G0eK/CYPAPpe271aM8t0Z5sezI6x0TRX9GeWH4c2EP//jfPgPW3vPyhcDJKBi13vn68cmDRZEowaw0WgFVWKAeYSsyaIoSwEb9/ct20z4+maR0lnYa+4iLi4hKnBZUjudN01P9szzR/ja5AwAJdgQhX06h6Jt9dBGD1oJriofJCAL0eCg0c2DPZgz2Toz359ih0kNFf0Z5YfhzYQ//elepJT3AFkc27KgDWPjJo+cu/NyUtpCWTFWTBQtMAK5kmTIKR8rGwYOTq0yXZgU1nLXw2C9D2oWndRzrN94t9gc6UoSlZlwijVK0jU2xBO2zKgFEuMSQDfCbZPagUCuL1V7N8tk+FAhbEyJqKFI5hM/67iwAsUF+qdxxW3nfYPZSMpO/rnRZpF0lvwD1UMy0ke5i/vNij0Dl6tyeWn1h+OlP5oe9bz3HbnLTPfVTsoXCyLoQ5kIHL2wv+mwoKAETJ+2CRuiy4KOZ1x+vHpYZogDTQ9IKapOuwpr+cOt0H66jEcAuy3YDiOi0YvVI9e7DddOQVF6aGaIA0VChggQZQLbMErN+I31sUYIFqqOY5qLyfsu+uUm3gWMMCi/DnOLAHvnMT3YwLxR5hk4IzezQ6R6/2xPITy09nKz+s/VzkCK4gqrlyRGsKJ6BJMni5btpBueuvkgjsEDCU/yz8XfXQ52Q9FnwHSLyWrVhAjn+iVxpgTeLydZJ09+y5p6eOWMkWtsOIFIxUAYAlo1VJLDQxyGgraCkGGW1Z8iWp2+f7aX6bVNII7jo6zgKuHpB9Z5GABfqWLD6IheC7BvP30GxYBruwxzTzQrBH8Ndg1/7S1OBYfmL5ieUHv/zQzw2lakSGK/g+raCLDLCOk8HLkRPWIJ8sfVMaYDSZ6oNF6ny4heR1cX2V7HgcmQDMxOuhWSOypgeP4/L0OGm+DNuFNH/4fmqIBoCk1kC3CiNSAFMiaImxsVJ3D952g9FmjQoCLFiY/rwBXC2l2ihEwMKsyI3su6pMGzguJgzG9mn4ju/aZmDR9kj8hWqPRefoxZ5YfmL56azlh37+cNkRL4aC7zlc1wYGWH2oFskA5u8vDusACrAYPYEkcWE6wBeEYsiCqCwBpPHX/PoPyHFP9Ex7/zKwncvPPmkjgw1/+T36IndxN2FmgOrPPiV1P/5eVmiPPp0AsEA7UTVrAtbpad8XAmBhVOQW9h1Vtg0cqwj7WtrTxL6jCqGDRLPH4v6i0PIHSc7sieUnlp9OXn5ORwKs003uzwALdEka9Dw393bpKBY/epV2lA4fkkFF7aCE/rvs/36YBWTXSPLzktTTDJ4cj742rPXUgYN+lB1ctKWFNJx+cpbvrikjXBkCFuguDbiaS7VW6IAFOsOm8qZ9b0ENy3Db+0s6KCt7EO4vCiV/EOXEnlh+YvmJ5af2Oku4us70/hxgbUxVJwOZEyZ+lcxZ8hrxfY1/d3QWXIGtm0jyc+O0Ecr6n+5Omt97Fz9kQ3195jqsFXffljcSukknA6ytNEaxTsz6rpAAqwvV/SbHULDPojZwrDLcY2DP3Vj3l3RQRvYg3h/FHgedozN7YvmJ5SeWn9bwDU8ZwtWTKuEYFAALdHYa0AyfvDFZuHyON7h6/uOx5MjxXbIAC2xNy9OzU4/UOnQf0jLvc2/pWDnpcVI3bOcs/51dVriyACzQfQpwNY9qzbIAVhXbyqqzk2YO+4yrBg7mzD/UsOcDcbs4cgdpZI/DDtI6f5CFbk8sP7H8xPKzKrTOXIMdjH1t7i8A1lpUs9Og5oz/DGxdE+X6evHje8gxj/fIgqvZzNa0PF2LanYqZP36oNY1Ua6vpn8/Sep+sFuW/8DGtTopYO2hAFij874nNMAC/VCjAu+V930IDcwwDXv2dHB/UVr2OLi/lT0OO0cn9sTyE8tPLD+r9AONtWHwvr1t7y8AFqiWqjF9JGsjMnvR826io9N/49+9oHX3YgZcgW07J/Zm5Gtt1uau+p//hDS/+bobsmppISvuua1192LOprGdywxXloAFOwpnZsAVTCFuWkbAqlKcKrxP5buQGph7TacKHHVQyvZ46CCt8seR0OyJ5SeWn1h+jI4augXj/iJgsddOytrpd/SE7uTRd84nK5sb0ZgERsZyFrQnOkm0NyNvT8rMwx/sSlaMvZWQlSvw2OqzT/MWtCc6CcN/JQYs0DkZgDVF5TtCBazqnINHV7L3+GrgIAjgigx7VrD3+Oogle3x1EEa548jodkTy08sP7H8tNPXqb5UiL/V1xVgsdfvyYOdv/53K/LSJ/e1nhNoekEQUYhzdfwTa6vA1V2izRjr7Jb/9hDS9J9JrecEGoPVki/b4lz95PsqcHVX4vtODliDMgDrlDIDFmhM1iHOqt+D2MDcnGHPzR7uL0rJHk8dpHH+OBSKPbH8xPITy08HnZPTQZ+Ndf8MwOpJ9YJK7CpYm/XYu6PI53XvKMFIc8tK8tb8p8ntrx9DTpy4jmqMLLClpwFg9aR6QWVUENZmrbhrDGmZq7iYv6mJNL06jTReNprU/3QP1WlmsKVnBKxVejcFsKrLDljbZxSC7Qpo4L6VYc/gAjpIJXs8dpBG+eNQKPbE8hPLTyw/0s0AS1NsWcL+7hSw2N/6Ur2jEygUDom+7uWDybi3/0r+/cG1rTG0/vvRTeTJ9y4nd7/xB/L3F/fKOvYmTWBDX5nNinmsfTYvHBLdcN4ZZMWt/yArH76/NYbWyvEPkZX/uoc0XnMpaTj191nH3mSe4cv7PgIWuUECVx+pfj5kwAL9n6QQ/J/OdyA3MM9L7Jnq8f7a9njsII3yx7Gs7YnlJ5afWH6k+kdazCvM+2cBFvt7DdU8k6jsSIJ716TZrJHPrs7mVdU88YzICFit+pUEsMZWCmANtw0yiNzA/FFizx8L7CBz7fHcQWrnj2NZ2xPLTyw/sfxINSSlo97JJWClCHbtLS4ArhbzOwZl0szrnZHPotQ5s3JnF+WnAgBrsASw/lQpgDVAUhgGFNjA1Ujs6V9gB5lrj+cOUjt/HMvanlh+YvmJ5SdV7wu2vId9f0XAAg3NCt/gQI3snlVYgEXcHbKtfYZvBKxV6k61QgCsvVQ/L16hARboYyFwXVWBDVyVEAj1wwLur2WP5w5SO388yMqeWH5i+YnlJ1XXimfWFQhYoMOomjzAFdzjUBWbDPP8MHaepGu4gnsc6rL8lA2w6NWNqhfVulR9qTbYesSKt3nA2uCHl+1EX/8m+zu876tU3csKWOO4AvFQAA0cH6Pr/gA6yEx7CuggtfLHg6zsieUnlp9YflJ1iNBhH1wwYIGO9wBYx6vaY5Hvx3sArONdl5/QAYteXal6U21I1Z9qoKitzlwyhQOslu69+20tex9VDdVGVH3ge8sCWOdyBeKyABo43p4RAXSQmfYU0EFq5Y8HWdkTy08sP7H8ZMYL4zvsTQMALNAFDuHqAh1bLPP+AodwdYGP8hsqYLGRqg2oBqTA0iptedoXDyaAtfU5TfPz3s80gI1ydQsdsH7DFYoTA2jgfsnZc0QAHWSmPQV0kFr540FW9sTyE8tPLD+p6sKFa1jC/h8CYHWhGusArsay7/YFWJCfYx3A1ViZrzoLYNGrJxttUgGlgTUnvv63BLC2PGPRZNXPcaNavUIGrL24gvGjABq4oZw9QwPoIDPtKaCD1MofD7KyJ5afWH4qsfyorklRSOMMZssM2d911r8gAlZyMPRLiHD1UnKAsy/A4g6GfgkRrl5i31nVGQGLXl3SpgLT1GO9mkE1J7118cDhc25ab+ff76YJWAlkrREqYMHp8O+yIGjrBNDAfZXqTaZeAXSQmfYU0EFq5Y8HWdkTy08sP5VYfhAB60nWcT8ZGGCB+lHNR4Cr+ey7qgoALFA/qvkIcDWffVdVJwasNVSmBR2oWxCARTNhANVJVPdSvUq1kKqJaSF77V72ngGuC4itPdgNrK49rjtIbH/ZKpafWH5i+cEHLPo7LNodSjWa6imqD6mWnnH8w2T+3t9v+dux9y9gr49m7+saAGCBDkEArENM749Yfw5BAKyf+35ACEncta5nuFq/0ClCVnkPp5qacbhimuAzv0gqNEYBwbIHI9AYa3xQ7EFcJIiWP0hyZk8sP7H8VGL50cibPlTnUH2iaccn7HN9CgYs0B0WcHWnzb2RH1DusFx3VRUBa9W1NtXmjsGqmoVwcLfIXaFiDaN6y6AhETWTfZdVA4dtD0IHWag9vv1loFh+YvmJ5UfTXwr5sgbVCVSLLO1YxL5njQIB62uGU4Xz2WdDAayvGU4VzmefjYDV8erFdhP2R4Kq/izkQy+23quqKMBaK+UgRVvBd66p28C5tsegoQ3CHt/+0lAsP7H8xPJj6K+cvOlLNRnZjsnse4sALNBxBoB1rO19HUyxH+ci3lUnBiz+WpNqHTalB5C0CRvl6s/tOqxh/4fRqX7sfX1ZLK01827gC7DWo3rBQWOS6Hl2D9XGzYs9Go1tMPb49peiYvmJ5SeWHwt/ZeQNrPn6wJEdH7DvLwKw1qCaoQFXM9hnQgOsNbidmyqawT4TASuAK6cd6Eb1S6pxVJ9CUFO2zvK/VMOp1lUBLJiTn+6wMUkE9+it0LhFewKyR3FNSEj50zvaU6ry0zvW99S8qWENu0s7PmX38Q1YugveD8G4p6NNIjoL3g+12fRRSYAV+G7HbyssDYDp9iOzAKsHe5oingQLPntkJCraE6A9GZ1jiPkz1aM9z5bQntDKT6fPnxTAAtB7x5Md78hg2ANgwYjUmwpwNRNj9MohYK3BwnTkwdVMm9GreNizvRRt3I+qQaP+XJQGWJd6bEwSXZqRsGhPgPZkFNiYP9GeWH4Q7JHkzd2e7bi7AMACnaQAWCdh3c9hmJOTFADrJNuwJZ0UsGAN5Q5Uh7GdsJewtYygK6jOpzqOhSPpYwNY9D3foqozqD9HiYC1K5tT9N2gwD13kyQs2hOwPZLCGlr+7FKgPd8ugT2hlZ+YP+n589MC7ADtUwBg9aFalgFXy9h7QgesPlTLMuBqGXtPBCw1bcjWOT2pCTzNVP+jupBqWwPAelr8zqGXkA6X5L5fUn09uVEXqpcLqsSE3bsLl6hoTwns4QpqiPkzLdpTqvIT80eeP7CwdlZBdsxi9/cJWKB/ZgDWPzHv5ThQ7z8zAOufGIF3OwFg7UE1ngXuxSjTr8E6qWSpQo5tu8q+49S7CZk5V+leZyaJ2MfG6Akvt1Gc4k1Tn5a4hGnZc/A1hDzzBiHzl7SnymnvtmWGb3uAcO+f2t6euoY2G8FW3/bIdNXjbf4CHXuL9dOttj1jnl59/zRp2mWVP+Az0SYo10WUH7gnlB9V+cofuNdHX7SvY5BPUJZ8l58kn6BOJf6C+m5oi1H+5LV7YB/YxF+Qf4o2JvlzWIGgB/p5AYB1YAZgHVgiwDowA7AOjICVCVa1VFMclms46eAI/sFKYtto2WehHYS6D/1TTh/1XJKYiTYdNd/YWiR4IpcwZXsggQAvWRd0nL7sgY5I7IT4C2w1BBoje9LyjL8MIWIiVxm07YGykndp2mWcP3llSANiUOyB++lcru3JK9NwAej4LD9wv7QLbAWbXforr93j/26YX0n+PFswYD1bAGD1pGqQwFUD+1tZAKsnVYMErhrY3yJgdQSrXlTXsak9H+UbQiwMTLHtwbS2B/oLqPcwiJJRlxfDl3zTdPhNbEQsAauJ2aJlDz9KlDwdjhrXsQE2gAgje5KnWrjAtsQeHijATl/5I+ssxZE+Q8CysocHTqQRrMSeDXTsEeEKfAOAIwKgYfnZQNceXcAC2zXt0fYXX5eg7MADC+QHX9bhgnLu2l+y/AFfiaNrBpClnD957R6MUvNlCvIvGZXUyC+wYSeTdWD7XkfII9MJmbe07T7wc9wrba8brgnr5xmwQJMlgDUZ+z4eDkufLAGsyVhnc1ZYKIRt2AkHvh8illIdIrFnUtrINN83ZYzir6xiw2TanbTYuCIAFmG2HKEzRZB1b75BM3jC1rZHBAexgefBxnAU6wgTf/ESpywsAMvYHn4EDexBrCja9vAgJZYRvowb2mntr7wOXtN3RvYksAA/xSlu3haDPNK2R1xgKjZsfJ03GLnOtEe13ePfI45+AlRptJe36vrq9AcJWdEkh/FG+voZDxqVuSMLAKxzJYB1bgkB61wJYJ0bAasDzMCU+DKdcrn3lYQcM5aQEY8QcuEThIymbcFZDxNy1J20rl5uVM5HCWsxx6o+8KXMcsypMqnE/NMZ/zsCYN2sYw/fmMqeBvnG2NA2LXsAHJKnaBnQ8fYaQs3NJv7i1z0hTMVZ28N3yobTb1n23KKzdo8fmckr667t0YVTg7wz8ldeHbKoY9r5wwNK2kNTUgcNRooz80e13eNH0mSjaHl/FxaZK9v/m9sJaW7JHvGEvx8xRjtfxhQAWPtLAGv/EgLW/hLA2j8CVju4gujoK/PK4eDzCDme9lWPvkbIgmX5o/uf0zb9Afqwc+QdbZ9VLOs3UXVldp2ZNkjB11toh1JGsB6rMgnsxzcsfCeFAFhTde2B+wMgyBoqBMCaOggx8CE/WmK42N3YHnHdFd/IWwCWkT38E34y3Ao/0/zoyh4e9NIWHie2GdrzHHbgzMRvaUDowh5+5FUst/wossEosXb5yXuoEt+DmT+q7V5em6PxoLVUx/4ZH6tNK786x8hPvgGrRgJYNUUCluxSgKAaCWDVRMBaBVc/z5uS3+58Qs6fQMgni4nx9cECQv76ECHfGqlU3q9jtm0pm6KH/itZSgJtXsaD3JHwJZ/rNrjwxXzDgAhYn5nYo9IYQ6YUZQ900vzUnEU+GdkjLlKGvEAYTTO2hwdN2eJyKLSGoKVlD58H4COALPATv4vQYten0/Js6LPPTOu7bA0WvM77z8AmbXtU8kD0K5Y9Ku0e/yCTBpw82OdMYyov9P3R1Xodzg+u0sqXz10DFr3WoPoKO8x3vbV6V23wu8eqGlfBFf19rXWqvkn/9nWqddn71oLPhQRYYjrW79Ftg2V71jYmcAW/f617N2k6OhtgsZ2CjVll77e3E/L+fIJ2zfyUkENvVirzf2E23pW10ztjR/Acqq/AF9TbNvyIgLUMwx7Z4mXDjtLKHv7pns8ji1EaI3v4RcoJbSMBlpE9KpfhTjAte8SNB2mXxdZ/tPLML5y2qGfG9mQtvAe7NBe4G9vDT3OnwQn/MKNZtrXskbV7fJ1Pm8JVeY+u/ni/Xkdz4j3a+YIKWAxEAC42oKqmGijqNw9XzU0AC36XvYdpMwYsa1N18QlYKulYtMeQuQlgwe+q6ahkwKLlad1BGYeWw5Te9c8Q0kLwr6ZmQi6bRMg2+ZtehrIAp3M06yNMd+6RRHJvDgiwVmLYI8KV4eiVtT1pW7V92sPbwC9SRgIsbXvEqUp+lAg6aR50DKactOyRhYqAzlkW78kQIFDKswjJPv2V+EzceSrLNwMgtio/so0k4kONZl5p2dOJAGslFmDRqyuDiJoM0GjVEeOqXkkAC37Pez8TQM56qqBlAVjK6fhi951eSQALftdNR4UC1ri08rb9+YRMmkmcX7CzNmdt1lyqddixPPMU6wqMyB3Bn0W4OCDAWmhrj2zbfVH2ADgkUxQiPBhClpY9Yl7wkIAEWNr5Ax0i2AH3T9uYYLGwXMsecapSnE7iR0sM1zwtxKhf/FrCIsozD1cAUmlAbFCmjewR/ZYWNsKgbGvZ4wGwlEM0wJSfzjXsCu18sQYsNjJTowgYAw+9s+qOBLDo73eqfo4bDeruCLC00jH7O9vfkQAW/d0oHZUEWLQsHZC13mrqbOLtenxGLmRdyWyGUCWPKJzAsEu7MkNf+CggwHrPxh4ZXFkumn4PI3/S4MHANmV7ZOuukNfzoOcPwmiNlj18R502DcjnocE0M0r+8KBnMV1pZE9eWAFLIDbKH5Vgvj7KjwfAWqmTL6/NVetUpuu30+/bAhabSqvRgYvNv1c15NA7qsaA4HdNMAH1cwBY2uk46BvrDXnnO9uNAcHvJumoFMBiR9S8l1bWHp5OvF9j8uvgIM7+wYPaDph+mOqFQW1nFV5JtSfVGh3KDH3xPwEB1r9N7RGn4wynLNDsUd1B58oe2fov5MjpTvLHEv607OEBy9HC8qcx8kdjWz+6PSq79iyA2Lj8QD4kEZXFQMO8PZr5pZU/snaP312YFhdMA5gX6eQJhF9QCdPwy1u18/s/CIDV3QAsbFXtALAKSUcFAdbv0srZuY/ZgRL0rcfcsnqXn+rVkj9lfo9peiHBlwcEWJeZ2CPClWFQUWt7oHEFW6BTShvtsOywle3xBFja/lLJIwsIBXuuMIGHtI7Y0l+X69iTF6sLISjr5br+0t2159JfJkDqMn/ywjSkTedqlG/tA6dPfaAtoGhaoFH4u0GeXjHoXPNOlbv6egaTr8JNseCgUtJRIFytQfW2rIztcRl9WGpM75tgmULWOlB40Nrj4tXfd/44vb5vYR0hu1yUueC9xhSw9gsIsPbVtWfUOLQdX9b28E+maetRLKeclO2B7846IFiMYJ4FPJj+UskjviIZ2LO/SdlxNEW4n449llv6Ve1B9xdfljTDIuyrmz95wXwtgVQrf9Lavbx4dxrl+yITP0PIBgiw+OmXbVHd4ef909peNyw3ByIBVhXbcVftGEg2ZaESqhwBVqnTUSBg7ZlWxsa/ng4/x7A25aBr0t9zvjC6DrClM4oF150vZNaBC00Bq6duiHpHgLWM2aJsj7j+AxmutO05WCgAYmfDP+kb5JW2PY5jKhnZw+eRbGE5P72jORKZ2LM2VZ1u+YFOTxzF4uHGYHG5tj1502+Gxys59RefR5obAYzyh1/wL9tFyIdo0GwPtPMnrS7zUCquA+X9mQOAYMM3qBoKOJuNF9z/q4iABVcXNiqzoe56ppxddxAqoad4M0eAVdp0FAhYY2Rl7KfXZk9t8+sUZYe88w9+8PdjbpGPFuddMMK7+6Wp9eAj2RorFcAC3R4AYN3OOeJ23adrlcu1PTKHJqNDIk0bQI2RPQ4B6/ZBq09A17JHPA8xySP+yV527p2L/OHzIWtHmkGYBhR/qawTc22PmBdIoSxQyk+y7gpkeaC6dv6ktXvigx+Ua9kB4jnAnOTPuIIB64HET4hgIl4QaLM3m3oDWOnHQKM/By417P+bU23C3rc+A5weWV/uELBKmY6C4Kpr2prCf+VAEH+g/V/uSl8OdOWE1e/nIQs+M1NxA8iNz2bWhd1MAWv7AABre84Z2+t2Pg4AS9uepHGVHaiMEJTRyB6HgLU910Fq2QN5lOU72UiJy/yRPRUhrOlD8ZdlmAg0e/LyyGD02Lj88EFX09Zr+Cg/We2euKPZIL+S/Nm9YMDa3QNgOb08AlYp0lEQYO0oK187jCJkaUN+3w3wJE6xy+Aq7TPJFOOt/26rr2l1E6bTM8I2nGMKWKD7bDrrnLDxebpP4pBce5LF0qpybY+4yBwKQHLsCghGRwx3gVnbkxbq33Dt1X1cuTEuPwCafB4BmBrmkSx/HtRd6yRCH/zfEIYfsLWHf4hIju2xGYXAKD/JyB5fphHLz4O6kCXuIkxGigzKj1H+5LV7YAeUZz6/FI9fEvPn6YLg6mnejrJPUUUVCljDZWUMdu+pXNA3ADAlcMTDE6y34o8443WM5EEL3p/18HNY+lE6E20AazObtSKWa0P6SRwS7QnYHkkHGVr+bF6QPXDPzUtgT2jlJ+ZPev5spxsTC0Er2X0jYEVhAJb0TL/bntebhYKpfx6a+J2DaYJRK3gQSt6bNxp/+aT0yO42gAU6voAG5bgMp0R7ArRH0jmGWn6OLMCeI0tkT2jlJ+YPK8+SvPmbZzv+JtoQQSHKArBelJWzlz7QAywYeUp2DMIoFsASrLECwf8Pumb1dGDyurhxKu+amL0kpJcNYIFu9ViJb1FwTLQnIHsyOsdQy89tHu0ZU0J7Qis/nTp/uPuKgkXCT3qyYyK7XwSsKCzA+lhW1r5Ymg46yRRfAkqgJL5VWkwseM+gnMPp865Zn2fWja1sAQtC2U/2UInhHj0UQ+tHewKxR6GDDDF/pniw578ltie08tNp8ycDsEDrUb3j2A74/j6y+0dQiLIArLqsjSJpgCWb7ktGosT1oPyaq2S9lrheVGVjHAQdzagfQ2wBC9SbapbDSvwGu4eqc7zYo1FYgrHHt78UFVr56eu4Y4Lv7qtRfoKxJ9Dy4yV/Qm5/MvKmRvcIHQ0tYN9fFQErChmwOpS3nS/MBp1k0woomfpLRqaSkSqb3fNpV8PK7F21GICVLDqd46ASw3duoltpXdtjUGCCsMe3vzQUWvmBjmOeA3s+NTlGIRR7Ai4/TvMn9PYnJ2+GUjUi29HIvrcqAlaUA8CqF8tc7QXq03bi1B/8Hxat89OHyWviGixQMrKlAljLV2TWk+9gAVZycvRixEq8mH2nUaV1ZY9FoSncHt/+0lRo5edbgZWfb8Xyk6lvddb2RyFvDqdqQbKjhX1fVQSsKEeAtVh3ilBlbRXsKuSn/cT3wd9UFrbz14JlmXVlB0zASgLdYWxXhu/4rm2lxbYHoeAUao9vfxkotPKD9fTf+sSPUH4KtacE5Qc1f8rS/ijmzelIgHW6yv0iKERZtHPvycreZ1/aAVbyOvyEHYb8+/g1XLJApKlrvz7NrCsDsAELtK/l01IT+w6USotpD0LBQbPH4v7e/GWo0MqP7dP/qid+pPKDYk8Flx80f5Wl/dHIm+ss4eo61XtFUIiyaOemysrfC++ZAxYffFlcm5X8nw9IqgpZj8/IrC9ruwAs26el4diVFssepA7S2h6E+3vxl4VCKz9nYDzxI5YfK3s6Qfk5w8UITajtj0a+QDiFpwzteFIWjiECVpQDwJKGO7lpihlgpR2TIwMxHrLEswxl18UT09dL2gYazdM9BpX4bleVFsMexA7S2B7E+zv3l6WCKT/0s12o7jc5toh9Frv8WNnTCcoPir/K0v5o5g3siJxrsLi+r859IihEWdSVU2Tl8Oix+oDFwxUsXocr2W2YLHIXpxITyFJZj3XgDal1ZrxrwIL4KB9qVOIP8rZnWzrN2h5kwDKyxyFgofvLUqGVn3U1d4bNYZ9xVX6M7OlE5cfaX2Vpfwzy5gca05bwvr117xFBIcqiruwkK4vbjmyLO6UDWBC+AYDpGO5AdTFsA0wfipfsNfH6cEFmvTnDNWCBhmk0KHu6rrS29iB3kNr2OLi/U38hKLTy80MNe/byUH607OmE5cfKX2VpfwzzRjXq/C0m3x9BIcqinnRjcdY6lMexL+Yfj8MfgQNwBYc7y6K+Q6R33V2D/HXFZLwgo6aABboXa6oAqYMwtsdRB6Vsj4cOEtVfSAqt/NyvONXkq/wo29NJy4+xv8rS/hjmy9epvlQIDdE3AlZUAZB1u6xM7n0lIU3NcuCBMAwJXImC6UCALRjVkkV1h9eSqUOIAM/HypKCXCMhu6UfHv2+yVIM04oMQfdWZFTiFew9vho4Y3scdVDK9njqINH8haTQyk811coMe1ay9/gqP8r2dNLyY+yvsrQ/FnlzTg5gnW363RESoizryl5p5fJfL8vhKllTBT9hZApGrgCq9rjYfOdscp6heN3wTObnLjRJs01FvjnDmJt9VVpbexx2UEr2eOog0fyFqNDKz5isQ4ELKD9K9nTi8mPkr7K0P5brHJem2LEk7ZzBCFhRHgCrCzsWqkPZhJGjRfUdpwaTtVXiGYLwNwCuZC2WKlzB98mmED9eTMiOozMf2Pr5BqxvZSRkcAENnJE9DjsoJXs8dpAo/kJUaOVn+wx7tiug/CjZ04nLj5G/ytL+WObNP2xjXkXAUlPdnrWFqoSQdXRaPfnDvfKRJZs1VSpXcwshv74tE8z+aZpe24r8vMSYqT4rra09jjuoXHs8dpAo/kJWaOXn/yT2/F+B5SfXnk5efrT9VZb2xzJfhqR0FDtFwIqAVTBgdad6Nw1mVONiYV6XPpUJVzC9v2VRgPVHiUF/LLCB07bHcQeVa4/nDtLaX8gKrfwM1w2a6dh/ufZ08vKj7a+ytD8IefO+YMd7tt8pB4whVfXDaqvqWzv8Ia0/6+nPOqbVr7e9L/md/W1d+tp+9Pe/U42nmklfW0DVQH8Hwe/wGvzt7/Rz+7V+ZtV9akMErK9QDaMaRfUo1SyqhVTNTAvZa4+y98B71+osgMXK9n5pQLMN1SPT/cEV7GDMmVb8u01abStxjcSg/gU2cNr2OO6gcu3x3EFa+wtZoZWfAbKzpwosP7n2dPLyo+2vsrQ/CHlzrWDHNS4Aiwcr/icPWKvV+v/uVIcxaFpJf5I2DSF1TPD/9j/bvbaSQhl8Fr6je0CAtTPVGKolda22amkJ++zOnQGwWPlO3Qk8+DxC7pvmHq5ufLYN6HLi6K1TJGBVCYH/PvQ97Gxrj4cOKtMezx2ktb8cKLTy87FQwYouP5n2xPKj56+ytD8I+XKI0Fkc7ASwYPRqmAyq2kMXfU83+vN4qg9WQ1UbWNG/tUmAKQlcrfrJ3vsh/f8J9P/dCgSsHameMoCqNMF37dAJAAsC7s7OGj0aNYGQxiZ8sIJwDKeNUzovdA/bdGLHpLk/gAZOyx4PHVSmPQV0kFb+chzTKITyM46z56EAyk+mPbH86PmrLO0PUigUvsPY1NUIVv1qiFo9Hdh+RGtXqtfbg1XtKnjif69r99rqkS3x9wS+GIjBd+/qGax6Ul1F1YQIV4ma2Hf3rFTAYmV8B6qGLNDZ/3pCXvkID66mzibkR1cr7Tg8FSONGBX5XM6oEQE0cFr2eOigMu0poIO08pcDhVx+Lgus/FwWy4+dv8rS/iCd3biUC8/Qxe0U4RB+tIqtyxrSlf5/BH29KWW6r/0oFv+3YbUdRq46TBsOazeiRaFkyDn0964e4Gog1esOwErUq1Q1lQpYrJwfmQc7MGV48n2EvPGJOVhN+5CQ4+5SDucw1uZ8V2zA+iVn2BEBNHBa9njooDLtKaCDtPKXA4VWfn7D2XNiAOUn055YfvT8VZb2BylvZjA7ZmB8n+oaLPZ7T/rzkVVgNEwYteIAqv20n/D6sNW/8+Lhqt09htU+Ql/r6RCuaqnme4CrRPPZPSsSsFhZv0A1jtXBNxJy63NtsAXhFbJCL0yfS8j1zxCyz7VagUgnU/XAShtGJR7KGTc0gAZOyx4PHVSmPQV0kFb+cqDQyg8fbfhHAZSfTHti+dHzV1naH6S8eZLZ8aRrwBIWta9N9SwPUjwoiVOF4mv8SBcPULKRLRmQ0c/+l6qnA7iCRehLPcJVoqVpC+ArKADpWN2I7DuMIuSA69tGpv50f5uOpb//7B+EbH++UZT3t2BtGGbaMCrxV6lmMvXS/bxtHBBbexzcX8ueAjpIK385UGjlJ1l8CVonAMDKtCeWHz1/ecg/rfxxDFhHsmnCI10CFjdqBepGIWdynbArUL7uqrb9aJRktKrjui35tKEEuh4DWxDhqj/VvALgKtE8ZkPFARYr7z3Y6BEpSLBZpgY7XWgNHXX2plS/obqa6kmqd1nMj6SALGSvPcne81v2GdeAo9tBG6WjqOB92P4IoMP0Wq5cdDqOASeo+5ddofqvLHnFx7hi67AuFtdJZa+lkoxSSV5Lkwy6uJ+XIMFVD6ppBcJVomnMlkpagyU+LL1UAFzBAeiDXaTPdgQAiHokC5xmWmjeYQHX+hcRaA0xHbNM0oEc6M67PxxFQvaWjs4OWIE1sKUDrBjJfAgfbPRHVC2rFqwPE3YBDhN2Bg5LG4VKAahhmfGxZOu4wJYfI7RRFwcAV4kuqmDAAvWlescjXNXDVL6r9JmC1bZU97PItFgFB77rAartfAFKCOlAApTC0oEMWN7TETvJqCg7wGKhGtZOYlylTdulLWaXQ9IQ6chW2qhV+qjWkA/ANov2aWuqFQEBFtiyVQUDVhKw92MPcAWxrvZ1mT5dsOpLdTtVi8MC1MLu0dcVoISUDks4KTwdSIBVWDpiJxkVZS5u/dU5sp1+skXrqwFKHIVKi3dVK4yA1ZK0e3UMUtr6t/Ms2qeHAoKrRA9WOGBVsQPSFzsGrONdp08Hrg4W1r641kJ2T1TACi0dFhU/iHQgAFah6YidZFSUBWC1rb3qTcFmUTvQke4eHNIhPIM8plX7acF2oDZMPnKVtfidfv8S+rOPQds0yPFDn83D4qAKB6xkR26jI7i6wMcSARWw6s4WDxdVmK5mNlgBSqjpMKj0QaXDAqyCSEfsJKOi7EawKMycLI4cpU3rdQwuWttxZGtY+7VY7d4zrONC+Y5Tj0Nk7zvZoI26OkC4SnRVJwCsKhZLDhuuxiaBd4sGLAjVPyGAwjQh7dgAjWMNgkyHwfEMQaXD4piJYNIRO8qoKPMRLAovr6btAFw1miUZ2er4vl1IwzG/IivOPpU0nHYyafjVgR2nCIfVtgvrIAsBUSdMPzK9avAA+HnAgAW2desEgAW6AhGuplH19LXJJQ+upgRUoKbIIEuxMw82HZpQElw6DOGq9OmIiopqXeTeXxapXTqCxe0qbDdC9ePvkpW33Uha5s/vEJG7ZfYs0jji1Ix4WkNSA5SK67Loz/4a7dSuAcNVol07CWBBjKypSOEYNvO5izgNrrpSPRxggXqY2aYEWGVIh2JlDzodGo1WRaQjKipq1RThsak7+YZJ1lqJU38H/IA0v/VG7llyTQ/8k37fzhnrrDqOYAlH6MDvx2i0VWeWALDO7ERhWgZQLbMErN/4DtOSBliXBVyortQArODToVjZg06HRqNVEemIiopKAGvIrXUpca1k0dnbjSj9YFfS/Mbrygf2rrzlH5J1XR1HrTJsuUWjrbqvBIB1byeLg3ecBVw9UEQcPBlc/TTQnRO8DsoDrLKkQ6Gix3QElI6oqKh2U4TPpQT57LhOSoCeFddeRrSuFSvI8l/8rEOw0azI7sJo13MagDW9BIA1vZMBFixMf94AruC4qI1CAKz1qb4oQcH6gtmaVjnQ09Hw5xNIy+KFpHH0CPR0ZFTyUvmj0tMRFRXVYQTrY2nQ0LzDnenfWz76kOheK++8ddVaLvkh0vwUZAfI+lgDsOaVoL36vBOe5LATVbMmYJ1e1EkOImDdVIJCleimDMBCTUfDqb8nZHl9Ww1vbiaNl4xETUdGJS+VPyo9HVFRUR1GsJaI8CSLXyVO7S0/6EfE5Gqa8VqHmFpiGIcOMbVW/3+JBmAtL0FbVddJj8q6SwOu5lKtFQJgbYF8RIlrga1bSioGajoazjmVPjatELa2tJDG6y4vVToqxR9FpSMqKkq6yF0aeb3DTkHubEL4ufzow40Aq+XTT6QjVmIsrQ52MMjSAKymErRVKzopYG2lMYp1YpFnkfKANaZEnWCiMZKKgZaOxovObR2xSl0ScMfNpUhHpfijyHRERUVJR7C+7BB+YVhqmITVvx9sNoLV8s7bqcFK62QHTLcHrcUagLWoBO3Uwk4KWKD7FOBqHtWaIQDWRoEdaKlz8OVGXKVAS0fj1X9vHanKXRPw4L2krnX7cJjpqBR/FJmOqKio1ECjc6TnAA6rFQN9th9d2mtnadyr3Pb2oX+1C/nQIZhpxlE6VHM0AOu9ErRTszsxYO2hAFij877HF2CdUcJOMNEZXKVASceKW6+XPz3VLZNX+omPkbq9dgkuHZXij6LTERUVlTqCNU0WmkGM1i4LDLry3rGaw1ctpOH3R3Zcc9VutEx2iPQq8JqmAVhTS9BGPdeJAQt2FM7MgCuYQtw0FMB6BdPx9T/do3UhOIBH07QXSdNz/yUr77+LNPz5RFI3bBfsQvYqVyns0jFsZ7LiPnmlh3TU/eT7qfDV9OzTpO6H3wkjHaL2+T5pOO8MsnL8g6Tpxeda/bHintvJ8lOOwRh985aO5rdnpra98DdX6YiKikoFrLtlC9k7Bhit7QA9y3+2FyFfzFPmq+bJT0oDl4r3kZ992Kp7NADrlhIA1i2dGLBA52QA1hSV7/ABWBthOr3xyotJy+JF6ZXk3Vlk+fG/xi5oG1mnY69dWgFECk8USHh4WjHmhkwIKzQdoj8uvyDbHxRMlv/+d+H5Q6K8y0EDFqcJo6KypwhPlQPVkA7xqjqEVGCL3VsWLciHq1dfJvU//r70AOm0GFgS0DpVA7COLgFgHdXJAWtQBmCdEgpg/QLF2QAoT45XexRpaCAN55yGWdAOt0rHD3YjTU8/KZ/+m/Q4qdv72x2nEW+/Sd4QvPk6qf/ZnsWkQ/THE48qBvBrJA2jzgrHH+EA1uGxE42KyhzBGlIvCfTZIe6VFHrYSNYv9iNNz/5HPitYX09Wjh1D2+hdU84erJUuru9oT+v/d9IArIElAKzqTg5YoHdTAKs6FMC6AmXd0thb9ObTG5aT5ccfgVXQrjBOx4+/S5pemCKHq4fvz5xCWzH2VjlkzX6ndZeM13SItt19m+bq0RVk+R+PLd4fYQHWFbETjYrKBKwuFGDmthu1Glabc8hzrRDDqu21hl8dSFZcfhFtV8eQFbfdRBrP+yup33doZsDSjhHjh8jXfg2r/QBs1Utb7YyA4eo11aPWKhywbpDA1Ueqn/cBWBNtnb38N4cQ0tSkvSOk+c0ZWGuAJpqkA9aKNU9/WT6oc89t7UaD6g/bVw4y99wuf/Ka+xGpP3w/L+no4A8KrqSlWd8fH70vHa3z5Y8AAWti7ESjojIBC3QhH2uq41mB8oOYO07xSRbLD6vNmHasTR+1GibsWhxWe4F+2mqHBwxYwyNgtepXEsAaGxJgzbJ1dtraJaWBrOHHYxS2WbrpqN9/L9L89ptyuLrp2g5TiC1LlpDlJx0pT//9d8kha97nrfDpMh0yNf37SXN//O20QvwRKGDNip1oVFQ2YFGI2YRCTWPHoJ/p03gdAoUOq5UebyNEYpfG1eoYMb7DwvpG+no/A8DqQ7U0QLhaymyLgHUuGSwBrD+FBFgLbR3esmihcYe+8l/3YBS4BbrpaH7tFQkRNZPGKy5M79wblpOGM/8o3X248pEH5JBF86b+gL2dpaOD9v42aamrM/fHUxMK8UeggLUgdqJRUZmR3Ns0rHZMfc6oUsco75K1UsNSFq1Lzh/Meq8AZ2PMAbJ2dICANToJEB4Bi3SnWiEA1l6qnxcvF4DVYhWSYf+9iM3V9L8XsY43aXFZqFcTyErSeME5UshKW0Bef/CPvaWj/lcHWPmj+f13g/VHAYDVHDvRqKjcESz42Y+qLm3USjoCNazdAvSO4R2G1WaEZKiVTkmKYSFabRpW288CsHpRzQ0IruYymzolYNGrG1UvqnWp+lJtsPWIFW/zgLXBDy/bib7+TfZ3eN9XqboXBVjNhXboM2dgFLom1+fddRjpuvwCJQCAuFk+07H8yMOs/NHyydxg/VEAYDXFTjQqKjNMA4Os1p/D6yTH1Miiqst2E3ac5ks7LFop5lXy9+H2EFl7YECAdSB3vF3FAxa9ulL1ptqQqj/VQFFbnblkCgdYLd1799ta9j6qGqqNqPrA9/oCrMVWgLXvULsRrBemYBS6xSbpaJo80YJEWkjjtZdmAkDTfyfrRnhfbO2Pg35oB7xvvl6YPwIErMWxE42KypsiHJIsdl+D/v6UbOF6OlgNSd0ZKIZ36Dgalhv/ajJ9f1eckbraawKAq6t4uKpkwGIjVRtQDUiBpVXa8rQvHkwAa+tzmubnvZ9pABvl6uYasD63XoP16cfGHfqKu8ZgFLzPTNKBcUGEdNn3tYZp0N8h+Zm1P+g9rdbEQWiKgvwRIGB9FjvRqKjsEaxkHRaDrL7093fTwSd9tCrtDMG6tBAPKWu82O7Dd+nvffGmQmt7UD1fIFw9z2yoeMCiV0822qQCSgNrTnz9bwlgbXnGosmqn+NGtXq5BKzp1jGX7htr3KEvP+5XGIVvukk6rEawYLTn3bdJ/QE/kAKAz3R02NVIIangXZ3G6Vj+h6MI6tXS0vqdpumInWhUlMIi99WABdA1mP5cIFtP1W5KcFj7Bex1kpAOdZL4Wh3XXnX4He49GH+9We3GVHMKgCu454YiXFUiYNGrS9pUYJp6rFczqOakty4eOHzOTevt/PvdNAErgaw1XAHWQ9ZnDx7849YddgVNDxKWhoe8rcECuHrrjQ4R2xEACyUdEH+LNDbqA+P0l4Pwx4p770TjK4hTZpOO2IlGReUtcl+1k5D//85UddLdgMNkU4Hpuww7TgdKPrc6cCncc2d36QV4xF/+kLPcYrAMrioUsNZQmRZ0oG6uAGsUypl3fz9fb2Bh8cLU4J2G21ZH+QIsCPEAQUqz3lN0OhovPk/PH0u+JPVHHBCGPyDsxaTHreFq5WMP2gayHR070aiorBGsIe1GsOrbRrAS2NqXqil7oXvHyO7yUS2JhnV4jd5ryL7uobJ2KFW9B7iqY/eqqlTAagcjq691PcPV+i6nCPfBKhArbrqmdUomtzNfMB/zmBzC0rCPD8Bqev5ZUvfj7+VCWAjpaLzuMkqDzWr+OPG3YfkDzod8+SXzzRNPP6m7wUCajtiJRkXlr8FqN5KVTBW2vf4r+rMl7WibuozApPlxsdrtQGyhr/3K38hd7b5st7SrPqeJ3aOqEwIWXGtTbe4YrKpZCAeni9zXxSwoDaf+njS/PzulJ29u3VlX//OfYBfEdW3TkQdHrSMiTzyaeZSMJWChpKPjmqajSfOM6SlDPCvJyscfMT030Xk6YIdq83vv6sPV/01tBTSMdMRONCoqfw3WqvVXyQgWN6JFf54gnj1Y12EH4RC1MweFaUHu/Sf4nx6tPdZR/EX4zqPy4KrCASu5erHdhP2RoKo/C/nQi633ch6mATQJtYAM25ksP/7XZMXN17YuuIZo7Y2XjiL1h/zYBelP4gr8JFeABWnJm26yBCyUdKSC1rG/EsIxzOiwhiwkf6yCrEP3aT1ySHkdGYXJtBFG03RERUVlnkXYAbL419n/T5edIShbvC4L6VAnOcSZe+9pxaW/9nQHbejpKnBVaWuwFK41qdZhU3oASZuwUa7+3K7DGvZ/GJ3qx97Xl8XSWjPvBq4A67iAD7XM03FcYT8OA7Aazh6uP3J39nBbwEJJR2Y4jbpl7dcnBeyP9sFTD21ds5cLV7Peah31wk5HVFRU+ggWD1UJUPEL37lRrgvSzhFMiWMlPRRaGNG6oFjAbO0/r0NsP69ThatOCFjwvk2pfkN1NdWTVO9SLeQCjS5krz3J3vNb+EyV4uUKsODgyEUlhKtlYDtpfzjnIlvAwriKSkfm+YsUQFbtrrvpmqD90QGyjv81aVm2NCNkxqzWY5tcpCMqKipvBGvIarAa1h6u6lZPG3ahv98uC8cgPcRZshBeeO8dVF0CAKyuVI8htDuPse/qlICVof5UI6lmSQ52VhV8dhT7Lq+HPSe6pISAdY2kwF9SQsBCS0dm3K+nn+QCpJ4ZtD+kkPXH46ThQOD8RD4emYt0REVFpZ9F2H4nYa10bRb7SQECor3LI7iLi9+lR+q0vWcSVdfi07+q/+xNNcuizZnFvqMqAtYqbUt1P1WzBViJgu96gGo734C1MdsWWha4Als3SQkGp52Opn8/iQZXEMC0qHRk7vIce+vqAK+4uzi9paPhzD8SsnLFarj66P3W44FcpyMqKio/0Gi737npQX7qkP5tPfrzvaxI7u1HrJhWj2C9R7Ue3CMgwAJtT9Vo0ObAZ7bVhasKBqy+VLfDuYKIYCWqhd2jry/AAp1dIsA6O62AlS0dGZUXNR18bCwHC9y9paNh5F9bw0+0zP3IxcaJs2PHGRWlHgerTm39lTiV+G36/5XiyJUsqGi7vw2rXck+2/q9gQEW6DSDNudUE7iqUMA6WFhT5Vpwr4N9AdZaVLNLACWzma1phb5U6ciovKjpgJANrdEyli4pdTrapguPxR65yk1HVFRUdqDR9rBV2wHA2k0XDqsdsXrKr+OxOnWS6O305zn8dwcIWN2oXtdoc15jn+mUgMWBVne2KJ0UJLh3d9eABao1HOb0JbBt57wCVpZ0KFRgtHRAvKtkt12Z01GkP6KiouQjWGK4hnbThMNWTxvWrV4Mvyb9fWb7qULJ2YOrR69m0p9r8qAWIGCBvqfR7nzXFK4qBbAo2PSkmqAKQ9/9OyF//hchY6YS8t9ZhLzxCSEfLiDk3XmETJ9LyIQZhFz9NCG/uZ2Q7c/XgiywoadrwAKdFHBHeJJqAStDOhQrMVo6WurqSNN/JqGmQ6MxCtofscOMijI/izAtJha/PquuI5DtKTnyRh5kdFjtniLMBQpYoAmKuwarOjNgMbiakgc/3xpJyGnjCJk6m5Dm/MNiVl1LGwgZ9wohB9+oDFlTMCEry3n3BNgJ3qVbwEJPh0ZFRklH87tvkxX/vAMtHQYNUpD+iJ1lVJThFOGwWsnUYG2HRe4dpwpX/W1Sx0XuHWJeTeJGvlZ9V8CAVavQ7uzUmQGLgkxXqofzoAfAau4i+81nz7xDyE+vVYIssKmra8DqSfVCQJ3gC8wmXcAKOh0aFRklHU3/eYo0Xn4BWjoMGqQg/RE7y6gouxEsaaiGYQJcDZPuONy1Xjg6R3L+4G4ipAU+ggWamtHuPGcLVxUAWJdlgc4el7WNWGFeK5oIufY/hAw+LxeyrnQNWKC+VO8E0Am+w2wxKmAhp0OzMlunY8Xdt5GG005CS4dhoxSUP2JHGRWFF6ah3c+O5xJKDoVufe1lMZgo9/PltIX0gQPWERltz+GdGbAowPw0KwzDr8YQsrCOOLteeI+Qb1+UC1kHuQYsUA3VvAI7wXnMBqsCFmo6DCq0VToaLzmP1P9yf7R0WDRMQfgjdpJRUfYjWHUp4RqE8wjbgZcQpPTIjgc7rwoueqQ4ClaCKUJQL6r6lFh7a3dWwKLgsj7VF2lgc/zdhDSsJM6vtz8j5Ht/zwQssHF914BVxXbtLS6gE1zM7xi0LWAhpsOwUhunY/lJR5K6H+yKlg7Lxqlwf8ROMioK4SzCYbXtdwju2f7/sgjv7V4fVtuHwlSDsKgdAKuR/t5HtlC+BCNYoAck7c8DGHBVYsC6KQ1qfndH2zSer2vW54TsfGEmZN3kA7BAQz1vs29k90QtYKGlw6Jim6XDHK6k6UBooAr1R+wko6IQAEu+QzAVsORrtoaMFw+Aphovn16sDTlMA69jJW3QsZ0VsCiwbJF29M3eVxLy5XJzWProizbpXhDqYZvso3W29AFYoMOomjx0gnCPQ10VsJDSYVm5C08HUgNVWDpiJxkVhbcGK3saUH5OIbdW62Tx+ByqUyRH7ZRlihC0haQd2qITA9YYGcjAovNXPrIbjTrmlrbvOugaQia8rPfZC57IHMUa4wuwQMd76AiPd13AQkkHQgUvNB2IDVQh6YidZFSUBWAN67BYvUMoBSmEDZOOZm0rOY9wW376UYy7VWTa4VLsp74UlidUdUbAoqCyEdUKGcScNz4dfqa9S8iVE7Kh6f6p7b8P3q9z1TUSMvTyVMACmzfyBVigCxx2ghf4KmAhpAMJUApLB/IToPd0xE4yKsp+irAd/AzLOAA6Y5chVbc6tg6L7SZsYK/xZxi2myKUXQECFh+u4dlODFhnyABmx9HZOwZhRKo1bMPFFIQa5FODyXcl7zWBrPunZY5ineETsLpQjXXQCY5l3+0LsApPBxKgFJYOZMDyno7YSUZF2U4RDkldW5UeXLQ9XNGrCxWcyfdqMoK1dOiQ6fS1HvC6NKYW/T00wGL29qb6BtUmVJvP+d4Oqxa6f/jdHR6gr/Wn2oxqI6r1qXpRde0EgPWKDF5gei4zQOgbq98rjmIBXAF4wd9gihAAjH//X+5SX5cFi+sh9lYKYL3qE7CSA3xfQuwEX0oOcPZZwIpOByKgFJIOB2sYvKYjdpJRUZaR3CUjVLLf61dDUVeqr1J9nWpjqmqqgaCPv7fDxASw4PfkdaoBACsMSr5G1ZNBWRCAxaBqM87eVXprt+1uSNoj+vs/ZO9h6duQaq1KBCw2PSiFFzhDMO9KIApGqLLgSgZloPPHtU015l1X/jtzFGsjn4AF6kc1H6ETnM++q6oAwCo0HciA4j0djhaJektH7CSjovDOIkxbZ8VGqXoyQBqYptnf2e6OZKE7/f3OrPdS1TBI614UYDHI2zjLzudrtzkjaZPg95w0gXpXIGD9QgYtB92gNroE030JKIlwBT9lo1Qz57afMuRhK+1674tMwDrcN2CBDkboCA8uag666HQ4ABSv6XC4C8dLOmInGRWFE2hUdjxOsnaKTZnlgcXAZ2u3+UuywP3Z2kGnqnyGjf6sUxBgrZVn36BePQe/853tbgXB7wrp2bQCAesKGbRcPkkNsOYvaZNsQXsysgXTgbwSuAKgSmAMBJ/PuoZdkQpYVxQBWKA7LDrBO4pc5Fd0OhwBird0ON7m7DwdsZOMirIDLDFauziSxabPVEBp4JprrLHF0zttdQoIflf9HIOsriGOYGmqFRYrELAmyqAFYlDpXPzUH0wL3vrv/MObYSQLpg8BrAC2ZAvl+evUB1K/a2JRgPU1wymd+eyzoQCW93Q4AhRv6XAMWM7TETvJqCi8o3LEGFgMsNZGBJA0wcLxNQoArOQCiNzUEqxgDdaavkfiPAHWLBm0zF2UPWoFi9oBkECwhgoAC35PQAneA/9Ppghh5CqBKngtgSud68ZnUwFrVlGAlRaxNk/HFr1Nteh0OAQUL+koKBIyWjpiJxkV5QVC+rA1Uy7gajM2VVdVIGAlV4ddhAz+BnDrxqS7CItarO8JsBbKgos2t6SDDsCR+Jm86T0esEyv8a+nAtaCIgFrDaoZGp3gDPaZ0ADLazocAoqXdHgALKfpiJ1gVJQ3CAGIWC9tt53BiM/GbO1VlwIXuTu7KgywWkRg2eWibNDJAqy0tVf8rkL+dX66MO+Cacu0Y3OKBCzQIRod4SEhBForOh2OAcV5OjwAltN0xE4wKqoQCOnGQjWsz6bG+rFwDWmjPTAatAEDtLWT6cBKB5MKAqwO5w9CzCnVK4EkEbB0pQJYL32Q+vmmogELRg7eVOgEZ2KMXjns4L2lwzGgOE+HJ8Bylo7Y+EVFRUU5B6zFIrDsfKE5YPFrs3gl5xEmf4d1WyD4HdZvJTsRDUewFhcNWKCTFDrCk0I5KqDodHgAFKfp8ARYztIRG7+oqKgo54D1uQxaIHq6CWDx8bHgb8nIlLjIHaYQxSCkeddDr6YC1mchAFYfqmUZneAy9p7QActLOjwAitN0eAQsJ+mIjV9UVJQFOBSqEuXTdNMo7mmAxa/Rgr+LgAXKC0YqDWqaHvphegiABfpnRkf4z5AOuyw6HZ4AxVk6PAKWk3TETiIqKioClvN8ekgGLU+8YQZYacfkiLsIVSK+i9dJ/0wFrIdCAawDMzrCA0sEWM7T4QlQnKXDM2ChpyN2ElFR5qo+m1T1H0F1dsffW//P/YS/tXttBFmXaj/6+9+pxlPNpH9bQNUAqm77HV6Dv/2d/tyv9TPc9wUIWF+hGkY1iupRFv9pIVvk3cx+n8X+Noq9d61OAFijZNBy3nh9wBKhCdZVwWv86/xidv51CEyadUHYiG9flApYo0MBrJ5UDZJOsIH9rSyA5TwdngDFWTo8AxZ6OmInGRVlLh6a+p/dHq7E1xkUdac/D2PQtJL+JPQ1Aj+rmfpzP3mx11bS98NnD4PvCgiwdqYaQ7XEYHfbEvbZnSsYsPaRpX2vKwhp0QQsWMAOwJSMSMHoFX8Ujmy3ICx0h/Vaede0DzP9tE8ogAWaLOkIJ2Pfx0MH7zQdHgHFSTo8AxZ6OmInGRVlB1gJZFULo1jC6FU3+vN4qg8SoFqlEashi4epahGuRnQArw/p/0+A7y4QHHakeso0bIBE8F07VCBgrQthDmRphrAIqoAFPxOo4iGKP58Q3qMbvT25zn0sPUQDpCEkwDpX0hGeW0LAcpoOj4DiJB0FABZqOmInGRVlAVjtR6fajVpxv+9Kf3+9HVCdLVfqyNUIOWgxEHudvrarZ2DoSXVVGjRYqol9d89KASyWZ5Nk6f3j/enAA6AEI0+yw51hui85CkcELjFgaRKyIRkBk12L6wkZckGqTyYZxYFzCFj7SzrC/UsIWE7T4RFQnKSjAMBCTUfsJKOi7ABLWFe1WmeTrlQj6OtN/WUjUjxsjcgAqrTpw/YjWk3093Pgnh5AYSDV6w7AStSrVDUVBFjHydIJR+bM/kIOV0lcq2Rkio/Wbqq0qcJrns783HGhAVaNpCOsKRKwZFfR6TBymp79TtNhU+E07XeSjthJRkXhrMESRq960p+PVAvAJI5iVWeMWvGjVR0Aa0THv7Opxkfoe3o6hIRaqvke4CrRfHbPSgCsPlSLZOk86k7Jeqh3V8MUP+oE4AVBQ+HAZ5M8fUayc/HjxYTsODr1M8vA9kIBix1d8BV2NtR66/fotsGyPWsbk04Qfv9a927fpH/7OtW67H1wQOcaIQGW73S4Aixf6XANWK7TETvJqCj7Eazq9iNYa9PXnxVHqKoVpwWrU2BLNlUoAzL6//+6gCy2CH2pR7hKtDRtAXwJw1pckpbOh6d3BB9Yb5W3OD2ZAgQIgylAXrJo7+L6LFhkf+xdmfl/jXEfZwlU67DzoaplB3Iu2mPI3KQjhN9zTkP/OjtjqotPwCo6HViAVVQ6sAHLdzpiJxkVhbMGi0FWNwo5k6szRqf6py1eF0arOnxWsg6rOh3MHgNbEMGgP9W8AuAq0TxmQ9kBa2OqOlkaay8gZNbnxPt147OZ+Q62buINsNiJ6F9nB3Fmnnj+xe47vZJ0hPC74inp1exAzy6OASuIdNgCVtHpwAKsotIRO8moKMs4WO3jX13cbrQqby3VCMkoVcrolUyydVvc/S5BgoIeVNMKhKtE05gtpQUslp9np6Vx6OWEfPalP7h69DVCtsnO87Ot+jhNuFpbpQNMNPs729+RdITwu+rnuNGH7o4AK5h0WAJW4enAAKwi0xE7yagoO8DiQjP8iKpFXLheLQnFkDcKlRemoTpn5yF7HWz5MQIQXBwAXCW6qAIACwKrzk5L40+uaVsT5fqaMIOQ7c7PzGuwcS0vgMWmbmp0OrOffX29nWZ9Z7ubQAd9Y70hmh0hqJ8DwAoqHRaAZZqOm0FY6bAFrKLTETvJqCiUSO5rt8a4ytgtWJ023SfbVZiy/ioNulLXabXZtLYFDGxNtSIgwAJbtiozYHGbBRrT0rnHZYS8OscNWMGaq5umtO1ezMhnsG1n23TqAFZ3g47MVtUOACuodFiASRDpQACsQtMRO8moKPs1WCxEQhbo5K/FShnJSgvl0OFeaTsTR5DzLEDgoYDgKtGDZQcslrcnZaVz25GE3PAMISua8OAKRsZyFrQnOgkjjbpTUn09d4RfhZtiOTSmI6bDRTqiojp1JPezSW+qRVIYEqcB09Zcpa3bGpEbZLTDKJhkLdcS+rk+BgAwiKolQMBqYbaVvvzQNNyTl96fXtt2KHRzizlYQRBRiHO102il/L0LrY8zWFS9TtruLkRtyrbmVznq0GM6YjpiBxkVhRMH62TZ1GB1zhqpdjA2ov3r1Rnvrc6GqY7va/v9ZIPO/+oA4SrRVRUCWBCt/gWVNMPaLNjx9+ECNahqaibk/94n5G+PErLzhcr5Crb0LBKw4OrCRgE21F0/k7PLC7bm9xRv5qhDj+mI6YiqHH2N6kSq8VSweqOJaQ577Q/sPTGv8EewXq1OA6wRAkAJUMV/bsA5hOx7HSHH3UXI7+4gZM/LJeu2RrQP69A/bQF9R+B6VbPj7071ecCABbZ1q4QyRNPRl+odnfTDIdF/up+QK/9NyD0vtcXQ+tfLhNzxAiGjH28LXJpx7E2awIa+mGmr0j29WyYW2LE3m+qBzrEf69j6cx1lDfv/5lSbsPetzzrUHqb3to2DVXQ6bMGkaH/YAlbR5apSO75tzi1WHtP6Faq/khUrFjc9Op40nPRHUv+d3UndgK1J3aDtSP0ee5OG404kK/81jtD3LKXvPYuqZ4QjtEXu/aszFqenTf3xI1CDzmvrKOctkQSR/IyQE+5OiQafd45hR+jqr9Hp7xowXCXatVLKETsSqOg4YzXY6UIBLKZNqX7DhlWfpHqXaiGXgIXstSfZe37LPmN1X0zAKiIdLgDLZzpcApaPdPhuSOr2rN2M6vdUEGriKarHqcaw1zYvCLA2oTqO6mGq2VRLqBqpPqN6jmo01a5UXQMDrGqq15vGTyD13x9GGk7+E4HfWz75lJDmZkKWLyctH35Imp6cRBpPPYPUf29o69/p9SZVTQQklEXux6YGCB2RHd8KftZeSMj0ufnTPbdNpQ6TTQ2OyAat6vajZcdodPhnlgCwzqwAsOIF0eoXF5CPizF2DLoALIgsO5JqlkXiYFhulCxKrY8OEjEds0zSgVxAvfsD2X7v6fAIVt2oTqb697LD93966bG/fnrpSUc/vfT3R9Hfj3gaXoO/Uf2Jak1PgLU91WNULRBsT0FvUx1KtUYAgFVDmpo+bjz7b62jVk0vvJi/JoO+B97b+Ffa2zY1fRYhCwWwbq1OiWtVnQFZ8PuW5xDyisZW/MsmZazrEo/kkdtyi0a7dF8JAOveCgMs0NCs8A0OBPca6ip9pmC1LdX9VM2ICYXveoBqO1+AEkI6kApoYelArmDe0+ERrv6+7KAfP730xKMytezgnwBoXQafcQhYXajOompSBCtRL1BVFwhYMC342orRF5HGv43U3lEEn2kccW4ykhWnC+2mCJ/rn3NYs3ThOdX5E/T81tDUFh9JJ9io8LfnNNql6SUArOkVCFigw6iaPOQf3ONQl+nTBStYjHa7462rLewefV0BSkjpQFgcWGg6kCpYYenwBFin1B30o6eXHf9bJcF74TOOAKsnmwoklvqCqrYgwDqv6bEJpOEPfySkfjnXAzeQlbfdQZbvfzCpG7wDqfvWDq2/r7z1ttbpwnad9SnDSdMjj8GvoyMoWY1gfZwVu6o64/zB977Q325/7X86QlvmgdHt1319rNEuzSsBYH1eoYAFOt5D/h3vOn06cHWwsPbFtRaye6ICVmjpsCiYQaQDoYIVmg4PcLU51eRlxxzxtI7gMzZrslLAB9ZQPYIAV4kWUw3yDFhfI42NS+t3/T5pfvH/Vkdn/vQzsnyfn7Utbpdo+U/3Jy2ffbbq/c3/9z9S/+3vAXjV0/+uH2HJeARriXRX4Ij0Re3wc+eLzOIZvfyhJOr7iI47Datluw6prRrt0vISAFZdBQMW6AKHeXeBj/ZfBay6FxwP5GpmgxWghJoOgwIZVDosKlYQ6fAAWCcuO/jHTy878hd6op+Bhe/IgDUCEa74dVlf8QhYv1750MOk8U+ncnN+jWT5T9LhahVk0ffAe1d97M+nkZXjHoJfT46wZDyClRqBPfUYHPpzn2vMAGvuoozYV1l2sHtrtE9NJQCsFRUOWF2oxjrIt7HsuwsHLAgCNiGAgjSB2WIEWCGnwyAoW1DpsAguF0w6HAPW7csOP+DpZb/5uZ7aFr2PQQSsgWxnIHGg8z0C1gMNJ/6BND0+cVWnC9OCeXCVaOXtd65e9P7UJNJwLITOIo9HWDIewfqyw0hVytE2/Pu+bTiC9cYn6aEYpFHg24PWYo02alEJAGthhQNWcjD0S4h59hL7zqqiAQs6wSkBFaYpMshS7MyDTYcmlASXDkO4Kn06NADrqWW/pID1qwP1RD9DPzsBEbBudwRXoKVU63kCrLcg3ELL3I9XdbrLD/y5MmAtP/iw1dOKn3zaGjMLBkYiLBkHGp0jOyMwL2ZVzQh53Ku8684X0w+TFqYDZWuz5mi0U++VALBmdwLAAvWjmo+QX/PZd1UVDVhdqR4OsEA9zGxTyqAypEOxEAadDo3KVBHp0AasQ/d9etlh++mJfgY+iwRYvanqFUCpgepaqp9S7Un1J6p3FCHrBE+A9WXdFtsQsnLlqk637ls7KgNW3Tbbc3EbmkjdwEGtS7IiLBmPYE2rzjmcOW0676YpenAFR9EdfIMksnsG0AkxuaZptFVTSwBYz3USwAIdgpBfP/e9izwtMZcFXKiu1ACs4NOhWAiDTodGZaqIdGhPER74w6eXHfITPdHPwGeRAGt/xQXrO6bsOnxU4fMTPAFWQ92WgyEq+2rA2npbdcAavIMMsJoiLBkD1t2yNVdZ5xAmr+04mpDPvlQHrEdfl58/WJ0WXLTjve/RaKtuKQFg3dKJAAt0h+W6q6oQAOungZ4gzuugvAwqSzoUCmBMR0DpMFnkXveT3Z+uO+AHeoLP0M8iAdZoBUA6IiO0wzosLEPW5z/3BFgfdpgiPPgw9SnCAw6JU4S4U4SnSqO4pyxyFyO9w2L3+Uvz4QoO7d1mZHoMrGrJ+qvqjuu0TtXo+I8uAWAd1ckA62uGU4Xz2WcLB6z1qb4oQcH6gtma5jT0dMDhowvrCDltHH46MgpfqfxR6emwOBpnct1+w57WUluYhs2QAGuswtTgmjnBSW9UgLQ1PQDWuIYTTyZNjz+xepH7HWPVF7nfdsfqAawnJ7WeUxgXuVuNYA3pn3IcTt4UYfKe719KyFNvysGqrpGQ6/5LyBbnKO4UHJEKV/DaThod/8AStFfVnQywQMeZxLsq6iQP8YY3laBQJbopA7BQ0wEnc9ezGYnmFkLOehg3HRmFr1T+qPR0WEDWyXU/2PXpun12VxO8l34GMdDo/Tlg9LHCsTrnKQBW78LCNOx7QP7o1c8OSgvT8IcIS8aA1YXCy9zMnXySeFiyKbw9LyfknEcoUP2HkKsmE3LyvYRsd356WIbqjIjxHcBuBPkAbNXs/GcE3E69VgmH1RsA1hqafpnBPlM4YG2BfESJa4GtW0ochpqOP9BKvqKp42LLiyaWKx2V4o+i0oFwVM4ldXt/++m6H303W/CePWsvRT4q59YcMIIjc76WA1j/yvmOZv4waIeN1rqtgUZ32500Pf/C6jr5+edk+X4HZsIVvGd1oNGX2gKNNjTUxUCjVoAFulCclqtWiE/VP2PNVvXZ2bsC03YPpoxcwf8vMOj8hwfcTg3vpIClu+D90CLPouVvNqZEnWCiMRKHoaXjzIfaRqzSLhi6LkM6KsUfRaYDCbL+0Hqg8167tIEUjFSB4Hd4zd1hz6crjD6NzoCrLdk0YtbnZ3s9KmfC46Th96cQUle3ukKuWEFWjr2bLD/kF6R+h51btfznh5OVd93TblF861E5J/+JND06Ph6VgwBYFGI2oWrMmh6szoCmtBGtrPen7VZMAbtG+no/g86/D9XSANunpcy2zgpYMCL1pkI+zcwavfIJWBtBVNgSdoRg80acs9DSMfrxtpGqvGvsi20dTKjpqBR/FJkOZNDalOoEqtuonmS6jb22KdZ9BEDaQwGwmliohS7CZwcxeMr7/FiPgLUW1fQVF17SdtgzD1l5V/1y/rDnN9jB0RGWzCO5w0J30BhZ6IRqyaLztB2H0oXwGYdGZ4GXsLB+jAUAjA6wfRrt8yzVAAELdJJCPp3k4ixjE8A6o4SdYKIzOGehpOOqf8vb5qUN8tcfepWQweeFl45K8UfR6SijBEjqTvWZYjyrN6kupzqXHQq9UvFz+3sELFA1aWqaA5DVcMJJpGnK1Fy2apr6PIEF8itGXwQhGj6lL9VESEIZwYKf/ajq+ivu6BPXZ6Wtq8oMyTAiJf5W+/fX0df7WQBAL6q5AbVLc5lNnR2wYARvWUY+LUtG+UIArFcwC8HOF7YtBAfwmDqbkMlvEXLb84QceQcKiIh6lXOWVTqgoxiT0k5DOnYanQ5fk2YSsv35YaRD1JALCPnT/YTcP42QZ95p88fNUwg5YgzK6Ju3dMAxGVlHaLhKRwUAFuhvDiO5v0/VzTNggWCX5etNTzxJ6ofuTRr/9JfWI3Ra5sxtC0RKBeEc4DX4W/0eeye7D19vBbQISBhhGtpGsdoga7hsRKq/JIxD2mJ32TRfVlytrEXzDMCGI0DAgQEB1oE+ASFgwAL9MyOf/qnyHT4AayPMAjByfFs4g7Trrc8IOeQm9EK3kW06APwAQGQXAAkPT1c/nQ1hRaZD1LmPZfsDwOQXt4TnD5nyLgeN2UYVBFgQy+pTR4B1uMezCEXBFN8ZZMWKRSsfeoTAOYX139+TQLR3EMTMgtfgb/Q9cBbdX+O0IPIU4WrAWoP+fEo38Gj/jB2CWVON/bNGs9pem0zVFQkErgkArq7yDQiBA9aBqiBaJGD9AsP5ACgPT1dbBtFAHy5Pvg+14B1ukw7YCvz4jJTowa8R8q2RHT9z7X/k7391TttBpkWkQ/THg6+q+aOxiZC/PBCOPwICrMMrCLBA+1K1IMPVv2T3KiDN61KdAFUWgpFCsYZl71QfUdHHDAIBr9aLUORoBGvEqh2Ffen/363OWReVun4qY7SrOmuNV8dYWO/S1/oigkAPqucLhKvnmQ0RsNqfl9wgyasG2bnFRQHWFRgF4Ppn9M6VWk6bvoNvRCt8V5imY4dRhPx3ltzGe17KnkK7ISXNb3/WFjzPZzpE3fisnj8gFMWvbyveH4EB1hUOGpRBLG/eYovpl7FYLfDaNo4BC3QqIly9wkbGQgCsqOJHsNrWZI0gg+nPBbL1VJIpvNSApFlnHKaFe2C/w70HO6i7G1PNKQCu4J4bFgEIgQMWaLIkvyarft4HYE20LQD7XEtIUzPRvqbPRVsDNNEkHbBW7KUP5LbBQaT8aNCwK+TfcXPKgaUfLCBk7yv9pEMUgGtzi74/3vtCPlrnyx8BAtZE5CdgmGZorqXl7juXtEH49/7e9ju8xmJwXU/1FYeABToNYSQL4Gq9tHtE+Oh8gJWMYrHfd+7PFr2nhV2oToltlQJN2bGzVq/BqqP/39khEAymWuwRrhaze1ZFwJLqXEmenRsSYM2yLQRpa5dUrt/ejlIIZ+mmY7eLCZnxsdymyyd1nEL8cnn6WiVYwC+74CBTgE+X6ZBpwgxzf5xyXzH+CBSwZiHC1VNwuC0AVZZ2HL3qCayHQ8AC/YaFZjCBq2ep+mR9f4SPzjmCxYVtgP/vS9XUP2fqr79sdGpEeoiGjNhZcK99PUDBUKp6D3BVx+5VFQErVftL8m3/kABroW1BWLDMvEO/4wWUgrhANx3/+7CjLTDqA4vC0zp3mNY8/m757sN7/ydPH+QNjFC4SocoGIFa1mjuD1hzVoQ/AgWsBUiNyLUATt/9u5oYZF3rGLBAhxhA1gSqnnnfHeGjc63BagdXZ7cL3/Ar+rNFerRNRviGap24WG1qoa/9yiMY7EvV5BCumtg9qiJgZapGknc1qp/nL1eA1WJTEGAkyOaCnXdIx5u0uHyaSK6VzfIDn7c5N30B+e6X+kvHD6+y88esz8P1RwGA1YzQgGwDjSVAto5YA7uNY8ACHa8BVy+owFUErM4JWBmQdYIsHENqeIWUwKPVaYFG277jhALg4FhH/Q5851EhjMCEBlj0WoPqK1TrUK3Xbe2+Gwz6W0vjqryjv3ftuf436d++TrUue99a8LmiAKu5yA79tblotN/sA7CyRrpkF8TN8pmOn/3Dzh9zFobrjwIAqwmhAbkcRqR2vVhPbBTrCg+ABbpIAa4gmntf1e+M8NHJpghHtIesdsDV9vvpkp1+0sXrWbsGU47fOa1AQDjdQbtzeihTXEUDFgMqgKQNqKqpBoraekTjqkCw8LvsPUybMfBam6qLL8CyWrAHC8VtLtjBh7QQUDsd4183txvWkF/wRDYATHxDO7DqYlt/wDoemwvCTBTljwABazFCAzIT6giE7tDRzm2L3md4Aiw4pHlKBlw1Ug3R+c4IH50HsKrFNVjCwnduROuC1LVXKYvWq1OivHMgdkEAgHAdYptznc6ITqUCFr26MhiqyQCmVm11Vt2qgNbwe977mQDW1gPQcg1Yn9sWirmLzDt0CCeAUCg/M0kHxgUR0mXfBzvEtvGUDnGq0mZNHISmKMofAQLWZwgNSCPAkq7YrsKlDgELoGpbbifgZlSLUgDrNPae3mzdVr8IWFGEdByp4qcI200Vtv3eher2rIObUyO1yxfA30HVJQBA6Er1GEJ78xj7rk4NWGyEqUYRlAZu8edP7kjykP5+p+rnuFGt7i4Ba7ptwRgz1bxDR4qFNd0kHTYjWHDN/LT9AnaEzn46hj8Akgre1WmcjsNvJagXjDTCd5qmAwOwaukztongs8iA9RUWdR2Cgy5m8DSZqkfGeqxpDMZ6sPcmr79NdQHVgAhY8SzCjJ2E4ghX12oW7V0cvco8w1Ac9RpBJsF3BQQIvS13Ts9i31HVmQGLTQnW6EBS721+PmTg8LljQPC7JmCB+rkErIdsO1RYxA077AqaHiQsDQ/5WoMF1+sfd4zYjgBYKOmA+FsQLV/3gphgIfjj1ufwAOvmKXbpwJgi3HFU2xFKOoLPwGeRAAvg6HSq+SkjVH/nRrWmca9DrKxd2N/+StUs+Sy8doe4PivCRyda5D6i4xRhtTA9KEDYevTne9Upca5kx98II1jv0f+vB/cIDBC2h4cig3YGPrOtyS66CgSs7gaAZKtql4A1CqNTPfsRvY4PzsdLC95poNFY6VABLAjxwNbIYAMWWjr++pCePxbXE/Kjq8PwB3TcEC7C9rpvmnUg29EYi9y3PZ+QHUbradu2sy8vRwCsbwjQlOgjqj9Kpvt+wL3nfsl5hhA/a4bk+z6mqomA1TnXYFVnTBFK33M2+Tb9/8pqSZT2rHVa9PeV7LOt3xPgFNdpBu3MqaZhCiqpLHFXX8+A9VWXgLUPFoRcNqltSibv+mIp6jE5hKVhHx+A9Z+3V+3wcgFYqOm48Am1iO7gj0NvDssfENz1hffM4QrOltTcYCBNB1aYhu1HEaIjxDANEyQw9GXOjsAX2OjV4JS/f5VqnuR7n46AFY/KkU0bSqcSR5AR/C5B8Vidavn6rHP47wkQsLpRva7RxrzGPhMBq/21TtquQURtykI+OF3kvi5mwLSj7iTknXnyTg86e9hZt8dl6AHZ1rVNRx4cwQWHJ2cdJWMJWCjpEPXLWwl55SO5PyCm17hXjM9NdJ4OGCWEuFy617PvtAEaRjqwAo0C7MGolIoYGGIFGl0uAaGlOYB1KA9LEsFi9y9SdhtGwOqkI1jVMtASDoMWjtNZk/4+s/rsjLVW7X/OpD/X5KcjA90F9z2Ndua7NoE2KxiwqtgOPxhd2lB3XVbOdCCEfOgp3swVYIEmYY72QGN7yE2EXDG5bcE1RGsf8Qg6WCWaxBX2Sa4AC9KyjeV3+EhHmg66ob19cA6kuIYsJH8kGnp525FDqhfAZNoIo2k6EBrh1qNytjmvDdCztM156EflPJKy7upDqt+lnCe4FtX+ktdhLde+VK+nfOfjEbA67yJ3HqqqU8I2VHcEsj2zgo0KI1l7iiNiAcdxmqC4a7AqAlYqYIkXBAztzaYQN2SL0wGY+nMAVsP+vznVJux96zNQ65H15S4B67gCTgjH0nFcYT8OA7B+/0/9z8NnLAELJR1ZWtrQfn1SyP7gtd91bWv28q43PpGvjbNNByJktR72DBA1WBADKxeHPcNI1YsZMa5a2I7Au6guY4vZIRTDIKrhVKOobmQjWkszvgega+MIWJ1winBETrgGyVSh8N5JaYc+c5okC2oaMGDVKrQxO0XA0gIsp5dLwOpDtaiEcLUMbOcKu3E6sK+i0pElAJDkumxS2P4QBSOiPCCK11uftR3b5CIdyA3y1lSXUb1J1cD0Jntta6z7CCNP3ajOolqieCROC1u0rvJemBa8XDxCJ8JH5wzT0F8yNdhfMmUo/L5r2sgVt3twNxnIBQxYoKkZbcxzCOfwxTIYOjRyzrqkhIB1jaTAX1JCwEJLR5Zg4bcsQGqI/pDp17fJw4HAOi2NA7WN0lE2ZaydOoHq3waHPIt6jY12bRjjYMURLH5tVbUkVENatHfu/y+LB0BzP19OW0gfOGAdkdHGHB4Bq3MB1sZUdSWCK7B1E0mBN0rHhBl4cAUBTItKR5ZueAY9wKv3dBx/NyErmlan470v2o4Hcp2OCgEsEbZ+SHU21d1UU9mo1UI2gpUshv+CwdTDVJdSHRYjuUe1G8EakbtbsN3vksXu8PPIDiNXq0ewjkxb4xU4YPWiqk9pY9aOgNW5AAt0dokA6+y0Ala2dGRUXtR08LGxHCxw95aO4f9q25H6wQInGyfOroSKrXkWIbpi49rJziIURqr6ny0ZuRrRceSKg6w+9GeDJDxDI/29T/+Ug6QDByzQA5I25gEMuIqAVT7AWotqdgmgZDazNa3QlyodGZUXNR2/ZMfQLFle7nQk04XII1e56YiAFQErKvuw5+qUxeypB0G3f208dxROovFZ31ECwDpW0s4cGwGrcwJWsvuhMWAoAdt2zitgZUmHQgVGSwfEu0p225U5HUX6IyoqKjvQqGzEqn9OyAb23pMlU4SniEfu8PcoAWBtIWlrtoiA1XkBC3RSwB3hSaoFrAzpUKzEaOlY1kjIE2/gpkOjMQraH7FBiIoyOIswJUSDePCzbDehcLTOttXtzxwEbSs7ODoEwIJLEYS+5NqZxVhwFQGrvIAFuifATvAu3QIWejo04AQlHTM/JeSW5/DSYfDEF6Q/YmMQFYV8FqHsAGjJYnfu792q2TosBlkN7LXU6cWSABYfruHZCFgRsEA9qV4IqBN8gdmkC1hBp0MDTFDSAaNX5z6Glw4DwArSH7ExiIqymyJMO+A5Daj4US12LEq3/meRV1eFaDiLTGfRt7v1T9mtGBpgMXsh2vg3WCTxzbc8bf6qhe5bnDrvARZpfDOqjViU8V5UXSNgdS7AAvWleieATvAdZotRAQs5HZpwYp2OG58l5OixeOkwXLcQlD9iQxAVhbMGq3/KuYT8+wAm2NElX6famD/Ud7M/fzkxASz4nTtDbgA7/gSg5GvsLLkuoQAWg6rNZOffDfzThzckbQ79/R8pZ+QNYMe6rBUBq/MAFqiGal6BneA8ZoNVAQs1HQZwYpWOsx4m5AdX4aXDYnFoEP6IjUBUFN5ZhJL4VvwoVU8GSKmH8W52yud3JIvcN/vjvDtzDu6tYZDWvcCjXbowSEy1s//xr5yRtDvwu8KBxL0jYHUewKpiu/YWF9AJLuZ3DNoWsBDTYQgnxun4xS2EbDsSLx2WO3AK90dsBKKi7AONytZgVbcftfqGAlgM3Piol/+SABb9/VSVz7DRn3UKAqy18uxb6xuDBw8cPvdWEPyukJ5NI2B1LsACDfW8zb6R3RO1gIWWDgs4MUqHBVxJ04GwzblQf8RGICrKDrCqz05f1M5GrnorgtLALt3W3GKj3754Cgh+V/0cg6yuIY5gaaoVFiNgdT7AAh1G1eShE4R7HOqqgIWUDks4KTwdSHFkCktHbASiopxDyNqIAJImWDi+BtzMc9qSCyByU0uwgjVYayZfGMtP5wMs0PEeOsLjXRN8KOlAAJRC04EYqK+QdMRGICrKC4T0YWumXMDVZmyqrqpAwEquDrsIGfwN4NaNSXcRil8Uy0/nBCzQBQ47wQt87aIIIR1IgFJYOpAjIXtPR2wEoqK8QQhAxHppu+0MRnxgam4dNk1XFQhgoV2x/HRewOpCNdZBJziWfbcvwCo8HUiAUlg6kAHLezpiIxAVVQiEdGOhGtZnU2P9WLiGtNEeGA3agAHa2sl0YASTqEoErOQA35cQO8GXkgOcfcYBKTodiIBSSDqQAct7OmIjEBUVhdh+eVX0QeUCFqgf1XyETnA++66qAgCr0HQgV3Dv6XDUQHlLR2wEoqKiImBFhQhYoIMROsKDiypgRafDQQX3mg6HDZSXdMRGICoqCrH92ozqSKrrqCZTvU+1kKqZCX5/j/3tWvbeTSNgRcDK0h0WneAdRRJ80elwBCje0uH4CdB5OmIjEBUVZdl+AVSdR/W2RXv1NvuOzSJgRcAS9TXDKZ357LOhAJb3dDgCFG/pcAxYztMRG4GoqCjDtmsbqvvZyBTWmlH4rvvYd8f2KwLWKh1rUJiOLXoOuuh0OAQUL+nwsIbBaTpiIxAVFaXZZvVhU4CYYCUDrWvZvWL7FQGLrEE1Q6MAzWCfCQ2wvKbDIaB4SYcHwHKajtgIREVFabRXP6D6xOPRXnCvvWP7FQELdIhGwTkkhF0URafDMaA4T4enXTjO0hEbgaioKMWYiX9zPGqVNZo1QhbLL/qmcwEWjBy8qVBgZmKMXjns4L2lwzGgOE+HJ8Bylo7YCERFReW0UV0tN9xg6TZmS2y/OilggU5SKCgnhRIHpOh0eAAUp+nwGEfGSTpiIxAVFZUDVw8EAFeJ/sVDVvRR5wMsWJS3LKOALMtbuBdIB+8lHR4AxWk6PAKWk3TERiAqKiqjfbouILhKdF1svzovYIH+mVE4/hlSJNui0+EJUJylw3MkZPR0xEYgKioqpW06JUC4SnRKbL86L2AdmFEwDiwRYDlPhydAcZYOz4CFno7YCERFRUnapR2pGgMGLLBth+irzglYPakaJIWigf2tLIDlPB2eAMVZOjwDFno6YiMQFRUltElrUr0VMFwlAhvXjD7rfIBVxc5aEgvE5NAOuyw6HR4BxUk6PAMWejpiIxAVFSW0SWeVAK4SnRV91jkB61xJYTi3hIDlNB0eAcVJOgoALNR0xEYgKiqKa4++TrW0RIAFtvaNvut8gLW/pDDsX0LAcpoOj4DiJB0FABZqOmIjEBUVxbVHF5YIrhJdGH3X+QCrRlIQaooELNlVdDqMnKZnv9N0WBW+qqrCy1VsBKKiohhcrU21qISABTb3jD6sYMCi1xpUX6Fah2q9bmv33WDQ31pW78Kgv3ftuf436d++TrUue99a8LmQAMt3OlwBlq90uAYs1+mIjUBUVBQDrCNKCFeJfhV9WEGAxTo+6Mw2oKqmGihq6xGNc5MCAL/L3sO0Gesg16bq4hOwik4HFmAVlQ5swPKdjtgIREVFMcB6vMSANT76sAIAi15dWadVk9GxtWqrs+peSQoA/J73fiboVNdzASjCFUQ6bAGr6HRgAVZR6YiNQFRUFJsebCgxYDXEacKSAxYbCahR7NAGbvHnT1YdkAm/q36OG33o7giwgkmHJWAVng4MwCoyHbERiIqKom3BXiWGq0R7RV+WFLDY1E2NTme2ztYH7jRw+JybQL23+fkQzY4Q1M8BYAWVDgvACiIdtoBVdDpiIxAVFUXbgrMrALBiTKwSA1Z3g47MVtUOACuodFiASRDpQACsQtMRG4GoqCjaFtxVAYA1NvoyMMDSnJLq67kj/CrcFC2xMR0xHQ7SERUVVXrA+l8FANaL0ZflBqwqtsOr2nEHuCnbml/lqEOP6YjpiA1AVFRUAlifVQBgfRJ9GRpgjcyX5OrCRgE21F0/k7PLC7bm9xRv5qhDj+mI6YiKiooCwFpeAYC1LPqyMgBLvCCwY2821QOdYz/WsfXnOsoa9v/NqTZh71ufdag9sr48MxEjq5RVeDpkduGASfHpMFAQ5co2HbaVsOz3L7vK7r8oLMAilaDoy5IDFv3/AKqTqO6lepVqIVUT00L22r3sPQOqEC6PgOX08ghY/tPhBrDcpiMCVgSsCFhRbYC1rAIAa2n0ZQkBi6or1eFUU6mIpuAzv2Df4aKB0wI+Dw2snj3uG3i7/MEXrj2x/HSm8oNvS5FlJwJWSIC1uAIAa0H0ZfkAaxjVWwZgJWom+y77BgYT+HA6KBx78DpId0BsprAAPZafMpUft7YUWXYiYIUEWO9WAGC9E31ZHsBai+oGBLASBd+5pkUDhwt89h1ksfb4BmJ9hQXosfyUqfy4t6VIX0XACgmwplQAYD0TfVkOwFqP6gUHcJXoeXYPncbNLfDpd0xh2OMbiNUVFqDH8lOm8uPPljKWnSgXgHVzBQDWzdGX4QNWH6rpDuEqEdyjt2ID5wf41DulcOzxDcRqCgvQY/kpU/nxa0vZyk6UK8A6uQIA6+Toy7ABqwer8MSTprbeM7uBCwv4Ors9+R1k9Fe0x7T8+LelTL6KcglYtRUAWEOiL8MGrEs9wlWiSzMauLCAL9ozld0zrYOM+RPtMS0/MW/yHjajXAJWV6p5JYYrsL1r9GW4gLUrVUsBgAX33C2lkQsN+KI9bfdMA6yYP9Ee0/IT8ybLnigfkHVTiQHrxujDcAGrC9XLBTQoiV5utaF9AxcW8EV72tvTsYOM+RPtMS0/MW/yHjajfADWsBID1rDow3ABax+rhuHlh1pj9JO5M2wal324Bi4s4Iv2yO0ZGSigR3vKVH5i3uQ9bEb5AqwuVG+UMf4V1RrRh+EC1kTjBuGJC8iqyw6wJnKNnB7wXfd9Qt6cRMiSeaTdNfsFQu45FgP49Oy5tIaQ5+9sb09DXZuNYKtve9L8Bv4CjTnIzJ6RFoD+n+tW3z9NenbZ5Q+UEygv/PXF+21+9O0v3jcq8pE/SZmGPOEvuD/Ya15+zG3Bq1/6eZP3UJlWntTyap/YORUGWUeXELBOiL4LF7C+yY52sIMre8BqarWlrZFTBz7ohKFxzbqgM7cDvolajb/YCfEX2GoGNGb2pOUZf5lB6EQOsPTtgbKSd+nZZZ4/YjkWL7NybW4PwIPO5dqevDINF8CNWfnBtcWsfunlTd5DZV55ys+ribFzKgyw1ixZVPdZYHP0XbiAdYTRE2TyBIcHWITZogd8/FNs8oT40OltjZgdRDQxW/Ts4fMFbEvs4YEC7DQFUBsgTnwnjvSZAZadPXyHiDOCZWYP+Ia/wH+QHyLk6I/SmOePygiWflkyt4evS1B24IEF8khsAyAv9fJnO21b+FEhKDvgJ9EWeF1vJEs9b/IeKuG+/AMf5J2sPGXn1eqHzagiIOtnJQKsn0WfhQ1Yt2p3jnwDwv9uD1g3awEfNFxZ9+YbNf0n7AT4jjAGB4CZNBg0G8U6wgiI0zooO8Ayt4cfQQN78Nav6NvD+0SEKB6+zKDY3l9ZwKMPEmb2JHVcdj8eOPR9eYP2UoCskSq+PQDgwvSV6kMl/x5xepkvT/lt5RGxgyoUsp4oAVxNiL4KH7CmGo8+QCPBN3r2gDVVC/h4gJI9EUKjaGfbzVr2QIOfTF/IgI631wxqbjYCYn7dk/1UnL09fKdsvsYJx1955SMBMB/lR3fETW/EyNyevDwyr2NvG5ebNIBKHiDAb5h5o/pQyU9fig9YKn/n7YkdVJGA9Q2qTwOGq0+ovh59FT5gfa7d4CbD8vYNrKjPtIEPAA9skTVW9oA11QhAVdYdmS3GNbdHXHfFN/TmgGVmD/+UD/cG2+Bnmh9d2cMDpz6s+C8/kDdJ5+6zPPOjfGK55UeN9EeJlxivTUsrs/x7MPNG9aEyr71Rf8iaGjuowiFrKFVTgHAFNu1BFf1UAsCqt2748QBrmRHwqTTI+lMGCfDZ2wMAwU/NmeeTmT3iwmDIC/vRNHN7eNCUbVCAjtoMtPTsEUEP7svbo77ry235ka2FMgP0z4wfqGRrsOB1Pr/0y1GzU8DSsyc7b1QeKvmHmDTY5EfhsjfffBY7qCAg6/QAAQtsqoqAVQ7Aag4IsFaiAJ9sd6FZh7TMyh7+6Z7PI/NRGjN7+I45WUuEA1hm9qhcYKd+PunZkwd6duv37MsP3kiRvT1ZOxsh79yMAOpPEZqPzOrljazN432UNvWt8p7EnthBhQJZtwUEV7ckcBUBqxyAtTggwFqIAnwiXJmNXiXA14zSIYg71XzZw9vAL1LGASx9e8SpSsiLxCbopPkOUh8k9OwRQ0WIO+T4MmS2VmwlSnnGmV42twd8Ju48FS8YobWb3tVb5C4rtyIE6pVrvbxxD1grYwcVDGD1oJocAFxNZrZEwCoRYH0UEGC9Zw18IlyZ7f7igW+xVYeQ7HQS4cEMsvTsEfOCH2XAASz9/IFOGOyA+6dtTOBtdmmPGO5ABAS+MwSbfJcfGVjY7bo0s4eHK7h/GhDrl2n942jEnXxgjywAqn651ssb94C1MHZQQUFWb6oZBcLVa8yGqghY5QKs//x/e2fz6lURxvGfUFamZFRUvocvlGD1+wOCsNa6KSqLINvURpA2Ri8S0TLd1UaDu7Doug7b6EpqUe2SoEK6uNNCF0loN3XGe45O5845Z56XmTNz7vcHX7hc7u+cL888d57PmbeTEWCdEgGfD65kT9VnVQC0DR7o3sL9+NZd6e5o1I+Pb0qT5o3mxwWstvu4a+foR2voxMeFCtlUHN1P39ECMiD+V5wfvqnlFLkTH7DOokBlB1nrjM4NAFfnqntPAFjlAdbhjADrEBv4mtNxOlMWp1QAtGthdSw/vvVfuienx4mPDP5oflx40veiF596BIk3iibz03cUigyIL4qm32371Qev1lPNIW2qERtfnxcy0ujuXO3eQHEKBSpLyNphdCkhXF2q7jkBYJUJWLszAqxdLOBrwhV/EbAP+A6TpnKsF1uU2tbJyAp2uJ80gHWI3F4hMeJDKM2P2xb6Xnjx6VqzJs9rup+4O/d+Yo0C23u0tRcfRmmx6TumoW1pQng+HUKByvr4hisJ4OpKda8JAKtcwFpR7aAZGrD+rrzsZk9h8F5p0gd84X7cp9OQXU70xcrhfuy1beFrkzs9Zgt3F/BoxSc0Ru6an5h+QqZrXC/0EdFd4geY8BGP4drLzSXaNOon7J2UvhEi2U5LWmza+ry+zQjhub0LBSpryHrV6FpEuLLXfqULrgBYZQCW1UwGgDVzfeFlq+HA11z/oQtXNfCF+2nucmoWG/dJnx4rup8403AyP32vO3Gnm2hFkufHHfFoxsH1Ql9crtNe7pQXf/dgvPZyR49pp6dbDw+SY+P+v7temmsO6Uc00GLT9n/sAmlzDWh4Pi34QYFaymdkHeiDKwBWOYA1zQCwptdvv9F+hvx0HfLhAB/Fj2+XUz061NzlRIcanp94gDVT5Q7dT/N9iHWM3Kd7+nv2ePFpjoC27UqjL3DXaS/Xh6zN+X5Cd+7RFuDPsHKn+VJnmzvNA2LpMEyPTVuf13zoszndHDHuz6cZFKdiIOvzCHD1WQhcAbDKASyrWVGxtuKPIM3+z1go8DU7LV3AmpL91B2s74XK8kMZeX7iAdbUyZ0peR1NV9v5RkpixqftvLLaCy+vddpL57gRuZ+unXu80eMpO3d8RzLINrfQY9P1UNnczUyP1RTFqagzsk4rwtXp5llXAKxxANYmo8vRT2P2D4dvWGQuBPjqxdKh4gJfqJ/mehBblOpdTlZ2xI23s1Hux+evjgt96mnWyRs+oFvQdGNkiyMvRvL41GvW3PbixUa3veQPL3p+6gNY5TGaFedOcxehzSPegwIvNn3tYnPY5rIbK/dQXYofKGfAslprdEEBrs4brQmFKwBWWYBl9fYAgPWW11x+wAc/rp/FgIX4wA83fxCbLj9Q7oBl9aICYL1AgSsAVnmAZfVFwg7laKfBnIAPfm77+dibN4gP/EjyB7Hp8gPlDlhWxwRwdYwKVwCsMgFrudHJBJ3JyZv36jOZE/DBz9EOuMoP0NFepeVPei8ltRWUO2A9ZHSRAVcXq+8CsJYAYFndZ/RrxM7kTHWPSUAByA34lraffsBCe8EPN3/SeympraDcActqHwOw9nHgCoBVLmBZPWZ0LkJnYq+5/tZ9QoymAr7QwOXkJzUQhykfQEf+lJY/ab2UljtQ7oB1h9HvBLj6rfoOAGuJAZbVDtIb5vt1qbrmhARYCx1dXOCjBi8XP6mBOFz5ADryp7T8SeelxNyBcgYsq70EwHqDC1cArPIBy+pZpR019hrPLLo+rSjFAT5uAHPwkxqIacoH0JE/peVPGi+l5g6UM2DdaTQXAFdzktErANY4AGtSvafrmqAzma+uMREB1kJHpwt80iAO7Sc1ENOVD6Ajf0rLn/hehmwrTv5CJQCW1XsBgPWuBK4AWOMBLKsDgg7lndbr8oqSHvDJC6SeH/790wExT/kAOvKntPyJ62XI3AFgjRmwHjW62gFXV4weAWABsFx9xehQvuy8Jr8w6QCfToGU+5HfPw0Q85UPoCN/SsufeF6GzB0A1pgBy+pEB2B9I4UrANb4AGu10RyhM/mjd/eQrDjJgU+vQPL96N0/PhDLlA+gI39Ky584XobMHQDW2AHrzQ7A2gvAAmD59DyhQ3kuWge30MnJgU+3QPL8xCuQ+kAsU26AjvwpJ3/ieBkydwBYYwcse3jofx64sr97AIAFwGrT12pPsvICJQM+3QJJ96N//7hALFc+gI78KS1/9L0MmTsArLEDltWPHsD6QQOuAFjjBSx7LszVjs7kavU3KQBLBnxxClS4n/gFUheIdZQToCN/ysofXS/y+Mn8oAiNHbAOewDrUwAWAKtPRzo6lCMJOzgZ8MUpUOF+0hRIPSDWUW6AjvwpJ390vcjjJ/ODIjR2wNrjAaw9ACwAVp+e7OhUdiQGLD7wxStQYX7SFEg9INZTToCO/Ckrf/S86MSP7wdFaOyA9bQHsJ4CYAGwQvS9p0P5boAOjg988QpUmJ90BVIHiPWUG6Ajf8rJHz0vOvHj+0ERKqtgNj4BEHR3Y6H7vNFdACwAVoj2ezqU/QMBFg/44haofj/pCqQOEOsqJ0BH/pSVPzpe9OLH84MiNArAMp9lRvcYrTZ62Git0UajzdsPzl+oAcv8fN7+zmiT0brqb++vvrsMgAXAcrXF06lsHrBA0oEvboHq95O2QMqBWFe5ATryp5z80fGiFz+eHxShogHLfO41WmO0xWibT9s/+OdMDVhPvH/557a/M9paXWslAAuAVct9y/zcgB0cD/jiFqh+P2kLpByIdZUboCN/yskfHS968eP5QREqFbCWG23ogKVbevzAX9/WgGV+PhHynWr0azkAC4B13OlQjg8MWHTgi1+guv2kLZByINZXToCO/Ckrf+RedONH94MiVCpgbQoEpW3rXzr+8vaD839a2Z9Dv2fvAcACYH3kdCofZlAgacAXv0B1+0lfIGVArK/cAB35U07+yL3oxo/uB0Vo9IAlEAALgDV5zelUXs+gQNKAL36B6vaTvkDKgFhfuQE68qec/JF70Y0f3Q+KUMlThBsjwhWmCAFYN7XT6VR2ZlAgacAXv0B1+0lfIGVArK/cAB35U07+yL3oxo/uB0Wo9EXuq6qF6VsVoGprtftwlXsDxH1pA9Yqo18qrcygQNKAL36B6vaTvkDKgFhfuQE68qec/JF70Y0f3Q+KUOmAVX+axzSsq49pqFRD1OaWYxpWVNdY9EHcy9UNCdSLY66Ye2EAAAAASUVORK5CYII=';

;// CONCATENATED MODULE: ../marker/esm/useMarker.js

 // import defaultIconUrl from './markers.png';




var getIcons = name => {
  var icons = {
    simple_red: new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(-454 / 2, -378 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2)
    }),
    simple_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(-454 / 2, -450 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2)
    }),
    loc_red: new BMap.Icon(defaultIconUrl, new BMap.Size(46 / 2, 70 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -378 / 2),
      anchor: new BMap.Size(46 / 2 / 2, 70 / 2)
    }),
    loc_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(46 / 2, 70 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -450 / 2),
      anchor: new BMap.Size(46 / 2 / 2, 70 / 2)
    }),
    dot_red: new BMap.Icon(defaultIconUrl, new BMap.Size(16 / 2, 16 / 2), {
      imageOffset: new BMap.Size(-216 / 2, -466 / 2),
      anchor: new BMap.Size(16 / 2 / 2, 16 / 2)
    }),
    dot_blue: new BMap.Icon(defaultIconUrl, new BMap.Size(16 / 2, 16 / 2), {
      imageOffset: new BMap.Size(-216 / 2, -486 / 2),
      anchor: new BMap.Size(16 / 2 / 2, 16 / 2)
    }),
    start: new BMap.Icon(defaultIconUrl, new BMap.Size(50 / 2, 80 / 2), {
      imageOffset: new BMap.Size(-400 / 2, -278 / 2),
      anchor: new BMap.Size(50 / 2 / 2, 80 / 2)
    }),
    end: new BMap.Icon(defaultIconUrl, new BMap.Size(50 / 2, 80 / 2), {
      imageOffset: new BMap.Size(-450 / 2, -278 / 2),
      anchor: new BMap.Size(50 / 2 / 2, 80 / 2)
    }),
    location: new BMap.Icon(defaultIconUrl, new BMap.Size(28 / 2, 40 / 2), {
      imageOffset: new BMap.Size(-248 / 2, -466 / 2),
      anchor: new BMap.Size(28 / 2 / 2, 40 / 2)
    })
  };

  for (var i = 1; i <= 10; i++) {
    icons['red' + i] = new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(0 - 42 / 2 * (i - 1), 0),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2)
    });
  }

  for (var _i = 1; _i <= 10; _i++) {
    icons['blue' + _i] = new BMap.Icon(defaultIconUrl, new BMap.Size(42 / 2, 66 / 2), {
      imageOffset: new BMap.Size(0 - 42 / 2 * (_i - 1), -132 / 2),
      anchor: new BMap.Size(42 / 2 / 2, 66 / 2)
    });
  }

  return icons[name];
};

function useMarker(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    position,
    animation,
    offset,
    icon,
    enableMassClear,
    enableDragging,
    enableClicking,
    raiseOnDrag,
    draggingCursor,
    rotation,
    shadow,
    title
  } = props;
  var {
    map
  } = useMapContext();
  var [marker, setMarker] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!BMap || !map) return noop;
    var options = {
      offset,
      icon,
      enableMassClear,
      enableDragging,
      enableClicking,
      raiseOnDrag,
      draggingCursor,
      rotation,
      shadow,
      title
    };
    var point = new BMap.Point(position.lng, position.lat);
    var newMarker = new BMap.Marker(point, options);
    map.addOverlay(newMarker);
    newMarker.setAnimation(animation);
    setMarker(newMarker);
    return () => {
      map.removeOverlay(newMarker);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  var [type, setType] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.type || 'loc_blue');
  /**
   * 设置标注点 `图标`
   */

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && marker && !icon && type) {
      var newIcon = getIcons(type);
      newIcon.setImageSize(new BMap.Size(600 / 2, 600 / 2));
      marker.setIcon(newIcon);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [type, marker]);
  useVisiable(marker, props);
  useEventProperties(marker, props, ['Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'Remove', 'InfowindowClose', 'InfowindowOpen', 'DragStart', 'Dragging', 'DragEnd', 'RightClick']);
  useEnableProperties(marker, props, ['Dragging', 'MassClear', 'Clicking']);
  useProperties(marker, props, ['Icon', 'Position', 'Animation', 'Offset', 'Label', 'Title', 'Top', 'ZIndex', 'Rotation', 'Shadow']);
  return {
    marker,
    setMarker,
    type,
    setType
  };
}

;// CONCATENATED MODULE: ../marker/esm/index.js




/* harmony default export */ const marker_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    marker,
    setType
  } = useMarker(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => props.type && setType(props.type), [props.type]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    marker
  }));
  return null;
}));

;// CONCATENATED MODULE: ../label/esm/useLabel.js




function useLabel(props) {
  if (props === void 0) {
    props = {};
  }

  var [label, setLabel] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    offset,
    style,
    content = '',
    position,
    enableMassClear
  } = props;
  var {
    container
  } = useRenderDom({
    children: props.children
  });
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!BMap || !map) return;

    if (!label) {
      var opts = {
        offset,
        position,
        enableMassClear
      };
      var instance = new BMap.Label(props.children ? container.innerHTML : content, opts);
      instance.setStyle(_extends({}, style));
      map.addOverlay(instance);
      setLabel(instance);
    }

    return () => {
      if (map && label) {
        map.removeOverlay(label);
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (label) {
      label.setContent(props.children ? container.innerHTML : content);
    }
  }, [props.children, container, label]);
  useVisiable(label, props);
  useEventProperties(label, props, ['Click', 'DblClick', 'MouseDo', 'MouseUp', 'MouseOout', 'MouseO', 'Remove', 'RightClick']);
  useProperties(label, props, ['Style', 'Position', 'Offset', 'Title', 'ZIndex']);
  useEnableProperties(label, props, ['MassClear']);
  return {
    label,
    setLabel
  };
}

;// CONCATENATED MODULE: ../label/esm/index.js




/* harmony default export */ const label_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    label
  } = useLabel(_extends({}, props));
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    label
  }), [label, props]);
  return null;
}));

;// CONCATENATED MODULE: ../tile-layer/esm/useTileLayer.js



/**
 * https://lbsyun.baidu.com/jsdemo.htm#g0_2
 */
function useTileLayer(props) {
  if (props === void 0) {
    props = {};
  }

  var [tileLayer, setTileLayer] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    transparentPng = true,
    tileUrlTemplate,
    copyright,
    zIndex
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !tileLayer) {
      var instance = new BMap.TileLayer({
        transparentPng,
        tileUrlTemplate,
        copyright,
        zIndex
      });

      if (!!props.getTilesUrl) {
        instance.getTilesUrl = props.getTilesUrl;
      }

      if (!!props.getCopyright) {
        instance.getCopyright = props.getCopyright;
      }

      map.addTileLayer(instance);
      setTileLayer(instance);
      return () => {
        if (instance) {
          map.removeTileLayer(instance);
        }
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  var [visiable, setVisiable] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.visiable);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && tileLayer) {
      visiable ? map.addTileLayer(tileLayer) : map.removeTileLayer(tileLayer);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [visiable, map]);
  return {
    tileLayer,
    setTileLayer,
    visiable,
    setVisiable
  };
}

;// CONCATENATED MODULE: ../tile-layer/esm/index.js




/* harmony default export */ const tile_layer_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    tileLayer,
    setVisiable
  } = useTileLayer(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    tileLayer
  }), [tileLayer]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setVisiable(props.visiable), [props.visiable]);
  return null;
}));

;// CONCATENATED MODULE: ../info-window/esm/useInfoWindow.js


var useInfoWindow_excluded = ["position"];



function useInfoWindow(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    position
  } = props,
      opts = _objectWithoutPropertiesLoose(props, useInfoWindow_excluded);

  var {
    container
  } = useRenderDom({
    children: props.children
  });
  var {
    container: title
  } = useRenderDom({
    children: props.title || ''
  });
  var {
    map
  } = useMapContext();
  var [infoWindow, setInfoWindow] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (!infoWindow && map) {
      opts.title = title;
      var win = new BMap.InfoWindow(props.children ? container : opts.content || '', _extends({}, opts));
      setInfoWindow(win);
    }

    return () => {
      if (infoWindow) {
        infoWindow.restore();
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  var [isOpen, setIsOpen] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(opts.isOpen === undefined ? true : opts.isOpen);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && BMap && infoWindow) {
      if (!isOpen) {
        map.closeInfoWindow();
      } else if (position) {
        var point = new BMap.Point(position.lng, position.lat);
        map.openInfoWindow(infoWindow, point);
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen, infoWindow]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (infoWindow) {
      infoWindow.setContent(props.children ? container : opts.content || '');
    }
  }, [props.content, props.children]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (infoWindow) {
      infoWindow.setTitle(title);
    }
  }, [props.content, title]);
  useVisiable(infoWindow, props);
  useEventProperties(infoWindow, props, ['Close', 'Open', 'Maximize', 'Restore', 'ClickClose']);
  useProperties(infoWindow, props, ['Width', 'Height', 'Title', // 'Content',
  'MaxContent']);
  useEnableProperties(infoWindow, props, ['CloseOnClick', 'Maximize', 'AutoPan']);
  return {
    /**
     * 信息窗口实例对象
     */
    infoWindow,

    /**
     * 更新 信息窗口实例对象
     */
    setInfoWindow,
    isOpen,
    setIsOpen
  };
}

;// CONCATENATED MODULE: ../info-window/esm/index.js




/* harmony default export */ const info_window_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    infoWindow,
    setIsOpen
  } = useInfoWindow(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setIsOpen(props.isOpen), [props.isOpen]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    infoWindow
  }));
  return null;
}));

;// CONCATENATED MODULE: ../point-collection/esm/usePointCollection.js



var EVENTS = ['onClick', 'onMouseOver', 'onMouseOut'];
function usePointCollection(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    shape,
    color,
    size
  } = props;
  var {
    map
  } = useMapContext();
  var [points, setPoints] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.points);
  var [pointCollection, setPointCollection] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();

  var getPoints = function getPoints(data) {
    if (data === void 0) {
      data = [];
    }

    var result = [];
    data.forEach(item => {
      result.push(new BMap.Point(item[0], item[1]));
    });
    return result;
  };

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!BMap || !map) return; // 判断当前浏览器是否支持绘制海量点

    if (document && !document.createElement('canvas').getContext) return;
    var opts = {
      shape,
      color,
      size
    };

    if (!pointCollection) {
      if (!opts.size) opts.size = BMAP_POINT_SIZE_SMALL;
      if (!opts.shape) opts.shape = BMAP_POINT_SHAPE_WATERDROP;
      if (!opts.color) opts.color = '#d340c3';

      var _pointCollection = new BMap.PointCollection(getPoints(points), opts); // pointCollection.clear();


      map.addOverlay(_pointCollection);
      setPointCollection(_pointCollection);
      EVENTS.forEach(evnetName => {
        if (props[evnetName]) {
          var name = evnetName.replace(/^on/, '').toLowerCase();

          _pointCollection.addEventListener(name, props[evnetName]);
        }
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (pointCollection && points) {
      // pointCollection.clear();
      pointCollection.setPoints(getPoints(points));
    }
  }, [points, pointCollection]);
  useVisiable(pointCollection, props);
  useEventProperties(pointCollection, props, ['onClick', 'onMouseOver', 'onMouseOut']);
  useProperties(pointCollection, props, ['Styles']);
  return {
    pointCollection,
    setPointCollection,
    points,
    setPoints
  };
}

;// CONCATENATED MODULE: ../point-collection/esm/index.js




/* harmony default export */ const point_collection_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    pointCollection,
    setPoints
  } = usePointCollection(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setPoints(props.points), [props.points]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    pointCollection
  }), [pointCollection]);
  return null;
}));

;// CONCATENATED MODULE: ../drawing-manager/esm/useDrawingManager.js



function useDrawingManager(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    isOpen,
    drawingMode,
    enableDrawingTool,
    enableCalculate,
    drawingToolOptions,
    markerOptions,
    circleOptions,
    polylineOptions,
    polygonOptions,
    rectangleOptions
  } = props;
  var {
    map
  } = useMapContext();
  var [drawingManager, setDrawingManager] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var libSDK = window.BMapLib;
  var [bMapLib, setBMapLib] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(libSDK);
  var [loadMapLib, setLoadBMapLib] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)( false || !!libSDK);
  var opts = {
    isOpen,
    drawingMode,
    enableDrawingTool,
    enableCalculate,
    drawingToolOptions,
    markerOptions,
    circleOptions,
    polylineOptions,
    polygonOptions,
    rectangleOptions
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    // 如果第一次加载，会执行下面的
    if (map && bMapLib && !drawingManager) {
      if (bMapLib.DrawingManager) {
        var instance = new BMapLib.DrawingManager(map, opts);
        setDrawingManager(instance);
      }
    } // 如果 bMapLib 已经加载过，会执行下面的


    if (map && bMapLib && !bMapLib.DrawingManager) {
      requireCss('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css').then(() => {});
      requireScript('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js').then(() => {
        if (window.BMapLib) {
          var newMapLib = Object.assign(window.BMapLib, bMapLib);
          setBMapLib(newMapLib);

          var _instance = new BMapLib.DrawingManager(map, opts);

          setDrawingManager(_instance);
        }
      }).catch(() => {});
    } // 如果第一次加载，会执行下面的


    if (!bMapLib && !loadMapLib) {
      setLoadBMapLib(true);
      requireCss('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.css').then(() => {});
      requireScript('//api.map.baidu.com/library/DrawingManager/1.4/src/DrawingManager_min.js').then(() => {
        if (window.BMapLib) {
          setBMapLib(window.BMapLib);
        }
      }).catch(() => {});
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map, loadMapLib, bMapLib, drawingManager]);
  return {
    drawingManager,
    setDrawingManager,
    BMapLib: bMapLib
  };
}

;// CONCATENATED MODULE: ../drawing-manager/esm/index.js




/* harmony default export */ const drawing_manager_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    drawingManager
  } = useDrawingManager(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    drawingManager,
    BMapLib
  }));
  return null;
}));

;// CONCATENATED MODULE: ../polyline/esm/usePolyline.js



function usePolyline(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons
  } = props;
  var {
    map
  } = useMapContext();
  var [polyline, setPolyline] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [path, setPath] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.path || []); // eslint-disable-next-line react-hooks/exhaustive-deps

  var opts = {
    strokeColor,
    strokeWeight,
    strokeOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking,
    icons
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    return () => {
      if (polyline && map) {
        map.removeOverlay(polyline);
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(() => {
    if (map && !polyline) {
      var points = (props.path || []).map(item => new BMap.Point(item.lng, item.lat));
      var instance = new BMap.Polyline(points, opts);
      map.addOverlay(instance);
      setPolyline(instance);
    }
  }, [map, opts, polyline, props.path]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (path && polyline) {
      var points = path.map(item => new BMap.Point(item.lng, item.lat));
      polyline.setPath(points);
    }
  }, [polyline, path]);
  useVisiable(polyline, props);
  useEventProperties(polyline, props, ['Click', 'DblClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'Remove', 'LineUpdate']);
  useEnableProperties(polyline, props, ['Editing', 'MassClear']); // PositionAt

  useProperties(polyline, props, ['StrokeColor', 'StrokeOpacity', 'StrokeWeight', 'StrokeStyle']);
  return {
    polyline,
    setPolyline,
    path,
    setPath
  };
}

;// CONCATENATED MODULE: ../polyline/esm/index.js




/* harmony default export */ const polyline_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    polyline,
    setPath
  } = usePolyline(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setPath(props.path), [props.path]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polyline
  }), [polyline, props]);
  return null;
}));

;// CONCATENATED MODULE: ../polygon/esm/usePolygon.js



function usePolygon(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking
  } = props;
  var {
    map
  } = useMapContext();
  var [polygon, setPolygon] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var [path, setPath] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(props.path || []);
  var opts = {
    strokeColor,
    fillColor,
    strokeWeight,
    strokeOpacity,
    fillOpacity,
    strokeStyle,
    enableMassClear,
    enableEditing,
    enableClicking
  };
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!BMap || !map) return noop;
    var points = (path || []).map(item => new BMap.Point(item.lng, item.lat));
    var instance = new BMap.Polygon(points, opts);
    map.addOverlay(instance);
    setPolygon(instance);
    return function () {
      map.removeOverlay(instance);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (path && polygon) {
      var points = path.map(item => new BMap.Point(item.lng, item.lat));
      polygon.setPath(points);
    }
  }, [polygon, path]);
  useVisiable(polygon, props);
  useEventProperties(polygon, props, ['Click', 'DoubleClick', 'MouseDown', 'MouseUp', 'MouseOut', 'MouseOver', 'Remove', 'LineUpdate']);
  useEnableProperties(polygon, props, ['Editing', 'MassClear']); // PositionAt

  useProperties(polygon, props, ['StrokeColor', 'StrokeOpacity', 'FillColor', 'FillOpacity', 'StrokeWeight', 'StrokeStyle']);
  return {
    polygon,
    setPolygon,
    path,
    setPath
  };
}

;// CONCATENATED MODULE: ../polygon/esm/index.js




/* harmony default export */ const polygon_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    polygon,
    setPath
  } = usePolygon(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => setPath(props.path), [props.path]); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    polygon
  }), [polygon, props]);
  return null;
}));

;// CONCATENATED MODULE: ../with-map/esm/index.js




function withMap(Comp) {
  return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => /*#__PURE__*/(0,jsx_runtime.jsx)(esm, _extends({}, props, {
    children: mapProps => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Comp, _extends({
        ref: ref
      }, props, mapProps));
    }
  })));
}

;// CONCATENATED MODULE: ../require-script/esm/index.js




/* harmony default export */ const require_script_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    children,
    map,
    container
  } = props || {};
  var [completed, setCompleted] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(false);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (props.src) {
      requireScript(props.src).then(() => {
        setCompleted(true);
        props.onCompleted && props.onCompleted();
      }).catch(err => {
        props.onFailed && props.onFailed(err);
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  var childs = external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(children);

  if (completed) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
      children: [typeof children === 'function' && children({
        BMap,
        map,
        container
      }), childs.map(child => {
        if (! /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) return null;
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, _extends({}, child.props, {
          BMap,
          map,
          container
        }));
      })]
    });
  }

  return null;
}));

;// CONCATENATED MODULE: ../control/esm/getControl.js
function getControl_getCustomOverlay() {
  return class extends BMap.Control {
    constructor(elm, defaultAnchor, defaultOffset) {
      super();
      this.container = void 0;
      this.map = void 0;

      this.initialize = map => {
        this.map = map; // 添加DOM元素到地图中

        map.getContainer().appendChild(this.container);
        return this.container;
      };

      this.draw = () => {};

      this.container = elm;
      this.defaultAnchor = defaultAnchor || BMAP_ANCHOR_TOP_LEFT;
      this.defaultOffset = defaultOffset || new BMap.Size(10, 10);
    }

  };
}

;// CONCATENATED MODULE: ../control/esm/useControl.js




function useControl(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    container
  } = useRenderDom({
    children: props.children
  });
  var [control, setControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    offset,
    anchor
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !control && props.children) {
      var _Control = getControl_getCustomOverlay();

      var instance = new _Control(container, anchor, offset);
      setControl(instance);
      map.addOverlay(instance);
    }

    return () => {
      if (map && control) () => {
        map.removeControl(control);
      };
    };
  }, [map, control, anchor, offset, container, props.children]);
  useVisiable(control, props);
  useProperties(control, props, ['Anchor', 'Offset']);
  return {
    control,
    setControl
  };
}

;// CONCATENATED MODULE: ../control/esm/index.js




/* harmony default export */ const control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    control
  } = useControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    control
  }), [control]);
  return null;
}));

;// CONCATENATED MODULE: ../copyright-control/esm/useCopyrightControl.js



function useCopyrightControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [copyrightControl, setCopyrightControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !copyrightControl) {
      var instance = new BMap.CopyrightControl({
        anchor: anchor || BMAP_ANCHOR_TOP_RIGHT,
        offset
      });
      map.addControl(instance);
      setCopyrightControl(instance);
    }

    return () => {
      if (map && copyrightControl) {
        map.removeControl(copyrightControl);
      }
    };
  }, [map, copyrightControl, anchor, offset]);
  useVisiable(copyrightControl, props);
  useProperties(copyrightControl, props, ['Anchor', 'Offset']);
  return {
    copyrightControl,
    setCopyrightControl
  };
}

;// CONCATENATED MODULE: ../copyright-control/esm/Item.js


var uid = 1;
function CopyrightControlItem(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    children,
    control,
    bounds
  } = props;
  var [id] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(uid++);
  var {
    container
  } = useRenderDom({
    children
  });
  var prevId = usePrevious(id);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (control) {
      control.addCopyright({
        id,
        bounds,
        content: container.innerHTML
      });
    }

    return function () {
      if (prevId && control) {
        control.removeCopyright(prevId);
      }
    };
  }, [children, control]);
  return null;
}

;// CONCATENATED MODULE: ../copyright-control/esm/index.js







var CopyrightControl = /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    copyrightControl
  } = useCopyrightControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    copyrightControl
  }), [copyrightControl]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(external_root_React_commonjs2_react_commonjs_react_amd_react_.Fragment, {
    children: external_root_React_commonjs2_react_commonjs_react_amd_react_default().Children.toArray(props.children).map((child, index) => {
      if ( /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().isValidElement(child)) {
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().cloneElement(child, {
          control: copyrightControl,
          id: index + 1
        });
      }

      return child;
    })
  });
});
CopyrightControl.Item = CopyrightControlItem;
/* harmony default export */ const copyright_control_esm = (CopyrightControl);

;// CONCATENATED MODULE: ../navigation-control/esm/useNavigationControl.js



function useNavigationControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [navigationControl, setNavigationControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset,
    type,
    showZoomInfo,
    enableGeolocation
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!map || navigationControl) return;
    var instance = new BMap.NavigationControl({
      anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
      offset,
      type,
      showZoomInfo,
      enableGeolocation
    });
    map.addControl(instance);
    setNavigationControl(instance);
    return () => {
      if (map && instance) {
        map.removeControl(instance);
      }
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  useVisiable(navigationControl, props);
  useProperties(navigationControl, props, ['Anchor', 'Offset', 'Type']);
  return {
    navigationControl,
    setNavigationControl
  };
}

;// CONCATENATED MODULE: ../navigation-control/esm/index.js




/* harmony default export */ const navigation_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    navigationControl
  } = useNavigationControl(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    navigationControl
  }), [navigationControl]);
  return null;
}));

;// CONCATENATED MODULE: ../geolocation-control/esm/useGeolocationControl.js



function useGeolocationControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [geolocationControl, setGeolocationControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset,
    showAddressBar,
    enableAutoLocation,
    locationIcon
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !geolocationControl) {
      var instance = new BMap.GeolocationControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        showAddressBar,
        enableAutoLocation,
        locationIcon
      });
      map.addControl(instance);
      setGeolocationControl(instance);
      return () => {
        if (map && instance) {
          map.removeControl(instance);
        }
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(geolocationControl, props);
  useEventProperties(geolocationControl, props, ['LocationSuccess', 'LocationError'], 'CamelCase');
  useProperties(geolocationControl, props, ['Anchor', 'Offset']);
  return {
    geolocationControl,
    setGeolocationControl
  };
}

;// CONCATENATED MODULE: ../geolocation-control/esm/index.js




/* harmony default export */ const geolocation_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    geolocationControl
  } = useGeolocationControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    geolocationControl
  }), [geolocationControl, props]);
  return null;
}));

;// CONCATENATED MODULE: ../overview-map-control/esm/useOverviewMapControl.js



function useOverviewMapControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [overviewMapControl, setOverviewMapControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset,
    size,
    isOpen
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !overviewMapControl) {
      var instance = new BMap.OverviewMapControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        size,
        isOpen
      });
      map.addControl(instance);
      setOverviewMapControl(instance);
      return () => {
        map.removeControl(instance);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(overviewMapControl, props);
  useEventProperties(overviewMapControl, props, ['ViewChanged', 'ViewChanging']);
  useProperties(overviewMapControl, props, ['Anchor', 'Offset', 'Size']);
  return {
    overviewMapControl,
    setOverviewMapControl
  };
}

;// CONCATENATED MODULE: ../overview-map-control/esm/index.js




/* harmony default export */ const overview_map_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    overviewMapControl
  } = useOverviewMapControl(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    overviewMapControl
  }), [overviewMapControl]);
  return null;
}));

;// CONCATENATED MODULE: ../scale-control/esm/useScaleControl.js



function useScaleControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [scaleControl, setScaleControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !scaleControl) {
      var instance = new BMap.ScaleControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset
      });
      map.addControl(instance);
      setScaleControl(instance);
      return () => {
        map.removeControl(instance);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(scaleControl, props);
  useProperties(scaleControl, props, ['Anchor', 'Offset', 'Unit']);
  return {
    scaleControl,
    setScaleControl
  };
}

;// CONCATENATED MODULE: ../scale-control/esm/index.js




/* harmony default export */ const scale_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    scaleControl
  } = useScaleControl(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    scaleControl
  }), [scaleControl]);
  return null;
}));

;// CONCATENATED MODULE: ../type-control/esm/useMapTypeControl.js



function useMapTypeControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [mapTypeControl, setMapTypeControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    anchor,
    offset,
    type,
    mapTypes
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !mapTypeControl) {
      var instance = new BMap.MapTypeControl({
        anchor: anchor || BMAP_ANCHOR_TOP_LEFT,
        offset,
        type,
        mapTypes
      });
      map.addControl(instance);
      setMapTypeControl(instance);
      return () => {
        map.removeControl(instance);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(mapTypeControl, props);
  useProperties(mapTypeControl, props, ['Anchor', 'Offset', 'Unit']);
  return {
    mapTypeControl,
    setMapTypeControl
  };
}

;// CONCATENATED MODULE: ../type-control/esm/index.js




/* harmony default export */ const type_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    mapTypeControl
  } = useMapTypeControl(props);
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    mapTypeControl
  }), [mapTypeControl, props]);
  return null;
}));

;// CONCATENATED MODULE: ../panorama-control/esm/usePanoramaControl.js



function usePanoramaControl(props) {
  if (props === void 0) {
    props = {};
  }

  var [panoramaControl, setPanoramaControl] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (map && !panoramaControl) {
      var instance = new BMap.PanoramaControl();
      map.addControl(instance);
      setPanoramaControl(instance);
      return () => {
        map.removeControl(instance);
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(panoramaControl, props);
  return {
    panoramaControl,
    setPanoramaControl
  };
}

;// CONCATENATED MODULE: ../panorama-control/esm/index.js




/* harmony default export */ const panorama_control_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    panoramaControl
  } = usePanoramaControl(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    panoramaControl
  }), [panoramaControl]);
  return null;
}));

;// CONCATENATED MODULE: ../ground-overlay/esm/useGroundOverlay.js



function useGroundOverlay(props) {
  if (props === void 0) {
    props = {};
  }

  var [groundOverlay, setGroundOverlay] = (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)();
  var {
    bounds,
    opacity,
    imageURL,
    displayOnMinLevel,
    displayOnMaxLevel
  } = props;
  var {
    map
  } = useMapContext();
  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(() => {
    if (!groundOverlay && bounds && map) {
      var instance = new BMap.GroundOverlay(bounds, {
        opacity,
        imageURL,
        displayOnMinLevel,
        displayOnMaxLevel
      });
      map.addOverlay(instance);
      setGroundOverlay(instance);
      return () => {
        if (map && instance) {
          map.removeOverlay(instance);
        }
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [map]);
  useVisiable(groundOverlay, props);
  useEventProperties(groundOverlay, props, ['Click', 'DblClick']);
  useProperties(groundOverlay, props, ['Bounds', 'Opacity', 'ImageURL', 'DisplayOnMinLevel', 'DispalyOnMaxLevel']);
  return {
    groundOverlay,
    setGroundOverlay
  };
}

;// CONCATENATED MODULE: ../ground-overlay/esm/index.js




/* harmony default export */ const ground_overlay_esm = (/*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_default().forwardRef((props, ref) => {
  var {
    groundOverlay
  } = useGroundOverlay(props); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useImperativeHandle)(ref, () => _extends({}, props, {
    groundOverlay
  }), [groundOverlay]);
  return null;
}));

;// CONCATENATED MODULE: ./src/index.tsx

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});