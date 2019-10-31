'use strict';
/** @type {!Array} */
window["whitelistedDomainsHashedValueListForGpayButtonWithCardInfo"] = [1634286960, -2079966298, -1658203989, 2109171715];
/** @type {!global this} */
var a = this || self;
/** @type {!Array} */
var b = ["google", "payments", "api", "ReadyToPayAdditionalBrowsers"];
/** @type {!Window} */
var c = window || a;
if (!(b[0] in c || "undefined" == typeof c.execScript)) {
  c.execScript("var " + b[0]);
}
var d;
for (; b.length && (d = b.shift());) {
  if (b.length) {
    c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
  } else {
    /** @type {boolean} */
    c[d] = true;
  }
}
/** @type {!global this} */
a = this || self;
/** @type {!Array} */
b = ["google", "payments", "api", "EnableLoadPaymentDataTimeout"];
/** @type {!Window} */
c = window || a;
if (!(b[0] in c || "undefined" == typeof c.execScript)) {
  c.execScript("var " + b[0]);
}
for (; b.length && (d = b.shift());) {
  if (b.length) {
    c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
  } else {
    /** @type {boolean} */
    c[d] = true;
  }
}
(function() {
  /**
   * @param {!Object} target
   * @param {!Object} data
   * @return {?}
   */
  function assign(target, data) {
    if ("object" !== typeof data || null === data) {
      return target;
    }
    var key;
    for (key in data) {
      if (data.hasOwnProperty(key) && void 0 !== data[key]) {
        if (null == data[key]) {
          /** @type {null} */
          target[key] = null;
        } else {
          if (null == target[key] || "object" !== typeof target[key] || "object" !== typeof data[key] || isObject(data[key]) || isObject(target[key])) {
            target[key] = data[key];
          } else {
            assign(target[key], data[key]);
          }
        }
      }
    }
    return target;
  }
  /**
   * @param {!Object} target
   * @return {?}
   */
  function bind(target) {
    if (!wc) {
      text("\n  .gpay-card-info-container {\n    padding: 0;\n    position: relative;\n    min-width: 240px;\n    height: 40px;\n    border-radius: 4px;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n    cursor: pointer;\n    border: 0px;\n  }\n\n  .gpay-card-info-container.black,\n  .gpay-card-info-animation-container.black {\n    background-color: #000;\n    box-shadow: none;\n  }\n\n  .gpay-card-info-container.white,\n  .gpay-card-info-animation-container.white {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.black.active {\n    background-color: #5f6368;\n  }\n\n  .gpay-card-info-container.black.hover,\n  .gpay-card-info-animation-container.black.hover {\n    background-color: #3c4043;\n  }\n\n  .gpay-card-info-container.white.active {\n    background-color: #fff;\n  }\n\n  .gpay-card-info-container.white.focus {\n    box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n  }\n\n  .gpay-card-info-container.white.hover,\n  .gpay-card-info-animation-container.white.hover {\n    background-color: #f8f8f8;\n  }\n\n  .gpay-card-info-iframe {\n    height: 40px;\n    width: 240px;\n    max-width: 100%;\n    border: 0;\n  }\n  ");
      text('\n  .gpay-card-info-animation-container {\n    display: flex;\n    width:100%;\n    position: absolute;\n    z-index: 100;\n    height: 40px;\n    border-radius: 4px;\n  }\n\n  .gpay-card-info-placeholder-container {\n    display: flex;\n    width: 240px;\n    height: 100%;\n    margin: auto;\n  }\n\n  .gpay-card-info-animated-progress-bar-container {\n    display: flex;\n    box-sizing: border-box;\n    position: absolute;\n    width: 100%;\n  }\n\n  .gpay-card-info-animated-progress-bar {\n    border-radius: 4px 4px 0px 0px;\n    animation-duration: 0.5s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-name: gpayProgressFill;\n    animation-timing-function: cubic-bezier(0.97, 0.33, 1, 1);\n    background: #caccce;\n    width: 100%;\n    height: 3px;\n    max-height: 3px;\n  }\n\n  .gpay-card-info-animated-progress-bar-indicator {\n    border-radius: 4px 4px 0px 0px;\n    max-width: 20px;\n    min-width: 20px;\n    height: 3px;\n    max-height: 3px;\n    background: linear-gradient(to right, #caccce 30%, #acaeaf 60%);\n    animation-delay: 0.5s;\n    animation-duration: 1.7s;\n    animation-fill-mode: forwards;\n    animation-iteration-count: infinite;\n    animation-name: gpayPlaceHolderShimmer;\n  }\n\n  .gpay-card-info-iframe-fade-in {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayIframeFadeIn;\n  }\n\n  .gpay-card-info-animation-container-fade-out {\n    animation-fill-mode: forwards;\n    animation-duration: 0.6s;\n    animation-name: gpayPlaceHolderFadeOut;\n  }\n\n  .gpay-card-info-animation-gpay-logo {\n    margin: 13px 7px 0px  39px;\n    background-origin: content-box;\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    height: 17px;\n    max-height: 17px;\n    max-width: 41px;\n    min-width: 41px;\n  }\n\n  .gpay-card-info-animation-gpay-logo.black {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/dark_gpay.svg");\n  }\n\n  .gpay-card-info-animation-gpay-logo.white {\n    background-image: url("https://www.gstatic.com/instantbuy/svg/light_gpay.svg");\n  }\n\n  @keyframes gpayPlaceHolderShimmer{\n    0% {\n      margin-left: 0px;\n    }\n    100% {\n      margin-left: calc(100% - 20px);\n    }\n  }\n\n  @keyframes gpayIframeFadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n  }\n\n  @keyframes gpayPlaceHolderFadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n  }\n\n  @keyframes gpayProgressFill {\n    from {\n      width: 0;\n    }\n    to {\n      width: 100%;\n    }\n}\n');
      /** @type {boolean} */
      wc = true;
    }
    var value = activate(target);
    /** @type {string} */
    var color = "white" == target.buttonColor ? "white" : "black";
    /** @type {!Element} */
    var node = document.createElement("button");
    createElement(node);
    node.setAttribute("class", (-1658203989 === createFeed() ? "gpay-button" : "") + " gpay-card-info-container " + value);
    /** @type {!Element} */
    var wrapper = document.createElement("div");
    wrapper.setAttribute("class", "gpay-card-info-animation-container " + color);
    /** @type {!Element} */
    value = document.createElement("div");
    value.setAttribute("class", "gpay-card-info-placeholder-container");
    /** @type {!Element} */
    var cell = document.createElement("div");
    cell.setAttribute("class", "gpay-card-info-animation-gpay-logo " + color);
    color = traverse("white" == target.buttonColor ? $realtime : $gBCRBottom);
    /** @type {!Element} */
    var g = document.createElement("div");
    g.setAttribute("class", "gpay-card-info-animated-progress-bar-container");
    /** @type {!Element} */
    var container = document.createElement("div");
    container.setAttribute("class", "gpay-card-info-animated-progress-bar");
    /** @type {!Element} */
    var helper = document.createElement("div");
    helper.setAttribute("class", "gpay-card-info-animated-progress-bar-indicator");
    container.appendChild(helper);
    value.appendChild(cell);
    value.appendChild(color);
    g.appendChild(container);
    wrapper.appendChild(value);
    wrapper.appendChild(g);
    remove(wrapper);
    node.appendChild(wrapper);
    /** @type {!Element} */
    var iframe = document.createElement("iframe");
    iframe.setAttribute("class", "gpay-card-info-iframe");
    iframe.setAttribute("scrolling", "no");
    value = new Color("https://pay.google.com/gp/p/generate_gpay_btn_img");
    change(value, target.buttonColor);
    iframe.setAttribute("src", value.toString());
    /**
     * @return {undefined}
     */
    iframe.onload = function() {
      iframe.classList.add("gpay-card-info-iframe-fade-in");
      wrapper.classList.add("gpay-card-info-animation-container-fade-out");
    };
    if (target.onClick) {
      node.addEventListener("click", target.onClick);
    }
    remove(node);
    node.appendChild(iframe);
    /** @type {!Element} */
    target = document.createElement("div");
    target.appendChild(node);
    return target;
  }
  /**
   * @param {!Element} tag
   * @return {undefined}
   */
  function remove(tag) {
    ["mouseover", "mouseout"].map(function(b) {
      tag.addEventListener(b, function(verifiedEvent) {
        tag.classList.toggle("hover", "mouseover" == verifiedEvent.type);
        /** @type {(Element|null)} */
        var targettedRow = document.querySelector(".gpay-card-info-animation-container");
        if (null !== targettedRow) {
          targettedRow.classList.toggle("hover", "mouseover" == verifiedEvent.type);
        }
      });
    });
    ["mousedown", "mouseup", "mouseout"].map(function(b) {
      tag.addEventListener(b, function(e) {
        tag.classList.toggle("active", "mousedown" == e.type);
      });
    });
    ["focus", "blur"].map(function(b) {
      tag.addEventListener(b, function(verifiedEvent) {
        tag.classList.toggle("focus", "focus" == verifiedEvent.type);
      });
    });
  }
  /**
   * @param {!Element} element
   * @return {undefined}
   */
  function createElement(element) {
    element.setAttribute("type", "button");
    element.setAttribute("aria-label", "Google Pay");
  }
  /**
   * @param {!Object} scope
   * @return {?}
   */
  function activate(scope) {
    if ("long" == scope.buttonType) {
      if ("white" == scope.buttonColor) {
        return "white long";
      }
    } else {
      if ("short" == scope.buttonType) {
        return "white" == scope.buttonColor ? "white short" : "black short";
      }
    }
    return "black long";
  }
  /**
   * @param {!Element} e
   * @param {!Object} f
   * @return {undefined}
   */
  function style(e, f) {
    var i;
    for (i in f) {
      e.style.setProperty(i, f[i].toString(), "important");
    }
  }
  /**
   * @param {!Element} e
   * @param {!Object} key
   * @return {?}
   */
  function open(e, key) {
    var view = e.ownerDocument.defaultView;
    var transition = e.style.transition || "";
    return (new Promise(function(starredRepoElem) {
      view.setTimeout(function() {
        view.setTimeout(starredRepoElem, 300);
        style(e, Object.assign({
          transition : "transform 300ms ease-out, opacity 300ms ease-out"
        }, key));
      });
    })).then(function() {
      style(e, Object.assign({
        transition : transition
      }, key));
    });
  }
  /**
   * @param {?} name
   * @return {?}
   */
  function hasVar(name) {
    return Object.values(links).includes(name);
  }
  /**
   * @param {!Object} type
   * @return {?}
   */
  function sort(type) {
    return type.allowedPaymentMethods && (type = toString(type, "CARD")) && type.parameters ? type.parameters.allowedAuthMethods : null;
  }
  /**
   * @param {!Object} type
   * @param {string} selector
   * @return {?}
   */
  function toString(type, selector) {
    /** @type {number} */
    var i = 0;
    for (; i < type.allowedPaymentMethods.length; i++) {
      var token = type.allowedPaymentMethods[i];
      if (token.type == selector) {
        return token;
      }
    }
    return null;
  }
  /**
   * @param {string} a
   * @return {?}
   */
  function getDirectoryOfFile(a) {
    var b = a.indexOf("#");
    return -1 == b ? a : a.substring(0, b);
  }
  /**
   * @param {string} query
   * @return {?}
   */
  function all(query) {
    return query ? (/^[?#]/.test(query) ? query.slice(1) : query).split("&").reduce(function(object, name) {
      var result = name.split("=");
      /** @type {string} */
      name = decodeURIComponent(result[0] || "");
      /** @type {string} */
      result = decodeURIComponent(result[1] || "");
      if (name) {
        /** @type {string} */
        object[name] = result;
      }
      return object;
    }, {}) : {};
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function showMessage(data) {
    var response = {
      requestId : data.lc,
      returnUrl : data.Lb,
      args : data.Yb
    };
    if (void 0 !== data.origin) {
      response.origin = data.origin;
    }
    if (void 0 !== data.cb) {
      response.originVerified = data.cb;
    }
    return JSON.stringify(response);
  }
  /**
   * @param {!Object} message
   * @param {!Object} e
   * @param {!Function} log
   * @return {undefined}
   */
  function fn(message, e, log) {
    if (e.ok) {
      log(e);
    } else {
      var err;
      if (!(err = e.error)) {
        /** @type {null} */
        err = null;
        if ("function" == typeof message.DOMException) {
          /** @type {!Function} */
          message = message.DOMException;
          try {
            err = new message("AbortError", "AbortError");
          } catch (e) {
          }
        }
        if (!err) {
          /** @type {!Error} */
          err = Error("AbortError");
          /** @type {string} */
          err.name = "AbortError";
          /** @type {number} */
          err.code = 20;
        }
      }
      message = err;
      /** @type {!Object} */
      message.Tc = e;
      log(Promise.reject(message));
    }
  }
  /**
   * @param {!Object} context
   * @return {?}
   */
  function find(context) {
    context = context.navigator;
    return /Trident|MSIE|IEMobile/i.test(context && context.userAgent);
  }
  /**
   * @param {?} value
   * @return {undefined}
   */
  function createCard(value) {
    setTimeout(function() {
      throw value;
    });
  }
  /**
   * @param {!Object} color
   * @return {undefined}
   */
  function debug(color) {
    try {
      color.close();
    } catch (b) {
    }
  }
  /**
   * @param {!Object} val
   * @return {?}
   */
  function a(val) {
    return true === (val.i && val.i.disableNative);
  }
  var data;
  /** @type {!Function} */
  var defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(object, key, descriptor) {
    if (object != Array.prototype && object != Object.prototype) {
      object[key] = descriptor.value;
    }
  };
  var n = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  /**
   * @param {string} o
   * @param {string} p
   * @return {undefined}
   */
  var require = function(o, p) {
    if (p) {
      var d = n;
      o = o.split(".");
      /** @type {number} */
      var c = 0;
      for (; c < o.length - 1; c++) {
        var key = o[c];
        if (!(key in d)) {
          d[key] = {};
        }
        d = d[key];
      }
      o = o[o.length - 1];
      c = d[o];
      p = p(c);
      if (p != c && null != p) {
        defineProperty(d, o, {
          configurable : true,
          writable : true,
          value : p
        });
      }
    }
  };
  require("Object.is", function(position) {
    return position ? position : function(a, b) {
      return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
    };
  });
  require("Array.prototype.includes", function(position) {
    return position ? position : function(b, index) {
      var result = this;
      if (result instanceof String) {
        /** @type {string} */
        result = String(result);
      }
      var length = result.length;
      index = index || 0;
      if (0 > index) {
        /** @type {number} */
        index = Math.max(index + length, 0);
      }
      for (; index < length; index++) {
        var a = result[index];
        if (a === b || Object.is(a, b)) {
          return true;
        }
      }
      return false;
    };
  });
  require("Object.values", function(position) {
    return position ? position : function(b) {
      /** @type {!Array} */
      var bulletList = [];
      var i;
      for (i in b) {
        if (Object.prototype.hasOwnProperty.call(b, i)) {
          bulletList.push(b[i]);
        }
      }
      return bulletList;
    };
  });
  /**
   * @param {!Object} text
   * @return {?}
   */
  var resolver = function(text) {
    /** @type {number} */
    var i = 0;
    return function() {
      return i < text.length ? {
        done : false,
        value : text[i++]
      } : {
        done : true
      };
    };
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  var Q = function(value) {
    var func = "undefined" != typeof Symbol && Symbol.iterator && value[Symbol.iterator];
    return func ? func.call(value) : {
      next : resolver(value)
    };
  };
  require("Promise", function(a) {
    /**
     * @return {undefined}
     */
    function MersenneTwister() {
      /** @type {null} */
      this.N = null;
    }
    /**
     * @param {string} onSuccess
     * @return {?}
     */
    function resolve(onSuccess) {
      return onSuccess instanceof Promise ? onSuccess : new Promise(function(exec) {
        exec(onSuccess);
      });
    }
    if (a) {
      return a;
    }
    /**
     * @param {!Function} s
     * @return {undefined}
     */
    MersenneTwister.prototype.vb = function(s) {
      if (null == this.N) {
        /** @type {!Array} */
        this.N = [];
        var composerNoCc = this;
        this.wb(function() {
          composerNoCc.cc();
        });
      }
      this.N.push(s);
    };
    var m = n.setTimeout;
    /**
     * @param {!Function} removeBlock
     * @return {undefined}
     */
    MersenneTwister.prototype.wb = function(removeBlock) {
      m(removeBlock, 0);
    };
    /**
     * @return {undefined}
     */
    MersenneTwister.prototype.cc = function() {
      for (; this.N && this.N.length;) {
        var n = this.N;
        /** @type {!Array} */
        this.N = [];
        /** @type {number} */
        var s = 0;
        for (; s < n.length; ++s) {
          var i = n[s];
          /** @type {null} */
          n[s] = null;
          try {
            i();
          } catch (clojIsReversed) {
            this.Zb(clojIsReversed);
          }
        }
      }
      /** @type {null} */
      this.N = null;
    };
    /**
     * @param {?} isSlidingUp
     * @return {undefined}
     */
    MersenneTwister.prototype.Zb = function(isSlidingUp) {
      this.wb(function() {
        throw isSlidingUp;
      });
    };
    /**
     * @param {?} executor
     * @return {undefined}
     */
    var Promise = function(executor) {
      /** @type {number} */
      this.Aa = 0;
      this.la = void 0;
      /** @type {!Array} */
      this.ha = [];
      var future = this.Xa();
      try {
        executor(future.resolve, future.reject);
      } catch (reasons) {
        future.reject(reasons);
      }
    };
    /**
     * @return {?}
     */
    Promise.prototype.Xa = function() {
      /**
       * @param {!Function} m
       * @return {?}
       */
      function load(m) {
        return function(_mustDisplay) {
          if (!l) {
            /** @type {boolean} */
            l = true;
            m.call(h, _mustDisplay);
          }
        };
      }
      var h = this;
      /** @type {boolean} */
      var l = false;
      return {
        resolve : load(this.rc),
        reject : load(this.kb)
      };
    };
    /**
     * @param {?} val
     * @return {undefined}
     */
    Promise.prototype.rc = function(val) {
      if (val === this) {
        this.kb(new TypeError("A Promise cannot resolve to itself"));
      } else {
        if (val instanceof Promise) {
          this.tc(val);
        } else {
          a: {
            switch(typeof val) {
              case "object":
                /** @type {boolean} */
                var change = null != val;
                break a;
              case "function":
                /** @type {boolean} */
                change = true;
                break a;
              default:
                /** @type {boolean} */
                change = false;
            }
          }
          if (change) {
            this.qc(val);
          } else {
            this.Cb(val);
          }
        }
      }
    };
    /**
     * @param {?} value
     * @return {undefined}
     */
    Promise.prototype.qc = function(value) {
      var then = void 0;
      try {
        then = value.then;
      } catch (hashId) {
        this.kb(hashId);
        return;
      }
      if ("function" == typeof then) {
        this.uc(then, value);
      } else {
        this.Cb(value);
      }
    };
    /**
     * @param {!Object} hashId
     * @return {undefined}
     */
    Promise.prototype.kb = function(hashId) {
      this.Nb(2, hashId);
    };
    /**
     * @param {boolean} obj
     * @return {undefined}
     */
    Promise.prototype.Cb = function(obj) {
      this.Nb(1, obj);
    };
    /**
     * @param {number} g
     * @param {string} id
     * @return {undefined}
     */
    Promise.prototype.Nb = function(g, id) {
      if (0 != this.Aa) {
        throw Error("Cannot settle(" + g + ", " + id + "): Promise already settled in state" + this.Aa);
      }
      /** @type {number} */
      this.Aa = g;
      /** @type {string} */
      this.la = id;
      this.dc();
    };
    /**
     * @return {undefined}
     */
    Promise.prototype.dc = function() {
      if (null != this.ha) {
        /** @type {number} */
        var i = 0;
        for (; i < this.ha.length; ++i) {
          verts.vb(this.ha[i]);
        }
        /** @type {null} */
        this.ha = null;
      }
    };
    var verts = new MersenneTwister;
    /**
     * @param {?} source
     * @return {undefined}
     */
    Promise.prototype.tc = function(source) {
      var target = this.Xa();
      source.Ia(target.resolve, target.reject);
    };
    /**
     * @param {!Function} then
     * @param {?} value
     * @return {undefined}
     */
    Promise.prototype.uc = function(then, value) {
      var deferred = this.Xa();
      try {
        then.call(value, deferred.resolve, deferred.reject);
      } catch (exception) {
        deferred.reject(exception);
      }
    };
    /**
     * @param {!Function} result
     * @param {!Function} callback
     * @return {?}
     */
    Promise.prototype.then = function(result, callback) {
      /**
       * @param {!Function} fn
       * @param {(!Function|boolean)} callback
       * @return {?}
       */
      function fn(fn, callback) {
        return "function" == typeof fn ? function(left) {
          try {
            dispatch(fn(left));
          } catch (momentify) {
            map(momentify);
          }
        } : callback;
      }
      var dispatch;
      var map;
      var thenPromise = new Promise(function(state, pageMaps) {
        dispatch = state;
        map = pageMaps;
      });
      this.Ia(fn(result, dispatch), fn(callback, map));
      return thenPromise;
    };
    /**
     * @param {!Function} onFail
     * @return {?}
     */
    Promise.prototype["catch"] = function(onFail) {
      return this.then(void 0, onFail);
    };
    /**
     * @param {?} sleep
     * @param {?} events
     * @return {undefined}
     */
    Promise.prototype.Ia = function(sleep, events) {
      /**
       * @return {undefined}
       */
      function r() {
        switch(options.Aa) {
          case 1:
            sleep(options.la);
            break;
          case 2:
            events(options.la);
            break;
          default:
            throw Error("Unexpected state: " + options.Aa);
        }
      }
      var options = this;
      if (null == this.ha) {
        verts.vb(r);
      } else {
        this.ha.push(r);
      }
    };
    /** @type {function(string): ?} */
    Promise.resolve = resolve;
    /**
     * @param {!Object} reason
     * @return {?}
     */
    Promise.reject = function(reason) {
      return new Promise(function(canCreateDiscussions, reject$2) {
        reject$2(reason);
      });
    };
    /**
     * @param {!Array} promises
     * @return {?}
     */
    Promise.race = function(promises) {
      return new Promise(function(sleep, hideEvents) {
        var p = Q(promises);
        var result = p.next();
        for (; !result.done; result = p.next()) {
          resolve(result.value).Ia(sleep, hideEvents);
        }
      });
    };
    /**
     * @param {!Object} callback
     * @return {?}
     */
    Promise.all = function(callback) {
      var stop = Q(callback);
      var e = stop.next();
      return e.done ? resolve([]) : new Promise(function(resolve, hideEvents) {
        /**
         * @param {number} i
         * @return {?}
         */
        function resolver(i) {
          return function(undefined) {
            deps[i] = undefined;
            D--;
            if (0 == D) {
              resolve(deps);
            }
          };
        }
        /** @type {!Array} */
        var deps = [];
        /** @type {number} */
        var D = 0;
        do {
          deps.push(void 0);
          D++;
          resolve(e.value).Ia(resolver(deps.length - 1), hideEvents);
          e = stop.next();
        } while (!e.done);
      });
    };
    return Promise;
  });
  /** @type {!Function} */
  var isCurrentType = "function" == typeof Object.assign ? Object.assign : function(c, properties) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      var data = arguments[i];
      if (data) {
        var i;
        for (i in data) {
          if (Object.prototype.hasOwnProperty.call(data, i)) {
            c[i] = data[i];
          }
        }
      }
    }
    return c;
  };
  require("Object.assign", function(isPrevType) {
    return isPrevType || isCurrentType;
  });
  var target = this || self;
  /**
   * @param {string} fields
   * @param {!Array} node
   * @return {undefined}
   */
  var use = function(fields, node) {
    fields = fields.split(".");
    /** @type {!Window} */
    var obj = window || target;
    if (!(fields[0] in obj || "undefined" == typeof obj.execScript)) {
      obj.execScript("var " + fields[0]);
    }
    var i;
    for (; fields.length && (i = fields.shift());) {
      if (fields.length || void 0 === node) {
        obj = obj[i] && obj[i] !== Object.prototype[i] ? obj[i] : obj[i] = {};
      } else {
        /** @type {!Array} */
        obj[i] = node;
      }
    }
  };
  /**
   * @return {undefined}
   */
  var c = function() {
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var typeOf = function(value) {
    /** @type {string} */
    var s = typeof value;
    if ("object" == s) {
      if (value) {
        if (value instanceof Array) {
          return "array";
        }
        if (value instanceof Object) {
          return s;
        }
        /** @type {string} */
        var oldCondition = Object.prototype.toString.call(value);
        if ("[object Window]" == oldCondition) {
          return "object";
        }
        if ("[object Array]" == oldCondition || "number" == typeof value.length && "undefined" != typeof value.splice && "undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("splice")) {
          return "array";
        }
        if ("[object Function]" == oldCondition || "undefined" != typeof value.call && "undefined" != typeof value.propertyIsEnumerable && !value.propertyIsEnumerable("call")) {
          return "function";
        }
      } else {
        return "null";
      }
    } else {
      if ("function" == s && "undefined" == typeof value.call) {
        return "object";
      }
    }
    return s;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  var isObject = function(value) {
    return "array" == typeOf(value);
  };
  /**
   * @param {!Object} val
   * @return {?}
   */
  var isArray = function(val) {
    var type = typeOf(val);
    return "array" == type || "object" == type && "number" == typeof val.length;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  var isFunction = function(value) {
    /** @type {string} */
    var type = typeof value;
    return "object" == type && null != value || "function" == type;
  };
  /**
   * @param {!Function} g
   * @param {?} b
   * @param {!Object} a
   * @return {?}
   */
  var makeColorMaterial = function(g, b, a) {
    return g.call.apply(g.bind, arguments);
  };
  /**
   * @param {!Function} f
   * @param {?} container
   * @param {!Object} done
   * @return {?}
   */
  var run = function(f, container, done) {
    if (!f) {
      throw Error();
    }
    if (2 < arguments.length) {
      /** @type {!Array<?>} */
      var cmd_args = Array.prototype.slice.call(arguments, 2);
      return function() {
        /** @type {!Array<?>} */
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, cmd_args);
        return f.apply(container, e);
      };
    }
    return function() {
      return f.apply(container, arguments);
    };
  };
  /**
   * @param {?} auth
   * @param {?} fn
   * @param {!Object} proxy
   * @return {?}
   */
  var proxy = function(auth, fn, proxy) {
    /** @type {function(!Function, ?, !Object): ?} */
    proxy = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? makeColorMaterial : run;
    return proxy.apply(null, arguments);
  };
  /** @type {function(): number} */
  var hasOwnProperty = Date.now || function() {
    return +new Date;
  };
  /**
   * @param {!Function} obj
   * @param {!Function} fn
   * @return {undefined}
   */
  var extend = function(obj, fn) {
    /**
     * @return {undefined}
     */
    function f() {
    }
    f.prototype = fn.prototype;
    obj.Ta = fn.prototype;
    obj.prototype = new f;
    /** @type {!Function} */
    obj.prototype.constructor = obj;
  };
  /**
   * @param {?} message
   * @return {undefined}
   */
  var err = function(message) {
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, err);
    } else {
      /** @type {string} */
      var stack = Error().stack;
      if (stack) {
        /** @type {string} */
        this.stack = stack;
      }
    }
    if (message) {
      /** @type {string} */
      this.message = String(message);
    }
  };
  extend(err, Error);
  /** @type {string} */
  err.prototype.name = "CustomError";
  /**
   * @param {string} parts
   * @param {!NodeList} list
   * @return {undefined}
   */
  var Path = function(parts, list) {
    parts = parts.split("%s");
    /** @type {string} */
    var path = "";
    /** @type {number} */
    var i = parts.length - 1;
    /** @type {number} */
    var j = 0;
    for (; j < i; j++) {
      /** @type {string} */
      path = path + (parts[j] + (j < list.length ? list[j] : "%s"));
    }
    err.call(this, path + parts[i]);
  };
  extend(Path, err);
  /** @type {string} */
  Path.prototype.name = "AssertionError";
  /**
   * @param {string} name
   * @param {!Object} thisArg
   * @param {string} func
   * @param {number} k
   * @return {undefined}
   */
  var createWrapper = function(name, thisArg, func, k) {
    /** @type {string} */
    var string = "Assertion failed";
    if (func) {
      /** @type {string} */
      string = string + (": " + func);
      /** @type {number} */
      var methodName = k;
    } else {
      if (name) {
        /** @type {string} */
        string = string + (": " + name);
        /** @type {!Object} */
        methodName = thisArg;
      }
    }
    throw new Path("" + string, methodName || []);
  };
  /**
   * @param {?} value
   * @param {string} handler
   * @param {!Object} type
   * @return {?}
   */
  var expect = function(value, handler, type) {
    if (!value) {
      createWrapper("", null, handler, Array.prototype.slice.call(arguments, 2));
    }
    return value;
  };
  /**
   * @param {string} after
   * @param {string} arg1
   * @return {?}
   */
  var set = function(after, arg1) {
    throw new Path("Failure" + (after ? ": " + after : ""), Array.prototype.slice.call(arguments, 1));
  };
  /**
   * @param {?} id
   * @param {string} object
   * @param {?} callback
   * @return {?}
   */
  var observe = function(id, object, callback) {
    if ("number" !== typeof id) {
      createWrapper("Expected number but got %s: %s.", [typeOf(id), id], object, Array.prototype.slice.call(arguments, 2));
    }
    return id;
  };
  /**
   * @param {?} method
   * @param {string} thisArg
   * @param {?} context
   * @return {undefined}
   */
  var dispatch = function(method, thisArg, context) {
    if ("string" !== typeof method) {
      createWrapper("Expected string but got %s: %s.", [typeOf(method), method], thisArg, Array.prototype.slice.call(arguments, 2));
    }
  };
  /**
   * @param {(Object|string)} params
   * @param {string} context
   * @param {?} modulator
   * @return {undefined}
   */
  var wrap = function(params, context, modulator) {
    if (!isFunction(params)) {
      createWrapper("Expected object but got %s: %s.", [typeOf(params), params], context, Array.prototype.slice.call(arguments, 2));
    }
  };
  /**
   * @param {?} name
   * @param {string} value
   * @return {undefined}
   */
  var item = function(name, value) {
    this.pb = name === fill_extrusion_color && value || "";
    this.Tb = CornerstoneToolsMouseDrag;
  };
  /** @type {boolean} */
  item.prototype.S = true;
  /**
   * @return {?}
   */
  item.prototype.R = function() {
    return this.pb;
  };
  /**
   * @return {?}
   */
  item.prototype.toString = function() {
    return "Const{" + this.pb + "}";
  };
  /**
   * @param {string} e
   * @return {?}
   */
  var push = function(e) {
    if (e instanceof item && e.constructor === item && e.Tb === CornerstoneToolsMouseDrag) {
      return e.pb;
    }
    set("expected object of type Const, got '" + e + "'");
    return "type_error:Const";
  };
  /**
   * @param {string} property
   * @return {?}
   */
  var $ = function(property) {
    return new item(fill_extrusion_color, property);
  };
  var CornerstoneToolsMouseDrag = {};
  var fill_extrusion_color = {};
  var supportOperators = {
    zc : "CANARY",
    Gc : "LOCAL",
    Kc : "PREPROD",
    Lc : "PRODUCTION",
    Mc : "SANDBOX",
    Nc : "TEST",
    Oc : "TIN"
  };
  var promise = {
    Ac : "CARD",
    Pc : "TOKENIZED_CARD",
    Rc : "UPI"
  };
  var links = {
    Bc : "CRYPTOGRAM_3DS",
    Jc : "PAN_ONLY"
  };
  var value = {
    Dc : "ESTIMATED",
    Ec : "FINAL",
    Ic : "NOT_CURRENTLY_KNOWN"
  };
  var details = {
    SHORT : "short",
    Hc : "long"
  };
  var tables = {
    Cc : "default",
    yc : "black",
    Sc : "white"
  };
  var locales = {
    en : 152,
    ar : 189,
    bg : 163,
    ca : 182,
    cs : 192,
    da : 154,
    de : 183,
    el : 178,
    es : 183,
    et : 147,
    fi : 148,
    fr : 183,
    hr : 157,
    id : 186,
    it : 182,
    ja : 148,
    ko : 137,
    ms : 186,
    nl : 167,
    no : 158,
    pl : 182,
    pt : 193,
    ru : 206,
    sk : 157,
    sl : 211,
    sr : 146,
    sv : 154,
    th : 146,
    tr : 161,
    uk : 207,
    zh : 156
  };
  var $realtime = $('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #d9d9d9; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_grey600_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #5F6368">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>');
  var $gBCRBottom = $('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" direction="ltr" height="36px" width="130px"><style>@import url(//fonts.googleapis.com/css?family=Google+Sans:500)</style><line x1="2" y1="10.5" x2="2" y2="29.5" style="stroke: #5F6368; stroke-width:2"></line><image x="11" y="6" width="37.5" height="29" preserveAspectRatio="none" xlink:href="https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png"></image><text x="52" y="25.5" class="small" style="font: 15px \'Google Sans\', sans-serif; fill: #FFFFFF">\u2022\u2022\u2022\u2022\u2022\u2022</text></svg>');
  /**
   * @param {string} text
   * @return {undefined}
   */
  var text = function(text) {
    /** @type {!Element} */
    var style = document.createElement("style");
    /** @type {string} */
    style.type = "text/css";
    /** @type {string} */
    style.textContent = text;
    document.head.appendChild(style);
  };
  /** @type {!Array<string>} */
  var tmp2 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  /**
   * @param {string} callback
   * @return {?}
   */
  var getDevice = function(callback) {
    /** @type {!Array} */
    var ret = Array(36);
    /** @type {number} */
    var tema = 0;
    var andTmp;
    /** @type {number} */
    var i = 0;
    for (; 36 > i; i++) {
      if (8 == i || 13 == i || 18 == i || 23 == i) {
        /** @type {string} */
        ret[i] = "-";
      } else {
        if (14 == i) {
          /** @type {string} */
          ret[i] = "4";
        } else {
          if (2 >= tema) {
            /** @type {number} */
            tema = 33554432 + 16777216 * Math.random() | 0;
          }
          /** @type {number} */
          andTmp = tema & 15;
          /** @type {number} */
          tema = tema >> 4;
          /** @type {string} */
          ret[i] = tmp2[19 == i ? andTmp & 3 | 8 : andTmp];
        }
      }
    }
    return ret.join("") + "." + callback;
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var insert = function(data) {
    /** @type {number} */
    var i = 1;
    for (; i < arguments.length; i++) {
      data = assign(data, arguments[i]);
    }
    return data;
  };
  /**
   * @return {?}
   */
  var createFeed = function() {
    /** @type {string} */
    var param_hash = scriptDomain;
    /** @type {number} */
    var a = 0;
    var i;
    if (0 == param_hash.length) {
      return a;
    }
    /** @type {number} */
    i = 0;
    for (; i < param_hash.length; i++) {
      /** @type {number} */
      var b = param_hash.charCodeAt(i);
      /** @type {number} */
      a = (a << 5) - a + b;
      /** @type {number} */
      a = a & a;
    }
    return a;
  };
  /**
   * @param {!Object} result
   * @return {undefined}
   */
  var listener = function(result) {
    console.error("DEVELOPER_ERROR in " + result.X + ": " + result.errorMessage);
  };
  /** @type {function(!NodeList, !Object): ?} */
  var normalize = Array.prototype.indexOf ? function(baker, scenes) {
    expect(null != baker.length);
    return Array.prototype.indexOf.call(baker, scenes, void 0);
  } : function(array, value) {
    if ("string" === typeof array) {
      return "string" !== typeof value || 1 != value.length ? -1 : array.indexOf(value, 0);
    }
    /** @type {number} */
    var i = 0;
    for (; i < array.length; i++) {
      if (i in array && array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  /** @type {function(!Object, !Function, ?): undefined} */
  var each = Array.prototype.forEach ? function(oThis, data, scene) {
    expect(null != oThis.length);
    Array.prototype.forEach.call(oThis, data, scene);
  } : function(value, data, obj) {
    var valueLength = value.length;
    var options = "string" === typeof value ? value.split("") : value;
    /** @type {number} */
    var i = 0;
    for (; i < valueLength; i++) {
      if (i in options) {
        data.call(obj, options[i], i, value);
      }
    }
  };
  /** @type {function(!Array, !Function): ?} */
  var filter = Array.prototype.map ? function(date, callee) {
    expect(null != date.length);
    return Array.prototype.map.call(date, callee, void 0);
  } : function(a, data) {
    var len = a.length;
    /** @type {!Array} */
    var ret = Array(len);
    var value = "string" === typeof a ? a.split("") : a;
    /** @type {number} */
    var i = 0;
    for (; i < len; i++) {
      if (i in value) {
        ret[i] = data.call(void 0, value[i], i, a);
      }
    }
    return ret;
  };
  /**
   * @param {!Array} matrix
   * @return {?}
   */
  var merge = function(matrix) {
    return Array.prototype.concat.apply([], arguments);
  };
  /**
   * @param {!NodeList} value
   * @return {?}
   */
  var func = function(value) {
    var _len8 = value.length;
    if (0 < _len8) {
      /** @type {!Array} */
      var storeNames = Array(_len8);
      /** @type {number} */
      var _key8 = 0;
      for (; _key8 < _len8; _key8++) {
        storeNames[_key8] = value[_key8];
      }
      return storeNames;
    }
    return [];
  };
  /** @type {function(string): ?} */
  var escapeHtml = String.prototype.trim ? function(commentToCheck) {
    return commentToCheck.trim();
  } : function(mapCommand) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(mapCommand)[1];
  };
  /** @type {!RegExp} */
  var epRE = /&/g;
  /** @type {!RegExp} */
  var cssMarker = /</g;
  /** @type {!RegExp} */
  var jsMarker = />/g;
  /** @type {!RegExp} */
  var commentRemovalRegex = /"/g;
  /** @type {!RegExp} */
  var reNewLines = /'/g;
  /** @type {!RegExp} */
  var url = /\x00/g;
  /** @type {!RegExp} */
  var JSON_START = /[\x00&<>"']/;
  /**
   * @param {string} token
   * @param {string} str
   * @return {?}
   */
  var contains = function(token, str) {
    return -1 != token.indexOf(str);
  };
  /**
   * @param {number} a
   * @param {number} b
   * @return {?}
   */
  var _rev_compare = function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  var context;
  a: {
    var n = target.navigator;
    if (n) {
      var ua = n.userAgent;
      if (ua) {
        context = ua;
        break a;
      }
    }
    /** @type {string} */
    context = "";
  }
  /**
   * @param {!Object} a
   * @param {!Function} f
   * @return {?}
   */
  var some = function(a, f) {
    var i;
    for (i in a) {
      if (f.call(void 0, a[i], i, a)) {
        return true;
      }
    }
    return false;
  };
  /** @type {!Array<string>} */
  var rootKs = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  /**
   * @param {!Object} options
   * @param {?} data
   * @return {undefined}
   */
  var fire = function(options, data) {
    var k;
    var o;
    /** @type {number} */
    var arg = 1;
    for (; arg < arguments.length; arg++) {
      o = arguments[arg];
      for (k in o) {
        options[k] = o[k];
      }
      /** @type {number} */
      var i = 0;
      for (; i < rootKs.length; i++) {
        /** @type {string} */
        k = rootKs[i];
        if (Object.prototype.hasOwnProperty.call(o, k)) {
          options[k] = o[k];
        }
      }
    }
  };
  /**
   * @param {?} value
   * @return {?}
   */
  var get = function(value) {
    if (isFunction(value)) {
      try {
        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
      } catch (b) {
        return "<object could not be stringified>";
      }
    } else {
      return void 0 === value ? "undefined" : null === value ? "null" : typeof value;
    }
  };
  /**
   * @param {!Object} elem
   * @return {?}
   */
  var getWindow = function(elem) {
    try {
      var doc = elem && elem.ownerDocument;
      var context = doc && (doc.defaultView || doc.parentWindow);
      context = context || target;
      if (context.Element && context.Location) {
        return context;
      }
    } catch (d) {
    }
    return null;
  };
  /**
   * @return {undefined}
   */
  var scope = function() {
    /** @type {string} */
    this.fb = "";
  };
  /** @type {boolean} */
  scope.prototype.S = true;
  /**
   * @return {?}
   */
  scope.prototype.R = function() {
    return this.fb.toString();
  };
  /**
   * @return {?}
   */
  scope.prototype.toString = function() {
    return "SafeScript{" + this.fb + "}";
  };
  /**
   * @param {string} string
   * @return {?}
   */
  scope.prototype.Z = function(string) {
    /** @type {string} */
    this.fb = string;
    return this;
  };
  (new scope).Z("");
  /**
   * @param {?} key
   * @param {!Function} value
   * @return {undefined}
   */
  var string = function(key, value) {
    this.jb = key === engine && value || "";
    this.Ub = upsell_video;
  };
  data = string.prototype;
  /** @type {boolean} */
  data.S = true;
  /**
   * @return {?}
   */
  data.R = function() {
    return this.jb.toString();
  };
  /** @type {boolean} */
  data.$a = true;
  /**
   * @return {?}
   */
  data.ta = function() {
    return 1;
  };
  /**
   * @return {?}
   */
  data.toString = function() {
    return "TrustedResourceUrl{" + this.jb + "}";
  };
  /**
   * @param {string} a
   * @return {?}
   */
  var x = function(a) {
    if (a instanceof string && a.constructor === string && a.Ub === upsell_video) {
      return a.jb;
    }
    set("expected object of type TrustedResourceUrl, got '" + a + "' of type " + typeOf(a));
    return "type_error:TrustedResourceUrl";
  };
  /**
   * @param {string} arg
   * @param {!Object} result
   * @return {?}
   */
  var fetch = function(arg, result) {
    var url = push(arg);
    if (!KnowNameOrSlash.test(url)) {
      throw Error("Invalid TrustedResourceUrl format: " + url);
    }
    arg = url.replace(token, function(e, i) {
      if (!Object.prototype.hasOwnProperty.call(result, i)) {
        throw Error('Found marker, "' + i + '", in format string, "' + url + '", but no valid label mapping found in args: ' + JSON.stringify(result));
      }
      e = result[i];
      return e instanceof item ? push(e) : encodeURIComponent(String(e));
    });
    return new string(engine, arg);
  };
  /** @type {!RegExp} */
  var token = /%{(\w+)}/g;
  /** @type {!RegExp} */
  var KnowNameOrSlash = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  var upsell_video = {};
  var engine = {};
  /**
   * @param {?} index
   * @param {!Function} value
   * @return {undefined}
   */
  var RegExp = function(index, value) {
    this.ib = index === path && value || "";
    this.Qb = USECASE;
  };
  data = RegExp.prototype;
  /** @type {boolean} */
  data.S = true;
  /**
   * @return {?}
   */
  data.R = function() {
    return this.ib.toString();
  };
  /** @type {boolean} */
  data.$a = true;
  /**
   * @return {?}
   */
  data.ta = function() {
    return 1;
  };
  /**
   * @return {?}
   */
  data.toString = function() {
    return "SafeUrl{" + this.ib + "}";
  };
  /**
   * @param {string} node
   * @return {?}
   */
  var keys = function(node) {
    if (node instanceof RegExp && node.constructor === RegExp && node.Qb === USECASE) {
      return node.ib;
    }
    set("expected object of type SafeUrl, got '" + node + "' of type " + typeOf(node));
    return "type_error:SafeUrl";
  };
  /** @type {!RegExp} */
  var trueRE = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  /**
   * @param {!Object} value
   * @return {?}
   */
  var formatValue = function(value) {
    if (value instanceof RegExp) {
      return value;
    }
    value = "object" == typeof value && value.S ? value.R() : String(value);
    if (!expect(trueRE.test(value), "%s does not match the safe URL pattern", value)) {
      /** @type {string} */
      value = "about:invalid#zClosurez";
    }
    return new RegExp(path, value);
  };
  var USECASE = {};
  var path = {};
  /**
   * @return {undefined}
   */
  var actual = function() {
    /** @type {string} */
    this.hb = "";
  };
  /** @type {boolean} */
  actual.prototype.S = true;
  /**
   * @return {?}
   */
  actual.prototype.R = function() {
    return this.hb;
  };
  /**
   * @return {?}
   */
  actual.prototype.toString = function() {
    return "SafeStyle{" + this.hb + "}";
  };
  /**
   * @param {string} string
   * @return {?}
   */
  actual.prototype.Z = function(string) {
    /** @type {string} */
    this.hb = string;
    return this;
  };
  (new actual).Z("");
  /**
   * @return {undefined}
   */
  var b = function() {
    /** @type {string} */
    this.gb = "";
  };
  /** @type {boolean} */
  b.prototype.S = true;
  /**
   * @return {?}
   */
  b.prototype.R = function() {
    return this.gb;
  };
  /**
   * @return {?}
   */
  b.prototype.toString = function() {
    return "SafeStyleSheet{" + this.gb + "}";
  };
  /**
   * @param {string} string
   * @return {?}
   */
  b.prototype.Z = function(string) {
    /** @type {string} */
    this.gb = string;
    return this;
  };
  (new b).Z("");
  /**
   * @return {undefined}
   */
  var Promise = function() {
    /** @type {string} */
    this.Pa = "";
    this.Pb = EtherTransfer;
    /** @type {null} */
    this.zb = null;
  };
  data = Promise.prototype;
  /** @type {boolean} */
  data.$a = true;
  /**
   * @return {?}
   */
  data.ta = function() {
    return this.zb;
  };
  /** @type {boolean} */
  data.S = true;
  /**
   * @return {?}
   */
  data.R = function() {
    return this.Pa.toString();
  };
  /**
   * @return {?}
   */
  data.toString = function() {
    return "SafeHtml{" + this.Pa + "}";
  };
  /**
   * @param {string} value
   * @return {?}
   */
  var template = function(value) {
    if (value instanceof Promise && value.constructor === Promise && value.Pb === EtherTransfer) {
      return value.Pa;
    }
    set("expected object of type SafeHtml, got '" + value + "' of type " + typeOf(value));
    return "type_error:SafeHtml";
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var process = function(data) {
    if (data instanceof Promise) {
      return data;
    }
    /** @type {boolean} */
    var error = "object" == typeof data;
    /** @type {null} */
    var simple = null;
    if (error && data.$a) {
      simple = data.ta();
    }
    data = error && data.S ? data.R() : String(data);
    if (JSON_START.test(data)) {
      if (-1 != data.indexOf("&")) {
        data = data.replace(epRE, "&amp;");
      }
      if (-1 != data.indexOf("<")) {
        data = data.replace(cssMarker, "&lt;");
      }
      if (-1 != data.indexOf(">")) {
        data = data.replace(jsMarker, "&gt;");
      }
      if (-1 != data.indexOf('"')) {
        data = data.replace(commentRemovalRegex, "&quot;");
      }
      if (-1 != data.indexOf("'")) {
        data = data.replace(reNewLines, "&#39;");
      }
      if (-1 != data.indexOf("\x00")) {
        data = data.replace(url, "&#0;");
      }
    }
    return stringify(data, simple);
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  var join = function(value) {
    var data = process(json);
    var key = data.ta();
    /** @type {!Array} */
    var drilldownLevelLabels = [];
    /**
     * @param {string} value
     * @return {undefined}
     */
    var callback = function(value) {
      if (isObject(value)) {
        each(value, callback);
      } else {
        value = process(value);
        drilldownLevelLabels.push(template(value).toString());
        value = value.ta();
        if (0 == key) {
          /** @type {string} */
          key = value;
        } else {
          if (0 != value && key != value) {
            /** @type {null} */
            key = null;
          }
        }
      }
    };
    each(value, callback);
    return stringify(drilldownLevelLabels.join(template(data).toString()), key);
  };
  /**
   * @param {?} other
   * @return {?}
   */
  var hash = function(other) {
    return join(Array.prototype.slice.call(arguments));
  };
  var EtherTransfer = {};
  /**
   * @param {string} event
   * @param {?} selector
   * @return {?}
   */
  var stringify = function(event, selector) {
    return (new Promise).Z(event, selector);
  };
  /**
   * @param {string} selector
   * @param {?} input
   * @return {?}
   */
  Promise.prototype.Z = function(selector, input) {
    /** @type {string} */
    this.Pa = selector;
    this.zb = input;
    return this;
  };
  stringify("<!DOCTYPE html>", 0);
  var json = stringify("", 0);
  var html = stringify("<br>", 0);
  var ignoreTags = {
    MATH : true,
    SCRIPT : true,
    STYLE : true,
    SVG : true,
    TEMPLATE : true
  };
  var _matchingValues = function(require) {
    /** @type {boolean} */
    var b = false;
    var HeadlessApi;
    return function() {
      if (!b) {
        HeadlessApi = require();
        /** @type {boolean} */
        b = true;
      }
      return HeadlessApi;
    };
  }(function() {
    if ("undefined" === typeof document) {
      return false;
    }
    /** @type {!Element} */
    var div = document.createElement("div");
    /** @type {!Element} */
    var b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    div.appendChild(b);
    if (!div.firstChild) {
      return false;
    }
    /** @type {(Node|null)} */
    b = div.firstChild.firstChild;
    div.innerHTML = template(json);
    return !b.parentElement;
  });
  /**
   * @param {!HTMLElement} a
   * @param {string} user
   * @return {undefined}
   */
  var resolve = function(a, user) {
    if (ignoreTags[a.tagName.toUpperCase()]) {
      throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a.tagName + ".");
    }
    if (_matchingValues()) {
      for (; a.lastChild;) {
        a.removeChild(a.lastChild);
      }
    }
    a.innerHTML = template(user);
  };
  /**
   * @param {?} element
   * @param {string} d
   * @return {undefined}
   */
  var reset = function(element, d) {
    var window = getWindow(element);
    if (window && "undefined" != typeof window.HTMLIFrameElement) {
      if (!(element && (element instanceof window.HTMLIFrameElement || !(element instanceof window.Location || element instanceof window.Element)))) {
        set("Argument is not a %s (or a non-Element, non-Location mock); got: %s", "HTMLIFrameElement", get(element));
      }
    }
    element.src = x(d).toString();
  };
  /**
   * @param {string} v
   * @param {(Object|string)} source
   * @param {string} data
   * @param {!Function} value
   * @return {?}
   */
  var reduce = function(v, source, data, value) {
    v = v instanceof RegExp ? v : formatValue(v);
    return (source || target).open(keys(v), data ? push(data) : "", value, void 0);
  };
  /**
   * @return {?}
   */
  var toUpperCase = function() {
    return "transition".replace(/\-([a-z])/g, function(a, shortMonthName) {
      return shortMonthName.toUpperCase();
    });
  };
  /**
   * @param {string} elem
   * @return {?}
   */
  var pop = function(elem) {
    return elem.replace(/(^|[\s]+)([a-z])/g, function(b, canCreateDiscussions, shortMonthName) {
      return canCreateDiscussions + shortMonthName.toUpperCase();
    });
  };
  /**
   * @param {?} data
   * @return {?}
   */
  var decode = function(data) {
    decode[" "](data);
    return data;
  };
  /** @type {function(): undefined} */
  decode[" "] = c;
  var isLeft = contains(context, "Opera");
  var node = contains(context, "Trident") || contains(context, "MSIE");
  var isToggle = contains(context, "Edge");
  var isFirefox = contains(context, "Gecko") && !(contains(context.toLowerCase(), "webkit") && !contains(context, "Edge")) && !(contains(context, "Trident") || contains(context, "MSIE")) && !contains(context, "Edge");
  var pnstyle = contains(context.toLowerCase(), "webkit") && !contains(context, "Edge");
  /**
   * @return {?}
   */
  var factory = function() {
    var doc = target.document;
    return doc ? doc.documentMode : void 0;
  };
  var s;
  a: {
    /** @type {string} */
    var key = "";
    var base = function() {
      var html = context;
      if (isFirefox) {
        return /rv:([^\);]+)(\)|;)/.exec(html);
      }
      if (isToggle) {
        return /Edge\/([\d\.]+)/.exec(html);
      }
      if (node) {
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(html);
      }
      if (pnstyle) {
        return /WebKit\/(\S+)/.exec(html);
      }
      if (isLeft) {
        return /(?:Version)[ \/]?(\S+)/.exec(html);
      }
    }();
    if (base) {
      key = base ? base[1] : "";
    }
    if (node) {
      var value = factory();
      if (null != value && value > parseFloat(key)) {
        /** @type {string} */
        s = String(value);
        break a;
      }
    }
    s = key;
  }
  var expected = s;
  var $children = {};
  var additionalDigits;
  additionalDigits = target.document && node ? factory() : void 0;
  /**
   * @param {?} s
   * @return {?}
   */
  var traverse = function(s) {
    var result = filter(arguments, push).join("");
    var d = $("Constant HTML string, that gets turned into a Node later, so it will be automatically balanced.");
    dispatch(push(d), "must provide justification");
    expect(!/^[\s\xa0]*$/.test(push(d)), "must provide non-empty justification");
    result = stringify(result, null);
    /** @type {!HTMLDocument} */
    d = document;
    /** @type {string} */
    var element = "DIV";
    if ("application/xhtml+xml" === d.contentType) {
      /** @type {string} */
      element = element.toLowerCase();
    }
    /** @type {!Element} */
    element = d.createElement(element);
    if (node) {
      resolve(element, hash(html, result));
      element.removeChild(expect(element.firstChild));
    } else {
      resolve(element, result);
    }
    if (1 == element.childNodes.length) {
      /** @type {!Node} */
      result = element.removeChild(expect(element.firstChild));
    } else {
      /** @type {!DocumentFragment} */
      result = d.createDocumentFragment();
      for (; element.firstChild;) {
        result.appendChild(element.firstChild);
      }
    }
    return result;
  };
  var Zb = "StopIteration" in target ? target.StopIteration : {
    message : "StopIteration",
    stack : ""
  };
  /**
   * @return {undefined}
   */
  var EventEmitter = function() {
  };
  /**
   * @return {?}
   */
  EventEmitter.prototype.next = function() {
    throw Zb;
  };
  /**
   * @return {?}
   */
  EventEmitter.prototype.Wb = function() {
    return this;
  };
  /**
   * @param {!Object} value
   * @param {?} options
   * @return {undefined}
   */
  var Set = function(value, options) {
    this.C = {};
    /** @type {!Array} */
    this.h = [];
    /** @type {number} */
    this.Da = this.f = 0;
    /** @type {number} */
    var argl = arguments.length;
    if (1 < argl) {
      if (argl % 2) {
        throw Error("Uneven number of arguments");
      }
      /** @type {number} */
      var i = 0;
      for (; i < argl; i = i + 2) {
        this.set(arguments[i], arguments[i + 1]);
      }
    } else {
      if (value) {
        this.addAll(value);
      }
    }
  };
  data = Set.prototype;
  /**
   * @return {?}
   */
  data.G = function() {
    g(this);
    /** @type {!Array} */
    var tmp = [];
    /** @type {number} */
    var id = 0;
    for (; id < this.h.length; id++) {
      tmp.push(this.C[this.h[id]]);
    }
    return tmp;
  };
  /**
   * @return {?}
   */
  data.P = function() {
    g(this);
    return this.h.concat();
  };
  /**
   * @param {string} a
   * @return {?}
   */
  data.oa = function(a) {
    return assert(this.C, a);
  };
  /**
   * @return {undefined}
   */
  data.clear = function() {
    this.C = {};
    /** @type {number} */
    this.Da = this.f = this.h.length = 0;
  };
  /**
   * @param {string} i
   * @return {?}
   */
  data.remove = function(i) {
    return assert(this.C, i) ? (delete this.C[i], this.f--, this.Da++, this.h.length > 2 * this.f && g(this), true) : false;
  };
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  var g = function(node) {
    if (node.f != node.h.length) {
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var pos = 0;
      for (; i < node.h.length;) {
        var d = node.h[i];
        if (assert(node.C, d)) {
          node.h[pos++] = d;
        }
        i++;
      }
      /** @type {number} */
      node.h.length = pos;
    }
    if (node.f != node.h.length) {
      var e = {};
      /** @type {number} */
      pos = i = 0;
      for (; i < node.h.length;) {
        d = node.h[i];
        if (!assert(e, d)) {
          node.h[pos++] = d;
          /** @type {number} */
          e[d] = 1;
        }
        i++;
      }
      /** @type {number} */
      node.h.length = pos;
    }
  };
  data = Set.prototype;
  /**
   * @param {string} i
   * @param {?} name
   * @return {?}
   */
  data.get = function(i, name) {
    return assert(this.C, i) ? this.C[i] : name;
  };
  /**
   * @param {string} i
   * @param {!Array} b
   * @return {undefined}
   */
  data.set = function(i, b) {
    if (!assert(this.C, i)) {
      this.f++;
      this.h.push(i);
      this.Da++;
    }
    /** @type {!Array} */
    this.C[i] = b;
  };
  /**
   * @param {!Object} arr
   * @return {undefined}
   */
  data.addAll = function(arr) {
    if (arr instanceof Set) {
      var item = arr.P();
      /** @type {number} */
      var i = 0;
      for (; i < item.length; i++) {
        this.set(item[i], arr.get(item[i]));
      }
    } else {
      for (item in arr) {
        this.set(item, arr[item]);
      }
    }
  };
  /**
   * @param {!Function} a
   * @param {?} obj
   * @return {undefined}
   */
  data.forEach = function(a, obj) {
    var grandchildren = this.P();
    /** @type {number} */
    var cc = 0;
    for (; cc < grandchildren.length; cc++) {
      var j = grandchildren[cc];
      var data = this.get(j);
      a.call(obj, data, j, this);
    }
  };
  /**
   * @return {?}
   */
  data.clone = function() {
    return new Set(this);
  };
  /**
   * @param {?} parent
   * @return {?}
   */
  data.Wb = function(parent) {
    g(this);
    /** @type {number} */
    var patchInd = 0;
    var spread = this.Da;
    var d = this;
    var buttons = new EventEmitter;
    /**
     * @return {?}
     */
    buttons.next = function() {
      if (spread != d.Da) {
        throw Error("The map has changed since the iterator was created");
      }
      if (patchInd >= d.h.length) {
        throw Zb;
      }
      var name = d.h[patchInd++];
      return parent ? name : d.C[name];
    };
    return buttons;
  };
  /**
   * @param {?} g
   * @param {string} b
   * @return {?}
   */
  var assert = function(g, b) {
    return Object.prototype.hasOwnProperty.call(g, b);
  };
  /**
   * @param {!Object} args
   * @return {?}
   */
  var first = function(args) {
    if (args.G && "function" == typeof args.G) {
      return args.G();
    }
    if ("string" === typeof args) {
      return args.split("");
    }
    if (isArray(args)) {
      /** @type {!Array} */
      var array = [];
      var i = args.length;
      /** @type {number} */
      var index = 0;
      for (; index < i; index++) {
        array.push(args[index]);
      }
      return array;
    }
    /** @type {!Array} */
    array = [];
    /** @type {number} */
    i = 0;
    for (index in args) {
      array[i++] = args[index];
    }
    return array;
  };
  /**
   * @param {!Object} obj
   * @param {!Function} f
   * @param {?} ctx
   * @return {undefined}
   */
  var check = function(obj, f, ctx) {
    if (obj.forEach && "function" == typeof obj.forEach) {
      obj.forEach(f, ctx);
    } else {
      if (isArray(obj) || "string" === typeof obj) {
        each(obj, f, ctx);
      } else {
        if (obj.P && "function" == typeof obj.P) {
          var data = obj.P();
        } else {
          if (obj.G && "function" == typeof obj.G) {
            data = void 0;
          } else {
            if (isArray(obj) || "string" === typeof obj) {
              /** @type {!Array} */
              data = [];
              var o = obj.length;
              /** @type {number} */
              var key = 0;
              for (; key < o; key++) {
                data.push(key);
              }
            } else {
              for (key in data = [], o = 0, obj) {
                /** @type {string} */
                data[o++] = key;
              }
            }
          }
        }
        o = first(obj);
        key = o.length;
        /** @type {number} */
        var i = 0;
        for (; i < key; i++) {
          f.call(ctx, o[i], data && data[i], obj);
        }
      }
    }
  };
  /** @type {!RegExp} */
  var content = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  /**
   * @param {string} val
   * @return {?}
   */
  var getLocation = function(val) {
    var a = val.match(content);
    val = a[1];
    var i = a[3];
    a = a[4];
    /** @type {string} */
    var result = "";
    if (val) {
      /** @type {string} */
      result = result + (val + ":");
    }
    if (i) {
      /** @type {string} */
      result = result + "//" + i;
      if (a) {
        /** @type {string} */
        result = result + (":" + a);
      }
    }
    return result;
  };
  /**
   * @param {string} items
   * @param {!Function} callback
   * @return {undefined}
   */
  var walk = function(items, callback) {
    if (items) {
      items = items.split("&");
      /** @type {number} */
      var i = 0;
      for (; i < items.length; i++) {
        var offset = items[i].indexOf("=");
        /** @type {null} */
        var value = null;
        if (0 <= offset) {
          var result = items[i].substring(0, offset);
          value = items[i].substring(offset + 1);
        } else {
          result = items[i];
        }
        callback(result, value ? decodeURIComponent(value.replace(/\+/g, " ")) : "");
      }
    }
  };
  /**
   * @param {!Object} obj
   * @return {undefined}
   */
  var Color = function(obj) {
    /** @type {string} */
    this.J = this.ba = this.U = "";
    /** @type {null} */
    this.b = null;
    /** @type {string} */
    this.F = this.H = "";
    /** @type {boolean} */
    this.u = this.fc = false;
    if (obj instanceof Color) {
      this.u = obj.u;
      map(this, obj.U);
      var h = obj.ba;
      forEach(this);
      this.ba = h;
      h = obj.J;
      forEach(this);
      this.J = h;
      val(this, obj.b);
      h = obj.H;
      forEach(this);
      this.H = h;
      split(this, obj.w.clone());
      obj = obj.F;
      forEach(this);
      /** @type {!Object} */
      this.F = obj;
    } else {
      if (obj && (h = String(obj).match(content))) {
        /** @type {boolean} */
        this.u = false;
        map(this, h[1] || "", true);
        /** @type {string} */
        obj = h[2] || "";
        forEach(this);
        this.ba = _(obj);
        /** @type {string} */
        obj = h[3] || "";
        forEach(this);
        this.J = _(obj, true);
        val(this, h[4]);
        /** @type {string} */
        obj = h[5] || "";
        forEach(this);
        this.H = _(obj, true);
        split(this, h[6] || "", true);
        /** @type {string} */
        obj = h[7] || "";
        forEach(this);
        this.F = _(obj);
      } else {
        /** @type {boolean} */
        this.u = false;
        this.w = new Function(null, this.u);
      }
    }
  };
  /**
   * @return {?}
   */
  Color.prototype.toString = function() {
    /** @type {!Array} */
    var t = [];
    var url = this.U;
    if (url) {
      t.push(trim(url, opts, true), ":");
    }
    var a = this.J;
    if (a || "file" == url) {
      t.push("//");
      if (url = this.ba) {
        t.push(trim(url, opts, true), "@");
      }
      t.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
      a = this.b;
      if (null != a) {
        t.push(":", String(a));
      }
    }
    if (a = this.H) {
      if (this.J && "/" != a.charAt(0)) {
        t.push("/");
      }
      t.push(trim(a, "/" == a.charAt(0) ? bufVal : _digitExpr, true));
    }
    if (a = this.w.toString()) {
      t.push("?", a);
    }
    if (a = this.F) {
      t.push("#", trim(a, name));
    }
    return t.join("");
  };
  /**
   * @param {!Object} params
   * @return {?}
   */
  Color.prototype.resolve = function(params) {
    var state = this.clone();
    /** @type {boolean} */
    var D = !!params.U;
    if (D) {
      map(state, params.U);
    } else {
      /** @type {boolean} */
      D = !!params.ba;
    }
    if (D) {
      var x = params.ba;
      forEach(state);
      state.ba = x;
    } else {
      /** @type {boolean} */
      D = !!params.J;
    }
    if (D) {
      x = params.J;
      forEach(state);
      state.J = x;
    } else {
      /** @type {boolean} */
      D = null != params.b;
    }
    x = params.H;
    if (D) {
      val(state, params.b);
    } else {
      if (D = !!params.H) {
        if ("/" != x.charAt(0)) {
          if (this.J && !this.H) {
            /** @type {string} */
            x = "/" + x;
          } else {
            var b = state.H.lastIndexOf("/");
            if (-1 != b) {
              x = state.H.substr(0, b + 1) + x;
            }
          }
        }
        b = x;
        if (".." == b || "." == b) {
          /** @type {string} */
          x = "";
        } else {
          if (contains(b, "./") || contains(b, "/.")) {
            /** @type {boolean} */
            x = 0 == b.lastIndexOf("/", 0);
            b = b.split("/");
            /** @type {!Array} */
            var location = [];
            /** @type {number} */
            var i = 0;
            for (; i < b.length;) {
              var value = b[i++];
              if ("." == value) {
                if (x && i == b.length) {
                  location.push("");
                }
              } else {
                if (".." == value) {
                  if (1 < location.length || 1 == location.length && "" != location[0]) {
                    location.pop();
                  }
                  if (x && i == b.length) {
                    location.push("");
                  }
                } else {
                  location.push(value);
                  /** @type {boolean} */
                  x = true;
                }
              }
            }
            /** @type {string} */
            x = location.join("/");
          } else {
            x = b;
          }
        }
      }
    }
    if (D) {
      forEach(state);
      state.H = x;
    } else {
      /** @type {boolean} */
      D = "" !== params.w.toString();
    }
    if (D) {
      split(state, params.w.clone());
    } else {
      /** @type {boolean} */
      D = !!params.F;
    }
    if (D) {
      params = params.F;
      forEach(state);
      /** @type {!Object} */
      state.F = params;
    }
    return state;
  };
  /**
   * @return {?}
   */
  Color.prototype.clone = function() {
    return new Color(this);
  };
  /**
   * @param {!Object} opts
   * @param {string} a
   * @param {boolean} b
   * @return {undefined}
   */
  var map = function(opts, a, b) {
    forEach(opts);
    opts.U = b ? _(a, true) : a;
    if (opts.U) {
      opts.U = opts.U.replace(/:$/, "");
    }
  };
  /**
   * @param {!Object} obj
   * @param {number} val
   * @return {undefined}
   */
  var val = function(obj, val) {
    forEach(obj);
    if (val) {
      /** @type {number} */
      val = Number(val);
      if (isNaN(val) || 0 > val) {
        throw Error("Bad port number " + val);
      }
      /** @type {number} */
      obj.b = val;
    } else {
      /** @type {null} */
      obj.b = null;
    }
  };
  /**
   * @param {!Object} data
   * @param {number} value
   * @param {boolean} initial
   * @return {undefined}
   */
  var split = function(data, value, initial) {
    forEach(data);
    if (value instanceof Function) {
      /** @type {number} */
      data.w = value;
      data.w.nb(data.u);
    } else {
      if (!initial) {
        value = trim(value, option);
      }
      data.w = new Function(value, data.u);
    }
  };
  /**
   * @return {?}
   */
  Color.prototype.getQuery = function() {
    return this.w.toString();
  };
  /**
   * @param {!Window} attributes
   * @param {!Array} options
   * @return {undefined}
   */
  var change = function(attributes, options) {
    forEach(attributes);
    attributes.w.set("buttonColor", options);
  };
  /**
   * @param {string} input
   * @return {?}
   */
  Color.prototype.removeParameter = function(input) {
    forEach(this);
    this.w.remove(input);
    return this;
  };
  /**
   * @param {!Object} o
   * @return {undefined}
   */
  var forEach = function(o) {
    if (o.fc) {
      throw Error("Tried to modify a read-only Uri");
    }
  };
  /**
   * @param {string} u
   * @return {undefined}
   */
  Color.prototype.nb = function(u) {
    /** @type {string} */
    this.u = u;
    if (this.w) {
      this.w.nb(u);
    }
  };
  /**
   * @param {string} a
   * @param {string} b
   * @return {?}
   */
  var _ = function(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  };
  /**
   * @param {string} n
   * @param {!RegExp} s
   * @param {boolean} t
   * @return {?}
   */
  var trim = function(n, s, t) {
    return "string" === typeof n ? (n = encodeURI(n).replace(s, after), t && (n = n.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n) : null;
  };
  /**
   * @param {(number|string)} n
   * @return {?}
   */
  var after = function(n) {
    n = n.charCodeAt(0);
    return "%" + (n >> 4 & 15).toString(16) + (n & 15).toString(16);
  };
  /** @type {!RegExp} */
  var opts = /[#\/\?@]/g;
  /** @type {!RegExp} */
  var _digitExpr = /[#\?:]/g;
  /** @type {!RegExp} */
  var bufVal = /[#\?]/g;
  /** @type {!RegExp} */
  var option = /[#\?@]/g;
  /** @type {!RegExp} */
  var name = /#/g;
  /**
   * @param {string} s
   * @param {?} filter
   * @return {undefined}
   */
  var Function = function(s, filter) {
    /** @type {null} */
    this.f = this.c = null;
    this.s = s || null;
    /** @type {boolean} */
    this.u = !!filter;
  };
  /**
   * @param {!Object} query
   * @return {undefined}
   */
  var test = function(query) {
    if (!query.c) {
      query.c = new Set;
      /** @type {number} */
      query.f = 0;
      if (query.s) {
        walk(query.s, function(commaParam, c) {
          query.add(decodeURIComponent(commaParam.replace(/\+/g, " ")), c);
        });
      }
    }
  };
  data = Function.prototype;
  /**
   * @param {string} i
   * @param {!Object} item
   * @return {?}
   */
  data.add = function(i, item) {
    test(this);
    /** @type {null} */
    this.s = null;
    i = setTimeout(this, i);
    var current = this.c.get(i);
    if (!current) {
      this.c.set(i, current = []);
    }
    current.push(item);
    this.f = observe(this.f) + 1;
    return this;
  };
  /**
   * @param {string} i
   * @return {?}
   */
  data.remove = function(i) {
    test(this);
    i = setTimeout(this, i);
    return this.c.oa(i) ? (this.s = null, this.f = observe(this.f) - this.c.get(i).length, this.c.remove(i)) : false;
  };
  /**
   * @return {undefined}
   */
  data.clear = function() {
    /** @type {null} */
    this.c = this.s = null;
    /** @type {number} */
    this.f = 0;
  };
  /**
   * @param {string} c
   * @return {?}
   */
  data.oa = function(c) {
    test(this);
    c = setTimeout(this, c);
    return this.c.oa(c);
  };
  /**
   * @param {!Function} f
   * @param {?} thisArg
   * @return {undefined}
   */
  data.forEach = function(f, thisArg) {
    test(this);
    this.c.forEach(function(value, i) {
      each(value, function(optionalInit) {
        f.call(thisArg, optionalInit, i, this);
      }, this);
    }, this);
  };
  /**
   * @return {?}
   */
  data.P = function() {
    test(this);
    var effectInstances = this.c.G();
    var b = this.c.P();
    /** @type {!Array} */
    var bulletList = [];
    /** @type {number} */
    var i = 0;
    for (; i < b.length; i++) {
      var e = effectInstances[i];
      /** @type {number} */
      var g = 0;
      for (; g < e.length; g++) {
        bulletList.push(b[i]);
      }
    }
    return bulletList;
  };
  /**
   * @param {string} value
   * @return {?}
   */
  data.G = function(value) {
    test(this);
    /** @type {!Array} */
    var m = [];
    if ("string" === typeof value) {
      if (this.oa(value)) {
        m = merge(m, this.c.get(setTimeout(this, value)));
      }
    } else {
      value = this.c.G();
      /** @type {number} */
      var i = 0;
      for (; i < value.length; i++) {
        m = merge(m, value[i]);
      }
    }
    return m;
  };
  /**
   * @param {string} i
   * @param {!Array} value
   * @return {?}
   */
  data.set = function(i, value) {
    test(this);
    /** @type {null} */
    this.s = null;
    i = setTimeout(this, i);
    if (this.oa(i)) {
      /** @type {number} */
      this.f = observe(this.f) - this.c.get(i).length;
    }
    this.c.set(i, [value]);
    this.f = observe(this.f) + 1;
    return this;
  };
  /**
   * @param {string} a
   * @param {string} cur
   * @return {?}
   */
  data.get = function(a, cur) {
    if (!a) {
      return cur;
    }
    a = this.G(a);
    return 0 < a.length ? String(a[0]) : cur;
  };
  /**
   * @return {?}
   */
  data.toString = function() {
    if (this.s) {
      return this.s;
    }
    if (!this.c) {
      return "";
    }
    /** @type {!Array} */
    var compiledRegExp = [];
    var columns = this.c.P();
    /** @type {number} */
    var j = 0;
    for (; j < columns.length; j++) {
      var values = columns[j];
      /** @type {string} */
      var r = encodeURIComponent(String(values));
      values = this.G(values);
      /** @type {number} */
      var i = 0;
      for (; i < values.length; i++) {
        /** @type {string} */
        var flags = r;
        if ("" !== values[i]) {
          /** @type {string} */
          flags = flags + ("=" + encodeURIComponent(String(values[i])));
        }
        compiledRegExp.push(flags);
      }
    }
    return this.s = compiledRegExp.join("&");
  };
  /**
   * @return {?}
   */
  data.clone = function() {
    var r = new Function;
    r.s = this.s;
    if (this.c) {
      r.c = this.c.clone();
      r.f = this.f;
    }
    return r;
  };
  /**
   * @param {!Object} res
   * @param {string} id
   * @return {?}
   */
  var setTimeout = function(res, id) {
    /** @type {string} */
    id = String(id);
    if (res.u) {
      /** @type {string} */
      id = id.toLowerCase();
    }
    return id;
  };
  /**
   * @param {string} u
   * @return {undefined}
   */
  Function.prototype.nb = function(u) {
    if (u && !this.u) {
      test(this);
      /** @type {null} */
      this.s = null;
      this.c.forEach(function(filelist, className) {
        var value = className.toLowerCase();
        if (className != value) {
          this.remove(className);
          this.remove(value);
          if (0 < filelist.length) {
            /** @type {null} */
            this.s = null;
            this.c.set(setTimeout(this, value), func(filelist));
            this.f = observe(this.f) + filelist.length;
          }
        }
      }, this);
    }
    /** @type {string} */
    this.u = u;
  };
  /**
   * @param {?} extendObj2
   * @return {undefined}
   */
  Function.prototype.extend = function(extendObj2) {
    /** @type {number} */
    var i = 0;
    for (; i < arguments.length; i++) {
      check(arguments[i], function(i, d) {
        this.add(d, i);
      }, this);
    }
  };
  /** @type {boolean} */
  var vc = false;
  /** @type {boolean} */
  var wc = false;
  /** @type {string} */
  var scriptDomain = window.location.hostname;
  var res = window.whitelistedDomainsHashedValueListForGpayButtonWithCardInfo || [];
  /**
   * @return {undefined}
   */
  var Subsection = function() {
    var document = window.document;
    var oRTEDoc = this;
    this.Bb = document;
    this.K = document.createElement("gpay-graypane");
    style(this.K, {
      "z-index" : 2147483647,
      display : "none",
      position : "fixed",
      top : 0,
      right : 0,
      bottom : 0,
      left : 0,
      "background-color" : "rgba(32, 33, 36, .6)"
    });
    /** @type {null} */
    this.Oa = null;
    this.K.addEventListener("click", function() {
      if (oRTEDoc.Oa) {
        try {
          oRTEDoc.Oa.focus();
        } catch (c) {
        }
      }
    });
  };
  /**
   * @param {string} saveCallBack
   * @return {?}
   */
  Subsection.prototype.show = function(saveCallBack) {
    this.Oa = saveCallBack || null;
    this.Bb.body.appendChild(this.K);
    style(this.K, {
      display : "block",
      opacity : 0
    });
    return open(this.K, {
      opacity : 1
    });
  };
  /**
   * @param {?} t
   * @return {undefined}
   */
  var teardown = function(t) {
    /** @type {null} */
    t.Oa = null;
    if (t.K.parentElement) {
      open(t.K, {
        opacity : 0
      }).then(function() {
        style(t.K, {
          display : "none"
        });
        t.Bb.body.removeChild(t.K);
      });
    }
  };
  /**
   * @return {undefined}
   */
  var Sandbox = function() {
    this.xc = el.contentWindow;
  };
  /**
   * @param {!Object} id
   * @param {string} args
   * @return {undefined}
   */
  Sandbox.prototype.postMessage = function(id, args) {
    this.xc.postMessage(id, args);
  };
  /** @type {!Array} */
  var eCfgEl = ["SHIPPING_ADDRESS", "SHIPPING_OPTION"];
  /**
   * @return {?}
   */
  var apply = function() {
    if ("undefined" != typeof google && google.payments.api.PaymentHandlerLaunchPayjs) {
      if (null != window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile/i)) {
        /** @type {boolean} */
        var array = false;
      } else {
        /** @type {(Array<string>|null)} */
        array = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
        /** @type {boolean} */
        array = "PaymentRequest" in window && null != array && 70 <= Number(array[1]) && "Google Inc." == window.navigator.vendor;
      }
    } else {
      /** @type {boolean} */
      array = false;
    }
    return array;
  };
  /**
   * @return {?}
   */
  var parse = function() {
    /** @type {boolean} */
    var endCharset = -1 !== window.navigator.userAgent.indexOf("OPT/");
    /** @type {boolean} */
    var range = -1 !== window.navigator.userAgent.indexOf("SamsungBrowser/");
    if (-1 !== window.navigator.userAgent.indexOf("OPR/") || endCharset || range) {
      return false;
    }
    if (apply()) {
      return true;
    }
    /** @type {(Array<string>|null)} */
    endCharset = window.navigator.userAgent.match(/Android/i);
    /** @type {(Array<string>|null)} */
    range = window.navigator.userAgent.match(/Chrome\/([0-9]+)\./i);
    return null != endCharset && "PaymentRequest" in window && "Google Inc." == window.navigator.vendor && null != range && 59 <= Number(range[1]);
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var equal = function(data) {
    if (2 <= data.apiVersion) {
      var order = sort(data);
      if (order && 1 == order.length && "CRYPTOGRAM_3DS" == order[0]) {
        return true;
      }
    }
    return 1 == data.allowedPaymentMethods.length && "TOKENIZED_CARD" == data.allowedPaymentMethods[0];
  };
  /**
   * @param {!Object} data
   * @param {string} b
   * @return {?}
   */
  var replace = function(data, b) {
    return 2 <= data.apiVersion && (data = sort(data)) && data.includes(b) ? true : false;
  };
  /**
   * @return {?}
   */
  var match = function() {
    /** @type {string} */
    var s = window.location.hostname;
    /** @type {number} */
    var startIndex = s.length - 11;
    return 0 <= startIndex && s.indexOf(".google.com", startIndex) == startIndex || void 0 === window.isSecureContext ? null : window.isSecureContext ? null : "Google Pay APIs should be called in secure context!";
  };
  /**
   * @param {!Object} archiveInfo
   * @return {undefined}
   */
  var niceName = function(archiveInfo) {
    if (archiveInfo.environment && !Object.values(supportOperators).includes(archiveInfo.environment)) {
      throw Error("Parameter environment in PaymentOptions can optionally be set to PRODUCTION, otherwise it defaults to TEST.");
    }
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var clone = function(obj) {
    if (!obj) {
      return "isReadyToPayRequest must be set!";
    }
    if (2 <= obj.apiVersion) {
      if (!("apiVersionMinor" in obj)) {
        return "apiVersionMinor must be set!";
      }
      if (!obj.allowedPaymentMethods || !Array.isArray(obj.allowedPaymentMethods) || 0 == obj.allowedPaymentMethods.length) {
        return "for v2 allowedPaymentMethods must be set to an array containing a list of accepted payment methods";
      }
      /** @type {number} */
      var i = 0;
      for (; i < obj.allowedPaymentMethods.length; i++) {
        var c = obj.allowedPaymentMethods[i];
        if ("CARD" == c.type) {
          if (!c.parameters) {
            return "Field parameters must be setup in each allowedPaymentMethod";
          }
          var existingQueue = c.parameters.allowedCardNetworks;
          if (!existingQueue || !Array.isArray(existingQueue) || 0 == existingQueue.length) {
            return "allowedCardNetworks must be setup in parameters for type CARD";
          }
          c = c.parameters.allowedAuthMethods;
          if (!c || !Array.isArray(c) || 0 == c.length || !c.every(hasVar)) {
            return "allowedAuthMethods must be setup in parameters for type 'CARD'  and must contain 'CRYPTOGRAM_3DS' and/or 'PAN_ONLY'";
          }
        }
      }
    } else {
      if (!obj.allowedPaymentMethods || !Array.isArray(obj.allowedPaymentMethods) || 0 == obj.allowedPaymentMethods.length || !obj.allowedPaymentMethods.every(isValidSize)) {
        return "allowedPaymentMethods must be set to an array containing 'CARD' and/or 'TOKENIZED_CARD'!";
      }
    }
    return null;
  };
  /**
   * @param {?} obj
   * @return {?}
   */
  var isValidSize = function(obj) {
    return Object.values(promise).includes(obj);
  };
  /**
   * @param {string} item
   * @return {?}
   */
  var success = function(item) {
    if (!item) {
      return "paymentDataRequest must be set!";
    }
    if (item.swg) {
      return (item = item.swg) ? item.skuId && item.publicationId ? null : "Both skuId and publicationId must be provided" : "Swg parameters must be provided";
    }
    if (item.transactionInfo) {
      if (item.transactionInfo.currencyCode) {
        if (!item.transactionInfo.totalPriceStatus || !Object.values(value).includes(item.transactionInfo.totalPriceStatus)) {
          return "totalPriceStatus in transactionInfo must be set to one of NOT_CURRENTLY_KNOWN, ESTIMATED or FINAL!";
        }
        if ("NOT_CURRENTLY_KNOWN" !== item.transactionInfo.totalPriceStatus && !item.transactionInfo.totalPrice) {
          return "totalPrice in transactionInfo must be set when totalPriceStatus is ESTIMATED or FINAL!";
        }
      } else {
        return "currencyCode in transactionInfo must be set!";
      }
    } else {
      return "transactionInfo must be set!";
    }
    var value = parseFloat(item);
    if (value) {
      if (!value.parameters) {
        return "parameters must be set in allowedPaymentMethod!";
      }
      value = value.parameters;
      if (value.payeeVpa) {
        if (value.payeeName) {
          if (value.referenceUrl) {
            if (!value.mcc) {
              return "mcc in allowedPaymentMethod parameters must be set!";
            }
            if (!value.transactionReferenceId) {
              return "transactionReferenceId in allowedPaymentMethod parameters must be set!";
            }
          } else {
            return "referenceUrl in allowedPaymentMethod parameters must be set!";
          }
        } else {
          return "payeeName in allowedPaymentMethod parameters must be set!";
        }
      } else {
        return "payeeVpa in allowedPaymentMethod parameters must be set!";
      }
      if ("INR" !== item.transactionInfo.currencyCode) {
        return "currencyCode in transactionInfo must be set to INR!";
      }
      if ("FINAL" !== item.transactionInfo.totalPriceStatus) {
        return "totalPriceStatus in transactionInfo must be set to FINAL!";
      }
      if (!item.transactionInfo.transactionNote) {
        return "transactionNote in transactionInfo must be set!";
      }
    }
    return null;
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var parseFloat = function(data) {
    return !parse() || 2 > data.apiVersion || !data.allowedPaymentMethods ? null : toString(data, "UPI");
  };
  /**
   * @param {string} self
   * @param {?} name
   * @return {?}
   */
  var f = function(self, name) {
    return self.callbackIntents && !name ? "paymentDataCallbacks must be set" : self.callbackIntents.includes("PAYMENT_AUTHORIZATION") !== !!name.onPaymentAuthorized ? "Both PAYMENT_AUTHORIZATION intent and onPaymentAuthorized must be set" : !!eCfgEl.filter(function(newScaleKey) {
      return self.callbackIntents.includes(newScaleKey);
    }).length !== !!name.onPaymentDataChanged ? "onPaymentDataChanged callback must be set if any of " + (eCfgEl + " callback intent is set.") : null;
  };
  var fontsDirectory = {
    Qc : 0,
    Fc : 1,
    sb : 2,
    Rb : 3,
    Sb : 4
  };
  /** @type {null} */
  var el = null;
  /** @type {null} */
  var Sim = null;
  /** @type {null} */
  var max = null;
  /** @type {null} */
  var interestingPoint = null;
  /** @type {number} */
  var existed = hasOwnProperty();
  /** @type {null} */
  var $c = null;
  /** @type {boolean} */
  var ad = false;
  /** @type {boolean} */
  var reverseIsSingle = false;
  /** @type {!Array} */
  var transactionIDList = [];
  /**
   * @return {undefined}
   */
  var j = function() {
    if (apply()) {
      m({}, 11, ["canMakePaymentForPaymentHandlerResponse"], function(simpleselect) {
        ad = simpleselect.data.canMakePaymentForPaymentHandlerResponse;
      });
    }
  };
  /**
   * @param {!Object} data
   * @param {string} t
   * @param {!Array} d
   * @param {!Function} cb
   * @return {undefined}
   */
  var m = function(data, t, d, cb) {
    /**
     * @param {!Object} settings
     * @return {undefined}
     */
    function update(settings) {
      var i;
      a: {
        /** @type {number} */
        i = 0;
        for (; i < d.length; i++) {
          if (settings.data[d[i]]) {
            /** @type {boolean} */
            i = true;
            break a;
          }
        }
        /** @type {boolean} */
        i = false;
      }
      if (i) {
        cb(settings);
        window.removeEventListener("message", update);
      }
    }
    window.addEventListener("message", update);
    /** @type {!Object} */
    data = Object.assign({
      eventType : t
    }, data);
    log(data);
  };
  /**
   * @param {!Object} data
   * @return {undefined}
   */
  var log = function(data) {
    if (reverseIsSingle && Sim) {
      /** @type {!Object} */
      data = Object.assign({
        buyFlowActivityMode : $c,
        googleTransactionId : interestingPoint,
        originTimeMs : existed
      }, data);
      if ("CANARY" == max) {
        /** @type {string} */
        var origin = "https://ibfe-canary.corp.google.com";
      } else {
        /** @type {string} */
        origin = "https://pay";
        if ("SANDBOX" == max) {
          /** @type {string} */
          origin = origin + ".sandbox";
        } else {
          if ("PREPROD" == max) {
            /** @type {string} */
            origin = origin + "-preprod.sandbox";
          }
        }
        /** @type {string} */
        origin = origin + ".google.com";
      }
      Sim.postMessage(data, origin);
    } else {
      transactionIDList.push(data);
    }
  };
  /**
   * @return {undefined}
   */
  var findparameters = function() {
    /** @type {boolean} */
    reverseIsSingle = true;
    transactionIDList.forEach(function(a) {
      log(a);
    });
    /** @type {number} */
    transactionIDList.length = 0;
  };
  (function() {
    if (!el) {
      var stringResolver = window.gpayInitParams || {};
      max = stringResolver.environment || "PRODUCTION";
      /** @type {!Element} */
      el = document.createElement("iframe");
      reset(el, fetch($(("CANARY" == max ? "https://ibfe-canary.corp" : "https://pay") + ("PREPROD" == max ? "-preprod.sandbox" : "SANDBOX" == max ? ".sandbox" : "") + ".google.com/gp/p/ui/payframe?origin=%{windowOrigin}&mid=%{merchantId}"), {
        windowOrigin : window.location.origin,
        merchantId : stringResolver.merchantInfo && stringResolver.merchantInfo.merchantId || ""
      }));
      log({
        eventType : 15,
        clientLatencyStartMs : hasOwnProperty()
      });
      j();
      /** @type {string} */
      el.height = "0";
      /** @type {string} */
      el.width = "0";
      /** @type {string} */
      el.style.display = "none";
      /** @type {string} */
      el.style.visibility = "hidden";
      el.setAttribute("allowpaymentrequest", true);
      /**
       * @return {undefined}
       */
      el.onload = function() {
        Sim = new Sandbox;
        log({
          eventType : 17,
          clientLatencyStartMs : hasOwnProperty()
        });
        log({
          eventType : 16,
          clientLatencyStartMs : hasOwnProperty()
        });
        findparameters();
      };
      if (document.body) {
        document.body.appendChild(el);
      } else {
        document.addEventListener("DOMContentLoaded", function() {
          document.body.appendChild(el);
        });
      }
    }
  })();
  /**
   * @param {string} b
   * @return {undefined}
   */
  var e = function(b) {
    /** @type {string} */
    this.j = b;
    /** @type {null} */
    this.Y = null;
  };
  /**
   * @param {string} other
   * @return {undefined}
   */
  e.prototype.wa = function(other) {
    /** @type {string} */
    this.Y = other;
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  e.prototype.m = function(data) {
    var result = done(data);
    return new Promise(function(callback) {
      (void 0 != result.hasEnrolledInstrument ? result.hasEnrolledInstrument() : result.canMakePayment()).then(function(result) {
        window.sessionStorage.setItem("google.payments.api.storage.isreadytopay.result", result.toString());
        var connection = {
          result : result
        };
        if (2 <= data.apiVersion && data.existingPaymentMethodRequired) {
          /** @type {string} */
          connection.paymentMethodPresent = result;
        }
        callback(connection);
      })["catch"](function() {
        if (window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result")) {
          callback({
            result : "true" == window.sessionStorage.getItem("google.payments.api.storage.isreadytopay.result")
          });
        } else {
          callback({
            result : false
          });
        }
      });
    });
  };
  /**
   * @param {!Object} code
   * @return {undefined}
   */
  e.prototype.I = function(code) {
    done(code, this.j, code.transactionInfo.currencyCode, code.transactionInfo.totalPrice);
  };
  /**
   * @param {string} name
   * @return {undefined}
   */
  e.prototype.v = function(name) {
    onload(this, name);
  };
  /**
   * @param {!Object} err
   * @param {string} name
   * @param {string} currency
   * @param {string} source
   * @return {?}
   */
  var done = function(err, name, currency, source) {
    var params = {};
    if (err) {
      /** @type {*} */
      params = JSON.parse(JSON.stringify(err));
    }
    if (!params.apiVersion) {
      /** @type {number} */
      params.apiVersion = 1;
    }
    if (params.swg) {
      /** @type {!Array} */
      params.allowedPaymentMethods = ["CARD"];
    }
    if (name && "TEST" == name) {
      /** @type {string} */
      params.environment = name;
    }
    return new PaymentRequest([{
      supportedMethods : ["https://google.com/pay"],
      data : params
    }], {
      total : {
        label : "Estimated Total Price",
        amount : {
          currency : currency || "USD",
          value : source || "0"
        }
      }
    });
  };
  /**
   * @param {!Object} context
   * @param {!Object} cb
   * @return {undefined}
   */
  var onload = function(context, cb) {
    cb = done(cb, context.j, cb.transactionInfo && cb.transactionInfo.currencyCode || void 0, cb.transactionInfo && cb.transactionInfo.totalPrice || void 0);
    context.Y(cb.show().then(function(tmp) {
      tmp.complete("success");
      return tmp.details;
    })["catch"](function(resolveResponse) {
      /** @type {string} */
      resolveResponse.statusCode = "CANCELED";
      throw resolveResponse;
    }));
  };
  /**
   * @param {!Object} elem
   * @param {!Object} next
   * @return {undefined}
   */
  var i = function(elem, next) {
    var transition = branch.transition;
    if (!transition) {
      var style = toUpperCase();
      transition = style;
      if (void 0 === elem.style[style]) {
        style = (pnstyle ? "Webkit" : isFirefox ? "Moz" : node ? "ms" : isLeft ? "O" : null) + pop(style);
        if (void 0 !== elem.style[style]) {
          transition = style;
        }
      }
      branch.transition = transition;
    }
    if (transition) {
      /** @type {!Object} */
      elem.style[transition] = next;
    }
  };
  var branch = {};
  /**
   * @param {!Object} val
   * @param {!Array} key
   * @return {undefined}
   */
  var write = function(val, key) {
    if (!isObject(key)) {
      /** @type {!Array} */
      key = [key];
    }
    expect(0 < key.length, "At least one Css3Property should be specified.");
    key = filter(key, function(item) {
      if ("string" === typeof item) {
        return item;
      }
      wrap(item, "Expected css3 property to be an object.");
      /** @type {string} */
      var url = item.kc + " " + item.duration + "s " + item.timing + " " + item.delay + "s";
      expect(item.kc && "number" === typeof item.duration && item.timing && "number" === typeof item.delay, "Unexpected css3 property value: %s", url);
      return url;
    });
    i(val, key.join(","));
  };
  /**
   * @return {undefined}
   */
  var record = function() {
    this.Ja = this.Ja;
    this.Na = this.Na;
  };
  /** @type {boolean} */
  record.prototype.Ja = false;
  /**
   * @return {undefined}
   */
  record.prototype.dispose = function() {
    if (!this.Ja) {
      /** @type {boolean} */
      this.Ja = true;
      this.ra();
    }
  };
  /**
   * @return {undefined}
   */
  record.prototype.ra = function() {
    if (this.Na) {
      for (; this.Na.length;) {
        this.Na.shift()();
      }
    }
  };
  /**
   * @param {!Object} type
   * @param {!Object} target
   * @return {undefined}
   */
  var Event = function(type, target) {
    /** @type {!Object} */
    this.type = type;
    this.currentTarget = this.target = target;
    /** @type {boolean} */
    this.defaultPrevented = this.aa = false;
    /** @type {boolean} */
    this.Mb = true;
  };
  /**
   * @return {undefined}
   */
  Event.prototype.stopPropagation = function() {
    /** @type {boolean} */
    this.aa = true;
  };
  /**
   * @return {undefined}
   */
  Event.prototype.preventDefault = function() {
    /** @type {boolean} */
    this.defaultPrevented = true;
    /** @type {boolean} */
    this.Mb = false;
  };
  /** @type {function(T): T} */
  var getAlignItem = Object.freeze || function(partKeys) {
    return partKeys;
  };
  var finished;
  if (!(finished = !node)) {
    /** @type {boolean} */
    finished = 9 <= Number(additionalDigits);
  }
  /** @type {boolean} */
  var FINISHED = finished;
  var currentRelations;
  if (currentRelations = node) {
    var lastPregeneratedItem;
    if (Object.prototype.hasOwnProperty.call($children, "9")) {
      lastPregeneratedItem = $children["9"];
    } else {
      /** @type {number} */
      var center = 0;
      var xN = escapeHtml(String(expected)).split(".");
      var yN = escapeHtml("9").split(".");
      /** @type {number} */
      var numlabels = Math.max(xN.length, yN.length);
      /** @type {number} */
      var i = 0;
      for (; 0 == center && i < numlabels; i++) {
        var v1Sub = xN[i] || "";
        var v2Sub = yN[i] || "";
        do {
          /** @type {!Array} */
          var v1Comp = /(\d*)(\D*)(.*)/.exec(v1Sub) || ["", "", "", ""];
          /** @type {!Array} */
          var v2Comp = /(\d*)(\D*)(.*)/.exec(v2Sub) || ["", "", "", ""];
          if (0 == v1Comp[0].length && 0 == v2Comp[0].length) {
            break;
          }
          center = _rev_compare(0 == v1Comp[1].length ? 0 : parseInt(v1Comp[1], 10), 0 == v2Comp[1].length ? 0 : parseInt(v2Comp[1], 10)) || _rev_compare(0 == v1Comp[2].length, 0 == v2Comp[2].length) || _rev_compare(v1Comp[2], v2Comp[2]);
          v1Sub = v1Comp[3];
          v2Sub = v2Comp[3];
        } while (0 == center);
      }
      /** @type {boolean} */
      lastPregeneratedItem = $children["9"] = 0 <= center;
    }
    /** @type {boolean} */
    currentRelations = !lastPregeneratedItem;
  }
  var addedRelations = currentRelations;
  var Cd = function() {
    if (!target.addEventListener || !Object.defineProperty) {
      return false;
    }
    /** @type {boolean} */
    var a = false;
    /** @type {!Object} */
    var options = Object.defineProperty({}, "passive", {
      get : function() {
        /** @type {boolean} */
        a = true;
      }
    });
    try {
      target.addEventListener("test", c, options);
      target.removeEventListener("test", c, options);
    } catch (c) {
    }
    return a;
  }();
  /**
   * @param {!Object} event
   * @param {!HTMLElement} target
   * @return {undefined}
   */
  var handler = function(event, target) {
    Event.call(this, event ? event.type : "");
    /** @type {null} */
    this.relatedTarget = this.currentTarget = this.target = null;
    /** @type {number} */
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    /** @type {string} */
    this.key = "";
    /** @type {number} */
    this.charCode = this.keyCode = 0;
    /** @type {boolean} */
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    /** @type {null} */
    this.state = null;
    /** @type {number} */
    this.pointerId = 0;
    /** @type {string} */
    this.pointerType = "";
    /** @type {null} */
    this.sa = null;
    if (event) {
      var type = this.type = event.type;
      var relevantTouch = event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : null;
      this.target = event.target || event.srcElement;
      /** @type {!HTMLElement} */
      this.currentTarget = target;
      if (target = event.relatedTarget) {
        if (isFirefox) {
          a: {
            try {
              decode(target.nodeName);
              /** @type {boolean} */
              var e = true;
              break a;
            } catch (f) {
            }
            /** @type {boolean} */
            e = false;
          }
          if (!e) {
            /** @type {null} */
            target = null;
          }
        }
      } else {
        if ("mouseover" == type) {
          target = event.fromElement;
        } else {
          if ("mouseout" == type) {
            target = event.toElement;
          }
        }
      }
      /** @type {!HTMLElement} */
      this.relatedTarget = target;
      if (relevantTouch) {
        this.clientX = void 0 !== relevantTouch.clientX ? relevantTouch.clientX : relevantTouch.pageX;
        this.clientY = void 0 !== relevantTouch.clientY ? relevantTouch.clientY : relevantTouch.pageY;
        this.screenX = relevantTouch.screenX || 0;
        this.screenY = relevantTouch.screenY || 0;
      } else {
        this.offsetX = pnstyle || void 0 !== event.offsetX ? event.offsetX : event.layerX;
        this.offsetY = pnstyle || void 0 !== event.offsetY ? event.offsetY : event.layerY;
        this.clientX = void 0 !== event.clientX ? event.clientX : event.pageX;
        this.clientY = void 0 !== event.clientY ? event.clientY : event.pageY;
        this.screenX = event.screenX || 0;
        this.screenY = event.screenY || 0;
      }
      this.button = event.button;
      this.keyCode = event.keyCode || 0;
      this.key = event.key || "";
      this.charCode = event.charCode || ("keypress" == type ? event.keyCode : 0);
      this.ctrlKey = event.ctrlKey;
      this.altKey = event.altKey;
      this.shiftKey = event.shiftKey;
      this.metaKey = event.metaKey;
      this.pointerId = event.pointerId || 0;
      this.pointerType = "string" === typeof event.pointerType ? event.pointerType : MODIFIER_KEYS[event.pointerType] || "";
      this.state = event.state;
      /** @type {!Object} */
      this.sa = event;
      if (event.defaultPrevented) {
        this.preventDefault();
      }
    }
  };
  extend(handler, Event);
  var MODIFIER_KEYS = getAlignItem({
    2 : "touch",
    3 : "pen",
    4 : "mouse"
  });
  /**
   * @return {undefined}
   */
  handler.prototype.stopPropagation = function() {
    handler.Ta.stopPropagation.call(this);
    if (this.sa.stopPropagation) {
      this.sa.stopPropagation();
    } else {
      /** @type {boolean} */
      this.sa.cancelBubble = true;
    }
  };
  /**
   * @return {undefined}
   */
  handler.prototype.preventDefault = function() {
    handler.Ta.preventDefault.call(this);
    var event = this.sa;
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      if (event.returnValue = false, addedRelations) {
        try {
          if (event.ctrlKey || 112 <= event.keyCode && 123 >= event.keyCode) {
            /** @type {number} */
            event.keyCode = -1;
          }
        } catch (b) {
        }
      }
    }
  };
  /** @type {string} */
  var property = "closure_listenable_" + (1E6 * Math.random() | 0);
  /** @type {number} */
  var nextKey = 0;
  /**
   * @param {!Function} callback
   * @param {!Object} url
   * @param {!Object} type
   * @param {?} uuid
   * @param {!Object} name
   * @return {undefined}
   */
  var Sprite = function(callback, url, type, uuid, name) {
    /** @type {!Function} */
    this.listener = callback;
    /** @type {null} */
    this.Qa = null;
    /** @type {!Object} */
    this.src = url;
    /** @type {!Object} */
    this.type = type;
    /** @type {boolean} */
    this.capture = !!uuid;
    /** @type {!Object} */
    this.Ka = name;
    /** @type {number} */
    this.key = ++nextKey;
    /** @type {boolean} */
    this.ka = this.Ha = false;
  };
  /**
   * @param {!Object} node
   * @return {undefined}
   */
  var escape = function(node) {
    /** @type {boolean} */
    node.ka = true;
    /** @type {null} */
    node.listener = null;
    /** @type {null} */
    node.Qa = null;
    /** @type {null} */
    node.src = null;
    /** @type {null} */
    node.Ka = null;
  };
  /**
   * @param {!Object} value
   * @return {undefined}
   */
  var A = function(value) {
    /** @type {!Object} */
    this.src = value;
    this.l = {};
    /** @type {number} */
    this.Ca = 0;
  };
  /**
   * @param {string} b
   * @param {string} c
   * @param {boolean} n
   * @param {!Function} a
   * @param {!Array} d
   * @return {?}
   */
  A.prototype.add = function(b, c, n, a, d) {
    var i = b.toString();
    b = this.l[i];
    if (!b) {
      /** @type {!Array} */
      b = this.l[i] = [];
      this.Ca++;
    }
    var r = o(b, c, a, d);
    if (-1 < r) {
      c = b[r];
      if (!n) {
        /** @type {boolean} */
        c.Ha = false;
      }
    } else {
      c = new Sprite(c, this.src, i, !!a, d);
      /** @type {boolean} */
      c.Ha = n;
      b.push(c);
    }
    return c;
  };
  /**
   * @param {string} i
   * @param {number} b
   * @param {!Object} c
   * @param {!Array} a
   * @return {?}
   */
  A.prototype.remove = function(i, b, c, a) {
    i = i.toString();
    if (!(i in this.l)) {
      return false;
    }
    var m = this.l[i];
    b = o(m, b, c, a);
    return -1 < b ? (escape(m[b]), expect(null != m.length), Array.prototype.splice.call(m, b, 1), 0 == m.length && (delete this.l[i], this.Ca--), true) : false;
  };
  /**
   * @param {!Object} item
   * @param {!Object} value
   * @return {undefined}
   */
  var next = function(item, value) {
    var i = value.type;
    if (i in item.l) {
      var val = item.l[i];
      var time = normalize(val, value);
      var dateOpen;
      if (dateOpen = 0 <= time) {
        expect(null != val.length);
        Array.prototype.splice.call(val, time, 1);
      }
      if (dateOpen) {
        escape(value);
        if (0 == item.l[i].length) {
          delete item.l[i];
          item.Ca--;
        }
      }
    }
  };
  /**
   * @param {!Object} b
   * @param {!Object} d
   * @param {!Object} a
   * @param {!Array} v
   * @return {?}
   */
  A.prototype.Ya = function(b, d, a, v) {
    b = this.l[b.toString()];
    /** @type {number} */
    var t = -1;
    if (b) {
      t = o(b, d, a, v);
    }
    return -1 < t ? b[t] : null;
  };
  /**
   * @param {?} fn
   * @param {number} type
   * @return {?}
   */
  A.prototype.hasListener = function(fn, type) {
    /** @type {boolean} */
    var etag = void 0 !== fn;
    var args = etag ? fn.toString() : "";
    /** @type {boolean} */
    var dataType = void 0 !== type;
    return some(this.l, function(listeners) {
      /** @type {number} */
      var i = 0;
      for (; i < listeners.length; ++i) {
        if (!(etag && listeners[i].type != args || dataType && listeners[i].capture != type)) {
          return true;
        }
      }
      return false;
    });
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Function} input
   * @param {!Array} x
   * @return {?}
   */
  var o = function(a, b, input, x) {
    /** @type {number} */
    var e = 0;
    for (; e < a.length; ++e) {
      var node = a[e];
      if (!node.ka && node.listener == b && node.capture == !!input && node.Ka == x) {
        return e;
      }
    }
    return -1;
  };
  /** @type {string} */
  var prop = "closure_lm_" + (1E6 * Math.random() | 0);
  var args = {};
  /** @type {number} */
  var Md = 0;
  /**
   * @param {!Object} obj
   * @param {string} key
   * @param {string} cb
   * @param {!Object} data
   * @param {!Array} context
   * @return {undefined}
   */
  var on = function(obj, key, cb, data, context) {
    if (data && data.once) {
      verify(obj, key, cb, data, context);
    } else {
      if (isObject(key)) {
        /** @type {number} */
        var i = 0;
        for (; i < key.length; i++) {
          on(obj, key[i], cb, data, context);
        }
      } else {
        cb = release(cb);
        if (obj && obj[property]) {
          /** @type {boolean} */
          data = isFunction(data) ? !!data.capture : !!data;
          reverse(obj);
          obj.B.add(String(key), cb, false, data, context);
        } else {
          add(obj, key, cb, false, data, context);
        }
      }
    }
  };
  /**
   * @param {!Object} a
   * @param {string} d
   * @param {!Object} m
   * @param {!Object} b
   * @param {?} options
   * @param {!Array} callback
   * @return {undefined}
   */
  var add = function(a, d, m, b, options, callback) {
    if (!d) {
      throw Error("Invalid event type");
    }
    /** @type {boolean} */
    var context = isFunction(options) ? !!options.capture : !!options;
    var fn = indexOf(a);
    if (!fn) {
      a[prop] = fn = new A(a);
    }
    m = fn.add(d, m, b, context, callback);
    if (!m.Qa) {
      b = difference__3373();
      /** @type {!Object} */
      m.Qa = b;
      /** @type {!Object} */
      b.src = a;
      /** @type {!Object} */
      b.listener = m;
      if (a.addEventListener) {
        if (!Cd) {
          /** @type {boolean} */
          options = context;
        }
        if (void 0 === options) {
          /** @type {boolean} */
          options = false;
        }
        a.addEventListener(d.toString(), b, options);
      } else {
        if (a.attachEvent) {
          a.attachEvent(parseInt(d.toString()), b);
        } else {
          if (a.addListener && a.removeListener) {
            expect("change" === d, "MediaQueryList only has a change event");
            a.addListener(b);
          } else {
            throw Error("addEventListener and attachEvent are unavailable.");
          }
        }
      }
      Md++;
    }
  };
  /**
   * @return {?}
   */
  var difference__3373 = function() {
    /** @type {function(string, !Object): ?} */
    var proxyCallbackFunction = download;
    /** @type {function(?): ?} */
    var f = FINISHED ? function(eventObject) {
      return proxyCallbackFunction.call(f.src, f.listener, eventObject);
    } : function(result) {
      result = proxyCallbackFunction.call(f.src, f.listener, result);
      if (!result) {
        return result;
      }
    };
    return f;
  };
  /**
   * @param {!Object} a
   * @param {string} b
   * @param {string} cb
   * @param {!Object} data
   * @param {!Array} selector
   * @return {undefined}
   */
  var verify = function(a, b, cb, data, selector) {
    if (isObject(b)) {
      /** @type {number} */
      var i = 0;
      for (; i < b.length; i++) {
        verify(a, b[i], cb, data, selector);
      }
    } else {
      cb = release(cb);
      if (a && a[property]) {
        a.B.add(String(b), cb, true, isFunction(data) ? !!data.capture : !!data, selector);
      } else {
        add(a, b, cb, true, data, selector);
      }
    }
  };
  /**
   * @param {!Object} self
   * @param {!Object} element
   * @param {!Array} key
   * @param {!Object} callback
   * @param {!Array} type
   * @return {undefined}
   */
  var off = function(self, element, key, callback, type) {
    if (isObject(element)) {
      /** @type {number} */
      var i = 0;
      for (; i < element.length; i++) {
        off(self, element[i], key, callback, type);
      }
    } else {
      /** @type {boolean} */
      callback = isFunction(callback) ? !!callback.capture : !!callback;
      key = release(key);
      if (self && self[property]) {
        self.B.remove(String(element), key, callback, type);
      } else {
        if (self && (self = indexOf(self)) && (element = self.Ya(element, key, callback, type))) {
          removeListener(element);
        }
      }
    }
  };
  /**
   * @param {!Object} item
   * @return {undefined}
   */
  var removeListener = function(item) {
    if ("number" !== typeof item && item && !item.ka) {
      var self = item.src;
      if (self && self[property]) {
        next(self.B, item);
      } else {
        var i = item.type;
        var handler = item.Qa;
        if (self.removeEventListener) {
          self.removeEventListener(i, handler, item.capture);
        } else {
          if (self.detachEvent) {
            self.detachEvent(parseInt(i), handler);
          } else {
            if (self.addListener && self.removeListener) {
              self.removeListener(handler);
            }
          }
        }
        Md--;
        if (i = indexOf(self)) {
          next(i, item);
          if (0 == i.Ca) {
            /** @type {null} */
            i.src = null;
            /** @type {null} */
            self[prop] = null;
          }
        } else {
          escape(item);
        }
      }
    }
  };
  /**
   * @param {string} i
   * @return {?}
   */
  var parseInt = function(i) {
    return i in args ? args[i] : args[i] = "on" + i;
  };
  /**
   * @param {!Object} n
   * @param {!Object} args
   * @param {boolean} element
   * @param {!Object} key
   * @return {?}
   */
  var matches = function(n, args, element, key) {
    /** @type {boolean} */
    var success = true;
    if (n = indexOf(n)) {
      if (args = n.l[args.toString()]) {
        args = args.concat();
        /** @type {number} */
        n = 0;
        for (; n < args.length; n++) {
          var node = args[n];
          if (node && node.capture == element && !node.ka) {
            node = getData(node, key);
            /** @type {boolean} */
            success = success && false !== node;
          }
        }
      }
    }
    return success;
  };
  /**
   * @param {!Object} node
   * @param {!Object} result
   * @return {?}
   */
  var getData = function(node, result) {
    var handler = node.listener;
    var currTarget = node.Ka || node.src;
    if (node.Ha) {
      removeListener(node);
    }
    return handler.call(currTarget, result);
  };
  /**
   * @param {string} node
   * @param {!Object} args
   * @return {?}
   */
  var download = function(node, args) {
    if (node.ka) {
      return true;
    }
    if (!FINISHED) {
      if (!args) {
        a: {
          /** @type {!Array} */
          args = ["window", "event"];
          var data = target;
          /** @type {number} */
          var p = 0;
          for (; p < args.length; p++) {
            if (data = data[args[p]], null == data) {
              /** @type {null} */
              args = null;
              break a;
            }
          }
          args = data;
        }
      }
      /** @type {!Object} */
      p = args;
      args = new handler(p, this);
      /** @type {boolean} */
      data = true;
      if (!(0 > p.keyCode || void 0 != p.returnValue)) {
        a: {
          /** @type {boolean} */
          var i = false;
          if (0 == p.keyCode) {
            try {
              /** @type {number} */
              p.keyCode = -1;
              break a;
            } catch (g) {
              /** @type {boolean} */
              i = true;
            }
          }
          if (i || void 0 == p.returnValue) {
            /** @type {boolean} */
            p.returnValue = true;
          }
        }
        /** @type {!Array} */
        p = [];
        i = args.currentTarget;
        for (; i; i = i.parentNode) {
          p.push(i);
        }
        node = node.type;
        /** @type {number} */
        i = p.length - 1;
        for (; !args.aa && 0 <= i; i--) {
          args.currentTarget = p[i];
          var result = matches(p[i], node, true, args);
          data = data && result;
        }
        /** @type {number} */
        i = 0;
        for (; !args.aa && i < p.length; i++) {
          args.currentTarget = p[i];
          result = matches(p[i], node, false, args);
          data = data && result;
        }
      }
      return data;
    }
    return getData(node, new handler(args, this));
  };
  /**
   * @param {!Object} obj
   * @return {?}
   */
  var indexOf = function(obj) {
    obj = obj[prop];
    return obj instanceof A ? obj : null;
  };
  /** @type {string} */
  var ORIGIN_METHOD = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
  /**
   * @param {!Object} fn
   * @return {?}
   */
  var release = function(fn) {
    expect(fn, "Listener can not be null.");
    if ("function" == typeOf(fn)) {
      return fn;
    }
    expect(fn.handleEvent, "An object listener must have handleEvent method.");
    if (!fn[ORIGIN_METHOD]) {
      /**
       * @param {?} evt
       * @return {?}
       */
      fn[ORIGIN_METHOD] = function(evt) {
        return fn.handleEvent(evt);
      };
    }
    return fn[ORIGIN_METHOD];
  };
  /**
   * @return {undefined}
   */
  var model = function() {
    record.call(this);
    this.B = new A(this);
    this.Xb = this;
    /** @type {null} */
    this.eb = null;
  };
  extend(model, record);
  /** @type {boolean} */
  model.prototype[property] = true;
  /**
   * @param {string} type
   * @param {!Function} handler
   * @param {!Object} context
   * @param {!Array} fn
   * @return {undefined}
   */
  model.prototype.addEventListener = function(type, handler, context, fn) {
    on(this, type, handler, context, fn);
  };
  /**
   * @param {string} name
   * @param {!Function} fn
   * @param {!Object} callback
   * @param {!Array} type
   * @return {undefined}
   */
  model.prototype.removeEventListener = function(name, fn, callback, type) {
    off(this, name, fn, callback, type);
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  model.prototype.dispatchEvent = function(e) {
    reverse(this);
    var target = this.eb;
    if (target) {
      /** @type {!Array} */
      var cells = [];
      /** @type {number} */
      var type = 1;
      for (; target; target = target.eb) {
        cells.push(target);
        expect(1E3 > ++type, "infinite loop");
      }
    }
    target = this.Xb;
    type = e.type || e;
    if ("string" === typeof e) {
      e = new Event(e, target);
    } else {
      if (e instanceof Event) {
        e.target = e.target || target;
      } else {
        /** @type {!Object} */
        var result = e;
        e = new Event(type, target);
        fire(e, result);
      }
    }
    /** @type {boolean} */
    result = true;
    if (cells) {
      /** @type {number} */
      var i = cells.length - 1;
      for (; !e.aa && 0 <= i; i--) {
        var state = e.currentTarget = cells[i];
        result = error(state, type, true, e) && result;
      }
    }
    if (!e.aa) {
      state = e.currentTarget = target;
      result = error(state, type, true, e) && result;
      if (!e.aa) {
        result = error(state, type, false, e) && result;
      }
    }
    if (cells) {
      /** @type {number} */
      i = 0;
      for (; !e.aa && i < cells.length; i++) {
        state = e.currentTarget = cells[i];
        result = error(state, type, false, e) && result;
      }
    }
    return result;
  };
  /**
   * @return {undefined}
   */
  model.prototype.ra = function() {
    model.Ta.ra.call(this);
    if (this.B) {
      var item = this.B;
      /** @type {number} */
      var b = 0;
      var i;
      for (i in item.l) {
        var month_name = item.l[i];
        /** @type {number} */
        var month_full_i = 0;
        for (; month_full_i < month_name.length; month_full_i++) {
          ++b;
          escape(month_name[month_full_i]);
        }
        delete item.l[i];
        item.Ca--;
      }
    }
    /** @type {null} */
    this.eb = null;
  };
  /**
   * @param {!Object} state
   * @param {?} data
   * @param {boolean} a
   * @param {!Object} msg
   * @return {?}
   */
  var error = function(state, data, a, msg) {
    data = state.B.l[String(data)];
    if (!data) {
      return true;
    }
    data = data.concat();
    /** @type {boolean} */
    var e = true;
    /** @type {number} */
    var i = 0;
    for (; i < data.length; ++i) {
      var node = data[i];
      if (node && !node.ka && node.capture == a) {
        var listener = node.listener;
        var HistoryLocation = node.Ka || node.src;
        if (node.Ha) {
          next(state.B, node);
        }
        /** @type {boolean} */
        e = false !== listener.call(HistoryLocation, msg) && e;
      }
    }
    return e && 0 != msg.Mb;
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @param {!Object} method
   * @param {!Array} func
   * @return {?}
   */
  model.prototype.Ya = function(a, b, method, func) {
    return this.B.Ya(String(a), b, method, func);
  };
  /**
   * @param {?} fn
   * @param {number} type
   * @return {?}
   */
  model.prototype.hasListener = function(fn, type) {
    return this.B.hasListener(void 0 !== fn ? String(fn) : void 0, type);
  };
  /**
   * @param {!Object} s
   * @return {undefined}
   */
  var reverse = function(s) {
    expect(s.B, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
  };
  /**
   * @param {number} parameters
   * @param {!Object} name
   * @return {undefined}
   */
  var result = function(parameters, name) {
    model.call(this);
    this.La = parameters || 1;
    this.Ba = name || target;
    this.yb = proxy(this.wc, this);
    /** @type {number} */
    this.Eb = hasOwnProperty();
  };
  extend(result, model);
  data = result.prototype;
  /** @type {boolean} */
  data.enabled = false;
  /** @type {null} */
  data.D = null;
  /**
   * @param {number} useFrames
   * @return {undefined}
   */
  data.setInterval = function(useFrames) {
    /** @type {number} */
    this.La = useFrames;
    if (this.D && this.enabled) {
      this.stop();
      this.start();
    } else {
      if (this.D) {
        this.stop();
      }
    }
  };
  /**
   * @return {undefined}
   */
  data.wc = function() {
    if (this.enabled) {
      /** @type {number} */
      var now = hasOwnProperty() - this.Eb;
      if (0 < now && now < .8 * this.La) {
        this.D = this.Ba.setTimeout(this.yb, this.La - now);
      } else {
        if (this.D) {
          this.Ba.clearTimeout(this.D);
          /** @type {null} */
          this.D = null;
        }
        this.dispatchEvent("tick");
        if (this.enabled) {
          this.stop();
          this.start();
        }
      }
    }
  };
  /**
   * @return {undefined}
   */
  data.start = function() {
    /** @type {boolean} */
    this.enabled = true;
    if (!this.D) {
      this.D = this.Ba.setTimeout(this.yb, this.La);
      /** @type {number} */
      this.Eb = hasOwnProperty();
    }
  };
  /**
   * @return {undefined}
   */
  data.stop = function() {
    /** @type {boolean} */
    this.enabled = false;
    if (this.D) {
      this.Ba.clearTimeout(this.D);
      /** @type {null} */
      this.D = null;
    }
  };
  /**
   * @return {undefined}
   */
  data.ra = function() {
    result.Ta.ra.call(this);
    this.stop();
    delete this.Ba;
  };
  /**
   * @param {string} type
   * @param {!Object} data
   * @param {number} mode
   * @param {string} context
   * @param {(!Function|string)} callback
   * @param {!Node} node
   * @return {undefined}
   */
  var initialize = function(type, data, mode, context, callback, node) {
    /** @type {string} */
    this.code = type;
    this.data = "ok" == type ? data : null;
    /** @type {number} */
    this.mode = mode;
    /** @type {string} */
    this.origin = context;
    /** @type {(!Function|string)} */
    this.cb = callback;
    /** @type {!Node} */
    this.sc = node;
    /** @type {boolean} */
    this.ok = "ok" == type;
    /** @type {(Error|null)} */
    this.error = "failed" == type ? Error(String(data) || "") : null;
  };
  /**
   * @param {!Object} value
   * @param {string} filters
   * @param {string} options
   * @return {undefined}
   */
  var Filter = function(value, filters, options) {
    /** @type {!Object} */
    this.a = value;
    /** @type {string} */
    this.qb = filters;
    /** @type {string} */
    this.o = options;
    /** @type {boolean} */
    this.pc = true;
    /** @type {null} */
    this.rb = null;
    /** @type {boolean} */
    this.tb = false;
    /** @type {null} */
    this.O = this.Ma = this.T = this.b = null;
    this.xb = this.ec.bind(this);
  };
  /**
   * @param {!Function} reset_attempt
   * @return {undefined}
   */
  Filter.prototype.connect = function(reset_attempt) {
    if (this.T) {
      throw Error("already connected");
    }
    /** @type {!Function} */
    this.T = reset_attempt;
    this.a.addEventListener("message", this.xb);
  };
  /**
   * @return {undefined}
   */
  Filter.prototype.disconnect = function() {
    if (this.T && (this.T = null, this.b && (debug(this.b), this.b = null), this.a.removeEventListener("message", this.xb), this.O)) {
      var i;
      for (i in this.O) {
        var channel = this.O[i];
        if (channel.port1) {
          debug(channel.port1);
        }
        if (channel.port2) {
          debug(channel.port2);
        }
      }
      /** @type {null} */
      this.O = null;
    }
  };
  /**
   * @return {?}
   */
  Filter.prototype.isConnected = function() {
    return null != this.o;
  };
  /**
   * @param {string} state
   * @return {?}
   */
  var message = function(state) {
    if (state.T && !state.rb) {
      state.rb = "function" == typeof state.qb ? state.qb() : state.qb;
    }
    return state.rb;
  };
  /**
   * @param {string} h
   * @return {?}
   */
  var onChange = function(h) {
    if (null == h.o) {
      throw Error("not connected");
    }
    return h.o;
  };
  /**
   * @param {string} obj
   * @param {string} args
   * @return {undefined}
   */
  var flip = function(obj, args) {
    /** @type {null} */
    var channel = null;
    if (obj.tb && "function" == typeof obj.a.MessageChannel) {
      channel = new obj.a.MessageChannel;
    }
    if (channel) {
      callback(obj, "start", args, [channel.port2]);
      cb(obj, channel.port1);
    } else {
      callback(obj, "start", args);
    }
  };
  /**
   * @param {string} value
   * @param {string} c
   * @param {string} data
   * @param {string} domain
   * @return {undefined}
   */
  var callback = function(value, c, data, domain) {
    data = {
      sentinel : "__ACTIVITIES__",
      cmd : c,
      payload : data || null
    };
    if (value.b) {
      value.b.postMessage(data, domain || void 0);
    } else {
      var msg = message(value);
      if (!msg) {
        throw Error("not connected");
      }
      value = "connect" == c ? null != value.o ? value.o : "*" : onChange(value);
      msg.postMessage(data, value, domain || void 0);
    }
  };
  /**
   * @param {?} h
   * @param {!Object} name
   * @return {?}
   */
  var isValid = function(h, name) {
    if (!h.O) {
      h.O = {};
    }
    var channel = h.O[name];
    if (!channel) {
      var lastTrackInfoUrl;
      /** @type {!Promise} */
      channel = new Promise(function(trackInfoUrl) {
        lastTrackInfoUrl = trackInfoUrl;
      });
      channel = {
        port1 : null,
        port2 : null,
        Kb : lastTrackInfoUrl,
        Vc : channel
      };
      h.O[name] = channel;
    }
    return channel;
  };
  /**
   * @param {string} self
   * @param {string} data
   * @return {undefined}
   */
  var cb = function(self, data) {
    if (self.b) {
      debug(self.b);
    }
    /** @type {string} */
    self.b = data;
    /**
     * @param {!Object} message
     * @return {undefined}
     */
    self.b.onmessage = function(message) {
      var data = message.data;
      var comment = data && data.cmd;
      data = data && data.payload || null;
      if (comment) {
        self.ga(comment, data, message);
      }
    };
  };
  /**
   * @param {!Object} c
   * @return {undefined}
   */
  Filter.prototype.ec = function(c) {
    if (!this.pc || message(this) == c.source) {
      var data = c.data;
      if (data && "__ACTIVITIES__" == data.sentinel) {
        var head = data.cmd;
        if (!this.b || "connect" == head || "start" == head) {
          var o = c.origin;
          data = data.payload || null;
          if (null == this.o && "start" == head) {
            this.o = o;
          }
          if (null == this.o && c.source && message(this) == c.source) {
            this.o = o;
          }
          if (o == this.o) {
            this.ga(head, data, c);
          }
        }
      }
    }
  };
  /**
   * @param {string} a
   * @param {!Object} t
   * @param {!Object} data
   * @return {undefined}
   */
  Filter.prototype.ga = function(a, t, data) {
    if ("connect" == a) {
      if (this.b) {
        debug(this.b);
        /** @type {null} */
        this.b = null;
      }
      this.tb = t && t.acceptsChannel || false;
      this.T(a, t);
    } else {
      if ("start" == a) {
        if (data = data.ports && data.ports[0]) {
          cb(this, data);
        }
        this.T(a, t);
      } else {
        if ("msg" == a) {
          if (null != this.Ma && null != t) {
            this.Ma(t);
          }
        } else {
          if ("cnget" == a) {
            t = t.name || "";
            a = isValid(this, t);
            if (!a.port1) {
              data = new this.a.MessageChannel;
              a.port1 = data.port1;
              a.port2 = data.port2;
              a.Kb(a.port1);
            }
            if (a.port2) {
              callback(this, "cnset", {
                name : t
              }, [a.port2]);
              /** @type {null} */
              a.port2 = null;
            }
          } else {
            if ("cnset" == a) {
              a = data.ports[0];
              t = isValid(this, t.name);
              /** @type {string} */
              t.port1 = a;
              t.Kb(a);
            } else {
              this.T(a, t);
            }
          }
        }
      }
    }
  };
  /**
   * @param {string} _wid_attr
   * @param {string} data
   * @param {string} pbar
   * @return {undefined}
   */
  var init = function(_wid_attr, data, pbar) {
    var options = this;
    /** @type {string} */
    this.ua = _wid_attr;
    /** @type {string} */
    this.Ua = data;
    this.Fa = pbar || null;
    this.a = this.ua.ownerDocument.defaultView;
    this.o = getLocation(x(data).toString());
    /** @type {null} */
    this.na = null;
    /** @type {!Promise} */
    this.Wa = new Promise(function(mediaTemplate) {
      options.na = mediaTemplate;
    });
    /** @type {null} */
    this.Ra = null;
    new Promise(function(mediaTemplate) {
      options.Ra = mediaTemplate;
    });
    /** @type {null} */
    this.A = null;
    /** @type {!Promise} */
    this.Sa = new Promise(function(data) {
      options.A = data;
    });
    /** @type {null} */
    this.Jb = this.Gb = null;
    this.g = new Filter(this.a, function() {
      return options.ua.contentWindow;
    }, this.o);
  };
  data = init.prototype;
  /**
   * @return {?}
   */
  data.connect = function() {
    var node = this.ua;
    if ("isConnected" in node) {
      node = node.isConnected;
    } else {
      var draggedNode = node.ownerDocument && node.ownerDocument.documentElement;
      node = draggedNode && draggedNode.contains(node) || false;
    }
    if (!node) {
      throw Error("iframe must be in DOM");
    }
    this.g.connect(this.ga.bind(this));
    reset(this.ua, this.Ua);
    return this.Wa;
  };
  /**
   * @return {undefined}
   */
  data.disconnect = function() {
    this.g.disconnect();
  };
  /**
   * @return {?}
   */
  data.Ea = function() {
    return this.Sa;
  };
  /**
   * @return {?}
   */
  data.Za = function() {
    return this.ua.contentWindow || null;
  };
  /**
   * @param {string} data
   * @return {undefined}
   */
  data.message = function(data) {
    callback(this.g, "msg", data);
  };
  /**
   * @param {!Function} storedAnnotations
   * @return {undefined}
   */
  data.onMessage = function(storedAnnotations) {
    /** @type {!Function} */
    this.g.Ma = storedAnnotations;
  };
  /**
   * @param {string} text
   * @param {!Object} value
   * @return {undefined}
   */
  data.ga = function(text, value) {
    if ("connect" == text) {
      flip(this.g, this.Fa);
      this.na();
    } else {
      if ("result" == text) {
        if (this.A) {
          text = value.code;
          value = new initialize(text, "failed" == text ? Error(value.data || "") : value.data, "iframe", onChange(this.g), true, true);
          fn(this.a, value, this.A);
          /** @type {null} */
          this.A = null;
          callback(this.g, "close");
          this.disconnect();
        }
      } else {
        if ("ready" == text) {
          if (this.Ra) {
            this.Ra();
            /** @type {null} */
            this.Ra = null;
          }
        } else {
          if ("resize" == text) {
            this.Jb = value.height;
            if (this.Gb) {
              this.Gb(this.Jb);
            }
          }
        }
      }
    }
  };
  /**
   * @param {number} a
   * @param {string} f
   * @param {string} h
   * @param {string} c
   * @param {string} t
   * @param {!Object} scene
   * @return {undefined}
   */
  var Node = function(a, f, h, c, t, scene) {
    var options = this;
    var node = c && push(c);
    if (!node || "_blank" != node && "_top" != node && "_" == node[0]) {
      throw Error('The only allowed targets are "_blank", "_top" and name targets');
    }
    /** @type {number} */
    this.a = a;
    /** @type {string} */
    this.nc = f;
    /** @type {string} */
    this.Ua = h;
    /** @type {string} */
    this.ic = c;
    this.Fa = t || null;
    this.$ = scene || {};
    /** @type {null} */
    this.na = null;
    /** @type {!Promise} */
    this.Wa = new Promise(function(mediaTemplate) {
      options.na = mediaTemplate;
    });
    /** @type {null} */
    this.A = null;
    /** @type {!Promise} */
    this.Sa = new Promise(function(data) {
      options.A = data;
    });
    /** @type {null} */
    this.g = this.L = this.V = null;
  };
  data = Node.prototype;
  /**
   * @return {?}
   */
  data.open = function() {
    return update(this);
  };
  /**
   * @return {undefined}
   */
  data.disconnect = function() {
    if (this.L) {
      this.L.stop();
      /** @type {null} */
      this.L = null;
    }
    if (this.g) {
      this.g.disconnect();
      /** @type {null} */
      this.g = null;
    }
    if (this.V) {
      try {
        this.V.close();
      } catch (a) {
      }
      /** @type {null} */
      this.V = null;
    }
    /** @type {null} */
    this.A = null;
  };
  /**
   * @return {?}
   */
  data.Za = function() {
    return this.V;
  };
  /**
   * @return {?}
   */
  data.Ea = function() {
    return this.Sa;
  };
  /**
   * @param {string} data
   * @return {undefined}
   */
  data.message = function(data) {
    callback(this.g, "msg", data);
  };
  /**
   * @param {!Function} storedAnnotations
   * @return {undefined}
   */
  data.onMessage = function(storedAnnotations) {
    /** @type {!Function} */
    this.g.Ma = storedAnnotations;
  };
  /**
   * @param {!Object} self
   * @return {?}
   */
  var update = function(self) {
    var result = onResize(self);
    var data = self.Ua;
    if (!self.$.Wc) {
      var i = showMessage({
        lc : self.nc,
        Lb : self.$.Lb || getDirectoryOfFile(self.a.location.href),
        Yb : self.Fa
      });
      /** @type {string} */
      data = data + (-1 == data.indexOf("#") ? "#" : "&") + encodeURIComponent("__WA__") + "=" + encodeURIComponent(i);
    }
    i = self.ic;
    if ("_top" != push(i) && find(self.a)) {
      i = $("_top");
    }
    try {
      var value = reduce(data, self.a, i, result);
    } catch (f) {
    }
    if (!value && "_top" != push(i) && !self.$.Uc) {
      i = $("_top");
      try {
        value = reduce(data, self.a, i);
      } catch (f) {
      }
    }
    if (value) {
      self.V = value;
      if ("_top" != push(i)) {
        create(self);
      }
    } else {
      prepare(self, Error("failed to open window"));
    }
    return self.Sa["catch"](function() {
    });
  };
  /**
   * @param {!Object} self
   * @return {?}
   */
  var onResize = function(self) {
    var screen = self.a.screen;
    var r = screen.availWidth || screen.width;
    var w = screen.availHeight || screen.height;
    /** @type {boolean} */
    var height = self.a == self.a.top;
    var nav = self.a.navigator;
    /** @type {boolean} */
    nav = /Edge/i.test(nav && nav.userAgent);
    /** @type {number} */
    r = Math.max(r - (height && self.a.outerWidth > self.a.innerWidth ? Math.min(100, self.a.outerWidth - self.a.innerWidth) : nav ? 100 : 0), .5 * r);
    /** @type {number} */
    var b = Math.max(w - (height && self.a.outerHeight > self.a.innerHeight ? Math.min(100, self.a.outerHeight - self.a.innerHeight) : nav ? 100 : 0), .5 * w);
    /** @type {number} */
    w = Math.floor(Math.min(600, .9 * r));
    /** @type {number} */
    height = Math.floor(Math.min(600, .9 * b));
    if (self.$.width) {
      /** @type {number} */
      w = Math.min(self.$.width, r);
    }
    if (self.$.height) {
      /** @type {number} */
      height = Math.min(self.$.height, b);
    }
    /** @type {number} */
    self = Math.floor((screen.width - w) / 2);
    /** @type {number} */
    screen = Math.floor((screen.height - height) / 2);
    r = {
      height : height,
      width : w,
      resizable : "yes",
      scrollbars : "yes"
    };
    if (!nav) {
      /** @type {!Object} */
      r.left = self;
      /** @type {number} */
      r.top = screen;
    }
    /** @type {string} */
    nav = "";
    var key;
    for (key in r) {
      if (nav) {
        /** @type {string} */
        nav = nav + ",";
      }
      /** @type {string} */
      nav = nav + (key + "=" + r[key]);
    }
    return nav;
  };
  /**
   * @param {!Object} self
   * @return {undefined}
   */
  var create = function(self) {
    self.L = new result(500);
    self.L.addEventListener("tick", function() {
      show(self, true);
    });
    self.L.start();
    self.g = new Filter(self.a, self.V, null);
    self.g.connect(self.ga.bind(self));
  };
  /**
   * @param {!Object} self
   * @param {boolean} reverse
   * @return {undefined}
   */
  var show = function(self, reverse) {
    if (!self.V || self.V.closed) {
      if (self.L) {
        self.L.stop();
        /** @type {null} */
        self.L = null;
      }
      self.a.setTimeout(function() {
        try {
          self.la("canceled", null);
        } catch (props) {
          prepare(self, props);
        }
      }, reverse ? 3E3 : 0);
    }
  };
  /**
   * @param {!Object} root
   * @param {?} value
   * @return {undefined}
   */
  var prepare = function(root, value) {
    if (root.A) {
      root.A(Promise.reject(value));
    }
    root.disconnect();
  };
  /**
   * @param {string} event
   * @param {!Object} context
   * @return {undefined}
   */
  Node.prototype.la = function(event, context) {
    if (this.A) {
      var end_mark = this.g.isConnected();
      event = new initialize(event, context, "popup", end_mark ? onChange(this.g) : getLocation(this.Ua), end_mark, end_mark);
      fn(this.a, event, this.A);
      /** @type {null} */
      this.A = null;
    }
    if (this.g) {
      callback(this.g, "close");
    }
    this.disconnect();
  };
  /**
   * @param {string} value
   * @param {!Object} id
   * @return {undefined}
   */
  Node.prototype.ga = function(value, id) {
    var self = this;
    if ("connect" == value) {
      flip(this.g, this.Fa);
      this.na();
    } else {
      if ("result" == value) {
        value = id.code;
        this.la(value, "failed" == value ? Error(id.data || "") : id.data);
      } else {
        if ("check" == value) {
          this.a.setTimeout(function() {
            return show(self);
          }, 200);
        }
      }
    }
  };
  /**
   * @param {number} value
   * @param {string} code
   * @param {string} container
   * @param {string} options
   * @param {string} callsiteNames
   * @return {undefined}
   */
  var constructor = function(value, code, container, options, callsiteNames) {
    /** @type {number} */
    this.a = value;
    /** @type {string} */
    this.ac = code;
    /** @type {string} */
    this.bc = container;
    /** @type {string} */
    this.o = options;
    /** @type {string} */
    this.vc = callsiteNames;
  };
  /**
   * @return {?}
   */
  constructor.prototype.Ea = function() {
    var fns = this;
    var b = new initialize(this.ac, this.bc, "redirect", this.o, this.vc, false);
    return new Promise(function(encoding) {
      fn(fns.a, b, encoding);
    });
  };
  /**
   * @return {undefined}
   */
  var TypeWidget = function() {
    /** @type {!Window} */
    var e = window;
    var siteEntry = this;
    /** @type {string} */
    this.version = "1.23";
    /** @type {!Window} */
    this.a = e;
    /** @type {string} */
    this.F = e.location.hash;
    this.lb = {};
    this.mb = {};
    /** @type {null} */
    this.Hb = null;
    new Promise(function(size) {
      siteEntry.Hb = size;
    });
  };
  /**
   * @param {!Object} params
   * @param {string} data
   * @param {!Function} uri
   * @return {?}
   */
  var save = function(params, data, uri) {
    var message = new init(params, data, uri);
    return message.connect().then(function() {
      return message;
    });
  };
  /**
   * @param {string} name
   * @param {!Function} fn
   * @param {!Function} value
   * @param {!Object} i
   * @param {string} s
   * @return {?}
   */
  TypeWidget.prototype.open = function(name, fn, value, i, s) {
    return {
      Xc : format(this, name, fn, value, i, s).Za()
    };
  };
  /**
   * @param {(number|string)} name
   * @param {!Object} fn
   * @param {!Function} type
   * @param {!Object} url
   * @param {string} key
   * @return {?}
   */
  var validate = function(name, fn, type, url, key) {
    var result = format(name, "GPAY", fn, type, url, key);
    return result.Wa.then(function() {
      return result;
    });
  };
  /**
   * @param {string} n
   * @param {?} val
   * @return {undefined}
   */
  TypeWidget.prototype.wa = function(n, val) {
    var item = this.lb[n];
    if (!item) {
      /** @type {!Array} */
      item = [];
      /** @type {!Array} */
      this.lb[n] = item;
    }
    item.push(val);
    item = this.mb[n];
    if (!item && this.F) {
      try {
        var window = this.a;
        var i = all(this.F).__WA_RES__;
        if (i) {
          /** @type {*} */
          var e = JSON.parse(i);
          if (e && e.requestId == n) {
            var str = window.location.hash;
            if (str) {
              /** @type {string} */
              var h = encodeURIComponent("__WA_RES__") + "=";
              /** @type {number} */
              i = -1;
              do {
                if (i = str.indexOf(h, i), -1 != i) {
                  var c = 0 < i ? str.substring(i - 1, i) : "";
                  if ("" == c || "?" == c || "#" == c || "&" == c) {
                    var startpos = str.indexOf("&", i + 1);
                    if (-1 == startpos) {
                      startpos = str.length;
                    }
                    str = str.substring(0, i) + str.substring(startpos + 1);
                  } else {
                    i++;
                  }
                }
              } while (-1 != i && i < str.length);
            }
            var hash = str;
            hash = hash || "";
            if (hash != window.location.hash && window.history && window.history.replaceState) {
              try {
                window.history.replaceState(window.history.state, "", hash);
              } catch (K) {
              }
            }
            var content = e.code;
            var options = e.data;
            var template = e.origin;
            var templateName = window.document.referrer && getLocation(window.document.referrer);
            item = new constructor(window, content, options, template, template == templateName);
          } else {
            /** @type {null} */
            item = null;
          }
        } else {
          /** @type {null} */
          item = null;
        }
      } catch (A) {
        createCard(A);
        this.Hb(A);
      }
      if (item) {
        this.mb[n] = item;
      }
    }
    if (n = item) {
      reject(n, val);
    }
  };
  /**
   * @param {(number|string)} node
   * @param {string} value
   * @param {!Function} options
   * @param {!Function} name
   * @param {!Object} model
   * @param {string} target
   * @return {?}
   */
  var format = function(node, value, options, name, model, target) {
    var result = new Node(node.a, value, options, name, model, target);
    result.open().then(function() {
      trigger(node, value, result);
    });
    return result;
  };
  /**
   * @param {string} obj
   * @param {?} iterator
   * @return {undefined}
   */
  var reject = function(obj, iterator) {
    Promise.resolve().then(function() {
      iterator(obj);
    });
  };
  /**
   * @param {(number|string)} b
   * @param {string} name
   * @param {string} data
   * @return {undefined}
   */
  var trigger = function(b, name, data) {
    var arbAry = b.lb[name];
    if (arbAry) {
      arbAry.forEach(function(val) {
        reject(data, val);
      });
    }
    /** @type {string} */
    b.mb[name] = data;
  };
  var options = {
    sb : "PAYMENT_AUTHORIZATION",
    Rb : "SHIPPING_ADDRESS",
    Sb : "SHIPPING_OPTION",
    Vb : "UNKNOWN_INTENT"
  };
  /**
   * @param {string} root
   * @param {string} name
   * @param {?} option
   * @param {string} config
   * @return {undefined}
   */
  var Chord = function(root, name, option, config) {
    /** @type {string} */
    this.j = root;
    this.Va = name || false;
    this.ub = option || new TypeWidget;
    this.Db = new Subsection;
    /** @type {null} */
    this.ya = this.Y = null;
    /** @type {boolean} */
    this.ob = false;
    /** @type {null} */
    this.Ab = this.b = null;
    this.Ib = config || null;
    /** @type {null} */
    this.M = this.za = null;
    /** @type {number} */
    this.oc = 3E4;
    if (this.Va) {
      text("\n.google-payments-dialog {\n    animation: none 0s ease 0s 1 normal none running;\n    background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n    background-blend-mode: normal;\n    border: 0 none #333;\n    border-radius: 8px 8px 0 0;\n    border-collapse: separate;\n    bottom: 0;\n    box-shadow: #808080 0 3px 0 0, #808080 0 0 22px;\n    box-sizing: border-box;\n    letter-spacing: normal;\n    max-height: 100%;\n    overflow: visible;\n    position: fixed;\n    width: 100%;\n    z-index: 2147483647;\n    -webkit-appearance: none;\n    left: 0;\n}\n@media (min-width: 480px) {\n  .google-payments-dialog {\n    width: 480px !important;\n    left: -240px !important;\n    margin-left: calc(100vw - 100vw / 2) !important;\n  }\n}\n.google-payments-dialogContainer {\n  background-color: rgba(0,0,0,0.26);\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  right: 0;\n}\n.iframeContainer {\n  -webkit-overflow-scrolling: touch;\n}\n");
      text("\n.google-payments-dialogCenter {\n  animation: none 0s ease 0s 1 normal none running;\n  background-blend-mode: normal;\n  background: none 0 0 / auto repeat scroll padding-box border-box #fff;\n  border-collapse: separate;\n  border-radius: 8px;\n  border: 0px none #333;\n  bottom: auto;\n  box-shadow: #808080 0 0 22px;\n  box-sizing: border-box;\n  left: -240px;\n  letter-spacing: normal;\n  margin-left: calc(100vw - 100vw / 2) !important;\n  max-height: 90%;\n  overflow: visible;\n  position: absolute;\n  top: 100%;\n  transform: scale(0.8);\n  width: 480px;\n  z-index: 2147483647;\n  -webkit-appearance: none;\n}\n@media (min-height: 667px) {\n  .google-payments-dialogCenter {\n    max-height: 600px;\n  }\n}\n.google-payments-activeContainer {\n  top: 50%;\n  transform: scale(1.0) translateY(-50%);\n}\n");
    }
  };
  /**
   * @param {string} other
   * @return {undefined}
   */
  Chord.prototype.wa = function(other) {
    if (!this.Y) {
      /** @type {string} */
      this.Y = other;
      this.ub.wa("GPAY", this.hc.bind(this));
    }
  };
  /**
   * @param {?} c
   * @return {undefined}
   */
  Chord.prototype.hc = function(c) {
    var app = this;
    teardown(this.Db);
    this.Y(c.Ea().then(function(state) {
      if ("TIN" != app.j && state.origin != pages(app)) {
        throw Error("channel mismatch");
      }
      var options = state.data;
      if (options.redirectEncryptedCallbackData) {
        return $c = 3, request(app, options.redirectEncryptedCallbackData).then(function(key) {
          /** @type {!Object} */
          var f = Object.assign({}, options);
          delete f.redirectEncryptedCallbackData;
          return Object.assign(f, key);
        });
      }
      if (!state.cb || !state.sc) {
        throw Error("channel mismatch");
      }
      return options;
    }, function(error) {
      var msg = error.message;
      error = error.message;
      try {
        /** @type {*} */
        error = JSON.parse(msg.substring(7));
      } catch (e) {
      }
      if (error.statusCode && -1 == ["DEVELOPER_ERROR", "MERCHANT_ACCOUNT_ERROR"].indexOf(error.statusCode)) {
        error = {
          statusCode : "CANCELED"
        };
      }
      if ("AbortError" == error) {
        error = {
          statusCode : "CANCELED"
        };
      }
      return Promise.reject(error);
    }));
  };
  /**
   * @param {!Object} options
   * @param {?} data
   * @return {?}
   */
  var request = function(options, data) {
    return new Promise(function(notify_success, callback) {
      var res = app(options);
      /** @type {!XMLHttpRequest} */
      var xhr = new XMLHttpRequest;
      xhr.open("POST", res, true);
      if ("withCredentials" in xhr) {
        /** @type {boolean} */
        xhr.withCredentials = true;
      }
      /**
       * @return {undefined}
       */
      xhr.onreadystatechange = function() {
        if (!(2 > xhr.readyState)) {
          if (100 > xhr.status || 599 < xhr.status) {
            /** @type {null} */
            xhr.onreadystatechange = null;
            callback(Error("Unknown HTTP status " + xhr.status));
          } else {
            if (4 == xhr.readyState) {
              try {
                notify_success(JSON.parse(xhr.responseText));
              } catch (identifierPositions) {
                callback(identifierPositions);
              }
            }
          }
        }
      };
      /**
       * @return {undefined}
       */
      xhr.onerror = function() {
        callback(Error("Network failure"));
      };
      /**
       * @return {undefined}
       */
      xhr.onabort = function() {
        callback(Error("Request aborted"));
      };
      xhr.send(data);
    });
  };
  /**
   * @param {!Object} opts
   * @return {?}
   */
  Chord.prototype.m = function(opts) {
    var options = this;
    return new Promise(function(callback, reject) {
      if (equal(opts)) {
        callback({
          result : false
        });
      } else {
        /** @type {string} */
        var ua = window.navigator.userAgent;
        /** @type {boolean} */
        var custom = 0 < ua.indexOf("OPA/") && 0 < ua.indexOf("AppleWebKit");
        /** @type {boolean} */
        var g = 0 < ua.indexOf("FxiOS");
        /** @type {boolean} */
        var b = 0 < ua.indexOf("Instagram");
        /** @type {boolean} */
        var a = 0 < ua.indexOf("FB_IAB");
        if ((0 < ua.indexOf("GSA/") && 0 < ua.indexOf("Safari") || custom || g || b || a) && !options.Va) {
          callback({
            result : false
          });
        } else {
          /** @type {boolean} */
          g = false;
          if (google.payments.api.ReadyToPayAdditionalBrowsers) {
            if (0 < ua.indexOf("UCMini")) {
              callback({
                result : false
              });
              return;
            }
            /** @type {boolean} */
            g = 0 < ua.indexOf("OPT") || 0 < ua.indexOf("UCBrowser");
          }
          /** @type {boolean} */
          var match = 0 < ua.indexOf("Chrome") || 0 < ua.indexOf("Firefox") || 0 < ua.indexOf("Safari") || g || custom;
          if (match && 2 <= opts.apiVersion && opts.existingPaymentMethodRequired) {
            opts.environment = options.j;
            m(opts, 6, ["isReadyToPayResponse", "isReadyToPayError"], function(simpleselect) {
              var connection = {
                result : match
              };
              if (opts.existingPaymentMethodRequired) {
                if (simpleselect.data.isReadyToPayError) {
                  reject({
                    statusCode : "DEVELOPER_ERROR",
                    statusMessage : "Ready to pay error. Cause : " + simpleselect.data.isReadyToPayError
                  });
                } else {
                  /** @type {boolean} */
                  connection.paymentMethodPresent = "READY_TO_PAY" == simpleselect.data.isReadyToPayResponse;
                }
              }
              callback(connection);
            });
          } else {
            callback({
              result : match
            });
          }
        }
      }
    });
  };
  /**
   * @param {!Object} config
   * @return {undefined}
   */
  Chord.prototype.I = function(config) {
    if (this.Va) {
      this.ma(config);
      var options = render(this, config);
      var promise = load(this, options.container, options.iframe, config);
      this.ya = {
        container : options.container,
        iframe : options.iframe,
        request : config,
        dataPromise : promise
      };
    }
  };
  /**
   * @param {!Object} opts
   * @return {?}
   */
  Chord.prototype.v = function(opts) {
    var self = this;
    if (!(opts.swg || opts.apiVersion)) {
      /** @type {number} */
      opts.apiVersion = 1;
    }
    if (opts.forceRedirect && this.M) {
      throw Error("Callback is not supported in redirect mode");
    }
    opts.environment = this.j;
    this.ma(opts);
    if (this.Va) {
      /** @type {number} */
      $c = 1;
      if (this.ya) {
        var options = this.ya;
        var promise = this.ya.dataPromise;
        /** @type {null} */
        this.ya = null;
      } else {
        options = render(this, opts);
        promise = load(this, options.container, options.iframe, opts);
      }
      setup(this, options.container, options.iframe, opts);
      history.pushState({}, "", window.location.href);
      /**
       * @param {!Object} o
       * @return {undefined}
       */
      var init = function(o) {
        o.preventDefault();
        o = options;
        if (o.container.parentNode) {
          self.Ab(Promise.reject({
            errorCode : "CANCELED"
          }));
          put(o.container, o.iframe);
          if (self.b) {
            self.b.disconnect();
          }
        }
        window.removeEventListener("popstate", init);
      };
      window.addEventListener("popstate", init);
      /** @type {!Promise} */
      opts = new Promise(function(navigatorType) {
        self.Ab = navigatorType;
      });
      this.Y(Promise.race([promise, opts]));
    } else {
      return $c = opts.forceRedirect ? 3 : 2, validate(this.ub, "TIN" == this.j ? "/ui/pay" : pages(this) + "/gp/p/ui/pay", opts.forceRedirect ? $("_top") : $("gp-js-popup"), opts, describe(opts)).then(function(event) {
        self.Db.show(event && event.Za());
        event.onMessage(function(options) {
          if ("partialPaymentDataCallback" == options.type) {
            register(self, event, options.data);
          } else {
            if ("fullPaymentDataCallback" == options.type) {
              listen(self, event, options.data);
            }
          }
        });
      });
    }
  };
  /**
   * @param {!Object} msg
   * @return {?}
   */
  var describe = function(msg) {
    var spec = {
      width : 600,
      height : 600
    };
    if (!(msg.forceRedirect || msg.swg)) {
      /** @type {boolean} */
      spec.disableRedirectFallback = true;
    }
    return spec;
  };
  /**
   * @param {!Object} data
   * @return {?}
   */
  var pages = function(data) {
    return "LOCAL" == data.j ? "" : "https://" + ("PREPROD" == data.j ? "pay-preprod.sandbox" : "SANDBOX" == data.j ? "pay.sandbox" : "CANARY" == data.j ? "ibfe-canary.corp" : "pay") + ".google.com";
  };
  /**
   * @param {!Object} app
   * @return {?}
   */
  var app = function(app) {
    /** @type {string} */
    var s = pages(app) + "/gp/p/apis/buyflow/process";
    if (app.Ib) {
      /** @type {string} */
      s = s + ("?rk=" + encodeURIComponent(app.Ib));
    }
    return s;
  };
  /**
   * @param {string} name
   * @param {?} i
   * @return {?}
   */
  var link = function(name, i) {
    /** @type {string} */
    var relyingParty = window.location.origin;
    var d = $("https://pay.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
    if ("CANARY" == name) {
      d = $("https://ibfe-canary.corp.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
    } else {
      if ("SANDBOX" == name || "PREPROD" == name) {
        d = $("https://pay" + ("PREPROD" == name ? "-preprod" : "") + ".sandbox.google.com/gp/p/ui/pay?origin=%{origin}&coordination_token=%{coordinationToken}");
      }
    }
    return fetch(d, {
      coordinationToken : void 0 === i ? "" : i,
      origin : relyingParty
    });
  };
  /**
   * @param {!Node} m
   * @param {!Object} s
   * @return {undefined}
   */
  var put = function(m, s) {
    t(s, "all 250ms ease 0s");
    /** @type {string} */
    s.height = "0px";
    setTimeout(function() {
      if (m.parentNode) {
        m.parentNode.removeChild(m);
      }
    }, 250);
  };
  /**
   * @param {?} that
   * @param {!Object} options
   * @return {?}
   */
  var render = function(that, options) {
    /** @type {string} */
    options = options.i && options.i.renderContainerCenter ? "google-payments-dialogCenter" : "google-payments-dialog";
    /** @type {!Element} */
    var c = document.createElement("div");
    c.classList.add("google-payments-dialogContainer");
    /** @type {!Element} */
    var element = document.createElement("div");
    element.classList.add("iframeContainer");
    /** @type {!Element} */
    var iframe = document.createElement("iframe");
    iframe.classList.add(options);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    element.appendChild(iframe);
    c.appendChild(element);
    document.body.appendChild(c);
    options = {
      container : c,
      iframe : iframe
    };
    /** @type {!Element} */
    c = options.iframe;
    /** @type {!Element} */
    element = options.container;
    element.addEventListener("click", proxy(that.$b, that, options));
    /** @type {string} */
    element.style.display = "none";
    /** @type {string} */
    c.style.display = "none";
    /** @type {string} */
    c.height = "0px";
    t(c, "all 250ms ease 0s");
    /** @type {boolean} */
    that.ob = false;
    return options;
  };
  /**
   * @param {!Object} context
   * @return {undefined}
   */
  Chord.prototype.$b = function(context) {
    if (context.container.parentNode) {
      history.back();
    }
  };
  /**
   * @param {?} parent
   * @param {!Element} list
   * @param {!Object} key
   * @param {!Object} element
   * @return {undefined}
   */
  var setup = function(parent, list, key, element) {
    /** @type {string} */
    list.style.display = "block";
    /** @type {string} */
    key.style.display = "block";
    setTimeout(function() {
      /** @type {string} */
      key.height = "280px";
      if (element.i && element.i.renderContainerCenter) {
        key.classList.add("google-payments-activeContainer");
      }
      setTimeout(function() {
        /** @type {boolean} */
        parent.ob = true;
        if (parent.za) {
          t(key, parent.za.transition);
          key.height = parent.za.height;
          /** @type {null} */
          parent.za = null;
        }
      }, 250);
    }, 1);
  };
  /**
   * @param {!Object} a
   * @param {!Object} b
   * @return {undefined}
   */
  var t = function(a, b) {
    write(a, b);
    a.style.setProperty("-webkit-transition", b);
  };
  /**
   * @param {!Object} options
   * @param {!Node} instance
   * @param {!Object} obj
   * @param {!Object} opts
   * @return {?}
   */
  var load = function(options, instance, obj, opts) {
    if (!(opts.swg || opts.apiVersion)) {
      /** @type {number} */
      opts.apiVersion = 1;
    }
    /** @type {string} */
    var name = "";
    if (opts.i && opts.i.coordinationToken) {
      name = opts.i.coordinationToken;
    }
    opts.environment = options.j;
    var f;
    name = link(options.j, name);
    return save(obj, name, opts).then(function(i) {
      /** @type {!Object} */
      options.b = i;
      i.onMessage(function(option) {
        if ("partialPaymentDataCallback" == option.type) {
          register(options, i, option.data);
        } else {
          if ("fullPaymentDataCallback" == option.type) {
            listen(options, i, option.data);
          } else {
            if ("resize" == option.type) {
              if (options.ob) {
                if (!f) {
                  /** @type {number} */
                  f = Date.now();
                }
                if (Date.now() < f + 250) {
                  t(obj, option.transition + ", height 250ms");
                } else {
                  t(obj, option.transition);
                }
                obj.height = option.height;
              } else {
                options.za = {
                  height : option.height,
                  transition : option.transition
                };
              }
            }
          }
        }
      });
      return i.Ea();
    }).then(function(simpleselect) {
      put(instance, obj);
      history.back();
      return simpleselect.data;
    }, function(e) {
      put(instance, obj);
      history.back();
      return Promise.reject(e);
    });
  };
  /**
   * @param {!Object} obj
   * @param {!Object} data
   * @return {?}
   */
  var ajax = function(obj, data) {
    return new Promise(function(canCreateDiscussions, cb) {
      setTimeout(function() {
        cb({
          reason : "OTHER_ERROR",
          intent : data,
          message : "REQUEST_TIMEOUT"
        });
      }, obj.oc);
    });
  };
  /**
   * @param {!Object} data
   * @param {!Object} f
   * @param {?} fallback
   * @return {undefined}
   */
  var listen = function(data, f, fallback) {
    Promise.resolve(Promise.race([ajax(data, options.sb), data.M.onPaymentAuthorized(fallback)])).then(function(instancesTypes) {
      f.message({
        type : "paymentAuthorizationResponse",
        data : instancesTypes
      });
    }, function(data) {
      listener({
        X : "loadPaymentData",
        errorMessage : "An error occurred in call back, please try to avoid this by setting structured error in callback response"
      });
      f.message({
        type : "paymentAuthorizationResponse",
        data : {
          error : {
            reason : data.reason || "OTHER_ERROR",
            intent : data.intent || "PAYMENT_AUTHORIZATION",
            message : data.message
          }
        }
      });
      if ("REQUEST_TIMEOUT" === data.message) {
        log({
          eventType : 27,
          merchantCallbackInfo : {
            callbackTrigger : 2
          }
        });
      }
    });
  };
  /**
   * @param {!Object} data
   * @param {!Object} item
   * @param {?} process
   * @return {undefined}
   */
  var register = function(data, item, process) {
    Promise.resolve(Promise.race([ajax(data, process.callbackTrigger in options ? options[process.callbackTrigger] : options.Vb), data.M.onPaymentDataChanged(process)])).then(function(instancesTypes) {
      item.message({
        type : "paymentDataCallbackResponse",
        data : instancesTypes
      });
    }, function(params) {
      listener({
        X : "loadPaymentData",
        errorMessage : "An error occurred in call back, please try to avoid this by setting structured error in callback response"
      });
      item.message({
        type : "paymentDataCallbackResponse",
        data : {
          error : {
            reason : params.reason || "OTHER_ERROR",
            intent : params.intent || process.callbackTrigger || "UNKNOWN_INTENT",
            message : params.message
          }
        }
      });
      if ("REQUEST_TIMEOUT" === params.message) {
        log({
          eventType : 26,
          merchantCallbackInfo : {
            callbackTrigger : fontsDirectory[process.callbackTrigger] || 0
          }
        });
      }
    });
  };
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  Chord.prototype.ma = function(a) {
    var b = {
      startTimeMs : Date.now()
    };
    /** @type {!Object} */
    a.i = a.i ? Object.assign(b, a.i) : b;
  };
  /**
   * @return {undefined}
   */
  var p = function() {
  };
  /**
   * @param {?} value
   * @return {?}
   */
  p.prototype.m = function(value) {
    if (parseFloat(value)) {
      return value.existingPaymentMethodRequired ? Promise.resolve({
        result : true,
        paymentMethodPresent : true
      }) : Promise.resolve({
        result : true
      });
    }
    throw Error("No Upi payment method found in handler");
  };
  /**
   * @param {!Object} options
   * @param {!Object} x
   * @param {?} r
   * @return {undefined}
   */
  p.prototype.v = function(options, x, r) {
    var args = x.parameters;
    var transaction = options.transactionInfo;
    /** @type {!Array} */
    var selectedSiblings = google.payments.api.AllowUsDeviceForTez ? [{
      supportedMethods : ["https://pwp-server.appspot.com/pay-teamfood"],
      data : {
        pa : "redbus@axisbank",
        pn : args.payeeName,
        tr : args.transactionReferenceId,
        url : args.referenceUrl,
        mc : "4131",
        tn : "Purchase in Merchant"
      }
    }] : [{
      supportedMethods : ["https://tez.google.com/pay"],
      data : {
        pa : args.payeeVpa,
        pn : args.payeeName,
        tr : args.transactionReferenceId,
        url : args.referenceUrl,
        mc : args.mcc,
        tn : transaction.transactionNote
      }
    }];
    if (args.transactionId) {
      selectedSiblings[0].data.tid = args.transactionId;
    }
    var id = new PaymentRequest(selectedSiblings, {
      total : {
        label : "Total",
        amount : {
          currency : transaction.currencyCode,
          value : transaction.totalPrice
        }
      },
      displayItems : [{
        label : "Original Amount",
        amount : {
          currency : transaction.currencyCode,
          value : transaction.totalPrice
        }
      }]
    });
    r(getJSON(id).then(function(a) {
      if (a) {
        a = count(id);
      } else {
        /** @type {!Location} */
        a = window.location;
        /** @type {string} */
        var v = google.payments.api.AllowUsDeviceForTez ? "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user.teamfood " : "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user";
        var b = getWindow(a);
        if (b && (!a || !(a instanceof b.Location) && a instanceof b.Element)) {
          set("Argument is not a Location (or a non-Element mock); got: %s", get(a));
        }
        v = v instanceof RegExp ? v : formatValue(v);
        a.replace(keys(v));
        /** @type {!Promise<?>} */
        a = Promise.reject({
          errorMessage : "Cannot redirect to Tez page in Google Play."
        });
      }
      return a;
    }).then(function(result) {
      /** @type {*} */
      result = JSON.parse(result.tezResponse);
      if ("FAILURE" === result.Status) {
        switch(result.responseCode) {
          case "ZM":
            result = {
              errorCode : 3,
              errorMessage : "Payment failure due to invalid MPIN."
            };
            break;
          case "Z9":
            result = {
              errorCode : 3,
              errorMessage : "Payment failure due to insufficient funds."
            };
            break;
          case "91":
            result = {
              errorCode : 1,
              errorMessage : "Payment failure due to transaction timeout or connection issue."
            };
            break;
          default:
            result = {
              errorMessage : "Payment cancelled."
            };
        }
        /** @type {!Promise<?>} */
        result = Promise.reject(result);
      } else {
        /** @type {!Promise<{apiVersion: ?, apiVersionMinor: ?, paymentMethodData: {tokenizationData: {token: {protocolVersion: string, signature: string, signedMessage: {payeeVpa: ?, paymentMethodType: string, status: ?, transactionId: ?, transactionInfo: ?, transactionReferenceId: ?}}, type: string}, type: ?}}>} */
        result = Promise.resolve({
          apiVersion : options.apiVersion,
          apiVersionMinor : options.apiVersionMinor,
          paymentMethodData : {
            type : x.type,
            tokenizationData : {
              type : "DIRECT",
              token : {
                protocolVersion : "ECv1",
                signature : "",
                signedMessage : {
                  paymentMethodType : "UPI",
                  payeeVpa : x.parameters.payeeVpa,
                  status : result.Status,
                  transactionReferenceId : x.parameters.transactionReferenceId,
                  transactionId : x.parameters.transactionId ? x.parameters.transactionId : result.txnId,
                  transactionInfo : options.transactionInfo
                }
              }
            }
          }
        });
      }
      return result;
    })["catch"](function(error) {
      /** @type {string} */
      error.statusCode = "CANCELED";
      return Promise.reject(error);
    }));
  };
  /**
   * @param {!Object} $grid
   * @return {?}
   */
  var count = function($grid) {
    return $grid.show().then(function(tmp) {
      tmp.complete("success");
      return tmp.details;
    });
  };
  /**
   * @param {?} height
   * @return {?}
   */
  var getJSON = function(height) {
    /** @type {(null|string)} */
    var trusted = window.sessionStorage.getItem("google.payments.api.storage.upi.canMakePaymentCache");
    return trusted ? Promise.resolve("true" === trusted) : height.canMakePayment ? height.canMakePayment().then(function(body) {
      if (body) {
        window.sessionStorage.setItem("google.payments.api.storage.upi.canMakePaymentCache", body.toString());
      }
      return body;
    }) : Promise.resolve(true);
  };
  /** @type {!Array<string>} */
  var extracted_domains = "actions.google.com amp-actions.sandbox.google.com amp-actions-staging.sandbox.google.com amp-actions-autopush.sandbox.google.com payments.developers.google.com payments.google.com".split(" ");
  /**
   * @param {!Object} a
   * @param {!ArrayBuffer} f
   * @param {string} m
   * @param {!Function} data
   * @return {undefined}
   */
  var copy = function(a, f, m, data) {
    /** @type {!ArrayBuffer} */
    this.ab = f;
    niceName(a);
    /** @type {null} */
    this.Fb = null;
    this.j = a.environment || "TEST";
    if (!viewportCenter) {
      viewportCenter = -1 != extracted_domains.indexOf(window.location.hostname) && a.i && a.i.googleTransactionId ? a.i.googleTransactionId : getDevice(this.j);
    }
    /** @type {!Object} */
    this.ia = a;
    this.W = new Chord(this.j, m, data, a.i && a.i.redirectKey);
    /** @type {null} */
    this.M = null;
    /** @type {number} */
    this.ea = 5;
    if (a.paymentDataCallback) {
      a.paymentDataCallbacks = {
        onPaymentDataChanged : a.paymentDataCallback
      };
    }
    if (a.paymentDataCallbacks) {
      this.M = a.paymentDataCallbacks;
      this.W.M = a.paymentDataCallbacks;
    }
    f = parse();
    this.qa = !f || m || a.paymentDataCallbacks ? this.W : new e(this.j);
    this.Ob = new p;
    this.W.wa(this.bb.bind(this));
    this.qa.wa(this.bb.bind(this));
    if (apply()) {
      /** @type {number} */
      $c = 5;
    } else {
      if (f) {
        /** @type {number} */
        $c = 4;
      }
    }
    interestingPoint = viewportCenter;
    log({
      eventType : 9,
      clientLatencyStartMs : hasOwnProperty()
    });
    window.addEventListener("message", function(e) {
      if (-1 != extracted_domains.indexOf(window.location.hostname) && "logPaymentData" === e.data.name) {
        log(e.data.data);
      }
    });
  };
  var viewportCenter;
  /**
   * @param {!Object} res
   * @return {?}
   */
  copy.prototype.m = function(res) {
    if (res) {
      var options = {};
      if (this.ia.environment) {
        options.environment = this.ia.environment;
      }
      if (this.ia.merchantInfo) {
        options.merchantInfo = this.ia.merchantInfo;
      }
      if (this.ia.i) {
        options.i = this.ia.i;
      }
      /** @type {!Object} */
      res = Object.assign({}, options, res);
    }
    /** @type {number} */
    var existed = hasOwnProperty();
    var message = match() || clone(res);
    if (message) {
      return new Promise(function(canCreateDiscussions, reject) {
        listener({
          X : "isReadyToPay",
          errorMessage : message
        });
        log({
          eventType : 0,
          error : 2
        });
        reject({
          statusCode : "DEVELOPER_ERROR",
          statusMessage : message
        });
      });
    }
    res = go(this, res);
    res.then(function(canCreateDiscussions) {
      log({
        eventType : 0,
        clientLatencyStartMs : existed,
        isReadyToPayApiResponse : canCreateDiscussions
      });
      return canCreateDiscussions;
    });
    return res;
  };
  /**
   * @param {!Object} options
   * @param {!Object} data
   * @return {?}
   */
  var go = function(options, data) {
    if (parseFloat(data)) {
      return options.Ob.m(data);
    }
    if (parse() && !a(data)) {
      if (2 <= data.apiVersion) {
        return store(options, data);
      }
      var name = options.W.m(data);
      options = options.qa.m(data);
      return equal(data) && !apply() ? options : options.then(function() {
        return name;
      });
    }
    return options.W.m(data);
  };
  /**
   * @param {!Object} options
   * @param {(Object|string)} value
   * @return {?}
   */
  var store = function(options, value) {
    /** @type {!Promise<{result: boolean}>} */
    var abc = Promise.resolve({
      result : false
    });
    if (value.existingPaymentMethodRequired) {
      /** @type {!Promise<{paymentMethodPresent: boolean, result: boolean}>} */
      abc = Promise.resolve({
        result : false,
        paymentMethodPresent : false
      });
    }
    /** @type {!Promise} */
    var val = abc;
    if (replace(value, "CRYPTOGRAM_3DS")) {
      /** @type {*} */
      val = JSON.parse(JSON.stringify(value));
      /** @type {number} */
      var i = 0;
      for (; i < val.allowedPaymentMethods.length; i++) {
        if ("CARD" == val.allowedPaymentMethods[i].type) {
          /** @type {!Array} */
          val.allowedPaymentMethods[i].parameters.allowedAuthMethods = ["CRYPTOGRAM_3DS"];
        }
      }
      val = options.qa.m(val);
    }
    /** @type {!Promise} */
    var id = abc;
    if (replace(value, "PAN_ONLY")) {
      id = options.W.m(value);
    }
    return apply() ? val.then(function() {
      return id;
    }) : val.then(function(res) {
      return 1 == (res && res.result) ? res : id;
    });
  };
  data = copy.prototype;
  /**
   * @param {!Object} i
   * @return {undefined}
   */
  data.I = function(i) {
    var message = match() || success(i);
    if (message) {
      listener({
        X : "prefetchPaymentData",
        errorMessage : message
      });
    } else {
      this.ma(i);
      if (parse() && !a(i)) {
        this.qa.I(i);
      } else {
        this.W.I(i);
      }
    }
  };
  /**
   * @return {undefined}
   */
  data.va = function() {
  };
  /**
   * @param {string} x
   * @return {undefined}
   */
  data.v = function(x) {
    var result = this;
    log({
      eventType : 5
    });
    var message = match() || success(x);
    /** @type {number} */
    this.ea = x && x.swg ? 6 : 5;
    if (message) {
      this.ab(new Promise(function(canCreateDiscussions, reject) {
        log({
          eventType : 1,
          error : 2,
          buyFlowMode : result.ea
        });
        listener({
          X : "loadPaymentData",
          errorMessage : message
        });
        reject({
          statusCode : "DEVELOPER_ERROR",
          statusMessage : message
        });
      }));
    } else {
      if (this.M || x.callbackIntents) {
        var message = f(x, this.M);
        if (message) {
          this.ab(new Promise(function(canCreateDiscussions, reject) {
            log({
              eventType : 1,
              error : 2,
              buyFlowMode : result.ea
            });
            listener({
              X : "loadPaymentData",
              errorMessage : message
            });
            reject({
              statusCode : "DEVELOPER_ERROR",
              statusMessage : message
            });
          }));
          return;
        }
      }
      var h = parseFloat(x);
      if (h) {
        this.Ob.v(x, h, this.bb.bind(this));
      } else {
        /** @type {number} */
        this.Fb = hasOwnProperty();
        this.ma(x);
        if (apply() && (!ad || x.swg) || a(x) || this.M) {
          this.W.v(x);
        } else {
          this.qa.v(x);
        }
      }
    }
  };
  /**
   * @param {?} data
   * @return {?}
   */
  data.fa = function(data) {
    data = void 0 === data ? {} : data;
    data = void 0 === data ? {} : data;
    if (google.payments.api.EnableDynamicGpayButton && res.includes(createFeed()) && "short" != data.buttonType) {
      data = bind(data);
    } else {
      if (!vc) {
        text("\n.gpay-button {\n  background-origin: content-box;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border: 0px;\n  border-radius: 4px;\n  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 1px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;\n  cursor: pointer;\n  height: 40px;\n  min-height: 40px;\n  padding: 11px 24px;\n}\n\n.gpay-button.black {\n  background-color: #000;\n  box-shadow: none;\n  padding: 12px 24px 10px;\n}\n\n.gpay-button.white {\n  background-color: #fff;\n}\n\n.gpay-button.short {\n  min-width: 90px;\n  width: 160px;\n}\n\n.gpay-button.black.short {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/dark_gpay.svg);\n}\n\n.gpay-button.white.short {\n  background-image: url(https://www.gstatic.com/instantbuy/svg/light_gpay.svg);\n}\n\n.gpay-button.black.active {\n  background-color: #5f6368;\n}\n\n.gpay-button.black.hover {\n  background-color: #3c4043;\n}\n\n.gpay-button.white.active {\n  background-color: #fff;\n}\n\n.gpay-button.white.focus {\n  box-shadow: #e8e8e8 0 1px 1px 0, #e8e8e8 0 1px 3px;\n}\n\n.gpay-button.white.hover {\n  background-color: #f8f8f8;\n}\n");
        var input = navigator.language || navigator.Yc || "en";
        if ("en" != input) {
          input = input.substring(0, 2);
          if (!locales[input]) {
            /** @type {string} */
            input = "en";
          }
        }
        /** @type {string} */
        var userAgent = window.navigator.userAgent;
        /** @type {string} */
        userAgent = google.payments.api.EnablePngExtensionForButton && 0 < userAgent.indexOf("Safari") && (0 < userAgent.indexOf("iPhone") || 0 < userAgent.indexOf("iPad")) ? "png" : "svg";
        text("\n    .gpay-button.long {\n      min-width: " + locales[input] + "px;\n      width: 240px;\n    }\n\n    .gpay-button.white.long {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/light/" + input + "." + userAgent + ");\n    }\n\n    .gpay-button.black.long {\n      background-image: url(https://www.gstatic.com/instantbuy/svg/dark/" + input + "." + userAgent + ");\n    }");
        /** @type {boolean} */
        vc = true;
      }
      /** @type {!Element} */
      input = document.createElement("button");
      createElement(input);
      if (!Object.values(details).includes(data.buttonType)) {
        /** @type {string} */
        data.buttonType = "long";
      }
      if (!Object.values(tables).includes(data.buttonColor)) {
        /** @type {string} */
        data.buttonColor = "default";
      }
      if ("default" == data.buttonColor) {
        /** @type {string} */
        data.buttonColor = "black";
      }
      input.setAttribute("class", "gpay-button " + activate(data));
      remove(input);
      if (data.onClick) {
        input.addEventListener("click", data.onClick);
      } else {
        throw Error("Parameter 'onClick' must be set.");
      }
      /** @type {!Element} */
      data = document.createElement("div");
      data.appendChild(input);
    }
    /** @type {number} */
    input = hasOwnProperty();
    log({
      eventType : 2,
      clientLatencyStartMs : input
    });
    return data;
  };
  /**
   * @param {!Object} c
   * @return {undefined}
   */
  data.bb = function(c) {
    var params = this;
    c = c.then(function(data) {
      if (data.error) {
        /** @type {!Error} */
        var error = Error();
        error.statusCode = data.error.statusCode;
        error.statusMessage = data.error.statusMessage;
        listener({
          X : "loadPaymentData",
          errorMessage : error.statusMessage
        });
        throw error;
      }
      return data;
    });
    c.then(function() {
      log({
        eventType : 1,
        clientLatencyStartMs : params.Fb,
        buyFlowMode : params.ea
      });
    })["catch"](function(error) {
      if (error.errorCode) {
        log({
          eventType : 1,
          error : error.errorCode,
          buyFlowMode : params.ea
        });
      } else {
        log({
          eventType : 1,
          error : 6,
          buyFlowMode : params.ea
        });
      }
    });
    this.ab(c);
  };
  /**
   * @param {!Object} a
   * @return {undefined}
   */
  data.ma = function(a) {
    var b = {
      googleTransactionId : viewportCenter
    };
    /** @type {!Object} */
    a.i = a.i ? Object.assign(b, a.i) : b;
  };
  /** @type {function(?): ?} */
  copy.prototype.createButton = copy.prototype.fa;
  /** @type {function(string): undefined} */
  copy.prototype.loadPaymentData = copy.prototype.v;
  /** @type {function(): undefined} */
  copy.prototype.notifyAvailableOffers = copy.prototype.va;
  /** @type {function(!Object): undefined} */
  copy.prototype.prefetchPaymentData = copy.prototype.I;
  /** @type {function(!Object): ?} */
  copy.prototype.isReadyToPay = copy.prototype.m;
  use("google.payments.api.PaymentsAsyncClient", copy);
  /** @type {function(!Object): ?} */
  copy.prototype.isReadyToPay = copy.prototype.m;
  /** @type {function(!Object): undefined} */
  copy.prototype.prefetchPaymentData = copy.prototype.I;
  /** @type {function(string): undefined} */
  copy.prototype.loadPaymentData = copy.prototype.v;
  /** @type {function(?): ?} */
  copy.prototype.createButton = copy.prototype.fa;
  /** @type {function(): undefined} */
  copy.prototype.notifyAvailableOffers = copy.prototype.va;
  /**
   * @param {number} b
   * @param {boolean} s
   * @return {undefined}
   */
  var v = function(b, s) {
    b = void 0 === b ? {} : b;
    this.gc = insert({}, window.gpayMerchantIdFromUrl ? {
      merchantInfo : {
        merchantId : window.gpayMerchantIdFromUrl
      }
    } : {}, window.gpayInitParams, b);
    this.Ga = new copy(this.gc, this.jc.bind(this), s);
    /** @type {null} */
    this.xa = null;
  };
  data = v.prototype;
  /**
   * @param {?} a
   * @return {undefined}
   */
  data.jc = function(a) {
    this.xa(a);
  };
  /**
   * @param {?} value
   * @return {?}
   */
  data.m = function(value) {
    return this.Ga.m(value);
  };
  /**
   * @param {!Object} c
   * @return {undefined}
   */
  data.I = function(c) {
    this.Ga.I(c);
  };
  /**
   * @return {undefined}
   */
  data.va = function() {
  };
  /**
   * @param {string} x
   * @return {?}
   */
  data.v = function(x) {
    var d = this;
    if (google.payments.api.EnablePwgTestExperiment) {
      console.log("ZOMBIEMONKEYATEMYBRAIN");
    }
    return (new Promise(function(followernum) {
      if (d.xa) {
        throw Error("This method can only be called one at a time.");
      }
      d.xa = followernum;
      d.Ga.v(x);
    })).then(function(canCreateDiscussions) {
      /** @type {null} */
      d.xa = null;
      return canCreateDiscussions;
    }, function(canCreateDiscussions) {
      /** @type {null} */
      d.xa = null;
      throw canCreateDiscussions;
    });
  };
  /**
   * @param {?} b
   * @return {?}
   */
  data.fa = function(b) {
    b = void 0 === b ? {} : b;
    return this.Ga.fa(b);
  };
  /** @type {function(?): ?} */
  v.prototype.createButton = v.prototype.fa;
  /** @type {function(string): undefined} */
  v.prototype.loadPaymentData = v.prototype.v;
  /** @type {function(): undefined} */
  v.prototype.notifyAvailableOffers = v.prototype.va;
  /** @type {function(!Object): undefined} */
  v.prototype.prefetchPaymentData = v.prototype.I;
  /** @type {function(?): ?} */
  v.prototype.isReadyToPay = v.prototype.m;
  use("google.payments.api.PaymentsClient", v);
  /** @type {function(?): ?} */
  v.prototype.isReadyToPay = v.prototype.m;
  /** @type {function(!Object): undefined} */
  v.prototype.prefetchPaymentData = v.prototype.I;
  /** @type {function(string): undefined} */
  v.prototype.loadPaymentData = v.prototype.v;
  /** @type {function(?): ?} */
  v.prototype.createButton = v.prototype.fa;
  /** @type {function(): undefined} */
  v.prototype.notifyAvailableOffers = v.prototype.va;
}).call(this);
