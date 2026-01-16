import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-Q34MU4L5.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k2) {
                  return k2 !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/@maxhub/max-ui/dist/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var n = __toESM(require_react());
var import_react = __toESM(require_react());
function h(e2) {
  var a2, t2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var r2 = e2.length;
      for (a2 = 0; a2 < r2; a2++)
        e2[a2] && (t2 = h(e2[a2])) && (n2 && (n2 += " "), n2 += t2);
    } else
      for (t2 in e2)
        e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function y() {
  for (var e2, a2, t2 = 0, n2 = "", r2 = arguments.length; t2 < r2; t2++)
    (e2 = arguments[t2]) && (a2 = h(e2)) && (n2 && (n2 += " "), n2 += a2);
  return n2;
}
var v;
function g() {
  return g = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a2 = 1; a2 < arguments.length; a2++) {
      var t2 = arguments[a2];
      for (var n2 in t2)
        ({}).hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }, g.apply(null, arguments);
}
var C;
var f = function(e2) {
  return n.createElement("svg", g({ xmlns: "http://www.w3.org/2000/svg", width: 12, height: 16, fill: "none" }, e2), v || (v = n.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M2.934 3.434a.8.8 0 0 1 1.132 0l4 4a.8.8 0 0 1 0 1.132l-4 4a.8.8 0 0 1-1.132-1.132L6.37 8 2.934 4.566a.8.8 0 0 1 0-1.132", clipRule: "evenodd" })));
};
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a2 = 1; a2 < arguments.length; a2++) {
      var t2 = arguments[a2];
      for (var n2 in t2)
        ({}).hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }, B.apply(null, arguments);
}
var N;
function b() {
  return b = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a2 = 1; a2 < arguments.length; a2++) {
      var t2 = arguments[a2];
      for (var n2 in t2)
        ({}).hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }, b.apply(null, arguments);
}
var I;
var T = function(e2) {
  return n.createElement("svg", b({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, e2), N || (N = n.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M7.242 2.115c-2.605 0-4.677 2.044-4.677 4.517s2.072 4.517 4.677 4.517 4.677-2.044 4.677-4.517-2.072-4.517-4.677-4.517M1 6.632C1 3.252 3.817.55 7.242.55s6.242 2.701 6.242 6.082a5.97 5.97 0 0 1-1.692 4.165l3 3.247a.783.783 0 1 1-1.15 1.062l-3.074-3.326a6.34 6.34 0 0 1-3.326.935C3.817 12.715 1 10.013 1 6.632", clipRule: "evenodd" })));
};
function S() {
  return S = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a2 = 1; a2 < arguments.length; a2++) {
      var t2 = arguments[a2];
      for (var n2 in t2)
        ({}).hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }, S.apply(null, arguments);
}
var A;
var x;
function w() {
  return w = Object.assign ? Object.assign.bind() : function(e2) {
    for (var a2 = 1; a2 < arguments.length; a2++) {
      var t2 = arguments[a2];
      for (var n2 in t2)
        ({}).hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
    }
    return e2;
  }, w.apply(null, arguments);
}
var L = function(e2) {
  return n.createElement("svg", w({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none" }, e2), A || (A = n.createElement("circle", { cx: 10, cy: 10, r: 10, fill: "currentColor" })), x || (x = n.createElement("path", { fill: "#fff", fillRule: "evenodd", d: "M5.364 5.364a.9.9 0 0 1 1.272 0L10 8.727l3.364-3.363a.9.9 0 0 1 1.272 1.272L11.274 10l3.364 3.364a.9.9 0 1 1-1.273 1.272L10 11.273l-3.364 3.363a.9.9 0 0 1-1.272-1.272L8.727 10 5.364 6.636a.9.9 0 0 1 0-1.272", clipRule: "evenodd" })));
};
function M(e2, a2) {
  if ("function" == typeof e2)
    return e2(a2);
  null != e2 && (e2.current = a2);
}
function z(a2) {
  const t2 = E(a2), r2 = n.forwardRef((a3, r3) => {
    const { children: l2, ..._2 } = a3, i2 = n.Children.toArray(l2), o2 = i2.find(j);
    if (o2) {
      const a4 = o2.props.children, l3 = i2.map((e2) => e2 === o2 ? n.Children.count(a4) > 1 ? n.Children.only(null) : n.isValidElement(a4) ? a4.props.children : null : e2);
      return (0, import_jsx_runtime.jsx)(t2, { ..._2, ref: r3, children: n.isValidElement(a4) ? n.cloneElement(a4, void 0, l3) : null });
    }
    return (0, import_jsx_runtime.jsx)(t2, { ..._2, ref: r3, children: l2 });
  });
  return r2.displayName = `${a2}.Slot`, r2;
}
var D = z("Slot");
function E(e2) {
  const a2 = n.forwardRef((e3, a3) => {
    const { children: t2, ...r2 } = e3;
    if (n.isValidElement(t2)) {
      const e4 = function(e5) {
        var _a2, _b;
        let a4 = (_a2 = Object.getOwnPropertyDescriptor(e5.props, "ref")) == null ? void 0 : _a2.get, t3 = a4 && "isReactWarning" in a4 && a4.isReactWarning;
        if (t3)
          return e5.ref;
        if (a4 = (_b = Object.getOwnPropertyDescriptor(e5, "ref")) == null ? void 0 : _b.get, t3 = a4 && "isReactWarning" in a4 && a4.isReactWarning, t3)
          return e5.props.ref;
        return e5.props.ref || e5.ref;
      }(t2), l2 = function(e5, a4) {
        const t3 = { ...a4 };
        for (const n2 in a4) {
          const r3 = e5[n2], l3 = a4[n2];
          /^on[A-Z]/.test(n2) ? r3 && l3 ? t3[n2] = (...e6) => {
            const a5 = l3(...e6);
            return r3(...e6), a5;
          } : r3 && (t3[n2] = r3) : "style" === n2 ? t3[n2] = { ...r3, ...l3 } : "className" === n2 && (t3[n2] = [r3, l3].filter(Boolean).join(" "));
        }
        return { ...e5, ...t3 };
      }(r2, t2.props);
      return t2.type !== n.Fragment && (l2.ref = a3 ? function(...e5) {
        return (a4) => {
          let t3 = false;
          const n2 = e5.map((e6) => {
            const n3 = M(e6, a4);
            return t3 || "function" != typeof n3 || (t3 = true), n3;
          });
          if (t3)
            return () => {
              for (let a5 = 0; a5 < n2.length; a5++) {
                const t4 = n2[a5];
                "function" == typeof t4 ? t4() : M(e5[a5], null);
              }
            };
        };
      }(a3, e4) : e4), n.cloneElement(t2, l2);
    }
    return n.Children.count(t2) > 1 ? n.Children.only(null) : null;
  });
  return a2.displayName = `${e2}.SlotClone`, a2;
}
var O = Symbol("radix.slottable");
function k(t2) {
  const n2 = ({ children: t3 }) => (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: t3 });
  return n2.displayName = `${t2}.Slottable`, n2.__radixId = O, n2;
}
var H = k("Slottable");
function j(e2) {
  return n.isValidElement(e2) && "function" == typeof e2.type && "__radixId" in e2.type && e2.type.__radixId === O;
}
var $ = "SvgButton__kk9";
var U = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, asChild: r2, ...l2 } = a2;
  return (0, import_jsx_runtime.jsx)(r2 ? D : "button", { ref: t2, className: y($, n2), ...l2 });
});
U.displayName = "SvgButton";
var P = (0, import_react.createContext)({ size: 48 });
var R = () => (0, import_react.useContext)(P);
var G = {};
var W = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, onClick: r2, ...l2 } = a2, { size: _2 } = R(), i2 = ((e2) => e2 < 40 ? 12 : e2 < 54 ? 16 : e2 < 72 ? 20 : 24)(_2);
  return (0, import_jsx_runtime.jsx)(U, { ref: t2, className: y(G.AvatarCloseButton, n2), onClick: (e2) => {
    e2.preventDefault(), r2 == null ? void 0 : r2(e2);
  }, ...l2, children: (0, import_jsx_runtime.jsx)(L, { width: i2, height: i2 }) });
});
W.displayName = "AvatarCloseButton";
var Y = (e2) => "string" == typeof e2 ? e2 : `${e2}px`;
var X = (e2, a2) => {
  const { asChild: t2, children: n2 } = e2;
  if (!t2)
    return "function" == typeof a2 ? a2(n2) : a2;
  const r2 = import_react.Children.only(n2);
  return (0, import_react.cloneElement)(r2, { children: "function" == typeof a2 ? a2(r2.props.children) : a2 });
};
var F = (e2) => void 0 !== e2 && false !== e2 && null !== e2 && "" !== e2;
var q = () => !!navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
var Z = (...e2) => {
  const a2 = e2.filter(Boolean);
  if (a2.length <= 1) {
    return a2[0] ?? null;
  }
  return (e3) => {
    for (const t2 of a2)
      "function" == typeof t2 ? t2(e3) : t2 && (t2.current = e3);
  };
};
var J = () => {
};
var Q = { AvatarContainer: "AvatarContainer__7c-", AvatarContainer_form_circle: "AvatarContainer_form_circle__J44", AvatarContainer__content: "AvatarContainer__content__h8v", AvatarContainer_form_squircle: "AvatarContainer_form_squircle__1i0", AvatarContainer__overlay: "AvatarContainer__overlay__qul", AvatarContainer__rightBottomCorner: "AvatarContainer__rightBottomCorner__kZG", AvatarContainer__rightTopCorner: "AvatarContainer__rightTopCorner__y4y" };
var V = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, style: l2, children: _2, overlay: i2, rightTopCorner: o2, rightBottomCorner: s2, innerClassNames: c2, size: p2 = 48, asChild: d2, form: u2 = "circle", ...m2 } = a2, h2 = d2 ? D : "div", v2 = y(Q.AvatarContainer, Q[`AvatarContainer_form_${u2}`], r2);
  return (0, import_jsx_runtime.jsx)(P.Provider, { value: { size: p2 }, children: (0, import_jsx_runtime.jsxs)(h2, { ref: n2, className: v2, style: { "--MaxUi-AvatarContainer_size": `${p2}px`, ...l2 }, ...m2, children: [(0, import_jsx_runtime.jsx)(H, { children: X({ asChild: a2.asChild, children: _2 }, (a3) => (0, import_jsx_runtime.jsxs)("span", { className: y(Q.AvatarContainer__content, c2 == null ? void 0 : c2.content), children: [a3, F(i2) && (0, import_jsx_runtime.jsx)("span", { className: y(Q.AvatarContainer__overlay, c2 == null ? void 0 : c2.overlay), children: i2 })] }, "subtree-container")) }), F(s2) && (0, import_jsx_runtime.jsx)("span", { className: y(Q.AvatarContainer__rightBottomCorner, c2 == null ? void 0 : c2.rightBottomCorner), children: s2 }), F(o2) && (0, import_jsx_runtime.jsx)("span", { className: y(Q.AvatarContainer__rightTopCorner, c2 == null ? void 0 : c2.rightTopCorner), children: o2 })] }) });
});
V.displayName = "AvatarContainer";
var K = "AvatarIcon__ZUI";
var ee = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, ...r2 } = a2;
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: y(K, n2), ...r2 });
});
ee.displayName = "AvatarIcon";
var ae = (e2) => {
  const { asChild: a2, children: t2, rootElement: n2, disabled: r2, loading: l2 } = e2;
  if (!a2 && "button" === n2) {
    return { disabled: r2, ...l2 ? { "aria-disabled": true } : {} };
  }
  if (a2 && (0, import_react.isValidElement)(t2)) {
    const { type: e3 } = t2;
    if ("a" === e3) {
      return { "aria-disabled": r2 ?? l2, ...r2 ? { onClick: (e4) => {
        e4.preventDefault();
      }, tabIndex: -1 } : {} };
    }
  }
  return { role: "button", tabIndex: r2 ? -1 : 0, "aria-disabled": r2 ?? l2, ...r2 ? { onClick: void 0 } : {} };
};
var te = (e2) => {
  const a2 = (0, import_react.useRef)(e2);
  return (0, import_react.useEffect)(() => {
    a2.current = e2;
  }), (0, import_react.useMemo)(() => (...e3) => {
    var _a2;
    return (_a2 = a2.current) == null ? void 0 : _a2.call(a2, ...e3);
  }, []);
};
var ne = () => {
  const { colorScheme: e2 } = ya();
  return e2;
};
var re = (e2, a2) => {
  const [t2, n2] = (0, import_react.useState)("idle");
  return (0, import_react.useLayoutEffect)(() => {
    if (!e2)
      return void n2("error");
    let t3 = true;
    const r2 = new window.Image(), l2 = (e3) => () => {
      t3 && n2(e3);
    };
    return n2("loading"), r2.onload = l2("loaded"), r2.onerror = l2("error"), r2.src = e2, a2 && (r2.referrerPolicy = a2), () => {
      t3 = false;
    };
  }, [e2, a2]), t2;
};
var le = () => {
  const { platform: e2 } = ya();
  return e2;
};
var _e = ({ listenChanges: e2 } = {}) => {
  const [a2, t2] = (0, import_react.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), n2 = (e3) => {
    t2(() => e3.matches ? "dark" : "light");
  };
  return (0, import_react.useEffect)(() => {
    const a3 = window.matchMedia("(prefers-color-scheme: dark)");
    return t2(() => a3.matches ? "dark" : "light"), e2 ? (a3.addEventListener("change", n2), () => {
      a3.removeEventListener("change", n2);
    }) : J;
  }, [e2]), a2;
};
var ie = { AvatarText: "AvatarText__DIj", AvatarText_gradient_red: "AvatarText_gradient_red__bnV", AvatarText_gradient_orange: "AvatarText_gradient_orange__Ngq", AvatarText_gradient_green: "AvatarText_gradient_green__n7Z", AvatarText_gradient_blue: "AvatarText_gradient_blue__gLu", AvatarText_gradient_purple: "AvatarText_gradient_purple__UsS", AvatarText__in: "AvatarText__in__cDg" };
var oe = (e2) => e2 < 20 ? { fontSize: 6 } : e2 < 28 ? { fontSize: 8 } : e2 < 32 ? { fontSize: 10 } : e2 < 36 ? { fontSize: 11 } : e2 < 40 ? { fontSize: 13 } : e2 < 48 ? { fontSize: 14 } : e2 < 54 ? { fontSize: 17 } : e2 < 64 ? { fontSize: 18 } : e2 < 72 ? { fontSize: 21 } : e2 < 88 ? { fontSize: 26 } : { fontSize: 30 };
var se = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, children: r2, gradient: l2 = "red", ..._2 } = a2, { size: i2 } = R(), o2 = y(ie.AvatarText, { [ie[`AvatarText_gradient_${l2}`]]: "custom" !== l2 }, n2);
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: o2, ..._2, children: (0, import_jsx_runtime.jsx)("span", { className: ie.AvatarText__in, style: oe(i2), children: r2 }) });
});
se.displayName = "AvatarText";
var ce = "AvatarImage__H7-";
var pe = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, fallback: r2, fallbackGradient: l2 = "red", ..._2 } = a2, [i2, o2] = (0, import_react.useState)("idle"), s2 = re(_2.src ?? _2.srcSet, _2.referrerPolicy), c2 = te((e2) => {
    o2(e2);
  });
  return (0, import_react.useLayoutEffect)(() => {
    "idle" !== s2 && c2(s2);
  }, [s2, c2]), "error" === i2 ? (0, import_jsx_runtime.jsx)(se, { gradient: l2, children: r2 }) : (0, import_jsx_runtime.jsx)("img", { ref: t2, className: y(ce, n2), ..._2 });
});
pe.displayName = "AvatarImage";
var de = { AvatarOnlineDot: "AvatarOnlineDot__-GT", AvatarOnlineDot_size_xs: "AvatarOnlineDot_size_xs__2SY", AvatarOnlineDot__dot: "AvatarOnlineDot__dot__8dL", AvatarOnlineDot_size_s: "AvatarOnlineDot_size_s__T1u", AvatarOnlineDot_size_m: "AvatarOnlineDot_size_m__ris", AvatarOnlineDot_size_l: "AvatarOnlineDot_size_l__zo4" };
var ue = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, ...r2 } = a2, { size: l2 } = R(), _2 = ((e2) => e2 < 40 ? "xs" : e2 < 54 ? "s" : e2 < 72 ? "m" : "l")(l2), i2 = y(de.AvatarOnlineDot, de[`AvatarOnlineDot_size_${_2}`], n2);
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: i2, ...r2, children: (0, import_jsx_runtime.jsx)("span", { className: de.AvatarOnlineDot__dot }) });
});
ue.displayName = "AvatarOnlineDot";
var me = "AvatarOverlay__-nV";
var he = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, onClick: r2, ...l2 } = a2;
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: y(me, n2), onClick: (e2) => {
    e2.preventDefault(), r2 == null ? void 0 : r2(e2);
  }, ...l2 });
});
he.displayName = "AvatarOverlay";
var ye = Object.assign({}, { Container: V, Image: pe, Overlay: he, Icon: ee, Text: se, OnlineDot: ue, CloseButton: W });
var ve = "EllipsisText__vGw";
var ge = "EllipsisText_multiline__1tx";
var Ce = "EllipsisText_singleLine__3CP";
var fe = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, maxLines: r2 = 1, style: l2, asChild: _2, ...i2 } = a2, o2 = _2 ? D : "span", s2 = y(ve, { [ge]: r2 > 1, [Ce]: 1 === r2 }, n2);
  return (0, import_jsx_runtime.jsx)(o2, { ref: t2, className: s2, style: { "--MaxUi-EllipsisText_linesCount": r2, ...l2 }, ...i2 });
});
fe.displayName = "EllipsisText";
var Be = "Ripple__R4t";
var Ne = "Ripple_active__Rit";
var be = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, ...r2 } = a2, l2 = (0, import_react.useRef)(null), _2 = (0, import_react.useRef)(null), i2 = (e2) => {
    const a3 = e2.currentTarget.getBoundingClientRect();
    ((e3, a4) => {
      null !== _2.current && (_2.current.classList.remove(Ne), _2.current.style.top = a4 + "px", _2.current.style.left = e3 + "px", _2.current.classList.add(Ne));
    })(e2.clientX - (a3.left ?? 0), e2.clientY - (a3.top ?? 0));
  };
  return (0, import_react.useEffect)(() => {
    if (_2.current)
      return l2.current = _2.current.parentElement, null !== l2.current && l2.current.addEventListener("pointerdown", i2), () => {
        var _a2;
        null !== l2.current && ((_a2 = l2.current) == null ? void 0 : _a2.removeEventListener("pointerdown", i2));
      };
  }, []), (0, import_jsx_runtime.jsx)("span", { ref: Z(t2, _2), role: "presentation", "aria-hidden": true, className: y(Be, n2), onAnimationEnd: () => {
    null !== _2.current && _2.current.classList.remove(Ne);
  }, ...r2 });
});
be.displayName = "Ripple";
var Ie = { Spinner: "Spinner__piy", rotation: "rotation__CUP", Spinner_appearance_primary: "Spinner_appearance_primary__mxz", Spinner_appearance_themed: "Spinner_appearance_themed__-9S", "Spinner_appearance_primary-static": "Spinner_appearance_primary-static__JxW", Spinner_appearance_contrast: "Spinner_appearance_contrast__Mv6", "Spinner_appearance_contrast-static": "Spinner_appearance_contrast-static__rM7", Spinner_appearance_negative: "Spinner_appearance_negative__eMf", "Spinner_appearance_neutral-themed": "Spinner_appearance_neutral-themed__D8F", Spinner__spinner: "Spinner__spinner__Qdc" };
var Te = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, size: l2 = 20, appearance: _2 = "primary", ...i2 } = a2, o2 = y(Ie.Spinner, Ie[`Spinner_appearance_${_2}`], r2);
  return (0, import_jsx_runtime.jsx)("span", { ref: n2, role: "status", className: o2, ...i2, children: (0, import_jsx_runtime.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: l2, height: l2, viewBox: "0 0 20 20", fill: "none", children: [(0, import_jsx_runtime.jsx)("g", { clipPath: "url(#spinner)", children: (0, import_jsx_runtime.jsx)("g", { transform: "matrix(8.74228e-10 -0.01 0.01 8.74228e-10 10 10)", children: (0, import_jsx_runtime.jsx)("foreignObject", { x: "-1120", y: "-1120", width: "2240", height: "2240", children: (0, import_jsx_runtime.jsx)("div", { className: Ie.Spinner__spinner }) }) }) }), (0, import_jsx_runtime.jsx)("defs", { children: (0, import_jsx_runtime.jsx)("clipPath", { id: "spinner", children: (0, import_jsx_runtime.jsx)("path", { d: "M8.74228e-07 10C1.35705e-06 4.47715 4.47715 -1.35705e-06 10 -8.74228e-07C15.5228 -3.91405e-07 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 3.91405e-07 15.5228 8.74228e-07 10ZM18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10Z" }) }) })] }) });
});
Te.displayName = "Spinner";
var Se = { Button: "Button__0OJ", Button_loading: "Button_loading__LD-", Button__iconBefore: "Button__iconBefore__BUe", Button__content: "Button__content__vnq", Button__indicator: "Button__indicator__HuA", Button__iconAfter: "Button__iconAfter__VhZ", Button_disabled: "Button_disabled__jkY", Button_stretched: "Button_stretched__mzq", Button_activeMode_ripple: "Button_activeMode_ripple__E5Y", Button_activeMode_highlight: "Button_activeMode_highlight__K3j", Button_size_small: "Button_size_small__LLG", Button_mode_primary: "Button_mode_primary__lfx", Button_mode_secondary: "Button_mode_secondary__u7i", Button_mode_tertiary: "Button_mode_tertiary__1G9", Button_size_medium: "Button_size_medium__fI9", Button_size_large: "Button_size_large__S2-", Button_mode_link: "Button_mode_link__a3e", Button_appearance_themed: "Button_appearance_themed__z2B", Button_appearance_negative: "Button_appearance_negative__-Iy", Button_appearance_neutral: "Button_appearance_neutral__SAu", "Button_appearance_neutral-themed": "Button_appearance_neutral-themed__H03", "Button_appearance_contrast-static": "Button_appearance_contrast-static__DgE", Button__spinnerContainer: "Button__spinnerContainer__G4I", Button__ripple: "Button__ripple__jw0" };
var Ae = { Counter: "Counter__0Oj", Counter_appearance_themed: "Counter_appearance_themed__anX", Counter_mode_filled: "Counter_mode_filled__9Uy", Counter_disabled: "Counter_disabled__Nhg", Counter_muted: "Counter_muted__3IJ", Counter_mode_inverse: "Counter_mode_inverse__IIJ", Counter_appearance_neutral: "Counter_appearance_neutral__SN9", "Counter_appearance_neutral-themed": "Counter_appearance_neutral-themed__yq8", "Counter_appearance_neutral-static": "Counter_appearance_neutral-static__UeR", Counter_appearance_negative: "Counter_appearance_negative__JZg" };
var xe = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, value: r2, rounded: l2, appearance: _2 = "themed", mode: i2 = "filled", disabled: o2 = false, muted: s2 = false, ...c2 } = a2, p2 = y(Ae.Counter, Ae[`Counter_appearance_${_2}`], Ae[`Counter_mode_${i2}`], { [Ae.Counter_disabled]: o2, [Ae.Counter_muted]: s2 }, n2), u2 = (0, import_react.useMemo)(() => l2 ? Intl.NumberFormat("en", { notation: "compact" }).format(r2) : r2, [l2, r2]);
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: p2, ...c2, role: "", children: u2 });
});
xe.displayName = "Counter";
var we = (e2, a2) => {
  if ("primary" === a2)
    switch (e2) {
      case "themed":
      case "negative":
      case "neutral-themed":
        return "contrast-static";
      case "contrast-static":
        return "primary-static";
      case "neutral":
        return "contrast";
    }
  switch (e2) {
    case "themed":
      return "themed";
    case "negative":
      return "negative";
    case "neutral":
      return "primary";
    case "neutral-themed":
      return "neutral-themed";
    case "contrast-static":
      return "contrast-static";
  }
};
var Le = (e2, a2) => "negative" === e2 ? { mode: "primary" === a2 ? "inverse" : "filled", appearance: "negative" } : "neutral" === e2 ? { mode: "primary" === a2 ? "inverse" : "filled", appearance: "neutral" } : "neutral-themed" === e2 ? { mode: "primary" === a2 ? "inverse" : "filled", appearance: "neutral-themed" } : "contrast-static" === e2 ? { mode: "primary" === a2 ? "filled" : "inverse", appearance: "neutral-static" } : { mode: "primary" === a2 ? "inverse" : "filled", appearance: "themed" };
var Me = (e2, a2, t2, n2) => (0, import_react.isValidElement)(e2) && e2.type === xe ? (0, import_react.cloneElement)(e2, { ...Le(a2, t2), disabled: n2 }) : e2;
var ze = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, iconBefore: l2, iconAfter: _2, indicator: i2, children: o2, onClick: s2, loading: c2, disabled: p2 = false, asChild: d2 = false, innerClassNames: u2, stretched: m2 = false, size: h2 = "medium", mode: v2 = "primary", appearance: g2 = "themed", ...C2 } = a2, f2 = "button", B2 = d2 ? D : f2, N2 = le(), b2 = ae({ asChild: d2, children: o2, disabled: p2, rootElement: f2, loading: c2 }), I2 = p2 || c2, T2 = "android" === N2 && "link" !== v2, S2 = y(Se.Button, Se[`Button_appearance_${g2}`], Se[`Button_mode_${v2}`], Se[`Button_size_${h2}`], { [Se.Button_loading]: c2, [Se.Button_disabled]: p2, [Se.Button_stretched]: m2, [Se.Button_activeMode_highlight]: !I2 && !T2, [Se.Button_activeMode_ripple]: !I2 && T2 }, r2);
  return (0, import_jsx_runtime.jsxs)(B2, { ref: n2, className: S2, onClick: (e2) => {
    c2 || (s2 == null ? void 0 : s2(e2));
  }, ...b2, ...C2, children: [F(l2) && (0, import_jsx_runtime.jsx)("span", { className: y(Se.Button__iconBefore, u2 == null ? void 0 : u2.iconBefore), children: l2 }), c2 && (0, import_jsx_runtime.jsx)("span", { className: y(Se.Button__spinnerContainer, u2 == null ? void 0 : u2.spinnerContainer), children: (0, import_jsx_runtime.jsx)(Te, { className: y(u2 == null ? void 0 : u2.spinner), size: (A2 = h2, "small" === A2 ? 20 : 24), appearance: we(g2, v2) }) }), (0, import_jsx_runtime.jsx)(H, { children: X({ asChild: d2, children: o2 }, (a3) => (0, import_jsx_runtime.jsx)(fe, { className: y(Se.Button__content, u2 == null ? void 0 : u2.content), children: a3 }, "subtree-container")) }), F(i2) && (0, import_jsx_runtime.jsx)("span", { className: y(Se.Button__indicator, u2 == null ? void 0 : u2.indicator), children: Me(i2, g2, v2, p2) }), F(_2) && (0, import_jsx_runtime.jsx)("span", { className: y(Se.Button__iconAfter, u2 == null ? void 0 : u2.iconAfter), children: _2 }), T2 && !I2 && (0, import_jsx_runtime.jsx)(be, { className: Se.Button__ripple })] });
  var A2;
});
ze.displayName = "Button";
var De = "Tappable__TDG";
var Ee = "Tappable_interactive__fYU";
var Oe = "Tappable_disabled__DQf";
var ke = "Tappable_activeMode_ripple__YMg";
var He = "Tappable_activeMode_highlight__W7X";
var je = "Tappable__ripple__XiX";
var $e = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, disabled: l2, asChild: _2, children: i2, parentChildren: o2, as: c2 = "div", ...p2 } = a2, d2 = _2 ? D : c2, u2 = le(), m2 = ae({ asChild: _2, children: i2, disabled: l2, rootElement: c2 }), h2 = (({ onClick: e2, href: a3, children: t2, asChild: n3, parentChildren: r3 = t2 }) => n3 ? !(!n3 || !(0, import_react.isValidElement)(r3)) && ("href" in r3.props || "onClick" in r3.props) : !!e2 || !!a3)(a2), v2 = "android" === u2 && h2 && !l2, g2 = y(De, { [Ee]: h2, [Oe]: l2, [He]: !v2, [ke]: v2 }, r2);
  return (0, import_jsx_runtime.jsxs)(d2, { ref: n2, className: g2, ...h2 ? m2 : {}, ...p2, children: [i2, v2 && (0, import_jsx_runtime.jsx)(be, { className: je })] });
});
$e.displayName = "Tappable";
var Ue = { CellAction: "CellAction__vzN", CellAction_mode_primary: "CellAction_mode_primary__vZQ", CellAction_disabled: "CellAction_disabled__VZA", CellAction_mode_destructive: "CellAction_mode_destructive__ovY", CellAction_mode_custom: "CellAction_mode_custom__3T8", CellAction_height_compact: "CellAction_height_compact__ysc", CellAction_height_normal: "CellAction_height_normal__ELj", CellAction__before: "CellAction__before__oZm", CellAction__content: "CellAction__content__Uib", CellAction__chevron: "CellAction__chevron__6SI" };
var Pe = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, before: l2, children: _2, innerClassNames: i2, asChild: o2 = false, mode: s2 = "primary", height: c2 = "normal", showChevron: p2 = false, ...d2 } = a2, u2 = y(Ue.CellAction, Ue[`CellAction_mode_${s2}`], Ue[`CellAction_height_${c2}`], { [Ue.CellAction_disabled]: d2.disabled }, r2);
  return (0, import_jsx_runtime.jsxs)($e, { ref: n2, className: u2, asChild: o2, as: "button", parentChildren: _2, ...d2, children: [F(l2) && (0, import_jsx_runtime.jsx)("span", { className: y(Ue.CellAction__before, i2 == null ? void 0 : i2.before), children: l2 }), (0, import_jsx_runtime.jsx)(H, { children: X({ asChild: o2, children: _2 }, (a3) => (0, import_jsx_runtime.jsx)("span", { className: y(Ue.CellAction__content, i2 == null ? void 0 : i2.content), children: a3 }, "subtree-container")) }), p2 && (0, import_jsx_runtime.jsx)(f, { className: y(Ue.CellAction__chevron, i2 == null ? void 0 : i2.chevron) })] });
});
Pe.displayName = "CellAction";
var Re = { CellHeader: "CellHeader__Epf", CellHeader_titleStyle_caps: "CellHeader_titleStyle_caps__nfB", CellHeader__content: "CellHeader__content__El-", CellHeader_titleStyle_normal: "CellHeader_titleStyle_normal__M-p", CellHeader_fullWidth: "CellHeader_fullWidth__h2Y", CellHeader__after: "CellHeader__after__RXN" };
var Ge = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, titleStyle: l2 = "caps", fullWidth: _2 = false, children: i2, after: o2, innerClassNames: s2, ...c2 } = a2, p2 = y(Re.CellHeader, Re[`CellHeader_titleStyle_${l2}`], { [Re.CellHeader_fullWidth]: _2 }, r2);
  return (0, import_jsx_runtime.jsxs)("div", { ref: n2, className: p2, ...c2, children: [F(i2) && (0, import_jsx_runtime.jsx)("div", { className: y(Re.CellHeader__content, s2 == null ? void 0 : s2.content), children: i2 }), F(o2) && (0, import_jsx_runtime.jsx)("div", { className: y(Re.CellHeader__after, s2 == null ? void 0 : s2.after), children: o2 })] });
});
Ge.displayName = "CellHeader";
var We = "ClearableInput__FRL";
var Ye = "ClearableInput__button__GlG";
var Xe = { ios: (0, import_jsx_runtime.jsx)(function(e2) {
  return n.createElement("svg", B({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, e2), C || (C = n.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M5.566 4.434a.8.8 0 1 0-1.132 1.132L6.87 8l-2.435 2.434a.8.8 0 0 0 1.132 1.132L8 9.13l2.434 2.435a.8.8 0 0 0 1.132-1.132L9.13 8l2.435-2.434a.8.8 0 0 0-1.132-1.132L8 6.87z", clipRule: "evenodd" })));
}, {}), android: (0, import_jsx_runtime.jsx)(function(e2) {
  return n.createElement("svg", S({ xmlns: "http://www.w3.org/2000/svg", width: 20, height: 20, fill: "none" }, e2), I || (I = n.createElement("path", { fill: "currentColor", fillRule: "evenodd", d: "M4.364 4.364a.9.9 0 0 1 1.272 0L10 8.727l4.364-4.363a.9.9 0 0 1 1.272 1.272L11.273 10l4.363 4.364a.9.9 0 0 1-1.272 1.272L10 11.273l-4.364 4.363a.9.9 0 0 1-1.272-1.272L8.727 10 4.364 5.636a.9.9 0 0 1 0-1.272", clipRule: "evenodd" })));
}, {}) };
var Fe = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, onChange: l2, innerClassNames: _2, withClearButton: i2 = true, disabled: o2, ...s2 } = a2, p2 = (0, import_react.useRef)(null), [d2, m2] = (0, import_react.useState)(!s2.value && !s2.defaultValue), h2 = le();
  return (0, import_jsx_runtime.jsxs)("span", { className: y(We, r2), children: [(0, import_jsx_runtime.jsx)("input", { ref: Z(p2, n2), className: y(_2 == null ? void 0 : _2.input), onChange: (e2) => {
    l2 == null ? void 0 : l2(e2), m2(!e2.target.value);
  }, disabled: o2, ...s2 }), !d2 && !o2 && i2 && (0, import_jsx_runtime.jsx)(U, { className: y(Ye, _2 == null ? void 0 : _2.clearButton), onClick: () => {
    p2.current && ((e2, a3 = "") => {
      var _a2;
      const t2 = (_a2 = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) == null ? void 0 : _a2.set;
      t2 == null ? void 0 : t2.call(e2, a3);
      const n3 = new Event("input", { bubbles: true });
      e2.dispatchEvent(n3);
    })(p2.current);
  }, "aria-label": "Очистить", children: Xe[h2] })] });
});
Fe.displayName = "ClearableInput";
var qe = { CellInput: "CellInput__92-", CellInput_disabled: "CellInput_disabled__fZ7", CellInput__input: "CellInput__input__gQ3", CellInput_height_compact: "CellInput_height_compact__Mv2", CellInput_height_normal: "CellInput_height_normal__ovc", CellInput__before: "CellInput__before__Hkm", CellInput__body: "CellInput__body__Egp", CellInput__clearButton: "CellInput__clearButton__znK" };
var Ze = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, height: l2 = "normal", before: _2, innerClassNames: i2, disabled: o2, ...s2 } = a2, c2 = y(qe.CellInput, qe[`CellInput_height_${l2}`], { [qe.CellInput_disabled]: o2 }, r2);
  return (0, import_jsx_runtime.jsxs)("label", { className: c2, children: [F(_2) && (0, import_jsx_runtime.jsx)(fe, { className: y(qe.CellInput__before, i2 == null ? void 0 : i2.before), maxLines: 1, children: _2 }), (0, import_jsx_runtime.jsx)(Fe, { ref: n2, className: y(qe.CellInput__body, i2 == null ? void 0 : i2.body), innerClassNames: { input: y(qe.CellInput__input, i2 == null ? void 0 : i2.input), clearButton: y(qe.CellInput__clearButton, i2 == null ? void 0 : i2.clearButton) }, type: "text", disabled: o2, ...s2 })] });
});
Ze.displayName = "CellInput";
var Je = { CellList: "CellList__1ou", CellList_filled: "CellList_filled__ikE", CellList__body: "CellList__body__ouS", CellList_mode_island: "CellList_mode_island__aCu" };
var Qe = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, header: l2, children: _2, mode: i2 = "full-width", filled: o2 = "island" === i2, ...s2 } = a2, c2 = y(Je.CellList, Je[`CellList_mode_${i2}`], { [Je.CellList_filled]: o2 }, r2);
  return (0, import_jsx_runtime.jsxs)("div", { ref: n2, className: c2, ...s2, children: [F(l2) && (0, import_jsx_runtime.jsx)("div", { className: Je.CellList__header, children: l2 }), (0, import_jsx_runtime.jsx)("div", { className: Je.CellList__body, children: _2 })] });
});
Qe.displayName = "CellList";
var Ve = { CellSimple: "CellSimple__n0z", CellSimple_disabled: "CellSimple_disabled__T-3", CellSimple__subtitle: "CellSimple__subtitle__oIF", CellSimple__overline: "CellSimple__overline__Ncr", CellSimple_height_compact: "CellSimple_height_compact__HUQ", CellSimple_height_normal: "CellSimple_height_normal__pxj", CellSimple__before: "CellSimple__before__5Q9", CellSimple__after: "CellSimple__after__2FK", CellSimple__content: "CellSimple__content__SOk", CellSimple__title: "CellSimple__title__aYs", CellSimple__chevron: "CellSimple__chevron__cSs" };
var Ke = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, title: l2, subtitle: _2, before: i2, after: o2, children: s2, overline: c2, showChevron: p2 = false, asChild: d2 = false, disabled: u2 = false, innerClassNames: m2, height: h2 = "normal", as: v2 = "div", ...g2 } = a2, C2 = y(Ve.CellSimple, Ve[`CellSimple_height_${h2}`], { [Ve.CellSimple_disabled]: u2 }, r2);
  return (0, import_jsx_runtime.jsxs)($e, { ref: n2, className: C2, asChild: d2, as: v2, parentChildren: s2, ...g2, children: [F(i2) && (0, import_jsx_runtime.jsx)("div", { className: y(Ve.CellSimple__before, m2 == null ? void 0 : m2.before), children: i2 }), (0, import_jsx_runtime.jsx)(H, { children: X({ asChild: d2, children: s2 }, (a3) => (0, import_jsx_runtime.jsxs)("div", { className: y(Ve.CellSimple__content, m2 == null ? void 0 : m2.content), children: [F(c2) && (0, import_jsx_runtime.jsx)("div", { className: y(Ve.CellSimple__overline, m2 == null ? void 0 : m2.overline), children: c2 }), F(l2) && (0, import_jsx_runtime.jsx)("div", { className: y(Ve.CellSimple__title, m2 == null ? void 0 : m2.title), children: l2 }), F(_2) && (0, import_jsx_runtime.jsx)("div", { className: y(Ve.CellSimple__subtitle, m2 == null ? void 0 : m2.subtitle), children: _2 }), a3] }, "subtree-container")) }), (F(o2) || p2) && (0, import_jsx_runtime.jsxs)("div", { className: y(Ve.CellSimple__after, m2 == null ? void 0 : m2.after), children: [o2, p2 && (0, import_jsx_runtime.jsx)(f, { className: y(Ve.CellSimple__chevron, m2 == null ? void 0 : m2.chevron) })] })] });
});
Ke.displayName = "CellSimple";
var ea = "Container__MSr";
var aa = "Container_fullWidth__Dor";
var ta = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, asChild: r2, fullWidth: l2, ..._2 } = a2, i2 = r2 ? D : "div", o2 = y(ea, { [aa]: l2 }, n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
ta.displayName = "Container";
var na = { Dot: "Dot__dio", Dot_appearance_themed: "Dot_appearance_themed__AJa", "Dot_appearance_contrast-pinned": "Dot_appearance_contrast-pinned__i8T", "Dot_appearance_neutral-fade": "Dot_appearance_neutral-fade__paA", "Dot_appearance_accent-red": "Dot_appearance_accent-red__GZs", Dot_appearance_inherit: "Dot_appearance_inherit__xh2" };
var ra = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, appearance: r2 = "inherit", ...l2 } = a2, _2 = y(na.Dot, na[`Dot_appearance_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)("span", { ref: t2, className: _2, ...l2 });
});
ra.displayName = "Dot";
var la = "Flex__8ia";
var _a = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, display: r2 = "flex", direction: l2 = "row", align: _2 = "flex-start", justify: i2 = "start", asChild: o2, wrap: s2, style: c2, gap: p2, gapX: d2, gapY: u2, ...m2 } = a2;
  return (0, import_jsx_runtime.jsx)(o2 ? D : "div", { ref: t2, className: y(la, n2), style: { flexDirection: l2, justifyContent: i2, alignItems: _2, flexWrap: s2, ...c2, display: r2, "--MaxUi-Flex_gapX": Y(d2 ?? p2 ?? 0), "--MaxUi-Flex_gapY": Y(u2 ?? p2 ?? 0) }, ...m2 });
});
_a.displayName = "Flex";
var ia = "Grid__tMN";
var oa = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, style: r2, display: l2 = "grid", align: _2 = "start", justify: i2 = "start", gap: o2, gapX: s2, gapY: c2, cols: p2, rows: d2, asChild: u2, ...m2 } = a2;
  return (0, import_jsx_runtime.jsx)(u2 ? D : "div", { ref: t2, className: y(ia, n2), style: { justifyContent: i2, alignItems: _2, ...r2, display: l2, "--MaxUi-Grid_gapX": Y(s2 ?? o2 ?? 0), "--MaxUi-Grid_gapY": Y(c2 ?? o2 ?? 0), "--MaxUi-Grid_cols": p2 ?? 0, "--MaxUi-Grid_rows": d2 ?? 0 }, ...m2 });
});
oa.displayName = "Grid";
var sa = (e2, a2) => {
  if ("primary" === a2)
    switch (e2) {
      case "themed":
      case "negative":
      case "neutral-themed":
        return "contrast-static";
      case "neutral":
        return "contrast";
      case "contrast-static":
        return "primary-static";
    }
  switch (e2) {
    case "themed":
      return "themed";
    case "negative":
      return "negative";
    case "neutral":
      return "primary";
    case "neutral-themed":
      return "neutral-themed";
    case "contrast-static":
      return "contrast-static";
  }
};
var ca = { IconButton: "IconButton__KCr", IconButton_loading: "IconButton_loading__RxW", IconButton__content: "IconButton__content__dCL", IconButton_disabled: "IconButton_disabled__SZj", IconButton_activeMode_ripple: "IconButton_activeMode_ripple__asi", IconButton_activeMode_highlight: "IconButton_activeMode_highlight__h15", IconButton_mode_primary: "IconButton_mode_primary__FqT", IconButton_size_small: "IconButton_size_small__e3f", IconButton_mode_secondary: "IconButton_mode_secondary__d4Q", IconButton_mode_tertiary: "IconButton_mode_tertiary__s90", IconButton_size_medium: "IconButton_size_medium__MQQ", IconButton_size_large: "IconButton_size_large__9oz", IconButton_appearance_themed: "IconButton_appearance_themed__jUC", IconButton_mode_link: "IconButton_mode_link__kNB", IconButton_appearance_negative: "IconButton_appearance_negative__qI2", IconButton_appearance_neutral: "IconButton_appearance_neutral__8iK", "IconButton_appearance_neutral-themed": "IconButton_appearance_neutral-themed__xJM", "IconButton_appearance_contrast-static": "IconButton_appearance_contrast-static__Fp4", IconButton__spinnerContainer: "IconButton__spinnerContainer__9--", IconButton__ripple: "IconButton__ripple__l8M" };
var pa = (0, import_react.forwardRef)((a2, n2) => {
  const { children: r2, className: l2, disabled: _2, innerClassNames: i2, loading: o2, asChild: s2 = false, size: c2 = "medium", mode: p2 = "primary", appearance: d2 = "themed", ...u2 } = a2, m2 = "button", h2 = s2 ? D : m2, v2 = le(), g2 = ae({ asChild: s2, children: r2, disabled: _2, rootElement: m2, loading: o2 }), C2 = _2 || o2, f2 = "android" === v2 && "link" !== p2, B2 = y(ca.IconButton, ca[`IconButton_appearance_${d2}`], ca[`IconButton_mode_${p2}`], ca[`IconButton_size_${c2}`], { [ca.IconButton_loading]: o2, [ca.IconButton_disabled]: _2, [ca.IconButton_activeMode_highlight]: !C2 && !f2, [ca.IconButton_activeMode_ripple]: !C2 && f2 }, l2);
  return (0, import_jsx_runtime.jsxs)(h2, { ref: n2, className: B2, ...g2, ...u2, children: [o2 && (0, import_jsx_runtime.jsx)("span", { className: y(ca.IconButton__spinnerContainer, i2 == null ? void 0 : i2.spinnerContainer), children: (0, import_jsx_runtime.jsx)(Te, { className: y(i2 == null ? void 0 : i2.spinner), size: (N2 = c2, "small" === N2 ? 20 : 24), appearance: sa(d2, p2) }) }), (0, import_jsx_runtime.jsx)(H, { children: X({ asChild: s2, children: r2 }, (a3) => (0, import_jsx_runtime.jsx)("span", { className: y(ca.IconButton__content, i2 == null ? void 0 : i2.content), children: a3 }, "subtree-container")) }), f2 && !C2 && (0, import_jsx_runtime.jsx)(be, { className: ca.IconButton__ripple })] });
  var N2;
});
pa.displayName = "IconButton";
var da = { Input: "Input__A3w", Input_disabled: "Input_disabled__mpt", Input_compact: "Input_compact__gBl", Input_mode_primary: "Input_mode_primary__2Mr", Input_mode_secondary: "Input_mode_secondary__c6D", Input__body: "Input__body__sVJ", Input__iconBefore: "Input__iconBefore__gxx", Input__iconAfter: "Input__iconAfter__jL1", Input__clearButton: "Input__clearButton__nKe", Input__input: "Input__input__gy5" };
var ua = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, iconBefore: l2, iconAfter: _2, innerClassNames: i2, withClearButton: o2, compact: s2 = false, mode: c2 = "primary", ...p2 } = a2, d2 = y(da.Input, da[`Input_mode_${c2}`], { [da.Input_compact]: s2, [da.Input_disabled]: p2.disabled }, r2);
  return (0, import_jsx_runtime.jsxs)("label", { className: d2, children: [F(l2) && (0, import_jsx_runtime.jsx)("div", { className: y(da.Input__iconBefore, i2 == null ? void 0 : i2.iconBefore), children: l2 }), (0, import_jsx_runtime.jsx)(Fe, { ref: n2, className: y(da.Input__body, i2 == null ? void 0 : i2.body), withClearButton: o2, innerClassNames: { input: y(da.Input__input, i2 == null ? void 0 : i2.input), clearButton: y(da.Input__clearButton, i2 == null ? void 0 : i2.clearButton) }, ...p2 }), F(_2) && (0, import_jsx_runtime.jsx)("div", { className: y(da.Input__iconAfter, i2 == null ? void 0 : i2.iconAfter), children: _2 })] });
});
ua.displayName = "Input";
var ma = { MaxUI: "MaxUI__g7Q", MaxUI_platform_ios: "MaxUI_platform_ios__gAV", MaxUI_platform_android: "MaxUI_platform_android__m3U", MaxUI_colorScheme_light: "MaxUI_colorScheme_light__Woo", MaxUI_colorScheme_dark: "MaxUI_colorScheme_dark__jFq" };
var ha = (0, import_react.createContext)({ platform: "ios", colorScheme: "light" });
var ya = () => (0, import_react.useContext)(ha);
var va = (0, import_react.forwardRef)((a2, t2) => {
  const { children: n2, className: r2, colorScheme: l2, platform: _2 = q() ? "ios" : "android" } = a2, i2 = _e({ listenChanges: !l2 }), o2 = l2 ?? i2, s2 = (0, import_react.useMemo)(() => ({ colorScheme: o2, platform: _2 }), []), c2 = y(ma.MaxUI, ma[`MaxUI_colorScheme_${o2}`], ma[`MaxUI_platform_${_2}`], r2);
  return (0, import_jsx_runtime.jsx)(ha.Provider, { value: s2, children: (0, import_jsx_runtime.jsx)("div", { ref: t2, className: c2, children: n2 }) });
});
va.displayName = "MaxUI";
var ga = { Panel: "Panel__kpB", Panel_centeredX: "Panel_centeredX__jxE", Panel_centeredY: "Panel_centeredY__fp1", Panel_mode_primary: "Panel_mode_primary__hES", Panel_mode_secondary: "Panel_mode_secondary__yer" };
var Ca = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, mode: r2 = "primary", centeredX: l2, centeredY: _2, ...i2 } = a2, o2 = y(ga.Panel, ga[`Panel_mode_${r2}`], { [ga.Panel_centeredX]: l2, [ga.Panel_centeredY]: _2 }, n2);
  return (0, import_jsx_runtime.jsx)("div", { ref: t2, className: o2, ...i2 });
});
Ca.displayName = "Panel";
var fa = { SearchInput: "SearchInput__cI6", SearchInput__body: "SearchInput__body__WUT", SearchInput__icon: "SearchInput__icon__dsa", SearchInput__clearButton: "SearchInput__clearButton__qsm", SearchInput__input: "SearchInput__input__xoX", SearchInput_platform_ios: "SearchInput_platform_ios__Sn7", SearchInput_platform_android: "SearchInput_platform_android__QG9" };
var Ba = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, placeholder: l2 = "Поиск", innerClassNames: _2, ...i2 } = a2, o2 = le(), s2 = y(fa.SearchInput, fa[`SearchInput_platform_${o2}`], r2);
  return (0, import_jsx_runtime.jsxs)("label", { className: s2, children: [(0, import_jsx_runtime.jsx)(T, { className: fa.SearchInput__icon }), (0, import_jsx_runtime.jsx)(Fe, { ref: n2, className: y(fa.SearchInput__body, _2 == null ? void 0 : _2.body), innerClassNames: { input: y(fa.SearchInput__input, _2 == null ? void 0 : _2.input), clearButton: y(fa.SearchInput__clearButton, _2 == null ? void 0 : _2.clearButton) }, type: "text", placeholder: l2, ...i2 })] });
});
Ba.displayName = "SearchInput";
var Na = { Switch: "Switch__-vj", Switch__toggle: "Switch__toggle__WU2", Switch__thumb: "Switch__thumb__jlX", Switch__input: "Switch__input__EDr", Switch_platform_ios: "Switch_platform_ios__B-C", Switch_platform_android: "Switch_platform_android__72T" };
var ba = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, ...l2 } = a2, _2 = le(), i2 = y(Na.Switch, Na[`Switch_platform_${_2}`], r2);
  return (0, import_jsx_runtime.jsxs)("span", { className: i2, children: [(0, import_jsx_runtime.jsx)("input", { ref: n2, type: "checkbox", role: "switch", className: Na.Switch__input, ...l2 }), (0, import_jsx_runtime.jsx)("span", { className: Na.Switch__toggle, children: (0, import_jsx_runtime.jsx)("span", { className: Na.Switch__thumb }) })] });
});
ba.displayName = "Switch";
var Ia = { Textarea: "Textarea__Sy6", Textarea_disabled: "Textarea_disabled__uY3", Textarea_mode_primary: "Textarea_mode_primary__E7l", Textarea_mode_secondary: "Textarea_mode_secondary__BYw", Textarea__textarea: "Textarea__textarea__Ok-" };
var Ta = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, innerClassNames: r2, mode: l2 = "primary", ..._2 } = a2, i2 = y(Ia.Textarea, Ia[`Textarea_mode_${l2}`], { [Ia.Textarea_disabled]: _2.disabled }, n2);
  return (0, import_jsx_runtime.jsx)("div", { className: i2, children: (0, import_jsx_runtime.jsx)("textarea", { ref: t2, className: y(Ia.Textarea__textarea, r2 == null ? void 0 : r2.textarea), ..._2 }) });
});
Ta.displayName = "Textarea";
var Sa = { ToolButton: "ToolButton__lde", ToolButton_appearance_default: "ToolButton_appearance_default__gqg", ToolButton_disabled: "ToolButton_disabled__gq5", ToolButton_appearance_secondary: "ToolButton_appearance_secondary__ghs", ToolButton_withLabel: "ToolButton_withLabel__FsL", ToolButton__icon: "ToolButton__icon__ds5", ToolButton__label: "ToolButton__label__GCi" };
var Aa = (0, import_react.forwardRef)((a2, n2) => {
  const { className: r2, icon: l2, children: _2, asChild: i2, innerClassNames: o2, appearance: s2 = "default", disabled: c2 = false, ...p2 } = a2, d2 = y(Sa.ToolButton, Sa[`ToolButton_appearance_${s2}`], { [Sa.ToolButton_withLabel]: F(_2), [Sa.ToolButton_disabled]: c2 }, r2);
  return (0, import_jsx_runtime.jsxs)($e, { ref: n2, className: d2, as: "button", parentChildren: _2, asChild: i2, disabled: c2, ...p2, children: [F(l2) && (0, import_jsx_runtime.jsx)("span", { className: y(Sa.ToolButton__icon, o2 == null ? void 0 : o2.icon), children: l2 }), F(_2) && (0, import_jsx_runtime.jsx)(H, { children: X({ asChild: i2, children: _2 }, (a3) => (0, import_jsx_runtime.jsx)(fe, { maxLines: 1, className: y(Sa.ToolButton__label, o2 == null ? void 0 : o2.label), children: a3 }, "subtree-container")) })] });
});
Aa.displayName = "ToolButton";
var xa = { TypographyAction_variant_large: "TypographyAction_variant_large__l5j", TypographyAction_variant_medium: "TypographyAction_variant_medium__9H-", TypographyAction_variant_small: "TypographyAction_variant_small__-LL", TypographyAction_variant_label: "TypographyAction_variant_label__vhv" };
var wa = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, variant: r2 = "large", asChild: l2, ..._2 } = a2, i2 = l2 ? D : "span", o2 = y(xa.TypographyAction, xa[`TypographyAction_variant_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
wa.displayName = "TypographyAction";
var La = { TypographyBody_variant_large: "TypographyBody_variant_large__vlS", TypographyBody_variant_medium: "TypographyBody_variant_medium__9v3", TypographyBody_variant_small: "TypographyBody_variant_small__beJ", "TypographyBody_variant_small-strong": "TypographyBody_variant_small-strong__mWy", "TypographyBody_variant_small-caps": "TypographyBody_variant_small-caps__18r" };
var Ma = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, variant: r2 = "large-strong", asChild: l2, ..._2 } = a2, i2 = l2 ? D : "span", o2 = y(La.TypographyBody, La[`TypographyBody_variant_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
Ma.displayName = "TypographyBody";
var za = "TypographyDisplay__6MW";
var Da = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, asChild: r2, ...l2 } = a2;
  return (0, import_jsx_runtime.jsx)(r2 ? D : "span", { ref: t2, className: y(za, n2), ...l2 });
});
Da.displayName = "TypographyDisplay";
var Ea = { "TypographyHeadline_variant_large-strong": "TypographyHeadline_variant_large-strong__mwz", TypographyHeadline_variant_medium: "TypographyHeadline_variant_medium__s92", "TypographyHeadline_variant_medium-strong": "TypographyHeadline_variant_medium-strong__dFT", TypographyHeadline_variant_small: "TypographyHeadline_variant_small__8Ei", "TypographyHeadline_variant_small-strong": "TypographyHeadline_variant_small-strong__kUR" };
var Oa = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, variant: r2 = "large-strong", asChild: l2, ..._2 } = a2, i2 = l2 ? D : "span", o2 = y(Ea.TypographyHeadline, Ea[`TypographyHeadline_variant_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
Oa.displayName = "TypographyHeadline";
var ka = { TypographyLabel_variant_large: "TypographyLabel_variant_large__6vr", "TypographyLabel_variant_large-strong": "TypographyLabel_variant_large-strong__uCg", "TypographyLabel_variant_large-caps": "TypographyLabel_variant_large-caps__b1i", TypographyLabel_variant_medium: "TypographyLabel_variant_medium__Xo5", "TypographyLabel_variant_medium-strong": "TypographyLabel_variant_medium-strong__Bk8", "TypographyLabel_variant_small-strong": "TypographyLabel_variant_small-strong__qCw", "TypographyLabel_variant_small-caps": "TypographyLabel_variant_small-caps__beb" };
var Ha = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, variant: r2 = "large", asChild: l2, ..._2 } = a2, i2 = l2 ? D : "span", o2 = y(ka.TypographyLabel, ka[`TypographyLabel_variant_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
Ha.displayName = "TypographyLabel";
var ja = { "TypographyTitle_variant_large-strong": "TypographyTitle_variant_large-strong__9PL", "TypographyTitle_variant_medium-strong": "TypographyTitle_variant_medium-strong__th0", TypographyTitle_variant_small: "TypographyTitle_variant_small__zJR", "TypographyTitle_variant_small-strong": "TypographyTitle_variant_small-strong__BrE" };
var $a = (0, import_react.forwardRef)((a2, t2) => {
  const { className: n2, variant: r2 = "large-strong", asChild: l2, ..._2 } = a2, i2 = l2 ? D : "span", o2 = y(ja.TypographyTitle, ja[`TypographyTitle_variant_${r2}`], n2);
  return (0, import_jsx_runtime.jsx)(i2, { ref: t2, className: o2, ..._2 });
});
$a.displayName = "TypographyTitle";
var Ua = Object.assign({}, { Display: Da, Headline: Oa, Title: $a, Body: Ma, Label: Ha, Action: wa });
export {
  ye as Avatar,
  ze as Button,
  Pe as CellAction,
  Ge as CellHeader,
  Ze as CellInput,
  Qe as CellList,
  Ke as CellSimple,
  ta as Container,
  xe as Counter,
  ra as Dot,
  fe as EllipsisText,
  _a as Flex,
  oa as Grid,
  pa as IconButton,
  ua as Input,
  va as MaxUI,
  ha as MaxUIContext,
  Ca as Panel,
  be as Ripple,
  D as Root,
  Ba as SearchInput,
  D as Slot,
  H as Slottable,
  Te as Spinner,
  U as SvgButton,
  ba as Switch,
  $e as Tappable,
  Ta as Textarea,
  Aa as ToolButton,
  Ua as Typography,
  z as createSlot,
  k as createSlottable,
  ya as useAppearance,
  ae as useButtonLikeProps,
  te as useCallbackRef,
  ne as useColorScheme,
  re as useImageLoadingStatus,
  le as usePlatform,
  _e as useSystemColorScheme
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@maxhub_max-ui.js.map
