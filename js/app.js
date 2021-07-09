(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check = function (it) {
	  return it && it.Math == Math && it;
	}; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


	var global$H = // eslint-disable-next-line no-undef
	check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func
	Function('return this')();

	// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var aFunction$f = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  }

	  return it;
	};

	var aFunction$e = aFunction$f; // optional / simple context binding

	var functionBindContext = function (fn, that, length) {
	  aFunction$e(fn);
	  if (that === undefined) return fn;

	  switch (length) {
	    case 0:
	      return function () {
	        return fn.call(that);
	      };

	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };

	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };

	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }

	  return function ()
	  /* ...args */
	  {
	    return fn.apply(that, arguments);
	  };
	};

	var fails$V = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var toString$2 = {}.toString;

	var classofRaw$1 = function (it) {
	  return toString$2.call(it).slice(8, -1);
	};

	var fails$U = fails$V;
	var classof$g = classofRaw$1;
	var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

	var indexedObject = fails$U(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$g(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible

	var requireObjectCoercible$f = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	var requireObjectCoercible$e = requireObjectCoercible$f; // `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject

	var toObject$n = function (argument) {
	  return Object(requireObjectCoercible$e(argument));
	};

	var ceil$2 = Math.ceil;
	var floor$9 = Math.floor; // `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger

	var toInteger$c = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$9 : ceil$2)(argument);
	};

	var toInteger$b = toInteger$c;
	var min$8 = Math.min; // `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength

	var toLength$t = function (argument) {
	  return argument > 0 ? min$8(toInteger$b(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var isObject$y = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var classof$f = classofRaw$1; // `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray

	var isArray$7 = Array.isArray || function isArray(arg) {
	  return classof$f(arg) == 'Array';
	};

	var shared$3 = {exports: {}};

	var isPure = false;

	var fails$T = fails$V; // Thank's IE8 for his funny defineProperty

	var descriptors = !fails$T(function () {
	  return Object.defineProperty({}, 1, {
	    get: function () {
	      return 7;
	    }
	  })[1] != 7;
	});

	var objectDefineProperty = {};

	var global$G = global$H;
	var isObject$x = isObject$y;
	var document$2 = global$G.document; // typeof document.createElement is 'object' in old IE

	var EXISTS = isObject$x(document$2) && isObject$x(document$2.createElement);

	var documentCreateElement$1 = function (it) {
	  return EXISTS ? document$2.createElement(it) : {};
	};

	var DESCRIPTORS$v = descriptors;
	var fails$S = fails$V;
	var createElement$1 = documentCreateElement$1; // Thank's IE8 for his funny defineProperty

	var ie8DomDefine = !DESCRIPTORS$v && !fails$S(function () {
	  return Object.defineProperty(createElement$1('div'), 'a', {
	    get: function () {
	      return 7;
	    }
	  }).a != 7;
	});

	var isObject$w = isObject$y;

	var anObject$x = function (it) {
	  if (!isObject$w(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  }

	  return it;
	};

	var isObject$v = isObject$y; // `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string

	var toPrimitive$b = function (input, PREFERRED_STRING) {
	  if (!isObject$v(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$v(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject$v(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$v(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var DESCRIPTORS$u = descriptors;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var anObject$w = anObject$x;
	var toPrimitive$a = toPrimitive$b;
	var nativeDefineProperty$2 = Object.defineProperty; // `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty

	objectDefineProperty.f = DESCRIPTORS$u ? nativeDefineProperty$2 : function defineProperty(O, P, Attributes) {
	  anObject$w(O);
	  P = toPrimitive$a(P, true);
	  anObject$w(Attributes);
	  if (IE8_DOM_DEFINE$1) try {
	    return nativeDefineProperty$2(O, P, Attributes);
	  } catch (error) {
	    /* empty */
	  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var createPropertyDescriptor$8 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var DESCRIPTORS$t = descriptors;
	var definePropertyModule$c = objectDefineProperty;
	var createPropertyDescriptor$7 = createPropertyDescriptor$8;
	var createNonEnumerableProperty$f = DESCRIPTORS$t ? function (object, key, value) {
	  return definePropertyModule$c.f(object, key, createPropertyDescriptor$7(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$F = global$H;
	var createNonEnumerableProperty$e = createNonEnumerableProperty$f;

	var setGlobal$3 = function (key, value) {
	  try {
	    createNonEnumerableProperty$e(global$F, key, value);
	  } catch (error) {
	    global$F[key] = value;
	  }

	  return value;
	};

	var global$E = global$H;
	var setGlobal$2 = setGlobal$3;
	var SHARED = '__core-js_shared__';
	var store$3 = global$E[SHARED] || setGlobal$2(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;
	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.5',
	  mode: 'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});

	var hasOwnProperty = {}.hasOwnProperty;

	var has$k = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var id$2 = 0;
	var postfix = Math.random();

	var uid$5 = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$2 + postfix).toString(36);
	};

	var fails$R = fails$V;
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$R(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var NATIVE_SYMBOL$2 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$2 // eslint-disable-next-line no-undef
	&& !Symbol.sham // eslint-disable-next-line no-undef
	&& typeof Symbol.iterator == 'symbol';

	var global$D = global$H;
	var shared$2 = shared$3.exports;
	var has$j = has$k;
	var uid$4 = uid$5;
	var NATIVE_SYMBOL$1 = nativeSymbol;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var WellKnownSymbolsStore$1 = shared$2('wks');
	var Symbol$1 = global$D.Symbol;
	var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$4;

	var wellKnownSymbol$u = function (name) {
	  if (!has$j(WellKnownSymbolsStore$1, name)) {
	    if (NATIVE_SYMBOL$1 && has$j(Symbol$1, name)) WellKnownSymbolsStore$1[name] = Symbol$1[name];else WellKnownSymbolsStore$1[name] = createWellKnownSymbol('Symbol.' + name);
	  }

	  return WellKnownSymbolsStore$1[name];
	};

	var isObject$u = isObject$y;
	var isArray$6 = isArray$7;
	var wellKnownSymbol$t = wellKnownSymbol$u;
	var SPECIES$6 = wellKnownSymbol$t('species'); // `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate

	var arraySpeciesCreate$5 = function (originalArray, length) {
	  var C;

	  if (isArray$6(originalArray)) {
	    C = originalArray.constructor; // cross-realm fallback

	    if (typeof C == 'function' && (C === Array || isArray$6(C.prototype))) C = undefined;else if (isObject$u(C)) {
	      C = C[SPECIES$6];
	      if (C === null) C = undefined;
	    }
	  }

	  return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var bind$a = functionBindContext;
	var IndexedObject$4 = indexedObject;
	var toObject$m = toObject$n;
	var toLength$s = toLength$t;
	var arraySpeciesCreate$4 = arraySpeciesCreate$5;
	var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

	var createMethod$6 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$m($this);
	    var self = IndexedObject$4(O);
	    var boundFunction = bind$a(callbackfn, that, 3);
	    var length = toLength$s(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$4;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;

	    for (; length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);

	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	            case 3:
	              return true;
	            // some

	            case 5:
	              return value;
	            // find

	            case 6:
	              return index;
	            // findIndex

	            case 2:
	              push.call(target, value);
	            // filter
	          } else if (IS_EVERY) return false; // every
	      }
	    }

	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$6(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$6(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$6(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$6(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$6(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$6(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$6(6)
	};

	var fails$Q = fails$V;

	var arrayMethodIsStrict$9 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$Q(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () {
	      throw 1;
	    }, 1);
	  });
	};

	var DESCRIPTORS$s = descriptors;
	var fails$P = fails$V;
	var has$i = has$k;
	var defineProperty$c = Object.defineProperty;
	var cache = {};

	var thrower = function (it) {
	  throw it;
	};

	var arrayMethodUsesToLength$e = function (METHOD_NAME, options) {
	  if (has$i(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has$i(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has$i(options, 0) ? options[0] : thrower;
	  var argument1 = has$i(options, 1) ? options[1] : undefined;
	  return cache[METHOD_NAME] = !!method && !fails$P(function () {
	    if (ACCESSORS && !DESCRIPTORS$s) return true;
	    var O = {
	      length: -1
	    };
	    if (ACCESSORS) defineProperty$c(O, 1, {
	      enumerable: true,
	      get: thrower
	    });else O[1] = 1;
	    method.call(O, argument0, argument1);
	  });
	};

	var $forEach$2 = arrayIteration.forEach;
	var arrayMethodIsStrict$8 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$d = arrayMethodUsesToLength$e;
	var STRICT_METHOD$8 = arrayMethodIsStrict$8('forEach');
	var USES_TO_LENGTH$d = arrayMethodUsesToLength$d('forEach'); // `Array.prototype.forEach` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach

	var arrayForEach = !STRICT_METHOD$8 || !USES_TO_LENGTH$d ? function forEach(callbackfn
	/* , thisArg */
	) {
	  return $forEach$2(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	var global$C = global$H;
	var DOMIterables$1 = domIterables;
	var forEach$2 = arrayForEach;
	var createNonEnumerableProperty$d = createNonEnumerableProperty$f;

	for (var COLLECTION_NAME$1 in DOMIterables$1) {
	  var Collection$1 = global$C[COLLECTION_NAME$1];
	  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

	  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== forEach$2) try {
	    createNonEnumerableProperty$d(CollectionPrototype$1, 'forEach', forEach$2);
	  } catch (error) {
	    CollectionPrototype$1.forEach = forEach$2;
	  }
	}

	var objectGetOwnPropertyDescriptor = {};

	var objectPropertyIsEnumerable = {};

	var nativePropertyIsEnumerable$1 = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

	var NASHORN_BUG = getOwnPropertyDescriptor$8 && !nativePropertyIsEnumerable$1.call({
	  1: 2
	}, 1); // `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$8(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable$1;

	var IndexedObject$3 = indexedObject;
	var requireObjectCoercible$d = requireObjectCoercible$f;

	var toIndexedObject$d = function (it) {
	  return IndexedObject$3(requireObjectCoercible$d(it));
	};

	var DESCRIPTORS$r = descriptors;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$6 = createPropertyDescriptor$8;
	var toIndexedObject$c = toIndexedObject$d;
	var toPrimitive$9 = toPrimitive$b;
	var has$h = has$k;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var nativeGetOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$r ? nativeGetOwnPropertyDescriptor$3 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$c(O);
	  P = toPrimitive$9(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return nativeGetOwnPropertyDescriptor$3(O, P);
	  } catch (error) {
	    /* empty */
	  }
	  if (has$h(O, P)) return createPropertyDescriptor$6(!propertyIsEnumerableModule$2.f.call(O, P), O[P]);
	};

	var redefine$g = {exports: {}};

	var store$1 = sharedStore;
	var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

	if (typeof store$1.inspectSource != 'function') {
	  store$1.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource$3 = store$1.inspectSource;

	var global$B = global$H;
	var inspectSource$2 = inspectSource$3;
	var WeakMap$1 = global$B.WeakMap;
	var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$2(WeakMap$1));

	var shared$1 = shared$3.exports;
	var uid$3 = uid$5;
	var keys$3 = shared$1('keys');

	var sharedKey$4 = function (key) {
	  return keys$3[key] || (keys$3[key] = uid$3(key));
	};

	var hiddenKeys$6 = {};

	var NATIVE_WEAK_MAP$1 = nativeWeakMap;
	var global$A = global$H;
	var isObject$t = isObject$y;
	var createNonEnumerableProperty$c = createNonEnumerableProperty$f;
	var objectHas = has$k;
	var sharedKey$3 = sharedKey$4;
	var hiddenKeys$5 = hiddenKeys$6;
	var WeakMap = global$A.WeakMap;
	var set$3, get$2, has$g;

	var enforce = function (it) {
	  return has$g(it) ? get$2(it) : set$3(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;

	    if (!isObject$t(it) || (state = get$2(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    }

	    return state;
	  };
	};

	if (NATIVE_WEAK_MAP$1) {
	  var store = new WeakMap();
	  var wmget = store.get;
	  var wmhas = store.has;
	  var wmset = store.set;

	  set$3 = function (it, metadata) {
	    wmset.call(store, it, metadata);
	    return metadata;
	  };

	  get$2 = function (it) {
	    return wmget.call(store, it) || {};
	  };

	  has$g = function (it) {
	    return wmhas.call(store, it);
	  };
	} else {
	  var STATE = sharedKey$3('state');
	  hiddenKeys$5[STATE] = true;

	  set$3 = function (it, metadata) {
	    createNonEnumerableProperty$c(it, STATE, metadata);
	    return metadata;
	  };

	  get$2 = function (it) {
	    return objectHas(it, STATE) ? it[STATE] : {};
	  };

	  has$g = function (it) {
	    return objectHas(it, STATE);
	  };
	}

	var internalState = {
	  set: set$3,
	  get: get$2,
	  has: has$g,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var global$z = global$H;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$f;
	var has$f = has$k;
	var setGlobal$1 = setGlobal$3;
	var inspectSource$1 = inspectSource$3;
	var InternalStateModule$b = internalState;
	var getInternalState$8 = InternalStateModule$b.get;
	var enforceInternalState = InternalStateModule$b.enforce;
	var TEMPLATE = String(String).split('String');
	(redefine$g.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;

	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has$f(value, 'name')) createNonEnumerableProperty$b(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }

	  if (O === global$z) {
	    if (simple) O[key] = value;else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }

	  if (simple) O[key] = value;else createNonEnumerableProperty$b(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState$8(this).source || inspectSource$1(this);
	});

	var global$y = global$H;
	var path$2 = global$y;

	var path$1 = path$2;
	var global$x = global$H;

	var aFunction$d = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn$c = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$d(path$1[namespace]) || aFunction$d(global$x[namespace]) : path$1[namespace] && path$1[namespace][method] || global$x[namespace] && global$x[namespace][method];
	};

	var objectGetOwnPropertyNames = {};

	var toInteger$a = toInteger$c;
	var max$3 = Math.max;
	var min$7 = Math.min; // Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

	var toAbsoluteIndex$8 = function (index, length) {
	  var integer = toInteger$a(index);
	  return integer < 0 ? max$3(integer + length, 0) : min$7(integer, length);
	};

	var toIndexedObject$b = toIndexedObject$d;
	var toLength$r = toLength$t;
	var toAbsoluteIndex$7 = toAbsoluteIndex$8; // `Array.prototype.{ indexOf, includes }` methods implementation

	var createMethod$5 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$b($this);
	    var length = toLength$r(O.length);
	    var index = toAbsoluteIndex$7(fromIndex, length);
	    var value; // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare

	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++]; // eslint-disable-next-line no-self-compare

	      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
	    } else for (; length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    }
	    return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod$5(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod$5(false)
	};

	var has$e = has$k;
	var toIndexedObject$a = toIndexedObject$d;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$4 = hiddenKeys$6;

	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$a(object);
	  var i = 0;
	  var result = [];
	  var key;

	  for (key in O) !has$e(hiddenKeys$4, key) && has$e(O, key) && result.push(key); // Don't enum bug & hidden keys


	  while (names.length > i) if (has$e(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }

	  return result;
	};

	var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

	var internalObjectKeys$1 = objectKeysInternal;
	var enumBugKeys$2 = enumBugKeys$3;
	var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$1(O, hiddenKeys$3);
	};

	var objectGetOwnPropertySymbols = {};

	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn$b = getBuiltIn$c;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
	var anObject$v = anObject$x; // all object keys, includes non-enumerable and symbols

	var ownKeys$3 = getBuiltIn$b('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$1.f(anObject$v(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var has$d = has$k;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$6 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$b = objectDefineProperty;

	var copyConstructorProperties$2 = function (target, source) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule$b.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$6.f;

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has$d(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var fails$O = fails$V;
	var replacement = /#|\.prototype\./;

	var isForced$5 = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails$O(detection) : !!detection;
	};

	var normalize = isForced$5.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced$5.data = {};
	var NATIVE = isForced$5.NATIVE = 'N';
	var POLYFILL = isForced$5.POLYFILL = 'P';
	var isForced_1 = isForced$5;

	var global$w = global$H;
	var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$f;
	var redefine$f = redefine$g.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties$1 = copyConstructorProperties$2;
	var isForced$4 = isForced_1;
	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/

	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;

	  if (GLOBAL) {
	    target = global$w;
	  } else if (STATIC) {
	    target = global$w[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$w[TARGET] || {}).prototype;
	  }

	  if (target) for (key in source) {
	    sourceProperty = source[key];

	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$7(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];

	    FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties$1(sourceProperty, targetProperty);
	    } // add a flag to not completely full polyfills


	    if (options.sham || targetProperty && targetProperty.sham) {
	      createNonEnumerableProperty$a(sourceProperty, 'sham', true);
	    } // extend global


	    redefine$f(target, key, sourceProperty, options);
	  }
	};

	var toPrimitive$8 = toPrimitive$b;
	var definePropertyModule$a = objectDefineProperty;
	var createPropertyDescriptor$5 = createPropertyDescriptor$8;

	var createProperty$7 = function (object, key, value) {
	  var propertyKey = toPrimitive$8(key);
	  if (propertyKey in object) definePropertyModule$a.f(object, propertyKey, createPropertyDescriptor$5(0, value));else object[propertyKey] = value;
	};

	var getBuiltIn$a = getBuiltIn$c;
	var engineUserAgent = getBuiltIn$a('navigator', 'userAgent') || '';

	var global$v = global$H;
	var userAgent$3 = engineUserAgent;
	var process$4 = global$v.process;
	var versions = process$4 && process$4.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (userAgent$3) {
	  match = userAgent$3.match(/Edge\/(\d+)/);

	  if (!match || match[1] >= 74) {
	    match = userAgent$3.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var fails$N = fails$V;
	var wellKnownSymbol$s = wellKnownSymbol$u;
	var V8_VERSION$2 = engineV8Version;
	var SPECIES$5 = wellKnownSymbol$s('species');

	var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return V8_VERSION$2 >= 51 || !fails$N(function () {
	    var array = [];
	    var constructor = array.constructor = {};

	    constructor[SPECIES$5] = function () {
	      return {
	        foo: 1
	      };
	    };

	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$2f = _export;
	var isObject$s = isObject$y;
	var isArray$5 = isArray$7;
	var toAbsoluteIndex$6 = toAbsoluteIndex$8;
	var toLength$q = toLength$t;
	var toIndexedObject$9 = toIndexedObject$d;
	var createProperty$6 = createProperty$7;
	var wellKnownSymbol$r = wellKnownSymbol$u;
	var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
	var arrayMethodUsesToLength$c = arrayMethodUsesToLength$e;
	var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('slice');
	var USES_TO_LENGTH$c = arrayMethodUsesToLength$c('slice', {
	  ACCESSORS: true,
	  0: 0,
	  1: 2
	});
	var SPECIES$4 = wellKnownSymbol$r('species');
	var nativeSlice = [].slice;
	var max$2 = Math.max; // `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects

	$$2f({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$3 || !USES_TO_LENGTH$c
	}, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$9(this);
	    var length = toLength$q(O.length);
	    var k = toAbsoluteIndex$6(start, length);
	    var fin = toAbsoluteIndex$6(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

	    var Constructor, result, n;

	    if (isArray$5(O)) {
	      Constructor = O.constructor; // cross-realm fallback

	      if (typeof Constructor == 'function' && (Constructor === Array || isArray$5(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$s(Constructor)) {
	        Constructor = Constructor[SPECIES$4];
	        if (Constructor === null) Constructor = undefined;
	      }

	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }

	    result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));

	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty$6(result, n, O[k]);

	    result.length = n;
	    return result;
	  }
	});

	var classof$e = classofRaw$1; // `thisNumberValue` abstract operation
	// https://tc39.github.io/ecma262/#sec-thisnumbervalue

	var thisNumberValue$2 = function (value) {
	  if (typeof value != 'number' && classof$e(value) != 'Number') {
	    throw TypeError('Incorrect invocation');
	  }

	  return +value;
	};

	var toInteger$9 = toInteger$c;
	var requireObjectCoercible$c = requireObjectCoercible$f; // `String.prototype.repeat` method implementation
	// https://tc39.github.io/ecma262/#sec-string.prototype.repeat

	var stringRepeat = ''.repeat || function repeat(count) {
	  var str = String(requireObjectCoercible$c(this));
	  var result = '';
	  var n = toInteger$9(count);
	  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

	  for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;

	  return result;
	};

	var $$2e = _export;
	var toInteger$8 = toInteger$c;
	var thisNumberValue$1 = thisNumberValue$2;
	var repeat$2 = stringRepeat;
	var fails$M = fails$V;
	var nativeToFixed = 1.0.toFixed;
	var floor$8 = Math.floor;

	var pow$4 = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow$4(x, n - 1, acc * x) : pow$4(x * x, n / 2, acc);
	};

	var log$8 = function (x) {
	  var n = 0;
	  var x2 = x;

	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }

	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  }

	  return n;
	};

	var FORCED$p = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails$M(function () {
	  // V8 ~ Android 4.3-
	  nativeToFixed.call({});
	}); // `Number.prototype.toFixed` method
	// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed

	$$2e({
	  target: 'Number',
	  proto: true,
	  forced: FORCED$p
	}, {
	  // eslint-disable-next-line max-statements
	  toFixed: function toFixed(fractionDigits) {
	    var number = thisNumberValue$1(this);
	    var fractDigits = toInteger$8(fractionDigits);
	    var data = [0, 0, 0, 0, 0, 0];
	    var sign = '';
	    var result = '0';
	    var e, z, j, k;

	    var multiply = function (n, c) {
	      var index = -1;
	      var c2 = c;

	      while (++index < 6) {
	        c2 += n * data[index];
	        data[index] = c2 % 1e7;
	        c2 = floor$8(c2 / 1e7);
	      }
	    };

	    var divide = function (n) {
	      var index = 6;
	      var c = 0;

	      while (--index >= 0) {
	        c += data[index];
	        data[index] = floor$8(c / n);
	        c = c % n * 1e7;
	      }
	    };

	    var dataToString = function () {
	      var index = 6;
	      var s = '';

	      while (--index >= 0) {
	        if (s !== '' || index === 0 || data[index] !== 0) {
	          var t = String(data[index]);
	          s = s === '' ? t : s + repeat$2.call('0', 7 - t.length) + t;
	        }
	      }

	      return s;
	    };

	    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare

	    if (number != number) return 'NaN';
	    if (number <= -1e21 || number >= 1e21) return String(number);

	    if (number < 0) {
	      sign = '-';
	      number = -number;
	    }

	    if (number > 1e-21) {
	      e = log$8(number * pow$4(2, 69, 1)) - 69;
	      z = e < 0 ? number * pow$4(2, -e, 1) : number / pow$4(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;

	      if (e > 0) {
	        multiply(0, z);
	        j = fractDigits;

	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }

	        multiply(pow$4(10, j, 1), 0);
	        j = e - 1;

	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }

	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        result = dataToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        result = dataToString() + repeat$2.call('0', fractDigits);
	      }
	    }

	    if (fractDigits > 0) {
	      k = result.length;
	      result = sign + (k <= fractDigits ? '0.' + repeat$2.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
	    } else {
	      result = sign + result;
	    }

	    return result;
	  }
	});

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys

	var objectKeys$4 = Object.keys || function keys(O) {
	  return internalObjectKeys(O, enumBugKeys$1);
	};

	var DESCRIPTORS$q = descriptors;
	var definePropertyModule$9 = objectDefineProperty;
	var anObject$u = anObject$x;
	var objectKeys$3 = objectKeys$4; // `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties

	var objectDefineProperties = DESCRIPTORS$q ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$u(O);
	  var keys = objectKeys$3(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;

	  while (length > index) definePropertyModule$9.f(O, key = keys[index++], Properties[key]);

	  return O;
	};

	var getBuiltIn$9 = getBuiltIn$c;
	var html$2 = getBuiltIn$9('document', 'documentElement');

	var anObject$t = anObject$x;
	var defineProperties$2 = objectDefineProperties;
	var enumBugKeys = enumBugKeys$3;
	var hiddenKeys$2 = hiddenKeys$6;
	var html$1 = html$2;
	var documentCreateElement = documentCreateElement$1;
	var sharedKey$2 = sharedKey$4;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$2 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO$1 = sharedKey$2('IE_PROTO');

	var EmptyConstructor = function () {
	  /* empty */
	};

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	}; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak

	  return temp;
	}; // Create object with fake `null` prototype: use iframe Object with cleared prototype


	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	}; // Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug


	var activeXDocument;

	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) {
	    /* ignore */
	  }

	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;

	  while (length--) delete NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];

	  return NullProtoObject();
	};

	hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create

	var objectCreate = Object.create || function create(O, Properties) {
	  var result;

	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$2] = anObject$t(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

	    result[IE_PROTO$1] = O;
	  } else result = NullProtoObject();

	  return Properties === undefined ? result : defineProperties$2(result, Properties);
	};

	var objectGetOwnPropertyNamesExternal = {};

	var toIndexedObject$8 = toIndexedObject$d;
	var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
	var toString$1 = {}.toString;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return nativeGetOwnPropertyNames$2(it);
	  } catch (error) {
	    return windowNames.slice();
	  }
	}; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames$2(toIndexedObject$8(it));
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$q = wellKnownSymbol$u;
	wellKnownSymbolWrapped.f = wellKnownSymbol$q;

	var path = path$2;
	var has$c = has$k;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$b = objectDefineProperty.f;

	var defineWellKnownSymbol$e = function (NAME) {
	  var Symbol = path.Symbol || (path.Symbol = {});
	  if (!has$c(Symbol, NAME)) defineProperty$b(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var defineProperty$a = objectDefineProperty.f;
	var has$b = has$k;
	var wellKnownSymbol$p = wellKnownSymbol$u;
	var TO_STRING_TAG$4 = wellKnownSymbol$p('toStringTag');

	var setToStringTag$a = function (it, TAG, STATIC) {
	  if (it && !has$b(it = STATIC ? it : it.prototype, TO_STRING_TAG$4)) {
	    defineProperty$a(it, TO_STRING_TAG$4, {
	      configurable: true,
	      value: TAG
	    });
	  }
	};

	var $$2d = _export;
	var global$u = global$H;
	var getBuiltIn$8 = getBuiltIn$c;
	var DESCRIPTORS$p = descriptors;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var fails$L = fails$V;
	var has$a = has$k;
	var isArray$4 = isArray$7;
	var isObject$r = isObject$y;
	var anObject$s = anObject$x;
	var toObject$l = toObject$n;
	var toIndexedObject$7 = toIndexedObject$d;
	var toPrimitive$7 = toPrimitive$b;
	var createPropertyDescriptor$4 = createPropertyDescriptor$8;
	var nativeObjectCreate = objectCreate;
	var objectKeys$2 = objectKeys$4;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var getOwnPropertyDescriptorModule$5 = objectGetOwnPropertyDescriptor;
	var definePropertyModule$8 = objectDefineProperty;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$f;
	var redefine$e = redefine$g.exports;
	var shared = shared$3.exports;
	var sharedKey$1 = sharedKey$4;
	var hiddenKeys$1 = hiddenKeys$6;
	var uid$2 = uid$5;
	var wellKnownSymbol$o = wellKnownSymbol$u;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$d = defineWellKnownSymbol$e;
	var setToStringTag$9 = setToStringTag$a;
	var InternalStateModule$a = internalState;
	var $forEach$1 = arrayIteration.forEach;
	var HIDDEN = sharedKey$1('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE$1 = 'prototype';
	var TO_PRIMITIVE$1 = wellKnownSymbol$o('toPrimitive');
	var setInternalState$b = InternalStateModule$a.set;
	var getInternalState$7 = InternalStateModule$a.getterFor(SYMBOL);
	var ObjectPrototype$3 = Object[PROTOTYPE$1];
	var $Symbol = global$u.Symbol;
	var $stringify$1 = getBuiltIn$8('JSON', 'stringify');
	var nativeGetOwnPropertyDescriptor$2 = getOwnPropertyDescriptorModule$5.f;
	var nativeDefineProperty$1 = definePropertyModule$8.f;
	var nativeGetOwnPropertyNames$1 = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
	var AllSymbols = shared('symbols');
	var ObjectPrototypeSymbols = shared('op-symbols');
	var StringToSymbolRegistry = shared('string-to-symbol-registry');
	var SymbolToStringRegistry = shared('symbol-to-string-registry');
	var WellKnownSymbolsStore = shared('wks');
	var QObject = global$u.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

	var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

	var setSymbolDescriptor = DESCRIPTORS$p && fails$L(function () {
	  return nativeObjectCreate(nativeDefineProperty$1({}, 'a', {
	    get: function () {
	      return nativeDefineProperty$1(this, 'a', {
	        value: 7
	      }).a;
	    }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$2(ObjectPrototype$3, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype$3[P];
	  nativeDefineProperty$1(O, P, Attributes);

	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype$3) {
	    nativeDefineProperty$1(ObjectPrototype$3, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty$1;

	var wrap$1 = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE$1]);
	  setInternalState$b(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$p) symbol.description = description;
	  return symbol;
	};

	var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return Object(it) instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype$3) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
	  anObject$s(O);
	  var key = toPrimitive$7(P, true);
	  anObject$s(Attributes);

	  if (has$a(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!has$a(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor$4(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (has$a(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, {
	        enumerable: createPropertyDescriptor$4(0, false)
	      });
	    }

	    return setSymbolDescriptor(O, key, Attributes);
	  }

	  return nativeDefineProperty$1(O, key, Attributes);
	};

	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$s(O);
	  var properties = toIndexedObject$7(Properties);
	  var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$p || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
	  });
	  return O;
	};

	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};

	var $propertyIsEnumerable = function propertyIsEnumerable(V) {
	  var P = toPrimitive$7(V, true);
	  var enumerable = nativePropertyIsEnumerable.call(this, P);
	  if (this === ObjectPrototype$3 && has$a(AllSymbols, P) && !has$a(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !has$a(this, P) || !has$a(AllSymbols, P) || has$a(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
	};

	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$7(O);
	  var key = toPrimitive$7(P, true);
	  if (it === ObjectPrototype$3 && has$a(AllSymbols, key) && !has$a(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor$2(it, key);

	  if (descriptor && has$a(AllSymbols, key) && !(has$a(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }

	  return descriptor;
	};

	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames$1(toIndexedObject$7(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!has$a(AllSymbols, key) && !has$a(hiddenKeys$1, key)) result.push(key);
	  });
	  return result;
	};

	var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$3;
	  var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$7(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (has$a(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has$a(ObjectPrototype$3, key))) {
	      result.push(AllSymbols[key]);
	    }
	  });
	  return result;
	}; // `Symbol` constructor
	// https://tc39.github.io/ecma262/#sec-symbol-constructor


	if (!NATIVE_SYMBOL) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var tag = uid$2(description);

	    var setter = function (value) {
	      if (this === ObjectPrototype$3) setter.call(ObjectPrototypeSymbols, value);
	      if (has$a(this, HIDDEN) && has$a(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$4(1, value));
	    };

	    if (DESCRIPTORS$p && USE_SETTER) setSymbolDescriptor(ObjectPrototype$3, tag, {
	      configurable: true,
	      set: setter
	    });
	    return wrap$1(tag, description);
	  };

	  redefine$e($Symbol[PROTOTYPE$1], 'toString', function toString() {
	    return getInternalState$7(this).tag;
	  });
	  redefine$e($Symbol, 'withoutSetter', function (description) {
	    return wrap$1(uid$2(description), description);
	  });
	  propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
	  definePropertyModule$8.f = $defineProperty;
	  getOwnPropertyDescriptorModule$5.f = $getOwnPropertyDescriptor;
	  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;

	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap$1(wellKnownSymbol$o(name), name);
	  };

	  if (DESCRIPTORS$p) {
	    // https://github.com/tc39/proposal-Symbol-description
	    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$7(this).description;
	      }
	    });

	    {
	      redefine$e(ObjectPrototype$3, 'propertyIsEnumerable', $propertyIsEnumerable, {
	        unsafe: true
	      });
	    }
	  }
	}

	$$2d({
	  global: true,
	  wrap: true,
	  forced: !NATIVE_SYMBOL,
	  sham: !NATIVE_SYMBOL
	}, {
	  Symbol: $Symbol
	});
	$forEach$1(objectKeys$2(WellKnownSymbolsStore), function (name) {
	  defineWellKnownSymbol$d(name);
	});
	$$2d({
	  target: SYMBOL,
	  stat: true,
	  forced: !NATIVE_SYMBOL
	}, {
	  // `Symbol.for` method
	  // https://tc39.github.io/ecma262/#sec-symbol.for
	  'for': function (key) {
	    var string = String(key);
	    if (has$a(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = $Symbol(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry[symbol] = string;
	    return symbol;
	  },
	  // `Symbol.keyFor` method
	  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
	    if (has$a(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  },
	  useSetter: function () {
	    USE_SETTER = true;
	  },
	  useSimple: function () {
	    USE_SETTER = false;
	  }
	});
	$$2d({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL,
	  sham: !DESCRIPTORS$p
	}, {
	  // `Object.create` method
	  // https://tc39.github.io/ecma262/#sec-object.create
	  create: $create,
	  // `Object.defineProperty` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperty
	  defineProperty: $defineProperty,
	  // `Object.defineProperties` method
	  // https://tc39.github.io/ecma262/#sec-object.defineproperties
	  defineProperties: $defineProperties,
	  // `Object.getOwnPropertyDescriptor` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
	});
	$$2d({
	  target: 'Object',
	  stat: true,
	  forced: !NATIVE_SYMBOL
	}, {
	  // `Object.getOwnPropertyNames` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // `Object.getOwnPropertySymbols` method
	  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
	  getOwnPropertySymbols: $getOwnPropertySymbols
	}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443

	$$2d({
	  target: 'Object',
	  stat: true,
	  forced: fails$L(function () {
	    getOwnPropertySymbolsModule$1.f(1);
	  })
	}, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return getOwnPropertySymbolsModule$1.f(toObject$l(it));
	  }
	}); // `JSON.stringify` method behavior with symbols
	// https://tc39.github.io/ecma262/#sec-json.stringify

	if ($stringify$1) {
	  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails$L(function () {
	    var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

	    return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
	    || $stringify$1({
	      a: symbol
	    }) != '{}' // V8 throws on boxed symbols
	    || $stringify$1(Object(symbol)) != '{}';
	  });
	  $$2d({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED_JSON_STRINGIFY
	  }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var args = [it];
	      var index = 1;
	      var $replacer;

	      while (arguments.length > index) args.push(arguments[index++]);

	      $replacer = replacer;
	      if (!isObject$r(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

	      if (!isArray$4(replacer)) replacer = function (key, value) {
	        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	        if (!isSymbol(value)) return value;
	      };
	      args[1] = replacer;
	      return $stringify$1.apply(null, args);
	    }
	  });
	} // `Symbol.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive


	if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE$1]) {
	  createNonEnumerableProperty$9($Symbol[PROTOTYPE$1], TO_PRIMITIVE$1, $Symbol[PROTOTYPE$1].valueOf);
	} // `Symbol.prototype[@@toStringTag]` property
	// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag


	setToStringTag$9($Symbol, SYMBOL);
	hiddenKeys$1[HIDDEN] = true;

	var defineWellKnownSymbol$c = defineWellKnownSymbol$e; // `Symbol.asyncIterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.asynciterator

	defineWellKnownSymbol$c('asyncIterator');

	var $$2c = _export;
	var DESCRIPTORS$o = descriptors;
	var global$t = global$H;
	var has$9 = has$k;
	var isObject$q = isObject$y;
	var defineProperty$9 = objectDefineProperty.f;
	var copyConstructorProperties = copyConstructorProperties$2;
	var NativeSymbol = global$t.Symbol;

	if (DESCRIPTORS$o && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
	NativeSymbol().description !== undefined)) {
	  var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

	  var SymbolWrapper = function Symbol() {
	    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
	    var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
	    : description === undefined ? NativeSymbol() : NativeSymbol(description);
	    if (description === '') EmptyStringDescriptionStore[result] = true;
	    return result;
	  };

	  copyConstructorProperties(SymbolWrapper, NativeSymbol);
	  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
	  symbolPrototype.constructor = SymbolWrapper;
	  var symbolToString = symbolPrototype.toString;
	  var native = String(NativeSymbol('test')) == 'Symbol(test)';
	  var regexp = /^Symbol\((.*)\)[^)]+$/;
	  defineProperty$9(symbolPrototype, 'description', {
	    configurable: true,
	    get: function description() {
	      var symbol = isObject$q(this) ? this.valueOf() : this;
	      var string = symbolToString.call(symbol);
	      if (has$9(EmptyStringDescriptionStore, symbol)) return '';
	      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
	      return desc === '' ? undefined : desc;
	    }
	  });
	  $$2c({
	    global: true,
	    forced: true
	  }, {
	    Symbol: SymbolWrapper
	  });
	}

	var defineWellKnownSymbol$b = defineWellKnownSymbol$e; // `Symbol.hasInstance` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.hasinstance

	defineWellKnownSymbol$b('hasInstance');

	var defineWellKnownSymbol$a = defineWellKnownSymbol$e; // `Symbol.isConcatSpreadable` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable

	defineWellKnownSymbol$a('isConcatSpreadable');

	var defineWellKnownSymbol$9 = defineWellKnownSymbol$e; // `Symbol.iterator` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.iterator

	defineWellKnownSymbol$9('iterator');

	var defineWellKnownSymbol$8 = defineWellKnownSymbol$e; // `Symbol.match` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.match

	defineWellKnownSymbol$8('match');

	var defineWellKnownSymbol$7 = defineWellKnownSymbol$e; // `Symbol.matchAll` well-known symbol

	defineWellKnownSymbol$7('matchAll');

	var defineWellKnownSymbol$6 = defineWellKnownSymbol$e; // `Symbol.replace` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.replace

	defineWellKnownSymbol$6('replace');

	var defineWellKnownSymbol$5 = defineWellKnownSymbol$e; // `Symbol.search` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.search

	defineWellKnownSymbol$5('search');

	var defineWellKnownSymbol$4 = defineWellKnownSymbol$e; // `Symbol.species` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.species

	defineWellKnownSymbol$4('species');

	var defineWellKnownSymbol$3 = defineWellKnownSymbol$e; // `Symbol.split` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.split

	defineWellKnownSymbol$3('split');

	var defineWellKnownSymbol$2 = defineWellKnownSymbol$e; // `Symbol.toPrimitive` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.toprimitive

	defineWellKnownSymbol$2('toPrimitive');

	var defineWellKnownSymbol$1 = defineWellKnownSymbol$e; // `Symbol.toStringTag` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.tostringtag

	defineWellKnownSymbol$1('toStringTag');

	var defineWellKnownSymbol = defineWellKnownSymbol$e; // `Symbol.unscopables` well-known symbol
	// https://tc39.github.io/ecma262/#sec-symbol.unscopables

	defineWellKnownSymbol('unscopables');

	var DESCRIPTORS$n = descriptors;
	var fails$K = fails$V;
	var objectKeys$1 = objectKeys$4;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var toObject$k = toObject$n;
	var IndexedObject$2 = indexedObject;
	var nativeAssign = Object.assign;
	var defineProperty$8 = Object.defineProperty; // `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign

	var objectAssign = !nativeAssign || fails$K(function () {
	  // should have correct order of operations (Edge bug)
	  if (DESCRIPTORS$n && nativeAssign({
	    b: 1
	  }, nativeAssign(defineProperty$8({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$8(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), {
	    b: 2
	  })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

	  var A = {};
	  var B = {}; // eslint-disable-next-line no-undef

	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) {
	    B[chr] = chr;
	  });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys$1(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  // eslint-disable-line no-unused-vars
	  var T = toObject$k(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;

	  while (argumentsLength > index) {
	    var S = IndexedObject$2(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys$1(S).concat(getOwnPropertySymbols(S)) : objectKeys$1(S);
	    var length = keys.length;
	    var j = 0;
	    var key;

	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$n || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  }

	  return T;
	} : nativeAssign;

	var $$2b = _export;
	var assign$1 = objectAssign; // `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign

	$$2b({
	  target: 'Object',
	  stat: true,
	  forced: Object.assign !== assign$1
	}, {
	  assign: assign$1
	});

	var $$2a = _export;
	var DESCRIPTORS$m = descriptors;
	var create$7 = objectCreate; // `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create

	$$2a({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$m
	}, {
	  create: create$7
	});

	var $$29 = _export;
	var DESCRIPTORS$l = descriptors;
	var objectDefinePropertyModile = objectDefineProperty; // `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty

	$$29({
	  target: 'Object',
	  stat: true,
	  forced: !DESCRIPTORS$l,
	  sham: !DESCRIPTORS$l
	}, {
	  defineProperty: objectDefinePropertyModile.f
	});

	var $$28 = _export;
	var DESCRIPTORS$k = descriptors;
	var defineProperties$1 = objectDefineProperties; // `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties

	$$28({
	  target: 'Object',
	  stat: true,
	  forced: !DESCRIPTORS$k,
	  sham: !DESCRIPTORS$k
	}, {
	  defineProperties: defineProperties$1
	});

	var DESCRIPTORS$j = descriptors;
	var objectKeys = objectKeys$4;
	var toIndexedObject$6 = toIndexedObject$d;
	var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

	var createMethod$4 = function (TO_ENTRIES) {
	  return function (it) {
	    var O = toIndexedObject$6(it);
	    var keys = objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;

	    while (length > i) {
	      key = keys[i++];

	      if (!DESCRIPTORS$j || propertyIsEnumerable.call(O, key)) {
	        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
	      }
	    }

	    return result;
	  };
	};

	var objectToArray = {
	  // `Object.entries` method
	  // https://tc39.github.io/ecma262/#sec-object.entries
	  entries: createMethod$4(true),
	  // `Object.values` method
	  // https://tc39.github.io/ecma262/#sec-object.values
	  values: createMethod$4(false)
	};

	var $$27 = _export;
	var $entries = objectToArray.entries; // `Object.entries` method
	// https://tc39.github.io/ecma262/#sec-object.entries

	$$27({
	  target: 'Object',
	  stat: true
	}, {
	  entries: function entries(O) {
	    return $entries(O);
	  }
	});

	var fails$J = fails$V;
	var freezing = !fails$J(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = {exports: {}};

	var hiddenKeys = hiddenKeys$6;
	var isObject$p = isObject$y;
	var has$8 = has$k;
	var defineProperty$7 = objectDefineProperty.f;
	var uid$1 = uid$5;
	var FREEZING$4 = freezing;
	var METADATA = uid$1('meta');
	var id$1 = 0;

	var isExtensible$1 = Object.isExtensible || function () {
	  return true;
	};

	var setMetadata = function (it) {
	  defineProperty$7(it, METADATA, {
	    value: {
	      objectID: 'O' + ++id$1,
	      // object ID
	      weakData: {} // weak collections IDs

	    }
	  });
	};

	var fastKey$1 = function (it, create) {
	  // return a primitive with prefix
	  if (!isObject$p(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

	  if (!has$8(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata

	    if (!create) return 'E'; // add missing metadata

	    setMetadata(it); // return object ID
	  }

	  return it[METADATA].objectID;
	};

	var getWeakData$1 = function (it, create) {
	  if (!has$8(it, METADATA)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible$1(it)) return true; // not necessary to add metadata

	    if (!create) return false; // add missing metadata

	    setMetadata(it); // return the store of weak collections IDs
	  }

	  return it[METADATA].weakData;
	}; // add metadata on freeze-family methods calling


	var onFreeze$3 = function (it) {
	  if (FREEZING$4 && meta.REQUIRED && isExtensible$1(it) && !has$8(it, METADATA)) setMetadata(it);
	  return it;
	};

	var meta = internalMetadata.exports = {
	  REQUIRED: false,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData$1,
	  onFreeze: onFreeze$3
	};
	hiddenKeys[METADATA] = true;

	var $$26 = _export;
	var FREEZING$3 = freezing;
	var fails$I = fails$V;
	var isObject$o = isObject$y;
	var onFreeze$2 = internalMetadata.exports.onFreeze;
	var nativeFreeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$9 = fails$I(function () {
	  nativeFreeze(1);
	}); // `Object.freeze` method
	// https://tc39.github.io/ecma262/#sec-object.freeze

	$$26({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$9,
	  sham: !FREEZING$3
	}, {
	  freeze: function freeze(it) {
	    return nativeFreeze && isObject$o(it) ? nativeFreeze(onFreeze$2(it)) : it;
	  }
	});

	var iterate$7 = {exports: {}};

	var iterators = {};

	var wellKnownSymbol$n = wellKnownSymbol$u;
	var Iterators$4 = iterators;
	var ITERATOR$8 = wellKnownSymbol$n('iterator');
	var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

	var isArrayIteratorMethod$3 = function (it) {
	  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$8] === it);
	};

	var wellKnownSymbol$m = wellKnownSymbol$u;
	var TO_STRING_TAG$3 = wellKnownSymbol$m('toStringTag');
	var test$2 = {};
	test$2[TO_STRING_TAG$3] = 'z';
	var toStringTagSupport = String(test$2) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var classofRaw = classofRaw$1;
	var wellKnownSymbol$l = wellKnownSymbol$u;
	var TO_STRING_TAG$2 = wellKnownSymbol$l('toStringTag'); // ES3 wrong here

	var CORRECT_ARGUMENTS = classofRaw(function () {
	  return arguments;
	}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {
	    /* empty */
	  }
	}; // getting tag from ES6+ `Object.prototype.toString`


	var classof$d = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
	  : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
	  : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
	  : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
	};

	var classof$c = classof$d;
	var Iterators$3 = iterators;
	var wellKnownSymbol$k = wellKnownSymbol$u;
	var ITERATOR$7 = wellKnownSymbol$k('iterator');

	var getIteratorMethod$5 = function (it) {
	  if (it != undefined) return it[ITERATOR$7] || it['@@iterator'] || Iterators$3[classof$c(it)];
	};

	var anObject$r = anObject$x; // call something on iterator step with safe closing on error

	var callWithSafeIterationClosing$2 = function (iterator, fn, value, ENTRIES) {
	  try {
	    return ENTRIES ? fn(anObject$r(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
	  } catch (error) {
	    var returnMethod = iterator['return'];
	    if (returnMethod !== undefined) anObject$r(returnMethod.call(iterator));
	    throw error;
	  }
	};

	var anObject$q = anObject$x;
	var isArrayIteratorMethod$2 = isArrayIteratorMethod$3;
	var toLength$p = toLength$t;
	var bind$9 = functionBindContext;
	var getIteratorMethod$4 = getIteratorMethod$5;
	var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$2;

	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};

	var iterate$6 = iterate$7.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
	  var boundFunction = bind$9(fn, that, AS_ENTRIES ? 2 : 1);
	  var iterator, iterFn, index, length, result, next, step;

	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod$4(iterable);
	    if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

	    if (isArrayIteratorMethod$2(iterFn)) {
	      for (index = 0, length = toLength$p(iterable.length); length > index; index++) {
	        result = AS_ENTRIES ? boundFunction(anObject$q(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
	        if (result && result instanceof Result) return result;
	      }

	      return new Result(false);
	    }

	    iterator = iterFn.call(iterable);
	  }

	  next = iterator.next;

	  while (!(step = next.call(iterator)).done) {
	    result = callWithSafeIterationClosing$1(iterator, boundFunction, step.value, AS_ENTRIES);
	    if (typeof result == 'object' && result && result instanceof Result) return result;
	  }

	  return new Result(false);
	};

	iterate$6.stop = function (result) {
	  return new Result(true, result);
	};

	var $$25 = _export;
	var iterate$5 = iterate$7.exports;
	var createProperty$5 = createProperty$7; // `Object.fromEntries` method
	// https://github.com/tc39/proposal-object-from-entries

	$$25({
	  target: 'Object',
	  stat: true
	}, {
	  fromEntries: function fromEntries(iterable) {
	    var obj = {};
	    iterate$5(iterable, function (k, v) {
	      createProperty$5(obj, k, v);
	    }, undefined, true);
	    return obj;
	  }
	});

	var $$24 = _export;
	var fails$H = fails$V;
	var toIndexedObject$5 = toIndexedObject$d;
	var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var DESCRIPTORS$i = descriptors;
	var FAILS_ON_PRIMITIVES$8 = fails$H(function () {
	  nativeGetOwnPropertyDescriptor$1(1);
	});
	var FORCED$o = !DESCRIPTORS$i || FAILS_ON_PRIMITIVES$8; // `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

	$$24({
	  target: 'Object',
	  stat: true,
	  forced: FORCED$o,
	  sham: !DESCRIPTORS$i
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
	    return nativeGetOwnPropertyDescriptor$1(toIndexedObject$5(it), key);
	  }
	});

	var $$23 = _export;
	var DESCRIPTORS$h = descriptors;
	var ownKeys$1 = ownKeys$3;
	var toIndexedObject$4 = toIndexedObject$d;
	var getOwnPropertyDescriptorModule$4 = objectGetOwnPropertyDescriptor;
	var createProperty$4 = createProperty$7; // `Object.getOwnPropertyDescriptors` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors

	$$23({
	  target: 'Object',
	  stat: true,
	  sham: !DESCRIPTORS$h
	}, {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	    var O = toIndexedObject$4(object);
	    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$4.f;
	    var keys = ownKeys$1(O);
	    var result = {};
	    var index = 0;
	    var key, descriptor;

	    while (keys.length > index) {
	      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
	      if (descriptor !== undefined) createProperty$4(result, key, descriptor);
	    }

	    return result;
	  }
	});

	var $$22 = _export;
	var fails$G = fails$V;
	var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
	var FAILS_ON_PRIMITIVES$7 = fails$G(function () {
	  return !Object.getOwnPropertyNames(1);
	}); // `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames

	$$22({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$7
	}, {
	  getOwnPropertyNames: nativeGetOwnPropertyNames
	});

	var fails$F = fails$V;
	var correctPrototypeGetter = !fails$F(function () {
	  function F() {
	    /* empty */
	  }

	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var has$7 = has$k;
	var toObject$j = toObject$n;
	var sharedKey = sharedKey$4;
	var CORRECT_PROTOTYPE_GETTER$2 = correctPrototypeGetter;
	var IE_PROTO = sharedKey('IE_PROTO');
	var ObjectPrototype$2 = Object.prototype; // `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof

	var objectGetPrototypeOf$1 = CORRECT_PROTOTYPE_GETTER$2 ? Object.getPrototypeOf : function (O) {
	  O = toObject$j(O);
	  if (has$7(O, IE_PROTO)) return O[IE_PROTO];

	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  }

	  return O instanceof Object ? ObjectPrototype$2 : null;
	};

	var $$21 = _export;
	var fails$E = fails$V;
	var toObject$i = toObject$n;
	var nativeGetPrototypeOf = objectGetPrototypeOf$1;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES$6 = fails$E(function () {
	  nativeGetPrototypeOf(1);
	}); // `Object.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.getprototypeof

	$$21({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$6,
	  sham: !CORRECT_PROTOTYPE_GETTER$1
	}, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$i(it));
	  }
	});

	// https://tc39.github.io/ecma262/#sec-samevalue

	var sameValue$1 = Object.is || function is(x, y) {
	  // eslint-disable-next-line no-self-compare
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

	var $$20 = _export;
	var is = sameValue$1; // `Object.is` method
	// https://tc39.github.io/ecma262/#sec-object.is

	$$20({
	  target: 'Object',
	  stat: true
	}, {
	  is: is
	});

	var $$1$ = _export;
	var fails$D = fails$V;
	var isObject$n = isObject$y;
	var nativeIsExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$5 = fails$D(function () {
	  nativeIsExtensible(1);
	}); // `Object.isExtensible` method
	// https://tc39.github.io/ecma262/#sec-object.isextensible

	$$1$({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$5
	}, {
	  isExtensible: function isExtensible(it) {
	    return isObject$n(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
	  }
	});

	var $$1_ = _export;
	var fails$C = fails$V;
	var isObject$m = isObject$y;
	var nativeIsFrozen = Object.isFrozen;
	var FAILS_ON_PRIMITIVES$4 = fails$C(function () {
	  nativeIsFrozen(1);
	}); // `Object.isFrozen` method
	// https://tc39.github.io/ecma262/#sec-object.isfrozen

	$$1_({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$4
	}, {
	  isFrozen: function isFrozen(it) {
	    return isObject$m(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
	  }
	});

	var $$1Z = _export;
	var fails$B = fails$V;
	var isObject$l = isObject$y;
	var nativeIsSealed = Object.isSealed;
	var FAILS_ON_PRIMITIVES$3 = fails$B(function () {
	  nativeIsSealed(1);
	}); // `Object.isSealed` method
	// https://tc39.github.io/ecma262/#sec-object.issealed

	$$1Z({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$3
	}, {
	  isSealed: function isSealed(it) {
	    return isObject$l(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
	  }
	});

	var $$1Y = _export;
	var toObject$h = toObject$n;
	var nativeKeys = objectKeys$4;
	var fails$A = fails$V;
	var FAILS_ON_PRIMITIVES$2 = fails$A(function () {
	  nativeKeys(1);
	}); // `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys

	$$1Y({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$2
	}, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$h(it));
	  }
	});

	var $$1X = _export;
	var isObject$k = isObject$y;
	var onFreeze$1 = internalMetadata.exports.onFreeze;
	var FREEZING$2 = freezing;
	var fails$z = fails$V;
	var nativePreventExtensions = Object.preventExtensions;
	var FAILS_ON_PRIMITIVES$1 = fails$z(function () {
	  nativePreventExtensions(1);
	}); // `Object.preventExtensions` method
	// https://tc39.github.io/ecma262/#sec-object.preventextensions

	$$1X({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES$1,
	  sham: !FREEZING$2
	}, {
	  preventExtensions: function preventExtensions(it) {
	    return nativePreventExtensions && isObject$k(it) ? nativePreventExtensions(onFreeze$1(it)) : it;
	  }
	});

	var $$1W = _export;
	var isObject$j = isObject$y;
	var onFreeze = internalMetadata.exports.onFreeze;
	var FREEZING$1 = freezing;
	var fails$y = fails$V;
	var nativeSeal = Object.seal;
	var FAILS_ON_PRIMITIVES = fails$y(function () {
	  nativeSeal(1);
	}); // `Object.seal` method
	// https://tc39.github.io/ecma262/#sec-object.seal

	$$1W({
	  target: 'Object',
	  stat: true,
	  forced: FAILS_ON_PRIMITIVES,
	  sham: !FREEZING$1
	}, {
	  seal: function seal(it) {
	    return nativeSeal && isObject$j(it) ? nativeSeal(onFreeze(it)) : it;
	  }
	});

	var isObject$i = isObject$y;

	var aPossiblePrototype$2 = function (it) {
	  if (!isObject$i(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  }

	  return it;
	};

	var anObject$p = anObject$x;
	var aPossiblePrototype$1 = aPossiblePrototype$2; // `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.

	/* eslint-disable no-proto */

	var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;

	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {
	    /* empty */
	  }

	  return function setPrototypeOf(O, proto) {
	    anObject$p(O);
	    aPossiblePrototype$1(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var $$1V = _export;
	var setPrototypeOf$5 = objectSetPrototypeOf$1; // `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof

	$$1V({
	  target: 'Object',
	  stat: true
	}, {
	  setPrototypeOf: setPrototypeOf$5
	});

	var $$1U = _export;
	var $values = objectToArray.values; // `Object.values` method
	// https://tc39.github.io/ecma262/#sec-object.values

	$$1U({
	  target: 'Object',
	  stat: true
	}, {
	  values: function values(O) {
	    return $values(O);
	  }
	});

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$b = classof$d; // `Object.prototype.toString` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$b(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var redefine$d = redefine$g.exports;
	var toString = objectToString; // `Object.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.tostring

	if (!TO_STRING_TAG_SUPPORT) {
	  redefine$d(Object.prototype, 'toString', toString, {
	    unsafe: true
	  });
	}

	var global$s = global$H;
	var fails$x = fails$V; // Forced replacement object prototype accessors methods

	var objectPrototypeAccessorsForced = !fails$x(function () {
	  var key = Math.random(); // In FF throws only define methods
	  // eslint-disable-next-line no-undef, no-useless-call

	  __defineSetter__.call(null, key, function () {
	    /* empty */
	  });

	  delete global$s[key];
	});

	var $$1T = _export;
	var DESCRIPTORS$g = descriptors;
	var FORCED$n = objectPrototypeAccessorsForced;
	var toObject$g = toObject$n;
	var aFunction$c = aFunction$f;
	var definePropertyModule$7 = objectDefineProperty; // `Object.prototype.__defineGetter__` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__

	if (DESCRIPTORS$g) {
	  $$1T({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$n
	  }, {
	    __defineGetter__: function __defineGetter__(P, getter) {
	      definePropertyModule$7.f(toObject$g(this), P, {
	        get: aFunction$c(getter),
	        enumerable: true,
	        configurable: true
	      });
	    }
	  });
	}

	var $$1S = _export;
	var DESCRIPTORS$f = descriptors;
	var FORCED$m = objectPrototypeAccessorsForced;
	var toObject$f = toObject$n;
	var aFunction$b = aFunction$f;
	var definePropertyModule$6 = objectDefineProperty; // `Object.prototype.__defineSetter__` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__

	if (DESCRIPTORS$f) {
	  $$1S({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$m
	  }, {
	    __defineSetter__: function __defineSetter__(P, setter) {
	      definePropertyModule$6.f(toObject$f(this), P, {
	        set: aFunction$b(setter),
	        enumerable: true,
	        configurable: true
	      });
	    }
	  });
	}

	var $$1R = _export;
	var DESCRIPTORS$e = descriptors;
	var FORCED$l = objectPrototypeAccessorsForced;
	var toObject$e = toObject$n;
	var toPrimitive$6 = toPrimitive$b;
	var getPrototypeOf$8 = objectGetPrototypeOf$1;
	var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupGetter__` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__

	if (DESCRIPTORS$e) {
	  $$1R({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$l
	  }, {
	    __lookupGetter__: function __lookupGetter__(P) {
	      var O = toObject$e(this);
	      var key = toPrimitive$6(P, true);
	      var desc;

	      do {
	        if (desc = getOwnPropertyDescriptor$6(O, key)) return desc.get;
	      } while (O = getPrototypeOf$8(O));
	    }
	  });
	}

	var $$1Q = _export;
	var DESCRIPTORS$d = descriptors;
	var FORCED$k = objectPrototypeAccessorsForced;
	var toObject$d = toObject$n;
	var toPrimitive$5 = toPrimitive$b;
	var getPrototypeOf$7 = objectGetPrototypeOf$1;
	var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupSetter__` method
	// https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__

	if (DESCRIPTORS$d) {
	  $$1Q({
	    target: 'Object',
	    proto: true,
	    forced: FORCED$k
	  }, {
	    __lookupSetter__: function __lookupSetter__(P) {
	      var O = toObject$d(this);
	      var key = toPrimitive$5(P, true);
	      var desc;

	      do {
	        if (desc = getOwnPropertyDescriptor$5(O, key)) return desc.set;
	      } while (O = getPrototypeOf$7(O));
	    }
	  });
	}

	var aFunction$a = aFunction$f;
	var isObject$h = isObject$y;
	var slice$1 = [].slice;
	var factories = {};

	var construct = function (C, argsLength, args) {
	  if (!(argsLength in factories)) {
	    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']'; // eslint-disable-next-line no-new-func


	    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
	  }

	  return factories[argsLength](C, args);
	}; // `Function.prototype.bind` method implementation
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind


	var functionBind = Function.bind || function bind(that
	/* , ...args */
	) {
	  var fn = aFunction$a(this);
	  var partArgs = slice$1.call(arguments, 1);

	  var boundFunction = function bound()
	  /* args... */
	  {
	    var args = partArgs.concat(slice$1.call(arguments));
	    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
	  };

	  if (isObject$h(fn.prototype)) boundFunction.prototype = fn.prototype;
	  return boundFunction;
	};

	var $$1P = _export;
	var bind$8 = functionBind; // `Function.prototype.bind` method
	// https://tc39.github.io/ecma262/#sec-function.prototype.bind

	$$1P({
	  target: 'Function',
	  proto: true
	}, {
	  bind: bind$8
	});

	var DESCRIPTORS$c = descriptors;
	var defineProperty$6 = objectDefineProperty.f;
	var FunctionPrototype$1 = Function.prototype;
	var FunctionPrototypeToString = FunctionPrototype$1.toString;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME$1 = 'name'; // Function instances `.name` property
	// https://tc39.github.io/ecma262/#sec-function-instances-name

	if (DESCRIPTORS$c && !(NAME$1 in FunctionPrototype$1)) {
	  defineProperty$6(FunctionPrototype$1, NAME$1, {
	    configurable: true,
	    get: function () {
	      try {
	        return FunctionPrototypeToString.call(this).match(nameRE)[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	var isObject$g = isObject$y;
	var definePropertyModule$5 = objectDefineProperty;
	var getPrototypeOf$6 = objectGetPrototypeOf$1;
	var wellKnownSymbol$j = wellKnownSymbol$u;
	var HAS_INSTANCE = wellKnownSymbol$j('hasInstance');
	var FunctionPrototype = Function.prototype; // `Function.prototype[@@hasInstance]` method
	// https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance

	if (!(HAS_INSTANCE in FunctionPrototype)) {
	  definePropertyModule$5.f(FunctionPrototype, HAS_INSTANCE, {
	    value: function (O) {
	      if (typeof this != 'function' || !isObject$g(O)) return false;
	      if (!isObject$g(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

	      while (O = getPrototypeOf$6(O)) if (this.prototype === O) return true;

	      return false;
	    }
	  });
	}

	var $$1O = _export;
	var global$r = global$H; // `globalThis` object
	// https://github.com/tc39/proposal-global

	$$1O({
	  global: true
	}, {
	  globalThis: global$r
	});

	var bind$7 = functionBindContext;
	var toObject$c = toObject$n;
	var callWithSafeIterationClosing = callWithSafeIterationClosing$2;
	var isArrayIteratorMethod$1 = isArrayIteratorMethod$3;
	var toLength$o = toLength$t;
	var createProperty$3 = createProperty$7;
	var getIteratorMethod$3 = getIteratorMethod$5; // `Array.from` method implementation
	// https://tc39.github.io/ecma262/#sec-array.from

	var arrayFrom$1 = function from(arrayLike
	/* , mapfn = undefined, thisArg = undefined */
	) {
	  var O = toObject$c(arrayLike);
	  var C = typeof this == 'function' ? this : Array;
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$3(O);
	  var index = 0;
	  var length, result, step, iterator, next, value;
	  if (mapping) mapfn = bind$7(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

	  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    result = new C();

	    for (; !(step = next.call(iterator)).done; index++) {
	      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
	      createProperty$3(result, index, value);
	    }
	  } else {
	    length = toLength$o(O.length);
	    result = new C(length);

	    for (; length > index; index++) {
	      value = mapping ? mapfn(O[index], index) : O[index];
	      createProperty$3(result, index, value);
	    }
	  }

	  result.length = index;
	  return result;
	};

	var wellKnownSymbol$i = wellKnownSymbol$u;
	var ITERATOR$6 = wellKnownSymbol$i('iterator');
	var SAFE_CLOSING = false;

	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return {
	        done: !!called++
	      };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };

	  iteratorWithReturn[ITERATOR$6] = function () {
	    return this;
	  }; // eslint-disable-next-line no-throw-literal


	  Array.from(iteratorWithReturn, function () {
	    throw 2;
	  });
	} catch (error) {
	  /* empty */
	}

	var checkCorrectnessOfIteration$4 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;

	  try {
	    var object = {};

	    object[ITERATOR$6] = function () {
	      return {
	        next: function () {
	          return {
	            done: ITERATION_SUPPORT = true
	          };
	        }
	      };
	    };

	    exec(object);
	  } catch (error) {
	    /* empty */
	  }

	  return ITERATION_SUPPORT;
	};

	var $$1N = _export;
	var from = arrayFrom$1;
	var checkCorrectnessOfIteration$3 = checkCorrectnessOfIteration$4;
	var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$3(function (iterable) {
	  Array.from(iterable);
	}); // `Array.from` method
	// https://tc39.github.io/ecma262/#sec-array.from

	$$1N({
	  target: 'Array',
	  stat: true,
	  forced: INCORRECT_ITERATION$1
	}, {
	  from: from
	});

	var $$1M = _export;
	var isArray$3 = isArray$7; // `Array.isArray` method
	// https://tc39.github.io/ecma262/#sec-array.isarray

	$$1M({
	  target: 'Array',
	  stat: true
	}, {
	  isArray: isArray$3
	});

	var $$1L = _export;
	var fails$w = fails$V;
	var createProperty$2 = createProperty$7;
	var ISNT_GENERIC = fails$w(function () {
	  function F() {
	    /* empty */
	  }

	  return !(Array.of.call(F) instanceof F);
	}); // `Array.of` method
	// https://tc39.github.io/ecma262/#sec-array.of
	// WebKit Array.of isn't generic

	$$1L({
	  target: 'Array',
	  stat: true,
	  forced: ISNT_GENERIC
	}, {
	  of: function of()
	  /* ...args */
	  {
	    var index = 0;
	    var argumentsLength = arguments.length;
	    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);

	    while (argumentsLength > index) createProperty$2(result, index, arguments[index++]);

	    result.length = argumentsLength;
	    return result;
	  }
	});

	var $$1K = _export;
	var fails$v = fails$V;
	var isArray$2 = isArray$7;
	var isObject$f = isObject$y;
	var toObject$b = toObject$n;
	var toLength$n = toLength$t;
	var createProperty$1 = createProperty$7;
	var arraySpeciesCreate$3 = arraySpeciesCreate$5;
	var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
	var wellKnownSymbol$h = wellKnownSymbol$u;
	var V8_VERSION$1 = engineV8Version;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$h('isConcatSpreadable');
	var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
	// deoptimization and serious performance degradation
	// https://github.com/zloirock/core-js/issues/679

	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$v(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$3('concat');

	var isConcatSpreadable = function (O) {
	  if (!isObject$f(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$2(O);
	};

	var FORCED$j = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.concat
	// with adding support of @@isConcatSpreadable and @@species

	$$1K({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$j
	}, {
	  concat: function concat(arg) {
	    // eslint-disable-line no-unused-vars
	    var O = toObject$b(this);
	    var A = arraySpeciesCreate$3(O, 0);
	    var n = 0;
	    var i, k, length, len, E;

	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];

	      if (isConcatSpreadable(E)) {
	        len = toLength$n(E.length);
	        if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty$1(A, n++, E);
	      }
	    }

	    A.length = n;
	    return A;
	  }
	});

	var toObject$a = toObject$n;
	var toAbsoluteIndex$5 = toAbsoluteIndex$8;
	var toLength$m = toLength$t;
	var min$6 = Math.min; // `Array.prototype.copyWithin` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

	var arrayCopyWithin = [].copyWithin || function copyWithin(target
	/* = 0 */
	, start
	/* = 0, end = @length */
	) {
	  var O = toObject$a(this);
	  var len = toLength$m(O.length);
	  var to = toAbsoluteIndex$5(target, len);
	  var from = toAbsoluteIndex$5(start, len);
	  var end = arguments.length > 2 ? arguments[2] : undefined;
	  var count = min$6((end === undefined ? len : toAbsoluteIndex$5(end, len)) - from, len - to);
	  var inc = 1;

	  if (from < to && to < from + count) {
	    inc = -1;
	    from += count - 1;
	    to += count - 1;
	  }

	  while (count-- > 0) {
	    if (from in O) O[to] = O[from];else delete O[to];
	    to += inc;
	    from += inc;
	  }

	  return O;
	};

	var wellKnownSymbol$g = wellKnownSymbol$u;
	var create$6 = objectCreate;
	var definePropertyModule$4 = objectDefineProperty;
	var UNSCOPABLES = wellKnownSymbol$g('unscopables');
	var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	if (ArrayPrototype[UNSCOPABLES] == undefined) {
	  definePropertyModule$4.f(ArrayPrototype, UNSCOPABLES, {
	    configurable: true,
	    value: create$6(null)
	  });
	} // add a key to Array.prototype[@@unscopables]


	var addToUnscopables$8 = function (key) {
	  ArrayPrototype[UNSCOPABLES][key] = true;
	};

	var $$1J = _export;
	var copyWithin = arrayCopyWithin;
	var addToUnscopables$7 = addToUnscopables$8; // `Array.prototype.copyWithin` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

	$$1J({
	  target: 'Array',
	  proto: true
	}, {
	  copyWithin: copyWithin
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables$7('copyWithin');

	var $$1I = _export;
	var $every$1 = arrayIteration.every;
	var arrayMethodIsStrict$7 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$b = arrayMethodUsesToLength$e;
	var STRICT_METHOD$7 = arrayMethodIsStrict$7('every');
	var USES_TO_LENGTH$b = arrayMethodUsesToLength$b('every'); // `Array.prototype.every` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.every

	$$1I({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$7 || !USES_TO_LENGTH$b
	}, {
	  every: function every(callbackfn
	  /* , thisArg */
	  ) {
	    return $every$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var toObject$9 = toObject$n;
	var toAbsoluteIndex$4 = toAbsoluteIndex$8;
	var toLength$l = toLength$t; // `Array.prototype.fill` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.fill

	var arrayFill$1 = function fill(value
	/* , start = 0, end = @length */
	) {
	  var O = toObject$9(this);
	  var length = toLength$l(O.length);
	  var argumentsLength = arguments.length;
	  var index = toAbsoluteIndex$4(argumentsLength > 1 ? arguments[1] : undefined, length);
	  var end = argumentsLength > 2 ? arguments[2] : undefined;
	  var endPos = end === undefined ? length : toAbsoluteIndex$4(end, length);

	  while (endPos > index) O[index++] = value;

	  return O;
	};

	var $$1H = _export;
	var fill = arrayFill$1;
	var addToUnscopables$6 = addToUnscopables$8; // `Array.prototype.fill` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.fill

	$$1H({
	  target: 'Array',
	  proto: true
	}, {
	  fill: fill
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables$6('fill');

	var $$1G = _export;
	var $filter$1 = arrayIteration.filter;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
	var arrayMethodUsesToLength$a = arrayMethodUsesToLength$e;
	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$2('filter'); // Edge 14- issue

	var USES_TO_LENGTH$a = arrayMethodUsesToLength$a('filter'); // `Array.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.filter
	// with adding support of @@species

	$$1G({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$a
	}, {
	  filter: function filter(callbackfn
	  /* , thisArg */
	  ) {
	    return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1F = _export;
	var $find$1 = arrayIteration.find;
	var addToUnscopables$5 = addToUnscopables$8;
	var arrayMethodUsesToLength$9 = arrayMethodUsesToLength$e;
	var FIND = 'find';
	var SKIPS_HOLES$1 = true;
	var USES_TO_LENGTH$9 = arrayMethodUsesToLength$9(FIND); // Shouldn't skip holes

	if (FIND in []) Array(1)[FIND](function () {
	  SKIPS_HOLES$1 = false;
	}); // `Array.prototype.find` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.find

	$$1F({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES$1 || !USES_TO_LENGTH$9
	}, {
	  find: function find(callbackfn
	  /* , that = undefined */
	  ) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables$5(FIND);

	var $$1E = _export;
	var $findIndex$1 = arrayIteration.findIndex;
	var addToUnscopables$4 = addToUnscopables$8;
	var arrayMethodUsesToLength$8 = arrayMethodUsesToLength$e;
	var FIND_INDEX = 'findIndex';
	var SKIPS_HOLES = true;
	var USES_TO_LENGTH$8 = arrayMethodUsesToLength$8(FIND_INDEX); // Shouldn't skip holes

	if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
	  SKIPS_HOLES = false;
	}); // `Array.prototype.findIndex` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.findindex

	$$1E({
	  target: 'Array',
	  proto: true,
	  forced: SKIPS_HOLES || !USES_TO_LENGTH$8
	}, {
	  findIndex: function findIndex(callbackfn
	  /* , that = undefined */
	  ) {
	    return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables$4(FIND_INDEX);

	var isArray$1 = isArray$7;
	var toLength$k = toLength$t;
	var bind$6 = functionBindContext; // `FlattenIntoArray` abstract operation
	// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

	var flattenIntoArray$2 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
	  var targetIndex = start;
	  var sourceIndex = 0;
	  var mapFn = mapper ? bind$6(mapper, thisArg, 3) : false;
	  var element;

	  while (sourceIndex < sourceLen) {
	    if (sourceIndex in source) {
	      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

	      if (depth > 0 && isArray$1(element)) {
	        targetIndex = flattenIntoArray$2(target, original, element, toLength$k(element.length), targetIndex, depth - 1) - 1;
	      } else {
	        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
	        target[targetIndex] = element;
	      }

	      targetIndex++;
	    }

	    sourceIndex++;
	  }

	  return targetIndex;
	};

	var flattenIntoArray_1 = flattenIntoArray$2;

	var $$1D = _export;
	var flattenIntoArray$1 = flattenIntoArray_1;
	var toObject$8 = toObject$n;
	var toLength$j = toLength$t;
	var toInteger$7 = toInteger$c;
	var arraySpeciesCreate$2 = arraySpeciesCreate$5; // `Array.prototype.flat` method
	// https://github.com/tc39/proposal-flatMap

	$$1D({
	  target: 'Array',
	  proto: true
	}, {
	  flat: function flat()
	  /* depthArg = 1 */
	  {
	    var depthArg = arguments.length ? arguments[0] : undefined;
	    var O = toObject$8(this);
	    var sourceLen = toLength$j(O.length);
	    var A = arraySpeciesCreate$2(O, 0);
	    A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger$7(depthArg));
	    return A;
	  }
	});

	var $$1C = _export;
	var flattenIntoArray = flattenIntoArray_1;
	var toObject$7 = toObject$n;
	var toLength$i = toLength$t;
	var aFunction$9 = aFunction$f;
	var arraySpeciesCreate$1 = arraySpeciesCreate$5; // `Array.prototype.flatMap` method
	// https://github.com/tc39/proposal-flatMap

	$$1C({
	  target: 'Array',
	  proto: true
	}, {
	  flatMap: function flatMap(callbackfn
	  /* , thisArg */
	  ) {
	    var O = toObject$7(this);
	    var sourceLen = toLength$i(O.length);
	    var A;
	    aFunction$9(callbackfn);
	    A = arraySpeciesCreate$1(O, 0);
	    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    return A;
	  }
	});

	var $$1B = _export;
	var forEach$1 = arrayForEach; // `Array.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.foreach

	$$1B({
	  target: 'Array',
	  proto: true,
	  forced: [].forEach != forEach$1
	}, {
	  forEach: forEach$1
	});

	var $$1A = _export;
	var $includes$1 = arrayIncludes.includes;
	var addToUnscopables$3 = addToUnscopables$8;
	var arrayMethodUsesToLength$7 = arrayMethodUsesToLength$e;
	var USES_TO_LENGTH$7 = arrayMethodUsesToLength$7('indexOf', {
	  ACCESSORS: true,
	  1: 0
	}); // `Array.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.includes

	$$1A({
	  target: 'Array',
	  proto: true,
	  forced: !USES_TO_LENGTH$7
	}, {
	  includes: function includes(el
	  /* , fromIndex = 0 */
	  ) {
	    return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	}); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables$3('includes');

	var $$1z = _export;
	var $indexOf$1 = arrayIncludes.indexOf;
	var arrayMethodIsStrict$6 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$6 = arrayMethodUsesToLength$e;
	var nativeIndexOf = [].indexOf;
	var NEGATIVE_ZERO$1 = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
	var STRICT_METHOD$6 = arrayMethodIsStrict$6('indexOf');
	var USES_TO_LENGTH$6 = arrayMethodUsesToLength$6('indexOf', {
	  ACCESSORS: true,
	  1: 0
	}); // `Array.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.indexof

	$$1z({
	  target: 'Array',
	  proto: true,
	  forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$6 || !USES_TO_LENGTH$6
	}, {
	  indexOf: function indexOf(searchElement
	  /* , fromIndex = 0 */
	  ) {
	    return NEGATIVE_ZERO$1 // convert -0 to +0
	    ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf$1(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1y = _export;
	var IndexedObject$1 = indexedObject;
	var toIndexedObject$3 = toIndexedObject$d;
	var arrayMethodIsStrict$5 = arrayMethodIsStrict$9;
	var nativeJoin = [].join;
	var ES3_STRINGS = IndexedObject$1 != Object;
	var STRICT_METHOD$5 = arrayMethodIsStrict$5('join', ','); // `Array.prototype.join` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.join

	$$1y({
	  target: 'Array',
	  proto: true,
	  forced: ES3_STRINGS || !STRICT_METHOD$5
	}, {
	  join: function join(separator) {
	    return nativeJoin.call(toIndexedObject$3(this), separator === undefined ? ',' : separator);
	  }
	});

	var toIndexedObject$2 = toIndexedObject$d;
	var toInteger$6 = toInteger$c;
	var toLength$h = toLength$t;
	var arrayMethodIsStrict$4 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$5 = arrayMethodUsesToLength$e;
	var min$5 = Math.min;
	var nativeLastIndexOf = [].lastIndexOf;
	var NEGATIVE_ZERO = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
	var STRICT_METHOD$4 = arrayMethodIsStrict$4('lastIndexOf'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

	var USES_TO_LENGTH$5 = arrayMethodUsesToLength$5('indexOf', {
	  ACCESSORS: true,
	  1: 0
	});
	var FORCED$i = NEGATIVE_ZERO || !STRICT_METHOD$4 || !USES_TO_LENGTH$5; // `Array.prototype.lastIndexOf` method implementation
	// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

	var arrayLastIndexOf = FORCED$i ? function lastIndexOf(searchElement
	/* , fromIndex = @[*-1] */
	) {
	  // convert -0 to +0
	  if (NEGATIVE_ZERO) return nativeLastIndexOf.apply(this, arguments) || 0;
	  var O = toIndexedObject$2(this);
	  var length = toLength$h(O.length);
	  var index = length - 1;
	  if (arguments.length > 1) index = min$5(index, toInteger$6(arguments[1]));
	  if (index < 0) index = length + index;

	  for (; index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;

	  return -1;
	} : nativeLastIndexOf;

	var $$1x = _export;
	var lastIndexOf = arrayLastIndexOf; // `Array.prototype.lastIndexOf` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

	$$1x({
	  target: 'Array',
	  proto: true,
	  forced: lastIndexOf !== [].lastIndexOf
	}, {
	  lastIndexOf: lastIndexOf
	});

	var $$1w = _export;
	var $map$1 = arrayIteration.map;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
	var arrayMethodUsesToLength$4 = arrayMethodUsesToLength$e;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('map'); // FF49- issue

	var USES_TO_LENGTH$4 = arrayMethodUsesToLength$4('map'); // `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species

	$$1w({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$4
	}, {
	  map: function map(callbackfn
	  /* , thisArg */
	  ) {
	    return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var aFunction$8 = aFunction$f;
	var toObject$6 = toObject$n;
	var IndexedObject = indexedObject;
	var toLength$g = toLength$t; // `Array.prototype.{ reduce, reduceRight }` methods implementation

	var createMethod$3 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$8(callbackfn);
	    var O = toObject$6(that);
	    var self = IndexedObject(O);
	    var length = toLength$g(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }

	      index += i;

	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }

	    for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }

	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$3(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$3(true)
	};

	var $$1v = _export;
	var $reduce$1 = arrayReduce.left;
	var arrayMethodIsStrict$3 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$3 = arrayMethodUsesToLength$e;
	var STRICT_METHOD$3 = arrayMethodIsStrict$3('reduce');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength$3('reduce', {
	  1: 0
	}); // `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce

	$$1v({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$3 || !USES_TO_LENGTH$3
	}, {
	  reduce: function reduce(callbackfn
	  /* , initialValue */
	  ) {
	    return $reduce$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1u = _export;
	var $reduceRight$1 = arrayReduce.right;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$2 = arrayMethodUsesToLength$e;
	var STRICT_METHOD$2 = arrayMethodIsStrict$2('reduceRight'); // For preventing possible almost infinite loop in non-standard implementations, test the forward version of the method

	var USES_TO_LENGTH$2 = arrayMethodUsesToLength$2('reduce', {
	  1: 0
	}); // `Array.prototype.reduceRight` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduceright

	$$1u({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$2 || !USES_TO_LENGTH$2
	}, {
	  reduceRight: function reduceRight(callbackfn
	  /* , initialValue */
	  ) {
	    return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1t = _export;
	var isArray = isArray$7;
	var nativeReverse = [].reverse;
	var test$1 = [1, 2]; // `Array.prototype.reverse` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
	// fix for Safari 12.0 bug
	// https://bugs.webkit.org/show_bug.cgi?id=188794

	$$1t({
	  target: 'Array',
	  proto: true,
	  forced: String(test$1) === String(test$1.reverse())
	}, {
	  reverse: function reverse() {
	    // eslint-disable-next-line no-self-assign
	    if (isArray(this)) this.length = this.length;
	    return nativeReverse.call(this);
	  }
	});

	var $$1s = _export;
	var $some$1 = arrayIteration.some;
	var arrayMethodIsStrict$1 = arrayMethodIsStrict$9;
	var arrayMethodUsesToLength$1 = arrayMethodUsesToLength$e;
	var STRICT_METHOD$1 = arrayMethodIsStrict$1('some');
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength$1('some'); // `Array.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.some

	$$1s({
	  target: 'Array',
	  proto: true,
	  forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$1
	}, {
	  some: function some(callbackfn
	  /* , thisArg */
	  ) {
	    return $some$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1r = _export;
	var aFunction$7 = aFunction$f;
	var toObject$5 = toObject$n;
	var fails$u = fails$V;
	var arrayMethodIsStrict = arrayMethodIsStrict$9;
	var test = [];
	var nativeSort = test.sort; // IE8-

	var FAILS_ON_UNDEFINED = fails$u(function () {
	  test.sort(undefined);
	}); // V8 bug

	var FAILS_ON_NULL = fails$u(function () {
	  test.sort(null);
	}); // Old WebKit

	var STRICT_METHOD = arrayMethodIsStrict('sort');
	var FORCED$h = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD; // `Array.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.sort

	$$1r({
	  target: 'Array',
	  proto: true,
	  forced: FORCED$h
	}, {
	  sort: function sort(comparefn) {
	    return comparefn === undefined ? nativeSort.call(toObject$5(this)) : nativeSort.call(toObject$5(this), aFunction$7(comparefn));
	  }
	});

	var $$1q = _export;
	var toAbsoluteIndex$3 = toAbsoluteIndex$8;
	var toInteger$5 = toInteger$c;
	var toLength$f = toLength$t;
	var toObject$4 = toObject$n;
	var arraySpeciesCreate = arraySpeciesCreate$5;
	var createProperty = createProperty$7;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
	var arrayMethodUsesToLength = arrayMethodUsesToLength$e;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH = arrayMethodUsesToLength('splice', {
	  ACCESSORS: true,
	  0: 0,
	  1: 2
	});
	var max$1 = Math.max;
	var min$4 = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species

	$$1q({
	  target: 'Array',
	  proto: true,
	  forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH
	}, {
	  splice: function splice(start, deleteCount
	  /* , ...items */
	  ) {
	    var O = toObject$4(this);
	    var len = toLength$f(O.length);
	    var actualStart = toAbsoluteIndex$3(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;

	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$4(max$1(toInteger$5(deleteCount), 0), len - actualStart);
	    }

	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }

	    A = arraySpeciesCreate(O, actualDeleteCount);

	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }

	    A.length = actualDeleteCount;

	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];else delete O[to];
	      }

	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];else delete O[to];
	      }
	    }

	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }

	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var getBuiltIn$7 = getBuiltIn$c;
	var definePropertyModule$3 = objectDefineProperty;
	var wellKnownSymbol$f = wellKnownSymbol$u;
	var DESCRIPTORS$b = descriptors;
	var SPECIES$3 = wellKnownSymbol$f('species');

	var setSpecies$6 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$7(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule$3.f;

	  if (DESCRIPTORS$b && Constructor && !Constructor[SPECIES$3]) {
	    defineProperty(Constructor, SPECIES$3, {
	      configurable: true,
	      get: function () {
	        return this;
	      }
	    });
	  }
	};

	var setSpecies$5 = setSpecies$6; // `Array[@@species]` getter
	// https://tc39.github.io/ecma262/#sec-get-array-@@species

	setSpecies$5('Array');

	// in popular engines, so it's moved to a separate module

	var addToUnscopables$2 = addToUnscopables$8;
	addToUnscopables$2('flat');

	// in popular engines, so it's moved to a separate module

	var addToUnscopables$1 = addToUnscopables$8;
	addToUnscopables$1('flatMap');

	var getPrototypeOf$5 = objectGetPrototypeOf$1;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$f;
	var has$6 = has$k;
	var wellKnownSymbol$e = wellKnownSymbol$u;
	var ITERATOR$5 = wellKnownSymbol$e('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;

	var returnThis$2 = function () {
	  return this;
	}; // `%IteratorPrototype%` object
	// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


	var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

	if ([].keys) {
	  arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$5(getPrototypeOf$5(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
	  }
	}

	if (IteratorPrototype$2 == undefined) IteratorPrototype$2 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

	if (!has$6(IteratorPrototype$2, ITERATOR$5)) {
	  createNonEnumerableProperty$8(IteratorPrototype$2, ITERATOR$5, returnThis$2);
	}

	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$2,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
	var create$5 = objectCreate;
	var createPropertyDescriptor$3 = createPropertyDescriptor$8;
	var setToStringTag$8 = setToStringTag$a;
	var Iterators$2 = iterators;

	var returnThis$1 = function () {
	  return this;
	};

	var createIteratorConstructor$3 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$5(IteratorPrototype$1, {
	    next: createPropertyDescriptor$3(1, next)
	  });
	  setToStringTag$8(IteratorConstructor, TO_STRING_TAG, false);
	  Iterators$2[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$1p = _export;
	var createIteratorConstructor$2 = createIteratorConstructor$3;
	var getPrototypeOf$4 = objectGetPrototypeOf$1;
	var setPrototypeOf$4 = objectSetPrototypeOf$1;
	var setToStringTag$7 = setToStringTag$a;
	var createNonEnumerableProperty$7 = createNonEnumerableProperty$f;
	var redefine$c = redefine$g.exports;
	var wellKnownSymbol$d = wellKnownSymbol$u;
	var Iterators$1 = iterators;
	var IteratorsCore = iteratorsCore;
	var IteratorPrototype = IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$4 = wellKnownSymbol$d('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';

	var returnThis = function () {
	  return this;
	};

	var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor$2(IteratorConstructor, NAME, next);

	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

	    switch (KIND) {
	      case KEYS:
	        return function keys() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case VALUES:
	        return function values() {
	          return new IteratorConstructor(this, KIND);
	        };

	      case ENTRIES:
	        return function entries() {
	          return new IteratorConstructor(this, KIND);
	        };
	    }

	    return function () {
	      return new IteratorConstructor(this);
	    };
	  };

	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY; // fix native

	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$4(anyNativeIterator.call(new Iterable()));

	    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      if (getPrototypeOf$4(CurrentIteratorPrototype) !== IteratorPrototype) {
	        if (setPrototypeOf$4) {
	          setPrototypeOf$4(CurrentIteratorPrototype, IteratorPrototype);
	        } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
	          createNonEnumerableProperty$7(CurrentIteratorPrototype, ITERATOR$4, returnThis);
	        }
	      } // Set @@toStringTag to native iterators


	      setToStringTag$7(CurrentIteratorPrototype, TO_STRING_TAG, true);
	    }
	  } // fix Array#{values, @@iterator}.name in V8 / FF


	  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    INCORRECT_VALUES_NAME = true;

	    defaultIterator = function values() {
	      return nativeIterator.call(this);
	    };
	  } // define iterator


	  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
	    createNonEnumerableProperty$7(IterablePrototype, ITERATOR$4, defaultIterator);
	  }

	  Iterators$1[NAME] = defaultIterator; // export additional methods

	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        redefine$c(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$1p({
	      target: NAME,
	      proto: true,
	      forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
	    }, methods);
	  }

	  return methods;
	};

	var toIndexedObject$1 = toIndexedObject$d;
	var addToUnscopables = addToUnscopables$8;
	var Iterators = iterators;
	var InternalStateModule$9 = internalState;
	var defineIterator$2 = defineIterator$3;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$a = InternalStateModule$9.set;
	var getInternalState$6 = InternalStateModule$9.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.entries
	// `Array.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.keys
	// `Array.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.values
	// `Array.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
	// `CreateArrayIterator` internal method
	// https://tc39.github.io/ecma262/#sec-createarrayiterator

	var es_array_iterator = defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$a(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$1(iterated),
	    // target
	    index: 0,
	    // next index
	    kind: kind // kind

	  }); // `%ArrayIteratorPrototype%.next` method
	  // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
	}, function () {
	  var state = getInternalState$6(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;

	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return {
	      value: undefined,
	      done: true
	    };
	  }

	  if (kind == 'keys') return {
	    value: index,
	    done: false
	  };
	  if (kind == 'values') return {
	    value: target[index],
	    done: false
	  };
	  return {
	    value: [index, target[index]],
	    done: false
	  };
	}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
	// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
	// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

	Iterators.Arguments = Iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

	var $$1o = _export;
	var toAbsoluteIndex$2 = toAbsoluteIndex$8;
	var fromCharCode = String.fromCharCode;
	var nativeFromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

	var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1; // `String.fromCodePoint` method
	// https://tc39.github.io/ecma262/#sec-string.fromcodepoint

	$$1o({
	  target: 'String',
	  stat: true,
	  forced: INCORRECT_LENGTH
	}, {
	  fromCodePoint: function fromCodePoint(x) {
	    // eslint-disable-line no-unused-vars
	    var elements = [];
	    var length = arguments.length;
	    var i = 0;
	    var code;

	    while (length > i) {
	      code = +arguments[i++];
	      if (toAbsoluteIndex$2(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
	      elements.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
	    }

	    return elements.join('');
	  }
	});

	var $$1n = _export;
	var toIndexedObject = toIndexedObject$d;
	var toLength$e = toLength$t; // `String.raw` method
	// https://tc39.github.io/ecma262/#sec-string.raw

	$$1n({
	  target: 'String',
	  stat: true
	}, {
	  raw: function raw(template) {
	    var rawTemplate = toIndexedObject(template.raw);
	    var literalSegments = toLength$e(rawTemplate.length);
	    var argumentsLength = arguments.length;
	    var elements = [];
	    var i = 0;

	    while (literalSegments > i) {
	      elements.push(String(rawTemplate[i++]));
	      if (i < argumentsLength) elements.push(String(arguments[i]));
	    }

	    return elements.join('');
	  }
	});

	var toInteger$4 = toInteger$c;
	var requireObjectCoercible$b = requireObjectCoercible$f; // `String.prototype.{ codePointAt, at }` methods implementation

	var createMethod$2 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible$b($this));
	    var position = toInteger$4(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$2(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$2(true)
	};

	var $$1m = _export;
	var codeAt$1 = stringMultibyte.codeAt; // `String.prototype.codePointAt` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.codepointat

	$$1m({
	  target: 'String',
	  proto: true
	}, {
	  codePointAt: function codePointAt(pos) {
	    return codeAt$1(this, pos);
	  }
	});

	var isObject$e = isObject$y;
	var classof$a = classofRaw$1;
	var wellKnownSymbol$c = wellKnownSymbol$u;
	var MATCH$2 = wellKnownSymbol$c('match'); // `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp

	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject$e(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$a(it) == 'RegExp');
	};

	var isRegExp$3 = isRegexp;

	var notARegexp = function (it) {
	  if (isRegExp$3(it)) {
	    throw TypeError("The method doesn't accept regular expressions");
	  }

	  return it;
	};

	var wellKnownSymbol$b = wellKnownSymbol$u;
	var MATCH$1 = wellKnownSymbol$b('match');

	var correctIsRegexpLogic = function (METHOD_NAME) {
	  var regexp = /./;

	  try {
	    '/./'[METHOD_NAME](regexp);
	  } catch (e) {
	    try {
	      regexp[MATCH$1] = false;
	      return '/./'[METHOD_NAME](regexp);
	    } catch (f) {
	      /* empty */
	    }
	  }

	  return false;
	};

	var $$1l = _export;
	var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
	var toLength$d = toLength$t;
	var notARegExp$2 = notARegexp;
	var requireObjectCoercible$a = requireObjectCoercible$f;
	var correctIsRegExpLogic$2 = correctIsRegexpLogic;
	var nativeEndsWith = ''.endsWith;
	var min$3 = Math.min;
	var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$2('endsWith'); // https://github.com/zloirock/core-js/pull/702

	var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
	  var descriptor = getOwnPropertyDescriptor$4(String.prototype, 'endsWith');
	  return descriptor && !descriptor.writable;
	}(); // `String.prototype.endsWith` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.endswith

	$$1l({
	  target: 'String',
	  proto: true,
	  forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
	}, {
	  endsWith: function endsWith(searchString
	  /* , endPosition = @length */
	  ) {
	    var that = String(requireObjectCoercible$a(this));
	    notARegExp$2(searchString);
	    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
	    var len = toLength$d(that.length);
	    var end = endPosition === undefined ? len : min$3(toLength$d(endPosition), len);
	    var search = String(searchString);
	    return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
	  }
	});

	var $$1k = _export;
	var notARegExp$1 = notARegexp;
	var requireObjectCoercible$9 = requireObjectCoercible$f;
	var correctIsRegExpLogic$1 = correctIsRegexpLogic; // `String.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.includes

	$$1k({
	  target: 'String',
	  proto: true,
	  forced: !correctIsRegExpLogic$1('includes')
	}, {
	  includes: function includes(searchString
	  /* , position = 0 */
	  ) {
	    return !!~String(requireObjectCoercible$9(this)).indexOf(notARegExp$1(searchString), arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var anObject$o = anObject$x; // `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

	var regexpFlags$1 = function () {
	  var that = anObject$o(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	var regexpStickyHelpers = {};

	var fails$t = fails$V; // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.

	function RE(s, f) {
	  return RegExp(s, f);
	}

	regexpStickyHelpers.UNSUPPORTED_Y = fails$t(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});
	regexpStickyHelpers.BROKEN_CARET = fails$t(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpFlags = regexpFlags$1;
	var stickyHelpers$1 = regexpStickyHelpers;
	var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.

	var nativeReplace = String.prototype.replace;
	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	}();

	var UNSUPPORTED_Y$3 = stickyHelpers$1.UNSUPPORTED_Y || stickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$3;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y$3 && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');

	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      } // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.


	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }

	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }

	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec$3 = patchedExec;

	var $$1j = _export;
	var exec = regexpExec$3;
	$$1j({
	  target: 'RegExp',
	  proto: true,
	  forced: /./.exec !== exec
	}, {
	  exec: exec
	});

	var redefine$b = redefine$g.exports;
	var fails$s = fails$V;
	var wellKnownSymbol$a = wellKnownSymbol$u;
	var regexpExec$2 = regexpExec$3;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$f;
	var SPECIES$2 = wellKnownSymbol$a('species');
	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$s(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;

	  re.exec = function () {
	    var result = [];
	    result.groups = {
	      a: '7'
	    };
	    return result;
	  };

	  return ''.replace(re, '$<a>') !== '7';
	}); // IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

	var REPLACE_KEEPS_$0 = function () {
	  return 'a'.replace(/./, '$0') === '$0';
	}();

	var REPLACE = wellKnownSymbol$a('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }

	  return false;
	}(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper


	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$s(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;

	  re.exec = function () {
	    return originalExec.apply(this, arguments);
	  };

	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol$a(KEY);
	  var DELEGATES_TO_SYMBOL = !fails$s(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};

	    O[SYMBOL] = function () {
	      return 7;
	    };

	    return ''[KEY](O) != 7;
	  });
	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$s(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.

	      re.constructor = {};

	      re.constructor[SPECIES$2] = function () {
	        return re;
	      };

	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () {
	      execCalled = true;
	      return null;
	    };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec$2) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return {
	            done: true,
	            value: nativeRegExpMethod.call(regexp, str, arg2)
	          };
	        }

	        return {
	          done: true,
	          value: nativeMethod.call(str, regexp, arg2)
	        };
	      }

	      return {
	        done: false
	      };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];
	    redefine$b(String.prototype, KEY, stringMethod);
	    redefine$b(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	    ? function (string, arg) {
	      return regexMethod.call(string, this, arg);
	    } // 21.2.5.6 RegExp.prototype[@@match](string)
	    // 21.2.5.9 RegExp.prototype[@@search](string)
	    : function (string) {
	      return regexMethod.call(string, this);
	    });
	  }

	  if (sham) createNonEnumerableProperty$6(RegExp.prototype[SYMBOL], 'sham', true);
	};

	var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex

	var advanceStringIndex$4 = function (S, index, unicode) {
	  return index + (unicode ? charAt$1(S, index).length : 1);
	};

	var classof$9 = classofRaw$1;
	var regexpExec$1 = regexpExec$3; // `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec

	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;

	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);

	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }

	    return result;
	  }

	  if (classof$9(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec$1.call(R, S);
	};

	var fixRegExpWellKnownSymbolLogic$3 = fixRegexpWellKnownSymbolLogic;
	var anObject$n = anObject$x;
	var toLength$c = toLength$t;
	var requireObjectCoercible$8 = requireObjectCoercible$f;
	var advanceStringIndex$3 = advanceStringIndex$4;
	var regExpExec$3 = regexpExecAbstract; // @@match logic

	fixRegExpWellKnownSymbolLogic$3('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
	  return [// `String.prototype.match` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.match
	  function match(regexp) {
	    var O = requireObjectCoercible$8(this);
	    var matcher = regexp == undefined ? undefined : regexp[MATCH];
	    return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, // `RegExp.prototype[@@match]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
	  function (regexp) {
	    var res = maybeCallNative(nativeMatch, regexp, this);
	    if (res.done) return res.value;
	    var rx = anObject$n(regexp);
	    var S = String(this);
	    if (!rx.global) return regExpExec$3(rx, S);
	    var fullUnicode = rx.unicode;
	    rx.lastIndex = 0;
	    var A = [];
	    var n = 0;
	    var result;

	    while ((result = regExpExec$3(rx, S)) !== null) {
	      var matchStr = String(result[0]);
	      A[n] = matchStr;
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$3(S, toLength$c(rx.lastIndex), fullUnicode);
	      n++;
	    }

	    return n === 0 ? null : A;
	  }];
	});

	var anObject$m = anObject$x;
	var aFunction$6 = aFunction$f;
	var wellKnownSymbol$9 = wellKnownSymbol$u;
	var SPECIES$1 = wellKnownSymbol$9('species'); // `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor

	var speciesConstructor$9 = function (O, defaultConstructor) {
	  var C = anObject$m(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$m(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction$6(S);
	};

	var $$1i = _export;
	var createIteratorConstructor$1 = createIteratorConstructor$3;
	var requireObjectCoercible$7 = requireObjectCoercible$f;
	var toLength$b = toLength$t;
	var aFunction$5 = aFunction$f;
	var anObject$l = anObject$x;
	var classof$8 = classofRaw$1;
	var isRegExp$2 = isRegexp;
	var getRegExpFlags = regexpFlags$1;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$f;
	var fails$r = fails$V;
	var wellKnownSymbol$8 = wellKnownSymbol$u;
	var speciesConstructor$8 = speciesConstructor$9;
	var advanceStringIndex$2 = advanceStringIndex$4;
	var InternalStateModule$8 = internalState;
	var IS_PURE$1 = isPure;
	var MATCH_ALL = wellKnownSymbol$8('matchAll');
	var REGEXP_STRING = 'RegExp String';
	var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
	var setInternalState$9 = InternalStateModule$8.set;
	var getInternalState$5 = InternalStateModule$8.getterFor(REGEXP_STRING_ITERATOR);
	var RegExpPrototype$3 = RegExp.prototype;
	var regExpBuiltinExec = RegExpPrototype$3.exec;
	var nativeMatchAll = ''.matchAll;
	var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails$r(function () {
	  'a'.matchAll(/./);
	});

	var regExpExec$2 = function (R, S) {
	  var exec = R.exec;
	  var result;

	  if (typeof exec == 'function') {
	    result = exec.call(R, S);
	    if (typeof result != 'object') throw TypeError('Incorrect exec result');
	    return result;
	  }

	  return regExpBuiltinExec.call(R, S);
	}; // eslint-disable-next-line max-len


	var $RegExpStringIterator = createIteratorConstructor$1(function RegExpStringIterator(regexp, string, global, fullUnicode) {
	  setInternalState$9(this, {
	    type: REGEXP_STRING_ITERATOR,
	    regexp: regexp,
	    string: string,
	    global: global,
	    unicode: fullUnicode,
	    done: false
	  });
	}, REGEXP_STRING, function next() {
	  var state = getInternalState$5(this);
	  if (state.done) return {
	    value: undefined,
	    done: true
	  };
	  var R = state.regexp;
	  var S = state.string;
	  var match = regExpExec$2(R, S);
	  if (match === null) return {
	    value: undefined,
	    done: state.done = true
	  };

	  if (state.global) {
	    if (String(match[0]) == '') R.lastIndex = advanceStringIndex$2(S, toLength$b(R.lastIndex), state.unicode);
	    return {
	      value: match,
	      done: false
	    };
	  }

	  state.done = true;
	  return {
	    value: match,
	    done: false
	  };
	});

	var $matchAll = function (string) {
	  var R = anObject$l(this);
	  var S = String(string);
	  var C, flagsValue, flags, matcher, global, fullUnicode;
	  C = speciesConstructor$8(R, RegExp);
	  flagsValue = R.flags;

	  if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$3)) {
	    flagsValue = getRegExpFlags.call(R);
	  }

	  flags = flagsValue === undefined ? '' : String(flagsValue);
	  matcher = new C(C === RegExp ? R.source : R, flags);
	  global = !!~flags.indexOf('g');
	  fullUnicode = !!~flags.indexOf('u');
	  matcher.lastIndex = toLength$b(R.lastIndex);
	  return new $RegExpStringIterator(matcher, S, global, fullUnicode);
	}; // `String.prototype.matchAll` method
	// https://github.com/tc39/proposal-string-matchall


	$$1i({
	  target: 'String',
	  proto: true,
	  forced: WORKS_WITH_NON_GLOBAL_REGEX
	}, {
	  matchAll: function matchAll(regexp) {
	    var O = requireObjectCoercible$7(this);
	    var flags, S, matcher, rx;

	    if (regexp != null) {
	      if (isRegExp$2(regexp)) {
	        flags = String(requireObjectCoercible$7('flags' in RegExpPrototype$3 ? regexp.flags : getRegExpFlags.call(regexp)));
	        if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
	      }

	      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
	      matcher = regexp[MATCH_ALL];
	      if (matcher === undefined && IS_PURE$1 && classof$8(regexp) == 'RegExp') matcher = $matchAll;
	      if (matcher != null) return aFunction$5(matcher).call(regexp, O);
	    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);

	    S = String(O);
	    rx = new RegExp(regexp, 'g');
	    return rx[MATCH_ALL](S);
	  }
	});
	MATCH_ALL in RegExpPrototype$3 || createNonEnumerableProperty$5(RegExpPrototype$3, MATCH_ALL, $matchAll);

	var toLength$a = toLength$t;
	var repeat$1 = stringRepeat;
	var requireObjectCoercible$6 = requireObjectCoercible$f;
	var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

	var createMethod$1 = function (IS_END) {
	  return function ($this, maxLength, fillString) {
	    var S = String(requireObjectCoercible$6($this));
	    var stringLength = S.length;
	    var fillStr = fillString === undefined ? ' ' : String(fillString);
	    var intMaxLength = toLength$a(maxLength);
	    var fillLen, stringFiller;
	    if (intMaxLength <= stringLength || fillStr == '') return S;
	    fillLen = intMaxLength - stringLength;
	    stringFiller = repeat$1.call(fillStr, ceil$1(fillLen / fillStr.length));
	    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
	    return IS_END ? S + stringFiller : stringFiller + S;
	  };
	};

	var stringPad = {
	  // `String.prototype.padStart` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
	  start: createMethod$1(false),
	  // `String.prototype.padEnd` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.padend
	  end: createMethod$1(true)
	};

	var userAgent$2 = engineUserAgent; // eslint-disable-next-line unicorn/no-unsafe-regex

	var stringPadWebkitBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent$2);

	var $$1h = _export;
	var $padEnd = stringPad.end;
	var WEBKIT_BUG$1 = stringPadWebkitBug; // `String.prototype.padEnd` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.padend

	$$1h({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG$1
	}, {
	  padEnd: function padEnd(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1g = _export;
	var $padStart = stringPad.start;
	var WEBKIT_BUG = stringPadWebkitBug; // `String.prototype.padStart` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.padstart

	$$1g({
	  target: 'String',
	  proto: true,
	  forced: WEBKIT_BUG
	}, {
	  padStart: function padStart(maxLength
	  /* , fillString = ' ' */
	  ) {
	    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var $$1f = _export;
	var repeat = stringRepeat; // `String.prototype.repeat` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.repeat

	$$1f({
	  target: 'String',
	  proto: true
	}, {
	  repeat: repeat
	});

	var fixRegExpWellKnownSymbolLogic$2 = fixRegexpWellKnownSymbolLogic;
	var anObject$k = anObject$x;
	var toObject$3 = toObject$n;
	var toLength$9 = toLength$t;
	var toInteger$3 = toInteger$c;
	var requireObjectCoercible$5 = requireObjectCoercible$f;
	var advanceStringIndex$1 = advanceStringIndex$4;
	var regExpExec$1 = regexpExecAbstract;
	var max = Math.max;
	var min$2 = Math.min;
	var floor$7 = Math.floor;
	var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
	var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

	var maybeToString = function (it) {
	  return it === undefined ? it : String(it);
	}; // @@replace logic


	fixRegExpWellKnownSymbolLogic$2('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
	  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
	  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
	  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
	  return [// `String.prototype.replace` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.replace
	  function replace(searchValue, replaceValue) {
	    var O = requireObjectCoercible$5(this);
	    var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
	  }, // `RegExp.prototype[@@replace]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
	  function (regexp, replaceValue) {
	    if (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0 || typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1) {
	      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
	      if (res.done) return res.value;
	    }

	    var rx = anObject$k(regexp);
	    var S = String(this);
	    var functionalReplace = typeof replaceValue === 'function';
	    if (!functionalReplace) replaceValue = String(replaceValue);
	    var global = rx.global;

	    if (global) {
	      var fullUnicode = rx.unicode;
	      rx.lastIndex = 0;
	    }

	    var results = [];

	    while (true) {
	      var result = regExpExec$1(rx, S);
	      if (result === null) break;
	      results.push(result);
	      if (!global) break;
	      var matchStr = String(result[0]);
	      if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$9(rx.lastIndex), fullUnicode);
	    }

	    var accumulatedResult = '';
	    var nextSourcePosition = 0;

	    for (var i = 0; i < results.length; i++) {
	      result = results[i];
	      var matched = String(result[0]);
	      var position = max(min$2(toInteger$3(result.index), S.length), 0);
	      var captures = []; // NOTE: This is equivalent to
	      //   captures = result.slice(1).map(maybeToString)
	      // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
	      // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
	      // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

	      for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

	      var namedCaptures = result.groups;

	      if (functionalReplace) {
	        var replacerArgs = [matched].concat(captures, position, S);
	        if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
	        var replacement = String(replaceValue.apply(undefined, replacerArgs));
	      } else {
	        replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
	      }

	      if (position >= nextSourcePosition) {
	        accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
	        nextSourcePosition = position + matched.length;
	      }
	    }

	    return accumulatedResult + S.slice(nextSourcePosition);
	  }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

	  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
	    var tailPos = position + matched.length;
	    var m = captures.length;
	    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

	    if (namedCaptures !== undefined) {
	      namedCaptures = toObject$3(namedCaptures);
	      symbols = SUBSTITUTION_SYMBOLS;
	    }

	    return nativeReplace.call(replacement, symbols, function (match, ch) {
	      var capture;

	      switch (ch.charAt(0)) {
	        case '$':
	          return '$';

	        case '&':
	          return matched;

	        case '`':
	          return str.slice(0, position);

	        case "'":
	          return str.slice(tailPos);

	        case '<':
	          capture = namedCaptures[ch.slice(1, -1)];
	          break;

	        default:
	          // \d\d?
	          var n = +ch;
	          if (n === 0) return match;

	          if (n > m) {
	            var f = floor$7(n / 10);
	            if (f === 0) return match;
	            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
	            return match;
	          }

	          capture = captures[n - 1];
	      }

	      return capture === undefined ? '' : capture;
	    });
	  }
	});

	var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
	var anObject$j = anObject$x;
	var requireObjectCoercible$4 = requireObjectCoercible$f;
	var sameValue = sameValue$1;
	var regExpExec = regexpExecAbstract; // @@search logic

	fixRegExpWellKnownSymbolLogic$1('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
	  return [// `String.prototype.search` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.search
	  function search(regexp) {
	    var O = requireObjectCoercible$4(this);
	    var searcher = regexp == undefined ? undefined : regexp[SEARCH];
	    return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, // `RegExp.prototype[@@search]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
	  function (regexp) {
	    var res = maybeCallNative(nativeSearch, regexp, this);
	    if (res.done) return res.value;
	    var rx = anObject$j(regexp);
	    var S = String(this);
	    var previousLastIndex = rx.lastIndex;
	    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
	    var result = regExpExec(rx, S);
	    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
	    return result === null ? -1 : result.index;
	  }];
	});

	var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
	var isRegExp$1 = isRegexp;
	var anObject$i = anObject$x;
	var requireObjectCoercible$3 = requireObjectCoercible$f;
	var speciesConstructor$7 = speciesConstructor$9;
	var advanceStringIndex = advanceStringIndex$4;
	var toLength$8 = toLength$t;
	var callRegExpExec = regexpExecAbstract;
	var regexpExec = regexpExec$3;
	var fails$q = fails$V;
	var arrayPush = [].push;
	var min$1 = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

	var SUPPORTS_Y = !fails$q(function () {
	  return !RegExp(MAX_UINT32, 'y');
	}); // @@split logic

	fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;

	  if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible$3(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

	      if (!isRegExp$1(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }

	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;

	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;

	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }

	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }

	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));

	      return output.length > lim ? output.slice(0, lim) : output;
	    }; // Chakra, V8

	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [// `String.prototype.split` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.split
	  function split(separator, limit) {
	    var O = requireObjectCoercible$3(this);
	    var splitter = separator == undefined ? undefined : separator[SPLIT];
	    return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
	  }, // `RegExp.prototype[@@split]` method
	  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	  //
	  // NOTE: This cannot be properly polyfilled in engines that don't support
	  // the 'y' flag.
	  function (regexp, limit) {
	    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	    if (res.done) return res.value;
	    var rx = anObject$i(regexp);
	    var S = String(this);
	    var C = speciesConstructor$7(rx, RegExp);
	    var unicodeMatching = rx.unicode;
	    var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
	    // simulate the 'y' flag.

	    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	    if (lim === 0) return [];
	    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
	    var p = 0;
	    var q = 0;
	    var A = [];

	    while (q < S.length) {
	      splitter.lastIndex = SUPPORTS_Y ? q : 0;
	      var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
	      var e;

	      if (z === null || (e = min$1(toLength$8(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
	        q = advanceStringIndex(S, q, unicodeMatching);
	      } else {
	        A.push(S.slice(p, q));
	        if (A.length === lim) return A;

	        for (var i = 1; i <= z.length - 1; i++) {
	          A.push(z[i]);
	          if (A.length === lim) return A;
	        }

	        q = p = e;
	      }
	    }

	    A.push(S.slice(p));
	    return A;
	  }];
	}, !SUPPORTS_Y);

	var $$1e = _export;
	var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
	var toLength$7 = toLength$t;
	var notARegExp = notARegexp;
	var requireObjectCoercible$2 = requireObjectCoercible$f;
	var correctIsRegExpLogic = correctIsRegexpLogic;
	var nativeStartsWith = ''.startsWith;
	var min = Math.min;
	var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

	var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
	  var descriptor = getOwnPropertyDescriptor$3(String.prototype, 'startsWith');
	  return descriptor && !descriptor.writable;
	}(); // `String.prototype.startsWith` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.startswith

	$$1e({
	  target: 'String',
	  proto: true,
	  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
	}, {
	  startsWith: function startsWith(searchString
	  /* , position = 0 */
	  ) {
	    var that = String(requireObjectCoercible$2(this));
	    notARegExp(searchString);
	    var index = toLength$7(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
	    var search = String(searchString);
	    return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
	  }
	});

	// eslint-disable-next-line max-len

	var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var requireObjectCoercible$1 = requireObjectCoercible$f;
	var whitespaces$3 = whitespaces$4;
	var whitespace = '[' + whitespaces$3 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

	var createMethod = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible$1($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod(3)
	};

	var fails$p = fails$V;
	var whitespaces$2 = whitespaces$4;
	var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
	// of whitespaces and has a correct name

	var stringTrimForced = function (METHOD_NAME) {
	  return fails$p(function () {
	    return !!whitespaces$2[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces$2[METHOD_NAME].name !== METHOD_NAME;
	  });
	};

	var $$1d = _export;
	var $trim = stringTrim.trim;
	var forcedStringTrimMethod$2 = stringTrimForced; // `String.prototype.trim` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.trim

	$$1d({
	  target: 'String',
	  proto: true,
	  forced: forcedStringTrimMethod$2('trim')
	}, {
	  trim: function trim() {
	    return $trim(this);
	  }
	});

	var $$1c = _export;
	var $trimStart = stringTrim.start;
	var forcedStringTrimMethod$1 = stringTrimForced;
	var FORCED$g = forcedStringTrimMethod$1('trimStart');
	var trimStart = FORCED$g ? function trimStart() {
	  return $trimStart(this);
	} : ''.trimStart; // `String.prototype.{ trimStart, trimLeft }` methods
	// https://github.com/tc39/ecmascript-string-left-right-trim

	$$1c({
	  target: 'String',
	  proto: true,
	  forced: FORCED$g
	}, {
	  trimStart: trimStart,
	  trimLeft: trimStart
	});

	var $$1b = _export;
	var $trimEnd = stringTrim.end;
	var forcedStringTrimMethod = stringTrimForced;
	var FORCED$f = forcedStringTrimMethod('trimEnd');
	var trimEnd = FORCED$f ? function trimEnd() {
	  return $trimEnd(this);
	} : ''.trimEnd; // `String.prototype.{ trimEnd, trimRight }` methods
	// https://github.com/tc39/ecmascript-string-left-right-trim

	$$1b({
	  target: 'String',
	  proto: true,
	  forced: FORCED$f
	}, {
	  trimEnd: trimEnd,
	  trimRight: trimEnd
	});

	var charAt = stringMultibyte.charAt;
	var InternalStateModule$7 = internalState;
	var defineIterator$1 = defineIterator$3;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$8 = InternalStateModule$7.set;
	var getInternalState$4 = InternalStateModule$7.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$8(this, {
	    type: STRING_ITERATOR,
	    string: String(iterated),
	    index: 0
	  }); // `%StringIteratorPrototype%.next` method
	  // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
	}, function next() {
	  var state = getInternalState$4(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return {
	    value: undefined,
	    done: true
	  };
	  point = charAt(string, index);
	  state.index += point.length;
	  return {
	    value: point,
	    done: false
	  };
	});

	var requireObjectCoercible = requireObjectCoercible$f;
	var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	// https://tc39.github.io/ecma262/#sec-createhtml

	var createHtml = function (string, tag, attribute, value) {
	  var S = String(requireObjectCoercible(string));
	  var p1 = '<' + tag;
	  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};

	var fails$o = fails$V; // check the existence of a method, lowercase
	// of a tag and escaping quotes in arguments

	var stringHtmlForced = function (METHOD_NAME) {
	  return fails$o(function () {
	    var test = ''[METHOD_NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  });
	};

	var $$1a = _export;
	var createHTML$c = createHtml;
	var forcedStringHTMLMethod$c = stringHtmlForced; // `String.prototype.anchor` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.anchor

	$$1a({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$c('anchor')
	}, {
	  anchor: function anchor(name) {
	    return createHTML$c(this, 'a', 'name', name);
	  }
	});

	var $$19 = _export;
	var createHTML$b = createHtml;
	var forcedStringHTMLMethod$b = stringHtmlForced; // `String.prototype.big` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.big

	$$19({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$b('big')
	}, {
	  big: function big() {
	    return createHTML$b(this, 'big', '', '');
	  }
	});

	var $$18 = _export;
	var createHTML$a = createHtml;
	var forcedStringHTMLMethod$a = stringHtmlForced; // `String.prototype.blink` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.blink

	$$18({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$a('blink')
	}, {
	  blink: function blink() {
	    return createHTML$a(this, 'blink', '', '');
	  }
	});

	var $$17 = _export;
	var createHTML$9 = createHtml;
	var forcedStringHTMLMethod$9 = stringHtmlForced; // `String.prototype.bold` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.bold

	$$17({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$9('bold')
	}, {
	  bold: function bold() {
	    return createHTML$9(this, 'b', '', '');
	  }
	});

	var $$16 = _export;
	var createHTML$8 = createHtml;
	var forcedStringHTMLMethod$8 = stringHtmlForced; // `String.prototype.fixed` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.fixed

	$$16({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$8('fixed')
	}, {
	  fixed: function fixed() {
	    return createHTML$8(this, 'tt', '', '');
	  }
	});

	var $$15 = _export;
	var createHTML$7 = createHtml;
	var forcedStringHTMLMethod$7 = stringHtmlForced; // `String.prototype.fontcolor` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor

	$$15({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$7('fontcolor')
	}, {
	  fontcolor: function fontcolor(color) {
	    return createHTML$7(this, 'font', 'color', color);
	  }
	});

	var $$14 = _export;
	var createHTML$6 = createHtml;
	var forcedStringHTMLMethod$6 = stringHtmlForced; // `String.prototype.fontsize` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.fontsize

	$$14({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$6('fontsize')
	}, {
	  fontsize: function fontsize(size) {
	    return createHTML$6(this, 'font', 'size', size);
	  }
	});

	var $$13 = _export;
	var createHTML$5 = createHtml;
	var forcedStringHTMLMethod$5 = stringHtmlForced; // `String.prototype.italics` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.italics

	$$13({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$5('italics')
	}, {
	  italics: function italics() {
	    return createHTML$5(this, 'i', '', '');
	  }
	});

	var $$12 = _export;
	var createHTML$4 = createHtml;
	var forcedStringHTMLMethod$4 = stringHtmlForced; // `String.prototype.link` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.link

	$$12({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$4('link')
	}, {
	  link: function link(url) {
	    return createHTML$4(this, 'a', 'href', url);
	  }
	});

	var $$11 = _export;
	var createHTML$3 = createHtml;
	var forcedStringHTMLMethod$3 = stringHtmlForced; // `String.prototype.small` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.small

	$$11({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$3('small')
	}, {
	  small: function small() {
	    return createHTML$3(this, 'small', '', '');
	  }
	});

	var $$10 = _export;
	var createHTML$2 = createHtml;
	var forcedStringHTMLMethod$2 = stringHtmlForced; // `String.prototype.strike` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.strike

	$$10({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$2('strike')
	}, {
	  strike: function strike() {
	    return createHTML$2(this, 'strike', '', '');
	  }
	});

	var $$$ = _export;
	var createHTML$1 = createHtml;
	var forcedStringHTMLMethod$1 = stringHtmlForced; // `String.prototype.sub` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.sub

	$$$({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod$1('sub')
	}, {
	  sub: function sub() {
	    return createHTML$1(this, 'sub', '', '');
	  }
	});

	var $$_ = _export;
	var createHTML = createHtml;
	var forcedStringHTMLMethod = stringHtmlForced; // `String.prototype.sup` method
	// https://tc39.github.io/ecma262/#sec-string.prototype.sup

	$$_({
	  target: 'String',
	  proto: true,
	  forced: forcedStringHTMLMethod('sup')
	}, {
	  sup: function sup() {
	    return createHTML(this, 'sup', '', '');
	  }
	});

	var isObject$d = isObject$y;
	var setPrototypeOf$3 = objectSetPrototypeOf$1; // makes subclassing work correct for wrapped built-ins

	var inheritIfRequired$4 = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if ( // it can work only with native `setPrototypeOf`
	  setPrototypeOf$3 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	  typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject$d(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$3($this, NewTargetPrototype);
	  return $this;
	};

	var DESCRIPTORS$a = descriptors;
	var global$q = global$H;
	var isForced$3 = isForced_1;
	var inheritIfRequired$3 = inheritIfRequired$4;
	var defineProperty$5 = objectDefineProperty.f;
	var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
	var isRegExp = isRegexp;
	var getFlags = regexpFlags$1;
	var stickyHelpers = regexpStickyHelpers;
	var redefine$a = redefine$g.exports;
	var fails$n = fails$V;
	var setInternalState$7 = internalState.set;
	var setSpecies$4 = setSpecies$6;
	var wellKnownSymbol$7 = wellKnownSymbol$u;
	var MATCH = wellKnownSymbol$7('match');
	var NativeRegExp = global$q.RegExp;
	var RegExpPrototype$2 = NativeRegExp.prototype;
	var re1 = /a/g;
	var re2 = /a/g; // "new" should create a new object, old webkit bug

	var CORRECT_NEW = new NativeRegExp(re1) !== re1;
	var UNSUPPORTED_Y$2 = stickyHelpers.UNSUPPORTED_Y;
	var FORCED$e = DESCRIPTORS$a && isForced$3('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$2 || fails$n(function () {
	  re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

	  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
	})); // `RegExp` constructor
	// https://tc39.github.io/ecma262/#sec-regexp-constructor

	if (FORCED$e) {
	  var RegExpWrapper = function RegExp(pattern, flags) {
	    var thisIsRegExp = this instanceof RegExpWrapper;
	    var patternIsRegExp = isRegExp(pattern);
	    var flagsAreUndefined = flags === undefined;
	    var sticky;

	    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
	      return pattern;
	    }

	    if (CORRECT_NEW) {
	      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
	    } else if (pattern instanceof RegExpWrapper) {
	      if (flagsAreUndefined) flags = getFlags.call(pattern);
	      pattern = pattern.source;
	    }

	    if (UNSUPPORTED_Y$2) {
	      sticky = !!flags && flags.indexOf('y') > -1;
	      if (sticky) flags = flags.replace(/y/g, '');
	    }

	    var result = inheritIfRequired$3(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);
	    if (UNSUPPORTED_Y$2 && sticky) setInternalState$7(result, {
	      sticky: sticky
	    });
	    return result;
	  };

	  var proxy = function (key) {
	    key in RegExpWrapper || defineProperty$5(RegExpWrapper, key, {
	      configurable: true,
	      get: function () {
	        return NativeRegExp[key];
	      },
	      set: function (it) {
	        NativeRegExp[key] = it;
	      }
	    });
	  };

	  var keys$2 = getOwnPropertyNames$3(NativeRegExp);
	  var index = 0;

	  while (keys$2.length > index) proxy(keys$2[index++]);

	  RegExpPrototype$2.constructor = RegExpWrapper;
	  RegExpWrapper.prototype = RegExpPrototype$2;
	  redefine$a(global$q, 'RegExp', RegExpWrapper);
	} // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


	setSpecies$4('RegExp');

	var DESCRIPTORS$9 = descriptors;
	var objectDefinePropertyModule = objectDefineProperty;
	var regExpFlags = regexpFlags$1;
	var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y; // `RegExp.prototype.flags` getter
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

	if (DESCRIPTORS$9 && (/./g.flags != 'g' || UNSUPPORTED_Y$1)) {
	  objectDefinePropertyModule.f(RegExp.prototype, 'flags', {
	    configurable: true,
	    get: regExpFlags
	  });
	}

	var DESCRIPTORS$8 = descriptors;
	var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
	var defineProperty$4 = objectDefineProperty.f;
	var getInternalState$3 = internalState.get;
	var RegExpPrototype$1 = RegExp.prototype; // `RegExp.prototype.sticky` getter

	if (DESCRIPTORS$8 && UNSUPPORTED_Y) {
	  defineProperty$4(RegExp.prototype, 'sticky', {
	    configurable: true,
	    get: function () {
	      if (this === RegExpPrototype$1) return undefined; // We can't use InternalStateModule.getterFor because
	      // we don't add metadata for regexps created by a literal.

	      if (this instanceof RegExp) {
	        return !!getInternalState$3(this).sticky;
	      }

	      throw TypeError('Incompatible receiver, RegExp required');
	    }
	  });
	}

	var $$Z = _export;
	var isObject$c = isObject$y;

	var DELEGATES_TO_EXEC = function () {
	  var execCalled = false;
	  var re = /[ac]/;

	  re.exec = function () {
	    execCalled = true;
	    return /./.exec.apply(this, arguments);
	  };

	  return re.test('abc') === true && execCalled;
	}();

	var nativeTest = /./.test;
	$$Z({
	  target: 'RegExp',
	  proto: true,
	  forced: !DELEGATES_TO_EXEC
	}, {
	  test: function (str) {
	    if (typeof this.exec !== 'function') {
	      return nativeTest.call(this, str);
	    }

	    var result = this.exec(str);

	    if (result !== null && !isObject$c(result)) {
	      throw new Error('RegExp exec method returned something other than an Object or null');
	    }

	    return !!result;
	  }
	});

	var redefine$9 = redefine$g.exports;
	var anObject$h = anObject$x;
	var fails$m = fails$V;
	var flags = regexpFlags$1;
	var TO_STRING$1 = 'toString';
	var RegExpPrototype = RegExp.prototype;
	var nativeToString = RegExpPrototype[TO_STRING$1];
	var NOT_GENERIC = fails$m(function () {
	  return nativeToString.call({
	    source: 'a',
	    flags: 'b'
	  }) != '/a/b';
	}); // FF44- RegExp#toString has a wrong name

	var INCORRECT_NAME = nativeToString.name != TO_STRING$1; // `RegExp.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

	if (NOT_GENERIC || INCORRECT_NAME) {
	  redefine$9(RegExp.prototype, TO_STRING$1, function toString() {
	    var R = anObject$h(this);
	    var p = String(R.source);
	    var rf = R.flags;
	    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
	    return '/' + p + '/' + f;
	  }, {
	    unsafe: true
	  });
	}

	var global$p = global$H;
	var trim$2 = stringTrim.trim;
	var whitespaces$1 = whitespaces$4;
	var $parseInt = global$p.parseInt;
	var hex = /^[+-]?0[Xx]/;
	var FORCED$d = $parseInt(whitespaces$1 + '08') !== 8 || $parseInt(whitespaces$1 + '0x16') !== 22; // `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix

	var numberParseInt = FORCED$d ? function parseInt(string, radix) {
	  var S = trim$2(String(string));
	  return $parseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
	} : $parseInt;

	var $$Y = _export;
	var parseIntImplementation = numberParseInt; // `parseInt` method
	// https://tc39.github.io/ecma262/#sec-parseint-string-radix

	$$Y({
	  global: true,
	  forced: parseInt != parseIntImplementation
	}, {
	  parseInt: parseIntImplementation
	});

	var global$o = global$H;
	var trim$1 = stringTrim.trim;
	var whitespaces = whitespaces$4;
	var $parseFloat = global$o.parseFloat;
	var FORCED$c = 1 / $parseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string

	var numberParseFloat = FORCED$c ? function parseFloat(string) {
	  var trimmedString = trim$1(String(string));
	  var result = $parseFloat(trimmedString);
	  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

	var $$X = _export;
	var parseFloatImplementation = numberParseFloat; // `parseFloat` method
	// https://tc39.github.io/ecma262/#sec-parsefloat-string

	$$X({
	  global: true,
	  forced: parseFloat != parseFloatImplementation
	}, {
	  parseFloat: parseFloatImplementation
	});

	var DESCRIPTORS$7 = descriptors;
	var global$n = global$H;
	var isForced$2 = isForced_1;
	var redefine$8 = redefine$g.exports;
	var has$5 = has$k;
	var classof$7 = classofRaw$1;
	var inheritIfRequired$2 = inheritIfRequired$4;
	var toPrimitive$4 = toPrimitive$b;
	var fails$l = fails$V;
	var create$4 = objectCreate;
	var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$3 = objectDefineProperty.f;
	var trim = stringTrim.trim;
	var NUMBER = 'Number';
	var NativeNumber = global$n[NUMBER];
	var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

	var BROKEN_CLASSOF = classof$7(create$4(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
	// https://tc39.github.io/ecma262/#sec-tonumber

	var toNumber = function (argument) {
	  var it = toPrimitive$4(argument, false);
	  var first, third, radix, maxCode, digits, length, index, code;

	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = it.charCodeAt(0);

	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66:
	        case 98:
	          radix = 2;
	          maxCode = 49;
	          break;
	        // fast equal of /^0b[01]+$/i

	        case 79:
	        case 111:
	          radix = 8;
	          maxCode = 55;
	          break;
	        // fast equal of /^0o[0-7]+$/i

	        default:
	          return +it;
	      }

	      digits = it.slice(2);
	      length = digits.length;

	      for (index = 0; index < length; index++) {
	        code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols

	        if (code < 48 || code > maxCode) return NaN;
	      }

	      return parseInt(digits, radix);
	    }
	  }

	  return +it;
	}; // `Number` constructor
	// https://tc39.github.io/ecma262/#sec-number-constructor


	if (isForced$2(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var dummy = this;
	    return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
	    && (BROKEN_CLASSOF ? fails$l(function () {
	      NumberPrototype.valueOf.call(dummy);
	    }) : classof$7(dummy) != NUMBER) ? inheritIfRequired$2(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
	  };

	  for (var keys$1 = DESCRIPTORS$7 ? getOwnPropertyNames$2(NativeNumber) : ( // ES3:
	  'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
	  'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key$1; keys$1.length > j$1; j$1++) {
	    if (has$5(NativeNumber, key$1 = keys$1[j$1]) && !has$5(NumberWrapper, key$1)) {
	      defineProperty$3(NumberWrapper, key$1, getOwnPropertyDescriptor$2(NativeNumber, key$1));
	    }
	  }

	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine$8(global$n, NUMBER, NumberWrapper);
	}

	var $$W = _export; // `Number.EPSILON` constant
	// https://tc39.github.io/ecma262/#sec-number.epsilon

	$$W({
	  target: 'Number',
	  stat: true
	}, {
	  EPSILON: Math.pow(2, -52)
	});

	var global$m = global$H;
	var globalIsFinite = global$m.isFinite; // `Number.isFinite` method
	// https://tc39.github.io/ecma262/#sec-number.isfinite

	var numberIsFinite$1 = Number.isFinite || function isFinite(it) {
	  return typeof it == 'number' && globalIsFinite(it);
	};

	var $$V = _export;
	var numberIsFinite = numberIsFinite$1; // `Number.isFinite` method
	// https://tc39.github.io/ecma262/#sec-number.isfinite

	$$V({
	  target: 'Number',
	  stat: true
	}, {
	  isFinite: numberIsFinite
	});

	var isObject$b = isObject$y;
	var floor$6 = Math.floor; // `Number.isInteger` method implementation
	// https://tc39.github.io/ecma262/#sec-number.isinteger

	var isInteger$2 = function isInteger(it) {
	  return !isObject$b(it) && isFinite(it) && floor$6(it) === it;
	};

	var $$U = _export;
	var isInteger$1 = isInteger$2; // `Number.isInteger` method
	// https://tc39.github.io/ecma262/#sec-number.isinteger

	$$U({
	  target: 'Number',
	  stat: true
	}, {
	  isInteger: isInteger$1
	});

	var $$T = _export; // `Number.isNaN` method
	// https://tc39.github.io/ecma262/#sec-number.isnan

	$$T({
	  target: 'Number',
	  stat: true
	}, {
	  isNaN: function isNaN(number) {
	    // eslint-disable-next-line no-self-compare
	    return number != number;
	  }
	});

	var $$S = _export;
	var isInteger = isInteger$2;
	var abs$7 = Math.abs; // `Number.isSafeInteger` method
	// https://tc39.github.io/ecma262/#sec-number.issafeinteger

	$$S({
	  target: 'Number',
	  stat: true
	}, {
	  isSafeInteger: function isSafeInteger(number) {
	    return isInteger(number) && abs$7(number) <= 0x1FFFFFFFFFFFFF;
	  }
	});

	var $$R = _export; // `Number.MAX_SAFE_INTEGER` constant
	// https://tc39.github.io/ecma262/#sec-number.max_safe_integer

	$$R({
	  target: 'Number',
	  stat: true
	}, {
	  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
	});

	var $$Q = _export; // `Number.MIN_SAFE_INTEGER` constant
	// https://tc39.github.io/ecma262/#sec-number.min_safe_integer

	$$Q({
	  target: 'Number',
	  stat: true
	}, {
	  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
	});

	var $$P = _export;
	var parseFloat$1 = numberParseFloat; // `Number.parseFloat` method
	// https://tc39.github.io/ecma262/#sec-number.parseFloat

	$$P({
	  target: 'Number',
	  stat: true,
	  forced: Number.parseFloat != parseFloat$1
	}, {
	  parseFloat: parseFloat$1
	});

	var $$O = _export;
	var parseInt$1 = numberParseInt; // `Number.parseInt` method
	// https://tc39.github.io/ecma262/#sec-number.parseint

	$$O({
	  target: 'Number',
	  stat: true,
	  forced: Number.parseInt != parseInt$1
	}, {
	  parseInt: parseInt$1
	});

	var $$N = _export;
	var fails$k = fails$V;
	var thisNumberValue = thisNumberValue$2;
	var nativeToPrecision = 1.0.toPrecision;
	var FORCED$b = fails$k(function () {
	  // IE7-
	  return nativeToPrecision.call(1, undefined) !== '1';
	}) || !fails$k(function () {
	  // V8 ~ Android 4.3-
	  nativeToPrecision.call({});
	}); // `Number.prototype.toPrecision` method
	// https://tc39.github.io/ecma262/#sec-number.prototype.toprecision

	$$N({
	  target: 'Number',
	  proto: true,
	  forced: FORCED$b
	}, {
	  toPrecision: function toPrecision(precision) {
	    return precision === undefined ? nativeToPrecision.call(thisNumberValue(this)) : nativeToPrecision.call(thisNumberValue(this), precision);
	  }
	});

	var log$7 = Math.log; // `Math.log1p` method implementation
	// https://tc39.github.io/ecma262/#sec-math.log1p

	var mathLog1p = Math.log1p || function log1p(x) {
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$7(1 + x);
	};

	var $$M = _export;
	var log1p$1 = mathLog1p;
	var nativeAcosh = Math.acosh;
	var log$6 = Math.log;
	var sqrt$2 = Math.sqrt;
	var LN2$2 = Math.LN2;
	var FORCED$a = !nativeAcosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	|| Math.floor(nativeAcosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
	|| nativeAcosh(Infinity) != Infinity; // `Math.acosh` method
	// https://tc39.github.io/ecma262/#sec-math.acosh

	$$M({
	  target: 'Math',
	  stat: true,
	  forced: FORCED$a
	}, {
	  acosh: function acosh(x) {
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log$6(x) + LN2$2 : log1p$1(x - 1 + sqrt$2(x - 1) * sqrt$2(x + 1));
	  }
	});

	var $$L = _export;
	var nativeAsinh = Math.asinh;
	var log$5 = Math.log;
	var sqrt$1 = Math.sqrt;

	function asinh(x) {
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$5(x + sqrt$1(x * x + 1));
	} // `Math.asinh` method
	// https://tc39.github.io/ecma262/#sec-math.asinh
	// Tor Browser bug: Math.asinh(0) -> -0


	$$L({
	  target: 'Math',
	  stat: true,
	  forced: !(nativeAsinh && 1 / nativeAsinh(0) > 0)
	}, {
	  asinh: asinh
	});

	var $$K = _export;
	var nativeAtanh = Math.atanh;
	var log$4 = Math.log; // `Math.atanh` method
	// https://tc39.github.io/ecma262/#sec-math.atanh
	// Tor Browser bug: Math.atanh(-0) -> 0

	$$K({
	  target: 'Math',
	  stat: true,
	  forced: !(nativeAtanh && 1 / nativeAtanh(-0) < 0)
	}, {
	  atanh: function atanh(x) {
	    return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
	  }
	});

	// https://tc39.github.io/ecma262/#sec-math.sign

	var mathSign = Math.sign || function sign(x) {
	  // eslint-disable-next-line no-self-compare
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

	var $$J = _export;
	var sign$2 = mathSign;
	var abs$6 = Math.abs;
	var pow$3 = Math.pow; // `Math.cbrt` method
	// https://tc39.github.io/ecma262/#sec-math.cbrt

	$$J({
	  target: 'Math',
	  stat: true
	}, {
	  cbrt: function cbrt(x) {
	    return sign$2(x = +x) * pow$3(abs$6(x), 1 / 3);
	  }
	});

	var $$I = _export;
	var floor$5 = Math.floor;
	var log$3 = Math.log;
	var LOG2E = Math.LOG2E; // `Math.clz32` method
	// https://tc39.github.io/ecma262/#sec-math.clz32

	$$I({
	  target: 'Math',
	  stat: true
	}, {
	  clz32: function clz32(x) {
	    return (x >>>= 0) ? 31 - floor$5(log$3(x + 0.5) * LOG2E) : 32;
	  }
	});

	var nativeExpm1 = Math.expm1;
	var exp$2 = Math.exp; // `Math.expm1` method implementation
	// https://tc39.github.io/ecma262/#sec-math.expm1

	var mathExpm1 = !nativeExpm1 // Old FF bug
	|| nativeExpm1(10) > 22025.465794806719 || nativeExpm1(10) < 22025.4657948067165168 // Tor Browser bug
	|| nativeExpm1(-2e-17) != -2e-17 ? function expm1(x) {
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp$2(x) - 1;
	} : nativeExpm1;

	var $$H = _export;
	var expm1$3 = mathExpm1;
	var nativeCosh = Math.cosh;
	var abs$5 = Math.abs;
	var E$1 = Math.E; // `Math.cosh` method
	// https://tc39.github.io/ecma262/#sec-math.cosh

	$$H({
	  target: 'Math',
	  stat: true,
	  forced: !nativeCosh || nativeCosh(710) === Infinity
	}, {
	  cosh: function cosh(x) {
	    var t = expm1$3(abs$5(x) - 1) + 1;
	    return (t + 1 / (t * E$1 * E$1)) * (E$1 / 2);
	  }
	});

	var $$G = _export;
	var expm1$2 = mathExpm1; // `Math.expm1` method
	// https://tc39.github.io/ecma262/#sec-math.expm1

	$$G({
	  target: 'Math',
	  stat: true,
	  forced: expm1$2 != Math.expm1
	}, {
	  expm1: expm1$2
	});

	var sign$1 = mathSign;
	var abs$4 = Math.abs;
	var pow$2 = Math.pow;
	var EPSILON = pow$2(2, -52);
	var EPSILON32 = pow$2(2, -23);
	var MAX32 = pow$2(2, 127) * (2 - EPSILON32);
	var MIN32 = pow$2(2, -126);

	var roundTiesToEven = function (n) {
	  return n + 1 / EPSILON - 1 / EPSILON;
	}; // `Math.fround` method implementation
	// https://tc39.github.io/ecma262/#sec-math.fround


	var mathFround = Math.fround || function fround(x) {
	  var $abs = abs$4(x);
	  var $sign = sign$1(x);
	  var a, result;
	  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	  a = (1 + EPSILON32 / EPSILON) * $abs;
	  result = a - (a - $abs); // eslint-disable-next-line no-self-compare

	  if (result > MAX32 || result != result) return $sign * Infinity;
	  return $sign * result;
	};

	var $$F = _export;
	var fround = mathFround; // `Math.fround` method
	// https://tc39.github.io/ecma262/#sec-math.fround

	$$F({
	  target: 'Math',
	  stat: true
	}, {
	  fround: fround
	});

	var $$E = _export;
	var $hypot = Math.hypot;
	var abs$3 = Math.abs;
	var sqrt = Math.sqrt; // Chrome 77 bug
	// https://bugs.chromium.org/p/v8/issues/detail?id=9546

	var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
	// https://tc39.github.io/ecma262/#sec-math.hypot

	$$E({
	  target: 'Math',
	  stat: true,
	  forced: BUGGY
	}, {
	  hypot: function hypot(value1, value2) {
	    // eslint-disable-line no-unused-vars
	    var sum = 0;
	    var i = 0;
	    var aLen = arguments.length;
	    var larg = 0;
	    var arg, div;

	    while (i < aLen) {
	      arg = abs$3(arguments[i++]);

	      if (larg < arg) {
	        div = larg / arg;
	        sum = sum * div * div + 1;
	        larg = arg;
	      } else if (arg > 0) {
	        div = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }

	    return larg === Infinity ? Infinity : larg * sqrt(sum);
	  }
	});

	var $$D = _export;
	var fails$j = fails$V;
	var nativeImul = Math.imul;
	var FORCED$9 = fails$j(function () {
	  return nativeImul(0xFFFFFFFF, 5) != -5 || nativeImul.length != 2;
	}); // `Math.imul` method
	// https://tc39.github.io/ecma262/#sec-math.imul
	// some WebKit versions fails with big numbers, some has wrong arity

	$$D({
	  target: 'Math',
	  stat: true,
	  forced: FORCED$9
	}, {
	  imul: function imul(x, y) {
	    var UINT16 = 0xFFFF;
	    var xn = +x;
	    var yn = +y;
	    var xl = UINT16 & xn;
	    var yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

	var $$C = _export;
	var log$2 = Math.log;
	var LOG10E = Math.LOG10E; // `Math.log10` method
	// https://tc39.github.io/ecma262/#sec-math.log10

	$$C({
	  target: 'Math',
	  stat: true
	}, {
	  log10: function log10(x) {
	    return log$2(x) * LOG10E;
	  }
	});

	var $$B = _export;
	var log1p = mathLog1p; // `Math.log1p` method
	// https://tc39.github.io/ecma262/#sec-math.log1p

	$$B({
	  target: 'Math',
	  stat: true
	}, {
	  log1p: log1p
	});

	var $$A = _export;
	var log$1 = Math.log;
	var LN2$1 = Math.LN2; // `Math.log2` method
	// https://tc39.github.io/ecma262/#sec-math.log2

	$$A({
	  target: 'Math',
	  stat: true
	}, {
	  log2: function log2(x) {
	    return log$1(x) / LN2$1;
	  }
	});

	var $$z = _export;
	var sign = mathSign; // `Math.sign` method
	// https://tc39.github.io/ecma262/#sec-math.sign

	$$z({
	  target: 'Math',
	  stat: true
	}, {
	  sign: sign
	});

	var $$y = _export;
	var fails$i = fails$V;
	var expm1$1 = mathExpm1;
	var abs$2 = Math.abs;
	var exp$1 = Math.exp;
	var E = Math.E;
	var FORCED$8 = fails$i(function () {
	  return Math.sinh(-2e-17) != -2e-17;
	}); // `Math.sinh` method
	// https://tc39.github.io/ecma262/#sec-math.sinh
	// V8 near Chromium 38 has a problem with very small numbers

	$$y({
	  target: 'Math',
	  stat: true,
	  forced: FORCED$8
	}, {
	  sinh: function sinh(x) {
	    return abs$2(x = +x) < 1 ? (expm1$1(x) - expm1$1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E / 2);
	  }
	});

	var $$x = _export;
	var expm1 = mathExpm1;
	var exp = Math.exp; // `Math.tanh` method
	// https://tc39.github.io/ecma262/#sec-math.tanh

	$$x({
	  target: 'Math',
	  stat: true
	}, {
	  tanh: function tanh(x) {
	    var a = expm1(x = +x);
	    var b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

	var setToStringTag$6 = setToStringTag$a; // Math[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-math-@@tostringtag

	setToStringTag$6(Math, 'Math', true);

	var $$w = _export;
	var ceil = Math.ceil;
	var floor$4 = Math.floor; // `Math.trunc` method
	// https://tc39.github.io/ecma262/#sec-math.trunc

	$$w({
	  target: 'Math',
	  stat: true
	}, {
	  trunc: function trunc(it) {
	    return (it > 0 ? floor$4 : ceil)(it);
	  }
	});

	var $$v = _export; // `Date.now` method
	// https://tc39.github.io/ecma262/#sec-date.now

	$$v({
	  target: 'Date',
	  stat: true
	}, {
	  now: function now() {
	    return new Date().getTime();
	  }
	});

	var $$u = _export;
	var fails$h = fails$V;
	var toObject$2 = toObject$n;
	var toPrimitive$3 = toPrimitive$b;
	var FORCED$7 = fails$h(function () {
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
	    toISOString: function () {
	      return 1;
	    }
	  }) !== 1;
	}); // `Date.prototype.toJSON` method
	// https://tc39.github.io/ecma262/#sec-date.prototype.tojson

	$$u({
	  target: 'Date',
	  proto: true,
	  forced: FORCED$7
	}, {
	  // eslint-disable-next-line no-unused-vars
	  toJSON: function toJSON(key) {
	    var O = toObject$2(this);
	    var pv = toPrimitive$3(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

	var fails$g = fails$V;
	var padStart = stringPad.start;
	var abs$1 = Math.abs;
	var DatePrototype$2 = Date.prototype;
	var getTime$1 = DatePrototype$2.getTime;
	var nativeDateToISOString = DatePrototype$2.toISOString; // `Date.prototype.toISOString` method implementation
	// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
	// PhantomJS / old WebKit fails here:

	var dateToIsoString = fails$g(function () {
	  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
	}) || !fails$g(function () {
	  nativeDateToISOString.call(new Date(NaN));
	}) ? function toISOString() {
	  if (!isFinite(getTime$1.call(this))) throw RangeError('Invalid time value');
	  var date = this;
	  var year = date.getUTCFullYear();
	  var milliseconds = date.getUTCMilliseconds();
	  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
	  return sign + padStart(abs$1(year), sign ? 6 : 4, 0) + '-' + padStart(date.getUTCMonth() + 1, 2, 0) + '-' + padStart(date.getUTCDate(), 2, 0) + 'T' + padStart(date.getUTCHours(), 2, 0) + ':' + padStart(date.getUTCMinutes(), 2, 0) + ':' + padStart(date.getUTCSeconds(), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
	} : nativeDateToISOString;

	var $$t = _export;
	var toISOString = dateToIsoString; // `Date.prototype.toISOString` method
	// https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
	// PhantomJS / old WebKit has a broken implementations

	$$t({
	  target: 'Date',
	  proto: true,
	  forced: Date.prototype.toISOString !== toISOString
	}, {
	  toISOString: toISOString
	});

	var redefine$7 = redefine$g.exports;
	var DatePrototype$1 = Date.prototype;
	var INVALID_DATE = 'Invalid Date';
	var TO_STRING = 'toString';
	var nativeDateToString = DatePrototype$1[TO_STRING];
	var getTime = DatePrototype$1.getTime; // `Date.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-date.prototype.tostring

	if (new Date(NaN) + '' != INVALID_DATE) {
	  redefine$7(DatePrototype$1, TO_STRING, function toString() {
	    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

	    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
	  });
	}

	var anObject$g = anObject$x;
	var toPrimitive$2 = toPrimitive$b;

	var dateToPrimitive$1 = function (hint) {
	  if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
	    throw TypeError('Incorrect hint');
	  }

	  return toPrimitive$2(anObject$g(this), hint !== 'number');
	};

	var createNonEnumerableProperty$4 = createNonEnumerableProperty$f;
	var dateToPrimitive = dateToPrimitive$1;
	var wellKnownSymbol$6 = wellKnownSymbol$u;
	var TO_PRIMITIVE = wellKnownSymbol$6('toPrimitive');
	var DatePrototype = Date.prototype; // `Date.prototype[@@toPrimitive]` method
	// https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive

	if (!(TO_PRIMITIVE in DatePrototype)) {
	  createNonEnumerableProperty$4(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
	}

	var $$s = _export;
	var getBuiltIn$6 = getBuiltIn$c;
	var fails$f = fails$V;
	var $stringify = getBuiltIn$6('JSON', 'stringify');
	var re = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;

	var fix = function (match, offset, string) {
	  var prev = string.charAt(offset - 1);
	  var next = string.charAt(offset + 1);

	  if (low.test(match) && !hi.test(next) || hi.test(match) && !low.test(prev)) {
	    return '\\u' + match.charCodeAt(0).toString(16);
	  }

	  return match;
	};

	var FORCED$6 = fails$f(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"' || $stringify('\uDEAD') !== '"\\udead"';
	});

	if ($stringify) {
	  // https://github.com/tc39/proposal-well-formed-stringify
	  $$s({
	    target: 'JSON',
	    stat: true,
	    forced: FORCED$6
	  }, {
	    // eslint-disable-next-line no-unused-vars
	    stringify: function stringify(it, replacer, space) {
	      var result = $stringify.apply(null, arguments);
	      return typeof result == 'string' ? result.replace(re, fix) : result;
	    }
	  });
	}

	var global$l = global$H;
	var setToStringTag$5 = setToStringTag$a; // JSON[@@toStringTag] property
	// https://tc39.github.io/ecma262/#sec-json-@@tostringtag

	setToStringTag$5(global$l.JSON, 'JSON', true);

	var global$k = global$H;
	var nativePromiseConstructor = global$k.Promise;

	var redefine$6 = redefine$g.exports;

	var redefineAll$6 = function (target, src, options) {
	  for (var key in src) redefine$6(target, key, src[key], options);

	  return target;
	};

	var anInstance$8 = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) {
	    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
	  }

	  return it;
	};

	var userAgent$1 = engineUserAgent;
	var engineIsIos = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent$1);

	var global$j = global$H;
	var fails$e = fails$V;
	var classof$6 = classofRaw$1;
	var bind$5 = functionBindContext;
	var html = html$2;
	var createElement = documentCreateElement$1;
	var IS_IOS$1 = engineIsIos;
	var location$1 = global$j.location;
	var set$2 = global$j.setImmediate;
	var clear = global$j.clearImmediate;
	var process$3 = global$j.process;
	var MessageChannel = global$j.MessageChannel;
	var Dispatch = global$j.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;

	var run = function (id) {
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};

	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};

	var listener = function (event) {
	  run(event.data);
	};

	var post = function (id) {
	  // old engines have not location.origin
	  global$j.postMessage(id + '', location$1.protocol + '//' + location$1.host);
	}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


	if (!set$2 || !clear) {
	  set$2 = function setImmediate(fn) {
	    var args = [];
	    var i = 1;

	    while (arguments.length > i) args.push(arguments[i++]);

	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
	    };

	    defer(counter);
	    return counter;
	  };

	  clear = function clearImmediate(id) {
	    delete queue[id];
	  }; // Node.js 0.8-


	  if (classof$6(process$3) == 'process') {
	    defer = function (id) {
	      process$3.nextTick(runner(id));
	    }; // Sphere (JS game engine) Dispatch API

	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    }; // Browsers with MessageChannel, includes WebWorkers
	    // except iOS - https://github.com/zloirock/core-js/issues/624

	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$5(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
	    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (global$j.addEventListener && typeof postMessage == 'function' && !global$j.importScripts && !fails$e(post) && location$1.protocol !== 'file:') {
	    defer = post;
	    global$j.addEventListener('message', listener, false); // IE8-
	  } else if (ONREADYSTATECHANGE in createElement('script')) {
	    defer = function (id) {
	      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    }; // Rest old browsers

	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}

	var task$2 = {
	  set: set$2,
	  clear: clear
	};

	var global$i = global$H;
	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
	var classof$5 = classofRaw$1;
	var macrotask = task$2.set;
	var IS_IOS = engineIsIos;
	var MutationObserver = global$i.MutationObserver || global$i.WebKitMutationObserver;
	var process$2 = global$i.process;
	var Promise$1 = global$i.Promise;
	var IS_NODE$1 = classof$5(process$2) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$i, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
	var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$1 && (parent = process$2.domain)) parent.exit();

	    while (head) {
	      fn = head.fn;
	      head = head.next;

	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();else last = undefined;
	        throw error;
	      }
	    }

	    last = undefined;
	    if (parent) parent.enter();
	  }; // Node.js


	  if (IS_NODE$1) {
	    notify$1 = function () {
	      process$2.nextTick(flush);
	    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

	  } else if (MutationObserver && !IS_IOS) {
	    toggle = true;
	    node = document.createTextNode('');
	    new MutationObserver(flush).observe(node, {
	      characterData: true
	    });

	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    }; // environments with maybe non-completely correct, but existent Promise

	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    promise = Promise$1.resolve(undefined);
	    then = promise.then;

	    notify$1 = function () {
	      then.call(promise, flush);
	    }; // for other environments - macrotask based on:
	    // - setImmediate
	    // - MessageChannel
	    // - window.postMessag
	    // - onreadystatechange
	    // - setTimeout

	  } else {
	    notify$1 = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global$i, flush);
	    };
	  }
	}

	var microtask$2 = queueMicrotask || function (fn) {
	  var task = {
	    fn: fn,
	    next: undefined
	  };
	  if (last) last.next = task;

	  if (!head) {
	    head = task;
	    notify$1();
	  }

	  last = task;
	};

	var newPromiseCapability$2 = {};

	var aFunction$4 = aFunction$f;

	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aFunction$4(resolve);
	  this.reject = aFunction$4(reject);
	}; // 25.4.1.5 NewPromiseCapability(C)


	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var anObject$f = anObject$x;
	var isObject$a = isObject$y;
	var newPromiseCapability$1 = newPromiseCapability$2;

	var promiseResolve$2 = function (C, x) {
	  anObject$f(C);
	  if (isObject$a(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var global$h = global$H;

	var hostReportErrors$1 = function (a, b) {
	  var console = global$h.console;

	  if (console && console.error) {
	    arguments.length === 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$2 = function (exec) {
	  try {
	    return {
	      error: false,
	      value: exec()
	    };
	  } catch (error) {
	    return {
	      error: true,
	      value: error
	    };
	  }
	};

	var $$r = _export;
	var global$g = global$H;
	var getBuiltIn$5 = getBuiltIn$c;
	var NativePromise$1 = nativePromiseConstructor;
	var redefine$5 = redefine$g.exports;
	var redefineAll$5 = redefineAll$6;
	var setToStringTag$4 = setToStringTag$a;
	var setSpecies$3 = setSpecies$6;
	var isObject$9 = isObject$y;
	var aFunction$3 = aFunction$f;
	var anInstance$7 = anInstance$8;
	var classof$4 = classofRaw$1;
	var inspectSource = inspectSource$3;
	var iterate$4 = iterate$7.exports;
	var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$4;
	var speciesConstructor$6 = speciesConstructor$9;
	var task$1 = task$2.set;
	var microtask$1 = microtask$2;
	var promiseResolve$1 = promiseResolve$2;
	var hostReportErrors = hostReportErrors$1;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$2;
	var InternalStateModule$6 = internalState;
	var isForced$1 = isForced_1;
	var wellKnownSymbol$5 = wellKnownSymbol$u;
	var V8_VERSION = engineV8Version;
	var SPECIES = wellKnownSymbol$5('species');
	var PROMISE = 'Promise';
	var getInternalState$2 = InternalStateModule$6.get;
	var setInternalState$6 = InternalStateModule$6.set;
	var getInternalPromiseState = InternalStateModule$6.getterFor(PROMISE);
	var PromiseConstructor = NativePromise$1;
	var TypeError$1 = global$g.TypeError;
	var document$1 = global$g.document;
	var process$1 = global$g.process;
	var $fetch$1 = getBuiltIn$5('fetch');
	var newPromiseCapability = newPromiseCapabilityModule$1.f;
	var newGenericPromiseCapability = newPromiseCapability;
	var IS_NODE = classof$4(process$1) == 'process';
	var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$g.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
	var FORCED$5 = isForced$1(PROMISE, function () {
	  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);

	  if (!GLOBAL_CORE_JS_PROMISE) {
	    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	    // We can't detect it synchronously, so just check versions
	    if (V8_VERSION === 66) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

	    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
	  } // We need Promise#finally in the pure version for preventing prototype pollution
	  // deoptimization and performance degradation
	  // https://github.com/zloirock/core-js/issues/679

	  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

	  var promise = PromiseConstructor.resolve(1);

	  var FakePromise = function (exec) {
	    exec(function () {
	      /* empty */
	    }, function () {
	      /* empty */
	    });
	  };

	  var constructor = promise.constructor = {};
	  constructor[SPECIES] = FakePromise;
	  return !(promise.then(function () {
	    /* empty */
	  }) instanceof FakePromise);
	});
	var INCORRECT_ITERATION = FORCED$5 || !checkCorrectnessOfIteration$2(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () {
	    /* empty */
	  });
	}); // helpers

	var isThenable = function (it) {
	  var then;
	  return isObject$9(it) && typeof (then = it.then) == 'function' ? then : false;
	};

	var notify = function (promise, state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask$1(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0; // variable length - can't use forEach

	    while (chain.length > index) {
	      var reaction = chain[index++];
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;

	      try {
	        if (handler) {
	          if (!ok) {
	            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
	            state.rejection = HANDLED;
	          }

	          if (handler === true) result = value;else {
	            if (domain) domain.enter();
	            result = handler(value); // can throw

	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }

	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }

	    state.reactions = [];
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(promise, state);
	  });
	};

	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;

	  if (DISPATCH_EVENT) {
	    event = document$1.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$g.dispatchEvent(event);
	  } else event = {
	    promise: promise,
	    reason: reason
	  };

	  if (handler = global$g['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};

	var onUnhandled = function (promise, state) {
	  task$1.call(global$g, function () {
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;

	    if (IS_UNHANDLED) {
	      result = perform$1(function () {
	        if (IS_NODE) {
	          process$1.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};

	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};

	var onHandleUnhandled = function (promise, state) {
	  task$1.call(global$g, function () {
	    if (IS_NODE) {
	      process$1.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};

	var bind$4 = function (fn, promise, state, unwrap) {
	  return function (value) {
	    fn(promise, state, value, unwrap);
	  };
	};

	var internalReject = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(promise, state, true);
	};

	var internalResolve = function (promise, state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;

	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    var then = isThenable(value);

	    if (then) {
	      microtask$1(function () {
	        var wrapper = {
	          done: false
	        };

	        try {
	          then.call(value, bind$4(internalResolve, promise, wrapper, state), bind$4(internalReject, promise, wrapper, state));
	        } catch (error) {
	          internalReject(promise, wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(promise, state, false);
	    }
	  } catch (error) {
	    internalReject(promise, {
	      done: false
	    }, error, state);
	  }
	}; // constructor polyfill


	if (FORCED$5) {
	  // 25.4.3.1 Promise(executor)
	  PromiseConstructor = function Promise(executor) {
	    anInstance$7(this, PromiseConstructor, PROMISE);
	    aFunction$3(executor);
	    Internal.call(this);
	    var state = getInternalState$2(this);

	    try {
	      executor(bind$4(internalResolve, this, state), bind$4(internalReject, this, state));
	    } catch (error) {
	      internalReject(this, state, error);
	    }
	  }; // eslint-disable-next-line no-unused-vars


	  Internal = function Promise(executor) {
	    setInternalState$6(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };

	  Internal.prototype = redefineAll$5(PromiseConstructor.prototype, {
	    // `Promise.prototype.then` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reaction = newPromiseCapability(speciesConstructor$6(this, PromiseConstructor));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = IS_NODE ? process$1.domain : undefined;
	      state.parent = true;
	      state.reactions.push(reaction);
	      if (state.state != PENDING) notify(this, state, false);
	      return reaction.promise;
	    },
	    // `Promise.prototype.catch` method
	    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });

	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$2(promise);
	    this.promise = promise;
	    this.resolve = bind$4(internalResolve, promise, state);
	    this.reject = bind$4(internalReject, promise, state);
	  };

	  newPromiseCapabilityModule$1.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
	  };

	  if (typeof NativePromise$1 == 'function') {
	    nativeThen = NativePromise$1.prototype.then; // wrap native Promise#then for native async functions

	    redefine$5(NativePromise$1.prototype, 'then', function then(onFulfilled, onRejected) {
	      var that = this;
	      return new PromiseConstructor(function (resolve, reject) {
	        nativeThen.call(that, resolve, reject);
	      }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
	    }, {
	      unsafe: true
	    }); // wrap fetch result

	    if (typeof $fetch$1 == 'function') $$r({
	      global: true,
	      enumerable: true,
	      forced: true
	    }, {
	      // eslint-disable-next-line no-unused-vars
	      fetch: function fetch(input
	      /* , init */
	      ) {
	        return promiseResolve$1(PromiseConstructor, $fetch$1.apply(global$g, arguments));
	      }
	    });
	  }
	}

	$$r({
	  global: true,
	  wrap: true,
	  forced: FORCED$5
	}, {
	  Promise: PromiseConstructor
	});
	setToStringTag$4(PromiseConstructor, PROMISE, false);
	setSpecies$3(PROMISE);
	PromiseWrapper = getBuiltIn$5(PROMISE); // statics

	$$r({
	  target: PROMISE,
	  stat: true,
	  forced: FORCED$5
	}, {
	  // `Promise.reject` method
	  // https://tc39.github.io/ecma262/#sec-promise.reject
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    capability.reject.call(undefined, r);
	    return capability.promise;
	  }
	});
	$$r({
	  target: PROMISE,
	  stat: true,
	  forced: FORCED$5
	}, {
	  // `Promise.resolve` method
	  // https://tc39.github.io/ecma262/#sec-promise.resolve
	  resolve: function resolve(x) {
	    return promiseResolve$1(this, x);
	  }
	});
	$$r({
	  target: PROMISE,
	  stat: true,
	  forced: INCORRECT_ITERATION
	}, {
	  // `Promise.all` method
	  // https://tc39.github.io/ecma262/#sec-promise.all
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var $promiseResolve = aFunction$3(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$4(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        $promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  },
	  // `Promise.race` method
	  // https://tc39.github.io/ecma262/#sec-promise.race
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var $promiseResolve = aFunction$3(C.resolve);
	      iterate$4(iterable, function (promise) {
	        $promiseResolve.call(C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$q = _export;
	var aFunction$2 = aFunction$f;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$2;
	var iterate$3 = iterate$7.exports; // `Promise.allSettled` method
	// https://github.com/tc39/proposal-promise-allSettled

	$$q({
	  target: 'Promise',
	  stat: true
	}, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform(function () {
	      var promiseResolve = aFunction$2(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$3(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        promiseResolve.call(C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'fulfilled',
	            value: value
	          };
	          --remaining || resolve(values);
	        }, function (e) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = {
	            status: 'rejected',
	            reason: e
	          };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$p = _export;
	var NativePromise = nativePromiseConstructor;
	var fails$d = fails$V;
	var getBuiltIn$4 = getBuiltIn$c;
	var speciesConstructor$5 = speciesConstructor$9;
	var promiseResolve = promiseResolve$2;
	var redefine$4 = redefine$g.exports; // Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829

	var NON_GENERIC = !!NativePromise && fails$d(function () {
	  NativePromise.prototype['finally'].call({
	    then: function () {
	      /* empty */
	    }
	  }, function () {
	    /* empty */
	  });
	}); // `Promise.prototype.finally` method
	// https://tc39.github.io/ecma262/#sec-promise.prototype.finally

	$$p({
	  target: 'Promise',
	  proto: true,
	  real: true,
	  forced: NON_GENERIC
	}, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor$5(this, getBuiltIn$4('Promise'));
	    var isFunction = typeof onFinally == 'function';
	    return this.then(isFunction ? function (x) {
	      return promiseResolve(C, onFinally()).then(function () {
	        return x;
	      });
	    } : onFinally, isFunction ? function (e) {
	      return promiseResolve(C, onFinally()).then(function () {
	        throw e;
	      });
	    } : onFinally);
	  }
	}); // patch native Promise.prototype for native async functions

	if (typeof NativePromise == 'function' && !NativePromise.prototype['finally']) {
	  redefine$4(NativePromise.prototype, 'finally', getBuiltIn$4('Promise').prototype['finally']);
	}

	var $$o = _export;
	var global$f = global$H;
	var isForced = isForced_1;
	var redefine$3 = redefine$g.exports;
	var InternalMetadataModule$1 = internalMetadata.exports;
	var iterate$2 = iterate$7.exports;
	var anInstance$6 = anInstance$8;
	var isObject$8 = isObject$y;
	var fails$c = fails$V;
	var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$4;
	var setToStringTag$3 = setToStringTag$a;
	var inheritIfRequired$1 = inheritIfRequired$4;

	var collection$4 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$f[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var Constructor = NativeConstructor;
	  var exported = {};

	  var fixMethod = function (KEY) {
	    var nativeMethod = NativePrototype[KEY];
	    redefine$3(NativePrototype, KEY, KEY == 'add' ? function add(value) {
	      nativeMethod.call(this, value === 0 ? 0 : value);
	      return this;
	    } : KEY == 'delete' ? function (key) {
	      return IS_WEAK && !isObject$8(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	    } : KEY == 'get' ? function get(key) {
	      return IS_WEAK && !isObject$8(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
	    } : KEY == 'has' ? function has(key) {
	      return IS_WEAK && !isObject$8(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
	    } : function set(key, value) {
	      nativeMethod.call(this, key === 0 ? 0 : key, value);
	      return this;
	    });
	  }; // eslint-disable-next-line max-len


	  if (isForced(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails$c(function () {
	    new NativeConstructor().entries().next();
	  })))) {
	    // create collection constructor
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule$1.REQUIRED = true;
	  } else if (isForced(CONSTRUCTOR_NAME, true)) {
	    var instance = new Constructor(); // early implementations not supports chaining

	    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

	    var THROWS_ON_PRIMITIVES = fails$c(function () {
	      instance.has(1);
	    }); // most early implementations doesn't supports iterables, most modern - not close it correctly
	    // eslint-disable-next-line no-new

	    var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) {
	      new NativeConstructor(iterable);
	    }); // for early implementations -0 and +0 not the same

	    var BUGGY_ZERO = !IS_WEAK && fails$c(function () {
	      // V8 ~ Chromium 42- fails only with 5+ elements
	      var $instance = new NativeConstructor();
	      var index = 5;

	      while (index--) $instance[ADDER](index, index);

	      return !$instance.has(-0);
	    });

	    if (!ACCEPT_ITERABLES) {
	      Constructor = wrapper(function (dummy, iterable) {
	        anInstance$6(dummy, Constructor, CONSTRUCTOR_NAME);
	        var that = inheritIfRequired$1(new NativeConstructor(), dummy, Constructor);
	        if (iterable != undefined) iterate$2(iterable, that[ADDER], that, IS_MAP);
	        return that;
	      });
	      Constructor.prototype = NativePrototype;
	      NativePrototype.constructor = Constructor;
	    }

	    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }

	    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

	    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
	  }

	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$o({
	    global: true,
	    forced: Constructor != NativeConstructor
	  }, exported);
	  setToStringTag$3(Constructor, CONSTRUCTOR_NAME);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var defineProperty$2 = objectDefineProperty.f;
	var create$3 = objectCreate;
	var redefineAll$4 = redefineAll$6;
	var bind$3 = functionBindContext;
	var anInstance$5 = anInstance$8;
	var iterate$1 = iterate$7.exports;
	var defineIterator = defineIterator$3;
	var setSpecies$2 = setSpecies$6;
	var DESCRIPTORS$6 = descriptors;
	var fastKey = internalMetadata.exports.fastKey;
	var InternalStateModule$5 = internalState;
	var setInternalState$5 = InternalStateModule$5.set;
	var internalStateGetterFor$1 = InternalStateModule$5.getterFor;
	var collectionStrong$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance$5(that, C, CONSTRUCTOR_NAME);
	      setInternalState$5(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create$3(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS$6) that.size = 0;
	      if (iterable != undefined) iterate$1(iterable, that[ADDER], that, IS_MAP);
	    });
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index; // change existing entry

	      if (entry) {
	        entry.value = value; // create new entry
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$6) state.size++;else that.size++; // add to index

	        if (index !== 'F') state.index[index] = entry;
	      }

	      return that;
	    };

	    var getEntry = function (that, key) {
	      var state = getInternalState(that); // fast case

	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index]; // frozen object case

	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };

	    redefineAll$4(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;

	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }

	        state.first = state.last = undefined;
	        if (DESCRIPTORS$6) state.size = 0;else that.size = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);

	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (DESCRIPTORS$6) state.size--;else that.size--;
	        }

	        return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn
	      /* , that = undefined */
	      ) {
	        var state = getInternalState(this);
	        var boundFunction = bind$3(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
	        var entry;

	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this); // revert to the last existing entry

	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    redefineAll$4(C.prototype, IS_MAP ? {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$6) defineProperty$2(C.prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return C;
	  },
	  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

	    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState$5(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last; // revert to the last existing entry

	      while (entry && entry.removed) entry = entry.previous; // get next entry


	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        // or finish the iteration
	        state.target = undefined;
	        return {
	          value: undefined,
	          done: true
	        };
	      } // return step by kind


	      if (kind == 'keys') return {
	        value: entry.key,
	        done: false
	      };
	      if (kind == 'values') return {
	        value: entry.value,
	        done: false
	      };
	      return {
	        value: [entry.key, entry.value],
	        done: false
	      };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

	    setSpecies$2(CONSTRUCTOR_NAME);
	  }
	};

	var collection$3 = collection$4;
	var collectionStrong$1 = collectionStrong$2; // `Map` constructor
	// https://tc39.github.io/ecma262/#sec-map-objects

	collection$3('Map', function (init) {
	  return function Map() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong$1);

	var collection$2 = collection$4;
	var collectionStrong = collectionStrong$2; // `Set` constructor
	// https://tc39.github.io/ecma262/#sec-set-objects

	collection$2('Set', function (init) {
	  return function Set() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionStrong);

	var redefineAll$3 = redefineAll$6;
	var getWeakData = internalMetadata.exports.getWeakData;
	var anObject$e = anObject$x;
	var isObject$7 = isObject$y;
	var anInstance$4 = anInstance$8;
	var iterate = iterate$7.exports;
	var ArrayIterationModule = arrayIteration;
	var $has = has$k;
	var InternalStateModule$4 = internalState;
	var setInternalState$4 = InternalStateModule$4.set;
	var internalStateGetterFor = InternalStateModule$4.getterFor;
	var find$1 = ArrayIterationModule.find;
	var findIndex = ArrayIterationModule.findIndex;
	var id = 0; // fallback for uncaught frozen keys

	var uncaughtFrozenStore = function (store) {
	  return store.frozen || (store.frozen = new UncaughtFrozenStore());
	};

	var UncaughtFrozenStore = function () {
	  this.entries = [];
	};

	var findUncaughtFrozen = function (store, key) {
	  return find$1(store.entries, function (it) {
	    return it[0] === key;
	  });
	};

	UncaughtFrozenStore.prototype = {
	  get: function (key) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function (key) {
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function (key, value) {
	    var entry = findUncaughtFrozen(this, key);
	    if (entry) entry[1] = value;else this.entries.push([key, value]);
	  },
	  'delete': function (key) {
	    var index = findIndex(this.entries, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.entries.splice(index, 1);
	    return !!~index;
	  }
	};
	var collectionWeak$2 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      anInstance$4(that, C, CONSTRUCTOR_NAME);
	      setInternalState$4(that, {
	        type: CONSTRUCTOR_NAME,
	        id: id++,
	        frozen: undefined
	      });
	      if (iterable != undefined) iterate(iterable, that[ADDER], that, IS_MAP);
	    });
	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var data = getWeakData(anObject$e(key), true);
	      if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
	      return that;
	    };

	    redefineAll$3(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function (key) {
	        var state = getInternalState(this);
	        if (!isObject$7(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
	        return data && $has(data, state.id) && delete data[state.id];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        var state = getInternalState(this);
	        if (!isObject$7(key)) return false;
	        var data = getWeakData(key);
	        if (data === true) return uncaughtFrozenStore(state).has(key);
	        return data && $has(data, state.id);
	      }
	    });
	    redefineAll$3(C.prototype, IS_MAP ? {
	      // 23.3.3.3 WeakMap.prototype.get(key)
	      get: function get(key) {
	        var state = getInternalState(this);

	        if (isObject$7(key)) {
	          var data = getWeakData(key);
	          if (data === true) return uncaughtFrozenStore(state).get(key);
	          return data ? data[state.id] : undefined;
	        }
	      },
	      // 23.3.3.5 WeakMap.prototype.set(key, value)
	      set: function set(key, value) {
	        return define(this, key, value);
	      }
	    } : {
	      // 23.4.3.1 WeakSet.prototype.add(value)
	      add: function add(value) {
	        return define(this, value, true);
	      }
	    });
	    return C;
	  }
	};

	var global$e = global$H;
	var redefineAll$2 = redefineAll$6;
	var InternalMetadataModule = internalMetadata.exports;
	var collection$1 = collection$4;
	var collectionWeak$1 = collectionWeak$2;
	var isObject$6 = isObject$y;
	var enforceIternalState = internalState.enforce;
	var NATIVE_WEAK_MAP = nativeWeakMap;
	var IS_IE11 = !global$e.ActiveXObject && 'ActiveXObject' in global$e;
	var isExtensible = Object.isExtensible;
	var InternalWeakMap;

	var wrapper = function (init) {
	  return function WeakMap() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}; // `WeakMap` constructor
	// https://tc39.github.io/ecma262/#sec-weakmap-constructor


	var $WeakMap = collection$1('WeakMap', wrapper, collectionWeak$1); // IE11 WeakMap frozen keys fix
	// We can't use feature detection because it crash some old IE builds
	// https://github.com/zloirock/core-js/issues/485

	if (NATIVE_WEAK_MAP && IS_IE11) {
	  InternalWeakMap = collectionWeak$1.getConstructor(wrapper, 'WeakMap', true);
	  InternalMetadataModule.REQUIRED = true;
	  var WeakMapPrototype = $WeakMap.prototype;
	  var nativeDelete = WeakMapPrototype['delete'];
	  var nativeHas = WeakMapPrototype.has;
	  var nativeGet = WeakMapPrototype.get;
	  var nativeSet = WeakMapPrototype.set;
	  redefineAll$2(WeakMapPrototype, {
	    'delete': function (key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeDelete.call(this, key) || state.frozen['delete'](key);
	      }

	      return nativeDelete.call(this, key);
	    },
	    has: function has(key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) || state.frozen.has(key);
	      }

	      return nativeHas.call(this, key);
	    },
	    get: function get(key) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
	      }

	      return nativeGet.call(this, key);
	    },
	    set: function set(key, value) {
	      if (isObject$6(key) && !isExtensible(key)) {
	        var state = enforceIternalState(this);
	        if (!state.frozen) state.frozen = new InternalWeakMap();
	        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
	      } else nativeSet.call(this, key, value);

	      return this;
	    }
	  });
	}

	var collection = collection$4;
	var collectionWeak = collectionWeak$2; // `WeakSet` constructor
	// https://tc39.github.io/ecma262/#sec-weakset-constructor

	collection('WeakSet', function (init) {
	  return function WeakSet() {
	    return init(this, arguments.length ? arguments[0] : undefined);
	  };
	}, collectionWeak);

	var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

	var toInteger$2 = toInteger$c;
	var toLength$6 = toLength$t; // `ToIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-toindex

	var toIndex$2 = function (it) {
	  if (it === undefined) return 0;
	  var number = toInteger$2(it);
	  var length = toLength$6(number);
	  if (number !== length) throw RangeError('Wrong length or index');
	  return length;
	};

	// eslint-disable-next-line no-shadow-restricted-names

	var Infinity$1 = 1 / 0;
	var abs = Math.abs;
	var pow$1 = Math.pow;
	var floor$3 = Math.floor;
	var log = Math.log;
	var LN2 = Math.LN2;

	var pack = function (number, mantissaLength, bytes) {
	  var buffer = new Array(bytes);
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var rt = mantissaLength === 23 ? pow$1(2, -24) - pow$1(2, -77) : 0;
	  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
	  var index = 0;
	  var exponent, mantissa, c;
	  number = abs(number); // eslint-disable-next-line no-self-compare

	  if (number != number || number === Infinity$1) {
	    // eslint-disable-next-line no-self-compare
	    mantissa = number != number ? 1 : 0;
	    exponent = eMax;
	  } else {
	    exponent = floor$3(log(number) / LN2);

	    if (number * (c = pow$1(2, -exponent)) < 1) {
	      exponent--;
	      c *= 2;
	    }

	    if (exponent + eBias >= 1) {
	      number += rt / c;
	    } else {
	      number += rt * pow$1(2, 1 - eBias);
	    }

	    if (number * c >= 2) {
	      exponent++;
	      c /= 2;
	    }

	    if (exponent + eBias >= eMax) {
	      mantissa = 0;
	      exponent = eMax;
	    } else if (exponent + eBias >= 1) {
	      mantissa = (number * c - 1) * pow$1(2, mantissaLength);
	      exponent = exponent + eBias;
	    } else {
	      mantissa = number * pow$1(2, eBias - 1) * pow$1(2, mantissaLength);
	      exponent = 0;
	    }
	  }

	  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);

	  exponent = exponent << mantissaLength | mantissa;
	  exponentLength += mantissaLength;

	  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);

	  buffer[--index] |= sign * 128;
	  return buffer;
	};

	var unpack = function (buffer, mantissaLength) {
	  var bytes = buffer.length;
	  var exponentLength = bytes * 8 - mantissaLength - 1;
	  var eMax = (1 << exponentLength) - 1;
	  var eBias = eMax >> 1;
	  var nBits = exponentLength - 7;
	  var index = bytes - 1;
	  var sign = buffer[index--];
	  var exponent = sign & 127;
	  var mantissa;
	  sign >>= 7;

	  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);

	  mantissa = exponent & (1 << -nBits) - 1;
	  exponent >>= -nBits;
	  nBits += mantissaLength;

	  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);

	  if (exponent === 0) {
	    exponent = 1 - eBias;
	  } else if (exponent === eMax) {
	    return mantissa ? NaN : sign ? -Infinity$1 : Infinity$1;
	  } else {
	    mantissa = mantissa + pow$1(2, mantissaLength);
	    exponent = exponent - eBias;
	  }

	  return (sign ? -1 : 1) * mantissa * pow$1(2, exponent - mantissaLength);
	};

	var ieee754 = {
	  pack: pack,
	  unpack: unpack
	};

	var global$d = global$H;
	var DESCRIPTORS$5 = descriptors;
	var NATIVE_ARRAY_BUFFER$2 = arrayBufferNative;
	var createNonEnumerableProperty$3 = createNonEnumerableProperty$f;
	var redefineAll$1 = redefineAll$6;
	var fails$b = fails$V;
	var anInstance$3 = anInstance$8;
	var toInteger$1 = toInteger$c;
	var toLength$5 = toLength$t;
	var toIndex$1 = toIndex$2;
	var IEEE754 = ieee754;
	var getPrototypeOf$3 = objectGetPrototypeOf$1;
	var setPrototypeOf$2 = objectSetPrototypeOf$1;
	var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
	var defineProperty$1 = objectDefineProperty.f;
	var arrayFill = arrayFill$1;
	var setToStringTag$2 = setToStringTag$a;
	var InternalStateModule$3 = internalState;
	var getInternalState$1 = InternalStateModule$3.get;
	var setInternalState$3 = InternalStateModule$3.set;
	var ARRAY_BUFFER$1 = 'ArrayBuffer';
	var DATA_VIEW = 'DataView';
	var PROTOTYPE = 'prototype';
	var WRONG_LENGTH$1 = 'Wrong length';
	var WRONG_INDEX = 'Wrong index';
	var NativeArrayBuffer$1 = global$d[ARRAY_BUFFER$1];
	var $ArrayBuffer = NativeArrayBuffer$1;
	var $DataView = global$d[DATA_VIEW];
	var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
	var ObjectPrototype$1 = Object.prototype;
	var RangeError$2 = global$d.RangeError;
	var packIEEE754 = IEEE754.pack;
	var unpackIEEE754 = IEEE754.unpack;

	var packInt8 = function (number) {
	  return [number & 0xFF];
	};

	var packInt16 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF];
	};

	var packInt32 = function (number) {
	  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
	};

	var unpackInt32 = function (buffer) {
	  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
	};

	var packFloat32 = function (number) {
	  return packIEEE754(number, 23, 4);
	};

	var packFloat64 = function (number) {
	  return packIEEE754(number, 52, 8);
	};

	var addGetter$1 = function (Constructor, key) {
	  defineProperty$1(Constructor[PROTOTYPE], key, {
	    get: function () {
	      return getInternalState$1(this)[key];
	    }
	  });
	};

	var get$1 = function (view, count, index, isLittleEndian) {
	  var intIndex = toIndex$1(index);
	  var store = getInternalState$1(view);
	  if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
	  var bytes = getInternalState$1(store.buffer).bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = bytes.slice(start, start + count);
	  return isLittleEndian ? pack : pack.reverse();
	};

	var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
	  var intIndex = toIndex$1(index);
	  var store = getInternalState$1(view);
	  if (intIndex + count > store.byteLength) throw RangeError$2(WRONG_INDEX);
	  var bytes = getInternalState$1(store.buffer).bytes;
	  var start = intIndex + store.byteOffset;
	  var pack = conversion(+value);

	  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
	};

	if (!NATIVE_ARRAY_BUFFER$2) {
	  $ArrayBuffer = function ArrayBuffer(length) {
	    anInstance$3(this, $ArrayBuffer, ARRAY_BUFFER$1);
	    var byteLength = toIndex$1(length);
	    setInternalState$3(this, {
	      bytes: arrayFill.call(new Array(byteLength), 0),
	      byteLength: byteLength
	    });
	    if (!DESCRIPTORS$5) this.byteLength = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength) {
	    anInstance$3(this, $DataView, DATA_VIEW);
	    anInstance$3(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = getInternalState$1(buffer).byteLength;
	    var offset = toInteger$1(byteOffset);
	    if (offset < 0 || offset > bufferLength) throw RangeError$2('Wrong offset');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength$5(byteLength);
	    if (offset + byteLength > bufferLength) throw RangeError$2(WRONG_LENGTH$1);
	    setInternalState$3(this, {
	      buffer: buffer,
	      byteLength: byteLength,
	      byteOffset: offset
	    });

	    if (!DESCRIPTORS$5) {
	      this.buffer = buffer;
	      this.byteLength = byteLength;
	      this.byteOffset = offset;
	    }
	  };

	  if (DESCRIPTORS$5) {
	    addGetter$1($ArrayBuffer, 'byteLength');
	    addGetter$1($DataView, 'buffer');
	    addGetter$1($DataView, 'byteLength');
	    addGetter$1($DataView, 'byteOffset');
	  }

	  redefineAll$1($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset) {
	      return get$1(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset) {
	      return get$1(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset
	    /* , littleEndian */
	    ) {
	      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset
	    /* , littleEndian */
	    ) {
	      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset
	    /* , littleEndian */
	    ) {
	      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
	    },
	    getUint32: function getUint32(byteOffset
	    /* , littleEndian */
	    ) {
	      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset
	    /* , littleEndian */
	    ) {
	      return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
	    },
	    getFloat64: function getFloat64(byteOffset
	    /* , littleEndian */
	    ) {
	      return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
	    },
	    setInt8: function setInt8(byteOffset, value) {
	      set$1(this, 1, byteOffset, packInt8, value);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      set$1(this, 1, byteOffset, packInt8, value);
	    },
	    setInt16: function setInt16(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setUint16: function setUint16(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setInt32: function setInt32(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setUint32: function setUint32(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setFloat32: function setFloat32(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    setFloat64: function setFloat64(byteOffset, value
	    /* , littleEndian */
	    ) {
	      set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
	    }
	  });
	} else {
	  if (!fails$b(function () {
	    NativeArrayBuffer$1(1);
	  }) || !fails$b(function () {
	    new NativeArrayBuffer$1(-1); // eslint-disable-line no-new
	  }) || fails$b(function () {
	    new NativeArrayBuffer$1(); // eslint-disable-line no-new

	    new NativeArrayBuffer$1(1.5); // eslint-disable-line no-new

	    new NativeArrayBuffer$1(NaN); // eslint-disable-line no-new

	    return NativeArrayBuffer$1.name != ARRAY_BUFFER$1;
	  })) {
	    $ArrayBuffer = function ArrayBuffer(length) {
	      anInstance$3(this, $ArrayBuffer);
	      return new NativeArrayBuffer$1(toIndex$1(length));
	    };

	    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer$1[PROTOTYPE];

	    for (var keys = getOwnPropertyNames$1(NativeArrayBuffer$1), j = 0, key; keys.length > j;) {
	      if (!((key = keys[j++]) in $ArrayBuffer)) {
	        createNonEnumerableProperty$3($ArrayBuffer, key, NativeArrayBuffer$1[key]);
	      }
	    }

	    ArrayBufferPrototype.constructor = $ArrayBuffer;
	  } // WebKit bug - the same parent prototype for typed arrays and data view


	  if (setPrototypeOf$2 && getPrototypeOf$3($DataViewPrototype) !== ObjectPrototype$1) {
	    setPrototypeOf$2($DataViewPrototype, ObjectPrototype$1);
	  } // iOS Safari 7.x bug


	  var testView = new $DataView(new $ArrayBuffer(2));
	  var nativeSetInt8 = $DataViewPrototype.setInt8;
	  testView.setInt8(0, 2147483648);
	  testView.setInt8(1, 2147483649);
	  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll$1($DataViewPrototype, {
	    setInt8: function setInt8(byteOffset, value) {
	      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value) {
	      nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, {
	    unsafe: true
	  });
	}

	setToStringTag$2($ArrayBuffer, ARRAY_BUFFER$1);
	setToStringTag$2($DataView, DATA_VIEW);
	var arrayBuffer = {
	  ArrayBuffer: $ArrayBuffer,
	  DataView: $DataView
	};

	var $$n = _export;
	var global$c = global$H;
	var arrayBufferModule = arrayBuffer;
	var setSpecies$1 = setSpecies$6;
	var ARRAY_BUFFER = 'ArrayBuffer';
	var ArrayBuffer$4 = arrayBufferModule[ARRAY_BUFFER];
	var NativeArrayBuffer = global$c[ARRAY_BUFFER]; // `ArrayBuffer` constructor
	// https://tc39.github.io/ecma262/#sec-arraybuffer-constructor

	$$n({
	  global: true,
	  forced: NativeArrayBuffer !== ArrayBuffer$4
	}, {
	  ArrayBuffer: ArrayBuffer$4
	});
	setSpecies$1(ARRAY_BUFFER);

	var NATIVE_ARRAY_BUFFER$1 = arrayBufferNative;
	var DESCRIPTORS$4 = descriptors;
	var global$b = global$H;
	var isObject$5 = isObject$y;
	var has$4 = has$k;
	var classof$3 = classof$d;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$f;
	var redefine$2 = redefine$g.exports;
	var defineProperty = objectDefineProperty.f;
	var getPrototypeOf$2 = objectGetPrototypeOf$1;
	var setPrototypeOf$1 = objectSetPrototypeOf$1;
	var wellKnownSymbol$4 = wellKnownSymbol$u;
	var uid = uid$5;
	var Int8Array$3 = global$b.Int8Array;
	var Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype;
	var Uint8ClampedArray = global$b.Uint8ClampedArray;
	var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
	var TypedArray$1 = Int8Array$3 && getPrototypeOf$2(Int8Array$3);
	var TypedArrayPrototype$1 = Int8ArrayPrototype && getPrototypeOf$2(Int8ArrayPrototype);
	var ObjectPrototype = Object.prototype;
	var isPrototypeOf = ObjectPrototype.isPrototypeOf;
	var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');
	var TYPED_ARRAY_TAG$1 = uid('TYPED_ARRAY_TAG'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

	var NATIVE_ARRAY_BUFFER_VIEWS$3 = NATIVE_ARRAY_BUFFER$1 && !!setPrototypeOf$1 && classof$3(global$b.opera) !== 'Opera';
	var TYPED_ARRAY_TAG_REQIRED = false;
	var NAME;
	var TypedArrayConstructorsList = {
	  Int8Array: 1,
	  Uint8Array: 1,
	  Uint8ClampedArray: 1,
	  Int16Array: 2,
	  Uint16Array: 2,
	  Int32Array: 4,
	  Uint32Array: 4,
	  Float32Array: 4,
	  Float64Array: 8
	};

	var isView = function isView(it) {
	  var klass = classof$3(it);
	  return klass === 'DataView' || has$4(TypedArrayConstructorsList, klass);
	};

	var isTypedArray$1 = function (it) {
	  return isObject$5(it) && has$4(TypedArrayConstructorsList, classof$3(it));
	};

	var aTypedArray$m = function (it) {
	  if (isTypedArray$1(it)) return it;
	  throw TypeError('Target is not a typed array');
	};

	var aTypedArrayConstructor$6 = function (C) {
	  if (setPrototypeOf$1) {
	    if (isPrototypeOf.call(TypedArray$1, C)) return C;
	  } else for (var ARRAY in TypedArrayConstructorsList) if (has$4(TypedArrayConstructorsList, NAME)) {
	    var TypedArrayConstructor = global$b[ARRAY];

	    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
	      return C;
	    }
	  }

	  throw TypeError('Target is not a typed array constructor');
	};

	var exportTypedArrayMethod$n = function (KEY, property, forced) {
	  if (!DESCRIPTORS$4) return;
	  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
	    var TypedArrayConstructor = global$b[ARRAY];

	    if (TypedArrayConstructor && has$4(TypedArrayConstructor.prototype, KEY)) {
	      delete TypedArrayConstructor.prototype[KEY];
	    }
	  }

	  if (!TypedArrayPrototype$1[KEY] || forced) {
	    redefine$2(TypedArrayPrototype$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$3 && Int8ArrayPrototype[KEY] || property);
	  }
	};

	var exportTypedArrayStaticMethod$2 = function (KEY, property, forced) {
	  var ARRAY, TypedArrayConstructor;
	  if (!DESCRIPTORS$4) return;

	  if (setPrototypeOf$1) {
	    if (forced) for (ARRAY in TypedArrayConstructorsList) {
	      TypedArrayConstructor = global$b[ARRAY];

	      if (TypedArrayConstructor && has$4(TypedArrayConstructor, KEY)) {
	        delete TypedArrayConstructor[KEY];
	      }
	    }

	    if (!TypedArray$1[KEY] || forced) {
	      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
	      try {
	        return redefine$2(TypedArray$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$3 && Int8Array$3[KEY] || property);
	      } catch (error) {
	        /* empty */
	      }
	    } else return;
	  }

	  for (ARRAY in TypedArrayConstructorsList) {
	    TypedArrayConstructor = global$b[ARRAY];

	    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
	      redefine$2(TypedArrayConstructor, KEY, property);
	    }
	  }
	};

	for (NAME in TypedArrayConstructorsList) {
	  if (!global$b[NAME]) NATIVE_ARRAY_BUFFER_VIEWS$3 = false;
	} // WebKit bug - typed arrays constructors prototype is Object.prototype


	if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || typeof TypedArray$1 != 'function' || TypedArray$1 === Function.prototype) {
	  // eslint-disable-next-line no-shadow
	  TypedArray$1 = function TypedArray() {
	    throw TypeError('Incorrect invocation');
	  };

	  if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME in TypedArrayConstructorsList) {
	    if (global$b[NAME]) setPrototypeOf$1(global$b[NAME], TypedArray$1);
	  }
	}

	if (!NATIVE_ARRAY_BUFFER_VIEWS$3 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype) {
	  TypedArrayPrototype$1 = TypedArray$1.prototype;
	  if (NATIVE_ARRAY_BUFFER_VIEWS$3) for (NAME in TypedArrayConstructorsList) {
	    if (global$b[NAME]) setPrototypeOf$1(global$b[NAME].prototype, TypedArrayPrototype$1);
	  }
	} // WebKit bug - one more object in Uint8ClampedArray prototype chain


	if (NATIVE_ARRAY_BUFFER_VIEWS$3 && getPrototypeOf$2(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
	  setPrototypeOf$1(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
	}

	if (DESCRIPTORS$4 && !has$4(TypedArrayPrototype$1, TO_STRING_TAG$1)) {
	  TYPED_ARRAY_TAG_REQIRED = true;
	  defineProperty(TypedArrayPrototype$1, TO_STRING_TAG$1, {
	    get: function () {
	      return isObject$5(this) ? this[TYPED_ARRAY_TAG$1] : undefined;
	    }
	  });

	  for (NAME in TypedArrayConstructorsList) if (global$b[NAME]) {
	    createNonEnumerableProperty$2(global$b[NAME], TYPED_ARRAY_TAG$1, NAME);
	  }
	}

	var arrayBufferViewCore = {
	  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$3,
	  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG$1,
	  aTypedArray: aTypedArray$m,
	  aTypedArrayConstructor: aTypedArrayConstructor$6,
	  exportTypedArrayMethod: exportTypedArrayMethod$n,
	  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
	  isView: isView,
	  isTypedArray: isTypedArray$1,
	  TypedArray: TypedArray$1,
	  TypedArrayPrototype: TypedArrayPrototype$1
	};

	var $$m = _export;
	var ArrayBufferViewCore$o = arrayBufferViewCore;
	var NATIVE_ARRAY_BUFFER_VIEWS$2 = ArrayBufferViewCore$o.NATIVE_ARRAY_BUFFER_VIEWS; // `ArrayBuffer.isView` method
	// https://tc39.github.io/ecma262/#sec-arraybuffer.isview

	$$m({
	  target: 'ArrayBuffer',
	  stat: true,
	  forced: !NATIVE_ARRAY_BUFFER_VIEWS$2
	}, {
	  isView: ArrayBufferViewCore$o.isView
	});

	var $$l = _export;
	var fails$a = fails$V;
	var ArrayBufferModule$2 = arrayBuffer;
	var anObject$d = anObject$x;
	var toAbsoluteIndex$1 = toAbsoluteIndex$8;
	var toLength$4 = toLength$t;
	var speciesConstructor$4 = speciesConstructor$9;
	var ArrayBuffer$3 = ArrayBufferModule$2.ArrayBuffer;
	var DataView$2 = ArrayBufferModule$2.DataView;
	var nativeArrayBufferSlice = ArrayBuffer$3.prototype.slice;
	var INCORRECT_SLICE = fails$a(function () {
	  return !new ArrayBuffer$3(2).slice(1, undefined).byteLength;
	}); // `ArrayBuffer.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice

	$$l({
	  target: 'ArrayBuffer',
	  proto: true,
	  unsafe: true,
	  forced: INCORRECT_SLICE
	}, {
	  slice: function slice(start, end) {
	    if (nativeArrayBufferSlice !== undefined && end === undefined) {
	      return nativeArrayBufferSlice.call(anObject$d(this), start); // FF fix
	    }

	    var length = anObject$d(this).byteLength;
	    var first = toAbsoluteIndex$1(start, length);
	    var fin = toAbsoluteIndex$1(end === undefined ? length : end, length);
	    var result = new (speciesConstructor$4(this, ArrayBuffer$3))(toLength$4(fin - first));
	    var viewSource = new DataView$2(this);
	    var viewTarget = new DataView$2(result);
	    var index = 0;

	    while (first < fin) {
	      viewTarget.setUint8(index++, viewSource.getUint8(first++));
	    }

	    return result;
	  }
	});

	var $$k = _export;
	var ArrayBufferModule$1 = arrayBuffer;
	var NATIVE_ARRAY_BUFFER = arrayBufferNative; // `DataView` constructor
	// https://tc39.github.io/ecma262/#sec-dataview-constructor

	$$k({
	  global: true,
	  forced: !NATIVE_ARRAY_BUFFER
	}, {
	  DataView: ArrayBufferModule$1.DataView
	});

	var typedArrayConstructor = {exports: {}};

	/* eslint-disable no-new */
	var global$a = global$H;
	var fails$9 = fails$V;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$4;
	var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
	var ArrayBuffer$2 = global$a.ArrayBuffer;
	var Int8Array$2 = global$a.Int8Array;
	var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$1 || !fails$9(function () {
	  Int8Array$2(1);
	}) || !fails$9(function () {
	  new Int8Array$2(-1);
	}) || !checkCorrectnessOfIteration(function (iterable) {
	  new Int8Array$2();
	  new Int8Array$2(null);
	  new Int8Array$2(1.5);
	  new Int8Array$2(iterable);
	}, true) || fails$9(function () {
	  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
	  return new Int8Array$2(new ArrayBuffer$2(2), 1, undefined).length !== 1;
	});

	var toInteger = toInteger$c;

	var toPositiveInteger$1 = function (it) {
	  var result = toInteger(it);
	  if (result < 0) throw RangeError("The argument can't be less than 0");
	  return result;
	};

	var toPositiveInteger = toPositiveInteger$1;

	var toOffset$2 = function (it, BYTES) {
	  var offset = toPositiveInteger(it);
	  if (offset % BYTES) throw RangeError('Wrong offset');
	  return offset;
	};

	var toObject$1 = toObject$n;
	var toLength$3 = toLength$t;
	var getIteratorMethod$2 = getIteratorMethod$5;
	var isArrayIteratorMethod = isArrayIteratorMethod$3;
	var bind$2 = functionBindContext;
	var aTypedArrayConstructor$5 = arrayBufferViewCore.aTypedArrayConstructor;

	var typedArrayFrom$2 = function from(source
	/* , mapfn, thisArg */
	) {
	  var O = toObject$1(source);
	  var argumentsLength = arguments.length;
	  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
	  var mapping = mapfn !== undefined;
	  var iteratorMethod = getIteratorMethod$2(O);
	  var i, length, result, step, iterator, next;

	  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
	    iterator = iteratorMethod.call(O);
	    next = iterator.next;
	    O = [];

	    while (!(step = next.call(iterator)).done) {
	      O.push(step.value);
	    }
	  }

	  if (mapping && argumentsLength > 2) {
	    mapfn = bind$2(mapfn, arguments[2], 2);
	  }

	  length = toLength$3(O.length);
	  result = new (aTypedArrayConstructor$5(this))(length);

	  for (i = 0; length > i; i++) {
	    result[i] = mapping ? mapfn(O[i], i) : O[i];
	  }

	  return result;
	};

	var $$j = _export;
	var global$9 = global$H;
	var DESCRIPTORS$3 = descriptors;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2 = typedArrayConstructorsRequireWrappers;
	var ArrayBufferViewCore$n = arrayBufferViewCore;
	var ArrayBufferModule = arrayBuffer;
	var anInstance$2 = anInstance$8;
	var createPropertyDescriptor$2 = createPropertyDescriptor$8;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$f;
	var toLength$2 = toLength$t;
	var toIndex = toIndex$2;
	var toOffset$1 = toOffset$2;
	var toPrimitive$1 = toPrimitive$b;
	var has$3 = has$k;
	var classof$2 = classof$d;
	var isObject$4 = isObject$y;
	var create$2 = objectCreate;
	var setPrototypeOf = objectSetPrototypeOf$1;
	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var typedArrayFrom$1 = typedArrayFrom$2;
	var forEach = arrayIteration.forEach;
	var setSpecies = setSpecies$6;
	var definePropertyModule$2 = objectDefineProperty;
	var getOwnPropertyDescriptorModule$3 = objectGetOwnPropertyDescriptor;
	var InternalStateModule$2 = internalState;
	var inheritIfRequired = inheritIfRequired$4;
	var getInternalState = InternalStateModule$2.get;
	var setInternalState$2 = InternalStateModule$2.set;
	var nativeDefineProperty = definePropertyModule$2.f;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$3.f;
	var round = Math.round;
	var RangeError$1 = global$9.RangeError;
	var ArrayBuffer$1 = ArrayBufferModule.ArrayBuffer;
	var DataView$1 = ArrayBufferModule.DataView;
	var NATIVE_ARRAY_BUFFER_VIEWS = ArrayBufferViewCore$n.NATIVE_ARRAY_BUFFER_VIEWS;
	var TYPED_ARRAY_TAG = ArrayBufferViewCore$n.TYPED_ARRAY_TAG;
	var TypedArray = ArrayBufferViewCore$n.TypedArray;
	var TypedArrayPrototype = ArrayBufferViewCore$n.TypedArrayPrototype;
	var aTypedArrayConstructor$4 = ArrayBufferViewCore$n.aTypedArrayConstructor;
	var isTypedArray = ArrayBufferViewCore$n.isTypedArray;
	var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
	var WRONG_LENGTH = 'Wrong length';

	var fromList = function (C, list) {
	  var index = 0;
	  var length = list.length;
	  var result = new (aTypedArrayConstructor$4(C))(length);

	  while (length > index) result[index] = list[index++];

	  return result;
	};

	var addGetter = function (it, key) {
	  nativeDefineProperty(it, key, {
	    get: function () {
	      return getInternalState(this)[key];
	    }
	  });
	};

	var isArrayBuffer = function (it) {
	  var klass;
	  return it instanceof ArrayBuffer$1 || (klass = classof$2(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
	};

	var isTypedArrayIndex = function (target, key) {
	  return isTypedArray(target) && typeof key != 'symbol' && key in target && String(+key) == String(key);
	};

	var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
	  return isTypedArrayIndex(target, key = toPrimitive$1(key, true)) ? createPropertyDescriptor$2(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
	};

	var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
	  if (isTypedArrayIndex(target, key = toPrimitive$1(key, true)) && isObject$4(descriptor) && has$3(descriptor, 'value') && !has$3(descriptor, 'get') && !has$3(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
	  && !descriptor.configurable && (!has$3(descriptor, 'writable') || descriptor.writable) && (!has$3(descriptor, 'enumerable') || descriptor.enumerable)) {
	    target[key] = descriptor.value;
	    return target;
	  }

	  return nativeDefineProperty(target, key, descriptor);
	};

	if (DESCRIPTORS$3) {
	  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	    getOwnPropertyDescriptorModule$3.f = wrappedGetOwnPropertyDescriptor;
	    definePropertyModule$2.f = wrappedDefineProperty;
	    addGetter(TypedArrayPrototype, 'buffer');
	    addGetter(TypedArrayPrototype, 'byteOffset');
	    addGetter(TypedArrayPrototype, 'byteLength');
	    addGetter(TypedArrayPrototype, 'length');
	  }

	  $$j({
	    target: 'Object',
	    stat: true,
	    forced: !NATIVE_ARRAY_BUFFER_VIEWS
	  }, {
	    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
	    defineProperty: wrappedDefineProperty
	  });

	  typedArrayConstructor.exports = function (TYPE, wrapper, CLAMPED) {
	    var BYTES = TYPE.match(/\d+$/)[0] / 8;
	    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
	    var GETTER = 'get' + TYPE;
	    var SETTER = 'set' + TYPE;
	    var NativeTypedArrayConstructor = global$9[CONSTRUCTOR_NAME];
	    var TypedArrayConstructor = NativeTypedArrayConstructor;
	    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
	    var exported = {};

	    var getter = function (that, index) {
	      var data = getInternalState(that);
	      return data.view[GETTER](index * BYTES + data.byteOffset, true);
	    };

	    var setter = function (that, index, value) {
	      var data = getInternalState(that);
	      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
	      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
	    };

	    var addElement = function (that, index) {
	      nativeDefineProperty(that, index, {
	        get: function () {
	          return getter(this, index);
	        },
	        set: function (value) {
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };

	    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
	      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
	        anInstance$2(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
	        var index = 0;
	        var byteOffset = 0;
	        var buffer, byteLength, length;

	        if (!isObject$4(data)) {
	          length = toIndex(data);
	          byteLength = length * BYTES;
	          buffer = new ArrayBuffer$1(byteLength);
	        } else if (isArrayBuffer(data)) {
	          buffer = data;
	          byteOffset = toOffset$1(offset, BYTES);
	          var $len = data.byteLength;

	          if ($length === undefined) {
	            if ($len % BYTES) throw RangeError$1(WRONG_LENGTH);
	            byteLength = $len - byteOffset;
	            if (byteLength < 0) throw RangeError$1(WRONG_LENGTH);
	          } else {
	            byteLength = toLength$2($length) * BYTES;
	            if (byteLength + byteOffset > $len) throw RangeError$1(WRONG_LENGTH);
	          }

	          length = byteLength / BYTES;
	        } else if (isTypedArray(data)) {
	          return fromList(TypedArrayConstructor, data);
	        } else {
	          return typedArrayFrom$1.call(TypedArrayConstructor, data);
	        }

	        setInternalState$2(that, {
	          buffer: buffer,
	          byteOffset: byteOffset,
	          byteLength: byteLength,
	          length: length,
	          view: new DataView$1(buffer)
	        });

	        while (index < length) addElement(that, index++);
	      });
	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = create$2(TypedArrayPrototype);
	    } else if (TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$2) {
	      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
	        anInstance$2(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
	        return inheritIfRequired(function () {
	          if (!isObject$4(data)) return new NativeTypedArrayConstructor(toIndex(data));
	          if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset$1(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
	          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
	          return typedArrayFrom$1.call(TypedArrayConstructor, data);
	        }(), dummy, TypedArrayConstructor);
	      });
	      if (setPrototypeOf) setPrototypeOf(TypedArrayConstructor, TypedArray);
	      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
	        if (!(key in TypedArrayConstructor)) {
	          createNonEnumerableProperty$1(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
	        }
	      });
	      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
	    }

	    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
	    }

	    if (TYPED_ARRAY_TAG) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
	    }

	    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
	    $$j({
	      global: true,
	      forced: TypedArrayConstructor != NativeTypedArrayConstructor,
	      sham: !NATIVE_ARRAY_BUFFER_VIEWS
	    }, exported);

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
	      createNonEnumerableProperty$1(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
	    }

	    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
	      createNonEnumerableProperty$1(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
	    }

	    setSpecies(CONSTRUCTOR_NAME);
	  };
	} else typedArrayConstructor.exports = function () {
	  /* empty */
	};

	var createTypedArrayConstructor$8 = typedArrayConstructor.exports; // `Int8Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$8('Int8', function (init) {
	  return function Int8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$7 = typedArrayConstructor.exports; // `Uint8Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$7('Uint8', function (init) {
	  return function Uint8Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$6 = typedArrayConstructor.exports; // `Uint8ClampedArray` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$6('Uint8', function (init) {
	  return function Uint8ClampedArray(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	}, true);

	var createTypedArrayConstructor$5 = typedArrayConstructor.exports; // `Int16Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$5('Int16', function (init) {
	  return function Int16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$4 = typedArrayConstructor.exports; // `Uint16Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$4('Uint16', function (init) {
	  return function Uint16Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$3 = typedArrayConstructor.exports; // `Int32Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$3('Int32', function (init) {
	  return function Int32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$2 = typedArrayConstructor.exports; // `Uint32Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$2('Uint32', function (init) {
	  return function Uint32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor$1 = typedArrayConstructor.exports; // `Float32Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor$1('Float32', function (init) {
	  return function Float32Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var createTypedArrayConstructor = typedArrayConstructor.exports; // `Float64Array` constructor
	// https://tc39.github.io/ecma262/#sec-typedarray-objects

	createTypedArrayConstructor('Float64', function (init) {
	  return function Float64Array(data, byteOffset, length) {
	    return init(this, data, byteOffset, length);
	  };
	});

	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1 = typedArrayConstructorsRequireWrappers;
	var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;
	var typedArrayFrom = typedArrayFrom$2; // `%TypedArray%.from` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.from

	exportTypedArrayStaticMethod$1('from', typedArrayFrom, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS$1);

	var ArrayBufferViewCore$m = arrayBufferViewCore;
	var TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS = typedArrayConstructorsRequireWrappers;
	var aTypedArrayConstructor$3 = ArrayBufferViewCore$m.aTypedArrayConstructor;
	var exportTypedArrayStaticMethod = ArrayBufferViewCore$m.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.of

	exportTypedArrayStaticMethod('of', function of()
	/* ...items */
	{
	  var index = 0;
	  var length = arguments.length;
	  var result = new (aTypedArrayConstructor$3(this))(length);

	  while (length > index) result[index] = arguments[index++];

	  return result;
	}, TYPED_ARRAYS_CONSTRUCTORS_REQUIRES_WRAPPERS);

	var ArrayBufferViewCore$l = arrayBufferViewCore;
	var $copyWithin = arrayCopyWithin;
	var aTypedArray$l = ArrayBufferViewCore$l.aTypedArray;
	var exportTypedArrayMethod$m = ArrayBufferViewCore$l.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin

	exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start
	/* , end */
	) {
	  return $copyWithin.call(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	});

	var ArrayBufferViewCore$k = arrayBufferViewCore;
	var $every = arrayIteration.every;
	var aTypedArray$k = ArrayBufferViewCore$k.aTypedArray;
	var exportTypedArrayMethod$l = ArrayBufferViewCore$k.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every

	exportTypedArrayMethod$l('every', function every(callbackfn
	/* , thisArg */
	) {
	  return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$j = arrayBufferViewCore;
	var $fill = arrayFill$1;
	var aTypedArray$j = ArrayBufferViewCore$j.aTypedArray;
	var exportTypedArrayMethod$k = ArrayBufferViewCore$j.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
	// eslint-disable-next-line no-unused-vars

	exportTypedArrayMethod$k('fill', function fill(value
	/* , start, end */
	) {
	  return $fill.apply(aTypedArray$j(this), arguments);
	});

	var ArrayBufferViewCore$i = arrayBufferViewCore;
	var $filter = arrayIteration.filter;
	var speciesConstructor$3 = speciesConstructor$9;
	var aTypedArray$i = ArrayBufferViewCore$i.aTypedArray;
	var aTypedArrayConstructor$2 = ArrayBufferViewCore$i.aTypedArrayConstructor;
	var exportTypedArrayMethod$j = ArrayBufferViewCore$i.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter

	exportTypedArrayMethod$j('filter', function filter(callbackfn
	/* , thisArg */
	) {
	  var list = $filter(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  var C = speciesConstructor$3(this, this.constructor);
	  var index = 0;
	  var length = list.length;
	  var result = new (aTypedArrayConstructor$2(C))(length);

	  while (length > index) result[index] = list[index++];

	  return result;
	});

	var ArrayBufferViewCore$h = arrayBufferViewCore;
	var $find = arrayIteration.find;
	var aTypedArray$h = ArrayBufferViewCore$h.aTypedArray;
	var exportTypedArrayMethod$i = ArrayBufferViewCore$h.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find

	exportTypedArrayMethod$i('find', function find(predicate
	/* , thisArg */
	) {
	  return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$g = arrayBufferViewCore;
	var $findIndex = arrayIteration.findIndex;
	var aTypedArray$g = ArrayBufferViewCore$g.aTypedArray;
	var exportTypedArrayMethod$h = ArrayBufferViewCore$g.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex

	exportTypedArrayMethod$h('findIndex', function findIndex(predicate
	/* , thisArg */
	) {
	  return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$f = arrayBufferViewCore;
	var $forEach = arrayIteration.forEach;
	var aTypedArray$f = ArrayBufferViewCore$f.aTypedArray;
	var exportTypedArrayMethod$g = ArrayBufferViewCore$f.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach

	exportTypedArrayMethod$g('forEach', function forEach(callbackfn
	/* , thisArg */
	) {
	  $forEach(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$e = arrayBufferViewCore;
	var $includes = arrayIncludes.includes;
	var aTypedArray$e = ArrayBufferViewCore$e.aTypedArray;
	var exportTypedArrayMethod$f = ArrayBufferViewCore$e.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes

	exportTypedArrayMethod$f('includes', function includes(searchElement
	/* , fromIndex */
	) {
	  return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$d = arrayBufferViewCore;
	var $indexOf = arrayIncludes.indexOf;
	var aTypedArray$d = ArrayBufferViewCore$d.aTypedArray;
	var exportTypedArrayMethod$e = ArrayBufferViewCore$d.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof

	exportTypedArrayMethod$e('indexOf', function indexOf(searchElement
	/* , fromIndex */
	) {
	  return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	});

	var global$8 = global$H;
	var ArrayBufferViewCore$c = arrayBufferViewCore;
	var ArrayIterators = es_array_iterator;
	var wellKnownSymbol$3 = wellKnownSymbol$u;
	var ITERATOR$3 = wellKnownSymbol$3('iterator');
	var Uint8Array$1 = global$8.Uint8Array;
	var arrayValues = ArrayIterators.values;
	var arrayKeys = ArrayIterators.keys;
	var arrayEntries = ArrayIterators.entries;
	var aTypedArray$c = ArrayBufferViewCore$c.aTypedArray;
	var exportTypedArrayMethod$d = ArrayBufferViewCore$c.exportTypedArrayMethod;
	var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$3];
	var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

	var typedArrayValues = function values() {
	  return arrayValues.call(aTypedArray$c(this));
	}; // `%TypedArray%.prototype.entries` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries


	exportTypedArrayMethod$d('entries', function entries() {
	  return arrayEntries.call(aTypedArray$c(this));
	}); // `%TypedArray%.prototype.keys` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys

	exportTypedArrayMethod$d('keys', function keys() {
	  return arrayKeys.call(aTypedArray$c(this));
	}); // `%TypedArray%.prototype.values` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values

	exportTypedArrayMethod$d('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator

	exportTypedArrayMethod$d(ITERATOR$3, typedArrayValues, !CORRECT_ITER_NAME);

	var ArrayBufferViewCore$b = arrayBufferViewCore;
	var aTypedArray$b = ArrayBufferViewCore$b.aTypedArray;
	var exportTypedArrayMethod$c = ArrayBufferViewCore$b.exportTypedArrayMethod;
	var $join = [].join; // `%TypedArray%.prototype.join` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
	// eslint-disable-next-line no-unused-vars

	exportTypedArrayMethod$c('join', function join(separator) {
	  return $join.apply(aTypedArray$b(this), arguments);
	});

	var ArrayBufferViewCore$a = arrayBufferViewCore;
	var $lastIndexOf = arrayLastIndexOf;
	var aTypedArray$a = ArrayBufferViewCore$a.aTypedArray;
	var exportTypedArrayMethod$b = ArrayBufferViewCore$a.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
	// eslint-disable-next-line no-unused-vars

	exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement
	/* , fromIndex */
	) {
	  return $lastIndexOf.apply(aTypedArray$a(this), arguments);
	});

	var ArrayBufferViewCore$9 = arrayBufferViewCore;
	var $map = arrayIteration.map;
	var speciesConstructor$2 = speciesConstructor$9;
	var aTypedArray$9 = ArrayBufferViewCore$9.aTypedArray;
	var aTypedArrayConstructor$1 = ArrayBufferViewCore$9.aTypedArrayConstructor;
	var exportTypedArrayMethod$a = ArrayBufferViewCore$9.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map

	exportTypedArrayMethod$a('map', function map(mapfn
	/* , thisArg */
	) {
	  return $map(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
	    return new (aTypedArrayConstructor$1(speciesConstructor$2(O, O.constructor)))(length);
	  });
	});

	var ArrayBufferViewCore$8 = arrayBufferViewCore;
	var $reduce = arrayReduce.left;
	var aTypedArray$8 = ArrayBufferViewCore$8.aTypedArray;
	var exportTypedArrayMethod$9 = ArrayBufferViewCore$8.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce

	exportTypedArrayMethod$9('reduce', function reduce(callbackfn
	/* , initialValue */
	) {
	  return $reduce(aTypedArray$8(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$7 = arrayBufferViewCore;
	var $reduceRight = arrayReduce.right;
	var aTypedArray$7 = ArrayBufferViewCore$7.aTypedArray;
	var exportTypedArrayMethod$8 = ArrayBufferViewCore$7.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright

	exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn
	/* , initialValue */
	) {
	  return $reduceRight(aTypedArray$7(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$6 = arrayBufferViewCore;
	var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
	var exportTypedArrayMethod$7 = ArrayBufferViewCore$6.exportTypedArrayMethod;
	var floor$2 = Math.floor; // `%TypedArray%.prototype.reverse` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse

	exportTypedArrayMethod$7('reverse', function reverse() {
	  var that = this;
	  var length = aTypedArray$6(that).length;
	  var middle = floor$2(length / 2);
	  var index = 0;
	  var value;

	  while (index < middle) {
	    value = that[index];
	    that[index++] = that[--length];
	    that[length] = value;
	  }

	  return that;
	});

	var ArrayBufferViewCore$5 = arrayBufferViewCore;
	var toLength$1 = toLength$t;
	var toOffset = toOffset$2;
	var toObject = toObject$n;
	var fails$8 = fails$V;
	var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
	var exportTypedArrayMethod$6 = ArrayBufferViewCore$5.exportTypedArrayMethod;
	var FORCED$4 = fails$8(function () {
	  // eslint-disable-next-line no-undef
	  new Int8Array(1).set({});
	}); // `%TypedArray%.prototype.set` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set

	exportTypedArrayMethod$6('set', function set(arrayLike
	/* , offset */
	) {
	  aTypedArray$5(this);
	  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
	  var length = this.length;
	  var src = toObject(arrayLike);
	  var len = toLength$1(src.length);
	  var index = 0;
	  if (len + offset > length) throw RangeError('Wrong length');

	  while (index < len) this[offset + index] = src[index++];
	}, FORCED$4);

	var ArrayBufferViewCore$4 = arrayBufferViewCore;
	var speciesConstructor$1 = speciesConstructor$9;
	var fails$7 = fails$V;
	var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
	var aTypedArrayConstructor = ArrayBufferViewCore$4.aTypedArrayConstructor;
	var exportTypedArrayMethod$5 = ArrayBufferViewCore$4.exportTypedArrayMethod;
	var $slice$1 = [].slice;
	var FORCED$3 = fails$7(function () {
	  // eslint-disable-next-line no-undef
	  new Int8Array(1).slice();
	}); // `%TypedArray%.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice

	exportTypedArrayMethod$5('slice', function slice(start, end) {
	  var list = $slice$1.call(aTypedArray$4(this), start, end);
	  var C = speciesConstructor$1(this, this.constructor);
	  var index = 0;
	  var length = list.length;
	  var result = new (aTypedArrayConstructor(C))(length);

	  while (length > index) result[index] = list[index++];

	  return result;
	}, FORCED$3);

	var ArrayBufferViewCore$3 = arrayBufferViewCore;
	var $some = arrayIteration.some;
	var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
	var exportTypedArrayMethod$4 = ArrayBufferViewCore$3.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some

	exportTypedArrayMethod$4('some', function some(callbackfn
	/* , thisArg */
	) {
	  return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	});

	var ArrayBufferViewCore$2 = arrayBufferViewCore;
	var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
	var exportTypedArrayMethod$3 = ArrayBufferViewCore$2.exportTypedArrayMethod;
	var $sort = [].sort; // `%TypedArray%.prototype.sort` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort

	exportTypedArrayMethod$3('sort', function sort(comparefn) {
	  return $sort.call(aTypedArray$2(this), comparefn);
	});

	var ArrayBufferViewCore$1 = arrayBufferViewCore;
	var toLength = toLength$t;
	var toAbsoluteIndex = toAbsoluteIndex$8;
	var speciesConstructor = speciesConstructor$9;
	var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
	var exportTypedArrayMethod$2 = ArrayBufferViewCore$1.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray

	exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
	  var O = aTypedArray$1(this);
	  var length = O.length;
	  var beginIndex = toAbsoluteIndex(begin, length);
	  return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
	});

	var global$7 = global$H;
	var ArrayBufferViewCore = arrayBufferViewCore;
	var fails$6 = fails$V;
	var Int8Array$1 = global$7.Int8Array;
	var aTypedArray = ArrayBufferViewCore.aTypedArray;
	var exportTypedArrayMethod$1 = ArrayBufferViewCore.exportTypedArrayMethod;
	var $toLocaleString = [].toLocaleString;
	var $slice = [].slice; // iOS Safari 6.x fails here

	var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails$6(function () {
	  $toLocaleString.call(new Int8Array$1(1));
	});
	var FORCED$2 = fails$6(function () {
	  return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
	}) || !fails$6(function () {
	  Int8Array$1.prototype.toLocaleString.call([1, 2]);
	}); // `%TypedArray%.prototype.toLocaleString` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring

	exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
	  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
	}, FORCED$2);

	var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
	var fails$5 = fails$V;
	var global$6 = global$H;
	var Uint8Array = global$6.Uint8Array;
	var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
	var arrayToString = [].toString;
	var arrayJoin = [].join;

	if (fails$5(function () {
	  arrayToString.call({});
	})) {
	  arrayToString = function toString() {
	    return arrayJoin.call(this);
	  };
	}

	var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
	// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring

	exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

	var $$i = _export;
	var getBuiltIn$3 = getBuiltIn$c;
	var aFunction$1 = aFunction$f;
	var anObject$c = anObject$x;
	var fails$4 = fails$V;
	var nativeApply = getBuiltIn$3('Reflect', 'apply');
	var functionApply = Function.apply; // MS Edge argumentsList argument is optional

	var OPTIONAL_ARGUMENTS_LIST = !fails$4(function () {
	  nativeApply(function () {
	    /* empty */
	  });
	}); // `Reflect.apply` method
	// https://tc39.github.io/ecma262/#sec-reflect.apply

	$$i({
	  target: 'Reflect',
	  stat: true,
	  forced: OPTIONAL_ARGUMENTS_LIST
	}, {
	  apply: function apply(target, thisArgument, argumentsList) {
	    aFunction$1(target);
	    anObject$c(argumentsList);
	    return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
	  }
	});

	var $$h = _export;
	var getBuiltIn$2 = getBuiltIn$c;
	var aFunction = aFunction$f;
	var anObject$b = anObject$x;
	var isObject$3 = isObject$y;
	var create$1 = objectCreate;
	var bind$1 = functionBind;
	var fails$3 = fails$V;
	var nativeConstruct = getBuiltIn$2('Reflect', 'construct'); // `Reflect.construct` method
	// https://tc39.github.io/ecma262/#sec-reflect.construct
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it

	var NEW_TARGET_BUG = fails$3(function () {
	  function F() {
	    /* empty */
	  }

	  return !(nativeConstruct(function () {
	    /* empty */
	  }, [], F) instanceof F);
	});
	var ARGS_BUG = !fails$3(function () {
	  nativeConstruct(function () {
	    /* empty */
	  });
	});
	var FORCED$1 = NEW_TARGET_BUG || ARGS_BUG;
	$$h({
	  target: 'Reflect',
	  stat: true,
	  forced: FORCED$1,
	  sham: FORCED$1
	}, {
	  construct: function construct(Target, args
	  /* , newTarget */
	  ) {
	    aFunction(Target);
	    anObject$b(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

	    if (Target == newTarget) {
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch (args.length) {
	        case 0:
	          return new Target();

	        case 1:
	          return new Target(args[0]);

	        case 2:
	          return new Target(args[0], args[1]);

	        case 3:
	          return new Target(args[0], args[1], args[2]);

	        case 4:
	          return new Target(args[0], args[1], args[2], args[3]);
	      } // w/o altered newTarget, lot of arguments case


	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind$1.apply(Target, $args))();
	    } // with altered newTarget, not support built-in constructors


	    var proto = newTarget.prototype;
	    var instance = create$1(isObject$3(proto) ? proto : Object.prototype);
	    var result = Function.apply.call(Target, instance, args);
	    return isObject$3(result) ? result : instance;
	  }
	});

	var $$g = _export;
	var DESCRIPTORS$2 = descriptors;
	var anObject$a = anObject$x;
	var toPrimitive = toPrimitive$b;
	var definePropertyModule$1 = objectDefineProperty;
	var fails$2 = fails$V; // MS Edge has broken Reflect.defineProperty - throwing instead of returning false

	var ERROR_INSTEAD_OF_FALSE = fails$2(function () {
	  // eslint-disable-next-line no-undef
	  Reflect.defineProperty(definePropertyModule$1.f({}, 1, {
	    value: 1
	  }), 1, {
	    value: 2
	  });
	}); // `Reflect.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-reflect.defineproperty

	$$g({
	  target: 'Reflect',
	  stat: true,
	  forced: ERROR_INSTEAD_OF_FALSE,
	  sham: !DESCRIPTORS$2
	}, {
	  defineProperty: function defineProperty(target, propertyKey, attributes) {
	    anObject$a(target);
	    var key = toPrimitive(propertyKey, true);
	    anObject$a(attributes);

	    try {
	      definePropertyModule$1.f(target, key, attributes);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var $$f = _export;
	var anObject$9 = anObject$x;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f; // `Reflect.deleteProperty` method
	// https://tc39.github.io/ecma262/#sec-reflect.deleteproperty

	$$f({
	  target: 'Reflect',
	  stat: true
	}, {
	  deleteProperty: function deleteProperty(target, propertyKey) {
	    var descriptor = getOwnPropertyDescriptor(anObject$9(target), propertyKey);
	    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
	  }
	});

	var $$e = _export;
	var isObject$2 = isObject$y;
	var anObject$8 = anObject$x;
	var has$2 = has$k;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
	var getPrototypeOf$1 = objectGetPrototypeOf$1; // `Reflect.get` method
	// https://tc39.github.io/ecma262/#sec-reflect.get

	function get(target, propertyKey
	/* , receiver */
	) {
	  var receiver = arguments.length < 3 ? target : arguments[2];
	  var descriptor, prototype;
	  if (anObject$8(target) === receiver) return target[propertyKey];
	  if (descriptor = getOwnPropertyDescriptorModule$2.f(target, propertyKey)) return has$2(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
	  if (isObject$2(prototype = getPrototypeOf$1(target))) return get(prototype, propertyKey, receiver);
	}

	$$e({
	  target: 'Reflect',
	  stat: true
	}, {
	  get: get
	});

	var $$d = _export;
	var DESCRIPTORS$1 = descriptors;
	var anObject$7 = anObject$x;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor; // `Reflect.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor

	$$d({
	  target: 'Reflect',
	  stat: true,
	  sham: !DESCRIPTORS$1
	}, {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	    return getOwnPropertyDescriptorModule$1.f(anObject$7(target), propertyKey);
	  }
	});

	var $$c = _export;
	var anObject$6 = anObject$x;
	var objectGetPrototypeOf = objectGetPrototypeOf$1;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter; // `Reflect.getPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-reflect.getprototypeof

	$$c({
	  target: 'Reflect',
	  stat: true,
	  sham: !CORRECT_PROTOTYPE_GETTER
	}, {
	  getPrototypeOf: function getPrototypeOf(target) {
	    return objectGetPrototypeOf(anObject$6(target));
	  }
	});

	var $$b = _export; // `Reflect.has` method
	// https://tc39.github.io/ecma262/#sec-reflect.has

	$$b({
	  target: 'Reflect',
	  stat: true
	}, {
	  has: function has(target, propertyKey) {
	    return propertyKey in target;
	  }
	});

	var $$a = _export;
	var anObject$5 = anObject$x;
	var objectIsExtensible = Object.isExtensible; // `Reflect.isExtensible` method
	// https://tc39.github.io/ecma262/#sec-reflect.isextensible

	$$a({
	  target: 'Reflect',
	  stat: true
	}, {
	  isExtensible: function isExtensible(target) {
	    anObject$5(target);
	    return objectIsExtensible ? objectIsExtensible(target) : true;
	  }
	});

	var $$9 = _export;
	var ownKeys = ownKeys$3; // `Reflect.ownKeys` method
	// https://tc39.github.io/ecma262/#sec-reflect.ownkeys

	$$9({
	  target: 'Reflect',
	  stat: true
	}, {
	  ownKeys: ownKeys
	});

	var $$8 = _export;
	var getBuiltIn$1 = getBuiltIn$c;
	var anObject$4 = anObject$x;
	var FREEZING = freezing; // `Reflect.preventExtensions` method
	// https://tc39.github.io/ecma262/#sec-reflect.preventextensions

	$$8({
	  target: 'Reflect',
	  stat: true,
	  sham: !FREEZING
	}, {
	  preventExtensions: function preventExtensions(target) {
	    anObject$4(target);

	    try {
	      var objectPreventExtensions = getBuiltIn$1('Object', 'preventExtensions');
	      if (objectPreventExtensions) objectPreventExtensions(target);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var $$7 = _export;
	var anObject$3 = anObject$x;
	var isObject$1 = isObject$y;
	var has$1 = has$k;
	var fails$1 = fails$V;
	var definePropertyModule = objectDefineProperty;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var getPrototypeOf = objectGetPrototypeOf$1;
	var createPropertyDescriptor$1 = createPropertyDescriptor$8; // `Reflect.set` method
	// https://tc39.github.io/ecma262/#sec-reflect.set

	function set(target, propertyKey, V
	/* , receiver */
	) {
	  var receiver = arguments.length < 4 ? target : arguments[3];
	  var ownDescriptor = getOwnPropertyDescriptorModule.f(anObject$3(target), propertyKey);
	  var existingDescriptor, prototype;

	  if (!ownDescriptor) {
	    if (isObject$1(prototype = getPrototypeOf(target))) {
	      return set(prototype, propertyKey, V, receiver);
	    }

	    ownDescriptor = createPropertyDescriptor$1(0);
	  }

	  if (has$1(ownDescriptor, 'value')) {
	    if (ownDescriptor.writable === false || !isObject$1(receiver)) return false;

	    if (existingDescriptor = getOwnPropertyDescriptorModule.f(receiver, propertyKey)) {
	      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
	      existingDescriptor.value = V;
	      definePropertyModule.f(receiver, propertyKey, existingDescriptor);
	    } else definePropertyModule.f(receiver, propertyKey, createPropertyDescriptor$1(0, V));

	    return true;
	  }

	  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
	} // MS Edge 17-18 Reflect.set allows setting the property to object
	// with non-writable property on the prototype


	var MS_EDGE_BUG = fails$1(function () {
	  var object = definePropertyModule.f({}, 'a', {
	    configurable: true
	  }); // eslint-disable-next-line no-undef

	  return Reflect.set(getPrototypeOf(object), 'a', 1, object) !== false;
	});
	$$7({
	  target: 'Reflect',
	  stat: true,
	  forced: MS_EDGE_BUG
	}, {
	  set: set
	});

	var $$6 = _export;
	var anObject$2 = anObject$x;
	var aPossiblePrototype = aPossiblePrototype$2;
	var objectSetPrototypeOf = objectSetPrototypeOf$1; // `Reflect.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-reflect.setprototypeof

	if (objectSetPrototypeOf) $$6({
	  target: 'Reflect',
	  stat: true
	}, {
	  setPrototypeOf: function setPrototypeOf(target, proto) {
	    anObject$2(target);
	    aPossiblePrototype(proto);

	    try {
	      objectSetPrototypeOf(target, proto);
	      return true;
	    } catch (error) {
	      return false;
	    }
	  }
	});

	var global$5 = global$H;
	var DOMIterables = domIterables;
	var ArrayIteratorMethods = es_array_iterator;
	var createNonEnumerableProperty = createNonEnumerableProperty$f;
	var wellKnownSymbol$2 = wellKnownSymbol$u;
	var ITERATOR$2 = wellKnownSymbol$2('iterator');
	var TO_STRING_TAG = wellKnownSymbol$2('toStringTag');
	var ArrayValues = ArrayIteratorMethods.values;

	for (var COLLECTION_NAME in DOMIterables) {
	  var Collection = global$5[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;

	  if (CollectionPrototype) {
	    // some Chrome versions have non-configurable methods on DOMTokenList
	    if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
	      createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
	    } catch (error) {
	      CollectionPrototype[ITERATOR$2] = ArrayValues;
	    }

	    if (!CollectionPrototype[TO_STRING_TAG]) {
	      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	    }

	    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
	      // some Chrome versions have non-configurable methods on DOMTokenList
	      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
	        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
	      } catch (error) {
	        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
	      }
	    }
	  }
	}

	var $$5 = _export;
	var global$4 = global$H;
	var task = task$2;
	var FORCED = !global$4.setImmediate || !global$4.clearImmediate; // http://w3c.github.io/setImmediate/

	$$5({
	  global: true,
	  bind: true,
	  enumerable: true,
	  forced: FORCED
	}, {
	  // `setImmediate` method
	  // http://w3c.github.io/setImmediate/#si-setImmediate
	  setImmediate: task.set,
	  // `clearImmediate` method
	  // http://w3c.github.io/setImmediate/#si-clearImmediate
	  clearImmediate: task.clear
	});

	var $$4 = _export;
	var global$3 = global$H;
	var microtask = microtask$2;
	var classof$1 = classofRaw$1;
	var process = global$3.process;
	var isNode = classof$1(process) == 'process'; // `queueMicrotask` method
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask

	$$4({
	  global: true,
	  enumerable: true,
	  noTargetGet: true
	}, {
	  queueMicrotask: function queueMicrotask(fn) {
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

	var $$3 = _export;
	var global$2 = global$H;
	var userAgent = engineUserAgent;
	var slice = [].slice;
	var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

	var wrap = function (scheduler) {
	  return function (handler, timeout
	  /* , ...arguments */
	  ) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? slice.call(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      // eslint-disable-next-line no-new-func
	      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
	    } : handler, timeout);
	  };
	}; // ie9- setTimeout & setInterval additional parameters fix
	// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


	$$3({
	  global: true,
	  bind: true,
	  forced: MSIE
	}, {
	  // `setTimeout` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
	  setTimeout: wrap(global$2.setTimeout),
	  // `setInterval` method
	  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
	  setInterval: wrap(global$2.setInterval)
	});

	var fails = fails$V;
	var wellKnownSymbol$1 = wellKnownSymbol$u;
	var IS_PURE = isPure;
	var ITERATOR$1 = wellKnownSymbol$1('iterator');
	var nativeUrl = !fails(function () {
	  var url = new URL('b?a=1&b=2&c=3', 'http://a');
	  var searchParams = url.searchParams;
	  var result = '';
	  url.pathname = 'c%20d';
	  searchParams.forEach(function (value, key) {
	    searchParams['delete']('b');
	    result += key + value;
	  });
	  return IS_PURE && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
	  || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
	  || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
	  || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
	  || result !== 'a1c3' // throws in Safari
	  || new URL('http://x', undefined).host !== 'x';
	});

	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80

	var delimiter = '-'; // '\x2D'

	var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

	var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

	var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
	var baseMinusTMin = base - tMin;
	var floor$1 = Math.floor;
	var stringFromCharCode = String.fromCharCode;
	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 */

	var ucs2decode = function (string) {
	  var output = [];
	  var counter = 0;
	  var length = string.length;

	  while (counter < length) {
	    var value = string.charCodeAt(counter++);

	    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
	      // It's a high surrogate, and there is a next character.
	      var extra = string.charCodeAt(counter++);

	      if ((extra & 0xFC00) == 0xDC00) {
	        // Low surrogate.
	        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
	      } else {
	        // It's an unmatched surrogate; only append this code unit, in case the
	        // next code unit is the high surrogate of a surrogate pair.
	        output.push(value);
	        counter--;
	      }
	    } else {
	      output.push(value);
	    }
	  }

	  return output;
	};
	/**
	 * Converts a digit/integer into a basic code point.
	 */


	var digitToBasic = function (digit) {
	  //  0..25 map to ASCII a..z or A..Z
	  // 26..35 map to ASCII 0..9
	  return digit + 22 + 75 * (digit < 26);
	};
	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 */


	var adapt = function (delta, numPoints, firstTime) {
	  var k = 0;
	  delta = firstTime ? floor$1(delta / damp) : delta >> 1;
	  delta += floor$1(delta / numPoints);

	  for (; delta > baseMinusTMin * tMax >> 1; k += base) {
	    delta = floor$1(delta / baseMinusTMin);
	  }

	  return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
	};
	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 */
	// eslint-disable-next-line  max-statements


	var encode = function (input) {
	  var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

	  input = ucs2decode(input); // Cache the length.

	  var inputLength = input.length; // Initialize the state.

	  var n = initialN;
	  var delta = 0;
	  var bias = initialBias;
	  var i, currentValue; // Handle the basic code points.

	  for (i = 0; i < input.length; i++) {
	    currentValue = input[i];

	    if (currentValue < 0x80) {
	      output.push(stringFromCharCode(currentValue));
	    }
	  }

	  var basicLength = output.length; // number of basic code points.

	  var handledCPCount = basicLength; // number of code points that have been handled;
	  // Finish the basic string with a delimiter unless it's empty.

	  if (basicLength) {
	    output.push(delimiter);
	  } // Main encoding loop:


	  while (handledCPCount < inputLength) {
	    // All non-basic code points < n have been handled already. Find the next larger one:
	    var m = maxInt;

	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];

	      if (currentValue >= n && currentValue < m) {
	        m = currentValue;
	      }
	    } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


	    var handledCPCountPlusOne = handledCPCount + 1;

	    if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
	      throw RangeError(OVERFLOW_ERROR);
	    }

	    delta += (m - n) * handledCPCountPlusOne;
	    n = m;

	    for (i = 0; i < input.length; i++) {
	      currentValue = input[i];

	      if (currentValue < n && ++delta > maxInt) {
	        throw RangeError(OVERFLOW_ERROR);
	      }

	      if (currentValue == n) {
	        // Represent delta as a generalized variable-length integer.
	        var q = delta;

	        for (var k = base;;
	        /* no condition */
	        k += base) {
	          var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
	          if (q < t) break;
	          var qMinusT = q - t;
	          var baseMinusT = base - t;
	          output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
	          q = floor$1(qMinusT / baseMinusT);
	        }

	        output.push(stringFromCharCode(digitToBasic(q)));
	        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
	        delta = 0;
	        ++handledCPCount;
	      }
	    }

	    ++delta;
	    ++n;
	  }

	  return output.join('');
	};

	var stringPunycodeToAscii = function (input) {
	  var encoded = [];
	  var labels = input.toLowerCase().replace(regexSeparators, '\u002E').split('.');
	  var i, label;

	  for (i = 0; i < labels.length; i++) {
	    label = labels[i];
	    encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
	  }

	  return encoded.join('.');
	};

	var anObject$1 = anObject$x;
	var getIteratorMethod$1 = getIteratorMethod$5;

	var getIterator$1 = function (it) {
	  var iteratorMethod = getIteratorMethod$1(it);

	  if (typeof iteratorMethod != 'function') {
	    throw TypeError(String(it) + ' is not iterable');
	  }

	  return anObject$1(iteratorMethod.call(it));
	};

	var $$2 = _export;
	var getBuiltIn = getBuiltIn$c;
	var USE_NATIVE_URL$1 = nativeUrl;
	var redefine$1 = redefine$g.exports;
	var redefineAll = redefineAll$6;
	var setToStringTag$1 = setToStringTag$a;
	var createIteratorConstructor = createIteratorConstructor$3;
	var InternalStateModule$1 = internalState;
	var anInstance$1 = anInstance$8;
	var hasOwn = has$k;
	var bind = functionBindContext;
	var classof = classof$d;
	var anObject = anObject$x;
	var isObject = isObject$y;
	var create = objectCreate;
	var createPropertyDescriptor = createPropertyDescriptor$8;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$5;
	var wellKnownSymbol = wellKnownSymbol$u;
	var $fetch = getBuiltIn('fetch');
	var Headers = getBuiltIn('Headers');
	var ITERATOR = wellKnownSymbol('iterator');
	var URL_SEARCH_PARAMS = 'URLSearchParams';
	var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
	var setInternalState$1 = InternalStateModule$1.set;
	var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
	var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
	var plus = /\+/g;
	var sequences = Array(4);

	var percentSequence = function (bytes) {
	  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
	};

	var percentDecode = function (sequence) {
	  try {
	    return decodeURIComponent(sequence);
	  } catch (error) {
	    return sequence;
	  }
	};

	var deserialize = function (it) {
	  var result = it.replace(plus, ' ');
	  var bytes = 4;

	  try {
	    return decodeURIComponent(result);
	  } catch (error) {
	    while (bytes) {
	      result = result.replace(percentSequence(bytes--), percentDecode);
	    }

	    return result;
	  }
	};

	var find = /[!'()~]|%20/g;
	var replace = {
	  '!': '%21',
	  "'": '%27',
	  '(': '%28',
	  ')': '%29',
	  '~': '%7E',
	  '%20': '+'
	};

	var replacer = function (match) {
	  return replace[match];
	};

	var serialize = function (it) {
	  return encodeURIComponent(it).replace(find, replacer);
	};

	var parseSearchParams = function (result, query) {
	  if (query) {
	    var attributes = query.split('&');
	    var index = 0;
	    var attribute, entry;

	    while (index < attributes.length) {
	      attribute = attributes[index++];

	      if (attribute.length) {
	        entry = attribute.split('=');
	        result.push({
	          key: deserialize(entry.shift()),
	          value: deserialize(entry.join('='))
	        });
	      }
	    }
	  }
	};

	var updateSearchParams = function (query) {
	  this.entries.length = 0;
	  parseSearchParams(this.entries, query);
	};

	var validateArgumentsLength = function (passed, required) {
	  if (passed < required) throw TypeError('Not enough arguments');
	};

	var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
	  setInternalState$1(this, {
	    type: URL_SEARCH_PARAMS_ITERATOR,
	    iterator: getIterator(getInternalParamsState(params).entries),
	    kind: kind
	  });
	}, 'Iterator', function next() {
	  var state = getInternalIteratorState(this);
	  var kind = state.kind;
	  var step = state.iterator.next();
	  var entry = step.value;

	  if (!step.done) {
	    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
	  }

	  return step;
	}); // `URLSearchParams` constructor
	// https://url.spec.whatwg.org/#interface-urlsearchparams

	var URLSearchParamsConstructor = function URLSearchParams()
	/* init */
	{
	  anInstance$1(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
	  var init = arguments.length > 0 ? arguments[0] : undefined;
	  var that = this;
	  var entries = [];
	  var iteratorMethod, iterator, next, step, entryIterator, entryNext, first, second, key;
	  setInternalState$1(that, {
	    type: URL_SEARCH_PARAMS,
	    entries: entries,
	    updateURL: function () {
	      /* empty */
	    },
	    updateSearchParams: updateSearchParams
	  });

	  if (init !== undefined) {
	    if (isObject(init)) {
	      iteratorMethod = getIteratorMethod(init);

	      if (typeof iteratorMethod === 'function') {
	        iterator = iteratorMethod.call(init);
	        next = iterator.next;

	        while (!(step = next.call(iterator)).done) {
	          entryIterator = getIterator(anObject(step.value));
	          entryNext = entryIterator.next;
	          if ((first = entryNext.call(entryIterator)).done || (second = entryNext.call(entryIterator)).done || !entryNext.call(entryIterator).done) throw TypeError('Expected sequence with length 2');
	          entries.push({
	            key: first.value + '',
	            value: second.value + ''
	          });
	        }
	      } else for (key in init) if (hasOwn(init, key)) entries.push({
	        key: key,
	        value: init[key] + ''
	      });
	    } else {
	      parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
	    }
	  }
	};

	var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
	redefineAll(URLSearchParamsPrototype, {
	  // `URLSearchParams.prototype.appent` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
	  append: function append(name, value) {
	    validateArgumentsLength(arguments.length, 2);
	    var state = getInternalParamsState(this);
	    state.entries.push({
	      key: name + '',
	      value: value + ''
	    });
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.delete` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
	  'delete': function (name) {
	    validateArgumentsLength(arguments.length, 1);
	    var state = getInternalParamsState(this);
	    var entries = state.entries;
	    var key = name + '';
	    var index = 0;

	    while (index < entries.length) {
	      if (entries[index].key === key) entries.splice(index, 1);else index++;
	    }

	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.get` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
	  get: function get(name) {
	    validateArgumentsLength(arguments.length, 1);
	    var entries = getInternalParamsState(this).entries;
	    var key = name + '';
	    var index = 0;

	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) return entries[index].value;
	    }

	    return null;
	  },
	  // `URLSearchParams.prototype.getAll` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
	  getAll: function getAll(name) {
	    validateArgumentsLength(arguments.length, 1);
	    var entries = getInternalParamsState(this).entries;
	    var key = name + '';
	    var result = [];
	    var index = 0;

	    for (; index < entries.length; index++) {
	      if (entries[index].key === key) result.push(entries[index].value);
	    }

	    return result;
	  },
	  // `URLSearchParams.prototype.has` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
	  has: function has(name) {
	    validateArgumentsLength(arguments.length, 1);
	    var entries = getInternalParamsState(this).entries;
	    var key = name + '';
	    var index = 0;

	    while (index < entries.length) {
	      if (entries[index++].key === key) return true;
	    }

	    return false;
	  },
	  // `URLSearchParams.prototype.set` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
	  set: function set(name, value) {
	    validateArgumentsLength(arguments.length, 1);
	    var state = getInternalParamsState(this);
	    var entries = state.entries;
	    var found = false;
	    var key = name + '';
	    var val = value + '';
	    var index = 0;
	    var entry;

	    for (; index < entries.length; index++) {
	      entry = entries[index];

	      if (entry.key === key) {
	        if (found) entries.splice(index--, 1);else {
	          found = true;
	          entry.value = val;
	        }
	      }
	    }

	    if (!found) entries.push({
	      key: key,
	      value: val
	    });
	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.sort` method
	  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
	  sort: function sort() {
	    var state = getInternalParamsState(this);
	    var entries = state.entries; // Array#sort is not stable in some engines

	    var slice = entries.slice();
	    var entry, entriesIndex, sliceIndex;
	    entries.length = 0;

	    for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
	      entry = slice[sliceIndex];

	      for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
	        if (entries[entriesIndex].key > entry.key) {
	          entries.splice(entriesIndex, 0, entry);
	          break;
	        }
	      }

	      if (entriesIndex === sliceIndex) entries.push(entry);
	    }

	    state.updateURL();
	  },
	  // `URLSearchParams.prototype.forEach` method
	  forEach: function forEach(callback
	  /* , thisArg */
	  ) {
	    var entries = getInternalParamsState(this).entries;
	    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
	    var index = 0;
	    var entry;

	    while (index < entries.length) {
	      entry = entries[index++];
	      boundFunction(entry.value, entry.key, this);
	    }
	  },
	  // `URLSearchParams.prototype.keys` method
	  keys: function keys() {
	    return new URLSearchParamsIterator(this, 'keys');
	  },
	  // `URLSearchParams.prototype.values` method
	  values: function values() {
	    return new URLSearchParamsIterator(this, 'values');
	  },
	  // `URLSearchParams.prototype.entries` method
	  entries: function entries() {
	    return new URLSearchParamsIterator(this, 'entries');
	  }
	}, {
	  enumerable: true
	}); // `URLSearchParams.prototype[@@iterator]` method

	redefine$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries); // `URLSearchParams.prototype.toString` method
	// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

	redefine$1(URLSearchParamsPrototype, 'toString', function toString() {
	  var entries = getInternalParamsState(this).entries;
	  var result = [];
	  var index = 0;
	  var entry;

	  while (index < entries.length) {
	    entry = entries[index++];
	    result.push(serialize(entry.key) + '=' + serialize(entry.value));
	  }

	  return result.join('&');
	}, {
	  enumerable: true
	});
	setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
	$$2({
	  global: true,
	  forced: !USE_NATIVE_URL$1
	}, {
	  URLSearchParams: URLSearchParamsConstructor
	}); // Wrap `fetch` for correct work with polyfilled `URLSearchParams`
	// https://github.com/zloirock/core-js/issues/674

	if (!USE_NATIVE_URL$1 && typeof $fetch == 'function' && typeof Headers == 'function') {
	  $$2({
	    global: true,
	    enumerable: true,
	    forced: true
	  }, {
	    fetch: function fetch(input
	    /* , init */
	    ) {
	      var args = [input];
	      var init, body, headers;

	      if (arguments.length > 1) {
	        init = arguments[1];

	        if (isObject(init)) {
	          body = init.body;

	          if (classof(body) === URL_SEARCH_PARAMS) {
	            headers = init.headers ? new Headers(init.headers) : new Headers();

	            if (!headers.has('content-type')) {
	              headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	            }

	            init = create(init, {
	              body: createPropertyDescriptor(0, String(body)),
	              headers: createPropertyDescriptor(0, headers)
	            });
	          }
	        }

	        args.push(init);
	      }

	      return $fetch.apply(this, args);
	    }
	  });
	}

	var web_urlSearchParams = {
	  URLSearchParams: URLSearchParamsConstructor,
	  getState: getInternalParamsState
	};

	var $$1 = _export;
	var DESCRIPTORS = descriptors;
	var USE_NATIVE_URL = nativeUrl;
	var global$1 = global$H;
	var defineProperties = objectDefineProperties;
	var redefine = redefine$g.exports;
	var anInstance = anInstance$8;
	var has = has$k;
	var assign = objectAssign;
	var arrayFrom = arrayFrom$1;
	var codeAt = stringMultibyte.codeAt;
	var toASCII = stringPunycodeToAscii;
	var setToStringTag = setToStringTag$a;
	var URLSearchParamsModule = web_urlSearchParams;
	var InternalStateModule = internalState;
	var NativeURL = global$1.URL;
	var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
	var getInternalSearchParamsState = URLSearchParamsModule.getState;
	var setInternalState = InternalStateModule.set;
	var getInternalURLState = InternalStateModule.getterFor('URL');
	var floor = Math.floor;
	var pow = Math.pow;
	var INVALID_AUTHORITY = 'Invalid authority';
	var INVALID_SCHEME = 'Invalid scheme';
	var INVALID_HOST = 'Invalid host';
	var INVALID_PORT = 'Invalid port';
	var ALPHA = /[A-Za-z]/;
	var ALPHANUMERIC = /[\d+-.A-Za-z]/;
	var DIGIT = /\d/;
	var HEX_START = /^(0x|0X)/;
	var OCT = /^[0-7]+$/;
	var DEC = /^\d+$/;
	var HEX = /^[\dA-Fa-f]+$/; // eslint-disable-next-line no-control-regex

	var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/; // eslint-disable-next-line no-control-regex

	var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/; // eslint-disable-next-line no-control-regex

	var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g; // eslint-disable-next-line no-control-regex

	var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
	var EOF;

	var parseHost = function (url, input) {
	  var result, codePoints, index;

	  if (input.charAt(0) == '[') {
	    if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
	    result = parseIPv6(input.slice(1, -1));
	    if (!result) return INVALID_HOST;
	    url.host = result; // opaque host
	  } else if (!isSpecial(url)) {
	    if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
	    result = '';
	    codePoints = arrayFrom(input);

	    for (index = 0; index < codePoints.length; index++) {
	      result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
	    }

	    url.host = result;
	  } else {
	    input = toASCII(input);
	    if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
	    result = parseIPv4(input);
	    if (result === null) return INVALID_HOST;
	    url.host = result;
	  }
	};

	var parseIPv4 = function (input) {
	  var parts = input.split('.');
	  var partsLength, numbers, index, part, radix, number, ipv4;

	  if (parts.length && parts[parts.length - 1] == '') {
	    parts.pop();
	  }

	  partsLength = parts.length;
	  if (partsLength > 4) return input;
	  numbers = [];

	  for (index = 0; index < partsLength; index++) {
	    part = parts[index];
	    if (part == '') return input;
	    radix = 10;

	    if (part.length > 1 && part.charAt(0) == '0') {
	      radix = HEX_START.test(part) ? 16 : 8;
	      part = part.slice(radix == 8 ? 1 : 2);
	    }

	    if (part === '') {
	      number = 0;
	    } else {
	      if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
	      number = parseInt(part, radix);
	    }

	    numbers.push(number);
	  }

	  for (index = 0; index < partsLength; index++) {
	    number = numbers[index];

	    if (index == partsLength - 1) {
	      if (number >= pow(256, 5 - partsLength)) return null;
	    } else if (number > 255) return null;
	  }

	  ipv4 = numbers.pop();

	  for (index = 0; index < numbers.length; index++) {
	    ipv4 += numbers[index] * pow(256, 3 - index);
	  }

	  return ipv4;
	}; // eslint-disable-next-line max-statements


	var parseIPv6 = function (input) {
	  var address = [0, 0, 0, 0, 0, 0, 0, 0];
	  var pieceIndex = 0;
	  var compress = null;
	  var pointer = 0;
	  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

	  var char = function () {
	    return input.charAt(pointer);
	  };

	  if (char() == ':') {
	    if (input.charAt(1) != ':') return;
	    pointer += 2;
	    pieceIndex++;
	    compress = pieceIndex;
	  }

	  while (char()) {
	    if (pieceIndex == 8) return;

	    if (char() == ':') {
	      if (compress !== null) return;
	      pointer++;
	      pieceIndex++;
	      compress = pieceIndex;
	      continue;
	    }

	    value = length = 0;

	    while (length < 4 && HEX.test(char())) {
	      value = value * 16 + parseInt(char(), 16);
	      pointer++;
	      length++;
	    }

	    if (char() == '.') {
	      if (length == 0) return;
	      pointer -= length;
	      if (pieceIndex > 6) return;
	      numbersSeen = 0;

	      while (char()) {
	        ipv4Piece = null;

	        if (numbersSeen > 0) {
	          if (char() == '.' && numbersSeen < 4) pointer++;else return;
	        }

	        if (!DIGIT.test(char())) return;

	        while (DIGIT.test(char())) {
	          number = parseInt(char(), 10);
	          if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
	          if (ipv4Piece > 255) return;
	          pointer++;
	        }

	        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
	        numbersSeen++;
	        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
	      }

	      if (numbersSeen != 4) return;
	      break;
	    } else if (char() == ':') {
	      pointer++;
	      if (!char()) return;
	    } else if (char()) return;

	    address[pieceIndex++] = value;
	  }

	  if (compress !== null) {
	    swaps = pieceIndex - compress;
	    pieceIndex = 7;

	    while (pieceIndex != 0 && swaps > 0) {
	      swap = address[pieceIndex];
	      address[pieceIndex--] = address[compress + swaps - 1];
	      address[compress + --swaps] = swap;
	    }
	  } else if (pieceIndex != 8) return;

	  return address;
	};

	var findLongestZeroSequence = function (ipv6) {
	  var maxIndex = null;
	  var maxLength = 1;
	  var currStart = null;
	  var currLength = 0;
	  var index = 0;

	  for (; index < 8; index++) {
	    if (ipv6[index] !== 0) {
	      if (currLength > maxLength) {
	        maxIndex = currStart;
	        maxLength = currLength;
	      }

	      currStart = null;
	      currLength = 0;
	    } else {
	      if (currStart === null) currStart = index;
	      ++currLength;
	    }
	  }

	  if (currLength > maxLength) {
	    maxIndex = currStart;
	    maxLength = currLength;
	  }

	  return maxIndex;
	};

	var serializeHost = function (host) {
	  var result, index, compress, ignore0; // ipv4

	  if (typeof host == 'number') {
	    result = [];

	    for (index = 0; index < 4; index++) {
	      result.unshift(host % 256);
	      host = floor(host / 256);
	    }

	    return result.join('.'); // ipv6
	  } else if (typeof host == 'object') {
	    result = '';
	    compress = findLongestZeroSequence(host);

	    for (index = 0; index < 8; index++) {
	      if (ignore0 && host[index] === 0) continue;
	      if (ignore0) ignore0 = false;

	      if (compress === index) {
	        result += index ? ':' : '::';
	        ignore0 = true;
	      } else {
	        result += host[index].toString(16);
	        if (index < 7) result += ':';
	      }
	    }

	    return '[' + result + ']';
	  }

	  return host;
	};

	var C0ControlPercentEncodeSet = {};
	var fragmentPercentEncodeSet = assign({}, C0ControlPercentEncodeSet, {
	  ' ': 1,
	  '"': 1,
	  '<': 1,
	  '>': 1,
	  '`': 1
	});
	var pathPercentEncodeSet = assign({}, fragmentPercentEncodeSet, {
	  '#': 1,
	  '?': 1,
	  '{': 1,
	  '}': 1
	});
	var userinfoPercentEncodeSet = assign({}, pathPercentEncodeSet, {
	  '/': 1,
	  ':': 1,
	  ';': 1,
	  '=': 1,
	  '@': 1,
	  '[': 1,
	  '\\': 1,
	  ']': 1,
	  '^': 1,
	  '|': 1
	});

	var percentEncode = function (char, set) {
	  var code = codeAt(char, 0);
	  return code > 0x20 && code < 0x7F && !has(set, char) ? char : encodeURIComponent(char);
	};

	var specialSchemes = {
	  ftp: 21,
	  file: null,
	  http: 80,
	  https: 443,
	  ws: 80,
	  wss: 443
	};

	var isSpecial = function (url) {
	  return has(specialSchemes, url.scheme);
	};

	var includesCredentials = function (url) {
	  return url.username != '' || url.password != '';
	};

	var cannotHaveUsernamePasswordPort = function (url) {
	  return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
	};

	var isWindowsDriveLetter = function (string, normalized) {
	  var second;
	  return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
	};

	var startsWithWindowsDriveLetter = function (string) {
	  var third;
	  return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
	};

	var shortenURLsPath = function (url) {
	  var path = url.path;
	  var pathSize = path.length;

	  if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
	    path.pop();
	  }
	};

	var isSingleDot = function (segment) {
	  return segment === '.' || segment.toLowerCase() === '%2e';
	};

	var isDoubleDot = function (segment) {
	  segment = segment.toLowerCase();
	  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
	}; // States:


	var SCHEME_START = {};
	var SCHEME = {};
	var NO_SCHEME = {};
	var SPECIAL_RELATIVE_OR_AUTHORITY = {};
	var PATH_OR_AUTHORITY = {};
	var RELATIVE = {};
	var RELATIVE_SLASH = {};
	var SPECIAL_AUTHORITY_SLASHES = {};
	var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
	var AUTHORITY = {};
	var HOST = {};
	var HOSTNAME = {};
	var PORT = {};
	var FILE = {};
	var FILE_SLASH = {};
	var FILE_HOST = {};
	var PATH_START = {};
	var PATH = {};
	var CANNOT_BE_A_BASE_URL_PATH = {};
	var QUERY = {};
	var FRAGMENT = {}; // eslint-disable-next-line max-statements

	var parseURL = function (url, input, stateOverride, base) {
	  var state = stateOverride || SCHEME_START;
	  var pointer = 0;
	  var buffer = '';
	  var seenAt = false;
	  var seenBracket = false;
	  var seenPasswordToken = false;
	  var codePoints, char, bufferCodePoints, failure;

	  if (!stateOverride) {
	    url.scheme = '';
	    url.username = '';
	    url.password = '';
	    url.host = null;
	    url.port = null;
	    url.path = [];
	    url.query = null;
	    url.fragment = null;
	    url.cannotBeABaseURL = false;
	    input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
	  }

	  input = input.replace(TAB_AND_NEW_LINE, '');
	  codePoints = arrayFrom(input);

	  while (pointer <= codePoints.length) {
	    char = codePoints[pointer];

	    switch (state) {
	      case SCHEME_START:
	        if (char && ALPHA.test(char)) {
	          buffer += char.toLowerCase();
	          state = SCHEME;
	        } else if (!stateOverride) {
	          state = NO_SCHEME;
	          continue;
	        } else return INVALID_SCHEME;

	        break;

	      case SCHEME:
	        if (char && (ALPHANUMERIC.test(char) || char == '+' || char == '-' || char == '.')) {
	          buffer += char.toLowerCase();
	        } else if (char == ':') {
	          if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
	          url.scheme = buffer;

	          if (stateOverride) {
	            if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
	            return;
	          }

	          buffer = '';

	          if (url.scheme == 'file') {
	            state = FILE;
	          } else if (isSpecial(url) && base && base.scheme == url.scheme) {
	            state = SPECIAL_RELATIVE_OR_AUTHORITY;
	          } else if (isSpecial(url)) {
	            state = SPECIAL_AUTHORITY_SLASHES;
	          } else if (codePoints[pointer + 1] == '/') {
	            state = PATH_OR_AUTHORITY;
	            pointer++;
	          } else {
	            url.cannotBeABaseURL = true;
	            url.path.push('');
	            state = CANNOT_BE_A_BASE_URL_PATH;
	          }
	        } else if (!stateOverride) {
	          buffer = '';
	          state = NO_SCHEME;
	          pointer = 0;
	          continue;
	        } else return INVALID_SCHEME;

	        break;

	      case NO_SCHEME:
	        if (!base || base.cannotBeABaseURL && char != '#') return INVALID_SCHEME;

	        if (base.cannotBeABaseURL && char == '#') {
	          url.scheme = base.scheme;
	          url.path = base.path.slice();
	          url.query = base.query;
	          url.fragment = '';
	          url.cannotBeABaseURL = true;
	          state = FRAGMENT;
	          break;
	        }

	        state = base.scheme == 'file' ? FILE : RELATIVE;
	        continue;

	      case SPECIAL_RELATIVE_OR_AUTHORITY:
	        if (char == '/' && codePoints[pointer + 1] == '/') {
	          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	          pointer++;
	        } else {
	          state = RELATIVE;
	          continue;
	        }

	        break;

	      case PATH_OR_AUTHORITY:
	        if (char == '/') {
	          state = AUTHORITY;
	          break;
	        } else {
	          state = PATH;
	          continue;
	        }

	      case RELATIVE:
	        url.scheme = base.scheme;

	        if (char == EOF) {
	          url.username = base.username;
	          url.password = base.password;
	          url.host = base.host;
	          url.port = base.port;
	          url.path = base.path.slice();
	          url.query = base.query;
	        } else if (char == '/' || char == '\\' && isSpecial(url)) {
	          state = RELATIVE_SLASH;
	        } else if (char == '?') {
	          url.username = base.username;
	          url.password = base.password;
	          url.host = base.host;
	          url.port = base.port;
	          url.path = base.path.slice();
	          url.query = '';
	          state = QUERY;
	        } else if (char == '#') {
	          url.username = base.username;
	          url.password = base.password;
	          url.host = base.host;
	          url.port = base.port;
	          url.path = base.path.slice();
	          url.query = base.query;
	          url.fragment = '';
	          state = FRAGMENT;
	        } else {
	          url.username = base.username;
	          url.password = base.password;
	          url.host = base.host;
	          url.port = base.port;
	          url.path = base.path.slice();
	          url.path.pop();
	          state = PATH;
	          continue;
	        }

	        break;

	      case RELATIVE_SLASH:
	        if (isSpecial(url) && (char == '/' || char == '\\')) {
	          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	        } else if (char == '/') {
	          state = AUTHORITY;
	        } else {
	          url.username = base.username;
	          url.password = base.password;
	          url.host = base.host;
	          url.port = base.port;
	          state = PATH;
	          continue;
	        }

	        break;

	      case SPECIAL_AUTHORITY_SLASHES:
	        state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
	        if (char != '/' || buffer.charAt(pointer + 1) != '/') continue;
	        pointer++;
	        break;

	      case SPECIAL_AUTHORITY_IGNORE_SLASHES:
	        if (char != '/' && char != '\\') {
	          state = AUTHORITY;
	          continue;
	        }

	        break;

	      case AUTHORITY:
	        if (char == '@') {
	          if (seenAt) buffer = '%40' + buffer;
	          seenAt = true;
	          bufferCodePoints = arrayFrom(buffer);

	          for (var i = 0; i < bufferCodePoints.length; i++) {
	            var codePoint = bufferCodePoints[i];

	            if (codePoint == ':' && !seenPasswordToken) {
	              seenPasswordToken = true;
	              continue;
	            }

	            var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
	            if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
	          }

	          buffer = '';
	        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
	          if (seenAt && buffer == '') return INVALID_AUTHORITY;
	          pointer -= arrayFrom(buffer).length + 1;
	          buffer = '';
	          state = HOST;
	        } else buffer += char;

	        break;

	      case HOST:
	      case HOSTNAME:
	        if (stateOverride && url.scheme == 'file') {
	          state = FILE_HOST;
	          continue;
	        } else if (char == ':' && !seenBracket) {
	          if (buffer == '') return INVALID_HOST;
	          failure = parseHost(url, buffer);
	          if (failure) return failure;
	          buffer = '';
	          state = PORT;
	          if (stateOverride == HOSTNAME) return;
	        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url)) {
	          if (isSpecial(url) && buffer == '') return INVALID_HOST;
	          if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
	          failure = parseHost(url, buffer);
	          if (failure) return failure;
	          buffer = '';
	          state = PATH_START;
	          if (stateOverride) return;
	          continue;
	        } else {
	          if (char == '[') seenBracket = true;else if (char == ']') seenBracket = false;
	          buffer += char;
	        }

	        break;

	      case PORT:
	        if (DIGIT.test(char)) {
	          buffer += char;
	        } else if (char == EOF || char == '/' || char == '?' || char == '#' || char == '\\' && isSpecial(url) || stateOverride) {
	          if (buffer != '') {
	            var port = parseInt(buffer, 10);
	            if (port > 0xFFFF) return INVALID_PORT;
	            url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
	            buffer = '';
	          }

	          if (stateOverride) return;
	          state = PATH_START;
	          continue;
	        } else return INVALID_PORT;

	        break;

	      case FILE:
	        url.scheme = 'file';
	        if (char == '/' || char == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
	          if (char == EOF) {
	            url.host = base.host;
	            url.path = base.path.slice();
	            url.query = base.query;
	          } else if (char == '?') {
	            url.host = base.host;
	            url.path = base.path.slice();
	            url.query = '';
	            state = QUERY;
	          } else if (char == '#') {
	            url.host = base.host;
	            url.path = base.path.slice();
	            url.query = base.query;
	            url.fragment = '';
	            state = FRAGMENT;
	          } else {
	            if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
	              url.host = base.host;
	              url.path = base.path.slice();
	              shortenURLsPath(url);
	            }

	            state = PATH;
	            continue;
	          }
	        } else {
	          state = PATH;
	          continue;
	        }
	        break;

	      case FILE_SLASH:
	        if (char == '/' || char == '\\') {
	          state = FILE_HOST;
	          break;
	        }

	        if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
	          if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
	        }

	        state = PATH;
	        continue;

	      case FILE_HOST:
	        if (char == EOF || char == '/' || char == '\\' || char == '?' || char == '#') {
	          if (!stateOverride && isWindowsDriveLetter(buffer)) {
	            state = PATH;
	          } else if (buffer == '') {
	            url.host = '';
	            if (stateOverride) return;
	            state = PATH_START;
	          } else {
	            failure = parseHost(url, buffer);
	            if (failure) return failure;
	            if (url.host == 'localhost') url.host = '';
	            if (stateOverride) return;
	            buffer = '';
	            state = PATH_START;
	          }

	          continue;
	        } else buffer += char;

	        break;

	      case PATH_START:
	        if (isSpecial(url)) {
	          state = PATH;
	          if (char != '/' && char != '\\') continue;
	        } else if (!stateOverride && char == '?') {
	          url.query = '';
	          state = QUERY;
	        } else if (!stateOverride && char == '#') {
	          url.fragment = '';
	          state = FRAGMENT;
	        } else if (char != EOF) {
	          state = PATH;
	          if (char != '/') continue;
	        }

	        break;

	      case PATH:
	        if (char == EOF || char == '/' || char == '\\' && isSpecial(url) || !stateOverride && (char == '?' || char == '#')) {
	          if (isDoubleDot(buffer)) {
	            shortenURLsPath(url);

	            if (char != '/' && !(char == '\\' && isSpecial(url))) {
	              url.path.push('');
	            }
	          } else if (isSingleDot(buffer)) {
	            if (char != '/' && !(char == '\\' && isSpecial(url))) {
	              url.path.push('');
	            }
	          } else {
	            if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
	              if (url.host) url.host = '';
	              buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
	            }

	            url.path.push(buffer);
	          }

	          buffer = '';

	          if (url.scheme == 'file' && (char == EOF || char == '?' || char == '#')) {
	            while (url.path.length > 1 && url.path[0] === '') {
	              url.path.shift();
	            }
	          }

	          if (char == '?') {
	            url.query = '';
	            state = QUERY;
	          } else if (char == '#') {
	            url.fragment = '';
	            state = FRAGMENT;
	          }
	        } else {
	          buffer += percentEncode(char, pathPercentEncodeSet);
	        }

	        break;

	      case CANNOT_BE_A_BASE_URL_PATH:
	        if (char == '?') {
	          url.query = '';
	          state = QUERY;
	        } else if (char == '#') {
	          url.fragment = '';
	          state = FRAGMENT;
	        } else if (char != EOF) {
	          url.path[0] += percentEncode(char, C0ControlPercentEncodeSet);
	        }

	        break;

	      case QUERY:
	        if (!stateOverride && char == '#') {
	          url.fragment = '';
	          state = FRAGMENT;
	        } else if (char != EOF) {
	          if (char == "'" && isSpecial(url)) url.query += '%27';else if (char == '#') url.query += '%23';else url.query += percentEncode(char, C0ControlPercentEncodeSet);
	        }

	        break;

	      case FRAGMENT:
	        if (char != EOF) url.fragment += percentEncode(char, fragmentPercentEncodeSet);
	        break;
	    }

	    pointer++;
	  }
	}; // `URL` constructor
	// https://url.spec.whatwg.org/#url-class


	var URLConstructor = function URL(url
	/* , base */
	) {
	  var that = anInstance(this, URLConstructor, 'URL');
	  var base = arguments.length > 1 ? arguments[1] : undefined;
	  var urlString = String(url);
	  var state = setInternalState(that, {
	    type: 'URL'
	  });
	  var baseState, failure;

	  if (base !== undefined) {
	    if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
	      failure = parseURL(baseState = {}, String(base));
	      if (failure) throw TypeError(failure);
	    }
	  }

	  failure = parseURL(state, urlString, null, baseState);
	  if (failure) throw TypeError(failure);
	  var searchParams = state.searchParams = new URLSearchParams$1();
	  var searchParamsState = getInternalSearchParamsState(searchParams);
	  searchParamsState.updateSearchParams(state.query);

	  searchParamsState.updateURL = function () {
	    state.query = String(searchParams) || null;
	  };

	  if (!DESCRIPTORS) {
	    that.href = serializeURL.call(that);
	    that.origin = getOrigin.call(that);
	    that.protocol = getProtocol.call(that);
	    that.username = getUsername.call(that);
	    that.password = getPassword.call(that);
	    that.host = getHost.call(that);
	    that.hostname = getHostname.call(that);
	    that.port = getPort.call(that);
	    that.pathname = getPathname.call(that);
	    that.search = getSearch.call(that);
	    that.searchParams = getSearchParams.call(that);
	    that.hash = getHash.call(that);
	  }
	};

	var URLPrototype = URLConstructor.prototype;

	var serializeURL = function () {
	  var url = getInternalURLState(this);
	  var scheme = url.scheme;
	  var username = url.username;
	  var password = url.password;
	  var host = url.host;
	  var port = url.port;
	  var path = url.path;
	  var query = url.query;
	  var fragment = url.fragment;
	  var output = scheme + ':';

	  if (host !== null) {
	    output += '//';

	    if (includesCredentials(url)) {
	      output += username + (password ? ':' + password : '') + '@';
	    }

	    output += serializeHost(host);
	    if (port !== null) output += ':' + port;
	  } else if (scheme == 'file') output += '//';

	  output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
	  if (query !== null) output += '?' + query;
	  if (fragment !== null) output += '#' + fragment;
	  return output;
	};

	var getOrigin = function () {
	  var url = getInternalURLState(this);
	  var scheme = url.scheme;
	  var port = url.port;
	  if (scheme == 'blob') try {
	    return new URL(scheme.path[0]).origin;
	  } catch (error) {
	    return 'null';
	  }
	  if (scheme == 'file' || !isSpecial(url)) return 'null';
	  return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
	};

	var getProtocol = function () {
	  return getInternalURLState(this).scheme + ':';
	};

	var getUsername = function () {
	  return getInternalURLState(this).username;
	};

	var getPassword = function () {
	  return getInternalURLState(this).password;
	};

	var getHost = function () {
	  var url = getInternalURLState(this);
	  var host = url.host;
	  var port = url.port;
	  return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
	};

	var getHostname = function () {
	  var host = getInternalURLState(this).host;
	  return host === null ? '' : serializeHost(host);
	};

	var getPort = function () {
	  var port = getInternalURLState(this).port;
	  return port === null ? '' : String(port);
	};

	var getPathname = function () {
	  var url = getInternalURLState(this);
	  var path = url.path;
	  return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
	};

	var getSearch = function () {
	  var query = getInternalURLState(this).query;
	  return query ? '?' + query : '';
	};

	var getSearchParams = function () {
	  return getInternalURLState(this).searchParams;
	};

	var getHash = function () {
	  var fragment = getInternalURLState(this).fragment;
	  return fragment ? '#' + fragment : '';
	};

	var accessorDescriptor = function (getter, setter) {
	  return {
	    get: getter,
	    set: setter,
	    configurable: true,
	    enumerable: true
	  };
	};

	if (DESCRIPTORS) {
	  defineProperties(URLPrototype, {
	    // `URL.prototype.href` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-href
	    href: accessorDescriptor(serializeURL, function (href) {
	      var url = getInternalURLState(this);
	      var urlString = String(href);
	      var failure = parseURL(url, urlString);
	      if (failure) throw TypeError(failure);
	      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
	    }),
	    // `URL.prototype.origin` getter
	    // https://url.spec.whatwg.org/#dom-url-origin
	    origin: accessorDescriptor(getOrigin),
	    // `URL.prototype.protocol` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-protocol
	    protocol: accessorDescriptor(getProtocol, function (protocol) {
	      var url = getInternalURLState(this);
	      parseURL(url, String(protocol) + ':', SCHEME_START);
	    }),
	    // `URL.prototype.username` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-username
	    username: accessorDescriptor(getUsername, function (username) {
	      var url = getInternalURLState(this);
	      var codePoints = arrayFrom(String(username));
	      if (cannotHaveUsernamePasswordPort(url)) return;
	      url.username = '';

	      for (var i = 0; i < codePoints.length; i++) {
	        url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	      }
	    }),
	    // `URL.prototype.password` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-password
	    password: accessorDescriptor(getPassword, function (password) {
	      var url = getInternalURLState(this);
	      var codePoints = arrayFrom(String(password));
	      if (cannotHaveUsernamePasswordPort(url)) return;
	      url.password = '';

	      for (var i = 0; i < codePoints.length; i++) {
	        url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
	      }
	    }),
	    // `URL.prototype.host` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-host
	    host: accessorDescriptor(getHost, function (host) {
	      var url = getInternalURLState(this);
	      if (url.cannotBeABaseURL) return;
	      parseURL(url, String(host), HOST);
	    }),
	    // `URL.prototype.hostname` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-hostname
	    hostname: accessorDescriptor(getHostname, function (hostname) {
	      var url = getInternalURLState(this);
	      if (url.cannotBeABaseURL) return;
	      parseURL(url, String(hostname), HOSTNAME);
	    }),
	    // `URL.prototype.port` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-port
	    port: accessorDescriptor(getPort, function (port) {
	      var url = getInternalURLState(this);
	      if (cannotHaveUsernamePasswordPort(url)) return;
	      port = String(port);
	      if (port == '') url.port = null;else parseURL(url, port, PORT);
	    }),
	    // `URL.prototype.pathname` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-pathname
	    pathname: accessorDescriptor(getPathname, function (pathname) {
	      var url = getInternalURLState(this);
	      if (url.cannotBeABaseURL) return;
	      url.path = [];
	      parseURL(url, pathname + '', PATH_START);
	    }),
	    // `URL.prototype.search` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-search
	    search: accessorDescriptor(getSearch, function (search) {
	      var url = getInternalURLState(this);
	      search = String(search);

	      if (search == '') {
	        url.query = null;
	      } else {
	        if ('?' == search.charAt(0)) search = search.slice(1);
	        url.query = '';
	        parseURL(url, search, QUERY);
	      }

	      getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
	    }),
	    // `URL.prototype.searchParams` getter
	    // https://url.spec.whatwg.org/#dom-url-searchparams
	    searchParams: accessorDescriptor(getSearchParams),
	    // `URL.prototype.hash` accessors pair
	    // https://url.spec.whatwg.org/#dom-url-hash
	    hash: accessorDescriptor(getHash, function (hash) {
	      var url = getInternalURLState(this);
	      hash = String(hash);

	      if (hash == '') {
	        url.fragment = null;
	        return;
	      }

	      if ('#' == hash.charAt(0)) hash = hash.slice(1);
	      url.fragment = '';
	      parseURL(url, hash, FRAGMENT);
	    })
	  });
	} // `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson


	redefine(URLPrototype, 'toJSON', function toJSON() {
	  return serializeURL.call(this);
	}, {
	  enumerable: true
	}); // `URL.prototype.toString` method
	// https://url.spec.whatwg.org/#URL-stringification-behavior

	redefine(URLPrototype, 'toString', function toString() {
	  return serializeURL.call(this);
	}, {
	  enumerable: true
	});

	if (NativeURL) {
	  var nativeCreateObjectURL = NativeURL.createObjectURL;
	  var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
	  // eslint-disable-next-line no-unused-vars

	  if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
	    return nativeCreateObjectURL.apply(NativeURL, arguments);
	  }); // `URL.revokeObjectURL` method
	  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
	  // eslint-disable-next-line no-unused-vars

	  if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
	    return nativeRevokeObjectURL.apply(NativeURL, arguments);
	  });
	}

	setToStringTag(URLConstructor, 'URL');
	$$1({
	  global: true,
	  forced: !USE_NATIVE_URL,
	  sham: !DESCRIPTORS
	}, {
	  URL: URLConstructor
	});

	var $ = _export; // `URL.prototype.toJSON` method
	// https://url.spec.whatwg.org/#dom-url-tojson

	$({
	  target: 'URL',
	  proto: true,
	  enumerable: true
	}, {
	  toJSON: function toJSON() {
	    return URL.prototype.toString.call(this);
	  }
	});

	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
	 *
	 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
	 *
	 */
	(function () {

	  if (typeof window !== 'object') {
	    return;
	  } // Exit early if all IntersectionObserver and IntersectionObserverEntry
	  // features are natively supported.


	  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
	    // Minimal polyfill for Edge 15's lack of `isIntersecting`
	    // See: https://github.com/w3c/IntersectionObserver/issues/211
	    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
	      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
	        get: function () {
	          return this.intersectionRatio > 0;
	        }
	      });
	    }

	    return;
	  }
	  /**
	   * Returns the embedding frame element, if any.
	   * @param {!Document} doc
	   * @return {!Element}
	   */


	  function getFrameElement(doc) {
	    try {
	      return doc.defaultView && doc.defaultView.frameElement || null;
	    } catch (e) {
	      // Ignore the error.
	      return null;
	    }
	  }
	  /**
	   * A local reference to the root document.
	   */


	  var document = function (startDoc) {
	    var doc = startDoc;
	    var frame = getFrameElement(doc);

	    while (frame) {
	      doc = frame.ownerDocument;
	      frame = getFrameElement(doc);
	    }

	    return doc;
	  }(window.document);
	  /**
	   * An IntersectionObserver registry. This registry exists to hold a strong
	   * reference to IntersectionObserver instances currently observing a target
	   * element. Without this registry, instances without another reference may be
	   * garbage collected.
	   */


	  var registry = [];
	  /**
	   * The signal updater for cross-origin intersection. When not null, it means
	   * that the polyfill is configured to work in a cross-origin mode.
	   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
	   */

	  var crossOriginUpdater = null;
	  /**
	   * The current cross-origin intersection. Only used in the cross-origin mode.
	   * @type {DOMRect|ClientRect}
	   */

	  var crossOriginRect = null;
	  /**
	   * Creates the global IntersectionObserverEntry constructor.
	   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
	   * @param {Object} entry A dictionary of instance properties.
	   * @constructor
	   */

	  function IntersectionObserverEntry(entry) {
	    this.time = entry.time;
	    this.target = entry.target;
	    this.rootBounds = ensureDOMRect(entry.rootBounds);
	    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
	    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
	    this.isIntersecting = !!entry.intersectionRect; // Calculates the intersection ratio.

	    var targetRect = this.boundingClientRect;
	    var targetArea = targetRect.width * targetRect.height;
	    var intersectionRect = this.intersectionRect;
	    var intersectionArea = intersectionRect.width * intersectionRect.height; // Sets intersection ratio.

	    if (targetArea) {
	      // Round the intersection ratio to avoid floating point math issues:
	      // https://github.com/w3c/IntersectionObserver/issues/324
	      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
	    } else {
	      // If area is zero and is intersecting, sets to 1, otherwise to 0
	      this.intersectionRatio = this.isIntersecting ? 1 : 0;
	    }
	  }
	  /**
	   * Creates the global IntersectionObserver constructor.
	   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
	   * @param {Function} callback The function to be invoked after intersection
	   *     changes have queued. The function is not invoked if the queue has
	   *     been emptied by calling the `takeRecords` method.
	   * @param {Object=} opt_options Optional configuration options.
	   * @constructor
	   */


	  function IntersectionObserver(callback, opt_options) {
	    var options = opt_options || {};

	    if (typeof callback != 'function') {
	      throw new Error('callback must be a function');
	    }

	    if (options.root && options.root.nodeType != 1 && options.root.nodeType != 9) {
	      throw new Error('root must be a Document or Element');
	    } // Binds and throttles `this._checkForIntersections`.


	    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT); // Private properties.

	    this._callback = callback;
	    this._observationTargets = [];
	    this._queuedEntries = [];
	    this._rootMarginValues = this._parseRootMargin(options.rootMargin); // Public properties.

	    this.thresholds = this._initThresholds(options.threshold);
	    this.root = options.root || null;
	    this.rootMargin = this._rootMarginValues.map(function (margin) {
	      return margin.value + margin.unit;
	    }).join(' ');
	    /** @private @const {!Array<!Document>} */

	    this._monitoringDocuments = [];
	    /** @private @const {!Array<function()>} */

	    this._monitoringUnsubscribes = [];
	  }
	  /**
	   * The minimum interval within which the document will be checked for
	   * intersection changes.
	   */


	  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
	  /**
	   * The frequency in which the polyfill polls for intersection changes.
	   * this can be updated on a per instance basis and must be set prior to
	   * calling `observe` on the first target.
	   */

	  IntersectionObserver.prototype.POLL_INTERVAL = null;
	  /**
	   * Use a mutation observer on the root element
	   * to detect intersection changes.
	   */

	  IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
	  /**
	   * Sets up the polyfill in the cross-origin mode. The result is the
	   * updater function that accepts two arguments: `boundingClientRect` and
	   * `intersectionRect` - just as these fields would be available to the
	   * parent via `IntersectionObserverEntry`. This function should be called
	   * each time the iframe receives intersection information from the parent
	   * window, e.g. via messaging.
	   * @return {function(DOMRect|ClientRect, DOMRect|ClientRect)}
	   */

	  IntersectionObserver._setupCrossOriginUpdater = function () {
	    if (!crossOriginUpdater) {
	      /**
	       * @param {DOMRect|ClientRect} boundingClientRect
	       * @param {DOMRect|ClientRect} intersectionRect
	       */
	      crossOriginUpdater = function (boundingClientRect, intersectionRect) {
	        if (!boundingClientRect || !intersectionRect) {
	          crossOriginRect = getEmptyRect();
	        } else {
	          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
	        }

	        registry.forEach(function (observer) {
	          observer._checkForIntersections();
	        });
	      };
	    }

	    return crossOriginUpdater;
	  };
	  /**
	   * Resets the cross-origin mode.
	   */


	  IntersectionObserver._resetCrossOriginUpdater = function () {
	    crossOriginUpdater = null;
	    crossOriginRect = null;
	  };
	  /**
	   * Starts observing a target element for intersection changes based on
	   * the thresholds values.
	   * @param {Element} target The DOM element to observe.
	   */


	  IntersectionObserver.prototype.observe = function (target) {
	    var isTargetAlreadyObserved = this._observationTargets.some(function (item) {
	      return item.element == target;
	    });

	    if (isTargetAlreadyObserved) {
	      return;
	    }

	    if (!(target && target.nodeType == 1)) {
	      throw new Error('target must be an Element');
	    }

	    this._registerInstance();

	    this._observationTargets.push({
	      element: target,
	      entry: null
	    });

	    this._monitorIntersections(target.ownerDocument);

	    this._checkForIntersections();
	  };
	  /**
	   * Stops observing a target element for intersection changes.
	   * @param {Element} target The DOM element to observe.
	   */


	  IntersectionObserver.prototype.unobserve = function (target) {
	    this._observationTargets = this._observationTargets.filter(function (item) {
	      return item.element != target;
	    });

	    this._unmonitorIntersections(target.ownerDocument);

	    if (this._observationTargets.length == 0) {
	      this._unregisterInstance();
	    }
	  };
	  /**
	   * Stops observing all target elements for intersection changes.
	   */


	  IntersectionObserver.prototype.disconnect = function () {
	    this._observationTargets = [];

	    this._unmonitorAllIntersections();

	    this._unregisterInstance();
	  };
	  /**
	   * Returns any queue entries that have not yet been reported to the
	   * callback and clears the queue. This can be used in conjunction with the
	   * callback to obtain the absolute most up-to-date intersection information.
	   * @return {Array} The currently queued entries.
	   */


	  IntersectionObserver.prototype.takeRecords = function () {
	    var records = this._queuedEntries.slice();

	    this._queuedEntries = [];
	    return records;
	  };
	  /**
	   * Accepts the threshold value from the user configuration object and
	   * returns a sorted array of unique threshold values. If a value is not
	   * between 0 and 1 and error is thrown.
	   * @private
	   * @param {Array|number=} opt_threshold An optional threshold value or
	   *     a list of threshold values, defaulting to [0].
	   * @return {Array} A sorted list of unique and valid threshold values.
	   */


	  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {
	    var threshold = opt_threshold || [0];
	    if (!Array.isArray(threshold)) threshold = [threshold];
	    return threshold.sort().filter(function (t, i, a) {
	      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
	        throw new Error('threshold must be a number between 0 and 1 inclusively');
	      }

	      return t !== a[i - 1];
	    });
	  };
	  /**
	   * Accepts the rootMargin value from the user configuration object
	   * and returns an array of the four margin values as an object containing
	   * the value and unit properties. If any of the values are not properly
	   * formatted or use a unit other than px or %, and error is thrown.
	   * @private
	   * @param {string=} opt_rootMargin An optional rootMargin value,
	   *     defaulting to '0px'.
	   * @return {Array<Object>} An array of margin objects with the keys
	   *     value and unit.
	   */


	  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {
	    var marginString = opt_rootMargin || '0px';
	    var margins = marginString.split(/\s+/).map(function (margin) {
	      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);

	      if (!parts) {
	        throw new Error('rootMargin must be specified in pixels or percent');
	      }

	      return {
	        value: parseFloat(parts[1]),
	        unit: parts[2]
	      };
	    }); // Handles shorthand.

	    margins[1] = margins[1] || margins[0];
	    margins[2] = margins[2] || margins[0];
	    margins[3] = margins[3] || margins[1];
	    return margins;
	  };
	  /**
	   * Starts polling for intersection changes if the polling is not already
	   * happening, and if the page's visibility state is visible.
	   * @param {!Document} doc
	   * @private
	   */


	  IntersectionObserver.prototype._monitorIntersections = function (doc) {
	    var win = doc.defaultView;

	    if (!win) {
	      // Already destroyed.
	      return;
	    }

	    if (this._monitoringDocuments.indexOf(doc) != -1) {
	      // Already monitoring.
	      return;
	    } // Private state for monitoring.


	    var callback = this._checkForIntersections;
	    var monitoringInterval = null;
	    var domObserver = null; // If a poll interval is set, use polling instead of listening to
	    // resize and scroll events or DOM mutations.

	    if (this.POLL_INTERVAL) {
	      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
	    } else {
	      addEvent(win, 'resize', callback, true);
	      addEvent(doc, 'scroll', callback, true);

	      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in win) {
	        domObserver = new win.MutationObserver(callback);
	        domObserver.observe(doc, {
	          attributes: true,
	          childList: true,
	          characterData: true,
	          subtree: true
	        });
	      }
	    }

	    this._monitoringDocuments.push(doc);

	    this._monitoringUnsubscribes.push(function () {
	      // Get the window object again. When a friendly iframe is destroyed, it
	      // will be null.
	      var win = doc.defaultView;

	      if (win) {
	        if (monitoringInterval) {
	          win.clearInterval(monitoringInterval);
	        }

	        removeEvent(win, 'resize', callback, true);
	      }

	      removeEvent(doc, 'scroll', callback, true);

	      if (domObserver) {
	        domObserver.disconnect();
	      }
	    }); // Also monitor the parent.


	    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;

	    if (doc != rootDoc) {
	      var frame = getFrameElement(doc);

	      if (frame) {
	        this._monitorIntersections(frame.ownerDocument);
	      }
	    }
	  };
	  /**
	   * Stops polling for intersection changes.
	   * @param {!Document} doc
	   * @private
	   */


	  IntersectionObserver.prototype._unmonitorIntersections = function (doc) {
	    var index = this._monitoringDocuments.indexOf(doc);

	    if (index == -1) {
	      return;
	    }

	    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document; // Check if any dependent targets are still remaining.

	    var hasDependentTargets = this._observationTargets.some(function (item) {
	      var itemDoc = item.element.ownerDocument; // Target is in this context.

	      if (itemDoc == doc) {
	        return true;
	      } // Target is nested in this context.


	      while (itemDoc && itemDoc != rootDoc) {
	        var frame = getFrameElement(itemDoc);
	        itemDoc = frame && frame.ownerDocument;

	        if (itemDoc == doc) {
	          return true;
	        }
	      }

	      return false;
	    });

	    if (hasDependentTargets) {
	      return;
	    } // Unsubscribe.


	    var unsubscribe = this._monitoringUnsubscribes[index];

	    this._monitoringDocuments.splice(index, 1);

	    this._monitoringUnsubscribes.splice(index, 1);

	    unsubscribe(); // Also unmonitor the parent.

	    if (doc != rootDoc) {
	      var frame = getFrameElement(doc);

	      if (frame) {
	        this._unmonitorIntersections(frame.ownerDocument);
	      }
	    }
	  };
	  /**
	   * Stops polling for intersection changes.
	   * @param {!Document} doc
	   * @private
	   */


	  IntersectionObserver.prototype._unmonitorAllIntersections = function () {
	    var unsubscribes = this._monitoringUnsubscribes.slice(0);

	    this._monitoringDocuments.length = 0;
	    this._monitoringUnsubscribes.length = 0;

	    for (var i = 0; i < unsubscribes.length; i++) {
	      unsubscribes[i]();
	    }
	  };
	  /**
	   * Scans each observation target for intersection changes and adds them
	   * to the internal entries queue. If new entries are found, it
	   * schedules the callback to be invoked.
	   * @private
	   */


	  IntersectionObserver.prototype._checkForIntersections = function () {
	    if (!this.root && crossOriginUpdater && !crossOriginRect) {
	      // Cross origin monitoring, but no initial data available yet.
	      return;
	    }

	    var rootIsInDom = this._rootIsInDom();

	    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

	    this._observationTargets.forEach(function (item) {
	      var target = item.element;
	      var targetRect = getBoundingClientRect(target);

	      var rootContainsTarget = this._rootContainsTarget(target);

	      var oldEntry = item.entry;

	      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);

	      var rootBounds = null;

	      if (!this._rootContainsTarget(target)) {
	        rootBounds = getEmptyRect();
	      } else if (!crossOriginUpdater || this.root) {
	        rootBounds = rootRect;
	      }

	      var newEntry = item.entry = new IntersectionObserverEntry({
	        time: now(),
	        target: target,
	        boundingClientRect: targetRect,
	        rootBounds: rootBounds,
	        intersectionRect: intersectionRect
	      });

	      if (!oldEntry) {
	        this._queuedEntries.push(newEntry);
	      } else if (rootIsInDom && rootContainsTarget) {
	        // If the new entry intersection ratio has crossed any of the
	        // thresholds, add a new entry.
	        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
	          this._queuedEntries.push(newEntry);
	        }
	      } else {
	        // If the root is not in the DOM or target is not contained within
	        // root but the previous entry for this target had an intersection,
	        // add a new record indicating removal.
	        if (oldEntry && oldEntry.isIntersecting) {
	          this._queuedEntries.push(newEntry);
	        }
	      }
	    }, this);

	    if (this._queuedEntries.length) {
	      this._callback(this.takeRecords(), this);
	    }
	  };
	  /**
	   * Accepts a target and root rect computes the intersection between then
	   * following the algorithm in the spec.
	   * TODO(philipwalton): at this time clip-path is not considered.
	   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
	   * @param {Element} target The target DOM element
	   * @param {Object} targetRect The bounding rect of the target.
	   * @param {Object} rootRect The bounding rect of the root after being
	   *     expanded by the rootMargin value.
	   * @return {?Object} The final intersection rect object or undefined if no
	   *     intersection is found.
	   * @private
	   */


	  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, targetRect, rootRect) {
	    // If the element isn't displayed, an intersection can't happen.
	    if (window.getComputedStyle(target).display == 'none') return;
	    var intersectionRect = targetRect;
	    var parent = getParentNode(target);
	    var atRoot = false;

	    while (!atRoot && parent) {
	      var parentRect = null;
	      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {}; // If the parent isn't displayed, an intersection can't happen.

	      if (parentComputedStyle.display == 'none') return null;

	      if (parent == this.root || parent.nodeType ==
	      /* DOCUMENT */
	      9) {
	        atRoot = true;

	        if (parent == this.root || parent == document) {
	          if (crossOriginUpdater && !this.root) {
	            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
	              // A 0-size cross-origin intersection means no-intersection.
	              parent = null;
	              parentRect = null;
	              intersectionRect = null;
	            } else {
	              parentRect = crossOriginRect;
	            }
	          } else {
	            parentRect = rootRect;
	          }
	        } else {
	          // Check if there's a frame that can be navigated to.
	          var frame = getParentNode(parent);
	          var frameRect = frame && getBoundingClientRect(frame);

	          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);

	          if (frameRect && frameIntersect) {
	            parent = frame;
	            parentRect = convertFromParentRect(frameRect, frameIntersect);
	          } else {
	            parent = null;
	            intersectionRect = null;
	          }
	        }
	      } else {
	        // If the element has a non-visible overflow, and it's not the <body>
	        // or <html> element, update the intersection rect.
	        // Note: <body> and <html> cannot be clipped to a rect that's not also
	        // the document rect, so no need to compute a new intersection.
	        var doc = parent.ownerDocument;

	        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != 'visible') {
	          parentRect = getBoundingClientRect(parent);
	        }
	      } // If either of the above conditionals set a new parentRect,
	      // calculate new intersection data.


	      if (parentRect) {
	        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
	      }

	      if (!intersectionRect) break;
	      parent = parent && getParentNode(parent);
	    }

	    return intersectionRect;
	  };
	  /**
	   * Returns the root rect after being expanded by the rootMargin value.
	   * @return {ClientRect} The expanded root rect.
	   * @private
	   */


	  IntersectionObserver.prototype._getRootRect = function () {
	    var rootRect;

	    if (this.root && !isDoc(this.root)) {
	      rootRect = getBoundingClientRect(this.root);
	    } else {
	      // Use <html>/<body> instead of window since scroll bars affect size.
	      var doc = isDoc(this.root) ? this.root : document;
	      var html = doc.documentElement;
	      var body = doc.body;
	      rootRect = {
	        top: 0,
	        left: 0,
	        right: html.clientWidth || body.clientWidth,
	        width: html.clientWidth || body.clientWidth,
	        bottom: html.clientHeight || body.clientHeight,
	        height: html.clientHeight || body.clientHeight
	      };
	    }

	    return this._expandRectByRootMargin(rootRect);
	  };
	  /**
	   * Accepts a rect and expands it by the rootMargin value.
	   * @param {DOMRect|ClientRect} rect The rect object to expand.
	   * @return {ClientRect} The expanded rect.
	   * @private
	   */


	  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {
	    var margins = this._rootMarginValues.map(function (margin, i) {
	      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
	    });

	    var newRect = {
	      top: rect.top - margins[0],
	      right: rect.right + margins[1],
	      bottom: rect.bottom + margins[2],
	      left: rect.left - margins[3]
	    };
	    newRect.width = newRect.right - newRect.left;
	    newRect.height = newRect.bottom - newRect.top;
	    return newRect;
	  };
	  /**
	   * Accepts an old and new entry and returns true if at least one of the
	   * threshold values has been crossed.
	   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
	   *    particular target element or null if no previous entry exists.
	   * @param {IntersectionObserverEntry} newEntry The current entry for a
	   *    particular target element.
	   * @return {boolean} Returns true if a any threshold has been crossed.
	   * @private
	   */


	  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {
	    // To make comparing easier, an entry that has a ratio of 0
	    // but does not actually intersect is given a value of -1
	    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
	    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1; // Ignore unchanged ratios

	    if (oldRatio === newRatio) return;

	    for (var i = 0; i < this.thresholds.length; i++) {
	      var threshold = this.thresholds[i]; // Return true if an entry matches a threshold or if the new ratio
	      // and the old ratio are on the opposite sides of a threshold.

	      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
	        return true;
	      }
	    }
	  };
	  /**
	   * Returns whether or not the root element is an element and is in the DOM.
	   * @return {boolean} True if the root element is an element and is in the DOM.
	   * @private
	   */


	  IntersectionObserver.prototype._rootIsInDom = function () {
	    return !this.root || containsDeep(document, this.root);
	  };
	  /**
	   * Returns whether or not the target element is a child of root.
	   * @param {Element} target The target element to check.
	   * @return {boolean} True if the target element is a child of root.
	   * @private
	   */


	  IntersectionObserver.prototype._rootContainsTarget = function (target) {
	    var rootDoc = this.root && (this.root.ownerDocument || this.root) || document;
	    return containsDeep(rootDoc, target) && (!this.root || rootDoc == target.ownerDocument);
	  };
	  /**
	   * Adds the instance to the global IntersectionObserver registry if it isn't
	   * already present.
	   * @private
	   */


	  IntersectionObserver.prototype._registerInstance = function () {
	    if (registry.indexOf(this) < 0) {
	      registry.push(this);
	    }
	  };
	  /**
	   * Removes the instance from the global IntersectionObserver registry.
	   * @private
	   */


	  IntersectionObserver.prototype._unregisterInstance = function () {
	    var index = registry.indexOf(this);
	    if (index != -1) registry.splice(index, 1);
	  };
	  /**
	   * Returns the result of the performance.now() method or null in browsers
	   * that don't support the API.
	   * @return {number} The elapsed time since the page was requested.
	   */


	  function now() {
	    return window.performance && performance.now && performance.now();
	  }
	  /**
	   * Throttles a function and delays its execution, so it's only called at most
	   * once within a given time period.
	   * @param {Function} fn The function to throttle.
	   * @param {number} timeout The amount of time that must pass before the
	   *     function can be called again.
	   * @return {Function} The throttled function.
	   */


	  function throttle(fn, timeout) {
	    var timer = null;
	    return function () {
	      if (!timer) {
	        timer = setTimeout(function () {
	          fn();
	          timer = null;
	        }, timeout);
	      }
	    };
	  }
	  /**
	   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
	   * @param {Node} node The DOM node to add the event handler to.
	   * @param {string} event The event name.
	   * @param {Function} fn The event handler to add.
	   * @param {boolean} opt_useCapture Optionally adds the even to the capture
	   *     phase. Note: this only works in modern browsers.
	   */


	  function addEvent(node, event, fn, opt_useCapture) {
	    if (typeof node.addEventListener == 'function') {
	      node.addEventListener(event, fn, opt_useCapture || false);
	    } else if (typeof node.attachEvent == 'function') {
	      node.attachEvent('on' + event, fn);
	    }
	  }
	  /**
	   * Removes a previously added event handler from a DOM node.
	   * @param {Node} node The DOM node to remove the event handler from.
	   * @param {string} event The event name.
	   * @param {Function} fn The event handler to remove.
	   * @param {boolean} opt_useCapture If the event handler was added with this
	   *     flag set to true, it should be set to true here in order to remove it.
	   */


	  function removeEvent(node, event, fn, opt_useCapture) {
	    if (typeof node.removeEventListener == 'function') {
	      node.removeEventListener(event, fn, opt_useCapture || false);
	    } else if (typeof node.detatchEvent == 'function') {
	      node.detatchEvent('on' + event, fn);
	    }
	  }
	  /**
	   * Returns the intersection between two rect objects.
	   * @param {Object} rect1 The first rect.
	   * @param {Object} rect2 The second rect.
	   * @return {?Object|?ClientRect} The intersection rect or undefined if no
	   *     intersection is found.
	   */


	  function computeRectIntersection(rect1, rect2) {
	    var top = Math.max(rect1.top, rect2.top);
	    var bottom = Math.min(rect1.bottom, rect2.bottom);
	    var left = Math.max(rect1.left, rect2.left);
	    var right = Math.min(rect1.right, rect2.right);
	    var width = right - left;
	    var height = bottom - top;
	    return width >= 0 && height >= 0 && {
	      top: top,
	      bottom: bottom,
	      left: left,
	      right: right,
	      width: width,
	      height: height
	    } || null;
	  }
	  /**
	   * Shims the native getBoundingClientRect for compatibility with older IE.
	   * @param {Element} el The element whose bounding rect to get.
	   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
	   */


	  function getBoundingClientRect(el) {
	    var rect;

	    try {
	      rect = el.getBoundingClientRect();
	    } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
	      // https://github.com/w3c/IntersectionObserver/pull/205
	    }

	    if (!rect) return getEmptyRect(); // Older IE

	    if (!(rect.width && rect.height)) {
	      rect = {
	        top: rect.top,
	        right: rect.right,
	        bottom: rect.bottom,
	        left: rect.left,
	        width: rect.right - rect.left,
	        height: rect.bottom - rect.top
	      };
	    }

	    return rect;
	  }
	  /**
	   * Returns an empty rect object. An empty rect is returned when an element
	   * is not in the DOM.
	   * @return {ClientRect} The empty rect.
	   */


	  function getEmptyRect() {
	    return {
	      top: 0,
	      bottom: 0,
	      left: 0,
	      right: 0,
	      width: 0,
	      height: 0
	    };
	  }
	  /**
	   * Ensure that the result has all of the necessary fields of the DOMRect.
	   * Specifically this ensures that `x` and `y` fields are set.
	   *
	   * @param {?DOMRect|?ClientRect} rect
	   * @return {?DOMRect}
	   */


	  function ensureDOMRect(rect) {
	    // A `DOMRect` object has `x` and `y` fields.
	    if (!rect || 'x' in rect) {
	      return rect;
	    } // A IE's `ClientRect` type does not have `x` and `y`. The same is the case
	    // for internally calculated Rect objects. For the purposes of
	    // `IntersectionObserver`, it's sufficient to simply mirror `left` and `top`
	    // for these fields.


	    return {
	      top: rect.top,
	      y: rect.top,
	      bottom: rect.bottom,
	      left: rect.left,
	      x: rect.left,
	      right: rect.right,
	      width: rect.width,
	      height: rect.height
	    };
	  }
	  /**
	   * Inverts the intersection and bounding rect from the parent (frame) BCR to
	   * the local BCR space.
	   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
	   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
	   * @return {ClientRect} The local root bounding rect for the parent's children.
	   */


	  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
	    var top = parentIntersectionRect.top - parentBoundingRect.top;
	    var left = parentIntersectionRect.left - parentBoundingRect.left;
	    return {
	      top: top,
	      left: left,
	      height: parentIntersectionRect.height,
	      width: parentIntersectionRect.width,
	      bottom: top + parentIntersectionRect.height,
	      right: left + parentIntersectionRect.width
	    };
	  }
	  /**
	   * Checks to see if a parent element contains a child element (including inside
	   * shadow DOM).
	   * @param {Node} parent The parent element.
	   * @param {Node} child The child element.
	   * @return {boolean} True if the parent node contains the child node.
	   */


	  function containsDeep(parent, child) {
	    var node = child;

	    while (node) {
	      if (node == parent) return true;
	      node = getParentNode(node);
	    }

	    return false;
	  }
	  /**
	   * Gets the parent node of an element or its host element if the parent node
	   * is a shadow root.
	   * @param {Node} node The node whose parent to get.
	   * @return {Node|null} The parent node or null if no parent exists.
	   */


	  function getParentNode(node) {
	    var parent = node.parentNode;

	    if (node.nodeType ==
	    /* DOCUMENT */
	    9 && node != document) {
	      // If this node is a document node, look for the embedding frame.
	      return getFrameElement(node);
	    } // If the parent has element that is assigned through shadow root slot


	    if (parent && parent.assignedSlot) {
	      parent = parent.assignedSlot.parentNode;
	    }

	    if (parent && parent.nodeType == 11 && parent.host) {
	      // If the parent is a shadow root, return the host element.
	      return parent.host;
	    }

	    return parent;
	  }
	  /**
	   * Returns true if `node` is a Document.
	   * @param {!Node} node
	   * @returns {boolean}
	   */


	  function isDoc(node) {
	    return node && node.nodeType === 9;
	  } // Exposes the constructors globally.


	  window.IntersectionObserver = IntersectionObserver;
	  window.IntersectionObserverEntry = IntersectionObserverEntry;
	})();

	var navbarList = element("#navbar__list"),
	    landingContainer = elements("section"),
	    navbar = element(".page__header"),
	    scrollToTop = element(".scroll-to-top"),
	    fragmentList = document.createDocumentFragment();
	/**
	 * End Global Variables
	 * Start Helper Functions
	 *
	 */
	//select element

	function element(ele) {
	  return document.querySelector(ele);
	} //select elements


	function elements(eles) {
	  return document.querySelectorAll(eles);
	} // remove class active


	function removeActive(ele) {
	  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "active";
	  ele.forEach(function (el) {
	    el.classList.remove(className);
	  });
	} // add class active


	function addActive(ele) {
	  var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "active";
	  ele.classList.add(className);
	}
	/**
	 * End Helper Functions
	 * Begin Main Functions
	 *
	 */
	// build the nav


	landingContainer.forEach(function (section) {
	  var li = document.createElement("li");
	  var anchorLink = document.createElement("a");
	  anchorLink.href = "#".concat(section.id);
	  anchorLink.classList.add("menu__link");
	  anchorLink.textContent = section.dataset.nav;
	  li.appendChild(anchorLink);
	  fragmentList.appendChild(li);
	});
	navbarList.appendChild(fragmentList); //select the appended lists

	var menuLink = elements(".navbar__menu .menu__link"); // Add class 'active' to section or link when near top of viewport

	landingContainer.forEach(function (sec) {
	  //loop of each section and apply IntersectionObserver
	  // createObserver(sec);
	  // navbar list sby by getBoundingClientRect
	  window.addEventListener("scroll", function addAct() {
	    if (innerHeight - sec.getBoundingClientRect().top + 1 >= innerHeight && innerHeight - sec.getBoundingClientRect().bottom + 1 <= innerHeight && !sec.classList.contains("active")) {
	      removeActive(landingContainer);
	      addActive(sec);
	      removeActive(menuLink);
	      addActive(element(".menu__link[href=\"#".concat(sec.id, "\"]")));
	    }
	  });
	}); // intersection observer function


	function smoothScroll(e) {
	  e.preventDefault();

	  if (e.target.nodeName === "A" && !e.target.classList.contains("active")) {
	    var hash = e.target.hash;
	    location.hash = hash.slice(0, -1) + "-" + hash.slice(-1); // const offsetTop = element(hash).offsetTop;
	    // if (
	    //   (window.MSInputMethodContext && document.documentMode) ||
	    //   window.navigator.userAgent.indexOf("Edge") > -1
	    // ) {
	    //   scroll(0, offsetTop);
	    // } else {
	    //   scroll({
	    //     top: offsetTop,
	    //     left: 0,
	    //     behavior: "smooth",
	    //   });
	    // }

	    goScroll(element(hash), 300);
	  }
	} //navbar hide function


	var hideNavbar;

	function hideHeader() {
	  navbar.style.transform = "translateY(0)";
	  clearTimeout(hideNavbar);
	  hideNavbar = setTimeout(function () {
	    navbar.style.transform = "translateY(-100%)";
	  }, 1300);
	}

	hideHeader(); // scroll to top

	function scrollTopToggle() {
	  if (pageYOffset <= 250) {
	    scrollToTop.classList.add("hidden");
	  } else {
	    scrollToTop.classList.remove("hidden");
	  }
	}

	function scrollTopClick() {
	  // scroll({
	  //   top: 0,
	  //   behavior: "smooth",
	  // });

	  /**
	   * smooth scroll with setinterval
	   */
	  // let i = pageYOffset;
	  // let scrolltoo = setInterval(() => {
	  //   if (i <= 100) clearInterval(scrolltoo);
	  //   i -= 100;
	  //   scrollTo(0, i);
	  // }, 0);
	  goScroll(0, 300);
	} // goScroll function [to element or to top]


	function goScroll(element) {
	  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
	  var startPos = window.pageYOffset || document.documentElement.scrollTop,
	      target = element ? element.getBoundingClientRect().top : 0;
	  var start = null,
	      pos = 0;
	  /**
	   * smooth scroll with requestAnimationFrame
	   * @param {number} timestamp - changed each call
	   */

	  function sAnimation(timestamp) {
	    if (!start) {
	      start = timestamp;
	    }

	    var elapsed = timestamp - start,
	        progress = elapsed / timeout; //timeout - animation time (ms)
	    //ease in function from https://github.com/component/ease/blob/master/index.js

	    var outQuad = function outQuad(n) {
	      return n * (2 - n);
	    };

	    var easeInPercentage = +outQuad(progress).toFixed(5);
	    if (easeInPercentage > 0.98) easeInPercentage = 1;
	    pos = target == 0 ? startPos - startPos * easeInPercentage : startPos + target * easeInPercentage; // console.log(easeInPercentage, target, pos, startPos);

	    scrollTo(0, pos);

	    if (target !== 0 && pos == startPos + target || target == 0 && pos == 0) {
	      window.cancelAnimationFrame(start);
	      pos = 0;
	    } else {
	      window.requestAnimationFrame(sAnimation);
	    }
	  }

	  window.requestAnimationFrame(sAnimation);
	}
	/**
	 * End Main Functions
	 * Begin Events
	 *
	 */
	// Build menu
	// Scroll to section on link click


	navbarList.addEventListener("click", smoothScroll); //Hide fixed navigation bar while not scrolling or mousemove

	window.addEventListener("scroll", function () {
	  //hide navbar header
	  hideHeader(); //toggle scroll to top

	  scrollTopToggle();
	});
	window.addEventListener("mousemove", function (e) {
	  if (e.clientY <= navbar.clientHeight) {
	    hideHeader();
	  }
	}); // scroll to top

	scrollToTop.addEventListener("click", scrollTopClick); // const t2 = performance.now();
	// console.log(t2 - t1);

}());
