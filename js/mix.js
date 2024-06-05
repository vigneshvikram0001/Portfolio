/**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!(function (t) {
  "use strict";
  var e = null,
    n = null;
  !(function () {
    var e = ["webkit", "moz", "o", "ms"],
      n = t.document.createElement("div"),
      a = -1;
    for (a = 0; a < e.length && !t.requestAnimationFrame; a++)
      t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
    "undefined" == typeof n.nextElementSibling &&
      Object.defineProperty(t.Element.prototype, "nextElementSibling", {
        get: function () {
          for (var t = this.nextSibling; t; ) {
            if (1 === t.nodeType) return t;
            t = t.nextSibling;
          }
          return null;
        },
      }),
      (function (t) {
        t.matches =
          t.matches ||
          t.machesSelector ||
          t.mozMatchesSelector ||
          t.msMatchesSelector ||
          t.oMatchesSelector ||
          t.webkitMatchesSelector ||
          function (t) {
            return (
              Array.prototype.indexOf.call(
                this.parentElement.querySelectorAll(t),
                this
              ) > -1
            );
          };
      })(t.Element.prototype),
      Object.keys ||
        (Object.keys = (function () {
          var t = Object.prototype.hasOwnProperty,
            e = !1,
            n = [],
            a = -1;
          return (
            (e = !{ toString: null }.propertyIsEnumerable("toString")),
            (n = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor",
            ]),
            (a = n.length),
            function (i) {
              var o = [],
                r = "",
                s = -1;
              if (
                "object" != typeof i &&
                ("function" != typeof i || null === i)
              )
                throw new TypeError("Object.keys called on non-object");
              for (r in i) t.call(i, r) && o.push(r);
              if (e) for (s = 0; s < a; s++) t.call(i, n[s]) && o.push(n[s]);
              return o;
            }
          );
        })()),
      Array.isArray ||
        (Array.isArray = function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }),
      "function" != typeof Object.create &&
        (Object.create = (function (t) {
          var e = function () {};
          return function (n, a) {
            if (n !== Object(n) && null !== n)
              throw TypeError("Argument must be an object, or null");
            e.prototype = n || {};
            var i = new e();
            return (
              (e.prototype = null),
              a !== t && Object.defineProperties(i, a),
              null === n && (i.__proto__ = null),
              i
            );
          };
        })()),
      String.prototype.trim ||
        (String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }),
      Array.prototype.indexOf ||
        (Array.prototype.indexOf = function (t) {
          var e, n, a, i;
          if (null === this) throw new TypeError();
          if (((a = Object(this)), (i = a.length >>> 0), 0 === i)) return -1;
          if (
            ((e = 0),
            arguments.length > 1 &&
              ((e = Number(arguments[1])),
              e !== e
                ? (e = 0)
                : 0 !== e &&
                  e !== 1 / 0 &&
                  e !== -(1 / 0) &&
                  (e = (e > 0 || -1) * Math.floor(Math.abs(e)))),
            e >= i)
          )
            return -1;
          for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++)
            if (n in a && a[n] === t) return n;
          return -1;
        }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (t) {
          var e, n, a, i;
          if ("function" != typeof this) throw new TypeError();
          return (
            (e = Array.prototype.slice.call(arguments, 1)),
            (n = this),
            (a = function () {}),
            (i = function () {
              return n.apply(
                this instanceof a ? this : t,
                e.concat(Array.prototype.slice.call(arguments))
              );
            }),
            this.prototype && (a.prototype = this.prototype),
            (i.prototype = new a()),
            i
          );
        }),
      t.Element.prototype.dispatchEvent ||
        (t.Element.prototype.dispatchEvent = function (t) {
          try {
            return this.fireEvent("on" + t.type, t);
          } catch (e) {}
        });
  })(),
    (e = function (a, i, o) {
      var r = null,
        s = !1,
        l = null,
        c = null,
        u = null,
        f = null,
        h = [],
        d = "",
        m = [],
        g = -1;
      if (
        ((u = o || t.document),
        (s = arguments[3]) && (s = "boolean" == typeof s),
        "string" == typeof a)
      )
        m = u.querySelectorAll(a);
      else if (a && "object" == typeof a && n.isElement(a, u)) m = [a];
      else {
        if (!a || "object" != typeof a || !a.length)
          throw new Error(e.messages.errorFactoryInvalidContainer());
        m = a;
      }
      if (m.length < 1)
        throw new Error(e.messages.errorFactoryContainerNotFound());
      for (g = 0; (r = m[g]) && (!(g > 0) || s); g++)
        r.id ? (d = r.id) : ((d = "MixItUp" + n.randomHex()), (r.id = d)),
          e.instances[d] instanceof e.Mixer
            ? ((l = e.instances[d]),
              (!i || (i && i.debug && i.debug.showWarnings !== !1)) &&
                console.warn(e.messages.warningFactoryPreexistingInstance()))
            : ((l = new e.Mixer()), l.attach(r, u, d, i), (e.instances[d] = l)),
          (c = new e.Facade(l)),
          i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
      return (f = s ? new e.Collection(h) : h[0]);
    }),
    (e.use = function (t) {
      e.Base.prototype.callActions.call(e, "beforeUse", arguments),
        "function" == typeof t && "mixitup-extension" === t.TYPE
          ? "undefined" == typeof e.extensions[t.NAME] &&
            (t(e), (e.extensions[t.NAME] = t))
          : t.fn && t.fn.jquery && (e.libraries.$ = t),
        e.Base.prototype.callActions.call(e, "afterUse", arguments);
    }),
    (e.instances = {}),
    (e.extensions = {}),
    (e.libraries = {}),
    (n = {
      hasClass: function (t, e) {
        return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
      },
      addClass: function (t, e) {
        this.hasClass(t, e) || (t.className += t.className ? " " + e : e);
      },
      removeClass: function (t, e) {
        if (this.hasClass(t, e)) {
          var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
          t.className = t.className.replace(n, " ").trim();
        }
      },
      extend: function (t, e, n, a) {
        var i = [],
          o = "",
          r = -1;
        (n = n || !1), (a = a || !1);
        try {
          if (Array.isArray(e)) for (r = 0; r < e.length; r++) i.push(r);
          else e && (i = Object.keys(e));
          for (r = 0; r < i.length; r++)
            (o = i[r]),
              !n || "object" != typeof e[o] || this.isElement(e[o])
                ? (t[o] = e[o])
                : Array.isArray(e[o])
                ? (t[o] || (t[o] = []), this.extend(t[o], e[o], n, a))
                : (t[o] || (t[o] = {}), this.extend(t[o], e[o], n, a));
        } catch (s) {
          if (!a) throw s;
          this.handleExtendError(s, t);
        }
        return t;
      },
      handleExtendError: function (t, n) {
        var a = /property "?(\w*)"?[,:] object/i,
          i = null,
          o = "",
          r = "",
          s = "",
          l = "",
          c = "",
          u = -1,
          f = -1;
        if (t instanceof TypeError && (i = a.exec(t.message))) {
          o = i[1];
          for (c in n) {
            for (f = 0; f < o.length && o.charAt(f) === c.charAt(f); ) f++;
            f > u && ((u = f), (l = c));
          }
          throw (
            (u > 1 &&
              (s = e.messages.errorConfigInvalidPropertySuggestion({
                probableMatch: l,
              })),
            (r = e.messages.errorConfigInvalidProperty({
              erroneous: o,
              suggestion: s,
            })),
            new TypeError(r))
          );
        }
        throw t;
      },
      template: function (t) {
        for (var e = /\${([\w]*)}/g, n = {}, a = null; (a = e.exec(t)); )
          n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
        return function (e) {
          var a = "",
            i = t;
          e = e || {};
          for (a in n)
            i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
          return i;
        };
      },
      on: function (e, n, a, i) {
        e &&
          (e.addEventListener
            ? e.addEventListener(n, a, i)
            : e.attachEvent &&
              ((e["e" + n + a] = a),
              (e[n + a] = function () {
                e["e" + n + a](t.event);
              }),
              e.attachEvent("on" + n, e[n + a])));
      },
      off: function (t, e, n) {
        t &&
          (t.removeEventListener
            ? t.removeEventListener(e, n, !1)
            : t.detachEvent &&
              (t.detachEvent("on" + e, t[e + n]), (t[e + n] = null)));
      },
      getCustomEvent: function (e, n, a) {
        var i = null;
        return (
          (a = a || t.document),
          "function" == typeof t.CustomEvent
            ? (i = new t.CustomEvent(e, {
                detail: n,
                bubbles: !0,
                cancelable: !0,
              }))
            : "function" == typeof a.createEvent
            ? ((i = a.createEvent("CustomEvent")),
              i.initCustomEvent(e, !0, !0, n))
            : ((i = a.createEventObject()),
              (i.type = e),
              (i.returnValue = !1),
              (i.cancelBubble = !1),
              (i.detail = n)),
          i
        );
      },
      getOriginalEvent: function (t) {
        return t.touches && t.touches.length
          ? t.touches[0]
          : t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : t;
      },
      index: function (t, e) {
        for (var n = 0; null !== (t = t.previousElementSibling); )
          (e && !t.matches(e)) || ++n;
        return n;
      },
      camelCase: function (t) {
        return t.toLowerCase().replace(/([_-][a-z])/g, function (t) {
          return t.toUpperCase().replace(/[_-]/, "");
        });
      },
      pascalCase: function (t) {
        return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1);
      },
      dashCase: function (t) {
        return t
          .replace(/([A-Z])/g, "-$1")
          .replace(/^-/, "")
          .toLowerCase();
      },
      isElement: function (e, n) {
        return (
          (n = n || t.document),
          !!(t.HTMLElement && e instanceof t.HTMLElement) ||
            !!(
              n.defaultView &&
              n.defaultView.HTMLElement &&
              e instanceof n.defaultView.HTMLElement
            ) ||
            (null !== e && 1 === e.nodeType && "string" == typeof e.nodeName)
        );
      },
      createElement: function (e, n) {
        var a = null,
          i = null;
        for (
          n = n || t.document,
            a = n.createDocumentFragment(),
            i = n.createElement("div"),
            i.innerHTML = e.trim();
          i.firstChild;

        )
          a.appendChild(i.firstChild);
        return a;
      },
      removeWhitespace: function (t) {
        for (var e; t && "#text" === t.nodeName; )
          (e = t),
            (t = t.previousSibling),
            e.parentElement && e.parentElement.removeChild(e);
      },
      isEqualArray: function (t, e) {
        var n = t.length;
        if (n !== e.length) return !1;
        for (; n--; ) if (t[n] !== e[n]) return !1;
        return !0;
      },
      deepEquals: function (t, e) {
        var n;
        if ("object" == typeof t && t && "object" == typeof e && e) {
          if (Object.keys(t).length !== Object.keys(e).length) return !1;
          for (n in t)
            if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n])) return !1;
        } else if (t !== e) return !1;
        return !0;
      },
      arrayShuffle: function (t) {
        for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--; )
          (i = ~~(Math.random() * n)), (o = e[a]), (e[a] = e[i]), (e[i] = o);
        return e;
      },
      arrayFromList: function (t) {
        var e, n;
        try {
          return Array.prototype.slice.call(t);
        } catch (a) {
          for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
          return e;
        }
      },
      debounce: function (t, e, n) {
        var a;
        return function () {
          var i = this,
            o = arguments,
            r = n && !a,
            s = null;
          (s = function () {
            (a = null), n || t.apply(i, o);
          }),
            clearTimeout(a),
            (a = setTimeout(s, e)),
            r && t.apply(i, o);
        };
      },
      position: function (t) {
        for (var e = 0, n = 0, a = t; t; )
          (e -= t.scrollLeft),
            (n -= t.scrollTop),
            t === a &&
              ((e += t.offsetLeft), (n += t.offsetTop), (a = t.offsetParent)),
            (t = t.parentElement);
        return { x: e, y: n };
      },
      getHypotenuse: function (t, e) {
        var n = t.x - e.x,
          a = t.y - e.y;
        return (
          (n = n < 0 ? n * -1 : n),
          (a = a < 0 ? a * -1 : a),
          Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2))
        );
      },
      getIntersectionRatio: function (t, e) {
        var n = t.width * t.height,
          a = -1,
          i = -1,
          o = -1,
          r = -1;
        return (
          (a = Math.max(
            0,
            Math.min(t.left + t.width, e.left + e.width) -
              Math.max(t.left, e.left)
          )),
          (i = Math.max(
            0,
            Math.min(t.top + t.height, e.top + e.height) -
              Math.max(t.top, e.top)
          )),
          (o = i * a),
          (r = o / n)
        );
      },
      closestParent: function (e, n, a, i) {
        var o = e.parentNode;
        if (((i = i || t.document), a && e.matches(n))) return e;
        for (; o && o != i.body; ) {
          if (o.matches && o.matches(n)) return o;
          if (!o.parentNode) return null;
          o = o.parentNode;
        }
        return null;
      },
      children: function (e, n, a) {
        var i = [],
          o = "";
        return (
          (a = a || t.doc),
          e &&
            (e.id || ((o = "Temp" + this.randomHexKey()), (e.id = o)),
            (i = a.querySelectorAll("#" + e.id + " > " + n)),
            o && e.removeAttribute("id")),
          i
        );
      },
      clean: function (t) {
        var e = [],
          n = -1;
        for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
        return e;
      },
      defer: function (n) {
        var a = null,
          i = null,
          o = null;
        return (
          (i = new this.Deferred()),
          e.features.has.promises
            ? (i.promise = new Promise(function (t, e) {
                (i.resolve = t), (i.reject = e);
              }))
            : (o = t.jQuery || n.$) && "function" == typeof o.Deferred
            ? ((a = o.Deferred()),
              (i.promise = a.promise()),
              (i.resolve = a.resolve),
              (i.reject = a.reject))
            : t.console &&
              console.warn(e.messages.warningNoPromiseImplementation()),
          i
        );
      },
      all: function (n, a) {
        var i = null;
        return e.features.has.promises
          ? Promise.all(n)
          : (i = t.jQuery || a.$) && "function" == typeof i.when
          ? i.when.apply(i, n).done(function () {
              return arguments;
            })
          : (t.console &&
              console.warn(e.messages.warningNoPromiseImplementation()),
            []);
      },
      getPrefix: function (t, e, a) {
        var i = -1,
          o = "";
        if (n.dashCase(e) in t.style) return "";
        for (i = 0; (o = a[i]); i++)
          if (o + e in t.style) return o.toLowerCase();
        return "unsupported";
      },
      randomHex: function () {
        return ("00000" + ((16777216 * Math.random()) << 0).toString(16))
          .substr(-6)
          .toUpperCase();
      },
      getDocumentState: function (e) {
        return (
          (e = "object" == typeof e.body ? e : t.document),
          {
            scrollTop: t.pageYOffset,
            scrollLeft: t.pageXOffset,
            docHeight: e.documentElement.scrollHeight,
            docWidth: e.documentElement.scrollWidth,
            viewportHeight: e.documentElement.clientHeight,
            viewportWidth: e.documentElement.clientWidth,
          }
        );
      },
      bind: function (t, e) {
        return function () {
          return e.apply(t, arguments);
        };
      },
      isVisible: function (e) {
        var n = null;
        return (
          !!e.offsetParent ||
          ((n = t.getComputedStyle(e)),
          "fixed" === n.position &&
            "hidden" !== n.visibility &&
            "0" !== n.opacity)
        );
      },
      seal: function (t) {
        "function" == typeof Object.seal && Object.seal(t);
      },
      freeze: function (t) {
        "function" == typeof Object.freeze && Object.freeze(t);
      },
      compareVersions: function (t, e) {
        var n = t.split("."),
          a = e.split("."),
          i = -1,
          o = -1,
          r = -1;
        for (r = 0; r < n.length; r++) {
          if (
            ((i = parseInt(n[r].replace(/[^\d.]/g, ""))),
            (o = parseInt(a[r].replace(/[^\d.]/g, "") || 0)),
            o < i)
          )
            return !1;
          if (o > i) return !0;
        }
        return !0;
      },
      Deferred: function () {
        (this.promise = null),
          (this.resolve = null),
          (this.reject = null),
          (this.id = n.randomHex());
      },
      isEmptyObject: function (t) {
        var e = "";
        if ("function" == typeof Object.keys)
          return 0 === Object.keys(t).length;
        for (e in t) if (t.hasOwnProperty(e)) return !1;
        return !0;
      },
      getClassname: function (t, e, n) {
        var a = "";
        return (
          (a += t.block),
          a.length && (a += t.delineatorElement),
          (a += t["element" + this.pascalCase(e)]),
          n ? (a.length && (a += t.delineatorModifier), (a += n)) : a
        );
      },
      getProperty: function (t, e) {
        var n = e.split("."),
          a = null,
          i = "",
          o = 0;
        if (!e) return t;
        for (
          a = function (t) {
            return t ? t[i] : null;
          };
          o < n.length;

        )
          (i = n[o]), (t = a(t)), o++;
        return "undefined" != typeof t ? t : null;
      },
    }),
    (e.h = n),
    (e.Base = function () {}),
    (e.Base.prototype = {
      constructor: e.Base,
      callActions: function (t, e) {
        var a = this,
          i = a.constructor.actions[t],
          o = "";
        if (i && !n.isEmptyObject(i)) for (o in i) i[o].apply(a, e);
      },
      callFilters: function (t, e, a) {
        var i = this,
          o = i.constructor.filters[t],
          r = e,
          s = "";
        if (!o || n.isEmptyObject(o)) return r;
        a = a || [];
        for (s in o)
          (a = n.arrayFromList(a)), a.unshift(r), (r = o[s].apply(i, a));
        return r;
      },
    }),
    (e.BaseStatic = function () {
      (this.actions = {}),
        (this.filters = {}),
        (this.extend = function (t) {
          n.extend(this.prototype, t);
        }),
        (this.registerAction = function (t, e, n) {
          (this.actions[t] = this.actions[t] || {})[e] = n;
        }),
        (this.registerFilter = function (t, e, n) {
          (this.filters[t] = this.filters[t] || {})[e] = n;
        });
    }),
    (e.Features = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.boxSizingPrefix = ""),
        (this.transformPrefix = ""),
        (this.transitionPrefix = ""),
        (this.boxSizingPrefix = ""),
        (this.transformProp = ""),
        (this.transformRule = ""),
        (this.transitionProp = ""),
        (this.perspectiveProp = ""),
        (this.perspectiveOriginProp = ""),
        (this.has = new e.Has()),
        (this.canary = null),
        (this.BOX_SIZING_PROP = "boxSizing"),
        (this.TRANSITION_PROP = "transition"),
        (this.TRANSFORM_PROP = "transform"),
        (this.PERSPECTIVE_PROP = "perspective"),
        (this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin"),
        (this.VENDORS = ["Webkit", "moz", "O", "ms"]),
        (this.TWEENABLE = [
          "opacity",
          "width",
          "height",
          "marginRight",
          "marginBottom",
          "x",
          "y",
          "scale",
          "translateX",
          "translateY",
          "translateZ",
          "rotateX",
          "rotateY",
          "rotateZ",
        ]),
        this.callActions("afterConstruct");
    }),
    e.BaseStatic.call(e.Features),
    (e.Features.prototype = Object.create(e.Base.prototype)),
    n.extend(e.Features.prototype, {
      constructor: e.Features,
      init: function () {
        var t = this;
        t.callActions("beforeInit", arguments),
          (t.canary = document.createElement("div")),
          t.setPrefixes(),
          t.runTests(),
          t.callActions("beforeInit", arguments);
      },
      runTests: function () {
        var e = this;
        e.callActions("beforeRunTests", arguments),
          (e.has.promises = "function" == typeof t.Promise),
          (e.has.transitions = "unsupported" !== e.transitionPrefix),
          e.callActions("afterRunTests", arguments),
          n.freeze(e.has);
      },
      setPrefixes: function () {
        var t = this;
        t.callActions("beforeSetPrefixes", arguments),
          (t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS)),
          (t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS)),
          (t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS)),
          (t.boxSizingProp = t.boxSizingPrefix
            ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP)
            : t.BOX_SIZING_PROP),
          (t.transitionProp = t.transitionPrefix
            ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP)
            : t.TRANSITION_PROP),
          (t.transformProp = t.transformPrefix
            ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP)
            : t.TRANSFORM_PROP),
          (t.transformRule = t.transformPrefix
            ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP
            : t.TRANSFORM_PROP),
          (t.perspectiveProp = t.transformPrefix
            ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP)
            : t.PERSPECTIVE_PROP),
          (t.perspectiveOriginProp = t.transformPrefix
            ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP)
            : t.PERSPECTIVE_ORIGIN_PROP),
          t.callActions("afterSetPrefixes", arguments);
      },
    }),
    (e.Has = function () {
      (this.transitions = !1), (this.promises = !1), n.seal(this);
    }),
    (e.features = new e.Features()),
    e.features.init(),
    (e.ConfigAnimation = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.enable = !0),
        (this.effects = "fade scale"),
        (this.effectsIn = ""),
        (this.effectsOut = ""),
        (this.duration = 600),
        (this.easing = "ease"),
        (this.applyPerspective = !0),
        (this.perspectiveDistance = "3000px"),
        (this.perspectiveOrigin = "50% 50%"),
        (this.queue = !0),
        (this.queueLimit = 3),
        (this.animateResizeContainer = !0),
        (this.animateResizeTargets = !1),
        (this.staggerSequence = null),
        (this.reverseOut = !1),
        (this.nudge = !0),
        (this.clampHeight = !0),
        (this.clampWidth = !0),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigAnimation),
    (e.ConfigAnimation.prototype = Object.create(e.Base.prototype)),
    (e.ConfigAnimation.prototype.constructor = e.ConfigAnimation),
    (e.ConfigBehavior = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.liveSort = !1),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigBehavior),
    (e.ConfigBehavior.prototype = Object.create(e.Base.prototype)),
    (e.ConfigBehavior.prototype.constructor = e.ConfigBehavior),
    (e.ConfigCallbacks = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.onMixStart = null),
        (this.onMixBusy = null),
        (this.onMixEnd = null),
        (this.onMixFail = null),
        (this.onMixClick = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigCallbacks),
    (e.ConfigCallbacks.prototype = Object.create(e.Base.prototype)),
    (e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks),
    (e.ConfigControls = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.enable = !0),
        (this.live = !1),
        (this.scope = "global"),
        (this.toggleLogic = "or"),
        (this.toggleDefault = "all"),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigControls),
    (e.ConfigControls.prototype = Object.create(e.Base.prototype)),
    (e.ConfigControls.prototype.constructor = e.ConfigControls),
    (e.ConfigClassNames = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.block = "mixitup"),
        (this.elementContainer = "container"),
        (this.elementFilter = "control"),
        (this.elementSort = "control"),
        (this.elementMultimix = "control"),
        (this.elementToggle = "control"),
        (this.modifierActive = "active"),
        (this.modifierDisabled = "disabled"),
        (this.modifierFailed = "failed"),
        (this.delineatorElement = "-"),
        (this.delineatorModifier = "-"),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigClassNames),
    (e.ConfigClassNames.prototype = Object.create(e.Base.prototype)),
    (e.ConfigClassNames.prototype.constructor = e.ConfigClassNames),
    (e.ConfigData = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.uidKey = ""),
        (this.dirtyCheck = !1),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigData),
    (e.ConfigData.prototype = Object.create(e.Base.prototype)),
    (e.ConfigData.prototype.constructor = e.ConfigData),
    (e.ConfigDebug = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.enable = !1),
        (this.showWarnings = !0),
        (this.fauxAsync = !1),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigDebug),
    (e.ConfigDebug.prototype = Object.create(e.Base.prototype)),
    (e.ConfigDebug.prototype.constructor = e.ConfigDebug),
    (e.ConfigLayout = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.allowNestedTargets = !0),
        (this.containerClassName = ""),
        (this.siblingBefore = null),
        (this.siblingAfter = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigLayout),
    (e.ConfigLayout.prototype = Object.create(e.Base.prototype)),
    (e.ConfigLayout.prototype.constructor = e.ConfigLayout),
    (e.ConfigLoad = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.filter = "all"),
        (this.sort = "default:asc"),
        (this.dataset = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigLoad),
    (e.ConfigLoad.prototype = Object.create(e.Base.prototype)),
    (e.ConfigLoad.prototype.constructor = e.ConfigLoad),
    (e.ConfigSelectors = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.target = ".mix"),
        (this.control = ""),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigSelectors),
    (e.ConfigSelectors.prototype = Object.create(e.Base.prototype)),
    (e.ConfigSelectors.prototype.constructor = e.ConfigSelectors),
    (e.ConfigRender = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.target = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigRender),
    (e.ConfigRender.prototype = Object.create(e.Base.prototype)),
    (e.ConfigRender.prototype.constructor = e.ConfigRender),
    (e.ConfigTemplates = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ConfigTemplates),
    (e.ConfigTemplates.prototype = Object.create(e.Base.prototype)),
    (e.ConfigTemplates.prototype.constructor = e.ConfigTemplates),
    (e.Config = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.animation = new e.ConfigAnimation()),
        (this.behavior = new e.ConfigBehavior()),
        (this.callbacks = new e.ConfigCallbacks()),
        (this.controls = new e.ConfigControls()),
        (this.classNames = new e.ConfigClassNames()),
        (this.data = new e.ConfigData()),
        (this.debug = new e.ConfigDebug()),
        (this.layout = new e.ConfigLayout()),
        (this.load = new e.ConfigLoad()),
        (this.selectors = new e.ConfigSelectors()),
        (this.render = new e.ConfigRender()),
        (this.templates = new e.ConfigTemplates()),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Config),
    (e.Config.prototype = Object.create(e.Base.prototype)),
    (e.Config.prototype.constructor = e.Config),
    (e.MixerDom = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.document = null),
        (this.body = null),
        (this.container = null),
        (this.parent = null),
        (this.targets = []),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.MixerDom),
    (e.MixerDom.prototype = Object.create(e.Base.prototype)),
    (e.MixerDom.prototype.constructor = e.MixerDom),
    (e.UiClassNames = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.base = ""),
        (this.active = ""),
        (this.disabled = ""),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.UiClassNames),
    (e.UiClassNames.prototype = Object.create(e.Base.prototype)),
    (e.UiClassNames.prototype.constructor = e.UiClassNames),
    (e.CommandDataset = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.dataset = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandDataset),
    (e.CommandDataset.prototype = Object.create(e.Base.prototype)),
    (e.CommandDataset.prototype.constructor = e.CommandDataset),
    (e.CommandMultimix = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.filter = null),
        (this.sort = null),
        (this.insert = null),
        (this.remove = null),
        (this.changeLayout = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandMultimix),
    (e.CommandMultimix.prototype = Object.create(e.Base.prototype)),
    (e.CommandMultimix.prototype.constructor = e.CommandMultimix),
    (e.CommandFilter = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.selector = ""),
        (this.collection = null),
        (this.action = "show"),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandFilter),
    (e.CommandFilter.prototype = Object.create(e.Base.prototype)),
    (e.CommandFilter.prototype.constructor = e.CommandFilter),
    (e.CommandSort = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.sortString = ""),
        (this.attribute = ""),
        (this.order = "asc"),
        (this.collection = null),
        (this.next = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandSort),
    (e.CommandSort.prototype = Object.create(e.Base.prototype)),
    (e.CommandSort.prototype.constructor = e.CommandSort),
    (e.CommandInsert = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.index = 0),
        (this.collection = []),
        (this.position = "before"),
        (this.sibling = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandInsert),
    (e.CommandInsert.prototype = Object.create(e.Base.prototype)),
    (e.CommandInsert.prototype.constructor = e.CommandInsert),
    (e.CommandRemove = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.targets = []),
        (this.collection = []),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandRemove),
    (e.CommandRemove.prototype = Object.create(e.Base.prototype)),
    (e.CommandRemove.prototype.constructor = e.CommandRemove),
    (e.CommandChangeLayout = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.containerClassName = ""),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.CommandChangeLayout),
    (e.CommandChangeLayout.prototype = Object.create(e.Base.prototype)),
    (e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout),
    (e.ControlDefinition = function (t, a, i, o) {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.type = t),
        (this.selector = a),
        (this.live = i || !1),
        (this.parent = o || ""),
        this.callActions("afterConstruct"),
        n.freeze(this),
        n.seal(this);
    }),
    e.BaseStatic.call(e.ControlDefinition),
    (e.ControlDefinition.prototype = Object.create(e.Base.prototype)),
    (e.ControlDefinition.prototype.constructor = e.ControlDefinition),
    (e.controlDefinitions = []),
    e.controlDefinitions.push(
      new e.ControlDefinition("multimix", "[data-filter][data-sort]")
    ),
    e.controlDefinitions.push(
      new e.ControlDefinition("filter", "[data-filter]")
    ),
    e.controlDefinitions.push(new e.ControlDefinition("sort", "[data-sort]")),
    e.controlDefinitions.push(
      new e.ControlDefinition("toggle", "[data-toggle]")
    ),
    (e.Control = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.el = null),
        (this.selector = ""),
        (this.bound = []),
        (this.pending = -1),
        (this.type = ""),
        (this.status = "inactive"),
        (this.filter = ""),
        (this.sort = ""),
        (this.canDisable = !1),
        (this.handler = null),
        (this.classNames = new e.UiClassNames()),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Control),
    (e.Control.prototype = Object.create(e.Base.prototype)),
    n.extend(e.Control.prototype, {
      constructor: e.Control,
      init: function (t, n, a) {
        var i = this;
        if (
          (this.callActions("beforeInit", arguments),
          (i.el = t),
          (i.type = n),
          (i.selector = a),
          i.selector)
        )
          i.status = "live";
        else
          switch (((i.canDisable = "boolean" == typeof i.el.disable), i.type)) {
            case "filter":
              i.filter = i.el.getAttribute("data-filter");
              break;
            case "toggle":
              i.filter = i.el.getAttribute("data-toggle");
              break;
            case "sort":
              i.sort = i.el.getAttribute("data-sort");
              break;
            case "multimix":
              (i.filter = i.el.getAttribute("data-filter")),
                (i.sort = i.el.getAttribute("data-sort"));
          }
        i.bindClick(),
          e.controls.push(i),
          this.callActions("afterInit", arguments);
      },
      isBound: function (t) {
        var e = this,
          n = !1;
        return (
          this.callActions("beforeIsBound", arguments),
          (n = e.bound.indexOf(t) > -1),
          e.callFilters("afterIsBound", n, arguments)
        );
      },
      addBinding: function (t) {
        var e = this;
        this.callActions("beforeAddBinding", arguments),
          e.isBound() || e.bound.push(t),
          this.callActions("afterAddBinding", arguments);
      },
      removeBinding: function (t) {
        var n = this,
          a = -1;
        this.callActions("beforeRemoveBinding", arguments),
          (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1),
          n.bound.length < 1 &&
            (n.unbindClick(),
            (a = e.controls.indexOf(n)),
            e.controls.splice(a, 1),
            "active" === n.status && n.renderStatus(n.el, "inactive")),
          this.callActions("afterRemoveBinding", arguments);
      },
      bindClick: function () {
        var t = this;
        this.callActions("beforeBindClick", arguments),
          (t.handler = function (e) {
            t.handleClick(e);
          }),
          n.on(t.el, "click", t.handler),
          this.callActions("afterBindClick", arguments);
      },
      unbindClick: function () {
        var t = this;
        this.callActions("beforeUnbindClick", arguments),
          n.off(t.el, "click", t.handler),
          (t.handler = null),
          this.callActions("afterUnbindClick", arguments);
      },
      handleClick: function (t) {
        var a = this,
          i = null,
          o = null,
          r = !1,
          s = void 0,
          l = {},
          c = null,
          u = [],
          f = -1;
        if (
          (this.callActions("beforeHandleClick", arguments),
          (this.pending = 0),
          (o = a.bound[0]),
          (i = a.selector
            ? n.closestParent(
                t.target,
                o.config.selectors.control + a.selector,
                !0,
                o.dom.document
              )
            : a.el),
          !i)
        )
          return void a.callActions("afterHandleClick", arguments);
        switch (a.type) {
          case "filter":
            l.filter = a.filter || i.getAttribute("data-filter");
            break;
          case "sort":
            l.sort = a.sort || i.getAttribute("data-sort");
            break;
          case "multimix":
            (l.filter = a.filter || i.getAttribute("data-filter")),
              (l.sort = a.sort || i.getAttribute("data-sort"));
            break;
          case "toggle":
            (l.filter = a.filter || i.getAttribute("data-toggle")),
              (r =
                "live" === a.status
                  ? n.hasClass(i, a.classNames.active)
                  : "active" === a.status);
        }
        for (f = 0; f < a.bound.length; f++)
          (c = new e.CommandMultimix()), n.extend(c, l), u.push(c);
        for (
          u = a.callFilters("commandsHandleClick", u, arguments),
            a.pending = a.bound.length,
            f = 0;
          (o = a.bound[f]);
          f++
        )
          (l = u[f]),
            l &&
              (o.lastClicked || (o.lastClicked = i),
              e.events.fire(
                "mixClick",
                o.dom.container,
                {
                  state: o.state,
                  instance: o,
                  originalEvent: t,
                  control: o.lastClicked,
                },
                o.dom.document
              ),
              ("function" == typeof o.config.callbacks.onMixClick &&
                ((s = o.config.callbacks.onMixClick.call(
                  o.lastClicked,
                  o.state,
                  t,
                  o
                )),
                s === !1)) ||
                ("toggle" === a.type
                  ? r
                    ? o.toggleOff(l.filter)
                    : o.toggleOn(l.filter)
                  : o.multimix(l)));
        this.callActions("afterHandleClick", arguments);
      },
      update: function (t, n) {
        var a = this,
          i = new e.CommandMultimix();
        a.callActions("beforeUpdate", arguments),
          a.pending--,
          (a.pending = Math.max(0, a.pending)),
          a.pending > 0 ||
            ("live" === a.status
              ? a.updateLive(t, n)
              : ((i.sort = a.sort),
                (i.filter = a.filter),
                a.callFilters("actionsUpdate", i, arguments),
                a.parseStatusChange(a.el, t, i, n)),
            a.callActions("afterUpdate", arguments));
      },
      updateLive: function (t, n) {
        var a = this,
          i = null,
          o = null,
          r = null,
          s = -1;
        if ((a.callActions("beforeUpdateLive", arguments), a.el)) {
          for (i = a.el.querySelectorAll(a.selector), s = 0; (r = i[s]); s++) {
            switch (((o = new e.CommandMultimix()), a.type)) {
              case "filter":
                o.filter = r.getAttribute("data-filter");
                break;
              case "sort":
                o.sort = r.getAttribute("data-sort");
                break;
              case "multimix":
                (o.filter = r.getAttribute("data-filter")),
                  (o.sort = r.getAttribute("data-sort"));
                break;
              case "toggle":
                o.filter = r.getAttribute("data-toggle");
            }
            (o = a.callFilters("actionsUpdateLive", o, arguments)),
              a.parseStatusChange(r, t, o, n);
          }
          a.callActions("afterUpdateLive", arguments);
        }
      },
      parseStatusChange: function (t, e, n, a) {
        var i = this,
          o = "",
          r = "",
          s = -1;
        switch ((i.callActions("beforeParseStatusChange", arguments), i.type)) {
          case "filter":
            e.filter === n.filter
              ? i.renderStatus(t, "active")
              : i.renderStatus(t, "inactive");
            break;
          case "multimix":
            e.sort === n.sort && e.filter === n.filter
              ? i.renderStatus(t, "active")
              : i.renderStatus(t, "inactive");
            break;
          case "sort":
            e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")),
              e.sort === n.sort || o === n.sort
                ? i.renderStatus(t, "active")
                : i.renderStatus(t, "inactive");
            break;
          case "toggle":
            for (
              a.length < 1 && i.renderStatus(t, "inactive"),
                e.filter === n.filter && i.renderStatus(t, "active"),
                s = 0;
              s < a.length;
              s++
            ) {
              if (((r = a[s]), r === n.filter)) {
                i.renderStatus(t, "active");
                break;
              }
              i.renderStatus(t, "inactive");
            }
        }
        i.callActions("afterParseStatusChange", arguments);
      },
      renderStatus: function (t, e) {
        var a = this;
        switch ((a.callActions("beforeRenderStatus", arguments), e)) {
          case "active":
            n.addClass(t, a.classNames.active),
              n.removeClass(t, a.classNames.disabled),
              a.canDisable && (a.el.disabled = !1);
            break;
          case "inactive":
            n.removeClass(t, a.classNames.active),
              n.removeClass(t, a.classNames.disabled),
              a.canDisable && (a.el.disabled = !1);
            break;
          case "disabled":
            a.canDisable && (a.el.disabled = !0),
              n.addClass(t, a.classNames.disabled),
              n.removeClass(t, a.classNames.active);
        }
        "live" !== a.status && (a.status = e),
          a.callActions("afterRenderStatus", arguments);
      },
    }),
    (e.controls = []),
    (e.StyleData = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.x = 0),
        (this.y = 0),
        (this.top = 0),
        (this.right = 0),
        (this.bottom = 0),
        (this.left = 0),
        (this.width = 0),
        (this.height = 0),
        (this.marginRight = 0),
        (this.marginBottom = 0),
        (this.opacity = 0),
        (this.scale = new e.TransformData()),
        (this.translateX = new e.TransformData()),
        (this.translateY = new e.TransformData()),
        (this.translateZ = new e.TransformData()),
        (this.rotateX = new e.TransformData()),
        (this.rotateY = new e.TransformData()),
        (this.rotateZ = new e.TransformData()),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.StyleData),
    (e.StyleData.prototype = Object.create(e.Base.prototype)),
    (e.StyleData.prototype.constructor = e.StyleData),
    (e.TransformData = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.value = 0),
        (this.unit = ""),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.TransformData),
    (e.TransformData.prototype = Object.create(e.Base.prototype)),
    (e.TransformData.prototype.constructor = e.TransformData),
    (e.TransformDefaults = function () {
      e.StyleData.apply(this),
        this.callActions("beforeConstruct"),
        (this.scale.value = 0.01),
        (this.scale.unit = ""),
        (this.translateX.value = 20),
        (this.translateX.unit = "px"),
        (this.translateY.value = 20),
        (this.translateY.unit = "px"),
        (this.translateZ.value = 20),
        (this.translateZ.unit = "px"),
        (this.rotateX.value = 90),
        (this.rotateX.unit = "deg"),
        (this.rotateY.value = 90),
        (this.rotateY.unit = "deg"),
        (this.rotateX.value = 90),
        (this.rotateX.unit = "deg"),
        (this.rotateZ.value = 180),
        (this.rotateZ.unit = "deg"),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.TransformDefaults),
    (e.TransformDefaults.prototype = Object.create(e.StyleData.prototype)),
    (e.TransformDefaults.prototype.constructor = e.TransformDefaults),
    (e.transformDefaults = new e.TransformDefaults()),
    (e.EventDetail = function () {
      (this.state = null),
        (this.futureState = null),
        (this.instance = null),
        (this.originalEvent = null);
    }),
    (e.Events = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.mixStart = null),
        (this.mixBusy = null),
        (this.mixEnd = null),
        (this.mixFail = null),
        (this.mixClick = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Events),
    (e.Events.prototype = Object.create(e.Base.prototype)),
    (e.Events.prototype.constructor = e.Events),
    (e.Events.prototype.fire = function (t, a, i, o) {
      var r = this,
        s = null,
        l = new e.EventDetail();
      if ((r.callActions("beforeFire", arguments), "undefined" == typeof r[t]))
        throw new Error('Event type "' + t + '" not found.');
      (l.state = new e.State()),
        n.extend(l.state, i.state),
        i.futureState &&
          ((l.futureState = new e.State()),
          n.extend(l.futureState, i.futureState)),
        (l.instance = i.instance),
        i.originalEvent && (l.originalEvent = i.originalEvent),
        (s = n.getCustomEvent(t, l, o)),
        r.callFilters("eventFire", s, arguments),
        a.dispatchEvent(s);
    }),
    (e.events = new e.Events()),
    (e.QueueItem = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.args = []),
        (this.instruction = null),
        (this.triggerElement = null),
        (this.deferred = null),
        (this.isToggling = !1),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.QueueItem),
    (e.QueueItem.prototype = Object.create(e.Base.prototype)),
    (e.QueueItem.prototype.constructor = e.QueueItem),
    (e.Mixer = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.config = new e.Config()),
        (this.id = ""),
        (this.isBusy = !1),
        (this.isToggling = !1),
        (this.incPadding = !0),
        (this.controls = []),
        (this.targets = []),
        (this.origOrder = []),
        (this.cache = {}),
        (this.toggleArray = []),
        (this.targetsMoved = 0),
        (this.targetsImmovable = 0),
        (this.targetsBound = 0),
        (this.targetsDone = 0),
        (this.staggerDuration = 0),
        (this.effectsIn = null),
        (this.effectsOut = null),
        (this.transformIn = []),
        (this.transformOut = []),
        (this.queue = []),
        (this.state = null),
        (this.lastOperation = null),
        (this.lastClicked = null),
        (this.userCallback = null),
        (this.userDeferred = null),
        (this.dom = new e.MixerDom()),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Mixer),
    (e.Mixer.prototype = Object.create(e.Base.prototype)),
    n.extend(e.Mixer.prototype, {
      constructor: e.Mixer,
      attach: function (a, i, o, r) {
        var s = this,
          l = null,
          c = -1;
        for (
          s.callActions("beforeAttach", arguments),
            s.id = o,
            r && n.extend(s.config, r, !0, !0),
            s.sanitizeConfig(),
            s.cacheDom(a, i),
            s.config.layout.containerClassName &&
              n.addClass(s.dom.container, s.config.layout.containerClassName),
            e.features.has.transitions || (s.config.animation.enable = !1),
            "undefined" == typeof t.console &&
              (s.config.debug.showWarnings = !1),
            s.config.data.uidKey && (s.config.controls.enable = !1),
            s.indexTargets(),
            s.state = s.getInitialState(),
            c = 0;
          (l = s.lastOperation.toHide[c]);
          c++
        )
          l.hide();
        s.config.controls.enable &&
          (s.initControls(),
          s.buildToggleArray(null, s.state),
          s.updateControls({
            filter: s.state.activeFilter,
            sort: s.state.activeSort,
          })),
          s.parseEffects(),
          s.callActions("afterAttach", arguments);
      },
      sanitizeConfig: function () {
        var t = this;
        t.callActions("beforeSanitizeConfig", arguments),
          (t.config.controls.scope = t.config.controls.scope
            .toLowerCase()
            .trim()),
          (t.config.controls.toggleLogic = t.config.controls.toggleLogic
            .toLowerCase()
            .trim()),
          (t.config.controls.toggleDefault = t.config.controls.toggleDefault
            .toLowerCase()
            .trim()),
          (t.config.animation.effects = t.config.animation.effects.trim()),
          t.callActions("afterSanitizeConfig", arguments);
      },
      getInitialState: function () {
        var t = this,
          n = new e.State(),
          a = new e.Operation();
        if (
          (t.callActions("beforeGetInitialState", arguments),
          (n.activeContainerClassName = t.config.layout.containerClassName),
          t.config.load.dataset)
        ) {
          if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey)
            throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
          (a.startDataset =
            a.newDataset =
            n.activeDataset =
              t.config.load.dataset.slice()),
            (a.startContainerClassName = a.newContainerClassName =
              n.activeContainerClassName),
            (a.show = t.targets.slice()),
            (n = t.callFilters("stateGetInitialState", n, arguments));
        } else
          (n.activeFilter = t.parseFilterArgs([t.config.load.filter]).command),
            (n.activeSort = t.parseSortArgs([t.config.load.sort]).command),
            (n.totalTargets = t.targets.length),
            (n = t.callFilters("stateGetInitialState", n, arguments)),
            n.activeSort.collection ||
            n.activeSort.attribute ||
            "random" === n.activeSort.order ||
            "desc" === n.activeSort.order
              ? ((a.newSort = n.activeSort),
                t.sortOperation(a),
                t.printSort(!1, a),
                (t.targets = a.newOrder))
              : (a.startOrder = a.newOrder = t.targets),
            (a.startFilter = a.newFilter = n.activeFilter),
            (a.startSort = a.newSort = n.activeSort),
            (a.startContainerClassName = a.newContainerClassName =
              n.activeContainerClassName),
            "all" === a.newFilter.selector
              ? (a.newFilter.selector = t.config.selectors.target)
              : "none" === a.newFilter.selector && (a.newFilter.selector = "");
        return (
          (a = t.callFilters("operationGetInitialState", a, [n])),
          (t.lastOperation = a),
          a.newFilter && t.filterOperation(a),
          (n = t.buildState(a))
        );
      },
      cacheDom: function (t, e) {
        var n = this;
        n.callActions("beforeCacheDom", arguments),
          (n.dom.document = e),
          (n.dom.body = n.dom.document.querySelector("body")),
          (n.dom.container = t),
          (n.dom.parent = t),
          n.callActions("afterCacheDom", arguments);
      },
      indexTargets: function () {
        var t = this,
          a = null,
          i = null,
          o = null,
          r = -1;
        if (
          (t.callActions("beforeIndexTargets", arguments),
          (t.dom.targets = t.config.layout.allowNestedTargets
            ? t.dom.container.querySelectorAll(t.config.selectors.target)
            : n.children(
                t.dom.container,
                t.config.selectors.target,
                t.dom.document
              )),
          (t.dom.targets = n.arrayFromList(t.dom.targets)),
          (t.targets = []),
          (o = t.config.load.dataset) && o.length !== t.dom.targets.length)
        )
          throw new Error(e.messages.errorDatasetPrerenderedMismatch());
        if (t.dom.targets.length) {
          for (r = 0; (i = t.dom.targets[r]); r++)
            (a = new e.Target()),
              a.init(i, t, o ? o[r] : void 0),
              (a.isInDom = !0),
              t.targets.push(a);
          t.dom.parent =
            t.dom.targets[0].parentElement === t.dom.container
              ? t.dom.container
              : t.dom.targets[0].parentElement;
        }
        (t.origOrder = t.targets),
          t.callActions("afterIndexTargets", arguments);
      },
      initControls: function () {
        var t = this,
          n = "",
          a = null,
          i = null,
          o = null,
          r = null,
          s = null,
          l = -1,
          c = -1;
        switch (
          (t.callActions("beforeInitControls", arguments),
          t.config.controls.scope)
        ) {
          case "local":
            o = t.dom.container;
            break;
          case "global":
            o = t.dom.document;
            break;
          default:
            throw new Error(e.messages.errorConfigInvalidControlsScope());
        }
        for (l = 0; (n = e.controlDefinitions[l]); l++)
          if (t.config.controls.live || n.live) {
            if (n.parent) {
              if (((r = t.dom[n.parent]), !r || r.length < 0)) continue;
              "number" != typeof r.length && (r = [r]);
            } else r = [o];
            for (c = 0; (i = r[c]); c++)
              (s = t.getControl(i, n.type, n.selector)), t.controls.push(s);
          } else
            for (
              a = o.querySelectorAll(t.config.selectors.control + n.selector),
                c = 0;
              (i = a[c]);
              c++
            )
              (s = t.getControl(i, n.type, "")), s && t.controls.push(s);
        t.callActions("afterInitControls", arguments);
      },
      getControl: function (t, a, i) {
        var o = this,
          r = null,
          s = -1;
        if ((o.callActions("beforeGetControl", arguments), !i))
          for (s = 0; (r = e.controls[s]); s++) {
            if (r.el === t && r.isBound(o))
              return o.callFilters("controlGetControl", null, arguments);
            if (r.el === t && r.type === a && r.selector === i)
              return (
                r.addBinding(o),
                o.callFilters("controlGetControl", r, arguments)
              );
          }
        return (
          (r = new e.Control()),
          r.init(t, a, i),
          (r.classNames.base = n.getClassname(o.config.classNames, a)),
          (r.classNames.active = n.getClassname(
            o.config.classNames,
            a,
            o.config.classNames.modifierActive
          )),
          (r.classNames.disabled = n.getClassname(
            o.config.classNames,
            a,
            o.config.classNames.modifierDisabled
          )),
          r.addBinding(o),
          o.callFilters("controlGetControl", r, arguments)
        );
      },
      getToggleSelector: function () {
        var t = this,
          e = "or" === t.config.controls.toggleLogic ? ", " : "",
          a = "";
        return (
          t.callActions("beforeGetToggleSelector", arguments),
          (t.toggleArray = n.clean(t.toggleArray)),
          (a = t.toggleArray.join(e)),
          "" === a && (a = t.config.controls.toggleDefault),
          t.callFilters("selectorGetToggleSelector", a, arguments)
        );
      },
      buildToggleArray: function (t, e) {
        var a = this,
          i = "";
        if ((a.callActions("beforeBuildToggleArray", arguments), t && t.filter))
          i = t.filter.selector.replace(/\s/g, "");
        else {
          if (!e) return;
          i = e.activeFilter.selector.replace(/\s/g, "");
        }
        (i !== a.config.selectors.target && "all" !== i) || (i = ""),
          "or" === a.config.controls.toggleLogic
            ? (a.toggleArray = i.split(","))
            : (a.toggleArray = a.splitCompoundSelector(i)),
          (a.toggleArray = n.clean(a.toggleArray)),
          a.callActions("afterBuildToggleArray", arguments);
      },
      splitCompoundSelector: function (t) {
        var e = t.split(/([\.\[])/g),
          n = [],
          a = "",
          i = -1;
        for ("" === e[0] && e.shift(), i = 0; i < e.length; i++)
          i % 2 === 0 && (a = ""), (a += e[i]), i % 2 !== 0 && n.push(a);
        return n;
      },
      updateControls: function (t) {
        var a = this,
          i = null,
          o = new e.CommandMultimix(),
          r = -1;
        for (
          a.callActions("beforeUpdateControls", arguments),
            t.filter
              ? (o.filter = t.filter.selector)
              : (o.filter = a.state.activeFilter.selector),
            t.sort
              ? (o.sort = a.buildSortString(t.sort))
              : (o.sort = a.buildSortString(a.state.activeSort)),
            o.filter === a.config.selectors.target && (o.filter = "all"),
            "" === o.filter && (o.filter = "none"),
            n.freeze(o),
            r = 0;
          (i = a.controls[r]);
          r++
        )
          i.update(o, a.toggleArray);
        a.callActions("afterUpdateControls", arguments);
      },
      buildSortString: function (t) {
        var e = this,
          n = "";
        return (
          (n += t.sortString),
          t.next && (n += " " + e.buildSortString(t.next)),
          n
        );
      },
      insertTargets: function (t, a) {
        var i = this,
          o = null,
          r = -1,
          s = null,
          l = null,
          c = null,
          u = -1;
        if (
          (i.callActions("beforeInsertTargets", arguments),
          "undefined" == typeof t.index && (t.index = 0),
          (o = i.getNextSibling(t.index, t.sibling, t.position)),
          (s = i.dom.document.createDocumentFragment()),
          (r = o ? n.index(o, i.config.selectors.target) : i.targets.length),
          t.collection)
        ) {
          for (u = 0; (c = t.collection[u]); u++) {
            if (i.dom.targets.indexOf(c) > -1)
              throw new Error(e.messages.errorInsertPreexistingElement());
            (c.style.display = "none"),
              s.appendChild(c),
              s.appendChild(i.dom.document.createTextNode(" ")),
              n.isElement(c, i.dom.document) &&
                c.matches(i.config.selectors.target) &&
                ((l = new e.Target()),
                l.init(c, i),
                (l.isInDom = !0),
                i.targets.splice(r, 0, l),
                r++);
          }
          i.dom.parent.insertBefore(s, o);
        }
        (a.startOrder = i.origOrder = i.targets),
          i.callActions("afterInsertTargets", arguments);
      },
      getNextSibling: function (t, e, n) {
        var a = this,
          i = null;
        return (
          (t = Math.max(t, 0)),
          e && "before" === n
            ? (i = e)
            : e && "after" === n
            ? (i = e.nextElementSibling || null)
            : a.targets.length > 0 && "undefined" != typeof t
            ? (i =
                t < a.targets.length || !a.targets.length
                  ? a.targets[t].dom.el
                  : a.targets[a.targets.length - 1].dom.el.nextElementSibling)
            : 0 === a.targets.length &&
              a.dom.parent.children.length > 0 &&
              (a.config.layout.siblingAfter
                ? (i = a.config.layout.siblingAfter)
                : a.config.layout.siblingBefore
                ? (i = a.config.layout.siblingBefore.nextElementSibling)
                : a.dom.parent.children[0]),
          a.callFilters("elementGetNextSibling", i, arguments)
        );
      },
      filterOperation: function (t) {
        var e = this,
          n = !1,
          a = -1,
          i = "",
          o = null,
          r = -1;
        for (
          e.callActions("beforeFilterOperation", arguments),
            i = t.newFilter.action,
            r = 0;
          (o = t.newOrder[r]);
          r++
        )
          (n = t.newFilter.collection
            ? t.newFilter.collection.indexOf(o.dom.el) > -1
            : "" !== t.newFilter.selector &&
              o.dom.el.matches(t.newFilter.selector)),
            e.evaluateHideShow(n, o, i, t);
        if (t.toRemove.length)
          for (r = 0; (o = t.show[r]); r++)
            t.toRemove.indexOf(o) > -1 &&
              (t.show.splice(r, 1),
              (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1),
              t.toHide.push(o),
              t.hide.push(o),
              r--);
        (t.matching = t.show.slice()),
          0 === t.show.length &&
            "" !== t.newFilter.selector &&
            0 !== e.targets.length &&
            (t.hasFailed = !0),
          e.callActions("afterFilterOperation", arguments);
      },
      evaluateHideShow: function (t, e, n, a) {
        var i = this,
          o = !1,
          r = Array.prototype.slice.call(arguments, 1);
        (o = i.callFilters("testResultEvaluateHideShow", t, r)),
          i.callActions("beforeEvaluateHideShow", arguments),
          (o === !0 && "show" === n) || (o === !1 && "hide" === n)
            ? (a.show.push(e), !e.isShown && a.toShow.push(e))
            : (a.hide.push(e), e.isShown && a.toHide.push(e)),
          i.callActions("afterEvaluateHideShow", arguments);
      },
      sortOperation: function (t) {
        var a = this,
          i = [],
          o = null,
          r = null,
          s = -1;
        if (
          (a.callActions("beforeSortOperation", arguments),
          (t.startOrder = a.targets),
          t.newSort.collection)
        ) {
          for (i = [], s = 0; (r = t.newSort.collection[s]); s++) {
            if (a.dom.targets.indexOf(r) < 0)
              throw new Error(e.messages.errorSortNonExistentElement());
            (o = new e.Target()), o.init(r, a), (o.isInDom = !0), i.push(o);
          }
          t.newOrder = i;
        } else
          "random" === t.newSort.order
            ? (t.newOrder = n.arrayShuffle(t.startOrder))
            : "" === t.newSort.attribute
            ? ((t.newOrder = a.origOrder.slice()),
              "desc" === t.newSort.order && t.newOrder.reverse())
            : ((t.newOrder = t.startOrder.slice()),
              t.newOrder.sort(function (e, n) {
                return a.compare(e, n, t.newSort);
              }));
        n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1),
          a.callActions("afterSortOperation", arguments);
      },
      compare: function (t, e, n) {
        var a = this,
          i = n.order,
          o = a.getAttributeValue(t, n.attribute),
          r = a.getAttributeValue(e, n.attribute);
        return (
          isNaN(1 * o) || isNaN(1 * r)
            ? ((o = o.toLowerCase()), (r = r.toLowerCase()))
            : ((o = 1 * o), (r = 1 * r)),
          o < r
            ? "asc" === i
              ? -1
              : 1
            : o > r
            ? "asc" === i
              ? 1
              : -1
            : o === r && n.next
            ? a.compare(t, e, n.next)
            : 0
        );
      },
      getAttributeValue: function (t, n) {
        var a = this,
          i = "";
        return (
          (i = t.dom.el.getAttribute("data-" + n)),
          null === i &&
            a.config.debug.showWarnings &&
            console.warn(
              e.messages.warningInconsistentSortingAttributes({
                attribute: "data-" + n,
              })
            ),
          a.callFilters("valueGetAttributeValue", i || 0, arguments)
        );
      },
      printSort: function (e, a) {
        var i = this,
          o = e ? a.newOrder : a.startOrder,
          r = e ? a.startOrder : a.newOrder,
          s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null,
          l = t.document.createDocumentFragment(),
          c = null,
          u = null,
          f = null,
          h = -1;
        for (
          i.callActions("beforePrintSort", arguments), h = 0;
          (u = o[h]);
          h++
        )
          (f = u.dom.el),
            "absolute" !== f.style.position &&
              (n.removeWhitespace(f.previousSibling),
              f.parentElement.removeChild(f));
        for (
          c = s ? s.previousSibling : i.dom.parent.lastChild,
            c && "#text" === c.nodeName && n.removeWhitespace(c),
            h = 0;
          (u = r[h]);
          h++
        )
          (f = u.dom.el),
            n.isElement(l.lastChild) &&
              l.appendChild(t.document.createTextNode(" ")),
            l.appendChild(f);
        i.dom.parent.firstChild &&
          i.dom.parent.firstChild !== s &&
          l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]),
          s
            ? (l.appendChild(t.document.createTextNode(" ")),
              i.dom.parent.insertBefore(l, s))
            : i.dom.parent.appendChild(l),
          i.callActions("afterPrintSort", arguments);
      },
      parseSortString: function (t, a) {
        var i = this,
          o = t.split(" "),
          r = a,
          s = [],
          l = -1;
        for (l = 0; l < o.length; l++) {
          switch (
            ((s = o[l].split(":")),
            (r.sortString = o[l]),
            (r.attribute = n.dashCase(s[0])),
            (r.order = s[1] || "asc"),
            r.attribute)
          ) {
            case "default":
              r.attribute = "";
              break;
            case "random":
              (r.attribute = ""), (r.order = "random");
          }
          if (!r.attribute || "random" === r.order) break;
          l < o.length - 1 &&
            ((r.next = new e.CommandSort()), n.freeze(r), (r = r.next));
        }
        return i.callFilters("commandsParseSort", a, arguments);
      },
      parseEffects: function () {
        var t = this,
          n = "",
          a = t.config.animation.effectsIn || t.config.animation.effects,
          i = t.config.animation.effectsOut || t.config.animation.effects;
        t.callActions("beforeParseEffects", arguments),
          (t.effectsIn = new e.StyleData()),
          (t.effectsOut = new e.StyleData()),
          (t.transformIn = []),
          (t.transformOut = []),
          (t.effectsIn.opacity = t.effectsOut.opacity = 1),
          t.parseEffect("fade", a, t.effectsIn, t.transformIn),
          t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
        for (n in e.transformDefaults)
          e.transformDefaults[n] instanceof e.TransformData &&
            (t.parseEffect(n, a, t.effectsIn, t.transformIn),
            t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
        t.parseEffect("stagger", a, t.effectsIn, t.transformIn),
          t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0),
          t.callActions("afterParseEffects", arguments);
      },
      parseEffect: function (t, n, a, i, o) {
        var r = this,
          s = /\(([^)]+)\)/,
          l = -1,
          c = "",
          u = [],
          f = "",
          h = ["%", "px", "em", "rem", "vh", "vw", "deg"],
          d = "",
          m = -1;
        if (
          (r.callActions("beforeParseEffect", arguments), "string" != typeof n)
        )
          throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
        if (n.indexOf(t) < 0)
          return void ("stagger" === t && (r.staggerDuration = 0));
        switch (
          ((l = n.indexOf(t + "(")),
          l > -1 && ((c = n.substring(l)), (u = s.exec(c)), (f = u[1])),
          t)
        ) {
          case "fade":
            a.opacity = f ? parseFloat(f) : 0;
            break;
          case "stagger":
            r.staggerDuration = f ? parseFloat(f) : 100;
            break;
          default:
            if (
              (o && r.config.animation.reverseOut && "scale" !== t
                ? (a[t].value =
                    (f ? parseFloat(f) : e.transformDefaults[t].value) * -1)
                : (a[t].value = f
                    ? parseFloat(f)
                    : e.transformDefaults[t].value),
              f)
            ) {
              for (m = 0; (d = h[m]); m++)
                if (f.indexOf(d) > -1) {
                  a[t].unit = d;
                  break;
                }
            } else a[t].unit = e.transformDefaults[t].unit;
            i.push(t + "(" + a[t].value + a[t].unit + ")");
        }
        r.callActions("afterParseEffect", arguments);
      },
      buildState: function (t) {
        var n = this,
          a = new e.State(),
          i = null,
          o = -1;
        for (
          n.callActions("beforeBuildState", arguments), o = 0;
          (i = n.targets[o]);
          o++
        )
          (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
            a.targets.push(i.dom.el);
        for (o = 0; (i = t.matching[o]); o++) a.matching.push(i.dom.el);
        for (o = 0; (i = t.show[o]); o++) a.show.push(i.dom.el);
        for (o = 0; (i = t.hide[o]); o++)
          (!t.toRemove.length || t.toRemove.indexOf(i) < 0) &&
            a.hide.push(i.dom.el);
        return (
          (a.id = n.id),
          (a.container = n.dom.container),
          (a.activeFilter = t.newFilter),
          (a.activeSort = t.newSort),
          (a.activeDataset = t.newDataset),
          (a.activeContainerClassName = t.newContainerClassName),
          (a.hasFailed = t.hasFailed),
          (a.totalTargets = n.targets.length),
          (a.totalShow = t.show.length),
          (a.totalHide = t.hide.length),
          (a.totalMatching = t.matching.length),
          (a.triggerElement = t.triggerElement),
          n.callFilters("stateBuildState", a, arguments)
        );
      },
      goMix: function (a, i) {
        var o = this,
          r = null;
        return (
          o.callActions("beforeGoMix", arguments),
          (o.config.animation.duration &&
            o.config.animation.effects &&
            n.isVisible(o.dom.container)) ||
            (a = !1),
          i.toShow.length ||
            i.toHide.length ||
            i.willSort ||
            i.willChangeLayout ||
            (a = !1),
          i.startState.show.length || i.show.length || (a = !1),
          e.events.fire(
            "mixStart",
            o.dom.container,
            { state: i.startState, futureState: i.newState, instance: o },
            o.dom.document
          ),
          "function" == typeof o.config.callbacks.onMixStart &&
            o.config.callbacks.onMixStart.call(
              o.dom.container,
              i.startState,
              i.newState,
              o
            ),
          n.removeClass(
            o.dom.container,
            n.getClassname(
              o.config.classNames,
              "container",
              o.config.classNames.modifierFailed
            )
          ),
          (r = o.userDeferred
            ? o.userDeferred
            : (o.userDeferred = n.defer(e.libraries))),
          (o.isBusy = !0),
          a && e.features.has.transitions
            ? (t.pageYOffset !== i.docState.scrollTop &&
                t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop),
              o.config.animation.applyPerspective &&
                ((o.dom.parent.style[e.features.perspectiveProp] =
                  o.config.animation.perspectiveDistance),
                (o.dom.parent.style[e.features.perspectiveOriginProp] =
                  o.config.animation.perspectiveOrigin)),
              o.config.animation.animateResizeContainer &&
                i.startHeight !== i.newHeight &&
                i.viewportDeltaY !== i.startHeight - i.newHeight &&
                (o.dom.parent.style.height = i.startHeight + "px"),
              o.config.animation.animateResizeContainer &&
                i.startWidth !== i.newWidth &&
                i.viewportDeltaX !== i.startWidth - i.newWidth &&
                (o.dom.parent.style.width = i.startWidth + "px"),
              i.startHeight === i.newHeight &&
                (o.dom.parent.style.height = i.startHeight + "px"),
              i.startWidth === i.newWidth &&
                (o.dom.parent.style.width = i.startWidth + "px"),
              i.startHeight === i.newHeight &&
                i.startWidth === i.newWidth &&
                (o.dom.parent.style.overflow = "hidden"),
              requestAnimationFrame(function () {
                o.moveTargets(i);
              }),
              o.callFilters("promiseGoMix", r.promise, arguments))
            : (o.config.debug.fauxAsync
                ? setTimeout(function () {
                    o.cleanUp(i);
                  }, o.config.animation.duration)
                : o.cleanUp(i),
              o.callFilters("promiseGoMix", r.promise, arguments))
        );
      },
      getStartMixData: function (n) {
        var a = this,
          i = t.getComputedStyle(a.dom.parent),
          o = a.dom.parent.getBoundingClientRect(),
          r = null,
          s = {},
          l = -1,
          c = i[e.features.boxSizingProp];
        for (
          a.incPadding = "border-box" === c,
            a.callActions("beforeGetStartMixData", arguments),
            l = 0;
          (r = n.show[l]);
          l++
        )
          (s = r.getPosData()), (n.showPosData[l] = { startPosData: s });
        for (l = 0; (r = n.toHide[l]); l++)
          (s = r.getPosData()), (n.toHidePosData[l] = { startPosData: s });
        (n.startX = o.left),
          (n.startY = o.top),
          (n.startHeight = a.incPadding
            ? o.height
            : o.height -
              parseFloat(i.paddingTop) -
              parseFloat(i.paddingBottom) -
              parseFloat(i.borderTop) -
              parseFloat(i.borderBottom)),
          (n.startWidth = a.incPadding
            ? o.width
            : o.width -
              parseFloat(i.paddingLeft) -
              parseFloat(i.paddingRight) -
              parseFloat(i.borderLeft) -
              parseFloat(i.borderRight)),
          a.callActions("afterGetStartMixData", arguments);
      },
      setInter: function (t) {
        var e = this,
          a = null,
          i = -1;
        for (
          e.callActions("beforeSetInter", arguments),
            e.config.animation.clampHeight &&
              ((e.dom.parent.style.height = t.startHeight + "px"),
              (e.dom.parent.style.overflow = "hidden")),
            e.config.animation.clampWidth &&
              ((e.dom.parent.style.width = t.startWidth + "px"),
              (e.dom.parent.style.overflow = "hidden")),
            i = 0;
          (a = t.toShow[i]);
          i++
        )
          a.show();
        t.willChangeLayout &&
          (n.removeClass(e.dom.container, t.startContainerClassName),
          n.addClass(e.dom.container, t.newContainerClassName)),
          e.callActions("afterSetInter", arguments);
      },
      getInterMixData: function (t) {
        var e = this,
          n = null,
          a = -1;
        for (
          e.callActions("beforeGetInterMixData", arguments), a = 0;
          (n = t.show[a]);
          a++
        )
          t.showPosData[a].interPosData = n.getPosData();
        for (a = 0; (n = t.toHide[a]); a++)
          t.toHidePosData[a].interPosData = n.getPosData();
        e.callActions("afterGetInterMixData", arguments);
      },
      setFinal: function (t) {
        var e = this,
          n = null,
          a = -1;
        for (
          e.callActions("beforeSetFinal", arguments),
            t.willSort && e.printSort(!1, t),
            a = 0;
          (n = t.toHide[a]);
          a++
        )
          n.hide();
        e.callActions("afterSetFinal", arguments);
      },
      getFinalMixData: function (e) {
        var a = this,
          i = null,
          o = null,
          r = null,
          s = -1;
        for (
          a.callActions("beforeGetFinalMixData", arguments), s = 0;
          (r = e.show[s]);
          s++
        )
          e.showPosData[s].finalPosData = r.getPosData();
        for (s = 0; (r = e.toHide[s]); s++)
          e.toHidePosData[s].finalPosData = r.getPosData();
        for (
          (a.config.animation.clampHeight || a.config.animation.clampWidth) &&
            (a.dom.parent.style.height =
              a.dom.parent.style.width =
              a.dom.parent.style.overflow =
                ""),
            a.incPadding || (i = t.getComputedStyle(a.dom.parent)),
            o = a.dom.parent.getBoundingClientRect(),
            e.newX = o.left,
            e.newY = o.top,
            e.newHeight = a.incPadding
              ? o.height
              : o.height -
                parseFloat(i.paddingTop) -
                parseFloat(i.paddingBottom) -
                parseFloat(i.borderTop) -
                parseFloat(i.borderBottom),
            e.newWidth = a.incPadding
              ? o.width
              : o.width -
                parseFloat(i.paddingLeft) -
                parseFloat(i.paddingRight) -
                parseFloat(i.borderLeft) -
                parseFloat(i.borderRight),
            e.viewportDeltaX =
              e.docState.viewportWidth -
              this.dom.document.documentElement.clientWidth,
            e.viewportDeltaY =
              e.docState.viewportHeight -
              this.dom.document.documentElement.clientHeight,
            e.willSort && a.printSort(!0, e),
            s = 0;
          (r = e.toShow[s]);
          s++
        )
          r.hide();
        for (s = 0; (r = e.toHide[s]); s++) r.show();
        e.willChangeLayout &&
          (n.removeClass(a.dom.container, e.newContainerClassName),
          n.addClass(a.dom.container, a.config.layout.containerClassName)),
          a.callActions("afterGetFinalMixData", arguments);
      },
      getTweenData: function (t) {
        var n = this,
          a = null,
          i = null,
          o = Object.getOwnPropertyNames(n.effectsIn),
          r = "",
          s = null,
          l = -1,
          c = -1,
          u = -1,
          f = -1;
        for (
          n.callActions("beforeGetTweenData", arguments), u = 0;
          (a = t.show[u]);
          u++
        )
          for (
            i = t.showPosData[u],
              i.posIn = new e.StyleData(),
              i.posOut = new e.StyleData(),
              i.tweenData = new e.StyleData(),
              a.isShown
                ? ((i.posIn.x = i.startPosData.x - i.interPosData.x),
                  (i.posIn.y = i.startPosData.y - i.interPosData.y))
                : (i.posIn.x = i.posIn.y = 0),
              i.posOut.x = i.finalPosData.x - i.interPosData.x,
              i.posOut.y = i.finalPosData.y - i.interPosData.y,
              i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity,
              i.posOut.opacity = 1,
              i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
              a.isShown ||
                n.config.animation.nudge ||
                ((i.posIn.x = i.posOut.x), (i.posIn.y = i.posOut.y)),
              i.tweenData.x = i.posOut.x - i.posIn.x,
              i.tweenData.y = i.posOut.y - i.posIn.y,
              n.config.animation.animateResizeTargets &&
                ((i.posIn.width = i.startPosData.width),
                (i.posIn.height = i.startPosData.height),
                (l =
                  (i.startPosData.width || i.finalPosData.width) -
                  i.interPosData.width),
                (i.posIn.marginRight = i.startPosData.marginRight - l),
                (c =
                  (i.startPosData.height || i.finalPosData.height) -
                  i.interPosData.height),
                (i.posIn.marginBottom = i.startPosData.marginBottom - c),
                (i.posOut.width = i.finalPosData.width),
                (i.posOut.height = i.finalPosData.height),
                (l =
                  (i.finalPosData.width || i.startPosData.width) -
                  i.interPosData.width),
                (i.posOut.marginRight = i.finalPosData.marginRight - l),
                (c =
                  (i.finalPosData.height || i.startPosData.height) -
                  i.interPosData.height),
                (i.posOut.marginBottom = i.finalPosData.marginBottom - c),
                (i.tweenData.width = i.posOut.width - i.posIn.width),
                (i.tweenData.height = i.posOut.height - i.posIn.height),
                (i.tweenData.marginRight =
                  i.posOut.marginRight - i.posIn.marginRight),
                (i.tweenData.marginBottom =
                  i.posOut.marginBottom - i.posIn.marginBottom)),
              f = 0;
            (r = o[f]);
            f++
          )
            (s = n.effectsIn[r]),
              s instanceof e.TransformData &&
                s.value &&
                ((i.posIn[r].value = s.value),
                (i.posOut[r].value = 0),
                (i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value),
                (i.posIn[r].unit =
                  i.posOut[r].unit =
                  i.tweenData[r].unit =
                    s.unit));
        for (u = 0; (a = t.toHide[u]); u++)
          for (
            i = t.toHidePosData[u],
              i.posIn = new e.StyleData(),
              i.posOut = new e.StyleData(),
              i.tweenData = new e.StyleData(),
              i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0,
              i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0,
              i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x,
              i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y,
              i.tweenData.x = i.posOut.x - i.posIn.x,
              i.tweenData.y = i.posOut.y - i.posIn.y,
              n.config.animation.animateResizeTargets &&
                ((i.posIn.width = i.startPosData.width),
                (i.posIn.height = i.startPosData.height),
                (l = i.startPosData.width - i.interPosData.width),
                (i.posIn.marginRight = i.startPosData.marginRight - l),
                (c = i.startPosData.height - i.interPosData.height),
                (i.posIn.marginBottom = i.startPosData.marginBottom - c)),
              i.posIn.opacity = 1,
              i.posOut.opacity = n.effectsOut.opacity,
              i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity,
              f = 0;
            (r = o[f]);
            f++
          )
            (s = n.effectsOut[r]),
              s instanceof e.TransformData &&
                s.value &&
                ((i.posIn[r].value = 0),
                (i.posOut[r].value = s.value),
                (i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value),
                (i.posIn[r].unit =
                  i.posOut[r].unit =
                  i.tweenData[r].unit =
                    s.unit));
        n.callActions("afterGetTweenData", arguments);
      },
      moveTargets: function (t) {
        var a = this,
          i = null,
          o = null,
          r = null,
          s = "",
          l = !1,
          c = -1,
          u = -1,
          f = a.checkProgress.bind(a);
        for (
          a.callActions("beforeMoveTargets", arguments), u = 0;
          (i = t.show[u]);
          u++
        )
          (o = new e.IMoveData()),
            (r = t.showPosData[u]),
            (s = i.isShown ? "none" : "show"),
            (l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut)),
            l && c++,
            i.show(),
            (o.posIn = r.posIn),
            (o.posOut = r.posOut),
            (o.statusChange = s),
            (o.staggerIndex = c),
            (o.operation = t),
            (o.callback = l ? f : null),
            i.move(o);
        for (u = 0; (i = t.toHide[u]); u++)
          (r = t.toHidePosData[u]),
            (o = new e.IMoveData()),
            (s = "hide"),
            (l = a.willTransition(s, r.posIn, r.posOut)),
            (o.posIn = r.posIn),
            (o.posOut = r.posOut),
            (o.statusChange = s),
            (o.staggerIndex = u),
            (o.operation = t),
            (o.callback = l ? f : null),
            i.move(o);
        a.config.animation.animateResizeContainer &&
          ((a.dom.parent.style[e.features.transitionProp] =
            "height " +
            a.config.animation.duration +
            "ms ease, width " +
            a.config.animation.duration +
            "ms ease "),
          requestAnimationFrame(function () {
            t.startHeight !== t.newHeight &&
              t.viewportDeltaY !== t.startHeight - t.newHeight &&
              (a.dom.parent.style.height = t.newHeight + "px"),
              t.startWidth !== t.newWidth &&
                t.viewportDeltaX !== t.startWidth - t.newWidth &&
                (a.dom.parent.style.width = t.newWidth + "px");
          })),
          t.willChangeLayout &&
            (n.removeClass(a.dom.container, a.config.layout.ContainerClassName),
            n.addClass(a.dom.container, t.newContainerClassName)),
          a.callActions("afterMoveTargets", arguments);
      },
      hasEffect: function () {
        var t = this,
          e = [
            "scale",
            "translateX",
            "translateY",
            "translateZ",
            "rotateX",
            "rotateY",
            "rotateZ",
          ],
          n = "",
          a = null,
          i = !1,
          o = -1,
          r = -1;
        if (1 !== t.effectsIn.opacity)
          return t.callFilters("resultHasEffect", !0, arguments);
        for (r = 0; (n = e[r]); r++)
          if (
            ((a = t.effectsIn[n]),
            (o = "undefined" !== a.value ? a.value : a),
            0 !== o)
          ) {
            i = !0;
            break;
          }
        return t.callFilters("resultHasEffect", i, arguments);
      },
      willTransition: function (t, e, a, i) {
        var o = this,
          r = !1;
        return (
          (r =
            !!n.isVisible(o.dom.container) &&
            (!!(("none" !== t && e) || a.x !== i.x || a.y !== i.y) ||
              (!!o.config.animation.animateResizeTargets &&
                (a.width !== i.width ||
                  a.height !== i.height ||
                  a.marginRight !== i.marginRight ||
                  a.marginTop !== i.marginTop)))),
          o.callFilters("resultWillTransition", r, arguments)
        );
      },
      checkProgress: function (t) {
        var e = this;
        e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t);
      },
      cleanUp: function (t) {
        var a = this,
          i = null,
          o = null,
          r = null,
          s = null,
          l = -1;
        for (
          a.callActions("beforeCleanUp", arguments),
            a.targetsMoved =
              a.targetsImmovable =
              a.targetsBound =
              a.targetsDone =
                0,
            l = 0;
          (i = t.show[l]);
          l++
        )
          i.cleanUp(), i.show();
        for (l = 0; (i = t.toHide[l]); l++) i.cleanUp(), i.hide();
        if (
          (t.willSort && a.printSort(!1, t),
          (a.dom.parent.style[e.features.transitionProp] =
            a.dom.parent.style.height =
            a.dom.parent.style.width =
            a.dom.parent.style.overflow =
            a.dom.parent.style[e.features.perspectiveProp] =
            a.dom.parent.style[e.features.perspectiveOriginProp] =
              ""),
          t.willChangeLayout &&
            (n.removeClass(a.dom.container, t.startContainerClassName),
            n.addClass(a.dom.container, t.newContainerClassName)),
          t.toRemove.length)
        ) {
          for (l = 0; (i = a.targets[l]); l++)
            t.toRemove.indexOf(i) > -1 &&
              ((o = i.dom.el.previousSibling) &&
                "#text" === o.nodeName &&
                (r = i.dom.el.nextSibling) &&
                "#text" === r.nodeName &&
                n.removeWhitespace(o),
              t.willSort || a.dom.parent.removeChild(i.dom.el),
              a.targets.splice(l, 1),
              (i.isInDom = !1),
              l--);
          a.origOrder = a.targets;
        }
        t.willSort && (a.targets = t.newOrder),
          (a.state = t.newState),
          (a.lastOperation = t),
          (a.dom.targets = a.state.targets),
          e.events.fire(
            "mixEnd",
            a.dom.container,
            { state: a.state, instance: a },
            a.dom.document
          ),
          "function" == typeof a.config.callbacks.onMixEnd &&
            a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a),
          t.hasFailed &&
            (e.events.fire(
              "mixFail",
              a.dom.container,
              { state: a.state, instance: a },
              a.dom.document
            ),
            "function" == typeof a.config.callbacks.onMixFail &&
              a.config.callbacks.onMixFail.call(a.dom.container, a.state, a),
            n.addClass(
              a.dom.container,
              n.getClassname(
                a.config.classNames,
                "container",
                a.config.classNames.modifierFailed
              )
            )),
          "function" == typeof a.userCallback &&
            a.userCallback.call(a.dom.container, a.state, a),
          "function" == typeof a.userDeferred.resolve &&
            a.userDeferred.resolve(a.state),
          (a.userCallback = null),
          (a.userDeferred = null),
          (a.lastClicked = null),
          (a.isToggling = !1),
          (a.isBusy = !1),
          a.queue.length &&
            (a.callActions("beforeReadQueueCleanUp", arguments),
            (s = a.queue.shift()),
            (a.userDeferred = s.deferred),
            (a.isToggling = s.isToggling),
            (a.lastClicked = s.triggerElement),
            s.instruction.command instanceof e.CommandMultimix
              ? a.multimix.apply(a, s.args)
              : a.dataset.apply(a, s.args)),
          a.callActions("afterCleanUp", arguments);
      },
      parseMultimixArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandMultimix(),
            r = 0;
          r < t.length;
          r++
        )
          (o = t[r]),
            null !== o &&
              ("object" == typeof o
                ? n.extend(i.command, o)
                : "boolean" == typeof o
                ? (i.animate = o)
                : "function" == typeof o && (i.callback = o));
        return (
          !i.command.insert ||
            i.command.insert instanceof e.CommandInsert ||
            (i.command.insert = a.parseInsertArgs([i.command.insert]).command),
          !i.command.remove ||
            i.command.remove instanceof e.CommandRemove ||
            (i.command.remove = a.parseRemoveArgs([i.command.remove]).command),
          !i.command.filter ||
            i.command.filter instanceof e.CommandFilter ||
            (i.command.filter = a.parseFilterArgs([i.command.filter]).command),
          !i.command.sort ||
            i.command.sort instanceof e.CommandSort ||
            (i.command.sort = a.parseSortArgs([i.command.sort]).command),
          !i.command.changeLayout ||
            i.command.changeLayout instanceof e.CommandChangeLayout ||
            (i.command.changeLayout = a.parseChangeLayoutArgs([
              i.command.changeLayout,
            ]).command),
          (i = a.callFilters("instructionParseMultimixArgs", i, arguments)),
          n.freeze(i),
          i
        );
      },
      parseFilterArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandFilter(),
            r = 0;
          r < t.length;
          r++
        )
          (o = t[r]),
            "string" == typeof o
              ? (i.command.selector = o)
              : null === o
              ? (i.command.collection = [])
              : "object" == typeof o && n.isElement(o, a.dom.document)
              ? (i.command.collection = [o])
              : "object" == typeof o && "undefined" != typeof o.length
              ? (i.command.collection = n.arrayFromList(o))
              : "object" == typeof o
              ? n.extend(i.command, o)
              : "boolean" == typeof o
              ? (i.animate = o)
              : "function" == typeof o && (i.callback = o);
        if (i.command.selector && i.command.collection)
          throw new Error(e.messages.errorFilterInvalidArguments());
        return (
          (i = a.callFilters("instructionParseFilterArgs", i, arguments)),
          n.freeze(i),
          i
        );
      },
      parseSortArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = "",
          s = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandSort(),
            s = 0;
          s < t.length;
          s++
        )
          if (((o = t[s]), null !== o))
            switch (typeof o) {
              case "string":
                r = o;
                break;
              case "object":
                o.length && (i.command.collection = n.arrayFromList(o));
                break;
              case "boolean":
                i.animate = o;
                break;
              case "function":
                i.callback = o;
            }
        return (
          r && (i.command = a.parseSortString(r, i.command)),
          (i = a.callFilters("instructionParseSortArgs", i, arguments)),
          n.freeze(i),
          i
        );
      },
      parseInsertArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandInsert(),
            r = 0;
          r < t.length;
          r++
        )
          (o = t[r]),
            null !== o &&
              ("number" == typeof o
                ? (i.command.index = o)
                : "string" == typeof o && ["before", "after"].indexOf(o) > -1
                ? (i.command.position = o)
                : "string" == typeof o
                ? (i.command.collection = n.arrayFromList(
                    n.createElement(o).childNodes
                  ))
                : "object" == typeof o && n.isElement(o, a.dom.document)
                ? i.command.collection.length
                  ? (i.command.sibling = o)
                  : (i.command.collection = [o])
                : "object" == typeof o && o.length
                ? i.command.collection.length
                  ? (i.command.sibling = o[0])
                  : (i.command.collection = o)
                : "object" == typeof o && o.childNodes && o.childNodes.length
                ? i.command.collection.length
                  ? (i.command.sibling = o.childNodes[0])
                  : (i.command.collection = n.arrayFromList(o.childNodes))
                : "object" == typeof o
                ? n.extend(i.command, o)
                : "boolean" == typeof o
                ? (i.animate = o)
                : "function" == typeof o && (i.callback = o));
        if (i.command.index && i.command.sibling)
          throw new Error(e.messages.errorInsertInvalidArguments());
        return (
          !i.command.collection.length &&
            a.config.debug.showWarnings &&
            console.warn(e.messages.warningInsertNoElements()),
          (i = a.callFilters("instructionParseInsertArgs", i, arguments)),
          n.freeze(i),
          i
        );
      },
      parseRemoveArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = null,
          s = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandRemove(),
            s = 0;
          s < t.length;
          s++
        )
          if (((r = t[s]), null !== r))
            switch (typeof r) {
              case "number":
                a.targets[r] && (i.command.targets[0] = a.targets[r]);
                break;
              case "string":
                i.command.collection = n.arrayFromList(
                  a.dom.parent.querySelectorAll(r)
                );
                break;
              case "object":
                r && r.length
                  ? (i.command.collection = r)
                  : n.isElement(r, a.dom.document)
                  ? (i.command.collection = [r])
                  : n.extend(i.command, r);
                break;
              case "boolean":
                i.animate = r;
                break;
              case "function":
                i.callback = r;
            }
        if (i.command.collection.length)
          for (s = 0; (o = a.targets[s]); s++)
            i.command.collection.indexOf(o.dom.el) > -1 &&
              i.command.targets.push(o);
        return (
          !i.command.targets.length &&
            a.config.debug.showWarnings &&
            console.warn(e.messages.warningRemoveNoElements()),
          n.freeze(i),
          i
        );
      },
      parseDatasetArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandDataset(),
            r = 0;
          r < t.length;
          r++
        )
          if (((o = t[r]), null !== o))
            switch (typeof o) {
              case "object":
                Array.isArray(o) || "number" == typeof o.length
                  ? (i.command.dataset = o)
                  : n.extend(i.command, o);
                break;
              case "boolean":
                i.animate = o;
                break;
              case "function":
                i.callback = o;
            }
        return n.freeze(i), i;
      },
      parseChangeLayoutArgs: function (t) {
        var a = this,
          i = new e.UserInstruction(),
          o = null,
          r = -1;
        for (
          i.animate = a.config.animation.enable,
            i.command = new e.CommandChangeLayout(),
            r = 0;
          r < t.length;
          r++
        )
          if (((o = t[r]), null !== o))
            switch (typeof o) {
              case "string":
                i.command.containerClassName = o;
                break;
              case "object":
                n.extend(i.command, o);
                break;
              case "boolean":
                i.animate = o;
                break;
              case "function":
                i.callback = o;
            }
        return n.freeze(i), i;
      },
      queueMix: function (t) {
        var a = this,
          i = null,
          o = "";
        return (
          a.callActions("beforeQueueMix", arguments),
          (i = n.defer(e.libraries)),
          a.config.animation.queue &&
          a.queue.length < a.config.animation.queueLimit
            ? ((t.deferred = i),
              a.queue.push(t),
              a.config.controls.enable &&
                (a.isToggling
                  ? (a.buildToggleArray(t.instruction.command),
                    (o = a.getToggleSelector()),
                    a.updateControls({ filter: { selector: o } }))
                  : a.updateControls(t.instruction.command)))
            : (a.config.debug.showWarnings &&
                console.warn(e.messages.warningMultimixInstanceQueueFull()),
              i.resolve(a.state),
              e.events.fire(
                "mixBusy",
                a.dom.container,
                { state: a.state, instance: a },
                a.dom.document
              ),
              "function" == typeof a.config.callbacks.onMixBusy &&
                a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)),
          a.callFilters("promiseQueueMix", i.promise, arguments)
        );
      },
      getDataOperation: function (t) {
        var a = this,
          i = new e.Operation(),
          o = [];
        if (
          ((i = a.callFilters(
            "operationUnmappedGetDataOperation",
            i,
            arguments
          )),
          a.dom.targets.length && !(o = a.state.activeDataset || []).length)
        )
          throw new Error(e.messages.errorDatasetNotSet());
        return (
          (i.id = n.randomHex()),
          (i.startState = a.state),
          (i.startDataset = o),
          (i.newDataset = t.slice()),
          a.diffDatasets(i),
          (i.startOrder = a.targets),
          (i.newOrder = i.show),
          a.config.animation.enable &&
            (a.getStartMixData(i),
            a.setInter(i),
            (i.docState = n.getDocumentState(a.dom.document)),
            a.getInterMixData(i),
            a.setFinal(i),
            a.getFinalMixData(i),
            a.parseEffects(),
            (i.hasEffect = a.hasEffect()),
            a.getTweenData(i)),
          (a.targets = i.show.slice()),
          (i.newState = a.buildState(i)),
          Array.prototype.push.apply(a.targets, i.toRemove),
          (i = a.callFilters("operationMappedGetDataOperation", i, arguments))
        );
      },
      diffDatasets: function (t) {
        var a = this,
          i = [],
          o = [],
          r = [],
          s = null,
          l = null,
          c = null,
          u = null,
          f = null,
          h = {},
          d = "",
          m = -1;
        for (
          a.callActions("beforeDiffDatasets", arguments), m = 0;
          (s = t.newDataset[m]);
          m++
        ) {
          if (
            "undefined" == typeof (d = s[a.config.data.uidKey]) ||
            d.toString().length < 1
          )
            throw new TypeError(
              e.messages.errorDatasetInvalidUidKey({
                uidKey: a.config.data.uidKey,
              })
            );
          if (h[d])
            throw new Error(e.messages.errorDatasetDuplicateUid({ uid: d }));
          (h[d] = !0),
            (l = a.cache[d]) instanceof e.Target
              ? (a.config.data.dirtyCheck &&
                  !n.deepEquals(s, l.data) &&
                  ((c = l.render(s)),
                  (l.data = s),
                  c !== l.dom.el &&
                    (l.isInDom &&
                      (l.unbindEvents(),
                      a.dom.parent.replaceChild(c, l.dom.el)),
                    l.isShown || (c.style.display = "none"),
                    (l.dom.el = c),
                    l.isInDom && l.bindEvents())),
                (c = l.dom.el))
              : ((l = new e.Target()), l.init(null, a, s), l.hide()),
            l.isInDom
              ? ((f = l.dom.el.nextElementSibling),
                o.push(d),
                u &&
                  (u.lastElementChild &&
                    u.appendChild(a.dom.document.createTextNode(" ")),
                  a.insertDatasetFrag(u, l.dom.el, r),
                  (u = null)))
              : (u || (u = a.dom.document.createDocumentFragment()),
                u.lastElementChild &&
                  u.appendChild(a.dom.document.createTextNode(" ")),
                u.appendChild(l.dom.el),
                (l.isInDom = !0),
                l.unbindEvents(),
                l.bindEvents(),
                l.hide(),
                t.toShow.push(l),
                r.push(l)),
            t.show.push(l);
        }
        for (
          u &&
            ((f = f || a.config.layout.siblingAfter),
            f && u.appendChild(a.dom.document.createTextNode(" ")),
            a.insertDatasetFrag(u, f, r)),
            m = 0;
          (s = t.startDataset[m]);
          m++
        )
          (d = s[a.config.data.uidKey]),
            (l = a.cache[d]),
            t.show.indexOf(l) < 0
              ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l))
              : i.push(d);
        n.isEqualArray(i, o) || (t.willSort = !0),
          a.callActions("afterDiffDatasets", arguments);
      },
      insertDatasetFrag: function (t, e, a) {
        var i = this,
          o = e
            ? n.arrayFromList(i.dom.parent.children).indexOf(e)
            : i.targets.length;
        for (i.dom.parent.insertBefore(t, e); a.length; )
          i.targets.splice(o, 0, a.shift()), o++;
      },
      willSort: function (t, e) {
        var n = this,
          a = !1;
        return (
          (a =
            !!(
              n.config.behavior.liveSort ||
              "random" === t.order ||
              t.attribute !== e.attribute ||
              t.order !== e.order ||
              t.collection !== e.collection ||
              (null === t.next && e.next) ||
              (t.next && null === e.next)
            ) ||
            (!(!t.next || !e.next) && n.willSort(t.next, e.next))),
          n.callFilters("resultWillSort", a, arguments)
        );
      },
      show: function () {
        var t = this;
        return t.filter("all");
      },
      hide: function () {
        var t = this;
        return t.filter("none");
      },
      isMixing: function () {
        var t = this;
        return t.isBusy;
      },
      filter: function () {
        var t = this,
          e = t.parseFilterArgs(arguments);
        return t.multimix({ filter: e.command }, e.animate, e.callback);
      },
      toggleOn: function () {
        var t = this,
          e = t.parseFilterArgs(arguments),
          n = e.command.selector,
          a = "";
        return (
          (t.isToggling = !0),
          t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n),
          (a = t.getToggleSelector()),
          t.multimix({ filter: a }, e.animate, e.callback)
        );
      },
      toggleOff: function () {
        var t = this,
          e = t.parseFilterArgs(arguments),
          n = e.command.selector,
          a = t.toggleArray.indexOf(n),
          i = "";
        return (
          (t.isToggling = !0),
          a > -1 && t.toggleArray.splice(a, 1),
          (i = t.getToggleSelector()),
          t.multimix({ filter: i }, e.animate, e.callback)
        );
      },
      sort: function () {
        var t = this,
          e = t.parseSortArgs(arguments);
        return t.multimix({ sort: e.command }, e.animate, e.callback);
      },
      changeLayout: function () {
        var t = this,
          e = t.parseChangeLayoutArgs(arguments);
        return t.multimix({ changeLayout: e.command }, e.animate, e.callback);
      },
      dataset: function () {
        var t = this,
          n = t.parseDatasetArgs(arguments),
          a = null,
          i = null,
          o = !1;
        return (
          t.callActions("beforeDataset", arguments),
          t.isBusy
            ? ((i = new e.QueueItem()),
              (i.args = arguments),
              (i.instruction = n),
              t.queueMix(i))
            : (n.callback && (t.userCallback = n.callback),
              (o =
                n.animate ^ t.config.animation.enable
                  ? n.animate
                  : t.config.animation.enable),
              (a = t.getDataOperation(n.command.dataset)),
              t.goMix(o, a))
        );
      },
      multimix: function () {
        var t = this,
          n = null,
          a = !1,
          i = null,
          o = t.parseMultimixArgs(arguments);
        return (
          t.callActions("beforeMultimix", arguments),
          t.isBusy
            ? ((i = new e.QueueItem()),
              (i.args = arguments),
              (i.instruction = o),
              (i.triggerElement = t.lastClicked),
              (i.isToggling = t.isToggling),
              t.queueMix(i))
            : ((n = t.getOperation(o.command)),
              t.config.controls.enable &&
                (o.command.filter &&
                  !t.isToggling &&
                  ((t.toggleArray.length = 0), t.buildToggleArray(n.command)),
                t.queue.length < 1 && t.updateControls(n.command)),
              o.callback && (t.userCallback = o.callback),
              (a =
                o.animate ^ t.config.animation.enable
                  ? o.animate
                  : t.config.animation.enable),
              t.callFilters("operationMultimix", n, arguments),
              t.goMix(a, n))
        );
      },
      getOperation: function (t) {
        var a = this,
          i = t.sort,
          o = t.filter,
          r = t.changeLayout,
          s = t.remove,
          l = t.insert,
          c = new e.Operation();
        return (
          (c = a.callFilters("operationUnmappedGetOperation", c, arguments)),
          (c.id = n.randomHex()),
          (c.command = t),
          (c.startState = a.state),
          (c.triggerElement = a.lastClicked),
          a.isBusy
            ? (a.config.debug.showWarnings &&
                console.warn(e.messages.warningGetOperationInstanceBusy()),
              null)
            : (l && a.insertTargets(l, c),
              s && (c.toRemove = s.targets),
              (c.startSort = c.newSort = c.startState.activeSort),
              (c.startOrder = c.newOrder = a.targets),
              i &&
                ((c.startSort = c.startState.activeSort),
                (c.newSort = i),
                (c.willSort = a.willSort(i, c.startState.activeSort)),
                c.willSort && a.sortOperation(c)),
              (c.startFilter = c.startState.activeFilter),
              o
                ? (c.newFilter = o)
                : (c.newFilter = n.extend(
                    new e.CommandFilter(),
                    c.startFilter
                  )),
              "all" === c.newFilter.selector
                ? (c.newFilter.selector = a.config.selectors.target)
                : "none" === c.newFilter.selector &&
                  (c.newFilter.selector = ""),
              a.filterOperation(c),
              (c.startContainerClassName =
                c.startState.activeContainerClassName),
              r
                ? ((c.newContainerClassName = r.containerClassName),
                  c.newContainerClassName !== c.startContainerClassName &&
                    (c.willChangeLayout = !0))
                : (c.newContainerClassName = c.startContainerClassName),
              a.config.animation.enable &&
                (a.getStartMixData(c),
                a.setInter(c),
                (c.docState = n.getDocumentState(a.dom.document)),
                a.getInterMixData(c),
                a.setFinal(c),
                a.getFinalMixData(c),
                a.parseEffects(),
                (c.hasEffect = a.hasEffect()),
                a.getTweenData(c)),
              c.willSort && (a.targets = c.newOrder),
              (c.newState = a.buildState(c)),
              a.callFilters("operationMappedGetOperation", c, arguments))
        );
      },
      tween: function (t, e) {
        var n = null,
          a = null,
          i = -1,
          o = -1;
        for (
          e = Math.min(e, 1), e = Math.max(e, 0), o = 0;
          (n = t.show[o]);
          o++
        )
          (a = t.showPosData[o]), n.applyTween(a, e);
        for (o = 0; (n = t.hide[o]); o++)
          n.isShown && n.hide(),
            (i = t.toHide.indexOf(n)) > -1 &&
              ((a = t.toHidePosData[i]),
              n.isShown || n.show(),
              n.applyTween(a, e));
      },
      insert: function () {
        var t = this,
          e = t.parseInsertArgs(arguments);
        return t.multimix({ insert: e.command }, e.animate, e.callback);
      },
      insertBefore: function () {
        var t = this,
          e = t.parseInsertArgs(arguments);
        return t.insert(
          e.command.collection,
          "before",
          e.command.sibling,
          e.animate,
          e.callback
        );
      },
      insertAfter: function () {
        var t = this,
          e = t.parseInsertArgs(arguments);
        return t.insert(
          e.command.collection,
          "after",
          e.command.sibling,
          e.animate,
          e.callback
        );
      },
      prepend: function () {
        var t = this,
          e = t.parseInsertArgs(arguments);
        return t.insert(0, e.command.collection, e.animate, e.callback);
      },
      append: function () {
        var t = this,
          e = t.parseInsertArgs(arguments);
        return t.insert(
          t.state.totalTargets,
          e.command.collection,
          e.animate,
          e.callback
        );
      },
      remove: function () {
        var t = this,
          e = t.parseRemoveArgs(arguments);
        return t.multimix({ remove: e.command }, e.animate, e.callback);
      },
      getConfig: function (t) {
        var e = this,
          a = null;
        return (
          (a = t ? n.getProperty(e.config, t) : e.config),
          e.callFilters("valueGetConfig", a, arguments)
        );
      },
      configure: function (t) {
        var e = this;
        e.callActions("beforeConfigure", arguments),
          n.extend(e.config, t, !0, !0),
          e.callActions("afterConfigure", arguments);
      },
      getState: function () {
        var t = this,
          a = null;
        return (
          (a = new e.State()),
          n.extend(a, t.state),
          n.freeze(a),
          t.callFilters("stateGetState", a, arguments)
        );
      },
      forceRefresh: function () {
        var t = this;
        t.indexTargets();
      },
      forceRender: function () {
        var t = this,
          e = null,
          n = null,
          a = "";
        for (a in t.cache)
          (e = t.cache[a]),
            (n = e.render(e.data)),
            n !== e.dom.el &&
              (e.isInDom &&
                (e.unbindEvents(), t.dom.parent.replaceChild(n, e.dom.el)),
              e.isShown || (n.style.display = "none"),
              (e.dom.el = n),
              e.isInDom && e.bindEvents());
        t.state = t.buildState(t.lastOperation);
      },
      destroy: function (t) {
        var n = this,
          a = null,
          i = null,
          o = 0;
        for (
          n.callActions("beforeDestroy", arguments), o = 0;
          (a = n.controls[o]);
          o++
        )
          a.removeBinding(n);
        for (o = 0; (i = n.targets[o]); o++) t && i.show(), i.unbindEvents();
        n.dom.container.id.match(/^MixItUp/) &&
          n.dom.container.removeAttribute("id"),
          delete e.instances[n.id],
          n.callActions("afterDestroy", arguments);
      },
    }),
    (e.IMoveData = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.posIn = null),
        (this.posOut = null),
        (this.operation = null),
        (this.callback = null),
        (this.statusChange = ""),
        (this.duration = -1),
        (this.staggerIndex = -1),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.IMoveData),
    (e.IMoveData.prototype = Object.create(e.Base.prototype)),
    (e.IMoveData.prototype.constructor = e.IMoveData),
    (e.TargetDom = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.el = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.TargetDom),
    (e.TargetDom.prototype = Object.create(e.Base.prototype)),
    (e.TargetDom.prototype.constructor = e.TargetDom),
    (e.Target = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.id = ""),
        (this.sortString = ""),
        (this.mixer = null),
        (this.callback = null),
        (this.isShown = !1),
        (this.isBound = !1),
        (this.isExcluded = !1),
        (this.isInDom = !1),
        (this.handler = null),
        (this.operation = null),
        (this.data = null),
        (this.dom = new e.TargetDom()),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Target),
    (e.Target.prototype = Object.create(e.Base.prototype)),
    n.extend(e.Target.prototype, {
      constructor: e.Target,
      init: function (t, n, a) {
        var i = this,
          o = "";
        if (
          (i.callActions("beforeInit", arguments),
          (i.mixer = n),
          t || (t = i.render(a)),
          i.cacheDom(t),
          i.bindEvents(),
          "none" !== i.dom.el.style.display && (i.isShown = !0),
          a && n.config.data.uidKey)
        ) {
          if (
            "undefined" == typeof (o = a[n.config.data.uidKey]) ||
            o.toString().length < 1
          )
            throw new TypeError(
              e.messages.errorDatasetInvalidUidKey({
                uidKey: n.config.data.uidKey,
              })
            );
          (i.id = o), (i.data = a), (n.cache[o] = i);
        }
        i.callActions("afterInit", arguments);
      },
      render: function (t) {
        var a = this,
          i = null,
          o = null,
          r = null,
          s = "";
        if (
          (a.callActions("beforeRender", arguments),
          (i = a.callFilters(
            "renderRender",
            a.mixer.config.render.target,
            arguments
          )),
          "function" != typeof i)
        )
          throw new TypeError(e.messages.errorDatasetRendererNotSet());
        return (
          (s = i(t)),
          s && "object" == typeof s && n.isElement(s)
            ? (o = s)
            : "string" == typeof s &&
              ((r = document.createElement("div")),
              (r.innerHTML = s),
              (o = r.firstElementChild)),
          a.callFilters("elRender", o, arguments)
        );
      },
      cacheDom: function (t) {
        var e = this;
        e.callActions("beforeCacheDom", arguments),
          (e.dom.el = t),
          e.callActions("afterCacheDom", arguments);
      },
      getSortString: function (t) {
        var e = this,
          n = e.dom.el.getAttribute("data-" + t) || "";
        e.callActions("beforeGetSortString", arguments),
          (n = isNaN(1 * n) ? n.toLowerCase() : 1 * n),
          (e.sortString = n),
          e.callActions("afterGetSortString", arguments);
      },
      show: function () {
        var t = this;
        t.callActions("beforeShow", arguments),
          t.isShown || ((t.dom.el.style.display = ""), (t.isShown = !0)),
          t.callActions("afterShow", arguments);
      },
      hide: function () {
        var t = this;
        t.callActions("beforeHide", arguments),
          t.isShown && ((t.dom.el.style.display = "none"), (t.isShown = !1)),
          t.callActions("afterHide", arguments);
      },
      move: function (t) {
        var e = this;
        e.callActions("beforeMove", arguments),
          e.isExcluded || e.mixer.targetsMoved++,
          e.applyStylesIn(t),
          requestAnimationFrame(function () {
            e.applyStylesOut(t);
          }),
          e.callActions("afterMove", arguments);
      },
      applyTween: function (t, n) {
        var a = this,
          i = "",
          o = null,
          r = t.posIn,
          s = [],
          l = new e.StyleData(),
          c = -1;
        for (
          a.callActions("beforeApplyTween", arguments),
            l.x = r.x,
            l.y = r.y,
            0 === n ? a.hide() : a.isShown || a.show(),
            c = 0;
          (i = e.features.TWEENABLE[c]);
          c++
        )
          if (((o = t.tweenData[i]), "x" === i)) {
            if (!o) continue;
            l.x = r.x + o * n;
          } else if ("y" === i) {
            if (!o) continue;
            l.y = r.y + o * n;
          } else if (o instanceof e.TransformData) {
            if (!o.value) continue;
            (l[i].value = r[i].value + o.value * n),
              (l[i].unit = o.unit),
              s.push(i + "(" + l[i].value + o.unit + ")");
          } else {
            if (!o) continue;
            (l[i] = r[i] + o * n), (a.dom.el.style[i] = l[i]);
          }
        (l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"),
          s.length && (a.dom.el.style[e.features.transformProp] = s.join(" ")),
          a.callActions("afterApplyTween", arguments);
      },
      applyStylesIn: function (t) {
        var n = this,
          a = t.posIn,
          i = 1 !== n.mixer.effectsIn.opacity,
          o = [];
        n.callActions("beforeApplyStylesIn", arguments),
          o.push("translate(" + a.x + "px, " + a.y + "px)"),
          n.mixer.config.animation.animateResizeTargets &&
            ("show" !== t.statusChange &&
              ((n.dom.el.style.width = a.width + "px"),
              (n.dom.el.style.height = a.height + "px")),
            (n.dom.el.style.marginRight = a.marginRight + "px"),
            (n.dom.el.style.marginBottom = a.marginBottom + "px")),
          i && (n.dom.el.style.opacity = a.opacity),
          "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)),
          (n.dom.el.style[e.features.transformProp] = o.join(" ")),
          n.callActions("afterApplyStylesIn", arguments);
      },
      applyStylesOut: function (t) {
        var n = this,
          a = [],
          i = [],
          o = n.mixer.config.animation.animateResizeTargets,
          r = "undefined" != typeof n.mixer.effectsIn.opacity;
        if (
          (n.callActions("beforeApplyStylesOut", arguments),
          a.push(
            n.writeTransitionRule(e.features.transformRule, t.staggerIndex)
          ),
          "none" !== t.statusChange &&
            a.push(
              n.writeTransitionRule("opacity", t.staggerIndex, t.duration)
            ),
          o &&
            (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)),
            a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)),
            a.push(
              n.writeTransitionRule("margin", t.staggerIndex, t.duration)
            )),
          !t.callback)
        )
          return (
            n.mixer.targetsImmovable++,
            void (
              n.mixer.targetsMoved === n.mixer.targetsImmovable &&
              n.mixer.cleanUp(t.operation)
            )
          );
        switch (
          ((n.operation = t.operation),
          (n.callback = t.callback),
          !n.isExcluded && n.mixer.targetsBound++,
          (n.isBound = !0),
          n.applyTransition(a),
          o &&
            t.posOut.width > 0 &&
            t.posOut.height > 0 &&
            ((n.dom.el.style.width = t.posOut.width + "px"),
            (n.dom.el.style.height = t.posOut.height + "px"),
            (n.dom.el.style.marginRight = t.posOut.marginRight + "px"),
            (n.dom.el.style.marginBottom = t.posOut.marginBottom + "px")),
          n.mixer.config.animation.nudge ||
            "hide" !== t.statusChange ||
            i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
          t.statusChange)
        ) {
          case "hide":
            r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity),
              (i = i.concat(n.mixer.transformOut));
            break;
          case "show":
            r && (n.dom.el.style.opacity = 1);
        }
        (n.mixer.config.animation.nudge ||
          (!n.mixer.config.animation.nudge && "hide" !== t.statusChange)) &&
          i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"),
          (n.dom.el.style[e.features.transformProp] = i.join(" ")),
          n.callActions("afterApplyStylesOut", arguments);
      },
      writeTransitionRule: function (t, e, n) {
        var a = this,
          i = a.getDelay(e),
          o = "";
        return (
          (o =
            t +
            " " +
            (n > 0 ? n : a.mixer.config.animation.duration) +
            "ms " +
            i +
            "ms " +
            ("opacity" === t ? "linear" : a.mixer.config.animation.easing)),
          a.callFilters("ruleWriteTransitionRule", o, arguments)
        );
      },
      getDelay: function (t) {
        var e = this,
          n = -1;
        return (
          "function" == typeof e.mixer.config.animation.staggerSequence &&
            (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)),
          (n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0),
          e.callFilters("delayGetDelay", n, arguments)
        );
      },
      applyTransition: function (t) {
        var n = this,
          a = t.join(", ");
        n.callActions("beforeApplyTransition", arguments),
          (n.dom.el.style[e.features.transitionProp] = a),
          n.callActions("afterApplyTransition", arguments);
      },
      handleTransitionEnd: function (t) {
        var e = this,
          n = t.propertyName,
          a = e.mixer.config.animation.animateResizeTargets;
        e.callActions("beforeHandleTransitionEnd", arguments),
          e.isBound &&
            t.target.matches(e.mixer.config.selectors.target) &&
            (n.indexOf("transform") > -1 ||
              n.indexOf("opacity") > -1 ||
              (a && n.indexOf("height") > -1) ||
              (a && n.indexOf("width") > -1) ||
              (a && n.indexOf("margin") > -1)) &&
            (e.callback.call(e, e.operation),
            (e.isBound = !1),
            (e.callback = null),
            (e.operation = null)),
          e.callActions("afterHandleTransitionEnd", arguments);
      },
      eventBus: function (t) {
        var e = this;
        switch ((e.callActions("beforeEventBus", arguments), t.type)) {
          case "webkitTransitionEnd":
          case "transitionend":
            e.handleTransitionEnd(t);
        }
        e.callActions("afterEventBus", arguments);
      },
      unbindEvents: function () {
        var t = this;
        t.callActions("beforeUnbindEvents", arguments),
          n.off(t.dom.el, "webkitTransitionEnd", t.handler),
          n.off(t.dom.el, "transitionend", t.handler),
          t.callActions("afterUnbindEvents", arguments);
      },
      bindEvents: function () {
        var t = this,
          a = "";
        t.callActions("beforeBindEvents", arguments),
          (a =
            "webkit" === e.features.transitionPrefix
              ? "webkitTransitionEnd"
              : "transitionend"),
          (t.handler = function (e) {
            return t.eventBus(e);
          }),
          n.on(t.dom.el, a, t.handler),
          t.callActions("afterBindEvents", arguments);
      },
      getPosData: function (n) {
        var a = this,
          i = {},
          o = null,
          r = new e.StyleData();
        return (
          a.callActions("beforeGetPosData", arguments),
          (r.x = a.dom.el.offsetLeft),
          (r.y = a.dom.el.offsetTop),
          (a.mixer.config.animation.animateResizeTargets || n) &&
            ((o = a.dom.el.getBoundingClientRect()),
            (r.top = o.top),
            (r.right = o.right),
            (r.bottom = o.bottom),
            (r.left = o.left),
            (r.width = o.width),
            (r.height = o.height)),
          a.mixer.config.animation.animateResizeTargets &&
            ((i = t.getComputedStyle(a.dom.el)),
            (r.marginBottom = parseFloat(i.marginBottom)),
            (r.marginRight = parseFloat(i.marginRight))),
          a.callFilters("posDataGetPosData", r, arguments)
        );
      },
      cleanUp: function () {
        var t = this;
        t.callActions("beforeCleanUp", arguments),
          (t.dom.el.style[e.features.transformProp] = ""),
          (t.dom.el.style[e.features.transitionProp] = ""),
          (t.dom.el.style.opacity = ""),
          t.mixer.config.animation.animateResizeTargets &&
            ((t.dom.el.style.width = ""),
            (t.dom.el.style.height = ""),
            (t.dom.el.style.marginRight = ""),
            (t.dom.el.style.marginBottom = "")),
          t.callActions("afterCleanUp", arguments);
      },
    }),
    (e.Collection = function (t) {
      var e = null,
        a = -1;
      for (this.callActions("beforeConstruct"), a = 0; (e = t[a]); a++)
        this[a] = e;
      (this.length = t.length),
        this.callActions("afterConstruct"),
        n.freeze(this);
    }),
    e.BaseStatic.call(e.Collection),
    (e.Collection.prototype = Object.create(e.Base.prototype)),
    n.extend(e.Collection.prototype, {
      constructor: e.Collection,
      mixitup: function (t) {
        var a = this,
          i = null,
          o = Array.prototype.slice.call(arguments),
          r = [],
          s = -1;
        for (
          this.callActions("beforeMixitup"), o.shift(), s = 0;
          (i = a[s]);
          s++
        )
          r.push(i[t].apply(i, o));
        return a.callFilters(
          "promiseMixitup",
          n.all(r, e.libraries),
          arguments
        );
      },
    }),
    (e.Operation = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.id = ""),
        (this.args = []),
        (this.command = null),
        (this.showPosData = []),
        (this.toHidePosData = []),
        (this.startState = null),
        (this.newState = null),
        (this.docState = null),
        (this.willSort = !1),
        (this.willChangeLayout = !1),
        (this.hasEffect = !1),
        (this.hasFailed = !1),
        (this.triggerElement = null),
        (this.show = []),
        (this.hide = []),
        (this.matching = []),
        (this.toShow = []),
        (this.toHide = []),
        (this.toMove = []),
        (this.toRemove = []),
        (this.startOrder = []),
        (this.newOrder = []),
        (this.startSort = null),
        (this.newSort = null),
        (this.startFilter = null),
        (this.newFilter = null),
        (this.startDataset = null),
        (this.newDataset = null),
        (this.viewportDeltaX = 0),
        (this.viewportDeltaY = 0),
        (this.startX = 0),
        (this.startY = 0),
        (this.startHeight = 0),
        (this.startWidth = 0),
        (this.newX = 0),
        (this.newY = 0),
        (this.newHeight = 0),
        (this.newWidth = 0),
        (this.startContainerClassName = ""),
        (this.startDisplay = ""),
        (this.newContainerClassName = ""),
        (this.newDisplay = ""),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Operation),
    (e.Operation.prototype = Object.create(e.Base.prototype)),
    (e.Operation.prototype.constructor = e.Operation),
    (e.State = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.id = ""),
        (this.activeFilter = null),
        (this.activeSort = null),
        (this.activeContainerClassName = ""),
        (this.container = null),
        (this.targets = []),
        (this.hide = []),
        (this.show = []),
        (this.matching = []),
        (this.totalTargets = -1),
        (this.totalShow = -1),
        (this.totalHide = -1),
        (this.totalMatching = -1),
        (this.hasFailed = !1),
        (this.triggerElement = null),
        (this.activeDataset = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.State),
    (e.State.prototype = Object.create(e.Base.prototype)),
    (e.State.prototype.constructor = e.State),
    (e.UserInstruction = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.command = {}),
        (this.animate = !1),
        (this.callback = null),
        this.callActions("afterConstruct"),
        n.seal(this);
    }),
    e.BaseStatic.call(e.UserInstruction),
    (e.UserInstruction.prototype = Object.create(e.Base.prototype)),
    (e.UserInstruction.prototype.constructor = e.UserInstruction),
    (e.Messages = function () {
      e.Base.call(this),
        this.callActions("beforeConstruct"),
        (this.ERROR_FACTORY_INVALID_CONTAINER =
          "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function"),
        (this.ERROR_FACTORY_CONTAINER_NOT_FOUND =
          "[MixItUp] The provided selector yielded no container element"),
        (this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS =
          "[MixItUp] Invalid value for `animation.effects`"),
        (this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE =
          "[MixItUp] Invalid value for `controls.scope`"),
        (this.ERROR_CONFIG_INVALID_PROPERTY =
          '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}'),
        (this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION =
          '. Did you mean "${probableMatch}"?'),
        (this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET =
          "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`"),
        (this.ERROR_DATASET_INVALID_UID_KEY =
          '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items'),
        (this.ERROR_DATASET_DUPLICATE_UID =
          '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.'),
        (this.ERROR_INSERT_INVALID_ARGUMENTS =
          "[MixItUp] Please provider either an index or a sibling and position to insert, not both"),
        (this.ERROR_INSERT_PREEXISTING_ELEMENT =
          "[MixItUp] An element to be inserted already exists in the container"),
        (this.ERROR_FILTER_INVALID_ARGUMENTS =
          "[MixItUp] Please provide either a selector or collection `.filter()`, not both"),
        (this.ERROR_DATASET_NOT_SET =
          "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`"),
        (this.ERROR_DATASET_PRERENDERED_MISMATCH =
          "[MixItUp] `load.dataset` does not match pre-rendered targets"),
        (this.ERROR_DATASET_RENDERER_NOT_SET =
          "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`"),
        (this.ERROR_SORT_NON_EXISTENT_ELEMENT =
          "[MixItUp] An element to be sorted does not already exist in the container"),
        (this.WARNING_FACTORY_PREEXISTING_INSTANCE =
          "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference."),
        (this.WARNING_INSERT_NO_ELEMENTS =
          "[MixItUp] WARNING: No valid elements were passed to `.insert()`"),
        (this.WARNING_REMOVE_NO_ELEMENTS =
          "[MixItUp] WARNING: No valid elements were passed to `.remove()`"),
        (this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL =
          "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled."),
        (this.WARNING_GET_OPERATION_INSTANCE_BUSY =
          "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy."),
        (this.WARNING_NO_PROMISE_IMPLEMENTATION =
          "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill."),
        (this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES =
          '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output'),
        this.callActions("afterConstruct"),
        this.compileTemplates(),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Messages),
    (e.Messages.prototype = Object.create(e.Base.prototype)),
    (e.Messages.prototype.constructor = e.Messages),
    (e.Messages.prototype.compileTemplates = function () {
      var t = "",
        e = "";
      for (t in this)
        "string" == typeof (e = this[t]) &&
          (this[n.camelCase(t)] = n.template(e));
    }),
    (e.messages = new e.Messages()),
    (e.Facade = function (t) {
      e.Base.call(this),
        this.callActions("beforeConstruct", arguments),
        (this.configure = t.configure.bind(t)),
        (this.show = t.show.bind(t)),
        (this.hide = t.hide.bind(t)),
        (this.filter = t.filter.bind(t)),
        (this.toggleOn = t.toggleOn.bind(t)),
        (this.toggleOff = t.toggleOff.bind(t)),
        (this.sort = t.sort.bind(t)),
        (this.changeLayout = t.changeLayout.bind(t)),
        (this.multimix = t.multimix.bind(t)),
        (this.dataset = t.dataset.bind(t)),
        (this.tween = t.tween.bind(t)),
        (this.insert = t.insert.bind(t)),
        (this.insertBefore = t.insertBefore.bind(t)),
        (this.insertAfter = t.insertAfter.bind(t)),
        (this.prepend = t.prepend.bind(t)),
        (this.append = t.append.bind(t)),
        (this.remove = t.remove.bind(t)),
        (this.destroy = t.destroy.bind(t)),
        (this.forceRefresh = t.forceRefresh.bind(t)),
        (this.forceRender = t.forceRender.bind(t)),
        (this.isMixing = t.isMixing.bind(t)),
        (this.getOperation = t.getOperation.bind(t)),
        (this.getConfig = t.getConfig.bind(t)),
        (this.getState = t.getState.bind(t)),
        this.callActions("afterConstruct", arguments),
        n.freeze(this),
        n.seal(this);
    }),
    e.BaseStatic.call(e.Facade),
    (e.Facade.prototype = Object.create(e.Base.prototype)),
    (e.Facade.prototype.constructor = e.Facade),
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = e)
      : "function" == typeof define && define.amd
      ? define(function () {
          return e;
        })
      : ("undefined" != typeof t.mixitup && "function" == typeof t.mixitup) ||
        (t.mixitup = e),
    e.BaseStatic.call(e.constructor),
    (e.NAME = "mixitup"),
    (e.CORE_VERSION = "3.3.1");
})(window);
// main
/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

("use strict");

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Portfolio filter
        --------------------*/
    $(".portfolio__filter li").on("click", function () {
      $(".portfolio__filter li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".portfolio__gallery").length > 0) {
      var containerEl = document.querySelector(".portfolio__gallery");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Masonary
  $(".work__gallery").masonry({
    itemSelector: ".work__item",
    columnWidth: ".grid-sizer",
    gutter: 10,
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    margin: 0,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  var dot = $(".hero__slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
    } else {
      $(this).html(index);
    }
  });

  /*------------------
        Testimonial Slider
    --------------------*/
  $(".testimonial__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Latest Slider
    --------------------*/
  $(".latest__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    dotsEach: 2,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });

  /*------------------
        Logo Slider
    --------------------*/
  $(".logo__carousel").owlCarousel({
    loop: true,
    margin: 100,
    items: 6,
    dots: false,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    responsive: {
      992: {
        items: 5,
      },
      768: {
        items: 4,
      },
      480: {
        items: 3,
      },
      320: {
        items: 2,
      },
    },
  });

  /*------------------
        Video Popup
    --------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  /*------------------
        Counter
    --------------------*/
  $(".counter_num").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
})(jQuery);
// portfolio

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function e(t) {
      return "function" == typeof t && "number" != typeof t.nodeType;
    },
    y = function e(t) {
      return null != t && t === t.window;
    },
    v = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (w.fn = w.prototype =
    {
      jquery: "3.3.1",
      constructor: w,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = w.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return w.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          w.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (w.extend = w.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || g(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (n = a[t]),
                a !== (r = e[t]) &&
                  (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                    ? (i
                        ? ((i = !1), (o = n && Array.isArray(n) ? n : []))
                        : (o = n && w.isPlainObject(n) ? n : {}),
                      (a[t] = w.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    w.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) ||
            ("function" ==
              typeof (n = f.call(t, "constructor") && t.constructor) &&
              p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (C(Object(e))
              ? w.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
          (r = !t(e[o], o)) !== s && i.push(e[o]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return (
      !g(e) &&
      !y(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  var E = (function (e) {
    var t,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      p,
      d,
      h,
      g,
      y,
      v,
      m,
      x,
      b = "sizzle" + 1 * new Date(),
      w = e.document,
      T = 0,
      C = 0,
      E = ae(),
      k = ae(),
      S = ae(),
      D = function (e, t) {
        return e === t && (f = !0), 0;
      },
      N = {}.hasOwnProperty,
      A = [],
      j = A.pop,
      q = A.push,
      L = A.push,
      H = A.slice,
      O = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      P =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      I =
        "\\[" +
        M +
        "*(" +
        R +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        R +
        "))|)" +
        M +
        "*\\]",
      W =
        ":(" +
        R +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      F = new RegExp("^" + M + "*," + M + "*"),
      _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
      X = new RegExp(W),
      U = new RegExp("^" + R + "$"),
      V = {
        ID: new RegExp("^#(" + R + ")"),
        CLASS: new RegExp("^\\.(" + R + ")"),
        TAG: new RegExp("^(" + R + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + W),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + P + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      K = /[+~]/,
      Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
      ee = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : r < 0
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      },
      te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ne = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      re = function () {
        p();
      },
      ie = me(
        function (e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      L.apply((A = H.call(w.childNodes)), w.childNodes),
        A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length
          ? function (e, t) {
              q.apply(e, H.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function oe(e, t, r, i) {
      var o,
        s,
        l,
        c,
        f,
        h,
        v,
        m = t && t.ownerDocument,
        T = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
      )
        return r;
      if (
        !i &&
        ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)
      ) {
        if (11 !== T && (f = J.exec(e)))
          if ((o = f[1])) {
            if (9 === T) {
              if (!(l = t.getElementById(o))) return r;
              if (l.id === o) return r.push(l), r;
            } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o)
              return r.push(l), r;
          } else {
            if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
            if (
              (o = f[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return L.apply(r, t.getElementsByClassName(o)), r;
          }
        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) (m = t), (v = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id"))
              ? (c = c.replace(te, ne))
              : t.setAttribute("id", (c = b)),
              (s = (h = a(e)).length);
            while (s--) h[s] = "#" + c + " " + ve(h[s]);
            (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
          }
          if (v)
            try {
              return L.apply(r, m.querySelectorAll(v)), r;
            } catch (e) {
            } finally {
              c === b && t.removeAttribute("id");
            }
        }
      }
      return u(e.replace(B, "$1"), t, r, i);
    }
    function ae() {
      var e = [];
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      return t;
    }
    function se(e) {
      return (e[b] = !0), e;
    }
    function ue(e) {
      var t = d.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function le(e, t) {
      var n = e.split("|"),
        i = n.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function ce(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function de(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function he(e) {
      return se(function (t) {
        return (
          (t = +t),
          se(function (n, r) {
            var i,
              o = e([], n.length, t),
              a = o.length;
            while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    (n = oe.support = {}),
      (o = oe.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return !!t && "HTML" !== t.nodeName;
        }),
      (p = oe.setDocument =
        function (e) {
          var t,
            i,
            a = e ? e.ownerDocument || e : w;
          return a !== d && 9 === a.nodeType && a.documentElement
            ? ((d = a),
              (h = d.documentElement),
              (g = !o(d)),
              w !== d &&
                (i = d.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", re, !1)
                  : i.attachEvent && i.attachEvent("onunload", re)),
              (n.attributes = ue(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ue(function (e) {
                return (
                  e.appendChild(d.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
              (n.getById = ue(function (e) {
                return (
                  (h.appendChild(e).id = b),
                  !d.getElementsByName || !d.getElementsByName(b).length
                );
              })),
              n.getById
                ? ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((r.filter.ID = function (e) {
                    var t = e.replace(Z, ee);
                    return function (e) {
                      var n =
                        "undefined" != typeof e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (r.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && g) {
                      var n,
                        r,
                        i,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        (i = t.getElementsByName(e)), (r = 0);
                        while ((o = i[r++]))
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : n.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      o = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  if ("undefined" != typeof t.getElementsByClassName && g)
                    return t.getElementsByClassName(e);
                }),
              (v = []),
              (y = []),
              (n.qsa = Q.test(d.querySelectorAll)) &&
                (ue(function (e) {
                  (h.appendChild(e).innerHTML =
                    "<a id='" +
                    b +
                    "'></a><select id='" +
                    b +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    e.querySelectorAll("[msallowcapture^='']").length &&
                      y.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      y.push("\\[" + M + "*(?:value|" + P + ")"),
                    e.querySelectorAll("[id~=" + b + "-]").length ||
                      y.push("~="),
                    e.querySelectorAll(":checked").length || y.push(":checked"),
                    e.querySelectorAll("a#" + b + "+*").length ||
                      y.push(".#.+[+~]");
                }),
                ue(function (e) {
                  e.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var t = d.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      y.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length &&
                      y.push(":enabled", ":disabled"),
                    (h.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(":disabled").length &&
                      y.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    y.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.matches ||
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ue(function (e) {
                  (n.disconnectedMatch = m.call(e, "*")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", W);
                }),
              (y = y.length && new RegExp(y.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (x =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (D = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      r ||
                      (1 &
                        (r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!n.sortDetached && t.compareDocumentPosition(e) === r)
                        ? e === d || (e.ownerDocument === w && x(w, e))
                          ? -1
                          : t === d || (t.ownerDocument === w && x(w, t))
                          ? 1
                          : c
                          ? O(c, e) - O(c, t)
                          : 0
                        : 4 & r
                        ? -1
                        : 1)
                    );
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      i = e.parentNode,
                      o = t.parentNode,
                      a = [e],
                      s = [t];
                    if (!i || !o)
                      return e === d
                        ? -1
                        : t === d
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0;
                    if (i === o) return ce(e, t);
                    n = e;
                    while ((n = n.parentNode)) a.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r
                      ? ce(a[r], s[r])
                      : a[r] === w
                      ? -1
                      : s[r] === w
                      ? 1
                      : 0;
                  }),
              d)
            : d;
        }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector &&
            g &&
            !S[t + " "] &&
            (!v || !v.test(t)) &&
            (!y || !y.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (
          ((f = !n.detectDuplicates),
          (c = !n.sortStable && e.slice(0)),
          e.sort(D),
          f)
        ) {
          while ((t = e[o++])) t === e[o] && (i = r.push(o));
          while (i--) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      ((r = oe.selectors =
        {
          cacheLength: 50,
          createPseudo: se,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(Z, ee)),
                (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || oe.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && oe.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[6] && e[2];
              return V.CHILD.test(e[0])
                ? null
                : (e[3]
                    ? (e[2] = e[4] || e[5] || "")
                    : n &&
                      X.test(n) &&
                      (t = a(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(Z, ee).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = E[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                  E(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        ("undefined" != typeof e.getAttribute &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);
                return null == i
                  ? "!=" === t
                  : !t ||
                      ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.slice(-n.length) === n
                        : "~=" === t
                        ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                        : "|=" === t &&
                          (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                s = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p,
                      d,
                      h,
                      g = o !== a ? "nextSibling" : "previousSibling",
                      y = t.parentNode,
                      v = s && t.nodeName.toLowerCase(),
                      m = !u && !s,
                      x = !1;
                    if (y) {
                      if (o) {
                        while (g) {
                          p = t;
                          while ((p = p[g]))
                            if (
                              s
                                ? p.nodeName.toLowerCase() === v
                                : 1 === p.nodeType
                            )
                              return !1;
                          h = g = "only" === e && !h && "nextSibling";
                        }
                        return !0;
                      }
                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                        (x =
                          (d =
                            (l =
                              (c =
                                (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]) && l[2]),
                          (p = d && y.childNodes[d]);
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (1 === p.nodeType && ++x && p === t) {
                            c[e] = [T, d, x];
                            break;
                          }
                      } else if (
                        (m &&
                          (x = d =
                            (l =
                              (c =
                                (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] || [])[0] === T &&
                            l[1]),
                        !1 === x)
                      )
                        while (
                          (p = (++d && p && p[g]) || (x = d = 0) || h.pop())
                        )
                          if (
                            (s
                              ? p.nodeName.toLowerCase() === v
                              : 1 === p.nodeType) &&
                            ++x &&
                            (m &&
                              ((c =
                                (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[e] = [T, x]),
                            p === t)
                          )
                            break;
                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  oe.error("unsupported pseudo: " + e);
              return i[b]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? se(function (e, n) {
                        var r,
                          o = i(e, t),
                          a = o.length;
                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: se(function (e) {
              var t = [],
                n = [],
                r = s(e.replace(B, "$1"));
              return r[b]
                ? se(function (e, t, n, i) {
                    var o,
                      a = r(e, null, i, []),
                      s = e.length;
                    while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                  })
                : function (e, i, o) {
                    return (
                      (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                    );
                  };
            }),
            has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }),
            contains: se(function (e) {
              return (
                (e = e.replace(Z, ee)),
                function (t) {
                  return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                }
              );
            }),
            lang: se(function (e) {
              return (
                U.test(e || "") || oe.error("unsupported lang: " + e),
                (e = e.replace(Z, ee).toLowerCase()),
                function (t) {
                  var n;
                  do {
                    if (
                      (n = g
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                      );
                  } while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === d.activeElement &&
                (!d.hasFocus || d.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: de(!1),
            disabled: de(!0),
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return Y.test(e.nodeName);
            },
            input: function (e) {
              return G.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: he(function () {
              return [0];
            }),
            last: he(function (e, t) {
              return [t - 1];
            }),
            eq: he(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }),
            even: he(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e;
            }),
            odd: he(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e;
            }),
            lt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: he(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }).pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = fe(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
    function ye() {}
    (ye.prototype = r.filters = r.pseudos),
      (r.setFilters = new ye()),
      (a = oe.tokenize =
        function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          (s = e), (u = []), (l = r.preFilter);
          while (s) {
            (n && !(i = F.exec(s))) ||
              (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (n = !1),
              (i = _.exec(s)) &&
                ((n = i.shift()),
                o.push({ value: n, type: i[0].replace(B, " ") }),
                (s = s.slice(n.length)));
            for (a in r.filter)
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()),
                o.push({ value: n, type: a, matches: i }),
                (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        });
    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function me(e, t, n) {
      var r = t.dir,
        i = t.next,
        o = i || r,
        a = n && "parentNode" === o,
        s = C++;
      return t.first
        ? function (t, n, i) {
            while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              p = [T, s];
            if (u) {
              while ((t = t[r]))
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || a)
                  if (
                    ((f = t[b] || (t[b] = {})),
                    (c = f[t.uniqueID] || (f[t.uniqueID] = {})),
                    i && i === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((l = c[o]) && l[0] === T && l[1] === s)
                      return (p[2] = l[2]);
                    if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function xe(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
      return n;
    }
    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Te(e, t, n, r, i, o) {
      return (
        r && !r[b] && (r = Te(r)),
        i && !i[b] && (i = Te(i, o)),
        se(function (o, a, s, u) {
          var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!o && t) ? g : we(g, p, e, s, u),
            v = n ? (i || (o ? e : h || r) ? [] : a) : y;
          if ((n && n(y, v, s, u), r)) {
            (l = we(v, d)), r(l, [], s, u), (c = l.length);
            while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
          if (o) {
            if (i || e) {
              if (i) {
                (l = []), (c = v.length);
                while (c--) (f = v[c]) && l.push((y[c] = f));
                i(null, (v = []), l, u);
              }
              c = v.length;
              while (c--)
                (f = v[c]) &&
                  (l = i ? O(o, f) : p[c]) > -1 &&
                  (o[l] = !(a[l] = f));
            }
          } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
        })
      );
    }
    function Ce(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          a = r.relative[e[0].type],
          s = a || r.relative[" "],
          u = a ? 1 : 0,
          c = me(
            function (e) {
              return e === t;
            },
            s,
            !0
          ),
          f = me(
            function (e) {
              return O(t, e) > -1;
            },
            s,
            !0
          ),
          p = [
            function (e, n, r) {
              var i =
                (!a && (r || n !== l)) ||
                ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
              return (t = null), i;
            },
          ];
        u < o;
        u++
      )
        if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
        else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
            return Te(
              u > 1 && xe(p),
              u > 1 &&
                ve(
                  e
                    .slice(0, u - 1)
                    .concat({ value: " " === e[u - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              n,
              u < i && Ce(e.slice(u, i)),
              i < o && Ce((e = e.slice(i))),
              i < o && ve(e)
            );
          }
          p.push(n);
        }
      return xe(p);
    }
    function Ee(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        o = function (o, a, s, u, c) {
          var f,
            h,
            y,
            v = 0,
            m = "0",
            x = o && [],
            b = [],
            w = l,
            C = o || (i && r.find.TAG("*", c)),
            E = (T += null == w ? 1 : Math.random() || 0.1),
            k = C.length;
          for (
            c && (l = a === d || a || c);
            m !== k && null != (f = C[m]);
            m++
          ) {
            if (i && f) {
              (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
              while ((y = e[h++]))
                if (y(f, a || d, s)) {
                  u.push(f);
                  break;
                }
              c && (T = E);
            }
            n && ((f = !y && f) && v--, o && x.push(f));
          }
          if (((v += m), n && m !== v)) {
            h = 0;
            while ((y = t[h++])) y(x, b, a, s);
            if (o) {
              if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
              b = we(b);
            }
            L.apply(u, b),
              c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
          }
          return c && ((T = E), (l = w)), x;
        };
      return n ? se(o) : o;
    }
    return (
      (s = oe.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            o = S[e + " "];
          if (!o) {
            t || (t = a(e)), (n = t.length);
            while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
            (o = S(e, Ee(i, r))).selector = e;
          }
          return o;
        }),
      (u = oe.select =
        function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            o = V.needsContext.test(e) ? 0 : u.length;
            while (o--) {
              if (((l = u[o]), r.relative[(c = l.type)])) break;
              if (
                (f = r.find[c]) &&
                (i = f(
                  l.matches[0].replace(Z, ee),
                  (K.test(u[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ve(u))))
                  return L.apply(n, i), n;
                break;
              }
            }
          }
          return (
            (p || s(e, d))(
              i,
              t,
              !g,
              n,
              !t || (K.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (n.sortStable = b.split("").sort(D).join("") === b),
      (n.detectDuplicates = !!f),
      p(),
      (n.sortDetached = ue(function (e) {
        return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
      })),
      ue(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        le("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ue(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        le("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ue(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        le(P, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      oe
    );
  })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1)
          .length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : L.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(
            this,
            w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)
          ),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && w.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  });
  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  w.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return k(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return k(e, "parentNode", n);
      },
      next: function (e) {
        return P(e, "nextSibling");
      },
      prev: function (e) {
        return P(e, "previousSibling");
      },
      nextAll: function (e) {
        return k(e, "nextSibling");
      },
      prevAll: function (e) {
        return k(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return k(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return k(e, "previousSibling", n);
      },
      siblings: function (e) {
        return S((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return S(e.firstChild);
      },
      contents: function (e) {
        return N(e, "iframe")
          ? e.contentDocument
          : (N(e, "template") && (e = e.content || e),
            w.merge([], e.childNodes));
      },
    },
    function (e, t) {
      w.fn[e] = function (n, r) {
        var i = w.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = w.filter(r, i)),
          this.length > 1 &&
            (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    var t = {};
    return (
      w.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);
    var t,
      n,
      r,
      i,
      o = [],
      a = [],
      s = -1,
      u = function () {
        for (i = i || e.once, r = t = !0; a.length; s = -1) {
          n = a.shift();
          while (++s < o.length)
            !1 === o[s].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((s = o.length), (n = !1));
        }
        e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
      },
      l = {
        add: function () {
          return (
            o &&
              (n && !t && ((s = o.length - 1), a.push(n)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r)
                    ? (e.unique && l.has(r)) || o.push(r)
                    : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              n && !t && u()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              var n;
              while ((n = w.inArray(t, o, n)) > -1)
                o.splice(n, 1), n <= s && s--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return (i = a = []), (o = n = ""), this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return (i = a = []), n || t || (o = n = ""), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return (
            i ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || u()),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  };
  function I(e) {
    return e;
  }
  function W(e) {
    throw e;
  }
  function $(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  w.extend({
    Deferred: function (t) {
      var n = [
          [
            "notify",
            "progress",
            w.Callbacks("memory"),
            w.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            w.Callbacks("once memory"),
            w.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        r = "pending",
        i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return w
              .Deferred(function (t) {
                w.each(n, function (n, r) {
                  var i = g(e[r[4]]) && e[r[4]];
                  o[r[1]](function () {
                    var e = i && i.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[r[0] + "With"](this, i ? [e] : arguments);
                  });
                }),
                  (e = null);
              })
              .promise();
          },
          then: function (t, r, i) {
            var o = 0;
            function a(t, n, r, i) {
              return function () {
                var s = this,
                  u = arguments,
                  l = function () {
                    var e, l;
                    if (!(t < o)) {
                      if ((e = r.apply(s, u)) === n.promise())
                        throw new TypeError("Thenable self-resolution");
                      (l =
                        e &&
                        ("object" == typeof e || "function" == typeof e) &&
                        e.then),
                        g(l)
                          ? i
                            ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                            : (o++,
                              l.call(
                                e,
                                a(o, n, I, i),
                                a(o, n, W, i),
                                a(o, n, I, n.notifyWith)
                              ))
                          : (r !== I && ((s = void 0), (u = [e])),
                            (i || n.resolveWith)(s, u));
                    }
                  },
                  c = i
                    ? l
                    : function () {
                        try {
                          l();
                        } catch (e) {
                          w.Deferred.exceptionHook &&
                            w.Deferred.exceptionHook(e, c.stackTrace),
                            t + 1 >= o &&
                              (r !== W && ((s = void 0), (u = [e])),
                              n.rejectWith(s, u));
                        }
                      };
                t
                  ? c()
                  : (w.Deferred.getStackHook &&
                      (c.stackTrace = w.Deferred.getStackHook()),
                    e.setTimeout(c));
              };
            }
            return w
              .Deferred(function (e) {
                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)),
                  n[1][3].add(a(0, e, g(t) ? t : I)),
                  n[2][3].add(a(0, e, g(r) ? r : W));
              })
              .promise();
          },
          promise: function (e) {
            return null != e ? w.extend(e, i) : i;
          },
        },
        o = {};
      return (
        w.each(n, function (e, t) {
          var a = t[2],
            s = t[5];
          (i[t[1]] = a.add),
            s &&
              a.add(
                function () {
                  r = s;
                },
                n[3 - e][2].disable,
                n[3 - e][3].disable,
                n[0][2].lock,
                n[0][3].lock
              ),
            a.add(t[3].fire),
            (o[t[0]] = function () {
              return (
                o[t[0] + "With"](this === o ? void 0 : this, arguments), this
              );
            }),
            (o[t[0] + "With"] = a.fireWith);
        }),
        i.promise(o),
        t && t.call(o, o),
        o
      );
    },
    when: function (e) {
      var t = arguments.length,
        n = t,
        r = Array(n),
        i = o.call(arguments),
        a = w.Deferred(),
        s = function (e) {
          return function (n) {
            (r[e] = this),
              (i[e] = arguments.length > 1 ? o.call(arguments) : n),
              --t || a.resolveWith(r, i);
          };
        };
      if (
        t <= 1 &&
        ($(e, a.done(s(n)).resolve, a.reject, !t),
        "pending" === a.state() || g(i[n] && i[n].then))
      )
        return a.then();
      while (n--) $(i[n], s(n), a.reject);
      return a.promise();
    },
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      B.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var F = w.Deferred();
  (w.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0),
          (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = F.then);
  function _() {
    r.removeEventListener("DOMContentLoaded", _),
      e.removeEventListener("load", _),
      w.ready();
  }
  "complete" === r.readyState ||
  ("loading" !== r.readyState && !r.documentElement.doScroll)
    ? e.setTimeout(w.ready)
    : (r.addEventListener("DOMContentLoaded", _),
      e.addEventListener("load", _));
  var z = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) {
        i = !0;
        for (s in n) z(e, t, s, n[s], !0, o, a);
      } else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    X = /^-ms-/,
    U = /-([a-z])/g;
  function V(e, t) {
    return t.toUpperCase();
  }
  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }
  var Y = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Q() {
    this.expando = w.expando + Q.uid++;
  }
  (Q.uid = 1),
    (Q.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Y(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[G(t)] = n;
        else for (r in t) i[G(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][G(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(G)
              : (t = G(t)) in r
              ? [t]
              : t.match(M) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var J = new Q(),
    K = new Q(),
    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ee = /[A-Z]/g;
  function te(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Z.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = te(n);
        } catch (e) {}
        K.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function (e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function (e, t) {
      K.remove(e, t);
    },
    _data: function (e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function (e, t) {
      J.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
          ) {
            n = a.length;
            while (n--)
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = G(r.slice(5))), ne(o, r, i[r]));
            J.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              K.set(this, e);
            })
          : z(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) {
                  if (void 0 !== (n = K.get(o, e))) return n;
                  if (void 0 !== (n = ne(o, e))) return n;
                } else
                  this.each(function () {
                    K.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          K.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = J.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = J.access(e, t, w.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function () {
            w.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          J.get(e, n) ||
          J.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              J.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = J.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
    oe = ["Top", "Right", "Bottom", "Left"],
    ae = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          w.contains(e.ownerDocument, e) &&
          "none" === w.css(e, "display"))
      );
    },
    se = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      i = n.apply(e, r || []);
      for (o in t) e.style[o] = a[o];
      return i;
    };
  function ue(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        w.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var le = {};
  function ce(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = le[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = w.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (le[r] = i),
      i)
    );
  }
  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = J.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (i[o] = ce(r)))
          : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return fe(this, !0);
    },
    hide: function () {
      return fe(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i,
    ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (ge.optgroup = ge.option),
    (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td);
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
  }
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (
        ((l = w.contains(o.ownerDocument, o)),
        (a = ye(f.appendChild(o), "script")),
        l && ve(a),
        n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  !(function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
      t = r.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var be = r.documentElement,
    we = /^key/,
    Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Ce = /^([^.]*)(?:\.(.+)|)/;
  function Ee() {
    return !0;
  }
  function ke() {
    return !1;
  }
  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function De(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      "string" != typeof n && ((r = r || n), (n = void 0));
      for (s in t) De(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = ke;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.get(e);
      if (y) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && w.find.matchesSelector(be, i),
          n.guid || (n.guid = w.guid++),
          (u = y.events) || (u = y.events = {}),
          (a = y.handle) ||
            (a = y.handle =
              function (t) {
                return "undefined" != typeof w && w.event.triggered !== t.type
                  ? w.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
          (l = (t = (t || "").match(M) || [""]).length);
        while (l--)
          (d = g = (s = Ce.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                  (e.addEventListener && e.addEventListener(d, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = J.hasData(e) && J.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;
        while (l--)
          if (
            ((s = Ce.exec(t[l]) || []),
            (d = g = s[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = w.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                w.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t = w.event.fix(e),
        n,
        r,
        i,
        o,
        a,
        s,
        u = new Array(arguments.length),
        l = (J.get(this, "events") || {})[t.type] || [],
        c = w.event.special[t.type] || {};
      for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
      if (
        ((t.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, t))
      ) {
        (s = w.event.handlers.call(this, t, l)), (n = 0);
        while ((o = s[n++]) && !t.isPropagationStopped()) {
          (t.currentTarget = o.elem), (r = 0);
          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
            (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
              ((t.handleObj = a),
              (t.data = a.data),
              void 0 !==
                (i = (
                  (w.event.special[a.origType] || {}).handle || a.handler
                ).apply(o.elem, u)) &&
                !1 === (t.result = i) &&
                (t.preventDefault(), t.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? w(i, this).index(l) > -1
                  : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input"))
            return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ee
              : ke),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: ke,
      isPropagationStopped: ke,
      isImmediatePropagationStopped: ke,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ee),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ee),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ee),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && we.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && Te.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              o = e.handleObj;
            return (
              (i && (i === r || w.contains(r, i))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return De(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return De(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = ke),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ae = /<script|<style|<link/i,
    je = /checked\s*(?:[^=]|=\s*.checked.)/i,
    qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? w(e).children("tbody")[0] || e
      : e;
  }
  function He(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function Oe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        J.hasData(e) &&
        ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))
      ) {
        delete a.handle, (a.events = {});
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      }
      K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
    }
  }
  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      y = t[0],
      v = g(y);
    if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
      return e.each(function (i) {
        var o = e.eq(i);
        v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
      });
    if (
      p &&
      ((i = xe(t, e[0].ownerDocument, !1, e, r)),
      (o = i.firstChild),
      1 === i.childNodes.length && (i = o),
      o || r)
    ) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++)
        (l = i),
          f !== d &&
            ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))),
          n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
          (l = s[f]),
            he.test(l.type || "") &&
              !J.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(qe, ""), c, l));
    }
    return e;
  }
  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(ye(r)),
        r.parentNode &&
          (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s = e.cloneNode(!0),
        u = w.contains(e.ownerDocument, e);
      if (
        !(
          h.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          w.isXMLDoc(e)
        )
      )
        for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++)
          Me(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++)
            Pe(o[r], a[r]);
        else Pe(e, s);
      return (
        (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Y(n)) {
          if ((t = n[J.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[J.expando] = void 0;
          }
          n[K.expando] && (n[K.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Ie(this, e, !0);
      },
      remove: function (e) {
        return Ie(this, e);
      },
      text: function (e) {
        return z(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Re(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            Le(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Re(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = Le(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Re(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return z(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ae.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Re(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 &&
              (w.cleanData(ye(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              w(i[a])[t](n),
              s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
    $e = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    Be = new RegExp(oe.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          be.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  function Fe(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || $e(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          w.contains(e.ownerDocument, e) ||
          (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          We.test(a) &&
          Be.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  var ze = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ue = { position: "absolute", visibility: "hidden", display: "block" },
    Ve = { letterSpacing: "0", fontWeight: "400" },
    Ge = ["Webkit", "Moz", "ms"],
    Ye = r.createElement("div").style;
  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
      n = Ge.length;
    while (n--) if ((e = Ge[n] + t) in Ye) return e;
  }
  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }
  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)),
            "margin" !== n &&
              (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + oe[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + oe[a] + "Width", !0, i))
              : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
          )
        )),
      u
    );
  }
  function et(e, t, n) {
    var r = $e(e),
      i = Fe(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i ||
        (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) +
        Ze(e, t, n || (o ? "border" : "content"), a, r, i) +
        "px"
    );
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = G(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = typeof n) &&
          (i = ie.exec(n)) &&
          i[1] &&
          ((n = ue(e, t, i)), (o = "number")),
          null != n &&
            n === n &&
            ("number" === o &&
              (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = G(t);
      return (
        Xe.test(t) || (t = Je(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Fe(e, t, r)),
        "normal" === i && t in Ve && (i = Ve[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !ze.test(w.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? et(e, t, r)
              : se(e, Ue, function () {
                  return et(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  Ze(e, t, "border", !1, o) -
                  0.5
              )),
            s &&
              (i = ie.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((e.style[t] = n), (n = w.css(e, t))),
            Ke(e, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Fe(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              se(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            r < 4;
            r++
          )
            i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ke);
    }),
    w.fn.extend({
      css: function (e, t) {
        return z(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = $e(e), i = t.length; a < i; a++)
                o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    });
  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }
  (w.Tween = tt),
    (tt.prototype = {
      constructor: tt,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = tt.propHooks[this.prop];
        return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = tt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                w.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : tt.propHooks._default.set(this),
          this
        );
      },
    }),
    (tt.prototype.init.prototype = tt.prototype),
    (tt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (tt.propHooks.scrollTop = tt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = tt.prototype.init),
    (w.fx.step = {});
  var nt,
    rt,
    it = /^(?:toggle|show|hide)$/,
    ot = /queueHooks$/;
  function at() {
    rt &&
      (!1 === r.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(at)
        : e.setTimeout(at, w.fx.interval),
      w.fx.tick());
  }
  function st() {
    return (
      e.setTimeout(function () {
        nt = void 0;
      }),
      (nt = Date.now())
    );
  }
  function ut(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function lt(e, t, n) {
    for (
      var r,
        i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ct(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      p = this,
      d = {},
      h = e.style,
      g = e.nodeType && ae(e),
      y = J.get(e, "fxshow");
    n.queue ||
      (null == (a = w._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
        });
      }));
    for (r in t)
      if (((i = t[r]), it.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))
        ) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }
        d[r] = (y && y[r]) || w.style(e, r);
      }
    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = y && y.display) && (l = J.get(e, "display")),
        "none" === (c = w.css(e, "display")) &&
          (l
            ? (c = l)
            : (fe([e], !0),
              (l = e.style.display || l),
              (c = w.css(e, "display")),
              fe([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === w.css(e, "float") &&
          (u ||
            (p.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function () {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (u = !1);
      for (r in d)
        u ||
          (y
            ? "hidden" in y && (g = y.hidden)
            : (y = J.access(e, "fxshow", { display: l })),
          o && (y.hidden = !g),
          g && fe([e], !0),
          p.done(function () {
            g || fe([e]), J.remove(e, "fxshow");
            for (r in d) w.style(e, r, d[r]);
          })),
          (u = lt(g ? y[r] : 0, r, p)),
          r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
    }
  }
  function ft(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((r = G(n)),
        (i = t[r]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = w.cssHooks[r]) && "expand" in a)
      ) {
        (o = a.expand(o)), delete e[r];
        for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
      } else t[r] = i;
  }
  function pt(e, t, n) {
    var r,
      i,
      o = 0,
      a = pt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = nt || st(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: nt || st(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (ft(c, l.opts.specialEasing); o < a; o++)
      if ((r = pt.prefilters[o].call(l, e, c, l.opts)))
        return (
          g(r.stop) &&
            (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      w.map(c, lt, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(pt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ue(n.elem, e, ie.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (pt.tweeners[n] = pt.tweeners[n] || []),
          pt.tweeners[n].unshift(t);
    },
    prefilters: [ct],
    prefilter: function (e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds
              ? (r.duration = w.fx.speeds[r.duration])
              : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = pt(this, w.extend({}, e), o);
            (i || J.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = J.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != e && o[i].queue !== e) ||
                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = J.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                w.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(ut(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: ut("show"),
        slideUp: ut("hide"),
        slideToggle: ut("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (nt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (nt = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      rt || ((rt = !0), at());
    }),
    (w.fx.stop = function () {
      rt = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = w.fx ? w.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
      (e.type = "checkbox"),
        (h.checkOn = "" !== e.value),
        (h.optSelected = t.selected),
        ((e = r.createElement("input")).value = "t"),
        (e.type = "radio"),
        (h.radioValue = "t" === e.value);
    })();
  var dt,
    ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i =
                  w.attrHooks[t.toLowerCase()] ||
                  (w.expr.match.bool.test(t) ? dt : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (dt = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ht[t] || w.find.attr;
      ht[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return (
          r ||
            ((o = ht[a]),
            (ht[a] = i),
            (i = null != n(e, t, r) ? a : null),
            (ht[a] = o)),
          i
        );
      };
    });
  var gt = /^(?:input|select|textarea|button)$/i,
    yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function (e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) ||
              ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    );
  function vt(e) {
    return (e.match(M) || []).join(" ");
  }
  function mt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }
  w.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).addClass(e.call(this, t, mt(this)));
        });
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = 0;
      if (g(e))
        return this.each(function (t) {
          w(this).removeClass(e.call(this, t, mt(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length)
        while ((n = this[u++]))
          if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
            a = 0;
            while ((o = t[a++]))
              while (r.indexOf(" " + o + " ") > -1)
                r = r.replace(" " + o + " ", " ");
            i !== (s = vt(r)) && n.setAttribute("class", s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "string" === n || Array.isArray(e);
      return "boolean" == typeof t && r
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g(e)
        ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, mt(this), t), t);
          })
        : this.each(function () {
            var t, i, o, a;
            if (r) {
              (i = 0), (o = w(this)), (a = xt(e));
              while ((t = a[i++]))
                o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
            } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      var t,
        n,
        r = 0;
      t = " " + e + " ";
      while ((n = this[r++]))
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1)
          return !0;
      return !1;
    },
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = g(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : Array.isArray(i) &&
                    (i = w.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  w.valHooks[this.type] ||
                  w.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (t =
            w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
            "get" in t &&
            void 0 !== (n = t.get(i, "value"))
            ? n
            : "string" == typeof (n = i.value)
            ? n.replace(bt, "")
            : null == n
            ? ""
            : n;
      }
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : vt(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var wt = /^(?:focusinfocus|focusoutblur)$/,
    Tt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        v = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !wt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !y(i)) {
          for (
            l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            v.push(s), (u = s);
          u === (i.ownerDocument || r) &&
            v.push(u.defaultView || u.parentWindow || e);
        }
        a = 0;
        while ((s = v[a++]) && !t.isPropagationStopped())
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) &&
              p.apply(s, n),
            (p = c && s[c]) &&
              p.apply &&
              Y(s) &&
              ((t.result = p.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(v.pop(), n)) ||
            !Y(i) ||
            (c &&
              g(i[m]) &&
              !y(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, Tt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, Tt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t);
            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = J.access(r, t) - 1;
            i
              ? J.access(r, t, i)
              : (r.removeEventListener(e, n, !0), J.remove(r, t));
          },
        };
      });
  var Ct = e.location,
    Et = Date.now(),
    kt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        w.error("Invalid XML: " + t),
      n
    );
  };
  var St = /\[\]$/,
    Dt = /\r?\n/g,
    Nt = /^(?:submit|button|image|reset|file)$/i,
    At = /^(?:input|select|textarea|keygen)/i;
  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || St.test(e)
          ? r(e, i)
          : jt(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              At.test(this.nodeName) &&
              !Nt.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Dt, "\r\n") };
          })
          .get();
      },
    });
  var qt = /%20/g,
    Lt = /#.*$/,
    Ht = /([?&])_=[^&]*/,
    Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Mt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    It = {},
    Wt = {},
    $t = "*/".concat("*"),
    Bt = r.createElement("a");
  Bt.href = Ct.href;
  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        while ((r = o[i++]))
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function _t(e, t, n, r) {
    var i = {},
      o = e === Wt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l]
            ? o
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function zt(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  function Xt(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.contents,
      u = e.dataTypes;
    while ("*" === u[0])
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function Ut(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    o = c.shift();
    while (o)
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e["throws"]) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function (t, n) {
      "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = w.ajaxSetup({}, n),
        g = h.context || h,
        y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
        v = w.Deferred(),
        m = w.Callbacks("once memory"),
        x = h.statusCode || {},
        b = {},
        T = {},
        C = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s) {
                s = {};
                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
              }
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return (
              null == c &&
                ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e),
                (b[e] = t)),
              this
            );
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c) E.always(e[E.status]);
              else for (t in e) x[t] = [x[t], e[t]];
            return this;
          },
          abort: function (e) {
            var t = e || C;
            return i && i.abort(t), k(0, t), this;
          },
        };
      if (
        (v.promise(E),
        (h.url = ((t || h.url || Ct.href) + "").replace(
          Rt,
          Ct.protocol + "//"
        )),
        (h.type = n.method || n.type || h.method || h.type),
        (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
        null == h.crossDomain)
      ) {
        l = r.createElement("a");
        try {
          (l.href = h.url),
            (l.href = l.href),
            (h.crossDomain =
              Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (
        (h.data &&
          h.processData &&
          "string" != typeof h.data &&
          (h.data = w.param(h.data, h.traditional)),
        _t(It, h, n, E),
        c)
      )
        return E;
      (f = w.event && h.global) &&
        0 == w.active++ &&
        w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Mt.test(h.type)),
        (o = h.url.replace(Lt, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(qt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ht, "$1")),
              (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] &&
            E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
            : h.accepts["*"]
        );
      for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
        return E.abort();
      if (
        ((C = "abort"),
        m.add(h.complete),
        E.done(h.success),
        E.fail(h.error),
        (i = _t(Wt, h, n, E)))
      ) {
        if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c))
          return E;
        h.async &&
          h.timeout > 0 &&
          (u = e.setTimeout(function () {
            E.abort("timeout");
          }, h.timeout));
        try {
          (c = !1), i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");
      function k(t, n, r, s) {
        var l,
          p,
          d,
          b,
          T,
          C = n;
        c ||
          ((c = !0),
          u && e.clearTimeout(u),
          (i = void 0),
          (a = s || ""),
          (E.readyState = t > 0 ? 4 : 0),
          (l = (t >= 200 && t < 300) || 304 === t),
          r && (b = Xt(h, E, r)),
          (b = Ut(h, b, E, l)),
          l
            ? (h.ifModified &&
                ((T = E.getResponseHeader("Last-Modified")) &&
                  (w.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
              204 === t || "HEAD" === h.type
                ? (C = "nocontent")
                : 304 === t
                ? (C = "notmodified")
                : ((C = b.state), (p = b.data), (l = !(d = b.error))))
            : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
          (E.status = t),
          (E.statusText = (n || C) + ""),
          l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
          E.statusCode(x),
          (x = void 0),
          f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
          m.fireWith(g, [E, C]),
          f &&
            (y.trigger("ajaxComplete", [E, h]),
            --w.active || w.event.trigger("ajaxStop")));
      }
      return E;
    },
    getJSON: function (e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return w.get(e, void 0, t, "script");
    },
  }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(
            w.extend(
              { url: e, type: t, dataType: i, data: n, success: r },
              w.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Vt = { 0: 200, 1223: 204 },
    Gt = w.ajaxSettings.xhr();
  (h.cors = !!Gt && "withCredentials" in Gt),
    (h.ajax = Gt = !!Gt),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Gt && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
              t.crossDomain ||
                i["X-Requested-With"] ||
                (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i) s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Vt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
      }
    });
  var Yt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback =
            g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Qt, "$1" + i))
            : !1 !== t.jsonp &&
              (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument = (function () {
      var e = r.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (w.parseHTML = function (e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, a;
      return (
        t ||
          (h.createHTMLDocument
            ? (((i = (t =
                r.implementation.createHTMLDocument("")).createElement(
                "base"
              )).href = r.location.href),
              t.head.appendChild(i))
            : (t = r)),
        (o = A.exec(e)),
        (a = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = xe([e], t, a)),
            a && a.length && w(a).remove(),
            w.merge([], o.childNodes))
      );
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
        "static" === c && (e.style.position = "relative"),
          (s = f.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          (l =
            ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1)
            ? ((a = (r = f.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (p.top = t.top - s.top + a),
          null != t.left && (p.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, p) : f.css(p);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        if (r)
          return r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 };
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === w.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - w.css(r, "marginTop", !0),
            left: t.left - i.left - w.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === w.css(e, "position")) e = e.offsetParent;
          return e || be;
        });
      },
    }),
    w.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return z(
            this,
            function (e, r, i) {
              var o;
              if (
                (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
              )
                return o ? o[t] : e[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (e[r] = i);
            },
            e,
            r,
            arguments.length
          );
        };
      }
    ),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
        if (n)
          return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return z(
              this,
              function (t, n, i) {
                var o;
                return y(t)
                  ? 0 === r.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : void 0 === i
                  ? w.css(t, n, s)
                  : w.style(t, n, i, s);
              },
              t,
              a ? i : void 0,
              a
            );
          };
        }
      );
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          (i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }),
          (i.guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = y),
    (w.camelCase = G),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Jt = e.jQuery,
    Kt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});
