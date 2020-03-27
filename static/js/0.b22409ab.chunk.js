/*! For license information please see 0.b22409ab.chunk.js.LICENSE.txt */
  export default function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) { return typeof obj; };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };
    }

    return _typeof(obj);
  }
`,s.jsx=o("7.0.0-beta.0")`
  var REACT_ELEMENT_TYPE;

  export default function _createRawReactElement(type, props, key, children) {
    if (!REACT_ELEMENT_TYPE) {
      REACT_ELEMENT_TYPE = (
        typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element")
      ) || 0xeac7;
    }

    var defaultProps = type && type.defaultProps;
    var childrenLength = arguments.length - 3;

    if (!props && childrenLength !== 0) {
      // If we're going to assign props.children, we create a new object now
      // to avoid mutating defaultProps.
      props = {
        children: void 0,
      };
    }

    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = new Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3];
      }
      props.children = childArray;
    }

    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName];
        }
      }
    } else if (!props) {
      props = defaultProps || {};
    }

    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null,
    };
  }
`,s.asyncIterator=o("7.0.0-beta.0")`
  export default function _asyncIterator(iterable) {
    var method
    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) {
        method = iterable[Symbol.asyncIterator]
        if (method != null) return method.call(iterable);
      }
      if (Symbol.iterator) {
        method = iterable[Symbol.iterator]
        if (method != null) return method.call(iterable);
      }
    }
    throw new TypeError("Object is not async iterable");
  }
`,s.AwaitValue=o("7.0.0-beta.0")`
  export default function _AwaitValue(value) {
    this.wrapped = value;
  }
`,s.AsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null,
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg)
        var value = result.value;
        var wrappedAwait = value instanceof AwaitValue;

        Promise.resolve(wrappedAwait ? value.wrapped : value).then(
          function (arg) {
            if (wrappedAwait) {
              resume(key === "return" ? "return" : "next", arg);
              return
            }

            settle(result.done ? "return" : "normal", arg);
          },
          function (err) { resume("throw", err); });
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({ value: value, done: true });
          break;
        case "throw":
          front.reject(value);
          break;
        default:
          front.resolve({ value: value, done: false });
          break;
      }

      front = front.next;
      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    // Hide "return" method if generator return is not supported
    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; };
  }

  AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };
  AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };
  AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };
`,s.wrapAsyncGenerator=o("7.0.0-beta.0")`
  import AsyncGenerator from "AsyncGenerator";

  export default function _wrapAsyncGenerator(fn) {
    return function () {
      return new AsyncGenerator(fn.apply(this, arguments));
    };
  }
`,s.awaitAsyncGenerator=o("7.0.0-beta.0")`
  import AwaitValue from "AwaitValue";

  export default function _awaitAsyncGenerator(value) {
    return new AwaitValue(value);
  }
`,s.asyncGeneratorDelegate=o("7.0.0-beta.0")`
  export default function _asyncGeneratorDelegate(inner, awaitWrap) {
    var iter = {}, waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new Promise(function (resolve) { resolve(inner[key](value)); });
      return { done: false, value: awaitWrap(value) };
    };

    if (typeof Symbol === "function" && Symbol.iterator) {
      iter[Symbol.iterator] = function () { return this; };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }
      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }
        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        if (waiting) {
          waiting = false;
          return value;
        }
        return pump("return", value);
      };
    }

    return iter;
  }
`,s.asyncToGenerator=o("7.0.0-beta.0")`
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

  export default function _asyncToGenerator(fn) {
    return function () {
      var self = this, args = arguments;
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
`,s.classCallCheck=o("7.0.0-beta.0")`
  export default function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
`,s.createClass=o("7.0.0-beta.0")`
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i ++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  export default function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
`,s.defineEnumerableProperties=o("7.0.0-beta.0")`
  export default function _defineEnumerableProperties(obj, descs) {
    for (var key in descs) {
      var desc = descs[key];
      desc.configurable = desc.enumerable = true;
      if ("value" in desc) desc.writable = true;
      Object.defineProperty(obj, key, desc);
    }

    // Symbols are not enumerated over by for-in loops. If native
    // Symbols are available, fetch all of the descs object's own
    // symbol properties and define them on our target object too.
    if (Object.getOwnPropertySymbols) {
      var objectSymbols = Object.getOwnPropertySymbols(descs);
      for (var i = 0; i < objectSymbols.length; i++) {
        var sym = objectSymbols[i];
        var desc = descs[sym];
        desc.configurable = desc.enumerable = true;
        if ("value" in desc) desc.writable = true;
        Object.defineProperty(obj, sym, desc);
      }
    }
    return obj;
  }
`,s.defaults=o("7.0.0-beta.0")`
  export default function _defaults(obj, defaults) {
    var keys = Object.getOwnPropertyNames(defaults);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = Object.getOwnPropertyDescriptor(defaults, key);
      if (value && value.configurable && obj[key] === undefined) {
        Object.defineProperty(obj, key, value);
      }
    }
    return obj;
  }
`,s.defineProperty=o("7.0.0-beta.0")`
  export default function _defineProperty(obj, key, value) {
    // Shortcircuit the slow defineProperty path when possible.
    // We are trying to avoid issues where setters defined on the
    // prototype cause side effects under the fast path of simple
    // assignment. By checking for existence of the property with
    // the in operator, we can optimize most of this overhead away.
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
`,s.extends=o("7.0.0-beta.0")`
  export default function _extends() {
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
`,s.objectSpread=o("7.0.0-beta.0")`
  import defineProperty from "defineProperty";

  export default function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? Object(arguments[i]) : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        defineProperty(target, key, source[key]);
      });
    }
    return target;
  }
`,s.objectSpread2=o("7.5.0")`
  import defineProperty from "defineProperty";

  // This function is different to "Reflect.ownKeys". The enumerableOnly
  // filters on symbol properties only. Returned string properties are always
  // enumerable. It is good to use in objectSpread.

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  export default function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = (arguments[i] != null) ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
`,s.inherits=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";

  export default function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }
`,s.inheritsLoose=o("7.0.0-beta.0")`
  export default function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
`,s.getPrototypeOf=o("7.0.0-beta.0")`
  export default function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
`,s.setPrototypeOf=o("7.0.0-beta.0")`
  export default function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
`,s.isNativeReflectConstruct=o("7.9.0")`
  export default function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;

    // core-js@3
    if (Reflect.construct.sham) return false;

    // Proxy can't be polyfilled. Every browser implemented
    // proxies before or at the same time as Reflect.construct,
    // so if they support Proxy they also support Reflect.construct.
    if (typeof Proxy === "function") return true;

    // Since Reflect.construct can't be properly polyfilled, some
    // implementations (e.g. core-js@2) don't set the correct internal slots.
    // Those polyfills don't allow us to subclass built-ins, so we need to
    // use our fallback implementation.
    try {
      // If the internal slots aren't set, this throws an error similar to
      //   TypeError: this is not a Date object.
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
      return true;
    } catch (e) {
      return false;
    }
  }
`,s.construct=o("7.0.0-beta.0")`
  import setPrototypeOf from "setPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";

  export default function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      // NOTE: If Parent !== Class, the correct __proto__ is set *after*
      //       calling the constructor.
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    // Avoid issues with Class being present but undefined when it wasn't
    // present in the original call.
    return _construct.apply(null, arguments);
  }
`,s.isNativeFunction=o("7.0.0-beta.0")`
  export default function _isNativeFunction(fn) {
    // Note: This function returns "true" for core-js functions.
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
`,s.wrapNativeSuper=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";
  import setPrototypeOf from "setPrototypeOf";
  import isNativeFunction from "isNativeFunction";
  import construct from "construct";

  export default function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        _cache.set(Class, Wrapper);
      }
      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor)
      }
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true,
        }
      });

      return setPrototypeOf(Wrapper, Class);
    }

    return _wrapNativeSuper(Class)
  }
`,s.instanceof=o("7.0.0-beta.0")`
  export default function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
      return !!right[Symbol.hasInstance](left);
    } else {
      return left instanceof right;
    }
  }
`,s.interopRequireDefault=o("7.0.0-beta.0")`
  export default function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
`,s.interopRequireWildcard=o("7.0.0-beta.0")`
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;

    var cache = new WeakMap();
    _getRequireWildcardCache = function () { return cache; };
    return cache;
  }

  export default function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
      return { default: obj }
    }

    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
`,s.newArrowCheck=o("7.0.0-beta.0")`
  export default function _newArrowCheck(innerThis, boundThis) {
    if (innerThis !== boundThis) {
      throw new TypeError("Cannot instantiate an arrow function");
    }
  }
`,s.objectDestructuringEmpty=o("7.0.0-beta.0")`
  export default function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }
`,s.objectWithoutPropertiesLoose=o("7.0.0-beta.0")`
  export default function _objectWithoutPropertiesLoose(source, excluded) {
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
`,s.objectWithoutProperties=o("7.0.0-beta.0")`
  import objectWithoutPropertiesLoose from "objectWithoutPropertiesLoose";

  export default function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
`,s.assertThisInitialized=o("7.0.0-beta.0")`
  export default function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
`,s.possibleConstructorReturn=o("7.0.0-beta.0")`
  import assertThisInitialized from "assertThisInitialized";

  export default function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    return assertThisInitialized(self);
  }
`,s.createSuper=o("7.9.0")`
  import getPrototypeOf from "getPrototypeOf";
  import isNativeReflectConstruct from "isNativeReflectConstruct";
  import possibleConstructorReturn from "possibleConstructorReturn";

  export default function _createSuper(Derived) {
    return function () {
      var Super = getPrototypeOf(Derived), result;
      if (isNativeReflectConstruct()) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return possibleConstructorReturn(this, result);
    }
  }
 `,s.superPropBase=o("7.0.0-beta.0")`
  import getPrototypeOf from "getPrototypeOf";

  export default function _superPropBase(object, property) {
    // Yes, this throws if object is null to being with, that's on purpose.
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
`,s.get=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";

  export default function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = superPropBase(target, property);

        if (!base) return;

        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }
    return _get(target, property, receiver || target);
  }
`,s.set=o("7.0.0-beta.0")`
  import superPropBase from "superPropBase";
  import defineProperty from "defineProperty";

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = superPropBase(target, property);
        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);
          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            // Both getter and non-writable fall into this.
            return false;
          }
        }

        // Without a super that defines the property, spec boils down to
        // "define on receiver" for some reason.
        desc = Object.getOwnPropertyDescriptor(receiver, property);
        if (desc) {
          if (!desc.writable) {
            // Setter, getter, and non-writable fall into this.
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          // Avoid setters that may be defined on Sub's prototype, but not on
          // the instance.
          defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  export default function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }
`,s.taggedTemplateLiteral=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteral(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    return Object.freeze(Object.defineProperties(strings, {
        raw: { value: Object.freeze(raw) }
    }));
  }
`,s.taggedTemplateLiteralLoose=o("7.0.0-beta.0")`
  export default function _taggedTemplateLiteralLoose(strings, raw) {
    if (!raw) { raw = strings.slice(0); }
    strings.raw = raw;
    return strings;
  }
`,s.readOnlyError=o("7.0.0-beta.0")`
  export default function _readOnlyError(name) {
    throw new Error("\\"" + name + "\\" is read-only");
  }
`,s.classNameTDZError=o("7.0.0-beta.0")`
  export default function _classNameTDZError(name) {
    throw new Error("Class \\"" + name + "\\" cannot be referenced in computed property keys.");
  }
`,s.temporalUndefined=o("7.0.0-beta.0")`
  // This function isn't mean to be called, but to be used as a reference.
  // We can't use a normal object because it isn't hoisted.
  export default function _temporalUndefined() {}
`,s.tdz=o("7.5.5")`
  export default function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
`,s.temporalRef=o("7.0.0-beta.0")`
  import undef from "temporalUndefined";
  import err from "tdz";

  export default function _temporalRef(val, name) {
    return val === undef ? err(name) : val;
  }
`,s.slicedToArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimit from "iterableToArrayLimit";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimit(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.slicedToArrayLoose=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArrayLimitLoose from "iterableToArrayLimitLoose";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _slicedToArrayLoose(arr, i) {
    return (
      arrayWithHoles(arr) ||
      iterableToArrayLimitLoose(arr, i) ||
      unsupportedIterableToArray(arr, i) ||
      nonIterableRest()
    );
  }
`,s.toArray=o("7.0.0-beta.0")`
  import arrayWithHoles from "arrayWithHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableRest from "nonIterableRest";

  export default function _toArray(arr) {
    return (
      arrayWithHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableRest()
    );
  }
`,s.toConsumableArray=o("7.0.0-beta.0")`
  import arrayWithoutHoles from "arrayWithoutHoles";
  import iterableToArray from "iterableToArray";
  import unsupportedIterableToArray from "unsupportedIterableToArray";
  import nonIterableSpread from "nonIterableSpread";

  export default function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) ||
      iterableToArray(arr) ||
      unsupportedIterableToArray(arr) ||
      nonIterableSpread()
    );
  }
`,s.arrayWithoutHoles=o("7.0.0-beta.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }
`,s.arrayWithHoles=o("7.0.0-beta.0")`
  export default function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
`,s.iterableToArray=o("7.0.0-beta.0")`
  export default function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }
`,s.iterableToArrayLimit=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimit(arr, i) {
    // this is an expanded form of \`for...of\` that properly supports abrupt completions of
    // iterators etc. variable names have been minimised to reduce the size of this massive
    // helper. sometimes spec compliance is annoying :(
    //
    // _n = _iteratorNormalCompletion
    // _d = _didIteratorError
    // _e = _iteratorError
    // _i = _iterator
    // _s = _step

    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
`,s.iterableToArrayLimitLoose=o("7.0.0-beta.0")`
  export default function _iterableToArrayLimitLoose(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;

    var _arr = [];
    for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      _arr.push(_step.value);
      if (i && _arr.length === i) break;
    }
    return _arr;
  }
`,s.unsupportedIterableToArray=o("7.9.0")`
  import arrayLikeToArray from "arrayLikeToArray";

  export default function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return arrayLikeToArray(o, minLen);
  }
`,s.arrayLikeToArray=o("7.9.0")`
  export default function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
`,s.nonIterableSpread=o("7.0.0-beta.0")`
  export default function _nonIterableSpread() {
    throw new TypeError(
      "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.nonIterableRest=o("7.0.0-beta.0")`
  export default function _nonIterableRest() {
    throw new TypeError(
      "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
`,s.createForOfIteratorHelper=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  // s: start (create the iterator)
  // n: next
  // e: error (called whenever something throws)
  // f: finish (always called at the end)

  export default function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (Array.isArray(o) || (o = unsupportedIterableToArray(o))) {
        var i = 0;
        var F = function(){};
        return {
          s: F,
          n: function() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          },
          e: function(e) { throw e; },
          f: F,
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var it, normalCompletion = true, didErr = false, err;

    return {
      s: function() {
        it = o[Symbol.iterator]();
      },
      n: function() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function(e) {
        didErr = true;
        err = e;
      },
      f: function() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
`,s.createForOfIteratorHelperLoose=o("7.9.0")`
  import unsupportedIterableToArray from "unsupportedIterableToArray";

  export default function _createForOfIteratorHelperLoose(o) {
    var i = 0;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      // Fallback for engines without symbol support
      if (Array.isArray(o) || (o = unsupportedIterableToArray(o)))
        return function() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    i = o[Symbol.iterator]();
    return i.next.bind(i);
  }
`,s.skipFirstGeneratorNext=o("7.0.0-beta.0")`
  export default function _skipFirstGeneratorNext(fn) {
    return function () {
      var it = fn.apply(this, arguments);
      it.next();
      return it;
    }
  }
`,s.toPrimitive=o("7.1.5")`
  export default function _toPrimitive(
    input,
    hint /*: "default" | "string" | "number" | void */
  ) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
`,s.toPropertyKey=o("7.1.5")`
  import toPrimitive from "toPrimitive";

  export default function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }
`,s.initializerWarningHelper=o("7.0.0-beta.0")`
    export default function _initializerWarningHelper(descriptor, context){
        throw new Error(
          'Decorating class property failed. Please ensure that ' +
          'proposal-class-properties is enabled and runs after the decorators transform.'
        );
    }
`,s.initializerDefineProperty=o("7.0.0-beta.0")`
    export default function _initializerDefineProperty(target, property, descriptor, context){
        if (!descriptor) return;

        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0,
        });
    }
`,s.applyDecoratedDescriptor=o("7.0.0-beta.0")`
    export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context){
        var desc = {};
        Object.keys(descriptor).forEach(function(key){
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;
        if ('value' in desc || desc.initializer){
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function(desc, decorator){
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0){
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0){
            // This is a hack to avoid this being processed by 'transform-runtime'.
            // See issue #9.
            Object.defineProperty(target, property, desc);
            desc = null;
        }

        return desc;
    }
`,s.classPrivateFieldLooseKey=o("7.0.0-beta.0")`
  var id = 0;
  export default function _classPrivateFieldKey(name) {
    return "__private_" + (id++) + "_" + name;
  }
`,s.classPrivateFieldLooseBase=o("7.0.0-beta.0")`
  export default function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }
    return receiver;
  }
`,s.classPrivateFieldGet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classPrivateFieldSet=o("7.0.0-beta.0")`
  export default function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      descriptor.value = value;
    }

    return value;
  }
`,s.classPrivateFieldDestructureSet=o("7.4.4")`
  export default function _classPrivateFieldDestructureSet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (descriptor.set) {
      if (!("__destrObj" in descriptor)) {
        descriptor.__destrObj = {
          set value(v) {
            descriptor.set.call(receiver, v)
          },
        };
      }
      return descriptor.__destrObj;
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }

      return descriptor;
    }
  }
`,s.classStaticPrivateFieldSpecGet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
`,s.classStaticPrivateFieldSpecSet=o("7.0.2")`
  export default function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        // This should only throw in strict mode, but class bodies are
        // always strict and private fields can only be used inside
        // class bodies.
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }

    return value;
  }
`,s.classStaticPrivateMethodGet=o("7.3.2")`
  export default function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    if (receiver !== classConstructor) {
      throw new TypeError("Private static access of wrong provenance");
    }
    return method;
  }
`,s.classStaticPrivateMethodSet=o("7.3.2")`
  export default function _classStaticPrivateMethodSet() {
    throw new TypeError("attempted to set read only static private field");
  }
`,s.decorate=o("7.1.5")`
  import toArray from "toArray";
  import toPropertyKey from "toPropertyKey";

  // These comments are stripped by @babel/template
  /*::
  type PropertyDescriptor =
    | {
        value: any,
        writable: boolean,
        configurable: boolean,
        enumerable: boolean,
      }
    | {
        get?: () => any,
        set?: (v: any) => void,
        configurable: boolean,
        enumerable: boolean,
      };

  type FieldDescriptor ={
    writable: boolean,
    configurable: boolean,
    enumerable: boolean,
  };

  type Placement = "static" | "prototype" | "own";
  type Key = string | symbol; // PrivateName is not supported yet.

  type ElementDescriptor =
    | {
        kind: "method",
        key: Key,
        placement: Placement,
        descriptor: PropertyDescriptor
      }
    | {
        kind: "field",
        key: Key,
        placement: Placement,
        descriptor: FieldDescriptor,
        initializer?: () => any,
      };

  // This is exposed to the user code
  type ElementObjectInput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
  };

  // This is exposed to the user code
  type ElementObjectOutput = ElementDescriptor & {
    [@@toStringTag]?: "Descriptor"
    extras?: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  // This is exposed to the user code
  type ClassObject = {
    [@@toStringTag]?: "Descriptor",
    kind: "class",
    elements: ElementDescriptor[],
  };

  type ElementDecorator = (descriptor: ElementObjectInput) => ?ElementObjectOutput;
  type ClassDecorator = (descriptor: ClassObject) => ?ClassObject;
  type ClassFinisher = <A, B>(cl: Class<A>) => Class<B>;

  // Only used by Babel in the transform output, not part of the spec.
  type ElementDefinition =
    | {
        kind: "method",
        value: any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
      }
    | {
        kind: "field",
        value: () => any,
        key: Key,
        static?: boolean,
        decorators?: ElementDecorator[],
    };

  declare function ClassFactory<C>(initialize: (instance: C) => void): {
    F: Class<C>,
    d: ElementDefinition[]
  }

  */

  /*::
  // Various combinations with/without extras and with one or many finishers

  type ElementFinisherExtras = {
    element: ElementDescriptor,
    finisher?: ClassFinisher,
    extras?: ElementDescriptor[],
  };

  type ElementFinishersExtras = {
    element: ElementDescriptor,
    finishers: ClassFinisher[],
    extras: ElementDescriptor[],
  };

  type ElementsFinisher = {
    elements: ElementDescriptor[],
    finisher?: ClassFinisher,
  };

  type ElementsFinishers = {
    elements: ElementDescriptor[],
    finishers: ClassFinisher[],
  };

  */

  /*::

  type Placements = {
    static: Key[],
    prototype: Key[],
    own: Key[],
  };

  */

  // ClassDefinitionEvaluation (Steps 26-*)
  export default function _decorate(
    decorators /*: ClassDecorator[] */,
    factory /*: ClassFactory */,
    superClass /*: ?Class<*> */,
    mixins /*: ?Array<Function> */,
  ) /*: Class<*> */ {
    var api = _getDecoratorsApi();
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        api = mixins[i](api);
      }
    }

    var r = factory(function initialize(O) {
      api.initializeInstanceElements(O, decorated.elements);
    }, superClass);
    var decorated = api.decorateClass(
      _coalesceClassElements(r.d.map(_createElementDescriptor)),
      decorators,
    );

    api.initializeClassElements(r.F, decorated.elements);

    return api.runClassFinishers(r.F, decorated.finishers);
  }

  function _getDecoratorsApi() {
    _getDecoratorsApi = function() {
      return api;
    };

    var api = {
      elementsDefinitionOrder: [["method"], ["field"]],

      // InitializeInstanceElements
      initializeInstanceElements: function(
        /*::<C>*/ O /*: C */,
        elements /*: ElementDescriptor[] */,
      ) {
        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            if (element.kind === kind && element.placement === "own") {
              this.defineClassElement(O, element);
            }
          }, this);
        }, this);
      },

      // InitializeClassElements
      initializeClassElements: function(
        /*::<C>*/ F /*: Class<C> */,
        elements /*: ElementDescriptor[] */,
      ) {
        var proto = F.prototype;

        ["method", "field"].forEach(function(kind) {
          elements.forEach(function(element /*: ElementDescriptor */) {
            var placement = element.placement;
            if (
              element.kind === kind &&
              (placement === "static" || placement === "prototype")
            ) {
              var receiver = placement === "static" ? F : proto;
              this.defineClassElement(receiver, element);
            }
          }, this);
        }, this);
      },

      // DefineClassElement
      defineClassElement: function(
        /*::<C>*/ receiver /*: C | Class<C> */,
        element /*: ElementDescriptor */,
      ) {
        var descriptor /*: PropertyDescriptor */ = element.descriptor;
        if (element.kind === "field") {
          var initializer = element.initializer;
          descriptor = {
            enumerable: descriptor.enumerable,
            writable: descriptor.writable,
            configurable: descriptor.configurable,
            value: initializer === void 0 ? void 0 : initializer.call(receiver),
          };
        }
        Object.defineProperty(receiver, element.key, descriptor);
      },

      // DecorateClass
      decorateClass: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var newElements /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];
        var placements /*: Placements */ = {
          static: [],
          prototype: [],
          own: [],
        };

        elements.forEach(function(element /*: ElementDescriptor */) {
          this.addElementPlacement(element, placements);
        }, this);

        elements.forEach(function(element /*: ElementDescriptor */) {
          if (!_hasDecorators(element)) return newElements.push(element);

          var elementFinishersExtras /*: ElementFinishersExtras */ = this.decorateElement(
            element,
            placements,
          );
          newElements.push(elementFinishersExtras.element);
          newElements.push.apply(newElements, elementFinishersExtras.extras);
          finishers.push.apply(finishers, elementFinishersExtras.finishers);
        }, this);

        if (!decorators) {
          return { elements: newElements, finishers: finishers };
        }

        var result /*: ElementsFinishers */ = this.decorateConstructor(
          newElements,
          decorators,
        );
        finishers.push.apply(finishers, result.finishers);
        result.finishers = finishers;

        return result;
      },

      // AddElementPlacement
      addElementPlacement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
        silent /*: boolean */,
      ) {
        var keys = placements[element.placement];
        if (!silent && keys.indexOf(element.key) !== -1) {
          throw new TypeError("Duplicated element (" + element.key + ")");
        }
        keys.push(element.key);
      },

      // DecorateElement
      decorateElement: function(
        element /*: ElementDescriptor */,
        placements /*: Placements */,
      ) /*: ElementFinishersExtras */ {
        var extras /*: ElementDescriptor[] */ = [];
        var finishers /*: ClassFinisher[] */ = [];

        for (
          var decorators = element.decorators, i = decorators.length - 1;
          i >= 0;
          i--
        ) {
          // (inlined) RemoveElementPlacement
          var keys = placements[element.placement];
          keys.splice(keys.indexOf(element.key), 1);

          var elementObject /*: ElementObjectInput */ = this.fromElementDescriptor(
            element,
          );
          var elementFinisherExtras /*: ElementFinisherExtras */ = this.toElementFinisherExtras(
            (0, decorators[i])(elementObject) /*: ElementObjectOutput */ ||
              elementObject,
          );

          element = elementFinisherExtras.element;
          this.addElementPlacement(element, placements);

          if (elementFinisherExtras.finisher) {
            finishers.push(elementFinisherExtras.finisher);
          }

          var newExtras /*: ElementDescriptor[] | void */ =
            elementFinisherExtras.extras;
          if (newExtras) {
            for (var j = 0; j < newExtras.length; j++) {
              this.addElementPlacement(newExtras[j], placements);
            }
            extras.push.apply(extras, newExtras);
          }
        }

        return { element: element, finishers: finishers, extras: extras };
      },

      // DecorateConstructor
      decorateConstructor: function(
        elements /*: ElementDescriptor[] */,
        decorators /*: ClassDecorator[] */,
      ) /*: ElementsFinishers */ {
        var finishers /*: ClassFinisher[] */ = [];

        for (var i = decorators.length - 1; i >= 0; i--) {
          var obj /*: ClassObject */ = this.fromClassDescriptor(elements);
          var elementsAndFinisher /*: ElementsFinisher */ = this.toClassDescriptor(
            (0, decorators[i])(obj) /*: ClassObject */ || obj,
          );

          if (elementsAndFinisher.finisher !== undefined) {
            finishers.push(elementsAndFinisher.finisher);
          }

          if (elementsAndFinisher.elements !== undefined) {
            elements = elementsAndFinisher.elements;

            for (var j = 0; j < elements.length - 1; j++) {
              for (var k = j + 1; k < elements.length; k++) {
                if (
                  elements[j].key === elements[k].key &&
                  elements[j].placement === elements[k].placement
                ) {
                  throw new TypeError(
                    "Duplicated element (" + elements[j].key + ")",
                  );
                }
              }
            }
          }
        }

        return { elements: elements, finishers: finishers };
      },

      // FromElementDescriptor
      fromElementDescriptor: function(
        element /*: ElementDescriptor */,
      ) /*: ElementObject */ {
        var obj /*: ElementObject */ = {
          kind: element.kind,
          key: element.key,
          placement: element.placement,
          descriptor: element.descriptor,
        };

        var desc = {
          value: "Descriptor",
          configurable: true,
        };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        if (element.kind === "field") obj.initializer = element.initializer;

        return obj;
      },

      // ToElementDescriptors
      toElementDescriptors: function(
        elementObjects /*: ElementObject[] */,
      ) /*: ElementDescriptor[] */ {
        if (elementObjects === undefined) return;
        return toArray(elementObjects).map(function(elementObject) {
          var element = this.toElementDescriptor(elementObject);
          this.disallowProperty(elementObject, "finisher", "An element descriptor");
          this.disallowProperty(elementObject, "extras", "An element descriptor");
          return element;
        }, this);
      },

      // ToElementDescriptor
      toElementDescriptor: function(
        elementObject /*: ElementObject */,
      ) /*: ElementDescriptor */ {
        var kind = String(elementObject.kind);
        if (kind !== "method" && kind !== "field") {
          throw new TypeError(
            'An element descriptor\\'s .kind property must be either "method" or' +
              ' "field", but a decorator created an element descriptor with' +
              ' .kind "' +
              kind +
              '"',
          );
        }

        var key = toPropertyKey(elementObject.key);

        var placement = String(elementObject.placement);
        if (
          placement !== "static" &&
          placement !== "prototype" &&
          placement !== "own"
        ) {
          throw new TypeError(
            'An element descriptor\\'s .placement property must be one of "static",' +
              ' "prototype" or "own", but a decorator created an element descriptor' +
              ' with .placement "' +
              placement +
              '"',
          );
        }

        var descriptor /*: PropertyDescriptor */ = elementObject.descriptor;

        this.disallowProperty(elementObject, "elements", "An element descriptor");

        var element /*: ElementDescriptor */ = {
          kind: kind,
          key: key,
          placement: placement,
          descriptor: Object.assign({}, descriptor),
        };

        if (kind !== "field") {
          this.disallowProperty(elementObject, "initializer", "A method descriptor");
        } else {
          this.disallowProperty(
            descriptor,
            "get",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "set",
            "The property descriptor of a field descriptor",
          );
          this.disallowProperty(
            descriptor,
            "value",
            "The property descriptor of a field descriptor",
          );

          element.initializer = elementObject.initializer;
        }

        return element;
      },

      toElementFinisherExtras: function(
        elementObject /*: ElementObject */,
      ) /*: ElementFinisherExtras */ {
        var element /*: ElementDescriptor */ = this.toElementDescriptor(
          elementObject,
        );
        var finisher /*: ClassFinisher */ = _optionalCallableProperty(
          elementObject,
          "finisher",
        );
        var extras /*: ElementDescriptors[] */ = this.toElementDescriptors(
          elementObject.extras,
        );

        return { element: element, finisher: finisher, extras: extras };
      },

      // FromClassDescriptor
      fromClassDescriptor: function(
        elements /*: ElementDescriptor[] */,
      ) /*: ClassObject */ {
        var obj = {
          kind: "class",
          elements: elements.map(this.fromElementDescriptor, this),
        };

        var desc = { value: "Descriptor", configurable: true };
        Object.defineProperty(obj, Symbol.toStringTag, desc);

        return obj;
      },

      // ToClassDescriptor
      toClassDescriptor: function(
        obj /*: ClassObject */,
      ) /*: ElementsFinisher */ {
        var kind = String(obj.kind);
        if (kind !== "class") {
          throw new TypeError(
            'A class descriptor\\'s .kind property must be "class", but a decorator' +
              ' created a class descriptor with .kind "' +
              kind +
              '"',
          );
        }

        this.disallowProperty(obj, "key", "A class descriptor");
        this.disallowProperty(obj, "placement", "A class descriptor");
        this.disallowProperty(obj, "descriptor", "A class descriptor");
        this.disallowProperty(obj, "initializer", "A class descriptor");
        this.disallowProperty(obj, "extras", "A class descriptor");

        var finisher = _optionalCallableProperty(obj, "finisher");
        var elements = this.toElementDescriptors(obj.elements);

        return { elements: elements, finisher: finisher };
      },

      // RunClassFinishers
      runClassFinishers: function(
        constructor /*: Class<*> */,
        finishers /*: ClassFinisher[] */,
      ) /*: Class<*> */ {
        for (var i = 0; i < finishers.length; i++) {
          var newConstructor /*: ?Class<*> */ = (0, finishers[i])(constructor);
          if (newConstructor !== undefined) {
            // NOTE: This should check if IsConstructor(newConstructor) is false.
            if (typeof newConstructor !== "function") {
              throw new TypeError("Finishers must return a constructor.");
            }
            constructor = newConstructor;
          }
        }
        return constructor;
      },

      disallowProperty: function(obj, name, objectType) {
        if (obj[name] !== undefined) {
          throw new TypeError(objectType + " can't have a ." + name + " property.");
        }
      }
    };

    return api;
  }

  // ClassElementEvaluation
  function _createElementDescriptor(
    def /*: ElementDefinition */,
  ) /*: ElementDescriptor */ {
    var key = toPropertyKey(def.key);

    var descriptor /*: PropertyDescriptor */;
    if (def.kind === "method") {
      descriptor = {
        value: def.value,
        writable: true,
        configurable: true,
        enumerable: false,
      };
    } else if (def.kind === "get") {
      descriptor = { get: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "set") {
      descriptor = { set: def.value, configurable: true, enumerable: false };
    } else if (def.kind === "field") {
      descriptor = { configurable: true, writable: true, enumerable: true };
    }

    var element /*: ElementDescriptor */ = {
      kind: def.kind === "field" ? "field" : "method",
      key: key,
      placement: def.static
        ? "static"
        : def.kind === "field"
        ? "own"
        : "prototype",
      descriptor: descriptor,
    };
    if (def.decorators) element.decorators = def.decorators;
    if (def.kind === "field") element.initializer = def.value;

    return element;
  }

  // CoalesceGetterSetter
  function _coalesceGetterSetter(
    element /*: ElementDescriptor */,
    other /*: ElementDescriptor */,
  ) {
    if (element.descriptor.get !== undefined) {
      other.descriptor.get = element.descriptor.get;
    } else {
      other.descriptor.set = element.descriptor.set;
    }
  }

  // CoalesceClassElements
  function _coalesceClassElements(
    elements /*: ElementDescriptor[] */,
  ) /*: ElementDescriptor[] */ {
    var newElements /*: ElementDescriptor[] */ = [];

    var isSameElement = function(
      other /*: ElementDescriptor */,
    ) /*: boolean */ {
      return (
        other.kind === "method" &&
        other.key === element.key &&
        other.placement === element.placement
      );
    };

    for (var i = 0; i < elements.length; i++) {
      var element /*: ElementDescriptor */ = elements[i];
      var other /*: ElementDescriptor */;

      if (
        element.kind === "method" &&
        (other = newElements.find(isSameElement))
      ) {
        if (
          _isDataDescriptor(element.descriptor) ||
          _isDataDescriptor(other.descriptor)
        ) {
          if (_hasDecorators(element) || _hasDecorators(other)) {
            throw new ReferenceError(
              "Duplicated methods (" + element.key + ") can't be decorated.",
            );
          }
          other.descriptor = element.descriptor;
        } else {
          if (_hasDecorators(element)) {
            if (_hasDecorators(other)) {
              throw new ReferenceError(
                "Decorators can't be placed on different accessors with for " +
                  "the same property (" +
                  element.key +
                  ").",
              );
            }
            other.decorators = element.decorators;
          }
          _coalesceGetterSetter(element, other);
        }
      } else {
        newElements.push(element);
      }
    }

    return newElements;
  }

  function _hasDecorators(element /*: ElementDescriptor */) /*: boolean */ {
    return element.decorators && element.decorators.length;
  }

  function _isDataDescriptor(desc /*: PropertyDescriptor */) /*: boolean */ {
    return (
      desc !== undefined &&
      !(desc.value === undefined && desc.writable === undefined)
    );
  }

  function _optionalCallableProperty /*::<T>*/(
    obj /*: T */,
    name /*: $Keys<T> */,
  ) /*: ?Function */ {
    var value = obj[name];
    if (value !== undefined && typeof value !== "function") {
      throw new TypeError("Expected '" + name + "' to be a function");
    }
    return value;
  }

`,s.classPrivateMethodGet=o("7.1.6")`
  export default function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
  }
`,s.classPrivateMethodSet=o("7.1.6")`
  export default function _classPrivateMethodSet() {
    throw new TypeError("attempted to reassign private method");
  }
`,s.wrapRegExp=o("7.2.6")`
  import wrapNativeSuper from "wrapNativeSuper";
  import getPrototypeOf from "getPrototypeOf";
  import possibleConstructorReturn from "possibleConstructorReturn";
  import inherits from "inherits";

  export default function _wrapRegExp(re, groups) {
    _wrapRegExp = function(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _RegExp = wrapNativeSuper(RegExp);
    var _super = RegExp.prototype;
    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = _RegExp.call(this, re, flags);
      // if the regex is recreated with 'g' flag
      _groups.set(_this, groups || _groups.get(re));
      return _this;
    }
    inherits(BabelRegExp, _RegExp);

    BabelRegExp.prototype.exec = function(str) {
      var result = _super.exec.call(this, str);
      if (result) result.groups = buildGroups(result, this);
      return result;
    };
    BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);
        return _super[Symbol.replace].call(
          this,
          str,
          substitution.replace(/\\$<([^>]+)>/g, function(_, name) {
            return "$" + groups[name];
          })
        );
      } else if (typeof substitution === "function") {
        var _this = this;
        return _super[Symbol.replace].call(
          this,
          str,
          function() {
            var args = [];
            args.push.apply(args, arguments);
            if (typeof args[args.length - 1] !== "object") {
              // Modern engines already pass result.groups as the last arg.
              args.push(buildGroups(args, _this));
            }
            return substitution.apply(this, args);
          }
        );
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    }

    function buildGroups(result, re) {
      // NOTE: This function should return undefined if there are no groups,
      // but in that case Babel doesn't add the wrapper anyway.

      var g = _groups.get(re);
      return Object.keys(g).reduce(function(groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }
`},function(e,t,r){"use strict";function n(){const e=c(r(213));return n=function(){return e},e}function i(){const e=o(r(149));return i=function(){return e},e}function s(){const e=o(r(106));return s=function(){return e},e}function a(){const e=c(r(42));return a=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function c(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t="global"){let r;const n={global:u,module:p,umd:f,var:d}[t];if(!n)throw new Error(`Unsupported output type ${t}`);r=n(e);return(0,i().default)(r).code};function u(e){const t=a().identifier("babelHelpers"),r=[],n=a().functionExpression(null,[a().identifier("global")],a().blockStatement(r)),i=a().program([a().expressionStatement(a().callExpression(n,[a().conditionalExpression(a().binaryExpression("===",a().unaryExpression("typeof",a().identifier("global")),a().stringLiteral("undefined")),a().identifier("self"),a().identifier("global"))]))]);return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().assignmentExpression("=",a().memberExpression(a().identifier("global"),t),a().objectExpression([])))])),h(r,t,e),i}function p(e){const t=[],r=h(t,null,e);return t.unshift(a().exportNamedDeclaration(null,Object.keys(r).map(e=>a().exportSpecifier(a().cloneNode(r[e]),a().identifier(e))))),a().program(t,[],"module")}function f(e){const t=a().identifier("babelHelpers"),r=[];return r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().identifier("global"))])),h(r,t,e),a().program([(n={FACTORY_PARAMETERS:a().identifier("global"),BROWSER_ARGUMENTS:a().assignmentExpression("=",a().memberExpression(a().identifier("root"),t),a().objectExpression([])),COMMON_ARGUMENTS:a().identifier("exports"),AMD_ARGUMENTS:a().arrayExpression([a().stringLiteral("exports")]),FACTORY_BODY:r,UMD_ROOT:a().identifier("this")},s().default`
    (function (root, factory) {
      if (typeof define === "function" && define.amd) {
        define(AMD_ARGUMENTS, factory);
      } else if (typeof exports === "object") {
        factory(COMMON_ARGUMENTS);
      } else {
        factory(BROWSER_ARGUMENTS);
      }
    })(UMD_ROOT, function (FACTORY_PARAMETERS) {
      FACTORY_BODY
    });
  `(n))]);var n}function d(e){const t=a().identifier("babelHelpers"),r=[];r.push(a().variableDeclaration("var",[a().variableDeclarator(t,a().objectExpression([]))]));const n=a().program(r);return h(r,t,e),r.push(a().expressionStatement(t)),n}function h(e,t,r){const i=e=>t?a().memberExpression(t,a().identifier(e)):a().identifier(`_${e}`),s={};return n().list.forEach((function(t){if(r&&r.indexOf(t)<0)return;const a=s[t]=i(t),{nodes:o}=n().get(t,i,a);e.push(...o)})),s}},function(e){e.exports=JSON.parse('{"_from":"@babel/core@7.8.4","_id":"@babel/core@7.8.4","_inBundle":false,"_integrity":"sha512-0LiLrB2PwrVI+a2/IEskBopDYSd8BCb3rOvH7D5tzoWd696TBEduBvuLVm4Nx6rltrLZqvI3MCalB2K2aVzQjA==","_location":"/@babel/core","_phantomChildren":{"minimist":"1.2.5"},"_requested":{"type":"version","registry":true,"raw":"@babel/core@7.8.4","name":"@babel/core","escapedName":"@babel%2fcore","scope":"@babel","rawSpec":"7.8.4","saveSpec":null,"fetchSpec":"7.8.4"},"_requiredBy":["/@jest/transform","/@svgr/plugin-jsx","/@svgr/webpack","/@tsbb/babel-preset-tsbb","/babel-preset-react-app","/istanbul-lib-instrument","/jest-config","/jest-environment-jsdom-fourteen/@jest/transform","/kkt"],"_resolved":"https://registry.npmjs.org/@babel/core/-/core-7.8.4.tgz","_shasum":"d496799e5c12195b3602d0fddd77294e3e38e80e","_spec":"@babel/core@7.8.4","_where":"/home/runner/work/react-baidu-map/react-baidu-map/node_modules/kkt","author":{"name":"Sebastian McKenzie","email":"sebmck@gmail.com"},"browser":{"./lib/config/files/index.js":"./lib/config/files/index-browser.js","./lib/transform-file.js":"./lib/transform-file-browser.js","./src/config/files/index.js":"./src/config/files/index-browser.js","./src/transform-file.js":"./src/transform-file-browser.js"},"bundleDependencies":false,"dependencies":{"@babel/code-frame":"^7.8.3","@babel/generator":"^7.8.4","@babel/helpers":"^7.8.4","@babel/parser":"^7.8.4","@babel/template":"^7.8.3","@babel/traverse":"^7.8.4","@babel/types":"^7.8.3","convert-source-map":"^1.7.0","debug":"^4.1.0","gensync":"^1.0.0-beta.1","json5":"^2.1.0","lodash":"^4.17.13","resolve":"^1.3.2","semver":"^5.4.1","source-map":"^0.5.0"},"deprecated":false,"description":"Babel compiler core.","devDependencies":{"@babel/helper-transform-fixture-test-runner":"^7.8.3"},"engines":{"node":">=6.9.0"},"funding":{"type":"opencollective","url":"https://opencollective.com/babel"},"gitHead":"5c2e6bc07fed3d28801d93168622c99ae622653a","homepage":"https://babeljs.io/","keywords":["6to5","babel","classes","const","es6","harmony","let","modules","transpile","transpiler","var","babel-core","compiler"],"license":"MIT","main":"lib/index.js","name":"@babel/core","publishConfig":{"access":"public"},"repository":{"type":"git","url":"https://github.com/babel/babel/tree/master/packages/babel-core"},"version":"7.8.4"}')},function(e,t,r){"use strict";function n(){const e=g(r(70));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(230),s=r(150),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(87)),o=g(r(151)),l=r(112),c=r(231);function u(){const e=g(r(58));return u=function(){return e},e}var p=r(113),f=r(152),d=r(548),h=g(r(549)),m=g(r(233));function y(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}var b=(0,n().default)((function*(e){const t=yield*(0,m.default)(e);if(!t)return null;const{options:r,context:n}=t,i={},a=[[]];try{const{plugins:e,presets:t}=r;if(!e||!t)throw new Error("Assertion failure - plugins and presets exist");if(yield*function*e(t,r){const o=[];for(let i=0;i<t.plugins.length;i++){const e=t.plugins[i];if(!1!==e.options)try{o.push(yield*x(e,n))}catch(c){throw i>0&&"BABEL_UNKNOWN_PLUGIN_PROPERTY"===c.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.plugins[i-1],e,"plugin",i,c),c}}const l=[];for(let i=0;i<t.presets.length;i++){const e=t.presets[i];if(!1!==e.options)try{l.push({preset:yield*w(e,n),pass:e.ownPass?[]:r})}catch(c){throw i>0&&"BABEL_UNKNOWN_OPTION"===c.code&&(0,f.checkNoUnwrappedItemOptionPairs)(t.presets[i-1],e,"preset",i,c),c}}if(l.length>0){a.splice(1,0,...l.map(e=>e.pass).filter(e=>e!==r));for(const{preset:t,pass:r}of l){if(!t)return!0;if(yield*e({plugins:t.plugins,presets:t.presets},r))return!0;t.options.forEach(e=>{(0,s.mergeOptions)(i,e)})}}o.length>0&&r.unshift(...o)}({plugins:e.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t}),presets:t.map(e=>{const t=(0,l.getItemDescriptor)(e);if(!t)throw new Error("Assertion failure - must be config item");return t})},a[0]))return null}catch(c){throw/^\[BABEL\]/.test(c.message)||(c.message=`[BABEL] ${n.filename||"unknown"}: ${c.message}`),c}const o=i;return(0,s.mergeOptions)(o,r),o.plugins=a[0],o.presets=a.slice(1).filter(e=>e.length>0).map(e=>({plugins:e})),o.passPerPreset=o.presets.length>0,{options:o,passes:a}}));t.default=b;const v=(0,p.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},i){if(!1===t)throw new Error("Assertion failure");t=t||{};let s=e;if("function"===typeof e){const l=Object.assign({},a,{},(0,h.default)(i));try{s=e(l,t,r)}catch(o){throw n&&(o.message+=` (While processing: ${JSON.stringify(n)})`),o}}if(!s||"object"!==typeof s)throw new Error("Plugin/Preset did not return an object.");if("function"===typeof s.then)throw yield*[],new Error("You appear to be using an async plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.");return{value:s,options:t,dirname:r,alias:n}}));function*x(e,t){if(e.value instanceof o.default){if(e.options)throw new Error("Passed options to an existing Plugin instance will not work.");return e.value}return yield*E(yield*v(e,t),t)}const E=(0,p.makeWeakCache)((function*({value:e,options:t,dirname:r,alias:n},s){const a=(0,d.validatePluginObject)(e),l=Object.assign({},a);if(l.visitor&&(l.visitor=u().default.explode(Object.assign({},l.visitor))),l.inherits){const e={name:void 0,alias:`${n}$inherits`,value:l.inherits,options:t,dirname:r},a=yield*(0,i.forwardAsync)(x,t=>s.invalidate(r=>t(e,r)));l.pre=P(a.pre,l.pre),l.post=P(a.post,l.post),l.manipulateOptions=P(a.manipulateOptions,l.manipulateOptions),l.visitor=u().default.visitors.merge([a.visitor||{},l.visitor||{}])}return new o.default(l,t,n)})),S=(e,t)=>{if(e.test||e.include||e.exclude){const e=t.name?`"${t.name}"`:"/* your preset */";throw new Error([`Preset ${e} requires a filename to be set when babel is called directly,`,"```",`babel.transform(code, { filename: 'file.ts', presets: [${e}] });`,"```","See https://babeljs.io/docs/en/options#filename for more information."].join("\n"))}};function*w(e,t){const r=T(yield*v(e,t));return((e,t,r)=>{if(!t.filename){const{options:t}=e;S(t,r),t.overrides&&t.overrides.forEach(e=>S(e,r))}})(r,t,e),yield*(0,c.buildPresetChain)(r,t)}const T=(0,p.makeWeakCacheSync)(({value:e,dirname:t,alias:r})=>({options:(0,f.validate)("preset",e),alias:r,dirname:t}));function P(e,t){const r=[e,t].filter(Boolean);return r.length<=1?r[0]:function(...e){for(const t of r)t.apply(this,e)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={auxiliaryComment:{message:"Use `auxiliaryCommentBefore` or `auxiliaryCommentAfter`"},blacklist:{message:"Put the specific transforms you want in the `plugins` option"},breakConfig:{message:"This is not a necessary option in Babel 6"},experimental:{message:"Put the specific transforms you want in the `plugins` option"},externalHelpers:{message:"Use the `external-helpers` plugin instead. Check out http://babeljs.io/docs/plugins/external-helpers/"},extra:{message:""},jsxPragma:{message:"use the `pragma` option in the `react-jsx` plugin. Check out http://babeljs.io/docs/plugins/transform-react-jsx/"},loose:{message:"Specify the `loose` option for the relevant plugin you are using or use a preset that sets the option."},metadataUsedHelpers:{message:"Not required anymore as this is enabled by default"},modules:{message:"Use the corresponding module transform plugin in the `plugins` option. Check out http://babeljs.io/docs/plugins/#modules"},nonStandard:{message:"Use the `react-jsx` and `flow-strip-types` plugins to support JSX and Flow. Also check out the react preset http://babeljs.io/docs/plugins/preset-react/"},optional:{message:"Put the specific transforms you want in the `plugins` option"},sourceMapName:{message:"The `sourceMapName` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."},stage:{message:"Check out the corresponding stage-x presets http://babeljs.io/docs/plugins/#presets"},whitelist:{message:"Put the specific transforms you want in the `plugins` option"},resolveModuleSource:{version:6,message:"Use `babel-plugin-module-resolver@3`'s 'resolvePath' options"},metadata:{version:6,message:"Generated plugin metadata is always included in the output result"},sourceMapTarget:{version:6,message:"The `sourceMapTarget` option has been removed because it makes more sense for the tooling that calls Babel to assign `map.file` themselves."}}},function(e,t,r){"use strict";function n(){const e=s(r(60));return n=function(){return e},e}function i(){const e=s(r(547));return i=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=n().default.resolve(t,e).split(n().default.sep);return new RegExp(["^",...r.map((e,t)=>{const n=t===r.length-1;return"**"===e?n?f:p:"*"===e?n?u:c:0===e.indexOf("*.")?l+(0,i().default)(e.slice(1))+(n?o:a):(0,i().default)(e)+(n?o:a)})].join(""))};const a=`\\${n().default.sep}`,o=`(?:${a}|$)`,l=`[^${a}]+`,c=`(?:${l}${a})`,u=`(?:${l}${o})`,p=`${c}*?`,f=`${c}*?${u}?`},function(e,t,r){var n=r(148),i=/[\\^$.*+?()[\]{}|]/g,s=RegExp(i.source);e.exports=function(e){return(e=n(e))&&s.test(e)?e.replace(i,"\\$&"):e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePluginObject=function(e){const t={type:"root",source:"plugin"};return Object.keys(e).forEach(r=>{const n=i[r],s={type:"option",name:r,parent:t};if(!n){const e=new Error(`.${r} is not a valid Plugin property`);throw e.code="BABEL_UNKNOWN_PLUGIN_PROPERTY",e}n(s,e[r])}),e};var n=r(232);const i={name:n.assertString,manipulateOptions:n.assertFunction,pre:n.assertFunction,post:n.assertFunction,inherits:n.assertFunction,visitor:function(e,t){const r=(0,n.assertObject)(e,t);if(r&&(Object.keys(r).forEach(e=>function(e,t){if(t&&"object"===typeof t)Object.keys(t).forEach(t=>{if("enter"!==t&&"exit"!==t)throw new Error(`.visitor["${e}"] may only have .enter and/or .exit handlers.`)});else if("function"!==typeof t)throw new Error(`.visitor["${e}"] must be a function`);return t}(e,r[e])),r.enter||r.exit))throw new Error(`.${e} cannot contain catch-all "enter" or "exit" handlers. Please target individual nodes.`);return r},parserOverride:n.assertFunction,generatorOverride:n.assertFunction}},function(e,t,r){"use strict";function n(){const e=(t=r(227))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{version:i.version,cache:e.simple(),env:t=>e.using(e=>"undefined"===typeof t?e.envName:"function"===typeof t?(0,s.assertSimpleType)(t(e.envName)):(Array.isArray(t)||(t=[t]),t.some(t=>{if("string"!==typeof t)throw new Error("Unexpected non-string value");return t===e.envName}))),async:()=>!1,caller:t=>e.using(e=>(0,s.assertSimpleType)(t(e.caller))),assertVersion:a,tokTypes:void 0}};var i=r(87),s=r(113);function a(e){if("number"===typeof e){if(!Number.isInteger(e))throw new Error("Expected string or integer value.");e=`^${e}.0.0-0`}if("string"!==typeof e)throw new Error("Expected string or integer value.");if(n().default.satisfies(i.version,e))return;const t=Error.stackTraceLimit;"number"===typeof t&&t<25&&(Error.stackTraceLimit=25);const r=new Error(`Requires Babel "${e}", but was loaded with "${i.version}". `+'If you are sure you have a compatible version of @babel/core, it is likely that something in your build process is loading the wrong version. Inspect the stack trace of this error to look for the first entry that doesn\'t mention "@babel/core" or "babel-core" to see what is calling Babel.');throw"number"===typeof t&&(Error.stackTraceLimit=t),Object.assign(r,{code:"BABEL_VERSION_UNSUPPORTED",version:i.version,range:e})}},function(e,t,r){"use strict";function n(){const e=a(r(70));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformAsync=t.transformSync=t.transform=void 0;var i=a(r(90)),s=r(234);function a(e){return e&&e.__esModule?e:{default:e}}const o=(0,n().default)((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.run)(r,e)}));t.transform=function(e,t,r){if("function"===typeof t&&(r=t,t=void 0),void 0===r)return o.sync(e,t);o.errback(e,t,r)};const l=o.sync;t.transformSync=l;const c=o.async;t.transformAsync=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=class{constructor(e,t,r){this._map=new Map,this.key=t,this.file=e,this.opts=r||{},this.cwd=e.opts.cwd,this.filename=e.opts.filename}set(e,t){this._map.set(e,t)}get(e){return this._map.get(e)}availableHelper(e,t){return this.file.availableHelper(e,t)}addHelper(e){return this.file.addHelper(e)}addImport(){return this.file.addImport()}getModuleName(){return this.file.getModuleName()}buildCodeFrameError(e,t,r){return this.file.buildCodeFrameError(e,t,r)}}},function(e,t,r){"use strict";function n(){const e=s(r(553));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!a){const e=i.default.sync({babelrc:!1,configFile:!1,plugins:[o]});if(a=e?e.passes[0][0]:void 0,!a)throw new Error("Assertion failure")}return a};var i=s(r(90));function s(e){return e&&e.__esModule?e:{default:e}}let a;const o={name:"internal.blockHoist",visitor:{Block:{exit({node:e}){let t=!1;for(let r=0;r<e.body.length;r++){const n=e.body[r];if(n&&null!=n._blockHoist){t=!0;break}}t&&(e.body=(0,n().default)(e.body,(function(e){let t=e&&e._blockHoist;return null==t&&(t=1),!0===t&&(t=2),-1*t})))}}}}},function(e,t,r){var n=r(554),i=r(556),s=r(218),a=r(147),o=s((function(e,t){if(null==e)return[];var r=t.length;return r>1&&a(e,t[0],t[1])?t=[]:r>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),i(e,n(t,1),[])}));e.exports=o},function(e,t,r){var n=r(132),i=r(555);e.exports=function e(t,r,s,a,o){var l=-1,c=t.length;for(s||(s=i),o||(o=[]);++l<c;){var u=t[l];r>0&&s(u)?r>1?e(u,r-1,s,a,o):n(o,u):a||(o[o.length]=u)}return o}},function(e,t,r){var n=r(78),i=r(125),s=r(54),a=n?n.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||i(e)||!!(a&&e&&e[a])}},function(e,t,r){var n=r(146),i=r(557),s=r(576),a=r(582),o=r(84),l=r(583),c=r(109);e.exports=function(e,t,r){var u=-1;t=n(t.length?t:[c],o(i));var p=s(e,(function(e,r,i){return{criteria:n(t,(function(t){return t(e)})),index:++u,value:e}}));return a(p,(function(e,t){return l(e,t,r)}))}},function(e,t,r){var n=r(558),i=r(566),s=r(109),a=r(54),o=r(573);e.exports=function(e){return"function"==typeof e?e:null==e?s:"object"==typeof e?a(e)?i(e[0],e[1]):n(e):o(e)}},function(e,t,r){var n=r(559),i=r(565),s=r(238);e.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?s(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},function(e,t,r){var n=r(122),i=r(235);e.exports=function(e,t,r,s){var a=r.length,o=a,l=!s;if(null==e)return!o;for(e=Object(e);a--;){var c=r[a];if(l&&c[2]?c[1]!==e[c[0]]:!(c[0]in e))return!1}for(;++a<o;){var u=(c=r[a])[0],p=e[u],f=c[1];if(l&&c[2]){if(void 0===p&&!(u in e))return!1}else{var d=new n;if(s)var h=s(p,f,u,e,t,d);if(!(void 0===h?i(f,p,3,s,d):h))return!1}}return!0}},function(e,t,r){var n=r(122),i=r(236),s=r(562),a=r(564),o=r(103),l=r(54),c=r(126),u=r(182),p="[object Object]",f=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,d,h,m){var y=l(e),g=l(t),b=y?"[object Array]":o(e),v=g?"[object Array]":o(t),x=(b="[object Arguments]"==b?p:b)==p,E=(v="[object Arguments]"==v?p:v)==p,S=b==v;if(S&&c(e)){if(!c(t))return!1;y=!0,x=!1}if(S&&!x)return m||(m=new n),y||u(e)?i(e,t,r,d,h,m):s(e,t,b,r,d,h,m);if(!(1&r)){var w=x&&f.call(e,"__wrapped__"),T=E&&f.call(t,"__wrapped__");if(w||T){var P=w?e.value():e,A=T?t.value():t;return m||(m=new n),h(P,A,r,d,m)}}return!!S&&(m||(m=new n),a(e,t,r,d,h,m))}},function(e,t){e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},function(e,t,r){var n=r(78),i=r(189),s=r(83),a=r(236),o=r(563),l=r(141),c=n?n.prototype:void 0,u=c?c.valueOf:void 0;e.exports=function(e,t,r,n,c,p,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!p(new i(e),new i(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return s(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var d=o;case"[object Set]":var h=1&n;if(d||(d=l),e.size!=t.size&&!h)return!1;var m=f.get(e);if(m)return m==t;n|=2,f.set(e,t);var y=a(d(e),d(t),n,c,p,f);return f.delete(e),y;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},function(e,t){e.exports=function(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}},function(e,t,r){var n=r(186),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,r,s,a,o){var l=1&r,c=n(e),u=c.length;if(u!=n(t).length&&!l)return!1;for(var p=u;p--;){var f=c[p];if(!(l?f in t:i.call(t,f)))return!1}var d=o.get(e);if(d&&o.get(t))return d==t;var h=!0;o.set(e,t),o.set(t,e);for(var m=l;++p<u;){var y=e[f=c[p]],g=t[f];if(s)var b=l?s(g,y,f,t,e,o):s(y,g,f,e,t,o);if(!(void 0===b?y===g||a(y,g,r,s,o):b)){h=!1;break}m||(m="constructor"==f)}if(h&&!m){var v=e.constructor,x=t.constructor;v==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof v&&v instanceof v&&"function"==typeof x&&x instanceof x||(h=!1)}return o.delete(e),o.delete(t),h}},function(e,t,r){var n=r(237),i=r(79);e.exports=function(e){for(var t=i(e),r=t.length;r--;){var s=t[r],a=e[s];t[r]=[s,a,n(a)]}return t}},function(e,t,r){var n=r(235),i=r(567),s=r(571),a=r(153),o=r(237),l=r(238),c=r(114);e.exports=function(e,t){return a(e)&&o(t)?l(c(e),t):function(r){var a=i(r,e);return void 0===a&&a===t?s(r,e):n(t,a,3)}}},function(e,t,r){var n=r(239);e.exports=function(e,t,r){var i=null==e?void 0:n(e,t);return void 0===i?r:i}},function(e,t,r){var n=r(569),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,a=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(i,(function(e,r,n,i){t.push(n?i.replace(s,"$1"):r||e)})),t}));e.exports=a},function(e,t,r){var n=r(570);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},function(e,t,r){var n=r(124);function i(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,i=t?t.apply(this,n):n[0],s=r.cache;if(s.has(i))return s.get(i);var a=e.apply(this,n);return r.cache=s.set(i,a)||s,a};return r.cache=new(i.Cache||n),r}i.Cache=n,e.exports=i},function(e,t,r){var n=r(572),i=r(241);e.exports=function(e,t){return null!=e&&i(e,t,n)}},function(e,t){e.exports=function(e,t){return null!=e&&t in Object(e)}},function(e,t,r){var n=r(574),i=r(575),s=r(153),a=r(114);e.exports=function(e){return s(e)?n(a(e)):i(e)}},function(e,t){e.exports=function(e){return function(t){return null==t?void 0:t[e]}}},function(e,t,r){var n=r(239);e.exports=function(e){return function(t){return n(t,e)}}},function(e,t,r){var n=r(577),i=r(80);e.exports=function(e,t){var r=-1,s=i(e)?Array(e.length):[];return n(e,(function(e,n,i){s[++r]=t(e,n,i)})),s}},function(e,t,r){var n=r(578),i=r(581)(n);e.exports=i},function(e,t,r){var n=r(579),i=r(79);e.exports=function(e,t){return e&&n(e,t,i)}},function(e,t,r){var n=r(580)();e.exports=n},function(e,t){e.exports=function(e){return function(t,r,n){for(var i=-1,s=Object(t),a=n(t),o=a.length;o--;){var l=a[e?o:++i];if(!1===r(s[l],l,s))break}return t}}},function(e,t,r){var n=r(80);e.exports=function(e,t){return function(r,i){if(null==r)return r;if(!n(r))return e(r,i);for(var s=r.length,a=t?s:-1,o=Object(r);(t?a--:++a<s)&&!1!==i(o[a],a,o););return r}}},function(e,t){e.exports=function(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}},function(e,t,r){var n=r(584);e.exports=function(e,t,r){for(var i=-1,s=e.criteria,a=t.criteria,o=s.length,l=r.length;++i<o;){var c=n(s[i],a[i]);if(c)return i>=l?c:c*("desc"==r[i]?-1:1)}return e.index-t.index}},function(e,t,r){var n=r(88);e.exports=function(e,t){if(e!==t){var r=void 0!==e,i=null===e,s=e===e,a=n(e),o=void 0!==t,l=null===t,c=t===t,u=n(t);if(!l&&!u&&!a&&e>t||a&&o&&c&&!l&&!u||i&&o&&c||!r&&c||!s)return 1;if(!i&&!a&&!u&&e<t||u&&r&&s&&!i&&!a||l&&r&&s||!o&&s||!c)return-1}return 0}},function(e,t,r){"use strict";function n(){const e=f(r(586));return n=function(){return e},e}function i(){const e=f(r(60));return i=function(){return e},e}function s(){const e=f(r(143));return s=function(){return e},e}function a(){const e=f(r(587));return a=function(){return e},e}function o(){const e=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(42));return o=function(){return e},e}function l(){const e=f(r(243));return l=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function*(e,t,r,s){if(r=`${r||""}`,s){if("Program"===s.type)s=o().file(s,[],[]);else if("File"!==s.type)throw new Error("AST root must be a Program or File node");s=(0,a().default)(s)}else s=yield*(0,u.default)(e,t,r);let p=null;if(!1!==t.inputSourceMap){if("object"===typeof t.inputSourceMap&&(p=l().default.fromObject(t.inputSourceMap)),!p){const e=g(h,s);if(e)try{p=l().default.fromComment(e)}catch(f){d("discarding unknown inline input sourcemap",f)}}if(!p){const e=g(m,s);if("string"===typeof t.filename&&e)try{const r=m.exec(e),s=n().default.readFileSync(i().default.resolve(i().default.dirname(t.filename),r[1]));s.length>1e6?d("skip merging input map > 1 MB"):p=l().default.fromJSON(s)}catch(f){d("discarding unknown file input sourcemap",f)}else e&&d("discarding un-loadable file input sourcemap")}}return new c.default(t,{code:r,ast:s,inputMap:p})};var c=f(r(212)),u=f(r(244));function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e){return e&&e.__esModule?e:{default:e}}const d=(0,s().default)("babel:transform:file");const h=/^[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/,m=/^[@#][ \t]+sourceMappingURL=([^\s'"`]+)[ \t]*$/;function y(e,t,r){return t&&(t=t.filter(({value:t})=>!e.test(t)||(r=t,!1))),[t,r]}function g(e,t){let r=null;return o().traverseFast(t,t=>{[t.leadingComments,r]=y(e,t.leadingComments,r),[t.innerComments,r]=y(e,t.innerComments,r),[t.trailingComments,r]=y(e,t.trailingComments,r)}),r}},function(e,t){},function(e,t,r){var n=r(174);e.exports=function(e){return n(e,5)}},,function(e,t,r){var n=r(226),i=n.Buffer;function s(e,t){for(var r in e)t[r]=e[r]}function a(e,t,r){return i(e,t,r)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=n:(s(n,t),t.Buffer=a),s(i,a),a.from=function(e,t,r){if("number"===typeof e)throw new TypeError("Argument must not be a number");return i(e,t,r)},a.alloc=function(e,t,r){if("number"!==typeof e)throw new TypeError("Argument must be a number");var n=i(e);return void 0!==t?"string"===typeof r?n.fill(t,r):n.fill(t):n.fill(0),n},a.allocUnsafe=function(e){if("number"!==typeof e)throw new TypeError("Argument must be a number");return i(e)},a.allocUnsafeSlow=function(e){if("number"!==typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){let s=`Support for the experimental syntax '${e}' isn't currently enabled `+`(${t.line}:${t.column+1}):\n\n`+r;const a=n[e];if(a){const{syntax:e,transform:t}=a;if(e)if(t){const e=i(t);s+=`\n\nAdd ${e} to the 'plugins' section of your Babel config `+"to enable transformation."}else{const t=i(e);s+=`\n\nAdd ${t} to the 'plugins' section of your Babel config `+"to enable parsing."}}return s};const n={classProperties:{syntax:{name:"@babel/plugin-syntax-class-properties",url:"https://git.io/vb4yQ"},transform:{name:"@babel/plugin-proposal-class-properties",url:"https://git.io/vb4SL"}},decorators:{syntax:{name:"@babel/plugin-syntax-decorators",url:"https://git.io/vb4y9"},transform:{name:"@babel/plugin-proposal-decorators",url:"https://git.io/vb4ST"}},doExpressions:{syntax:{name:"@babel/plugin-syntax-do-expressions",url:"https://git.io/vb4yh"},transform:{name:"@babel/plugin-proposal-do-expressions",url:"https://git.io/vb4S3"}},dynamicImport:{syntax:{name:"@babel/plugin-syntax-dynamic-import",url:"https://git.io/vb4Sv"}},exportDefaultFrom:{syntax:{name:"@babel/plugin-syntax-export-default-from",url:"https://git.io/vb4SO"},transform:{name:"@babel/plugin-proposal-export-default-from",url:"https://git.io/vb4yH"}},exportNamespaceFrom:{syntax:{name:"@babel/plugin-syntax-export-namespace-from",url:"https://git.io/vb4Sf"},transform:{name:"@babel/plugin-proposal-export-namespace-from",url:"https://git.io/vb4SG"}},flow:{syntax:{name:"@babel/plugin-syntax-flow",url:"https://git.io/vb4yb"},transform:{name:"@babel/plugin-transform-flow-strip-types",url:"https://git.io/vb49g"}},functionBind:{syntax:{name:"@babel/plugin-syntax-function-bind",url:"https://git.io/vb4y7"},transform:{name:"@babel/plugin-proposal-function-bind",url:"https://git.io/vb4St"}},functionSent:{syntax:{name:"@babel/plugin-syntax-function-sent",url:"https://git.io/vb4yN"},transform:{name:"@babel/plugin-proposal-function-sent",url:"https://git.io/vb4SZ"}},importMeta:{syntax:{name:"@babel/plugin-syntax-import-meta",url:"https://git.io/vbKK6"}},jsx:{syntax:{name:"@babel/plugin-syntax-jsx",url:"https://git.io/vb4yA"},transform:{name:"@babel/plugin-transform-react-jsx",url:"https://git.io/vb4yd"}},logicalAssignment:{syntax:{name:"@babel/plugin-syntax-logical-assignment-operators",url:"https://git.io/vAlBp"},transform:{name:"@babel/plugin-proposal-logical-assignment-operators",url:"https://git.io/vAlRe"}},numericSeparator:{syntax:{name:"@babel/plugin-syntax-numeric-separator",url:"https://git.io/vb4Sq"},transform:{name:"@babel/plugin-proposal-numeric-separator",url:"https://git.io/vb4yS"}},optionalChaining:{syntax:{name:"@babel/plugin-syntax-optional-chaining",url:"https://git.io/vb4Sc"},transform:{name:"@babel/plugin-proposal-optional-chaining",url:"https://git.io/vb4Sk"}},pipelineOperator:{syntax:{name:"@babel/plugin-syntax-pipeline-operator",url:"https://git.io/vb4yj"},transform:{name:"@babel/plugin-proposal-pipeline-operator",url:"https://git.io/vb4SU"}},throwExpressions:{syntax:{name:"@babel/plugin-syntax-throw-expressions",url:"https://git.io/vb4SJ"},transform:{name:"@babel/plugin-proposal-throw-expressions",url:"https://git.io/vb4yF"}},typescript:{syntax:{name:"@babel/plugin-syntax-typescript",url:"https://git.io/vb4SC"},transform:{name:"@babel/plugin-transform-typescript",url:"https://git.io/vb4Sm"}},asyncGenerators:{syntax:{name:"@babel/plugin-syntax-async-generators",url:"https://git.io/vb4SY"},transform:{name:"@babel/plugin-proposal-async-generator-functions",url:"https://git.io/vb4yp"}},nullishCoalescingOperator:{syntax:{name:"@babel/plugin-syntax-nullish-coalescing-operator",url:"https://git.io/vb4yx"},transform:{name:"@babel/plugin-proposal-nullish-coalescing-operator",url:"https://git.io/vb4Se"}},objectRestSpread:{syntax:{name:"@babel/plugin-syntax-object-rest-spread",url:"https://git.io/vb4y5"},transform:{name:"@babel/plugin-proposal-object-rest-spread",url:"https://git.io/vb4Ss"}},optionalCatchBinding:{syntax:{name:"@babel/plugin-syntax-optional-catch-binding",url:"https://git.io/vb4Sn"},transform:{name:"@babel/plugin-proposal-optional-catch-binding",url:"https://git.io/vb4SI"}}},i=({name:e,url:t})=>`${e} (${t})`},function(e,t,r){"use strict";function n(){const e=a(r(243));return n=function(){return e},e}function i(){const e=a(r(149));return i=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{opts:r,ast:a,code:o,inputMap:l}=t,c=[];for(const n of e)for(const e of n){const{generatorOverride:t}=e;if(t){const e=t(a,r.generatorOpts,o,i().default);void 0!==e&&c.push(e)}}let u;if(0===c.length)u=(0,i().default)(a,r.generatorOpts,o);else{if(1!==c.length)throw new Error("More than one plugin attempted to override codegen.");if(u=c[0],"function"===typeof u.then)throw new Error("You appear to be using an async codegen plugin, which your current version of Babel does not support. If you're using a published plugin, you may need to upgrade your @babel/core version.")}let{code:p,map:f}=u;f&&l&&(f=(0,s.default)(l.toObject(),f));"inline"!==r.sourceMaps&&"both"!==r.sourceMaps||(p+="\n"+n().default.fromObject(f).toComment());"inline"===r.sourceMaps&&(f=null);return{outputCode:p,outputMap:f}};var s=a(r(592));function a(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";function n(){const e=(t=r(593))&&t.__esModule?t:{default:t};var t;return n=function(){return e},e}function i(e){return`${e.line}/${e.columnStart}`}function s(e){const t=new(n().default.SourceMapConsumer)(Object.assign({},e,{sourceRoot:null})),r=new Map,i=new Map;let s=null;return t.computeColumnSpans(),t.eachMapping(e=>{if(null===e.originalLine)return;let n=r.get(e.source);n||(n={path:e.source,content:t.sourceContentFor(e.source,!0)},r.set(e.source,n));let a=i.get(n);a||(a={source:n,mappings:[]},i.set(n,a));const o={line:e.originalLine,columnStart:e.originalColumn,columnEnd:1/0,name:e.name};s&&s.source===n&&s.mapping.line===e.originalLine&&(s.mapping.columnEnd=e.originalColumn),s={source:n,mapping:o},a.mappings.push({original:o,generated:t.allGeneratedPositionsFor({source:e.source,line:e.originalLine,column:e.originalColumn}).map(e=>({line:e.line,columnStart:e.column,columnEnd:e.lastColumn+1}))})},null,n().default.SourceMapConsumer.ORIGINAL_ORDER),{file:e.file,sourceRoot:e.sourceRoot,sources:Array.from(i.values())}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const r=s(e),a=s(t),o=new(n().default.SourceMapGenerator);for(const{source:n}of r.sources)"string"===typeof n.content&&o.setSourceContent(n.path,n.content);if(1===a.sources.length){const e=a.sources[0],t=new Map;!function(e,t){for(const{source:r,mappings:n}of e.sources)for(const{original:e,generated:i}of n)for(const n of i)t(n,e,r)}(r,(r,n,s)=>{!function(e,t,r){const n=function({mappings:e},{line:t,columnStart:r,columnEnd:n}){return function(e,t){const r=function(e,t){let r=0,n=e.length;for(;r<n;){const i=Math.floor((r+n)/2),s=e[i],a=t(s);if(0===a){r=i;break}a>=0?n=i:r=i+1}let i=r;if(i<e.length){for(;i>=0&&t(e[i])>=0;)i--;return i+1}return i}(e,t),n=[];for(let i=r;i<e.length&&0===t(e[i]);i++)n.push(e[i]);return n}(e,({original:e})=>t>e.line?-1:t<e.line?1:r>=e.columnEnd?-1:n<=e.columnStart?1:0)}(e,t);for(const{generated:i}of n)for(const e of i)r(e)}(e,r,e=>{const r=i(e);t.has(r)||(t.set(r,e),o.addMapping({source:s.path,original:{line:n.line,column:n.columnStart},generated:{line:e.line,column:e.columnStart},name:n.name}))})});for(const r of t.values()){if(r.columnEnd===1/0)continue;const e={line:r.line,columnStart:r.columnEnd},n=i(e);t.has(n)||o.addMapping({generated:{line:e.line,column:e.columnStart}})}}const l=o.toJSON();"string"===typeof r.sourceRoot&&(l.sourceRoot=r.sourceRoot);return l}},function(e,t,r){t.SourceMapGenerator=r(245).SourceMapGenerator,t.SourceMapConsumer=r(596).SourceMapConsumer,t.SourceNode=r(599).SourceNode},function(e,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");t.encode=function(e){if(0<=e&&e<r.length)return r[e];throw new TypeError("Must be between 0 and 63: "+e)},t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},function(e,t,r){var n=r(91);function i(){this._array=[],this._sorted=!0,this._last={generatedLine:-1,generatedColumn:0}}i.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)},i.prototype.add=function(e){!function(e,t){var r=e.generatedLine,i=t.generatedLine,s=e.generatedColumn,a=t.generatedColumn;return i>r||i==r&&a>=s||n.compareByGeneratedPositionsInflated(e,t)<=0}(this._last,e)?(this._sorted=!1,this._array.push(e)):(this._last=e,this._array.push(e))},i.prototype.toArray=function(){return this._sorted||(this._array.sort(n.compareByGeneratedPositionsInflated),this._sorted=!0),this._array},t.MappingList=i},function(e,t,r){var n=r(91),i=r(597),s=r(247).ArraySet,a=r(246),o=r(598).quickSort;function l(e){var t=e;return"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,""))),null!=t.sections?new p(t):new c(t)}function c(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sources"),a=n.getArg(t,"names",[]),o=n.getArg(t,"sourceRoot",null),l=n.getArg(t,"sourcesContent",null),c=n.getArg(t,"mappings"),u=n.getArg(t,"file",null);if(r!=this._version)throw new Error("Unsupported version: "+r);i=i.map(String).map(n.normalize).map((function(e){return o&&n.isAbsolute(o)&&n.isAbsolute(e)?n.relative(o,e):e})),this._names=s.fromArray(a.map(String),!0),this._sources=s.fromArray(i,!0),this.sourceRoot=o,this.sourcesContent=l,this._mappings=c,this.file=u}function u(){this.generatedLine=0,this.generatedColumn=0,this.source=null,this.originalLine=null,this.originalColumn=null,this.name=null}function p(e){var t=e;"string"===typeof e&&(t=JSON.parse(e.replace(/^\)\]\}'/,"")));var r=n.getArg(t,"version"),i=n.getArg(t,"sections");if(r!=this._version)throw new Error("Unsupported version: "+r);this._sources=new s,this._names=new s;var a={line:-1,column:0};this._sections=i.map((function(e){if(e.url)throw new Error("Support for url field in sections not implemented.");var t=n.getArg(e,"offset"),r=n.getArg(t,"line"),i=n.getArg(t,"column");if(r<a.line||r===a.line&&i<a.column)throw new Error("Section offsets must be ordered and non-overlapping.");return a=t,{generatedOffset:{generatedLine:r+1,generatedColumn:i+1},consumer:new l(n.getArg(e,"map"))}}))}l.fromSourceMap=function(e){return c.fromSourceMap(e)},l.prototype._version=3,l.prototype.__generatedMappings=null,Object.defineProperty(l.prototype,"_generatedMappings",{get:function(){return this.__generatedMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__generatedMappings}}),l.prototype.__originalMappings=null,Object.defineProperty(l.prototype,"_originalMappings",{get:function(){return this.__originalMappings||this._parseMappings(this._mappings,this.sourceRoot),this.__originalMappings}}),l.prototype._charIsMappingSeparator=function(e,t){var r=e.charAt(t);return";"===r||","===r},l.prototype._parseMappings=function(e,t){throw new Error("Subclasses must implement _parseMappings")},l.GENERATED_ORDER=1,l.ORIGINAL_ORDER=2,l.GREATEST_LOWER_BOUND=1,l.LEAST_UPPER_BOUND=2,l.prototype.eachMapping=function(e,t,r){var i,s=t||null;switch(r||l.GENERATED_ORDER){case l.GENERATED_ORDER:i=this._generatedMappings;break;case l.ORIGINAL_ORDER:i=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var a=this.sourceRoot;i.map((function(e){var t=null===e.source?null:this._sources.at(e.source);return null!=t&&null!=a&&(t=n.join(a,t)),{source:t,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:null===e.name?null:this._names.at(e.name)}}),this).forEach(e,s)},l.prototype.allGeneratedPositionsFor=function(e){var t=n.getArg(e,"line"),r={source:n.getArg(e,"source"),originalLine:t,originalColumn:n.getArg(e,"column",0)};if(null!=this.sourceRoot&&(r.source=n.relative(this.sourceRoot,r.source)),!this._sources.has(r.source))return[];r.source=this._sources.indexOf(r.source);var s=[],a=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(a>=0){var o=this._originalMappings[a];if(void 0===e.column)for(var l=o.originalLine;o&&o.originalLine===l;)s.push({line:n.getArg(o,"generatedLine",null),column:n.getArg(o,"generatedColumn",null),lastColumn:n.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++a];else for(var c=o.originalColumn;o&&o.originalLine===t&&o.originalColumn==c;)s.push({line:n.getArg(o,"generatedLine",null),column:n.getArg(o,"generatedColumn",null),lastColumn:n.getArg(o,"lastGeneratedColumn",null)}),o=this._originalMappings[++a]}return s},t.SourceMapConsumer=l,c.prototype=Object.create(l.prototype),c.prototype.consumer=l,c.fromSourceMap=function(e){var t=Object.create(c.prototype),r=t._names=s.fromArray(e._names.toArray(),!0),i=t._sources=s.fromArray(e._sources.toArray(),!0);t.sourceRoot=e._sourceRoot,t.sourcesContent=e._generateSourcesContent(t._sources.toArray(),t.sourceRoot),t.file=e._file;for(var a=e._mappings.toArray().slice(),l=t.__generatedMappings=[],p=t.__originalMappings=[],f=0,d=a.length;f<d;f++){var h=a[f],m=new u;m.generatedLine=h.generatedLine,m.generatedColumn=h.generatedColumn,h.source&&(m.source=i.indexOf(h.source),m.originalLine=h.originalLine,m.originalColumn=h.originalColumn,h.name&&(m.name=r.indexOf(h.name)),p.push(m)),l.push(m)}return o(t.__originalMappings,n.compareByOriginalPositions),t},c.prototype._version=3,Object.defineProperty(c.prototype,"sources",{get:function(){return this._sources.toArray().map((function(e){return null!=this.sourceRoot?n.join(this.sourceRoot,e):e}),this)}}),c.prototype._parseMappings=function(e,t){for(var r,i,s,l,c,p=1,f=0,d=0,h=0,m=0,y=0,g=e.length,b=0,v={},x={},E=[],S=[];b<g;)if(";"===e.charAt(b))p++,b++,f=0;else if(","===e.charAt(b))b++;else{for((r=new u).generatedLine=p,l=b;l<g&&!this._charIsMappingSeparator(e,l);l++);if(s=v[i=e.slice(b,l)])b+=i.length;else{for(s=[];b<l;)a.decode(e,b,x),c=x.value,b=x.rest,s.push(c);if(2===s.length)throw new Error("Found a source, but no line and column");if(3===s.length)throw new Error("Found a source and line, but no column");v[i]=s}r.generatedColumn=f+s[0],f=r.generatedColumn,s.length>1&&(r.source=m+s[1],m+=s[1],r.originalLine=d+s[2],d=r.originalLine,r.originalLine+=1,r.originalColumn=h+s[3],h=r.originalColumn,s.length>4&&(r.name=y+s[4],y+=s[4])),S.push(r),"number"===typeof r.originalLine&&E.push(r)}o(S,n.compareByGeneratedPositionsDeflated),this.__generatedMappings=S,o(E,n.compareByOriginalPositions),this.__originalMappings=E},c.prototype._findMapping=function(e,t,r,n,s,a){if(e[r]<=0)throw new TypeError("Line must be greater than or equal to 1, got "+e[r]);if(e[n]<0)throw new TypeError("Column must be greater than or equal to 0, got "+e[n]);return i.search(e,t,s,a)},c.prototype.computeColumnSpans=function(){for(var e=0;e<this._generatedMappings.length;++e){var t=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var r=this._generatedMappings[e+1];if(t.generatedLine===r.generatedLine){t.lastGeneratedColumn=r.generatedColumn-1;continue}}t.lastGeneratedColumn=1/0}},c.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=this._findMapping(t,this._generatedMappings,"generatedLine","generatedColumn",n.compareByGeneratedPositionsDeflated,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(r>=0){var i=this._generatedMappings[r];if(i.generatedLine===t.generatedLine){var s=n.getArg(i,"source",null);null!==s&&(s=this._sources.at(s),null!=this.sourceRoot&&(s=n.join(this.sourceRoot,s)));var a=n.getArg(i,"name",null);return null!==a&&(a=this._names.at(a)),{source:s,line:n.getArg(i,"originalLine",null),column:n.getArg(i,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}},c.prototype.hasContentsOfAllSources=function(){return!!this.sourcesContent&&(this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return null==e})))},c.prototype.sourceContentFor=function(e,t){if(!this.sourcesContent)return null;if(null!=this.sourceRoot&&(e=n.relative(this.sourceRoot,e)),this._sources.has(e))return this.sourcesContent[this._sources.indexOf(e)];var r;if(null!=this.sourceRoot&&(r=n.urlParse(this.sourceRoot))){var i=e.replace(/^file:\/\//,"");if("file"==r.scheme&&this._sources.has(i))return this.sourcesContent[this._sources.indexOf(i)];if((!r.path||"/"==r.path)&&this._sources.has("/"+e))return this.sourcesContent[this._sources.indexOf("/"+e)]}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},c.prototype.generatedPositionFor=function(e){var t=n.getArg(e,"source");if(null!=this.sourceRoot&&(t=n.relative(this.sourceRoot,t)),!this._sources.has(t))return{line:null,column:null,lastColumn:null};var r={source:t=this._sources.indexOf(t),originalLine:n.getArg(e,"line"),originalColumn:n.getArg(e,"column")},i=this._findMapping(r,this._originalMappings,"originalLine","originalColumn",n.compareByOriginalPositions,n.getArg(e,"bias",l.GREATEST_LOWER_BOUND));if(i>=0){var s=this._originalMappings[i];if(s.source===r.source)return{line:n.getArg(s,"generatedLine",null),column:n.getArg(s,"generatedColumn",null),lastColumn:n.getArg(s,"lastGeneratedColumn",null)}}return{line:null,column:null,lastColumn:null}},t.BasicSourceMapConsumer=c,p.prototype=Object.create(l.prototype),p.prototype.constructor=l,p.prototype._version=3,Object.defineProperty(p.prototype,"sources",{get:function(){for(var e=[],t=0;t<this._sections.length;t++)for(var r=0;r<this._sections[t].consumer.sources.length;r++)e.push(this._sections[t].consumer.sources[r]);return e}}),p.prototype.originalPositionFor=function(e){var t={generatedLine:n.getArg(e,"line"),generatedColumn:n.getArg(e,"column")},r=i.search(t,this._sections,(function(e,t){var r=e.generatedLine-t.generatedOffset.generatedLine;return r||e.generatedColumn-t.generatedOffset.generatedColumn})),s=this._sections[r];return s?s.consumer.originalPositionFor({line:t.generatedLine-(s.generatedOffset.generatedLine-1),column:t.generatedColumn-(s.generatedOffset.generatedLine===t.generatedLine?s.generatedOffset.generatedColumn-1:0),bias:e.bias}):{source:null,line:null,column:null,name:null}},p.prototype.hasContentsOfAllSources=function(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))},p.prototype.sourceContentFor=function(e,t){for(var r=0;r<this._sections.length;r++){var n=this._sections[r].consumer.sourceContentFor(e,!0);if(n)return n}if(t)return null;throw new Error('"'+e+'" is not in the SourceMap.')},p.prototype.generatedPositionFor=function(e){for(var t=0;t<this._sections.length;t++){var r=this._sections[t];if(-1!==r.consumer.sources.indexOf(n.getArg(e,"source"))){var i=r.consumer.generatedPositionFor(e);if(i)return{line:i.line+(r.generatedOffset.generatedLine-1),column:i.column+(r.generatedOffset.generatedLine===i.line?r.generatedOffset.generatedColumn-1:0)}}}return{line:null,column:null}},p.prototype._parseMappings=function(e,t){this.__generatedMappings=[],this.__originalMappings=[];for(var r=0;r<this._sections.length;r++)for(var i=this._sections[r],s=i.consumer._generatedMappings,a=0;a<s.length;a++){var l=s[a],c=i.consumer._sources.at(l.source);null!==i.consumer.sourceRoot&&(c=n.join(i.consumer.sourceRoot,c)),this._sources.add(c),c=this._sources.indexOf(c);var u=i.consumer._names.at(l.name);this._names.add(u),u=this._names.indexOf(u);var p={source:c,generatedLine:l.generatedLine+(i.generatedOffset.generatedLine-1),generatedColumn:l.generatedColumn+(i.generatedOffset.generatedLine===l.generatedLine?i.generatedOffset.generatedColumn-1:0),originalLine:l.originalLine,originalColumn:l.originalColumn,name:u};this.__generatedMappings.push(p),"number"===typeof p.originalLine&&this.__originalMappings.push(p)}o(this.__generatedMappings,n.compareByGeneratedPositionsDeflated),o(this.__originalMappings,n.compareByOriginalPositions)},t.IndexedSourceMapConsumer=p},function(e,t){t.GREATEST_LOWER_BOUND=1,t.LEAST_UPPER_BOUND=2,t.search=function(e,r,n,i){if(0===r.length)return-1;var s=function e(r,n,i,s,a,o){var l=Math.floor((n-r)/2)+r,c=a(i,s[l],!0);return 0===c?l:c>0?n-l>1?e(l,n,i,s,a,o):o==t.LEAST_UPPER_BOUND?n<s.length?n:-1:l:l-r>1?e(r,l,i,s,a,o):o==t.LEAST_UPPER_BOUND?l:r<0?-1:r}(-1,r.length,e,r,n,i||t.GREATEST_LOWER_BOUND);if(s<0)return-1;for(;s-1>=0&&0===n(r[s],r[s-1],!0);)--s;return s}},function(e,t){function r(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function n(e,t,i,s){if(i<s){var a=i-1;r(e,(u=i,p=s,Math.round(u+Math.random()*(p-u))),s);for(var o=e[s],l=i;l<s;l++)t(e[l],o)<=0&&r(e,a+=1,l);r(e,a+1,l);var c=a+1;n(e,t,i,c-1),n(e,t,c+1,s)}var u,p}t.quickSort=function(e,t){n(e,t,0,e.length-1)}},function(e,t,r){var n=r(245).SourceMapGenerator,i=r(91),s=/(\r?\n)/,a="$$$isSourceNode$$$";function o(e,t,r,n,i){this.children=[],this.sourceContents={},this.line=null==e?null:e,this.column=null==t?null:t,this.source=null==r?null:r,this.name=null==i?null:i,this[a]=!0,null!=n&&this.add(n)}o.fromStringWithSourceMap=function(e,t,r){var n=new o,a=e.split(s),l=0,c=function(){return e()+(e()||"");function e(){return l<a.length?a[l++]:void 0}},u=1,p=0,f=null;return t.eachMapping((function(e){if(null!==f){if(!(u<e.generatedLine)){var t=(r=a[l]).substr(0,e.generatedColumn-p);return a[l]=r.substr(e.generatedColumn-p),p=e.generatedColumn,d(f,t),void(f=e)}d(f,c()),u++,p=0}for(;u<e.generatedLine;)n.add(c()),u++;if(p<e.generatedColumn){var r=a[l];n.add(r.substr(0,e.generatedColumn)),a[l]=r.substr(e.generatedColumn),p=e.generatedColumn}f=e}),this),l<a.length&&(f&&d(f,c()),n.add(a.splice(l).join(""))),t.sources.forEach((function(e){var s=t.sourceContentFor(e);null!=s&&(null!=r&&(e=i.join(r,e)),n.setSourceContent(e,s))})),n;function d(e,t){if(null===e||void 0===e.source)n.add(t);else{var s=r?i.join(r,e.source):e.source;n.add(new o(e.originalLine,e.originalColumn,s,t,e.name))}}},o.prototype.add=function(e){if(Array.isArray(e))e.forEach((function(e){this.add(e)}),this);else{if(!e[a]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);e&&this.children.push(e)}return this},o.prototype.prepend=function(e){if(Array.isArray(e))for(var t=e.length-1;t>=0;t--)this.prepend(e[t]);else{if(!e[a]&&"string"!==typeof e)throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e);this.children.unshift(e)}return this},o.prototype.walk=function(e){for(var t,r=0,n=this.children.length;r<n;r++)(t=this.children[r])[a]?t.walk(e):""!==t&&e(t,{source:this.source,line:this.line,column:this.column,name:this.name})},o.prototype.join=function(e){var t,r,n=this.children.length;if(n>0){for(t=[],r=0;r<n-1;r++)t.push(this.children[r]),t.push(e);t.push(this.children[r]),this.children=t}return this},o.prototype.replaceRight=function(e,t){var r=this.children[this.children.length-1];return r[a]?r.replaceRight(e,t):"string"===typeof r?this.children[this.children.length-1]=r.replace(e,t):this.children.push("".replace(e,t)),this},o.prototype.setSourceContent=function(e,t){this.sourceContents[i.toSetString(e)]=t},o.prototype.walkSourceContents=function(e){for(var t=0,r=this.children.length;t<r;t++)this.children[t][a]&&this.children[t].walkSourceContents(e);var n=Object.keys(this.sourceContents);for(t=0,r=n.length;t<r;t++)e(i.fromSetString(n[t]),this.sourceContents[n[t]])},o.prototype.toString=function(){var e="";return this.walk((function(t){e+=t})),e},o.prototype.toStringWithSourceMap=function(e){var t={code:"",line:1,column:0},r=new n(e),i=!1,s=null,a=null,o=null,l=null;return this.walk((function(e,n){t.code+=e,null!==n.source&&null!==n.line&&null!==n.column?(s===n.source&&a===n.line&&o===n.column&&l===n.name||r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name}),s=n.source,a=n.line,o=n.column,l=n.name,i=!0):i&&(r.addMapping({generated:{line:t.line,column:t.column}}),s=null,i=!1);for(var c=0,u=e.length;c<u;c++)10===e.charCodeAt(c)?(t.line++,t.column=0,c+1===u?(s=null,i=!1):i&&r.addMapping({source:n.source,original:{line:n.line,column:n.column},generated:{line:t.line,column:t.column},name:n.name})):t.column++})),this.walkSourceContents((function(e,t){r.setSourceContent(e,t)})),{code:t.code,map:r}},t.SourceNode=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transformFileSync=function(){throw new Error("Transforming files is not supported in browsers")},t.transformFileAsync=function(){return Promise.reject(new Error("Transforming files is not supported in browsers"))},t.transformFile=void 0;t.transformFile=function(e,t,r){"function"===typeof t&&(r=t),r(new Error("Transforming files is not supported in browsers"),null)}},function(e,t,r){"use strict";function n(){const e=a(r(70));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.transformFromAstAsync=t.transformFromAstSync=t.transformFromAst=void 0;var i=a(r(90)),s=r(234);function a(e){return e&&e.__esModule?e:{default:e}}const o=(0,n().default)((function*(e,t,r){const n=yield*(0,i.default)(r);if(null===n)return null;if(!e)throw new Error("No AST given");return yield*(0,s.run)(n,t,e)}));t.transformFromAst=function(e,t,r,n){if("function"===typeof r&&(n=r,r=void 0),void 0===n)return o.sync(e,t,r);o.errback(e,t,r,n)};const l=o.sync;t.transformFromAstSync=l;const c=o.async;t.transformFromAstAsync=c},function(e,t,r){"use strict";function n(){const e=o(r(70));return n=function(){return e},e}Object.defineProperty(t,"__esModule",{value:!0}),t.parseAsync=t.parseSync=t.parse=void 0;var i=o(r(90)),s=o(r(244)),a=o(r(242));function o(e){return e&&e.__esModule?e:{default:e}}const l=(0,n().default)((function*(e,t){const r=yield*(0,i.default)(t);return null===r?null:yield*(0,s.default)(r.passes,(0,a.default)(r),e)}));t.parse=function(e,t,r){if("function"===typeof t&&(r=t,t=void 0),void 0===r)return l.sync(e,t);l.errback(e,t,r)};const c=l.sync;t.parseSync=c;const u=l.async;t.parseAsync=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r,u){const p={parent:void 0,scope:void 0,node:void 0,path:void 0,file:void 0,classId:void 0,classRef:void 0,superFnId:void 0,superName:void 0,superReturns:[],isDerived:!1,extendsNative:!1,construct:void 0,constructorBody:void 0,userConstructor:void 0,userConstructorPath:void 0,hasConstructor:!1,instancePropBody:[],instancePropRefs:{},staticPropBody:[],body:[],superThises:[],pushedConstructor:!1,pushedInherits:!1,protoAlias:null,isLoose:!1,hasInstanceDescriptors:!1,hasStaticDescriptors:!1,instanceMutatorMap:{},staticMutatorMap:{}},f=e=>{Object.assign(p,e)},h=o.traverse.visitors.merge([i.environmentVisitor,{ThisExpression(e){p.superThises.push(e)}}]);function m(){if(function(){let e=!1;const t=p.path.get("body.body");for(const i of t)if(e=i.equals("kind","constructor"),e)break;if(e)return;let r,n;if(p.isDerived){const e=o.template.expression.ast`
        (function () {
          super(...arguments);
        })
      `;r=e.params,n=e.body}else r=[],n=o.types.blockStatement([]);p.path.get("body").unshiftContainer("body",o.types.classMethod("constructor",o.types.identifier("constructor"),r,n))}(),function(){const e=p.path.get("body.body");for(const t of e){const e=t.node;if(t.isClassProperty())throw t.buildCodeFrameError("Missing class properties transform.");if(e.decorators)throw t.buildCodeFrameError("Method has decorators, put the decorator plugin before the classes one.");if(o.types.isClassMethod(e)){const r="constructor"===e.kind;new i.default({methodPath:t,objectRef:p.classRef,superRef:p.superName,isLoose:p.isLoose,file:p.file}).replace();const n=[];t.traverse(o.traverse.visitors.merge([i.environmentVisitor,{ReturnStatement(e){e.getFunctionParent().isArrowFunctionExpression()||n.push(e)}}])),r?v(n,e,t):b(e,t)}}}(),function(){if(!p.isDerived)return;const e=p.userConstructorPath,t=e.get("body");e.traverse(h);let r=function(){const t=e.scope.generateDeclaredUidIdentifier("this");return r=()=>o.types.cloneNode(t),t};for(const i of p.superThises){const{node:e,parentPath:t}=i;t.isMemberExpression({object:e})?i.replaceWith(r()):i.replaceWith(o.types.callExpression(p.file.addHelper("assertThisInitialized"),[r()]))}const n=new Set;e.traverse(o.traverse.visitors.merge([i.environmentVisitor,{Super(e){const{node:t,parentPath:r}=e;r.isCallExpression({callee:t})&&n.add(r)}}]));let s,a=!!n.size;for(const i of n)g(i,p.superName,r,t),a&&i.find((function(t){return t===e||(t.isLoop()||t.isConditional()||t.isArrowFunctionExpression()?(a=!1,!0):void 0)}));s=p.isLoose?e=>{const t=o.types.callExpression(p.file.addHelper("assertThisInitialized"),[r()]);return e?o.types.logicalExpression("||",e,t):t}:e=>o.types.callExpression(p.file.addHelper("possibleConstructorReturn"),[r()].concat(e||[]));const l=t.get("body");l.length&&l.pop().isReturnStatement()||t.pushContainer("body",o.types.returnStatement(a?r():s()));for(const i of p.superReturns)i.get("argument").replaceWith(s(i.node.argument))}(),p.userConstructor){const{constructorBody:e,userConstructor:t,construct:r}=p;e.body=e.body.concat(t.body.body),o.types.inherits(r,t),o.types.inherits(e,t.body)}y()}function y(){x();const{body:e}=p;let t,r;if(p.hasInstanceDescriptors&&(t=a.toClassObject(p.instanceMutatorMap)),p.hasStaticDescriptors&&(r=a.toClassObject(p.staticMutatorMap)),t||r){t&&(t=a.toComputedObjectFromClass(t)),r&&(r=a.toComputedObjectFromClass(r));let n=[o.types.cloneNode(p.classRef),o.types.nullLiteral(),o.types.nullLiteral()];t&&(n[1]=t),r&&(n[2]=r);let i=0;for(let e=0;e<n.length;e++)o.types.isNullLiteral(n[e])||(i=e);n=n.slice(0,i+1),e.push(o.types.expressionStatement(o.types.callExpression(p.file.addHelper("createClass"),n)))}f({hasInstanceDescriptors:!1,hasStaticDescriptors:!1,instanceMutatorMap:{},staticMutatorMap:{}})}function g(e,t,r,n){const i=e.node;let a;p.isLoose?(i.arguments.unshift(o.types.thisExpression()),2===i.arguments.length&&o.types.isSpreadElement(i.arguments[1])&&o.types.isIdentifier(i.arguments[1].argument,{name:"arguments"})?(i.arguments[1]=i.arguments[1].argument,i.callee=o.types.memberExpression(o.types.cloneNode(t),o.types.identifier("apply"))):i.callee=o.types.memberExpression(o.types.cloneNode(t),o.types.identifier("call")),a=o.types.logicalExpression("||",i,o.types.thisExpression())):a=(0,s.default)(o.types.cloneNode(p.superFnId),o.types.thisExpression(),i.arguments),e.parentPath.isExpressionStatement()&&e.parentPath.container===n.node.body&&n.node.body.length-1===e.parentPath.key?(p.superThises.length&&(a=o.types.assignmentExpression("=",r(),a)),e.parentPath.replaceWith(o.types.returnStatement(a))):e.replaceWith(o.types.assignmentExpression("=",r(),a))}function b(e,t){const r=t?t.scope:p.scope;"method"===e.kind&&function(e,t){if(p.isLoose&&!e.decorators){let{classRef:r}=p;e.static||(!function(){if(null===p.protoAlias){f({protoAlias:p.scope.generateUidIdentifier("proto")});const e=o.types.memberExpression(p.classRef,o.types.identifier("prototype")),t=o.types.variableDeclaration("var",[o.types.variableDeclarator(p.protoAlias,e)]);p.body.push(t)}}(),r=p.protoAlias);const i=o.types.memberExpression(o.types.cloneNode(r),e.key,e.computed||o.types.isLiteral(e.key));let s=o.types.functionExpression(null,e.params,e.body,e.generator,e.async);o.types.inherits(s,e);const a=o.types.toComputedKey(e,e.key);o.types.isStringLiteral(a)&&(s=(0,n.default)({node:s,id:a,scope:t}));const l=o.types.expressionStatement(o.types.assignmentExpression("=",i,s));return o.types.inheritsComments(l,e),p.body.push(l),!0}return!1}(e,r)||function(e,t,r="value",n){let i;e.static?(f({hasStaticDescriptors:!0}),i=p.staticMutatorMap):(f({hasInstanceDescriptors:!0}),i=p.instanceMutatorMap);const s=a.push(i,e,r,p.file,n);t&&(s.enumerable=o.types.booleanLiteral(!0))}(e,!1,null,r)}function v(e,t,r){r.scope.hasOwnBinding(p.classRef.name)&&r.scope.rename(p.classRef.name),f({userConstructorPath:r,userConstructor:t,hasConstructor:!0,superReturns:e});const{construct:n}=p;o.types.inheritsComments(n,t),n.params=t.params,o.types.inherits(n.body,t.body),n.body.directives=t.body.directives,function(){if(p.pushedConstructor)return;p.pushedConstructor=!0,(p.hasInstanceDescriptors||p.hasStaticDescriptors)&&y();p.body.push(p.construct),x()}()}function x(){if(!p.isDerived||p.pushedInherits)return;const t=e.scope.generateUidIdentifier("super");f({pushedInherits:!0,superFnId:t}),p.body.unshift(o.types.expressionStatement(o.types.callExpression(p.file.addHelper(p.isLoose?"inheritsLoose":"inherits"),[o.types.cloneNode(p.classRef),o.types.cloneNode(p.superName)])),o.types.variableDeclaration("var",[o.types.variableDeclarator(t,o.types.callExpression((0,c.default)(p.file),[o.types.cloneNode(p.classRef)]))]))}return function(e,t,r,n){f({parent:e.parent,scope:e.scope,node:e.node,path:e,file:t,isLoose:n}),f({classId:p.node.id,classRef:p.node.id?o.types.identifier(p.node.id.name):p.scope.generateUidIdentifier("class"),superName:p.node.superClass,isDerived:!!p.node.superClass,constructorBody:o.types.blockStatement([])}),f({extendsNative:p.isDerived&&r.has(p.superName.name)&&!p.scope.hasBinding(p.superName.name,!0)});const{classRef:i,node:s,constructorBody:a}=p;f({construct:d(i,a,s)});let{body:c}=p;const{closureParams:u,closureArgs:h}=function(){const{superName:e}=p,t=[],r=[];if(p.isDerived){let n=o.types.cloneNode(e);p.extendsNative&&(n=o.types.callExpression(p.file.addHelper("wrapNativeSuper"),[n]),(0,l.default)(n));const i=p.scope.generateUidIdentifierBasedOnNode(e);t.push(i),r.push(n),f({superName:o.types.cloneNode(i)})}return{closureParams:t,closureArgs:r}}();m(),p.isLoose||a.body.unshift(o.types.expressionStatement(o.types.callExpression(p.file.addHelper("classCallCheck"),[o.types.thisExpression(),o.types.cloneNode(p.classRef)]))),c=c.concat(p.staticPropBody.map(e=>e(o.types.cloneNode(p.classRef))));const y=e.isInStrictMode();let g=p.classId&&1===c.length;if(g&&!y)for(const l of p.construct.params)if(!o.types.isIdentifier(l)){g=!1;break}const b=g?c[0].body.directives:[];if(y||b.push(o.types.directive(o.types.directiveLiteral("use strict"))),g)return o.types.toExpression(c[0]);c.push(o.types.returnStatement(o.types.cloneNode(p.classRef)));const v=o.types.arrowFunctionExpression(u,o.types.blockStatement(c,b));return o.types.callExpression(v,h)}(e,t,r,u)};var n=f(r(105)),i=p(r(604)),s=f(r(248)),a=p(r(606)),o=r(87),l=f(r(170)),c=f(r(609));function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t,r){const n=o.types.functionDeclaration(o.types.cloneNode(e),[],t);return o.types.inherits(n,r),n}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.skipAllButComputedKey=u,t.default=t.environmentVisitor=void 0;var n=l(r(58)),i=l(r(605)),s=l(r(248)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(42));function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r,n){e=a.cloneNode(e);const i=t||n?e:a.memberExpression(e,a.identifier("prototype"));return a.callExpression(r.addHelper("getPrototypeOf"),[i])}function u(e){if(!e.node.computed)return void e.skip();const t=a.VISITOR_KEYS[e.type];for(const r of t)"key"!==r&&e.skipKey(r)}const p={TypeAnnotation(e){e.skip()},Function(e){e.isMethod()||e.isArrowFunctionExpression()||e.skip()},"Method|ClassProperty|ClassPrivateProperty"(e){u(e)}};t.environmentVisitor=p;const f=n.default.visitors.merge([p,{Super(e,t){const{node:r,parentPath:n}=e;n.isMemberExpression({object:r})&&t.handle(n)}}]),d={memoise(e,t){const{scope:r,node:n}=e,{computed:i,property:s}=n;if(!i)return;const a=r.maybeGenerateMemoised(s);a&&this.memoiser.set(s,a,t)},prop(e){const{computed:t,property:r}=e.node;return this.memoiser.has(r)?a.cloneNode(this.memoiser.get(r)):t?a.cloneNode(r):a.stringLiteral(r.name)},get(e){return a.callExpression(this.file.addHelper("get"),[c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod),this.prop(e),a.thisExpression()])},set(e,t){return a.callExpression(this.file.addHelper("set"),[c(this.getObjectRef(),this.isStatic,this.file,this.isPrivateMethod),this.prop(e),t,a.thisExpression(),a.booleanLiteral(e.isInStrictMode())])},destructureSet(e){throw e.buildCodeFrameError("Destructuring to a super field is not supported yet.")},call(e,t){return(0,s.default)(this.get(e),a.thisExpression(),t)}},h=Object.assign({},d,{prop(e){const{property:t}=e.node;return this.memoiser.has(t)?a.cloneNode(this.memoiser.get(t)):a.cloneNode(t)},get(e){const{isStatic:t,superRef:r}=this,{computed:n}=e.node,i=this.prop(e);let s;return s=t?r?a.cloneNode(r):a.memberExpression(a.identifier("Function"),a.identifier("prototype")):r?a.memberExpression(a.cloneNode(r),a.identifier("prototype")):a.memberExpression(a.identifier("Object"),a.identifier("prototype")),a.memberExpression(s,i,n)},set(e,t){const{computed:r}=e.node,n=this.prop(e);return a.assignmentExpression("=",a.memberExpression(a.thisExpression(),n,r),t)},destructureSet(e){const{computed:t}=e.node,r=this.prop(e);return a.memberExpression(a.thisExpression(),r,t)}});t.default=class{constructor(e){const t=e.methodPath;this.methodPath=t,this.isStatic=t.isObjectMethod()||t.node.static,this.isPrivateMethod=t.isPrivate()&&t.isMethod(),this.file=e.file,this.superRef=e.superRef,this.isLoose=e.isLoose,this.opts=e}getObjectRef(){return a.cloneNode(this.opts.objectRef||this.opts.getObjectRef())}replace(){const e=this.isLoose?h:d;(0,i.default)(this.methodPath,f,Object.assign({file:this.file,isStatic:this.isStatic,isPrivateMethod:this.isPrivateMethod,getObjectRef:this.getObjectRef.bind(this),superRef:this.superRef},e))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){e.traverse(t,Object.assign({},a,{},r,{memoiser:new s}))};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var a=n?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}r.default=e,t&&t.set(e,r);return r}(r(42));function i(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}class s{constructor(){this._map=new WeakMap}has(e){return this._map.has(e)}get(e){if(!this.has(e))return;const t=this._map.get(e),{value:r}=t;return t.count--,0===t.count?n.assignmentExpression("=",r,e):r}set(e,t,r){return this._map.set(e,{count:r,value:t})}}const a={memoise(){},handle(e){const{node:t,parent:r,parentPath:i}=e;if(i.isUpdateExpression({argument:t})){const{operator:s,prefix:a}=r;this.memoise(e,2);const o=n.binaryExpression(s[0],n.unaryExpression("+",this.get(e)),n.numericLiteral(1));if(a)i.replaceWith(this.set(e,o));else{const{scope:r}=e,s=r.generateUidIdentifierBasedOnNode(t);r.push({id:s}),o.left=n.assignmentExpression("=",n.cloneNode(s),o.left),i.replaceWith(n.sequenceExpression([this.set(e,o),n.cloneNode(s)]))}}else{if(i.isAssignmentExpression({left:t})){const{operator:t,right:s}=r;let a=s;return"="!==t&&(this.memoise(e,2),a=n.binaryExpression(t.slice(0,-1),this.get(e),a)),void i.replaceWith(this.set(e,a))}if(i.isCallExpression({callee:t})){const{arguments:t}=r;i.replaceWith(this.call(e,t))}else i.isObjectProperty({value:t})&&i.parentPath.isObjectPattern()||i.isAssignmentPattern({left:t})&&i.parentPath.isObjectProperty({value:r})&&i.parentPath.parentPath.isObjectPattern()||i.isArrayPattern()||i.isAssignmentPattern({left:t})&&i.parentPath.isArrayPattern()||i.isRestElement()?e.replaceWith(this.destructureSet(e)):e.replaceWith(this.get(e))}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.push=function(e,t,r,a,o){const l=s.toKeyAlias(t);let c,u,p={};(0,i.default)(e,l)&&(p=e[l]);e[l]=p,p._inherits=p._inherits||[],p._inherits.push(t),p._key=t.key,t.computed&&(p._computed=!0);if(t.decorators){const e=p.decorators=p.decorators||s.arrayExpression([]);e.elements=e.elements.concat(t.decorators.map(e=>e.expression).reverse())}if(p.value||p.initializer)throw a.buildCodeFrameError(t,"Key conflict with sibling node");(s.isObjectProperty(t)||s.isObjectMethod(t)||s.isClassMethod(t))&&(c=s.toComputedKey(t,t.key));s.isProperty(t)?u=t.value:(s.isObjectMethod(t)||s.isClassMethod(t))&&(u=s.functionExpression(null,t.params,t.body,t.generator,t.async),u.returnType=t.returnType);const f=function(e){if((s.isClassMethod(e)||s.isObjectMethod(e))&&("get"===e.kind||"set"===e.kind))return e.kind;return"value"}(t);r&&"value"===f||(r=f);o&&s.isStringLiteral(c)&&("value"===r||"initializer"===r)&&s.isFunctionExpression(u)&&(u=(0,n.default)({id:c,node:u,scope:o}));u&&(s.inheritsComments(u,t),p[r]=u);return p},t.hasComputed=function(e){for(const t of Object.keys(e))if(e[t]._computed)return!0;return!1},t.toComputedObjectFromClass=function(e){const t=s.arrayExpression([]);for(let r=0;r<e.properties.length;r++){const n=e.properties[r],i=n.value;i.properties.unshift(s.objectProperty(s.identifier("key"),s.toComputedKey(n))),t.elements.push(i)}return t},t.toClassObject=l,t.toDefineObject=function(e){return Object.keys(e).forEach((function(t){const r=e[t];r.value&&(r.writable=s.booleanLiteral(!0)),r.configurable=s.booleanLiteral(!0),r.enumerable=s.booleanLiteral(!0)})),l(e)};var n=o(r(105)),i=o(r(607)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,t&&t.set(e,r);return r}(r(42));function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function o(e){return e&&e.__esModule?e:{default:e}}function l(e){const t=s.objectExpression([]);return Object.keys(e).forEach((function(r){const n=e[r],i=s.objectExpression([]),a=s.objectProperty(n._key,i,n._computed);Object.keys(n).forEach((function(e){const t=n[e];if("_"===e[0])return;const r=s.objectProperty(s.identifier(e),t);s.inheritsComments(r,t),s.removeComments(t),i.properties.push(r)})),t.properties.push(a)})),t}},function(e,t,r){var n=r(608),i=r(241);e.exports=function(e,t){return null!=e&&i(e,t,n)}},function(e,t){var r=Object.prototype.hasOwnProperty;e.exports=function(e,t){return null!=e&&r.call(e,t)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){try{return e.addHelper("createSuper")}catch(a){}if(i.has(e))return(n.types.cloneNode||n.types.clone)(i.get(e));const t=e.scope.generateUidIdentifier("createSuper");i.set(e,t);const r=s({CREATE_SUPER:t,GET_PROTOTYPE_OF:e.addHelper("getPrototypeOf"),POSSIBLE_CONSTRUCTOR_RETURN:e.addHelper("possibleConstructorReturn")});return e.path.unshiftContainer("body",[r]),e.scope.registerDeclaration(e.path.get("body.0")),n.types.cloneNode(t)};var n=r(87);const i=new WeakMap;const s=n.template.statement`
  function CREATE_SUPER(Derived) {
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;

      // core-js@3
      if (Reflect.construct.sham) return false;

      // Proxy can't be polyfilled. Every browser implemented
      // proxies before or at the same time as Reflect.construct,
      // so if they support Proxy they also support Reflect.construct.
      if (typeof Proxy === "function") return true;

      // Since Reflect.construct can't be properly polyfilled, some
      // implementations (e.g. core-js@2) don't set the correct internal slots.
      // Those polyfills don't allow us to subclass built-ins, so we need to
      // use our fallback implementation.
      try {
        // If the internal slots aren't set, this throws an error similar to
        //   TypeError: this is not a Date object.
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
      } catch (e) {
        return false;
      }
    }

    return function () {
      var Super = GET_PROTOTYPE_OF(Derived), result;
      if (isNativeReflectConstruct()) {
        // NOTE: This doesn't work if this.__proto__.constructor has been modified.
        var NewTarget = GET_PROTOTYPE_OF(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return POSSIBLE_CONSTRUCTOR_RETURN(this, result);
    }
  }
`},function(e,t,r){},function(e,t,r){},function(e,t,r){},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(616);function i(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return J}));var n=r(3),i=r(20),s=r(21),a=r(81),o=r.n(a),l=r(168);function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,r){return(u=c()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&Object(l.a)(i,r.prototype),i}).apply(null,arguments)}var p=r(82),f=r(63),d=r(77),h=r(64),m=r(65),y=r(66),g=r(0),b=r.n(g),v=r(22),x=r.n(v),E=r(169),S=r.n(E),w=r(1),T=r.n(w),P=(r(333),r(95)),A=r(41),C=r.n(A),k=(r(120),function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(h.a)(this,Object(m.a)(t).call(this,e))).codemirror=null,r.editor=null,r}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.renderCodeMirror()}},{key:"renderCodeMirror",value:function(){var e=this;this.editor=C.a.fromTextArea(this.textarea,this.props.options),this.codemirror=C.a;var t=this.getEventHandleFromProps();Object.keys(t).forEach((function(r){e.editor.on(t[r],e.props[r])}));var r=this.props,n=r.value,i=r.width,s=r.height;this.editor.setValue(n||""),(i||s)&&this.editor.setSize(i,s)}},{key:"UNSAFE_componentWillReceiveProps",value:function(){var e=Object(p.a)(o.a.mark((function e(t){var r,n,i,s,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.editor.getValue(),void 0!==(n=t.value)&&n!==this.props.value&&n!==r&&this.editor.setValue(t.value),i=t.options,s=t.width,a=t.height,e.next=6,this.setOptions(i);case 6:s===this.props.width&&a===this.props.height||this.editor.setSize(s,a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setOptions",value:function(){var e=Object(p.a)(o.a.mark((function e(t){var n,i=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"!==Object(P.a)(t)){e.next=7;break}if(!(n=C.a.findModeByName(t.mode))||!n.mode){e.next=5;break}return e.next=5,r(334)("./".concat(n.mode,"/").concat(n.mode,".js"));case 5:n&&(t.mode=n.mime),Object.keys(t).forEach((function(e){t[e]&&JSON.stringify(t[e])&&i.editor.setOption(e,t[e])}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.editor&&this.editor.toTextArea()}},{key:"getEventHandleFromProps",value:function(){var e=Object.keys(this.props).filter((function(e){return/^on+/.test(e)})),t={};return e.forEach((function(e){var r=e.slice(2);t[e]=r.replace(r[0],r[0].toLowerCase())})),t}},{key:"render",value:function(){var e=this;return b.a.createElement("textarea",{ref:function(t){e.textarea=t}})}}]),t}(g.Component));k.defaultProps={value:"",options:{},width:"100%",height:"100%"},k.propTypes={value:T.a.string,options:T.a.object,width:T.a.oneOfType([T.a.string,T.a.number]),height:T.a.oneOfType([T.a.string,T.a.number])};r(335);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(h.a)(this,Object(m.a)(t).call(this,e))).getInstance=function(e){e&&(r.codemirror=e.codemirror,r.editor=e.editor)},r.state={codeMirrorOptions:{}},r}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.options,r=O({tabSize:2,autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,lineNumbers:!0,fullScreen:!0},t),this.setState({codeMirrorOptions:r});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"UNSAFE_componentWillReceiveProps",value:function(){var e=Object(p.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({codeMirrorOptions:O({},this.state.codeMirrorOptions,{},t.options)});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=(e.options,Object(s.a)(e,["options"])),r=this.state.codeMirrorOptions;return b.a.createElement(k,Object(n.a)({},t,{ref:this.getInstance,options:O({},r)}))}}]),t}(g.Component);_.defaultProps={value:"",options:{}},_.propTypes={value:T.a.string,options:T.a.object};var D=r(336),I=r.n(D),N=r(16);r(612);function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=function(e){function t(e){var r;return Object(f.a)(this,t),(r=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={dragging:!1},r.warpper=void 0,r.paneNumber=void 0,r.startX=void 0,r.startY=void 0,r.move=void 0,r.target=void 0,r.boxWidth=void 0,r.boxHeight=void 0,r.preWidth=void 0,r.nextWidth=void 0,r.preHeight=void 0,r.nextHeight=void 0,r.preSize=void 0,r.nextSize=void 0,r.onDragEnd=r.onDragEnd.bind(Object(N.a)(r)),r.onDragging=r.onDragging.bind(Object(N.a)(r)),r}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){this.removeEvent()}},{key:"removeEvent",value:function(){window.removeEventListener("mousemove",this.onDragging,!1),window.removeEventListener("mouseup",this.onDragEnd,!1)}},{key:"onMouseDown",value:function(e,t){if(t.target&&this.warpper){this.paneNumber=e,this.startX=t.clientX,this.startY=t.clientY,this.move=!0,this.target=t.target.parentNode;var r=this.target.previousElementSibling,n=this.target.nextElementSibling;this.boxWidth=this.warpper.clientWidth,this.boxHeight=this.warpper.clientHeight,r&&(this.preWidth=r.clientWidth,this.preHeight=r.clientHeight),n&&(this.nextWidth=n.clientWidth,this.nextHeight=n.clientHeight),window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd,!1),this.setState({dragging:!0})}}},{key:"onDragging",value:function(e){if(this.move){this.state.dragging||this.setState({dragging:!0});var t=this.props,r=t.mode,n=t.onDragging,i=this.target.nextElementSibling,s=this.target.previousElementSibling,a=e.clientX-this.startX,o=e.clientY-this.startY;if(this.preSize=0,this.nextSize=0,"horizontal"===r){if(this.preSize=this.preWidth+a>-1?this.preWidth+a:0,this.nextSize=this.nextWidth-a>-1?this.nextWidth-a:0,0===this.preSize||0===this.nextSize)return;this.preSize=100*(this.preSize/this.boxWidth>=1?1:this.preSize/this.boxWidth),this.nextSize=100*(this.nextSize/this.boxWidth>=1?1:this.nextSize/this.boxWidth),s&&i&&(s.style.width="".concat(this.preSize,"%"),i.style.width="".concat(this.nextSize,"%"))}if("vertical"===r&&this.preHeight+o>-1&&this.nextHeight-o>-1){if(this.preSize=this.preHeight+o>-1?this.preHeight+o:0,this.nextSize=this.nextHeight-o>-1?this.nextHeight-o:0,this.preSize=100*(this.preSize/this.boxHeight>=1?1:this.preSize/this.boxHeight),this.nextSize=100*(this.nextSize/this.boxHeight>=1?1:this.nextSize/this.boxHeight),0===this.preSize||0===this.nextSize)return;s&&i&&(s.style.height="".concat(this.preSize,"%"),i.style.height="".concat(this.nextSize,"%"))}n&&n(this.preSize,this.nextSize,this.paneNumber)}}},{key:"onDragEnd",value:function(){var e=this.props.onDragEnd;this.move=!1,e&&e(this.preSize,this.nextSize,this.paneNumber),this.removeEvent(),this.setState({dragging:!1})}},{key:"render",value:function(){var e=this,t=this.props,r=t.prefixCls,a=t.className,o=t.children,l=t.mode,c=t.visiable,u=t.lineBar,p=t.disable,f=(t.onDragEnd,t.onDragging,Object(s.a)(t,["prefixCls","className","children","mode","visiable","lineBar","disable","onDragEnd","onDragging"])),d=this.state.dragging,h=S()(r,a,"".concat(r,"-").concat(l),{dragging:d}),m=b.a.Children.toArray(o);return b.a.createElement("div",Object(n.a)({className:h},f,{ref:function(t){return e.warpper=t}}),b.a.Children.map(m,(function(t,n){var s,a=Object.assign({},t.props,{className:S()("".concat(r,"-pane"),t.props.className),style:L({},t.props.style)}),o=!0===c||c&&c.includes(n+1)||!1,l={className:S()("".concat(r,"-bar"),(s={},Object(i.a)(s,"".concat(r,"-line-bar"),u),Object(i.a)(s,"".concat(r,"-large-bar"),!u),s))};return(!0===p||p&&p.includes(n+1))&&(l.className=S()(l.className,{disable:p})),b.a.createElement(b.a.Fragment,null,0!==n&&o&&b.a.createElement("div",L({},l),b.a.createElement("div",{onMouseDown:e.onMouseDown.bind(e,n+1)})),b.a.cloneElement(t,L({},a)))})))}}]),t}(b.a.Component);R.defaultProps={prefixCls:"w-split",visiable:!0,mode:"horizontal"};r(337);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var B=function(e){function t(){return Object(f.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.options,r=e.btnText,a=e.prefixCls,o=Object(s.a)(e,["options","btnText","prefixCls"]),l=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({editors:"0010",js_pre_processor:"babel"},t);return b.a.createElement("form",Object(n.a)({action:"https://codepen.io/pen/define",method:"POST",target:"_blank"},o,{className:"".concat(a,"-form")}),b.a.createElement("input",{type:"hidden",name:"data",value:JSON.stringify(l)}),b.a.createElement("button",{type:"submit"},b.a.createElement("svg",{viewBox:"0 0 100 100",width:"21",height:"21"},b.a.createElement("path",{d:"M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"})),b.a.createElement("span",null,r)))}}]),t}(b.a.Component);B.defaultProps={btnText:"CodePen",prefixCls:"",options:{title:"",html:"",js:"",css:"",editors:"0010",css_external:"",js_external:"",js_pre_processor:"babel"}};var U={full:b.a.createElement("svg",{viewBox:"0 0 1024 1024"},b.a.createElement("path",{d:"M909 959H780a30 30 0 0 1 0-60h99a20 20 0 0 0 20-20v-99a30 30 0 0 1 60 0v129a50 50 0 0 1-50 50z m20-685a30 30 0 0 1-30-30v-99a20 20 0 0 0-20-20h-99a30 30 0 0 1 0-60h129a50 50 0 0 1 50 50v129a30 30 0 0 1-30 30z m-157 28v420a50 50 0 0 1-50 50H302a50 50 0 0 1-50-50V302a50 50 0 0 1 50-50h420a50 50 0 0 1 50 50z m-60 30a20 20 0 0 0-20-20H332a20 20 0 0 0-20 20v360a20 20 0 0 0 20 20h360a20 20 0 0 0 20-20V332zM244 125h-99a20 20 0 0 0-20 20v99a30 30 0 0 1-60 0V115a50 50 0 0 1 50-50h129a30 30 0 0 1 0 60zM95 750a30 30 0 0 1 30 30v99a20 20 0 0 0 20 20h99a30 30 0 0 1 0 60H115a50 50 0 0 1-50-50V780a30 30 0 0 1 30-30z"})),bgPlaid:b.a.createElement("svg",{width:"100%",height:"100%",preserveAspectRatio:"none",style:{display:"block"}},b.a.createElement("pattern",{id:"pattern",x:"0",y:"0",width:"16",height:"16",patternUnits:"userSpaceOnUse"},b.a.createElement("rect",{fill:"rgba(0, 0, 0, 0.06)",x:"0",width:"8",height:"8",y:"0"}),b.a.createElement("rect",{fill:"rgba(0, 0, 0, 0.06)",x:"8",width:"8",height:"8",y:"8"})),b.a.createElement("rect",{fill:"url(#pattern)",x:"0",y:"0",width:"100%",height:"100%"})),copy:b.a.createElement("svg",{viewBox:"0 0 1024 1024"},b.a.createElement("path",{d:"M869.865 46.545a107.706 107.706 0 0 1 107.59 107.567v599.412a107.706 107.706 0 0 1-107.59 107.567h-148.41v8.797a107.683 107.683 0 0 1-107.567 107.567H154.112A107.683 107.683 0 0 1 46.545 869.888V270.476a107.683 107.683 0 0 1 107.567-107.567h148.433v-8.797a107.706 107.706 0 0 1 107.59-107.567h459.73z m-715.73 861.091h459.73a37.841 37.841 0 0 0 37.771-37.748V270.476c0-20.806-16.942-37.749-37.748-37.749H154.135c-20.806 0-37.771 16.943-37.771 37.749v599.412c0 20.83 16.965 37.748 37.771 37.748z m753.501-154.112V154.112c0-20.806-16.965-37.748-37.771-37.748h-459.73c-20.806 0-37.771 16.942-37.771 37.748v8.797h241.524a107.683 107.683 0 0 1 107.567 107.567v520.797h148.41c20.806 0 37.771-16.92 37.771-37.749z m-384-381.16a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m0 162.909a34.91 34.91 0 0 1 0 69.818H244.364a34.91 34.91 0 0 1 0-69.818h279.272z m-93.09 162.909a34.91 34.91 0 0 1 0 69.818H244.363a34.91 34.91 0 0 1 0-69.818h186.181z"}))},W=r(338),V=r(339),H=r.n(V),G=r(340),K=r.n(G);function q(e){return z.apply(this,arguments)}function z(){return(z=Object(p.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n=Object(W.transform)(t,{presets:["es2015","react"],plugins:[[H.a,{removeAll:!0}],[K.a,{loose:!0}]]}).code,e.abrupt("return",{code:n,specifiers:r});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(610),r(611);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){function t(){var e,r;Object(f.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(r=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).demoDom=b.a.createRef(),r.editor=b.a.createRef(),r.language="",r.initHeight=3,r.playerId="".concat(parseInt(String(1e9*Math.random()),10).toString(36)),r.state={errorMessage:"",fullScreen:!1,copied:!1,showEdit:!1,width:1},r}return Object(y.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.language;this.language="string"===typeof e?e:e&&e.name||"",this.props.noPreview||this.executeCode(this.props.code),window.addEventListener("popstate",(function(e){document.body.style.overflow="inherit"}),!1)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.language;this.language="string"===typeof t?t:t&&t.name||"",e.noPreview!==this.props.noPreview&&this.executeCode(this.props.code)}},{key:"executeCode",value:function(){var e=Object(p.a)(o.a.mark((function e(t){var r,n,i,s,a,l,c,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/(jsx|js)/.test(this.language)){e.next=2;break}return e.abrupt("return");case 2:for(s in e.prev=2,r=["context","React","ReactDOM","Component"],n=[this,b.a,x.a,g.Component],i=this.props.dependencies)r.push(s),n.push(i[s]);return t=t.replace("_mount_","document.getElementById('".concat(this.playerId,"')")),a="".concat(t),e.next=11,q(a);case 11:l=e.sent,c=l.code,r.push(c),u(Function,r).apply(null,n),this.setState({errorMessage:""}),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(2),p="",p=e.t0&&e.t0.message?e.t0.message:JSON.stringify(e.t0),this.setState({errorMessage:p});case 23:case"end":return e.stop()}}),e,this,[[2,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onCopyCode",value:function(){var e=this,t=this.props.code;I()(t||"",(function(t){e.setState({copied:t})})),setTimeout((function(){e.setState({copied:!1})}),2e3)}},{key:"onFullScreen",value:function(){var e=this,t=this.state.fullScreen;this.setState({fullScreen:!t},(function(){document.body.style.overflow=t?"inherit":"hidden",!t&&e.demoDom.current&&(e.demoDom.current.style.maxWidth="inherit")}))}},{key:"initOldHeight",value:function(){var e=this.demoDom.current;3===this.initHeight&&e&&(this.initHeight=e.clientHeight)}},{key:"onSwitchSource",value:function(){var e=this,t=this.state.width;this.initOldHeight(),this.setState({width:1===t?"50%":1,showEdit:!0},(function(){var r=e.editor.current;r&&r.editor.setSize("100%",1!==t?e.initHeight:"100%")}))}},{key:"render",value:function(){var e,t,r=this,a=this.props,o=a.style,l=a.prefixCls,c=a.language,u=a.className,p=a.editProps,f=a.codePenOption,d=a.code,h=(a.dependencies,a.onlyEdit),m=a.bordered,y=a.noCode,g=a.noPreview,v=a.noScroll,x=a.bgWhite,E=Object(s.a)(a,["style","prefixCls","language","className","editProps","codePenOption","code","dependencies","onlyEdit","bordered","noCode","noPreview","noScroll","bgWhite"]),w=!(!y&&!g)&&(!y||!g),T=1!==this.state.width&&[w?1:2];return b.a.createElement(R,Object(n.a)({visiable:T,className:S()(u,l,(e={},Object(i.a)(e,"".concat(l,"-noScroll"),v),Object(i.a)(e,"".concat(l,"-OneItem"),w),Object(i.a)(e,"".concat(l,"-bordered"),m),Object(i.a)(e,"".concat(l,"-fullScreen"),this.state.fullScreen),e)),style:X({flex:1},o)},E),!g&&!h&&b.a.createElement("div",{ref:this.demoDom,className:S()("".concat(l,"-demo"),(t={},Object(i.a)(t,"".concat(l,"-demo-bgPlaid"),!x),Object(i.a)(t,"".concat(l,"-demo-error"),this.state.errorMessage),t)),style:X({flex:1},1===this.state.width?{width:"100%"}:{})},this.state.errorMessage&&b.a.createElement("pre",null,b.a.createElement("code",null,this.state.errorMessage)),b.a.createElement("div",{className:S()("".concat(l,"-demo-source"),{error:this.state.errorMessage}),id:this.playerId})),(!y||h)&&b.a.createElement("div",{style:{overflow:"hidden",width:h?"100%":this.state.width}},(this.state.showEdit||h)&&b.a.createElement(_,Object(n.a)({value:(d||"").replace(/\n$/,""),ref:this.editor,options:{theme:"monokai",mode:c}},p,{onChange:function(e){r.executeCode(e.getValue())}}))),!w&&!(y&&g)&&!h&&b.a.createElement("div",{style:{flex:1,width:29},className:"".concat(l,"-bar")},f&&b.a.createElement(B,{prefixCls:l,options:f}),b.a.createElement("div",{className:"".concat(l,"-bar-btn"),onClick:this.onSwitchSource.bind(this)},1===this.state.width?"\u6e90\u7801":"\u9690\u85cf\u7f16\u8f91\u5668"),b.a.createElement("div",{className:S()("".concat(l,"-bar-iconbtns"),Object(i.a)({},"".concat(l,"-bar-copied"),this.state.copied)),onClick:this.onCopyCode.bind(this)},U.copy),b.a.createElement("div",{className:S()("".concat(l,"-bar-iconbtns"),Object(i.a)({},"".concat(l,"-bar-copied"),this.state.fullScreen)),onClick:this.onFullScreen.bind(this)},U.full)))}}]),t}(b.a.PureComponent);J.defaultProps={prefixCls:"w-code-preview",language:"jsx",code:"",editProps:{},noCode:!1,bgWhite:!1,onlyEdit:!1,noPreview:!1,bordered:!0}}])]);
//# sourceMappingURL=0.b22409ab.chunk.js.map